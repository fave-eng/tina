/* Only reminders are sent to Telegram, never private diary entries.
 * Cron: 16:00 UTC = 21:00 Ufa; header x-report-secret required.
 * A test can also be triggered by the authenticated Kristina account.
 */
import {createClient} from 'npm:@supabase/supabase-js@2.58.0';
const cors={'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'authorization,apikey,content-type,x-report-secret','Access-Control-Allow-Methods':'POST, OPTIONS','Content-Type':'application/json'};
const reply=(obj:unknown,status=200)=>new Response(JSON.stringify(obj),{status,headers:cors});
const env=(k:string)=>Deno.env.get(k)?.trim()||'';
async function sendTelegram(text:string){
 const token=env('OGE_TELEGRAM_BOT_TOKEN')||env('TELEGRAM_BOT_TOKEN');
 const chat=env('OGE_REPORT_CHAT_ID'),thread=env('OGE_REPORT_THREAD_ID');
 if(!token)throw Error('Telegram bot token is not configured');
 if(!/^-?\d+$/.test(chat)||!/^[1-9]\d*$/.test(thread))throw Error('Set verified OGE_REPORT_CHAT_ID and OGE_REPORT_THREAD_ID');
 const response=await fetch('https://api.telegram.org/bot'+token+'/sendMessage',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:chat,message_thread_id:Number(thread),text,disable_web_page_preview:true})});
 const data=await response.json().catch(()=>({}));
 if(!response.ok||data.ok!==true)throw Error('Telegram delivery not confirmed: '+String(data.description||response.status));
 return data.result?.message_id;
}
Deno.serve(async(req:Request)=>{
 if(req.method==='OPTIONS')return new Response(null,{headers:cors});
 if(req.method!=='POST')return reply({error:'method_not_allowed'},405);
 try{
  const body=await req.json().catch(()=>({}));
  const sb=createClient(env('SUPABASE_URL'),env('SUPABASE_SERVICE_ROLE_KEY'),{auth:{persistSession:false,autoRefreshToken:false}});
  if(body?.mode==='test'){
   const bearer=(req.headers.get('authorization')||'').replace(/^Bearer\s+/i,'').trim();
   if(!bearer)return reply({error:'Войди в аккаунт Кристины'},401);
   const {data:{user},error:e}=await sb.auth.getUser(bearer);
   if(e||!user)return reply({error:'Недействительный вход'},401);
   const {data:p}=await sb.from('oge_student_state').select('snapshot').eq('user_id',user.id).maybeSingle();
   if(p?.snapshot?.studentId!=='kristina-oge-2027')return reply({error:'Нужен аккаунт Кристины'},403);
   const {data:old}=await sb.from('oge_journal_test_audit').select('tested_at').eq('user_id',user.id).maybeSingle();
   if(old&&Date.now()-Date.parse(old.tested_at)<15*60*1000)return reply({error:'Тест можно повторить через 15 минут'},429);
   const messageId=await sendTelegram('ТЕСТ · Напоминание о дневнике ОГЭ 2027.\nПроверка доставки в нужную тему Telegram.\nВремя ежедневного напоминания: 21:00 по Уфе.');
   await sb.from('oge_journal_test_audit').upsert({user_id:user.id,tested_at:new Date().toISOString()});
   return reply({delivered:true,message_id:messageId});
  }
  if(body?.mode!=='scheduled')return reply({error:'unknown_mode'},400);
  const secret=env('OGE_REPORT_CRON_SECRET');
  if(!secret||req.headers.get('x-report-secret')!==secret)return reply({error:'unauthorized'},401);
  const local=new Date(Date.now()+5*3600000),day=local.toISOString().slice(0,10);
  if(local.getUTCHours()!==21||local.getUTCMinutes()>15)return reply({skipped:'not_21_00_ufa'});
  const {data:profiles,error:profileError}=await sb.from('oge_student_state').select('user_id,snapshot').contains('snapshot',{studentId:'kristina-oge-2027'}).limit(2);
  if(profileError)throw profileError;
  if(profiles?.length!==1)return reply({error:'Expected exactly one active Kristina profile'},409);
  const student=profiles[0];
  const {data:entry,error:entryError}=await sb.from('oge_journal_entries').select('sentence_count,submitted_at').eq('user_id',student.user_id).eq('entry_date',day).maybeSingle();
  if(entryError)throw entryError;
  const {error:claimErr}=await sb.from('oge_journal_reminder_deliveries').insert({reminder_date:day});
  if(claimErr){if(claimErr.code==='23505')return reply({skipped:'already_attempted_today'});throw claimErr;}
  const finished=!!entry?.submitted_at&&entry.sentence_count>=2;
  const message=finished
   ?'ОГЭ 2027 · Дневник Кристины\nСегодня запись уже сделана. Молодец! Продолжай писать хотя бы 2 предложения каждый день.'
   :'ОГЭ 2027 · Кристина, время дневника!\n\nНапиши минимум 2 предложения на английском о чём угодно.\nОткрой сайт → «Мой дневник» и сохрани запись.\nВремя: 21:00 (Уфа).';
  try{
   const messageId=await sendTelegram(message);
   const {error:writeErr}=await sb.from('oge_journal_reminder_deliveries').update({sent_at:new Date().toISOString(),telegram_message_id:messageId}).eq('reminder_date',day);
   if(writeErr)throw writeErr;
   return reply({delivered:true,day,completed:finished,message_id:messageId});
  }catch(e){await sb.from('oge_journal_reminder_deliveries').update({last_error:String((e as Error)?.message||e).slice(0,280)}).eq('reminder_date',day);throw e;}
 }catch(e){return reply({error:String((e as Error)?.message||e).slice(0,280)},500);}
});
