/* Синхронизация кабинета Кристины: прогресс и журнал ошибок.
   Секретные ключи и Telegram-токены не должны храниться в браузере.
   Синхронизация включается только после заполнения config.js. */
(()=>{'use strict';
const c=window.OGE_CONFIG?.cloud||{};
const enabled=Boolean(c.enabled&&/^https:\/\/[^/]+\.supabase\.co\/?$/.test(c.url||'')&&c.publishableKey);
let client=null,user=null,busy=false,errorText='',syncedAt='',syncTimer=null,pending=false,viewerCode='',verifiedDiagnosticAt='',lastVisitSync=0;
const status=()=>({enabled,connected:!!user,busy,email:user?.email||'',error:errorText,syncedAt,viewerCode,verifiedDiagnosticAt});
const emit=()=>window.dispatchEvent(new Event('oge-cloud-status'));
const bridge=()=>window.OGE_STATE_BRIDGE;
// Посещение фиксируется отдельным защищённым RPC только для авторизованного ученика.
// Открытие сайта не засчитывается как учебная работа.
async function markVisit(){
  if(!client||!user||busy||document.visibilityState==='hidden')return false;
  if(Date.now()-lastVisitSync<55*60*1000)return true;
  try{
    const {data,error}=await client.rpc('oge_mark_visit');
    if(error)throw error;
    if(data)lastVisitSync=Date.now();
    return !!data;
  }catch(e){console.warn('Не удалось отметить посещение в облаке:',e?.message||e);return false}
}

function loadSdk(){return new Promise((resolve,reject)=>{
  if(window.supabase?.createClient)return resolve();
  const script=document.createElement('script');
  script.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.58.0/dist/umd/supabase.min.js';
  script.onload=()=>window.supabase?.createClient?resolve():reject(Error('Библиотека не загрузилась'));
  script.onerror=()=>reject(Error('Не удалось загрузить библиотеку Supabase'));
  document.head.appendChild(script);
})}
async function init(){if(!enabled){emit();return}
  try{
    await loadSdk();
    client=window.supabase.createClient(c.url,c.publishableKey,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true,storageKey:'oge-student-auth-2027'}});
    client.auth.onAuthStateChange((_event,session)=>{
      user=session?.user||null;emit();
      // Не делаем запрос к Supabase прямо внутри callback onAuthStateChange.
      if(user)setTimeout(sync,0);
    });
    const {data,error}=await client.auth.getSession();if(error)throw error;
    user=data.session?.user||null;emit();if(user)await sync();
  }catch(e){errorText=e.message||'Ошибка соединения';emit()}
}
async function signIn(email,password,register=false){
  if(!client)throw Error('Облачное соединение не настроено');
  if(!email||!password||password.length<8)throw Error('Укажи почту и пароль от 8 символов');
  busy=true;emit();
  try{
    const result=register?await client.auth.signUp({email,password}):await client.auth.signInWithPassword({email,password});
    if(result.error)throw result.error;
    if(result.data?.session){user=result.data.user;return 'Успешный вход. Синхронизация запущена.'}
    return 'Если требуется подтверждение почты, проверь письмо и войди в кабинет.';
  }finally{busy=false;emit();if(user)setTimeout(sync,0)}
}
async function signOut(){if(!client)return;const {error}=await client.auth.signOut();if(error)throw error;user=null;syncedAt='';viewerCode='';lastVisitSync=0;emit()}
async function sync(){
  if(!client||!user||!bridge())return;
  if(busy){pending=true;return}
  busy=true;pending=false;emit();
  try{
    // Получаем свежие данные перед записью, чтобы совместить изменения устройств.
    const {data:remote,error:readError}=await client.from('oge_student_state').select('snapshot').eq('user_id',user.id).maybeSingle();
    if(readError)throw readError;
    const localBefore=bridge().read();
    // Preserve the original browser snapshot once before first cloud reconciliation.
    // This is a second safety copy, not a replacement for exporting JSON.
    const backupKey='kristina-oge-2027-before-cloud-v6';
    try{
      if(!localStorage.getItem(backupKey)){
        const raw=localStorage.getItem(window.OGE_CONFIG.storageKey);
        if(raw)localStorage.setItem(backupKey,raw);
      }
    }catch(_e){/* localStorage may be blocked; the explicit JSON export remains essential */}
    const merged=bridge().merge(localBefore,remote?.snapshot||null);
    bridge().apply(merged); // при вводе текста поле не перерисовывается
    const uploadSnapshot=bridge().read();
    const {error:writeError}=await client.from('oge_student_state').upsert({user_id:user.id,snapshot:uploadSnapshot,updated_at:new Date().toISOString()},{onConflict:'user_id'});
    if(writeError)throw writeError;
    const events=bridge().read().events||[];
    for(let i=0;i<events.length;i+=100){
      const rows=events.slice(i,i+100).filter(e=>e?.id&&e?.date&&e?.type).map(e=>({id:e.id,user_id:user.id,date:e.date,type:e.type,payload:e}));
      if(!rows.length)continue;
      const {error}=await client.from('oge_report_events').upsert(rows,{onConflict:'id',ignoreDuplicates:true});
      if(error)throw error;
    }
    const {data:confirmed,error:confirmError}=await client.from('oge_student_state')
      .select('snapshot,updated_at').eq('user_id',user.id).maybeSingle();
    if(confirmError)throw confirmError;
    if(!confirmed?.snapshot || confirmed.snapshot.studentId!==window.OGE_CONFIG.student.id)
      throw Error('Облачная запись не подтверждена');
    if(merged.diagnostic?.finishedAt && (confirmed.snapshot.diagnostic?.finishedAt!==merged.diagnostic.finishedAt || JSON.stringify(confirmed.snapshot.diagnostic?.result)!==JSON.stringify(merged.diagnostic.result)))
      throw Error('Результат диагностики в облаке не совпадает с результатом на сайте');
    verifiedDiagnosticAt=confirmed.snapshot.diagnostic?.finishedAt||'';
    errorText='';syncedAt=confirmed.updated_at||new Date().toISOString();emit();return true;
  }catch(e){errorText='Синхронизация не выполнена: '+(e?.message||'ошибка сети');emit();return false}
  finally{busy=false;emit();if(user&&!errorText)setTimeout(markVisit,0);if(pending){pending=false;schedule()}}
}
function schedule(){if(!enabled||!user)return;clearTimeout(syncTimer);syncTimer=setTimeout(sync,1500)}
window.addEventListener('oge-progress-saved',schedule);
window.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')markVisit()});
setInterval(()=>{if(document.visibilityState==='visible')markVisit()},20*60*1000);
async function claimStagedProgress(code){
  if(!client||!user)throw Error('Сначала войди в свой аккаунт');
  const cleaned=String(code||'').trim().toLowerCase();
  if(!/^[0-9a-f]{40}$/.test(cleaned))throw Error('Код переноса должен содержать 40 символов');
  // Одноразовый код проверяется и погашается на сервере; он НЕ хранится в файлах сайта.
  const {data,error}=await client.rpc('oge_claim_staged_progress',{p_code:cleaned});
  if(error)throw error;
  const ok=await sync();
  if(!ok)throw Error('Копия привязана к аккаунту, но синхронизация не подтверждена. Нажми «Синхронизировать» ещё раз.');
  return data;
}
async function createViewerCode(){
 if(!client||!user)throw Error('Сначала войди в аккаунт Кристины');
 await sync();
 if(errorText)throw Error(errorText);
 const {data,error}=await client.rpc('oge_create_view_code');
 if(error)throw error;
 viewerCode=data;emit();return data;
}
async function revokeViewers(){
 if(!client||!user)throw Error('Сначала войди в аккаунт');
 const {data,error}=await client.rpc('oge_revoke_viewers');
 if(error)throw error;viewerCode='';emit();return data;
}
async function journalList(){
 if(!client||!user)throw Error('Сначала войди в аккаунт Кристины');
 const {data,error}=await client.from('oge_journal_entries').select('entry_date,body,sentence_count,submitted_at,ai_feedback,updated_at')
 .eq('user_id',user.id).order('entry_date',{ascending:false}).limit(45);
 if(error)throw error;return data||[];
}
async function journalSave(text,submit=false){
 if(!client||!user)throw Error('Сначала войди в аккаунт Кристины');
 const {data,error}=await client.rpc('oge_save_diary',{p_body:text,p_submit:!!submit});
 if(error)throw error;return data;
}
async function journalReview(){
 if(!client||!user)throw Error('Сначала войди в аккаунт Кристины');
 const {data,error}=await client.functions.invoke('kristina-oge-diary-review',{body:{review_today:true}});
 if(error)throw Error(data?.error||error.message||'Ошибка связи с функцией проверки');
 if(data?.error)throw Error(data.error);return data?.review;
}
async function journalTelegramTest(){
 if(!client||!user)throw Error('Сначала войди в аккаунт Кристины');
 const {data,error}=await client.functions.invoke('kristina-oge-diary-reminder',{body:{mode:'test'}});
 if(error)throw Error(data?.error||error.message||'Функция Telegram ещё не активирована');
 if(data?.error)throw Error(data.error);return data;
}
window.OGE_CLOUD={status,signIn,signOut,sync,init,createViewerCode,revokeViewers,claimStagedProgress,journalList,journalSave,journalReview,journalTelegramTest};
// Из-за defer загрузка библиотеки завершается после app.js, где появляется bridge.
init();
})();
