// Сбор недельного и месячного отчётов для одного авторизованного ученика.
// Публикация: verify_jwt=false + обязательный X-Report-Secret.
// Токены доступны только серверной функции (Supabase Secrets).
import { createClient } from 'npm:@supabase/supabase-js@2.58.0';
import '../_shared/reports-core.js';

type EventItem = Record<string, unknown>;
type ReportCore = {
  weeklyReport(events: EventItem[], now: Date): {text:string; period:{key:string;start:string;end:string}},
  monthlyReport(events: EventItem[], now: Date): {text:string; period:{key:string;start:string;end:string;previous:{start:string}}},
};
const reports = (globalThis as typeof globalThis & {OGE_REPORTS_CORE:ReportCore}).OGE_REPORTS_CORE;
const json = (obj:unknown,status=200)=>new Response(JSON.stringify(obj),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'}});
const required=(name:string)=>{const val=Deno.env.get(name);if(!val)throw Error('Не настроена переменная '+name);return val};
const localParts=(date:Date)=>{
  const d=new Date(date.getTime()+5*3600000);
  return {year:d.getUTCFullYear(),month:d.getUTCMonth()+1,day:d.getUTCDate(),weekday:d.getUTCDay()};
};

Deno.serve(async(req)=>{
  if(req.method!=='POST')return json({error:'method_not_allowed'},405);
  const secret=Deno.env.get('REPORT_CRON_SECRET');
  if(!secret || req.headers.get('X-Report-Secret')!==secret)return json({error:'unauthorized'},401);
  try {
    const request=await req.json().catch(()=>({}));
    const kind=request.period;
    if(kind!=='weekly'&&kind!=='monthly')return json({error:'invalid_period'},400);
    const now=new Date(),loc=localParts(now);
    // Даже при ручном запуске без тестового режима нельзя отправить отчёт не в тот день.
    if(kind==='weekly'&&loc.weekday!==1)return json({error:'weekly_only_monday'},409);
    if(kind==='monthly'&&loc.day!==1)return json({error:'monthly_only_first'},409);
    if(now<new Date('2026-10-12T00:00:00+05:00') || now>=new Date('2027-05-04T00:00:00+05:00'))return json({skipped:'outside_study_program'});

    const sb=createClient(required('SUPABASE_URL'),required('SUPABASE_SERVICE_ROLE_KEY'),{auth:{persistSession:false,autoRefreshToken:false}});
    const userId=required('REPORT_USER_ID');
    if(!/^[0-9a-f-]{36}$/i.test(userId))throw Error('REPORT_USER_ID должен быть UUID учётной записи Кристины');
    const period=kind==='weekly'?reports.weeklyReport([],now).period:reports.monthlyReport([],now).period;
    const start=kind==='weekly'?period.start:(period as {previous:{start:string}}).previous.start;
    let events:EventItem[]=[];
    for(let skip=0;skip<10000;skip+=1000){
      const {data,error}=await sb.from('oge_report_events').select('payload').eq('user_id',userId).gte('date',start).lt('date',period.end).order('date',{ascending:true}).range(skip,skip+999);
      if(error)throw error;
      const rows=data||[];events.push(...rows.map(x=>x.payload as EventItem));
      if(rows.length<1000)break;
      if(skip>=9000)throw Error('Слишком много записей. Требуется пагинация более 10000.');
    }
    const report=kind==='weekly'?reports.weeklyReport(events,now):reports.monthlyReport(events,now);
    if(request.dry_run===true)return json({dry_run:true,kind,period:report.period,preview:report.text,events:events.length});

    // claim препятствует повторному отправлению одного и того же отчёта.
    const {error:claimError}=await sb.from('oge_report_deliveries').insert({user_id:userId,report_kind:kind,period_key:report.period.key});
    if(claimError){if(claimError.code==='23505')return json({skipped:'already_claimed',kind,period:report.period.key});throw claimError}
    try {
      const token=required('TELEGRAM_BOT_TOKEN');
      const chat=required('REPORT_CHAT_ID');  // ID определяется через Bot API, НЕ по ссылке t.me/c
      const thread=required('REPORT_THREAD_ID'); // ID темы подтверждается через message_thread_id
      if(!/^-?\d+$/.test(chat)||!/^\d+$/.test(thread))throw Error('Неверный chat_id или message_thread_id');
      const result=await fetch('https://api.telegram.org/bot'+token+'/sendMessage',{
        method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({chat_id:chat,message_thread_id:Number(thread),text:report.text,disable_web_page_preview:true})
      });
      const payload=await result.json();
      if(!result.ok||!payload.ok)throw Error('Telegram отказал в доставке: '+String(payload.description||result.status));
      const {error:markError}=await sb.from('oge_report_deliveries').update({sent_at:new Date().toISOString(),telegram_message_id:payload.result?.message_id||null}).eq('user_id',userId).eq('report_kind',kind).eq('period_key',report.period.key);
      if(markError)throw markError;
      return json({sent:true,kind,period:report.period.key,telegram_message_id:payload.result?.message_id});
    }catch(error){
      // Сохраняем claim даже при ошибке. Ответ Telegram мог потеряться после
      // фактической доставки; автоматический повтор может создать дубли.
      // Прежде чем разрешать повтор вручную, проверьте логи Telegram и Supabase.
      throw error;
    }
  }catch(e){return json({error:(e as Error).message||'internal_error'},500)}
});
