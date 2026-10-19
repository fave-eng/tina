/* Authored exam-style practice; NOT reproduced from an official FIPI variant. */
(()=>{'use strict';
const forms=[
{title:'Школьный сад',g:[
['Last September our school ___ a small garden.','CREATE','created','Last September означает Past Simple: create → created.'],
['At first, only six students ___ in the project.','TAKE','took','Завершённый факт в прошлом: take → took.'],
['Now the garden ___ bigger every month.','GROW','grows','Регулярное действие в настоящем: grows.'],
['My best friend Anna ___ in the garden every Friday.','WORK','works','Привычка + she = works.'],
['Today she ___ young trees with our teacher.','PLANT','is planting','Today в значении прямо сейчас: is planting.'],
['We ___ the first vegetables already.','PICK','have picked','Результат к настоящему: have already picked.'],
['Yesterday our classmates ___ the plants after lessons.','WATER','watered','Yesterday → Past Simple: watered.'],
['Next Saturday we ___ a garden party for our neighbours.','HAVE','are going to have||will have','Есть запланированное мероприятие: are going to have; will have также возможно при принятии решения.'],
['I think the party ___ a great success.','BE','will be','Прогноз с think: will be.']],
w:[
['The project teaches us to be more ___.','RESPONSIBILITY','responsible','После be more требуется прилагательное responsible.'],
['At first, some children had no ___ of gardening.','KNOW','knowledge','После no нужно существительное knowledge.'],
['Our teacher gives very ___ advice.','HELP','helpful','Перед advice нужно прилагательное helpful.'],
['The garden makes our school much more ___.','BEAUTY','beautiful','После more нужно прилагательное beautiful.'],
['We hope to ___ our outdoor classroom next year.','WIDE','widen','После to нужна форма глагола widen.'],
['The school is proud of our ___.','ACHIEVE','achievement','После our требуется существительное achievement.']]
},
{title:'Новая библиотека',g:[
['Last week our town ___ a new public library.','OPEN','opened','Last week → Past Simple.'],
['My sister and I ___ it on the first day.','VISIT','visited','Посещение завершилось в прошлом.'],
['There ___ hundreds of books in its main hall.','BE','are','Hundreds of books — множественное число: are.'],
['Every Saturday my sister ___ there to read.','GO','goes','Every Saturday + she → goes.'],
['Right now she ___ a novel about space.','READ','is reading','Right now → Present Continuous.'],
['She ___ three books from the library so far.','BORROW','has borrowed','So far требует связи с настоящим: has borrowed.'],
['The library ___ by many volunteers last year.','BUILD','was built','Last year + passive: was built.'],
['When I arrived yesterday, my friend ___ a book.','CHOOSE','was choosing','Действие в процессе на момент прибытия: was choosing.'],
['I hope more people ___ the library next year.','DISCOVER','will discover','Прогноз о будущем: will discover.']],
w:[
['The new building is very ___ for visitors.','COMFORT','comfortable','После very — прилагательное comfortable.'],
['The ___ of books is excellent.','CHOOSE','choice','После the — существительное choice.'],
['The staff members are always ___.','FRIEND','friendly','После are — прилагательное friendly.'],
['Visitors must speak ___.','QUIET','quietly','Как говорить? Наречие quietly.'],
['Free membership makes reading more ___.','ACCESS','accessible','После more — прилагательное accessible.'],
['The new children’s section is a real ___.','IMPROVE','improvement','После a real — существительное improvement.']]
},
{title:'Школьная научная ярмарка',g:[
['Our class ___ for the school science fair last month.','PREPARE','prepared','Last month → Past Simple.'],
['My friend Emma ___ a model of a volcano.','MAKE','made','Make → made.'],
['She had already ___ on it for two weeks before the fair started.','WORK','worked','Действие произошло до другого момента прошлого: had worked.'],
['During the fair, visitors ___ at our projects.','LOOK','looked','Завершённый период в прошлом: looked.'],
['A new prize ___ to the best young scientist.','GIVE','was given','Пассивное действие в прошлом: was given.'],
['Emma ___ the first prize in our group.','WIN','won','Win → won.'],
['Our teacher ___ always happy when students ask questions.','BE','is','Always + singular subject teacher: is.'],
['Next year I ___ a project about clean water.','DO','will do||am going to do','План или будущее намерение: will do / am going to do.'],
['Science lessons ___ more interesting when we experiment.','BECOME','become','Общий факт: Present Simple become.']],
w:[
['Emma made an ___ model of a volcano.','IMPRESS','impressive','Перед model — прилагательное impressive.'],
['All the students showed great ___.','CREATE','creativity','После great — существительное creativity.'],
['The experiment worked ___.','PERFECT','perfectly','Как сработал? Наречие perfectly.'],
['The jury paid special ___ to her explanation.','ATTEND','attention','Pay attention — устойчивое сочетание.'],
['Some experiments are very ___.','DANGER','dangerous','После very — прилагательное dangerous.'],
['The teachers admired our ___.','ENTHUSIASTIC','enthusiasm','После our — существительное enthusiasm.']]
},
{title:'Поездка на озеро',g:[
['Last summer my family ___ to Lake Baikal.','TRAVEL','travelled||traveled','Last summer → Past Simple; travelled и traveled допустимы.'],
['We ___ our tickets several months before the trip.','BUY','bought','Buy → bought.'],
['My dad ___ such a beautiful place before.','SEE','had never seen','Опыт до другого момента прошлого: had never seen.'],
['When we arrived, the sun ___ brightly.','SHINE','was shining','Процесс в определённый момент прошлого: was shining.'],
['We ___ across a small village near the lake.','WALK','walked','Завершённое действие в прошлом.'],
['A local guide ___ us about the animals in the area.','TELL','told','Tell → told.'],
['The water ___ so clear that we could see stones.','BE','was','Единственное число water + Past Simple: was.'],
['I ___ the photos to my grandmother already.','SHOW','have shown','Already + результат к настоящему: have shown.'],
['Perhaps we ___ there again next year.','GO','will go','Perhaps выражает прогноз: will go.']],
w:[
['The lake is famous for its ___.','BEAUTIFUL','beauty','После its — существительное beauty.'],
['We had a very ___ guide.','HELP','helpful','Перед guide — прилагательное helpful.'],
['The mountain air was really ___.','REFRESH','refreshing','Воздух вызывал ощущение свежести: refreshing.'],
['I took some ___ photos of the sunset.','COLOUR','colourful||colorful','Перед photos — прилагательное colourful/colorful.'],
['We travelled ___ by train.','COMFORT','comfortably','После travelled — наречие comfortably.'],
['The journey was filled with great ___.','EXCITE','excitement','После an unforgettable — существительное experience (форма неизменна).']]
},
{title:'Помощь приюту',g:[
['Two months ago, I ___ a local animal shelter.','JOIN','joined','Two months ago → Past Simple.'],
['Many volunteers ___ there at weekends.','WORK','work','Many volunteers → множественное число.'],
['Right now a vet ___ a small puppy.','EXAMINE','is examining','Right now → Present Continuous.'],
['The puppy ___ to the shelter yesterday.','BRING','was brought','Пассив в прошлом: was brought.'],
['Several dogs ___ new homes already.','FIND','have found','Present Perfect: have found.'],
['My friend ___ two cats last week.','ADOPT','adopted','Last week → Past Simple.'],
['If more people ___ us, we will help more animals.','HELP','help','После if в реальном условии будущего: Present Simple.'],
['I ___ my first day at the shelter for years.','REMEMBER','will remember','Про будущее воспоминание: will remember.'],
['Yesterday we ___ the cages while the dogs were outside.','CLEAN','cleaned','Завершённое действие в прошлом: cleaned.']],
w:[
['The volunteers are very ___.','CARE','caring','Каковы добровольцы? Прилагательное caring.'],
['Some animals need special ___.','TREAT','treatment','После special требуется существительное treatment.'],
['The shelter gives us useful ___.','INFORM','information','Неисчисляемое существительное information.'],
['I learnt to work ___.','PATIENT','patiently','После глагола — наречие patiently.'],
['Good ___ helps animals find homes.','COMMUNICATE','communication','Подлежащее: существительное communication.'],
['One puppy was very ___ at first.','FRIGHTEN','frightened','Щенок испытывал страх: frightened.']]
},
{title:'Разговорный клуб',g:[
['Our school ___ an English speaking club last September.','START','started','This year как уже состоявшееся открытие клуба: started.'],
['We ___ every Wednesday after lessons.','MEET','meet','Every Wednesday → Present Simple.'],
['Last week our teacher ___ us a new discussion topic.','GIVE','gave','Give → gave.'],
['The students ___ their opinions when I entered.','SHARE','were sharing','Действие в процессе в момент прошлого: were sharing.'],
['I ___ my first speech at the club already.','MAKE','have made','Already в значении завершённого опыта → Present Perfect.'],
['There ___ twelve students in our group now.','BE','are','Twelve students → are.'],
['My friend Mary ___ to speak more confidently.','WANT','wants','Mary → 3rd person singular: wants.'],
['If she ___ regularly, she will improve.','PRACTISE','practises||practices','После if — Present Simple; British practises / American practices.'],
['Next month we ___ a debate competition.','ORGANISE','will organise||will organize||are going to organise||are going to organize','Речь о запланированном событии: will / be going to.']],
w:[
['Speaking English requires ___.','CONFIDENT','confidence','После requires — существительное confidence.'],
['Our teacher gives ___ feedback.','USE','useful','Перед feedback нужно прилагательное useful.'],
['Everyone listens ___.','CAREFUL','carefully','Как слушает? Наречие carefully.'],
['The meetings are always ___.','ENJOY','enjoyable','После are — прилагательное enjoyable.'],
['We often have ___ discussions.','INTEREST','interesting','Обсуждения вызывают интерес: interesting.'],
['Regular practice improves your ___.','FLUENT','fluency','После your — существительное fluency.']]
}
];
const e=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm=s=>String(s||'').toLowerCase().trim().replace(/[.?!]$/,'').replace(/\s+/g,' ').replace(/[’‘]/g,"'");
let currentVariant=0;
function page(events=[]){
 const latest=(events||[]).filter(x=>x.type==='practice'&&x.source==='oge26-exam').slice(-1)[0];
 return `<div class="og26-exam"><a class="back-link" href="#/тренажёр">← Тренажёр ОГЭ</a><h1>Грамматика и словообразование · задания 20–34</h1>
 <p>Авторские тренировочные тексты по структуре ОГЭ-2027. Это <b>не</b> официальные материалы ФИПИ. Читай связный текст целиком и самостоятельно изменяй слово в скобках.</p>
 <div class="og26-exam-links"><a href="#/грамматика">Изучить правило</a><a href="https://fipi.ru/oge/demoversii-specifikacii-kodifikatory" target="_blank" rel="noopener">Документы ФИПИ</a></div>
 <div class="og26-exam-card"><label for="og26-var">Выбери вариант</label> <select id="og26-var" aria-label="Вариант тренировочной работы">${forms.map((v,i)=>`<option value="${i}" ${i===currentVariant?'selected':''}>Вариант ${i+1}: ${e(v.title)}</option>`).join('')}</select><p>Каждый вариант: 9 заданий по грамматике (20–28) и 6 по словообразованию (29–34). За правильный ответ — 1 балл; максимум 15 учебных баллов.</p></div>
 ${renderSet('Грамматические преобразования · задания 20–28',forms[currentVariant].g,20,'g')}
 ${renderSet('Словообразование · задания 29–34',forms[currentVariant].w,29,'w')}
 <div class="og26-exam-actions"><button class="btn btn-primary" data-act="oge26-check-exam">Проверить 15 ответов</button><p>Результат сохраняется в облачном прогрессе после обычной синхронизации сайта. Персональные коды переноса не нужны.</p></div>
 ${latest?feedback(latest):''}</div>`;
}
function renderSet(title,arr,start,type){return `<section class="og26-exam-card"><h2>${e(title)}</h2><p>Прочитай историю целиком. Для каждого слова в верхнем регистре напиши нужную форму. Контекст важнее одного слова-маркера.</p><div class="og26-story" lang="en">${arr.map((r,i)=>`${i===0?'<p>':i%3===0?'</p><p>':''}<span class="og26-inline"><span class="og26-qnumber">${start+i}</span>${e(r[0].split('___')[0])}<label><span class="og26-lemma">${e(r[1])}</span><input aria-label="Задание ${start+i}, исходное слово ${e(r[1])}" autocomplete="off" spellcheck="false" data-og26="${type}${i}" placeholder="форма слова"></label>${e(r[0].split('___')[1]||'')}</span> ${i===arr.length-1?'</p>':''}`).join('')}</div></section>`;}
function grade(){let variant=forms[currentVariant],all=[...variant.g.map((x,i)=>({x,id:'g'+i,num:20+i})),...variant.w.map((x,i)=>({x,id:'w'+i,num:29+i}))];const results=[];
 for(const {x,id,num} of all){const value=document.querySelector(`[data-og26="${id}"]`)?.value.trim()||'';if(!value)return {missing:num};const pass=x[2].split('||').some(v=>norm(value)===norm(v));results.push({num,source:x[1],entered:value,answer:x[2].split('||')[0],correct:pass,explain:x[3]});}
 const yes=results.filter(r=>r.correct).length;return {variant:currentVariant,correct:yes,total:15,score:Math.round(100*yes/15),results};
}
function feedback(event){const items=Array.isArray(event.items)?event.items:[];const wrong=items.filter(x=>!x.correct);return `<section class="og26-exam-card og26-feedback"><h2>Последняя проверка · вариант ${Number(event.variant)+1}</h2><p><b>${event.correct}/15</b> · ${event.score}% · ${e(String(event.date||'').slice(0,10))}</p>${wrong.length?`<p>Ошибки: <b>${wrong.length}</b>. Исправь их и перепроверь правило. Новая попытка добавится в историю.</p>${wrong.map(x=>`<div class="og26-feedback-item"><strong>№ ${x.num} · ${e(x.source)}</strong><p>Твой ответ: <b>${e(x.entered)}</b> · правильная форма: <b>${e(x.answer)}</b></p><p>${e(x.explain)}</p></div>`).join('')}`:'<p>Все 15 ответов верны. Попробуй следующий вариант для закрепления.</p>'}</section>`;}
window.OGE_EXAM26={page,grade,setVariant:i=>{const n=Number(i);if(Number.isInteger(n)&&n>=0&&n<forms.length)currentVariant=n;},count:forms.length,variants:forms.map(v=>v.title)};
})();
