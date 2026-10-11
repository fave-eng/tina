/* Учебные рекомендации и адаптивная практика. Авторские задания, не задания ФИПИ. */
(()=>{'use strict';
const P=window.OGE_PROGRAM,L=window.OGE_LESSONS;
if(!P||!L)return;
const tips=[
 ['to be / have got / there is','I am fifteen. I have got a sister. There is a park near my house.','В английском нельзя опускать am/is/are: I am fifteen, а не I fifteen. There is описывает наличие, my house is ... описывает сам дом.'],
 ['Порядок слов и вопросы','Does your friend live nearby? Where does your friend live?','После does смысловой глагол остаётся в начальной форме: Does she like ...? Не Does she likes ...?'],
 ['Present Simple','She studies English every day. She does not study on Sundays.','После he/she/it нужна -s/-es, но после does/doesn’t окончания -s у смыслового глагола нет.'],
 ['Present Continuous','Look! They are playing outside.','Слова now / at the moment могут подсказывать Continuous. Глаголы know, like обычно не ставят в Continuous при обычном значении.'],
 ['Past Simple','We went to the cinema yesterday.','После did/didn’t нужна первая форма: Did you go? — не Did you went? Неправильные формы учи с контекстом.'],
 ['Past Continuous','I was reading when she called.','Past Continuous — фон/процесс, Past Simple — короткое событие. While часто вводит длительное действие.'],
 ['Present Perfect','I have already finished my homework.','Have/has + V3. С yesterday/last year обычно употребляют Past Simple, а не Present Perfect.'],
 ['Повторение основных времён','I have known her for three years. I met her in 2023.','Выбирай время по смыслу: опыт/результат или конкретный момент прошлого.'],
 ['Формы будущего','I am going to visit my aunt. I think I will enjoy the trip.','Will часто используется для спонтанного решения/предположения, going to — для плана или очевидных признаков.'],
 ['Модальные глаголы','You must wear a seat belt. You don’t have to drive.','Mustn’t означает запрет, don’t have to — отсутствие необходимости. Это разные значения.'],
 ['Артикли и существительные','I have an apple, but I haven’t got any milk.','A/an с единичными исчисляемыми; many с исчисляемыми, much с неисчисляемыми.'],
 ['Местоимения и количество','There are a few books and a little water.','A few + исчисляемые, a little + неисчисляемые; few/little без a часто подчёркивают недостаток.'],
 ['Сравнение и -ed/-ing','This story is more interesting. I am interested in it.','Interesting — вызывает интерес, interested — испытывает интерес. При сравнении длинных прилагательных используй more.'],
 ['Повторение грамматики','I usually walk, but today I am taking the bus.','При повторении сравни времена, а не узнавай правило только по одному слову-маркеру.'],
 ['Passive Voice','English is spoken here. The room was cleaned yesterday.','В Passive форма be указывает время; V3 не изменяется по лицам.'],
 ['Zero / First Conditional','If it rains, we will stay at home.','В части с if обычно Present Simple, даже если речь о будущем.'],
 ['Second Conditional','If I had more money, I would travel more.','После if — Past Simple, а would ставится в главной части.'],
 ['Косвенная речь','She said that she was busy. He asked where I lived.','В косвенном вопросе порядок слов прямой: He asked where I lived, а не where did I live.'],
 ['Gerund и infinitive','I enjoy reading. I want to read this book.','Enjoy + -ing, want + to-infinitive. Look forward to + -ing: здесь to — предлог.'],
 ['Смешанная грамматика','She had finished her work before we arrived.','Объясни, какое событие произошло раньше; сравни Past Simple и Past Perfect.'],
 ['Словообразование существительных','The development of the city was rapid.','После the/her/a часто требуется существительное. Проверяй изменение основы: happy → happiness.'],
 ['Словообразование прилагательных','This is an impressive achievement.','Перед существительным обычно нужно прилагательное. Нельзя механически ставить любую приставку: impossible, incorrect.'],
 ['Фразовые глаголы','Please turn it off. I look forward to meeting you.','В разделяемом фразовом глаголе местоимение стоит внутри: turn it off.'],
 ['Аудирование: перефразирование','The event was put off. = The event was postponed.','Ответ может быть выражен синонимом. Не выбирай вариант только из-за услышанного знакомого слова.'],
 ['Чтение: доказательства','The text does not mention the price. → Not stated.','False — текст прямо противоречит утверждению; Not stated — подтверждения/опровержения нет.'],
 ['Личное электронное письмо','Hi, Kate, ... Best wishes, Kristina','Ответь на каждый из трёх вопросов, соблюдай неофициальный стиль и формат. Объём и критерии сверяй с действующей демоверсией.'],
 ['Устный монолог','I enjoy drawing because it helps me relax.','Отвечай на все пункты плана и связывай предложения. Говори естественно, а не заученным несвязанным списком.'],
 ['Пробный вариант','I check the question, find evidence and then answer.','Веди журнал ошибок. Скорость важна только вместе с точностью.'],
 ['Финальное повторение','I can explain my choice and check it.','Повторяй типичные ошибки, а не пытайся выучить десятки новых правил в последний день.']
];
const samples={
 'relative':'My cousin is my relative.','cousin':'My cousin lives in another city.','trust':'I trust my best friend.','get on with':'I get on with my sister.','household chores':'We share household chores.','reliable':'A reliable friend keeps promises.','confident':'She feels confident before the exam.','appearance':'Appearance is not the most important thing.','classmate':'My classmate helps me with English.','education':'Education opens new opportunities.','assignment':'I finished the assignment yesterday.','improve':'I want to improve my English.','timetable':'Our timetable changes on Mondays.','revision':'Revision helps me remember new words.'
};
const extra=[
 [['She ___ at home now.','is',['is','are','am','be'],'She + is.','to be'],['___ they good friends?','Are',['Are','Is','Do','Has'],'С to be в вопросе Are ставится перед they.','to be'],['My uncle ___ got two sons.','has',['has','have','is','does'],'My uncle = he, поэтому has got.','have got'],['There ___ three chairs in this room.','are',['are','is','has','was'],'Three chairs — множественное число, there are.','there is / there are']],
 [['Where ___ your sister study?','does',['does','do','is','has'],'В специальном вопросе: Where + does + she + V1.','Порядок слов и вопросы'],['___ your parents like music?','Do',['Do','Does','Are','Is'],'Parents = they: Do they like ...?','Порядок слов и вопросы']],
 [['He ___ to school at eight.','goes',['goes','go','going','went'],'He + goes в Present Simple.','Present Simple'],['She doesn’t ___ computer games.','play',['play','plays','played','playing'],'После doesn’t — базовая форма.','Present Simple']],
 [['Look! The children ___ outside.','are playing',['are playing','play','plays','played'],'Look! — действие сейчас, are + -ing.','Present Continuous'],['I ___ TV at the moment.','am not watching',['am not watching','do not watch','not watch','was not watch'],'Отрицание Continuous: am not + -ing.','Present Continuous']],
 [['Did you ___ this book yesterday?','read',['read','reads','reading','to read'],'После did — начальная форма read (написание совпадает).','Past Simple'],['We ___ to the mountains last year.','went',['went','go','gone','going'],'Last year — Past Simple; go → went.','Past Simple']],
 [['I ___ dinner when she phoned.','was cooking',['was cooking','am cooking','cook','cooked'],'Длительное действие прервано коротким событием.','Past Continuous']],
 [['He has never ___ to London.','been',['been','was','be','being'],'Present Perfect: has + been.','Present Perfect']],
 [['I ___ Anna since 2020.','have known',['have known','knew','know','had know'],'Since + точка отсчёта; состояние длится до сих пор.','Present Perfect']],
 [['I think the weather ___ improve.','will',['will','was','did','has'],'После will — V1 improve.','Формы будущего']],
 [['You ___ park here. It is forbidden.','mustn’t',['mustn’t','don’t have to','should','can'],'Mustn’t — запрет; don’t have to — необязательно.','Модальные глаголы']],
 [['How ___ sugar do we need?','much',['much','many','few','several'],'Sugar неисчисляемое.','Артикли и существительные']],
 [['There are only ___ eggs in the fridge.','a few',['a few','a little','much','little'],'Eggs исчисляемое множественное число.','Местоимения и количество']],
 [['The story was really ___.','interesting',['interesting','interested','interest','interests'],'История вызывает интерес: interesting.','Сравнение и -ed/-ing']],
 [['She usually ___ to work, but today she is walking.','drives',['drives','drive','is driving','drove'],'Usually = привычка, Present Simple.','Повторение грамматики']],
 [['The letter ___ written yesterday.','was',['was','is','has','were'],'Past Simple Passive: was + V3.','Passive Voice']],
 [['If she ___ early, she will catch the bus.','leaves',['leaves','will leave','left','leaving'],'После if употребляем Present Simple.','Zero / First Conditional']],
 [['If I ___ a bike, I would ride to school.','had',['had','have','will have','has'],'Second Conditional: if + Past Simple.','Second Conditional']],
 [['He asked where I ___.','lived',['lived','did live','live','living'],'В косвенном вопросе прямой порядок слов и согласование времён.','Косвенная речь']],
 [['I enjoy ___ photographs.','taking',['taking','take','to take','took'],'После enjoy — -ing.','Gerund и infinitive']],
 [['She had left before we ___.','arrived',['arrived','arrive','had arrive','arriving'],'Более позднее событие — Past Simple.','Смешанная грамматика']],
 [['The ___ of the city is growing.','population',['population','popular','populate','popularly'],'После the нужно существительное population.','Словообразование существительных']],
 [['The trip was ___.','enjoyable',['enjoyable','enjoy','enjoyment','enjoying'],'После was здесь требуется прилагательное.','Словообразование прилагательных']],
 [['Please turn ___ the computer.','off',['off','at','of','for'],'Turn off = выключить.','Фразовые глаголы']],
 [['The concert was postponed. This means it was ___.','delayed',['delayed','cancelled forever','started','finished'],'Postponed значит перенесён на более позднее время.','Аудирование: перефразирование']],
 [['The text gives no information about the ticket price.','Not stated',['Not stated','False','True','Both'],'Если нет ни подтверждения, ни опровержения — Not stated.','Чтение: доказательства']],
 [['Which opening is suitable for an informal email?','Hi, Sam,',['Hi, Sam,','To whom it may concern,','Dear Sir or Madam,','Yours faithfully,'],'Дружеское письмо — неофициальный стиль.','Личное электронное письмо']],
 [['Which phrase gives a reason?','because I enjoy it',['because I enjoy it','on Monday','in the park','my best friend'],'Because вводит причину.','Устный монолог']],
 [['Before checking an answer, you should ___ the question.','reread',['reread','ignore','skip','delete'],'Перечитай вопрос и найди опору в тексте/записи.','Пробный вариант']],
 [['The most useful final practice is to review your ___.','mistakes',['mistakes','passwords','downloads','avatars'],'Разбирай ошибки — так видно, что повторять.','Финальное повторение']]
];
const words=(wi,si)=>{let topic=L.vocabTopic(wi);let items=topic.words;let start=(si*12)%items.length;return {topic,words:Array.from({length:Math.min(12,items.length)},(_,k)=>items[(start+k)%items.length])};};
const extraSpecial={
 19:[['When I arrived, the film ___ already started.','had',['had','has','was','is'],'Past Perfect показывает, что фильм начался раньше моего прихода.','Past Perfect']],
 18:[['The boy ___ lives next door is my friend.','who',['who','which','where','when'],'Who относится к человеку.','Relative clauses']],
 22:[['Please ___ attention to the instructions.','pay',['pay','make','do','get'],'Устойчивое выражение pay attention.','Collocations']]
};
function makeExtra(wi){return [...(extra[wi]||[]),...(extraSpecial[wi]||[])].map((x,i)=>({id:'coach-'+wi+'-'+i,question:x[0],answer:x[1],options:x[2],explain:x[3],studyTopic:x[4],domain:'Грамматика'}));}
function vocabQuestions(wi,si){const list=words(wi,si).words, pool=L.vocabTopic(wi).words;return list.slice(0,4).map((w,k)=>{const distractors=pool.filter(x=>x.en!==w.en&&x.ru!==w.ru);const opts=[w.en];for(let j=0;j<distractors.length&&opts.length<4;j++){const x=distractors[(k*7+j*3)%distractors.length].en;if(!opts.includes(x))opts.push(x)}let order=(k+wi+si)%opts.length;return {id:`coach-v-${wi}-${si}-${k}`,question:`Какое английское слово означает «${w.ru}»?`,answer:w.en,options:opts.slice(order).concat(opts.slice(0,order)),explain:`${w.en} — ${w.ru}.`,studyTopic:w.en,domain:'Словарь',wordId:w.id};});}
const indexByQuestion=new Map(L.grammarBank.map((x,i)=>[x[0],i]));
const grammarLabels=[
 'to be','there is / there are','to be','have got','Present Simple','Present Simple','Present Simple','Present Simple','Present Continuous','Present Continuous','Present Continuous','Past Continuous','Past Simple','Past Simple','Past Simple','Past Continuous','Present Perfect','Present Perfect','Present Perfect','Present Perfect','Past Perfect','Формы будущего','Формы будущего','Формы будущего','Модальные глаголы','Модальные глаголы','Модальные глаголы','Артикли и существительные','Местоимения и количество','Сравнение и -ed/-ing','Сравнение и -ed/-ing','Passive Voice','Passive Voice','Zero / First Conditional','Second Conditional','Косвенная речь','Relative clauses','Gerund и infinitive','Gerund и infinitive','Gerund и infinitive','Словообразование существительных','Словообразование прилагательных','Словообразование существительных','Словообразование существительных','Сравнение и -ed/-ing','Collocations','Фразовые глаголы','Фразовые глаголы','Present Perfect','Местоимения и количество'];
const oldQuestions=L.questions.bind(L);
L.questions=(wi,kind)=>oldQuestions(wi,kind).map(q=>{
 if(q.studyTopic)return q;
 if(q.id.startsWith('g'))return {...q,studyTopic:grammarLabels[indexByQuestion.get(q.question)]||P.weeks[wi].grammar};
 if(q.id.startsWith('v')){const matching=L.vocabTopic(wi).words.find(w=>q.question.endsWith(w.en));return {...q,studyTopic:matching?.en||L.vocabTopic(wi).title,wordId:matching?.id};}
 return {...q,studyTopic:kind==='reading'?'Понимание текста':'Аудирование'};
});
// В каждом письменном задании ученица видит, какие слова стоит употребить.
const previousPrompt=L.prompt.bind(L);
L.prompt=(wi,kind)=>{
 const si=L.sessions.findIndex(x=>x.kind===kind),chosen=words(wi,Math.max(0,si)).words.slice(0,5).map(w=>w.en).join(', ');
 return previousPrompt(wi,kind)+` Попробуй использовать как минимум три выражения из словаря занятия: ${chosen}.`;
};
window.OGE_STUDY_COACH={tips:wi=>({title:tips[wi]?.[0]||P.weeks[wi].grammar,example:tips[wi]?.[1]||'',nuance:tips[wi]?.[2]||''}),words,vocabQuestions,makeExtra,sample:word=>samples[word.toLowerCase()]||''};
})();
