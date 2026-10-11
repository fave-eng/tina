const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const path=require('path');
const original=fs.readFileSync(path.join(__dirname,'../supabase/functions/kristina-oge-reports/index.ts'),'utf8').replace(/^import .*;\s*$/m,'');
const BASE=new Date('2026-10-19T05:00:00.000Z');
class SimDate extends Date{constructor(...args){super(...(args.length?args:[BASE.toISOString()]))}static now(){return BASE.getTime()}}
const claims=new Set(),messages=[];
const sampleEvents=[{id:'demo1',type:'lesson',date:'2026-10-13T14:00:00.000Z',passed:true,week:1,session:1,topic:'Present Simple',items:[{id:'1',domain:'Грамматика',topic:'Present Simple',correct:false},{id:'2',domain:'Словарь',topic:'Family',correct:true}]}];
const mockDb={from(table){const state={table};const q={select(){return q},eq(k,v){state[k]=v;return q},gte(){return q},lt(){return q},order(){return q},range(){return q},contains(){return q},limit(){return q},maybeSingle(){return Promise.resolve({data:null,error:null})},insert(row){const key=JSON.stringify([row.user_id,row.report_kind,row.period_key]);if(claims.has(key))return Promise.resolve({error:{code:'23505'}});claims.add(key);return Promise.resolve({error:null})},update(){return q},then(resolve){if(table==='oge_student_state')resolve({data:[{user_id:'a-user',snapshot:{studentId:'kristina-oge-2027',events:sampleEvents}}],error:null});else if(table==='oge_report_events')resolve({data:[],error:null});else resolve({data:[],error:null})}};return q}};
let handler;
const ctx={Date:SimDate,Intl,console,Response,JSON,Map,Set,Error,fetch:async(url,opts)=>{messages.push({url,text:JSON.parse(opts.body).text});return {ok:true,json:async()=>({ok:true,result:{message_id:12}})}},Deno:{env:{get(name){return {OGE_REPORT_CRON_SECRET:'secret',OGE_REPORT_CHAT_ID:'-100123',OGE_REPORT_THREAD_ID:'3',OGE_TELEGRAM_BOT_TOKEN:'fake',SUPABASE_URL:'https://example.supabase.co',SUPABASE_SERVICE_ROLE_KEY:'fake'}[name]}},serve(fn){handler=fn}},createClient:()=>mockDb,globalThis:null};ctx.globalThis=ctx;
vm.runInNewContext(original,ctx,{timeout:1500});
const call=async(body,secret='secret')=>{const req={method:'POST',headers:{get(k){return k==='X-Report-Secret'?secret:null}},json:async()=>body};const result=await handler(req);return {status:result.status,...JSON.parse(await result.text())}};
(async()=>{
 const unauthorized=await call({test_telegram:true},'bad');assert.equal(unauthorized.status,401);assert.equal(messages.length,0);
 const preview=await call({period:'weekly',dry_run:true});assert.equal(preview.dry_run,true);assert(preview.preview.includes('Present Simple'));assert.equal(messages.length,0);
 const test=await call({test_telegram:true});assert.equal(test.test_sent,true);assert.equal(messages.length,1);
 const sent=await call({period:'weekly'});assert.equal(sent.sent,true);assert.equal(messages.length,2);
 const retry=await call({period:'weekly'});assert.equal(retry.skipped,'already_claimed');assert.equal(messages.length,2);
 console.log('OK: 401 security, dry run, Telegram test, weekly send, duplicate guard');
})().catch(e=>{console.error(e);process.exitCode=1});
