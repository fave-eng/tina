/* ОГЭ 2027: личный дневник Кристины. Записи доступны только в её аккаунте.
   Telegram получает только напоминания, не содержание дневника. */
(()=>{'use strict';
const KEY='kristina-oge-2027-journal-local-v1';
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const day=()=>new Date(Date.now()+5*3600000).toISOString().slice(0,10);
const sentences=text=>(String(text||'').trim().split(/[.!?]+\s*/).filter(s=>/[A-Za-zА-Яа-яЁё]/.test(s)).length);
let local={};try{local=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(_e){local={}};
let entries=[],loading=false,loaded=false,sending=false,revising=false,testSending=false,error='',success='';
let currentDay=day();
const cloud=()=>window.OGE_CLOUD;
const connected=()=>!!cloud()?.status?.().connected;
const current=()=>entries.find(x=>x.entry_date===day())||null;
const todaysText=()=>local[day()]?.text??current()?.body??'';
const saveLocal=text=>{local[day()]={text,updatedAt:new Date().toISOString()};try{localStorage.setItem(KEY,JSON.stringify(local))}catch(_e){/* offline storage unavailable */}};
const buttonsDisabled=()=>sending||revising||!connected();
const banner=()=>{if(error)return `<div class="notice warning" role="status">${escape(error)}</div>`;
if(success)return `<div class="notice success" role="status">${escape(success)}</div>`;
return ''};
function reviewHtml(row){
const report=row?.ai_feedback;if(!report||report.checkedBody!==row.body)return '<p class="small text-muted">Проверка ожидается. После отправки двух предложений можно нажать «Проверить английский».</p>';
const items=Array.isArray(report.issues)?report.issues:[];
return `<div class="diary-review"><h3>Разбор записи</h3><p>${escape(report.overallRu)}</p><div class="task-box"><strong>Предложенный исправленный вариант</strong><p>${escape(report.correctedText)}</p></div>${items.length?items.map(i=>`<div class="diary-correction"><strong>${escape(i.category||'Исправление')}</strong><p><span class="text-muted">Было:</span> ${escape(i.original)}</p><p><span class="text-muted">Лучше:</span> ${escape(i.correction)}</p><p>${escape(i.explanation)}</p></div>`).join(''):'<div class="notice success">Ошибок, требующих исправления, не обнаружено.</div>'}<p class="small text-muted">Автоматическая проверка может ошибаться; спорные варианты можно обсудить с преподавателем.</p></div>`;
}
function page(){
const n=sentences(todaysText());const done=!!current()?.submitted_at&&current()?.body===todaysText();
return `<section class="diary-page"><div class="row wrap justify-between"><div><span class="eyebrow">Ежедневная практика</span><h1>Мой дневник</h1><p class="text-muted">Пиши на английском о чём угодно. Достаточно двух предложений каждый день. Можно писать больше.</p></div><span class="pill ${done?'green':'gray'}">${done?'Запись за сегодня готова':'Сегодня · '+day()}</span></div>
<div class="grid g-2 diary-grid"><article class="card"><h2>Что произошло сегодня?</h2><p class="small text-muted">Можно написать о школе, семье, фильме, настроении или планах. Не обязательно делиться личными подробностями.</p>
<label class="diary-label" for="journal-text">Твои предложения</label>
<textarea id="journal-text" class="field diary-editor" placeholder="Today I ...\nI also ..." spellcheck="true">${escape(todaysText())}</textarea>
<div class="row justify-between wrap" style="margin-top:10px"><span id="journal-sentence-count" class="pill ${n>=2?'green':'gray'}">${n} из 2 предложений</span><span class="small text-muted" id="journal-local-status">Черновик сохраняется в этом браузере</span></div>
<div class="row wrap" style="margin-top:16px"><button type="button" class="btn btn-outline" data-diary="draft" ${buttonsDisabled()?'disabled':''}>Сохранить черновик в облако</button><button type="button" class="btn btn-primary" data-diary="submit" ${buttonsDisabled()||n<2?'disabled':''}>${done?'Обновить запись':'Сохранить запись за сегодня'}</button></div>
<p class="small text-muted" style="margin-top:12px">${connected()?'Аккаунт подключён. После нажатия «Сохранить запись» сайт проверяет сохранение в Supabase.':'Чтобы сохранить дневник в облаке, войди в аккаунт Кристины в «Настройках».'}</p>
${banner()}</article>
<article class="card"><h2>Проверка английского</h2><p>После отправки записи сайт автоматически проверит английский: предложит исправления и объяснит ошибки на русском. При необходимости проверку можно повторить.</p><div class="row wrap" style="margin:16px 0"><button class="btn btn-primary" data-diary="review" ${!done||buttonsDisabled()?'disabled':''}>${revising?'Проверяем…':'Проверить английский'}</button></div><div id="journal-review-box">${reviewHtml(current())}</div><div class="notice" style="margin-top:14px">Для автоматического разбора используется внешний языковой AI-сервис. Текст отправляется ему после отправки записи на проверку. Не записывай сюда адреса, пароли или другие конфиденциальные данные.</div></article></div>
<article class="card" style="margin-top:18px"><div class="section-head"><h2>История записей</h2><span class="pill gray">${entries.filter(e=>e.submitted_at).length} записей</span></div><div class="diary-history">${entries.filter(x=>x.submitted_at).slice(0,30).map(x=>`<details class="diary-history-item"><summary>${escape(x.entry_date)} · ${x.sentence_count} предложения(й) ${x.ai_feedback?.checkedBody===x.body?'· Проверено':'· Ожидает проверки'}</summary><div class="diary-history-text">${escape(x.body)}</div>${reviewHtml(x)}</details>`).join('')||'<p class="small text-muted">Здесь появятся записи по дням после первой отправки.</p>'}</div></article>
<article class="card" style="margin-top:18px"><h2>Telegram · напоминание на 21:00</h2><p>Ежедневное напоминание отправляется сервером в вашу тему Telegram, даже когда сайт закрыт. Текст дневника в Telegram не передаётся.</p><p class="small text-muted">До настройки секретов и расписания отправка не активна. Проверь доставку пробным сообщением.</p><button class="btn btn-outline" type="button" data-diary="test-telegram" ${buttonsDisabled()?'disabled':''}>${testSending?'Проверяем…':'Отправить тестовое уведомление'}</button><p class="small text-muted" id="diary-telegram-status">Тест должен вернуть ID отправленного Telegram-сообщения; затем проверь, что оно появилось в нужной теме.</p></article></section>`;
}
async function refresh(){
 if(!connected()){loaded=false;return}
 if(loading)return;loading=true;
 try{
  const result=await cloud().journalList();entries=result;loaded=true;error='';
  const d=day(),r=current();if(r){const lc=local[d];if(!lc||Date.parse(lc.updatedAt||0)<Date.parse(r.updated_at||0))saveLocal(r.body)}
 }catch(e){error='Не удалось загрузить историю: '+e.message}
 finally{loading=false;if(location.hash.startsWith('#/дневник')&&document.activeElement?.id!=='journal-text')redraw()}
}
function redraw(){const root=document.querySelector('#diary-inner');if(root)root.innerHTML=page()}
function mount(){
 const root=document.querySelector('#diary-inner');if(!root)return;
 if(currentDay!==day()){currentDay=day();loaded=false;success='';error=''}
 root.innerHTML=page();if(connected()&&!loaded)refresh();
}
let timer=null;
document.addEventListener('input',e=>{
 if(e.target.id!=='journal-text')return;
 const text=e.target.value;saveLocal(text);success='';
 const n=sentences(text),badge=document.getElementById('journal-sentence-count');if(badge){badge.textContent=n+' из 2 предложений';badge.className='pill '+(n>=2?'green':'gray')}
 const b=document.querySelector('[data-diary="submit"]');if(b)b.disabled=buttonsDisabled()||n<2;
 const rev=document.querySelector('[data-diary="review"]');if(rev)rev.disabled=true;
 clearTimeout(timer);timer=setTimeout(async()=>{
  if(!connected()||!document.getElementById('journal-text'))return;
  const currentText=document.getElementById('journal-text').value;
  const at=local[day()]?.text;
  if(at!==currentText)return;
  try{await cloud().journalSave(currentText,false);const status=document.getElementById('journal-local-status');if(status)status.textContent='Черновик синхронизирован в облако'}catch(_e){const status=document.getElementById('journal-local-status');if(status)status.textContent='Черновик пока только в браузере'}
 },1900);
});
document.addEventListener('click',async e=>{
 const button=e.target.closest('[data-diary]');if(!button)return;e.preventDefault();
 const mode=button.dataset.diary;if(buttonsDisabled())return;
 if(mode==='draft'||mode==='submit'){
   const value=document.getElementById('journal-text')?.value||'';if(mode==='submit'&&sentences(value)<2){error='Нужно написать хотя бы 2 предложения';redraw();return}
   sending=true;button.disabled=true;
   try{
     const result=await cloud().journalSave(value,mode==='submit');
     success=mode==='submit'?'Дневник за сегодня сохранён в облаке.':'Черновик сохранён в облаке.';
     error='';await refresh();
     if(!result?.submitted&&mode==='submit')throw Error('Облако не подтвердило отправку записи');
     if(mode==='submit'){
       try{
         const review=await cloud().journalReview();
         if(review){success='Запись сохранена и автоматически проверена.';await refresh()}
       }catch(reviewError){error='Запись сохранена, но автоматическая проверка пока недоступна: '+reviewError.message}
     }
   }
   catch(ex){error='Не удалось сохранить запись: '+ex.message;success=''}finally{sending=false;redraw()}return;
 }
 if(mode==='review'){
   revising=true;button.disabled=true;
   try{const result=await cloud().journalReview();if(!result)throw Error('Проверка не вернула результат');error='';success='Проверка сохранена.';await refresh()}
   catch(ex){error='Проверка пока недоступна: '+ex.message;success=''}finally{revising=false;redraw()}return;
 }
 if(mode==='test-telegram'){
   testSending=true;button.disabled=true;
   try{const result=await cloud().journalTelegramTest();const id=result?.message_id;if(!result?.delivered||!id)throw Error('Telegram не подтвердил отправку');success='Telegram подтвердил отправку тестового сообщения №'+id+'. Проверь его в вашей теме.';error=''}
   catch(ex){error='Тест Telegram не прошёл: '+ex.message;success=''}finally{testSending=false;redraw()}
 }
});
window.addEventListener('oge-cloud-status',()=>{if(location.hash.startsWith('#/дневник')&&document.activeElement?.id!=='journal-text'){if(connected()&&!loaded)refresh()}});
window.OGE_DIARY={page:()=>'<div id="diary-inner"></div>',mount,sentenceCount:sentences};
})();
