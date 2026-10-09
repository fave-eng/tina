/* Авторская стартовая диагностика. Не официальный вариант ФИПИ и не сертифицированный тест CEFR. */
window.OGE_DIAGNOSTIC = (()=>{
 const raw = [
  ['A1','Грамматика','My name ___ Kristina.','is','am','are','be','Глагол to be с my name — is.'],
  ['A1','Грамматика','She ___ fourteen years old.','is','have','are','be','Возраст выражают с be.'],
  ['A1','Грамматика','They ___ to school every day.','go','goes','going','went','С they используем начальную форму Present Simple.'],
  ['A1','Грамматика','___ your brother like football?','Does','Do','Is','Has','С he/she/it общий вопрос — Does + V1.'],
  ['A1','Грамматика','There ___ two books on the table.','are','is','was','be','Two books — множественное число.'],
  ['A1','Грамматика','This is ___ umbrella.','an','a','the a','—','Перед гласным звуком употребляется an.'],
  ['A1','Грамматика','We don’t have ___ milk.','any','some','many','a','В отрицании обычно any; milk — неисчисляемое.'],
  ['A1','Грамматика','My sister is ___ than me.','younger','young','youngest','more young','При сравнении двух людей younger than.'],
  ['A1','Лексика','Choose the correct translation: «сосед».','neighbour','relative','classmate','foreigner','Neighbour — сосед.'],
  ['A1','Лексика','I usually ___ my teeth before bed.','brush','wash','clean up','do','Brush my teeth — чистить зубы.'],
  ['A2','Грамматика','Look! The children ___ in the garden.','are playing','play','played','plays','Look! указывает на действие сейчас.'],
  ['A2','Грамматика','I ___ my grandparents last weekend.','visited','visit','have visited','visiting','Last weekend — завершённое прошлое.'],
  ['A2','Грамматика','He didn’t ___ the answer.','know','knew','known','knows','После didn’t — начальная форма.'],
  ['A2','Грамматика','While I ___, my phone rang.','was reading','read','am reading','have read','Длительный процесс в прошлом: Past Continuous.'],
  ['A2','Грамматика','There isn’t ___ sugar in my tea.','much','many','a few','several','Sugar неисчисляемое: much.'],
  ['A2','Грамматика','You ___ wear a helmet here. It’s a rule.','must','might','shouldn’t','can’t','Must указывает на обязательное требование.'],
  ['A2','Грамматика','If it rains, we ___ at home.','will stay','stayed','stay will','would stay','В главной части First Conditional — will + V1.'],
  ['A2','Грамматика','I’ve ___ finished my project.','just','yesterday','last week','ago','Just употребляется с Present Perfect.'],
  ['A2','Грамматика','This is the ___ film I’ve seen this year.','best','better','good','well','Превосходная степень от good — best.'],
  ['A2','Грамматика','I enjoy ___ books in English.','reading','read','to reading','reads','После enjoy употребляем -ing.'],
  ['A2','Лексика','Which verb goes with “a decision”?','make','do','take up','get off','Make a decision — принять решение.'],
  ['A2','Лексика','“Affordable” means ___.','not too expensive','extremely dangerous','very interesting','difficult to find','Affordable — доступный по цене.'],
  ['B1','Грамматика','When I arrived, the film ___.','had already started','has already started','already starts','was start','Действие произошло до другого прошлого события — Past Perfect.'],
  ['B1','Грамматика','If I ___ more time, I would learn Italian.','had','have','will have','would have','Во Second Conditional после if — Past Simple.'],
  ['B1','Грамматика','The house ___ in the 19th century.','was built','built','has built','is building','Past Simple Passive = was/were + V3.'],
  ['B1','Грамматика','She told me that she ___ tired.','was','is','has been','will be','При передаче слов в прошлом am/is обычно превращается в was.'],
  ['B1','Грамматика','I’ve been studying English ___ five years.','for','since','during','from','For + период; since + начальный момент.'],
  ['B1','Грамматика','The man ___ lives next door is a doctor.','who','which','where','whose','Who — относительное местоимение для человека.'],
  ['B1','Грамматика','I’m looking forward to ___ you.','seeing','see','have seen','saw','После look forward to используется форма -ing.'],
  ['B1','Грамматика','I wish I ___ speak French.','could','can','will','must','I wish + could — нереализованное желание.'],
  ['B1','Грамматика','She asked me where I ___.','lived','do live','living','live?','В косвенном вопросе прямой порядок слов; сдвиг в прошлое.'],
  ['B1','Лексика','We need to ___ the amount of plastic we use.','reduce','produce','increase','collect','Reduce — уменьшать, сокращать.'],
  ['B1','Лексика','Choose the correct noun: “Her ___ surprised everyone.” (SUCCEED)','success','successful','successfully','succeed','После her нужна форма существительного success.'],
  ['B1','Лексика','Choose the adjective: “It was an ___ experience.” (FORGET)','unforgettable','forgetful','forgot','forgetting','Unforgettable — незабываемый.'],
  ['B1','Лексика','I had to ___ the meeting because I was ill.','call off','put on','give in','look after','Call off — отменить мероприятие.'],
  ['B1','Грамматика','Neither my parents nor my brother ___ at home now.','is','are','be','have','Глагол согласуется с ближайшим подлежащим my brother.']
 ];
 const questions = raw.map((r,i)=>({id:'q'+(i+1),level:r[0],area:r[1],question:r[2],answer:r[3],options:[r[3],r[4],r[5],r[6]],explain:r[7]}));
 const passages = [
 {title:'Текст 1 · A2',level:'A2',text:'Last autumn, fourteen-year-old Emily joined a school photography club. At first, she was nervous because she didn’t know anyone. The club met every Thursday after lessons. Emily enjoyed taking pictures of old buildings, but she found portraits difficult. In December, one of her photos won a local competition. Now she wants to study design in the future.',items:[
  ['Emily started the club in spring.','False','True','Not stated','В тексте сказано last autumn.'],
  ['The club met once a week.','True','False','Not stated','Every Thursday означает один раз в неделю.'],
  ['Emily preferred portraits to buildings.','False','True','Not stated','Она любила фотографировать здания, а портреты давались трудно.'],
  ['Emily’s parents bought her a new camera.','Not stated','True','False','Про покупку камеры родителями ничего не сказано.'] ]},
 {title:'Текст 2 · B1',level:'B1',text:'Many teenagers believe that volunteering is only about helping other people. However, it can also teach young volunteers valuable skills. A recent school project invited students to work in a community garden. They learned to plan their time, solve unexpected problems and communicate with people of different ages. The organisers noticed that students who attended regularly became more confident. The project was free, and students could choose a morning or afternoon shift. It will continue next year if enough volunteers join.',items:[
  ['The project took place in a garden.','True','False','Not stated','Сказано community garden.'],
  ['Students had to pay to take part.','False','True','Not stated','The project was free.'],
  ['Every participant preferred morning shifts.','Not stated','True','False','О предпочтениях всех участников ничего не сказано.'],
  ['The project is certain to continue next year.','False','True','Not stated','Продолжение зависит от числа волонтёров: if enough volunteers join.'] ]}
 ];
 passages.forEach((p,k)=>p.items.forEach((r,j)=>questions.push({id:'r'+(k+1)+'-'+(j+1),level:p.level,area:'Чтение',question:r[0],answer:r[1],options:[r[1],r[2],r[3]],explain:r[4],passage:k})));
 return {questions,passages};
})();
