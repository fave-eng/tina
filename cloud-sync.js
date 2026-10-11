/* Синхронизация кабинета Кристины: прогресс и журнал ошибок.
   Секретные ключи и Telegram-токены не должны храниться в браузере.
   Синхронизация включается только после заполнения config.js. */
(()=>{'use strict';
const c=window.OGE_CONFIG?.cloud||{};
const enabled=Boolean(c.enabled&&/^https:\/\/[^/]+\.supabase\.co\/?$/.test(c.url||'')&&c.publishableKey);
let client=null,user=null,busy=false,errorText='',syncedAt='',syncTimer=null,pending=false,viewerCode='';
const status=()=>({enabled,connected:!!user,busy,email:user?.email||'',error:errorText,syncedAt,viewerCode});
const emit=()=>window.dispatchEvent(new Event('oge-cloud-status'));
const bridge=()=>window.OGE_STATE_BRIDGE;
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
async function signOut(){if(!client)return;const {error}=await client.auth.signOut();if(error)throw error;user=null;syncedAt='';viewerCode='';emit()}
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
    bridge().apply(merged); // обновляем кабинет без повторного события синхронизации
    const {error:writeError}=await client.from('oge_student_state').upsert({user_id:user.id,snapshot:bridge().read(),updated_at:new Date().toISOString()},{onConflict:'user_id'});
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
    if(!confirmed.snapshot.diagnostic?.finishedAt && merged.diagnostic?.finishedAt)
      throw Error('Результат диагностики отсутствует в облачной копии');
    errorText='';syncedAt=confirmed.updated_at||new Date().toISOString();emit();
  }catch(e){errorText='Синхронизация не выполнена: '+(e?.message||'ошибка сети');emit()}
  finally{busy=false;emit();if(pending){pending=false;schedule()}}
}
function schedule(){if(!enabled||!user)return;clearTimeout(syncTimer);syncTimer=setTimeout(sync,1500)}
window.addEventListener('oge-progress-saved',schedule);
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
window.OGE_CLOUD={status,signIn,signOut,sync,init,createViewerCode,revokeViewers};
// Из-за defer загрузка библиотеки завершается после app.js, где появляется bridge.
init();
})();
