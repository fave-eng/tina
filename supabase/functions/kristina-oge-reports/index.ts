/* Weekly and monthly reports. Cron secret is required, no client token accepted.
   Sources: oge_student_state + oge_report_events, no passwords or diary text. */
import {createClient} from 'npm:@supabase/supabase-js@2.58.0';
import '../_shared/reports-core.js';
declare global { var OGE_REPORTS_CORE: any; }
const cors={'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'authorization,apikey,content-type,x-report-secret','Access-Control-Allow-Methods':'POST, OPTIONS'};
const output=(body:any,status=200)=>new Response(JSON.stringify(body),{status,headers:{...cors,'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'}});
const env=(k:string)=>Deno.env.get(k)?.trim()||'';
const core=()=>globalThis.OGE_REPORTS_CORE;
async function telegram(text:string){const token=env('OGE_TELEGRAM_BOT_TOKEN'),chat=env('OGE_REPORT_CHAT_ID'),thread=env('OGE_REPORT_THREAD_ID');if(!token)throw Error('Telegram bot token is missing');if(!/^-?\d+$/.test(chat)||!/^[1-9]\d*$/.test(thread))throw Error('Invalid Telegram chat/thread');const resp=await fetch('https://api.telegram.org/bot'+token+'/sendMessage',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:chat,message_thread_id:Number(thread),text,disable_web_page_preview:true})});const obj=await resp.json().catch(()=>({}));if(!resp.ok||obj?.ok!==true)throw Error('Telegram delivery failed: '+String(obj?.description||resp.status));return obj.result?.message_id||null}
async function profile(db:any){const id=env('OGE_REPORT_STUDENT_USER_ID');if(id){const {data,error}=await db.from('oge_student_state').select('user_id,snapshot').eq('user_id',id).maybeSingle();if(error)throw error;if(data?.snapshot?.studentId!=='kristina-oge-2027')throw Error('Student identity mismatch');return data}const {data,error}=await db.from('oge_student_state').select('user_id,snapshot').contains('snapshot',{studentId:'kristina-oge-2027'}).limit(2);if(error)throw error;if(data?.length!==1)throw Error('Expected exactly one Kristina profile');return data[0]}
Deno.serve(async(req:Request)=>{
 if(req.method==='OPTIONS')return new Response(null,{status:204,headers:cors});
 if(req.method!=='POST')return output({error:'method_not_allowed'},405);
 const secret=env('OGE_REPORT_CRON_SECRET');
 if(!secret||req.headers.get('X-Report-Secret')!==secret)return output({error:'unauthorized'},401);
 try{
  const body=await req.json().catch(()=>({}));
  if(body.test_telegram===true){const id=await telegram('ОГЭ 2027 · Проверка доставки недельного/месячного отчёта.');return output({test_sent:true,message_id:id})}
  const period=body.period;
  if(!['weekly','monthly'].includes(period))return output({error:'unsupported_period'},400);
  if(!core()?.weeklyReport||!core()?.monthlyReport)throw Error('Shared reports-core is missing');
  const url=env('SUPABASE_URL'),service=env('SUPABASE_SERVICE_ROLE_KEY');if(!url||!service)throw Error('Supabase server credentials not configured');
  const db=createClient(url,service,{auth:{persistSession:false,autoRefreshToken:false}});
  const student=await profile(db);
  const {data:stored,error:eventsError}=await db.from('oge_report_events').select('id,payload').eq('user_id',student.user_id);
  if(eventsError)throw eventsError;
  // Combine snapshot and history by stable event ID; this never writes to student progress.
  const events=new Map<string,any>();
  for(const event of student.snapshot?.events||[])if(event?.id)events.set(event.id,event);
  for(const row of stored||[])if(row?.id&&row?.payload?.type)events.set(row.id,row.payload);
  const report=period==='weekly'?core().weeklyReport([...events.values()],new Date()):core().monthlyReport([...events.values()],new Date());
  if(body.dry_run===true)return output({dry_run:true,period,period_key:report.period.key,preview:report.text});
  // Only explicit live send may claim the period; dry_run never claims or sends.
  if(body.run!==true)return output({error:'run_required'},400);
  const claim={user_id:student.user_id,report_kind:period,period_key:report.period.key};
  const {error:claimed}=await db.from('oge_report_deliveries').insert(claim);
  if(claimed){if(claimed.code==='23505')return output({skipped:'already_claimed',period,period_key:report.period.key});throw claimed}
  try{const messageId=await telegram(report.text);
   const {error:saved}=await db.from('oge_report_deliveries').update({sent_at:new Date().toISOString(),telegram_message_id:messageId}).eq('user_id',student.user_id).eq('report_kind',period).eq('period_key',report.period.key);
   if(saved)throw saved;
   return output({sent:true,period,period_key:report.period.key,message_id:messageId});
  }catch(e){await db.from('oge_report_deliveries').update({last_error:String((e as Error)?.message||e).slice(0,260)}).eq('user_id',student.user_id).eq('report_kind',period).eq('period_key',report.period.key);throw e}
 }catch(e){return output({error:String((e as Error)?.message||e).slice(0,280)},500)}
});
