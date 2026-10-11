// ОГЭ 2027: отслеживание 4 дней без посещения и отставания по 3 учебным дням/неделю.
// Серверная функция. Требует X-Report-Secret; не вызывается браузером ученика.
import { createClient } from 'npm:@supabase/supabase-js@2.58.0';
const OFFSET = 5 * 3600 * 1000; // Уфа = UTC+05 круглый год
const DAY = 86400000;
const START = '2026-10-12';
const LAST = '2027-05-03'; // последний отчёт за неделю, завершившуюся 02.05
const json=(value,status=200)=>new Response(JSON.stringify(value),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'}});
const env=(key)=>{const v=Deno.env.get(key)?.trim();if(!v)throw Error('Отсутствует серверная переменная '+key);return v};
const localDay=(date)=>new Date(new Date(date).getTime()+OFFSET).toISOString().slice(0,10);
const parseDay=(s)=>Date.parse(s+'T00:00:00.000Z');
const weekday=(date)=>new Date(new Date(date).getTime()+OFFSET).getUTCDay();
const minusDays=(day,num)=>new Date(parseDay(day)-num*DAY).toISOString().slice(0,10);
const checkedTypes=new Set(['lesson','grammar','practice','adaptive','verb','diagnostic',
 'reading','reading-heading','reading-vocab','reading-word','reading-check','reading-vocabulary','reading-headings','word-practice']);
function learningDays(snapshot,from,to){
  const days=new Set(),vocabCount=new Map();
  for(const e of Array.isArray(snapshot?.events)?snapshot.events:[]){
    if(!e||typeof e.date!=='string'||Number.isNaN(Date.parse(e.date)))continue;
    const d=localDay(e.date);if(d<from||d>=to)continue;
    if(checkedTypes.has(e.type))days.add(d);
    if(e.type==='vocab')vocabCount.set(d,(vocabCount.get(d)||0)+1);
  }
  for(const d of Object.values(snapshot?.weekStudyDays||{}).flat()){
    if(typeof d==='string'&&d>=from&&d<to)days.add(d);
  }
  for(const [d,n] of vocabCount)if(n>=5)days.add(d);
  return days.size;
}
function completedSessions(snapshot,completedWeeks){
  const done=new Set();
  for(const [id,v] of Object.entries(snapshot?.sessions||{})){
    if(v?.passed!==true)continue;
    const m=/^w(\d+)-s([012])(?:-v\d+)?$/.exec(id);
    if(m && Number(m[1])<completedWeeks)done.add(m[1]+'-'+m[2]);
  }
  return done.size;
}
export function buildAlerts(snapshot,lastSeen,now=new Date()){
  const today=localDay(now);
  if(today<START||today>LAST||!lastSeen||Number.isNaN(Date.parse(lastSeen)))return [];
  const alerts=[];
  const elapsed=new Date(now).getTime()-Date.parse(lastSeen);
  if(elapsed>=4*DAY){
    const last=localDay(lastSeen);
    if(last>=START)alerts.push({kind:'inactive_4d',key:last,text:
      `⏰ ОГЭ 2027 · КРИСТИНА · НЕТ ПОСЕЩЕНИЙ\n\n`+
      `Кристина не заходила на учебный сайт 4 дня или дольше.\n`+
      `Последнее подтверждённое посещение: ${last} (Уфа).\n`+
      `Это сигнал проверить, всё ли в порядке и нужна ли помощь с планом.\n\n`+
      `Открытие сайта не приравнивается к выполненному занятию.`});
  }
  // Итоги завершённой недели: только в понедельник после 10:00 по Уфе.
  const shifted=new Date(new Date(now).getTime()+OFFSET);
  if(weekday(now)===1 && shifted.getUTCHours()>=10){
    const completedWeeks=Math.min(29,Math.floor((parseDay(today)-parseDay(START))/ (7*DAY)));
    if(completedWeeks>0){
      const lastMonday=minusDays(today,7);
      const days=learningDays(snapshot,lastMonday,today);
      const done=completedSessions(snapshot,completedWeeks);
      const expected=3*completedWeeks;
      if(days<3||done<expected){
        const missing=Math.max(0,expected-done);
        alerts.push({kind:'behind_plan',key:lastMonday,text:
          `📅 ОГЭ 2027 · КРИСТИНА · ОТСТАВАНИЕ ОТ ПЛАНА\n\n`+
          `За неделю ${lastMonday} — ${minusDays(today,1)}:\n`+
          `Учебных дней: ${days} из 3 (цель — минимум 3).\n`+
          `Зачтено занятий с начала программы: ${done} из ${expected} по плану.\n`+
          `Невыполненных запланированных занятий: ${missing}.\n\n`+
          `Рекомендация: распределить пропущенные задания на ближайшие дни без перегрузки.\n`+
          `Дедлайн подготовки: 1 мая 2027 года.`});
      }
    }
  }
  return alerts;
}
async function telegram(text){
  const chat=env('OGE_REPORT_CHAT_ID'),thread=env('OGE_REPORT_THREAD_ID');
  if(!/^-?\d+$/.test(chat)||!/^[1-9]\d*$/.test(thread))throw Error('Нужно подтвердить числовые chat_id и message_thread_id');
  const r=await fetch('https://api.telegram.org/bot'+env('OGE_TELEGRAM_BOT_TOKEN')+'/sendMessage',{
    method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:chat,message_thread_id:Number(thread),text,disable_web_page_preview:true})
  });
  const body=await r.json().catch(()=>({}));
  if(!r.ok||!body.ok)throw Error('Ошибка Telegram: '+String(body.description||r.status));
  return body.result?.message_id||null;
}
async function getStudent(sb){
  const forced=Deno.env.get('OGE_REPORT_STUDENT_USER_ID')?.trim();
  if(forced){
    if(!/^[0-9a-f-]{36}$/i.test(forced))throw Error('Некорректный UUID ученика');
    const {data,error}=await sb.from('oge_student_state').select('user_id,snapshot').eq('user_id',forced).maybeSingle();
    if(error)throw error;
    if(!data||data.snapshot?.studentId!=='kristina-oge-2027')throw Error('Указан другой ученик');
    return data;
  }
  const {data,error}=await sb.from('oge_student_state').select('user_id,snapshot')
    .contains('snapshot',{studentId:'kristina-oge-2027'}).limit(2);
  if(error)throw error;
  if(data?.length!==1)throw Error('Ожидается ровно один аккаунт Кристины; проверьте OGE_REPORT_STUDENT_USER_ID');
  return data[0];
}
Deno.serve(async(request)=>{
  if(request.method!=='POST')return json({error:'method_not_allowed'},405);
  const expected=Deno.env.get('OGE_REPORT_CRON_SECRET');
  if(!expected||request.headers.get('X-Report-Secret')!==expected)return json({error:'unauthorized'},401);
  try{
    const body=await request.json().catch(()=>({}));
    if(body.test_telegram===true){
      const messageId=await telegram('Проверка: оповещения по плану подготовки Кристины к ОГЭ 2027. Тестовое сообщение.');
      return json({test_sent:true,message_id:messageId});
    }
    const sb=createClient(env('SUPABASE_URL'),env('SUPABASE_SERVICE_ROLE_KEY'),
      {auth:{autoRefreshToken:false,persistSession:false}});
    const student=await getStudent(sb);
    const {data:presence,error:presenceError}=await sb.from('oge_student_presence')
      .select('last_seen_at').eq('user_id',student.user_id).maybeSingle();
    if(presenceError)throw presenceError;
    const alerts=buildAlerts(student.snapshot,presence?.last_seen_at||null);
    if(body.dry_run===true)return json({dry_run:true,has_visit:!!presence,alerts});
    if(body.run!==true)return json({error:'run_required'},400);
    const output=[];
    for(const a of alerts){
      const key={user_id:student.user_id,alert_kind:a.kind,period_key:a.key};
      const {error:claimError}=await sb.from('oge_alert_deliveries').insert(key);
      if(claimError){
        if(claimError.code==='23505'){output.push({kind:a.kind,skipped:'already_claimed'});continue;}
        throw claimError;
      }
      try{
        const messageId=await telegram(a.text);
        const {error:saveError}=await sb.from('oge_alert_deliveries')
          .update({sent_at:new Date().toISOString(),telegram_message_id:messageId})
          .eq('user_id',student.user_id).eq('alert_kind',a.kind).eq('period_key',a.key);
        if(saveError)throw saveError;
        output.push({kind:a.kind,sent:true,message_id:messageId});
      }catch(e){
        await sb.from('oge_alert_deliveries').update({last_error:String(e?.message||e).slice(0,300)})
          .eq('user_id',student.user_id).eq('alert_kind',a.kind).eq('period_key',a.key);
        throw e; // повтор не автоматический: неизвестно, получил ли Telegram сообщение
      }
    }
    return json({checked:true,alerts:output});
  }catch(e){return json({error:String(e?.message||e)},500)}
});
