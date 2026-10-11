(()=>{'use strict';
const c=window.OGE_CONFIG?.cloud||{},$=s=>document.querySelector(s);
const escape=s=>String(s??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const show=(sel,yes)=>$(sel)?.classList.toggle('hidden',!yes);
const info=msg=>{$('#status').textContent=msg||''};
const fmtDate=iso=>iso?new Date(iso).toLocaleString('ru-RU',{dateStyle:'medium',timeStyle:'short'}):'—';
const percent=(a,b)=>b?Math.round(a/b*100):0;
const stat=(name,value,desc='')=>`<div class="stat"><span>${escape(name)}</span><strong>${escape(value)}</strong><small>${escape(desc)}</small></div>`;
const row=(left,right)=>`<div class="data-row"><strong>${escape(left)}</strong><span>${escape(right)}</span></div>`;
let supa,user,studentId;
function loadSdk(){return new Promise((resolve,reject)=>{if(window.supabase?.createClient)return resolve();const script=document.createElement('script');script.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.58.0/dist/umd/supabase.min.js';script.onload=()=>window.supabase?.createClient?resolve():reject(Error('Не удалось загрузить библиотеку'));script.onerror=()=>reject(Error('Нет подключения к библиотеке Supabase'));document.head.appendChild(script)})}
function renderAuth(){show('#login',!user);show('#invite',!!user);show('#report',false)}
async function authAction(register){const email=$('#email').value.trim(),password=$('#password').value;if(!email||password.length<8){info('Введи почту и пароль не короче 8 символов');return}try{info('Проверяем аккаунт…');const r=register?await supa.auth.signUp({email,password}):await supa.auth.signInWithPassword({email,password});if(r.error)throw r.error;if(!r.data?.session){user=null;renderAuth();info('Если регистрация требует подтверждения, проверь почту, подтверди адрес и затем нажми «Войти».');return}user=r.data.session.user;info('');renderAuth();await load()}catch(e){info('Ошибка входа: '+e.message)}}
async function load(){if(!user)return;info('Загружаем результаты…');try{
 const {data:links,error:linkError}=await supa.from('oge_student_viewers').select('student_user_id').eq('viewer_user_id',user.id);
 if(linkError)throw linkError;
 if(!links?.length){studentId=null;info('Пока не подключено. Попроси Кристину создать код в её кабинете, затем введи его ниже.');show('#report',false);return}
 studentId=links[0].student_user_id;
 const {data,error}=await supa.from('oge_student_state').select('snapshot,updated_at').eq('user_id',studentId).maybeSingle();
 if(error)throw error;
 if(!data){info('Прогресс ещё не загружен. Кристине нужно открыть свой кабинет и синхронизировать данные.');show('#report',false);return}
 info('');show('#report',true);renderReport(data.snapshot,data.updated_at);
 }catch(e){info('Не удалось прочитать результаты: '+e.message)}}
function renderReport(s,updated){
 if(!s||s.studentId!=='kristina-oge-2027'){info('Содержимое прогресса не соответствует кабинету Кристины');show('#report',false);return}
 $('#lastSync').textContent='Последнее сохранение: '+fmtDate(updated);
 const sessions=Object.values(s.sessions||{}),passed=sessions.filter(x=>x.passed),days=[...new Set(Object.values(s.weekStudyDays||{}).flat())];
 const words=Object.values(s.vocab||{}).filter(x=>x==='known').length,grammar=Object.values(s.grammar||{}).filter(x=>x?.done===true).length;
 const d=s.diagnostic||{},dr=d.result; const score=dr?percent(dr.correct,dr.total)+'%':'нет результата';
 $('#stats').innerHTML=stat('Диагностика',score,dr?.level||'пока не завершена')+stat('Зачтено занятий',passed.length,'из 87')+stat('Изучено слов',words,'отмечены как освоенные')+stat('Учебных дней',days.length,'за весь период');
 const breakdown=dr?.areas?Object.entries(dr.areas).map(([name,v])=>row(name,`${v.correct}/${v.total} · ${percent(v.correct,v.total)}%`)).join(''):'';
 $('#diagnostic').innerHTML=`<h2>Стартовая диагностика</h2><p>${escape(d.finishedAt?'Пройдена: '+fmtDate(d.finishedAt):'Пока не завершена')}</p>${breakdown||'<p>Результаты появятся, когда Кристина завершит тест и синхронизирует сайт.</p>'}`;
 const weeks=Object.entries(s.weekStudyDays||{}).sort((a,b)=>a[0].localeCompare(b[0]));
 const doneWeeks=weeks.filter(([week,days])=>[0,1,2].every(i=>s.sessions?.[week+'-s'+i]?.passed)&&(days?.length||0)>=3).length;
 $('#weeks').innerHTML=`<h2>Недельный план</h2><p>Полностью выполнено ${doneWeeks} из 29 недель</p><div class="progress"><span style="width:${Math.min(100,100*doneWeeks/29)}%"></span></div>${weeks.length?weeks.slice(-8).reverse().map(([week,days])=>row('Неделя '+(week.startsWith('w')?Number(week.slice(1))+1:week),(days?.length||0)+'/3 учебных дня')).join(''):'<p>Учебных дней пока нет</p>'}`;
 const events=(s.events||[]).filter(x=>x?.date).slice().sort((a,b)=>b.date.localeCompare(a.date));
 const latest=events.slice(0,300),byDomain=new Map(),badTopics=new Map();
 latest.forEach(e=>{(e.items||[]).forEach(item=>{const name=item.domain||'Другое';const k=byDomain.get(name)||{right:0,total:0};k.total++;if(item.correct)k.right++;else{const topic=item.topic||e.topic||'Без темы';badTopics.set(topic,(badTopics.get(topic)||0)+1)}byDomain.set(name,k)})});
 const grammarTopics=(window.OGE_PROGRAM?.grammarGroups||[]).flatMap(g=>g.topics||[]);
 const learnedGrammar=Object.entries(s.grammar||{}).filter(([key,v])=>v?.done).map(([key])=>grammarTopics.find(t=>t.id===key)?.title||key);
 $('#topics').innerHTML=`<h2>Освоенная грамматика</h2>${learnedGrammar.length?learnedGrammar.slice(-12).map(t=>row(t,'изучена')).join(''):'<p>Пока нет отмеченных тем</p>'}<h2 style="margin-top:22px">Результаты по разделам</h2>${byDomain.size?[...byDomain.entries()].map(([n,v])=>row(n,`${v.right}/${v.total} · ${percent(v.right,v.total)}%`)).join(''):'<p>Проверенных упражнений пока нет</p>'}`;
 const reporting=window.OGE_REPORTS_CORE;
 if(reporting){
  const weekly=reporting.weeklyReport(s.events||[]),monthly=reporting.monthlyReport(s.events||[]);
  $('#weeklyReport').textContent=weekly.text;
  $('#monthlyReport').textContent=monthly.text;
 }
 $('#errors').innerHTML=`<h2>Частые ошибки</h2><p>Темы на основе последних ${latest.length} проверок. Учитываются только задания с зафиксированными ответами.</p>${badTopics.size?[...badTopics].sort((a,b)=>b[1]-a[1]).slice(0,12).map(([n,c])=>row(n,c+' ошибок')).join(''):'<p>Ошибки пока не зафиксированы или нет завершённых упражнений</p>'}`;
}
async function claim(){const code=$('#inviteCode').value.trim().toLowerCase();if(!/^[0-9a-f]{32}$/.test(code)){info('Проверь код: он должен содержать 32 символа');return}try{info('Подключаем доступ…');const {error}=await supa.rpc('oge_claim_view_code',{p_code:code});if(error)throw error;$('#inviteCode').value='';await load()}catch(e){info('Не удалось подключить: '+e.message)}}
async function init(){if(!c.enabled||!c.url||!c.publishableKey){info('Облако не настроено');return}try{await loadSdk();supa=window.supabase.createClient(c.url,c.publishableKey,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true,storageKey:'oge-viewer-auth-2027'}});const {data,error}=await supa.auth.getSession();if(error)throw error;user=data.session?.user||null;renderAuth();if(user)await load();supa.auth.onAuthStateChange((_type,session)=>{const changed=user?.id!==session?.user?.id;user=session?.user||null;if(changed){renderAuth();if(user)setTimeout(load,0)}})}catch(e){info('Не удалось подключиться к Supabase: '+e.message)}}
$('#signIn').addEventListener('click',()=>authAction(false));$('#signUp').addEventListener('click',()=>authAction(true));$('#claim').addEventListener('click',claim);$('#refresh').addEventListener('click',load);$('#refreshReport').addEventListener('click',load);$('#logOut').addEventListener('click',async()=>{if(supa){await supa.auth.signOut();user=null;renderAuth();info('Вы вышли из аккаунта')}});
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&user)load()});
setInterval(()=>{if(user&&!document.hidden)load()},120000);
init();
})();
