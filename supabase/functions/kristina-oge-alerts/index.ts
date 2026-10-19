/* Restored from deployed kristina-oge-alerts semantics, with explicit cron auth.
 * This file is not deployed automatically. */
import {createClient} from 'npm:@supabase/supabase-js@2.58.0';
const OFFSET=5*3600*1000,DAY=86400000,START='2026-10-12',LAST='2027-05-03';
const cors={'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'authorization,apikey,content-type,x-client-info,x-report-secret','Access-Control-Allow-Methods':'POST, OPTIONS'};
const json=(x:unknown,status=200)=>new Response(JSON.stringify(x),{status,headers:{...cors,'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'}});
const env=(n:string)=>{const v=Deno.env.get(n)?.trim();if(!v)throw Error('Missing secret '+n);return v};
const localDay=(d:Date|string)=>new Date(new Date(d).getTime()+OFFSET).toISOString().slice(0,10);
const parseDay=(s:string)=>Date.parse(s+'T00:00:00Z');
const minusDays=(day:string,n:number)=>new Date(parseDay(day)-n*DAY).toISOString().slice(0,10);
const checked=new Set(['lesson','grammar','practice','adaptive','verb','diagnostic','reading','reading-heading','reading-vocab','reading-word','reading-check','reading-vocabulary','reading-headings','word-practice']);
function studyDays(s:any,from:string,to:string){const days=new Set<string>(),vocabs=new Map<string,number>();for(const e of Array.isArray(s?.events)?s.events:[]){if(!e||typeof e.date!=='string'||Number.isNaN(Date.parse(e.date)))continue;const d=localDay(e.date);if(d<from||d>=to)continue;if(checked.has(e.type))days.add(d);if(e.type==='vocab')vocabs.set(d,(vocabs.get(d)||0)+1)}for(const d of Object.values(s?.weekStudyDays||{}).flat()){if(typeof d==='string'&&d>=from&&d<to)days.add(d)}for(const [d,n] of vocabs)if(n>=5)days.add(d);return days.size}
function completed(s:any,weeks:number){const done=new Set<string>();for(const [id,v] of Object.entries(s?.sessions||{})){if((v as any)?.passed!==true)continue;const m=/^w(\d+)-s([012])(?:-v\d+)?$/.exec(id);if(m&&Number(m[1])<weeks)done.add(m[1]+'-'+m[2])}return done.size}
export function buildAlerts(snapshot:any,lastSeen:string|null,now=new Date()){
 const today=localDay(now);if(today<START||today>LAST||!lastSeen||Number.isNaN(Date.parse(lastSeen)))return [];
 const alerts:any[]=[],elapsed=new Date(now).getTime()-Date.parse(lastSeen);
 if(elapsed>=4*DAY){const last=localDay(lastSeen);if(last>=START)alerts.push({kind:'inactive_4d',key:last,text:'ОГЭ 2027 · КРИСТИНА · НЕТ ПОСЕЩЕНИЙ\nПоследнее подтверждённое посещение: '+last+' (Уфа). Более четырёх дней не было входа в учебный сайт.'})}
 const shifted=new Date(new Date(now).getTime()+OFFSET);
 if(shifted.getUTCDay()===1&&shifted.getUTCHours()>=10){const weeks=Math.min(29,Math.floor((parseDay(today)-parseDay(START))/(7*DAY)));if(weeks>0){const prev=minusDays(today,7),days=studyDays(snapshot,prev,today),done=completed(snapshot,weeks),expected=3*weeks;
  if(days<3||done<expected)alerts.push({kind:'behind_plan',key:prev,text:'ОГЭ 2027 · КРИСТИНА · ОТСТАВАНИЕ ОТ ПЛАНА\nЗа неделю '+prev+' — '+minusDays(today,1)+':\nУчебных дней: '+days+' из 3.\nЗачтено занятий с начала программы: '+done+' из '+expected+' по плану.\nНевыполненных занятий: '+Math.max(0,expected-done)+'.\nЦель — три учебных дня в неделю; для зачёта недели на сайте обязательны три занятия и письмо.'})}}
 return alerts
}
async function telegram(message:string){const chat=env('OGE_REPORT_CHAT_ID'),thread=env('OGE_REPORT_THREAD_ID');if(!/^-?\d+$/.test(chat)||!/^[1-9]\d*$/.test(thread))throw Error('Invalid Telegram chat or thread ID');const resp=await fetch('https://api.telegram.org/bot'+env('OGE_TELEGRAM_BOT_TOKEN')+'/sendMessage',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:chat,message_thread_id:Number(thread),text:message,disable_web_page_preview:true})});const data=await resp.json().catch(()=>({}));if(!resp.ok||!data.ok)throw Error('Telegram: '+String(data.description||resp.status));return data.result?.message_id||null}
async function student(sb:any){const forced=Deno.env.get('OGE_REPORT_STUDENT_USER_ID')?.trim();if(forced){if(!/^[0-9a-f-]{36}$/i.test(forced))throw Error('Invalid student UUID');const {data,error}=await sb.from('oge_student_state').select('user_id,snapshot').eq('user_id',forced).maybeSingle();if(error)throw error;if(!data||data.snapshot?.studentId!=='kristina-oge-2027')throw Error('Wrong student');return data}const {data,error}=await sb.from('oge_student_state').select('user_id,snapshot').contains('snapshot',{studentId:'kristina-oge-2027'}).limit(2);if(error)throw error;if(data?.length!==1)throw Error('Expected exactly one Kristina profile');return data[0]}
Deno.serve(async(req:Request)=>{if(req.method==='OPTIONS')return new Response(null,{status:204,headers:cors});if(req.method!=='POST')return json({error:'method_not_allowed'},405);const secret=Deno.env.get('OGE_REPORT_CRON_SECRET');if(!secret||req.headers.get('X-Report-Secret')!==secret)return json({error:'unauthorized'},401);
 try{const body=await req.json().catch(()=>({}));if(body.test_telegram===true){const id=await telegram('ОГЭ 2027: тест уведомлений Кристины.');return json({test_sent:true,message_id:id})}
 const sb=createClient(env('SUPABASE_URL'),env('SUPABASE_SERVICE_ROLE_KEY'),{auth:{autoRefreshToken:false,persistSession:false}}),profile=await student(sb);
 const {data:presence,error:presenceErr}=await sb.from('oge_student_presence').select('last_seen_at').eq('user_id',profile.user_id).maybeSingle();if(presenceErr)throw presenceErr;
 const alerts=buildAlerts(profile.snapshot,presence?.last_seen_at||null);
 if(body.dry_run===true)return json({dry_run:true,has_visit:!!presence,alerts});
 if(body.run!==true)return json({error:'run_required'},400);
 const output:any[]=[];for(const a of alerts){const {error:claimErr}=await sb.from('oge_alert_deliveries').insert({user_id:profile.user_id,alert_kind:a.kind,period_key:a.key});if(claimErr){if(claimErr.code==='23505'){output.push({kind:a.kind,skipped:'already_claimed'});continue}throw claimErr}
 try{const id=await telegram(a.text);const {error:saveErr}=await sb.from('oge_alert_deliveries').update({sent_at:new Date().toISOString(),telegram_message_id:id}).eq('user_id',profile.user_id).eq('alert_kind',a.kind).eq('period_key',a.key);if(saveErr)throw saveErr;output.push({kind:a.kind,sent:true,message_id:id})}
 catch(e){await sb.from('oge_alert_deliveries').update({last_error:String((e as Error)?.message||e).slice(0,300)}).eq('user_id',profile.user_id).eq('alert_kind',a.kind).eq('period_key',a.key);throw e}}
 return json({checked:true,alerts:output})}
 catch(e){return json({error:String((e as Error)?.message||e).slice(0,280)},500)}});
