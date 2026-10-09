/* Самостоятельные занятия: авторские учебные упражнения, НЕ официальные варианты ФИПИ. */
window.OGE_LESSONS = (() => {
  const P = window.OGE_PROGRAM;
  const D = window.OGE_DIAGNOSTIC;
  const grammarBank = [
    ['My sister ___ a student.','is',['is','are','am','be'],'My sister — единственное число, поэтому is.'],
    ['___ there a library near your house?','Is',['Is','Are','Do','Have'],'There is: вопрос начинается с Is.'],
    ['These ___ my notebooks.','are',['are','is','am','was'],'These — множественное число.'],
    ['We ___ got any pets.','haven’t',['haven’t','hasn’t','aren’t','doesn’t'],'Have got: we haven’t got.'],
    ['___ she usually walk to school?','Does',['Does','Do','Is','Has'],'Для she в Present Simple используется does.'],
    ['My friends ___ football every weekend.','play',['play','plays','playing','played'],'После they/my friends — V1.'],
    ['He never ___ coffee in the morning.','drinks',['drinks','drink','drinking','drank'],'He + глагол с окончанием -s.'],
    ['Where ___ your parents work?','do',['do','does','are','is'],'Parents — множественное число: do.'],
    ['Look! The cat ___ under the table.','is sleeping',['is sleeping','sleeps','sleep','slept'],'Look! = действие сейчас, Present Continuous.'],
    ['They ___ for the bus at the moment.','are waiting',['are waiting','waits','wait','waited'],'At the moment — Present Continuous.'],
    ['I ___ TV now; I’m reading.','am not watching',['am not watching','don’t watch','wasn’t watch','not watch'],'Отрицание в Present Continuous: am not + -ing.'],
    ['My mum ___ dinner when I got home.','was cooking',['was cooking','cooks','has cooked','is cook'],'Длительное действие в прошлом.'],
    ['Yesterday we ___ our grandparents.','visited',['visited','visit','have visited','visiting'],'Yesterday — Past Simple.'],
    ['I ___ my keys last night.','lost',['lost','lose','have lost','losing'],'Last night — Past Simple, lose → lost.'],
    ['Did they ___ to the museum?','go',['go','went','gone','going'],'После did требуется V1.'],
    ['We ___ swimming when it started to rain.','were',['were','was','are','have'],'Were swimming — Past Continuous.'],
    ['She has already ___ her homework.','done',['done','did','do','doing'],'Have/has + V3.'],
    ['I ___ never been to Scotland.','have',['have','has','had','am'],'I have never been — Present Perfect.'],
    ['He has lived here ___ 2022.','since',['since','for','during','from'],'Since + момент начала.'],
    ['I’ve known Anna ___ three years.','for',['for','since','at','by'],'For + длительность.'],
    ['When we arrived, the train ___ left.','had already',['had already','has already','already','is'],'Past Perfect для более раннего события.'],
    ['Next year I ___ sixteen.','will be',['will be','am being','was','have been'],'Will + be для будущего.'],
    ['We are going ___ a new laptop.','to buy',['to buy','buy','buying','bought'],'Be going to + infinitive.'],
    ['I think it ___ rain tomorrow.','will',['will','is','does','has'],'Предсказание: will + V1.'],
    ['You ___ wear a seat belt. It is the law.','must',['must','may','might','shouldn’t'],'Must выражает обязательство.'],
    ['You ___ smoke in this building.','mustn’t',['mustn’t','don’t have to','could','should'],'Mustn’t = запрещено.'],
    ['You ___ take an umbrella; it might rain.','should',['should','mustn’t','can’t','needn’t'],'Should = совет.'],
    ['How ___ water do you drink every day?','much',['much','many','few','a few'],'Water — неисчисляемое.'],
    ['There aren’t ___ apples left.','any',['any','much','a','little'],'Any в отрицаниях с исчисляемыми существительными.'],
    ['This book is ___ than that one.','more interesting',['more interesting','most interesting','interestinger','interesting'],'Длинное прилагательное в сравнительной степени.'],
    ['She is the ___ runner in the team.','fastest',['fastest','faster','fast','most fast'],'Superlative: the fastest.'],
    ['This cake was ___ by my sister.','made',['made','make','making','makes'],'Пассив: was + V3.'],
    ['The letters ___ delivered yesterday.','were',['were','was','have','are been'],'Past Simple Passive для множественного числа.'],
    ['If I study tonight, I ___ the test.','will pass',['will pass','passed','would pass','passing'],'First Conditional: if + Present, will + V1.'],
    ['If I ___ a million pounds, I would travel.','had',['had','have','will have','has'],'Second Conditional: if + Past Simple.'],
    ['She said she ___ busy.','was',['was','is','will','has'],'Reported speech после said в прошлом.'],
    ['The girl ___ won the prize is my friend.','who',['who','which','where','when'],'Who относится к человеку.'],
    ['I enjoy ___ new languages.','learning',['learning','learn','to learning','learned'],'После enjoy — -ing.'],
    ['I want ___ an engineer.','to become',['to become','becoming','become','became'],'После want — to-infinitive.'],
    ['I’m looking forward to ___ you.','meeting',['meeting','meet','met','to meet'],'После look forward to — -ing.'],
    ['Her ___ made her parents proud. (SUCCEED)','success',['success','successful','successfully','succeed'],'После her нужна форма существительного.'],
    ['It was an ___ day. (FORGET)','unforgettable',['unforgettable','forgetting','forgetful','forgot'],'Нужно прилагательное со значением «незабываемый».'],
    ['He answered the question ___. (CONFIDENT)','confidently',['confidently','confidence','confident','confidential'],'Нужно наречие после answered.'],
    ['The ___ of the city is increasing. (POPULATE)','population',['population','popular','popularity','populate'],'Population — население.'],
    ['I’m not ___ in horror films.','interested',['interested','interesting','interest','interestingly'],'Interested описывает чувство человека.'],
    ['He is very good ___ maths.','at',['at','in','on','for'],'Устойчивое сочетание good at.'],
    ['We had to ___ the trip because of the storm.','call off',['call off','put on','take after','get up'],'Call off = отменить.'],
    ['Please ___ your homework before Friday.','hand in',['hand in','look after','give away','run out'],'Hand in = сдать работу.'],
    ['They have been friends ___ childhood.','since',['since','for','during','from'],'Since childhood — с детства.'],
    ['Neither of the answers ___ correct.','is',['is','are','have','were'],'Neither of ... обычно с единственным числом в формальном английском.']
  ];
  const passages = [
    {topic:'Семья и отношения',text:'Last year, Emily moved to a new town with her family. At first, she missed her old classmates and spent most evenings at home. Her older brother suggested joining a school club. Emily chose the art club and met two friendly students there. They now work on projects together every Thursday. Although she still calls her old friends, she feels much happier in her new school.',items:[['Emily changed schools because her family moved.','True'],['The art club meets on Mondays.','False'],['Emily wants to become a professional artist.','Not stated']]},
    {topic:'Характер и внешность',text:'People often say that Leo is quiet, but his close friends describe him as a confident and reliable person. He does not enjoy speaking to large groups, yet he volunteers to help organise school events. Last month he stayed after class to help a new pupil understand the timetable. His friends appreciate him because he keeps his promises.',items:[['Leo enjoys giving speeches to large audiences.','False'],['Leo helps other students at school.','True'],['Leo has a younger sister.','Not stated']]},
    {topic:'Школа и обучение',text:'Our school introduced a reading challenge in September. Students can choose books in English, write short reviews and discuss them with classmates. Participation is voluntary, but more than a hundred pupils signed up in the first week. Teachers say that the aim is not to read as fast as possible: they want students to enjoy reading and learn to express opinions.',items:[['Every pupil must take part in the challenge.','False'],['Participants write about what they read.','True'],['The school bought 200 new books.','Not stated']]},
    {topic:'Досуг и хобби',text:'Sophie used to spend most of her free time playing computer games. This year she decided to try something different and joined a photography group. On Saturdays, members walk around the city and take pictures of unusual buildings. Sophie still plays games occasionally, but she says photography has helped her notice small details that she never saw before.',items:[['Sophie stopped playing computer games completely.','False'],['The photography group meets on Saturdays.','True'],['Sophie has won a national photography prize.','Not stated']]},
    {topic:'Путешествия',text:'During the school holidays, Daniel travelled by train with his parents to a small coastal town. Their train was delayed for an hour, so they arrived after sunset. The next morning they explored the old harbour and visited a local museum. Daniel liked the museum, but his favourite part of the trip was walking along the beach in the evening.',items:[['Daniel travelled by plane.','False'],['The family visited a museum.','True'],['The family stayed in a five-star hotel.','Not stated']]},
    {topic:'Книги и искусство',text:'A local library has started a film club for teenagers. Every second Friday, members watch a short film and discuss the characters, music and ending. They sometimes read a story that inspired the film. Attendance is free, but members should register in advance because the room has only twenty seats. The club is popular with students who want more speaking practice.',items:[['The club meets every Friday.','False'],['Students pay to attend the club.','False'],['Members discuss the films after watching them.','True']]},
    {topic:'Люди и достижения',text:'At the age of sixteen, Maya designed a simple app to help her classmates organise their homework. She noticed that many students forgot deadlines or lost their notes. After testing the app with a small group, she improved the calendar and reminder functions. Maya has not sold the app: she shares it with her school for free and hopes to study computer science.',items:[['Maya created an application for students.','True'],['Maya charges every user a monthly fee.','False'],['The app works on every operating system.','Not stated']]},
    {topic:'Профессии и планы',text:'Our class invited four professionals to speak about their jobs. A nurse, an engineer, a journalist and a chef explained their daily responsibilities and answered questions. Most students were surprised to learn how much teamwork these jobs require. The guests advised us to try different activities before choosing a career and reminded us that plans can change.',items:[['The school invited three guests.','False'],['The speakers described their work.','True'],['All four guests studied at the same university.','Not stated']]},
    {topic:'Здоровье',text:'Nina felt tired at school because she often went to bed very late. She used her phone until midnight and sometimes skipped breakfast. Her doctor suggested a regular sleep schedule and a short walk after school. Nina started putting her phone away earlier and preparing breakfast in the evening. After two weeks, she found it easier to concentrate in lessons.',items:[['Nina used to sleep very early.','False'],['The doctor recommended a more regular routine.','True'],['Nina joined a swimming club.','Not stated']]},
    {topic:'Еда',text:'Students at Greenhill School recently organised a cooking day. They worked in small groups and prepared simple dishes using fruit, vegetables and other fresh ingredients. Each group had to explain its recipe in English. Some meals were vegetarian, while others included chicken or fish. The teachers wanted pupils to practise teamwork and learn how to describe food.',items:[['Students worked alone.','False'],['Every dish was vegetarian.','False'],['Students explained their recipes in English.','True']]},
    {topic:'Покупки',text:'Before buying new trainers, Alex compared prices in several shops and read customer reviews online. The most expensive pair looked attractive, but many people said it was uncomfortable. Alex finally chose a cheaper pair that fitted well. He kept the receipt in case he needed to return them. He believes that a famous brand does not always mean better quality.',items:[['Alex bought the most expensive trainers.','False'],['Alex read other customers’ opinions.','True'],['The trainers were delivered on Tuesday.','Not stated']]},
    {topic:'Город и жильё',text:'Ella and her parents moved from a village to a busy city. At first, Ella missed the quiet streets and their large garden. However, she soon discovered that the new flat was close to a library, a sports centre and several parks. She can now walk to school instead of taking a long bus journey. She still visits her grandparents in the village during holidays.',items:[['Ella lived in a village before moving.','True'],['Ella now needs a longer trip to school.','False'],['Ella has two brothers.','Not stated']]},
    {topic:'Природа и животные',text:'A group of volunteers visited a wildlife centre last weekend. They helped staff clean the animal areas and prepare food for rescued birds. Visitors were not allowed to touch the animals because many were recovering from injuries. The volunteers learned why protecting natural habitats is important and decided to organise a small fundraising event at school.',items:[['The volunteers prepared food for birds.','True'],['Visitors could hold all the animals.','False'],['The centre is the biggest in the country.','Not stated']]},
    {topic:'Экология',text:'Our town introduced separate bins for paper, plastic and glass. At first, some residents were confused about what to put in each container. The local council published a simple guide and organised school workshops. Six months later, more households were recycling regularly. Experts say that recycling helps, but reducing unnecessary packaging is important too.',items:[['The town introduced three types of recycling bins.','True'],['Everyone understood the system immediately.','False'],['The town will ban all plastic next year.','Not stated']]},
    {topic:'Погода',text:'Last summer, heavy rain caused flooding in several villages near the river. Local volunteers helped residents move important belongings to safer places. The schools were closed for two days, and buses used a different route. Fortunately, nobody was seriously injured. After the flood, the council started checking drainage systems more often.',items:[['Heavy rain caused the flooding.','True'],['Schools remained open throughout the flood.','False'],['The flood lasted for exactly one week.','Not stated']]},
    {topic:'СМИ и общение',text:'An online school newspaper was launched by a group of students. They publish interviews, sports news and reviews of local events. Before posting an article, two editors check facts and spelling. The newspaper also accepts readers’ suggestions, but anonymous comments are not allowed. Its creators hope that more students will learn to recognise reliable sources.',items:[['Teachers write every article.','False'],['Editors check information before publication.','True'],['The newspaper has won an international award.','Not stated']]},
    {topic:'Технологии',text:'Many teenagers use language-learning apps because they can practise anywhere. However, teachers warn that an app cannot replace real conversations. One school combined short online exercises with weekly discussion groups. Students enjoyed tracking their progress but said that speaking with classmates helped them remember words more naturally.',items:[['The school stopped all face-to-face lessons.','False'],['Students took part in weekly discussions.','True'],['The app was created by one of the teachers.','Not stated']]},
    {topic:'Страны и традиции',text:'A group of exchange students spent one week in a British school. They attended regular lessons, stayed with host families and visited a local history museum. The visitors were surprised that school clubs met after classes rather than during lunch. On the final day, the hosts prepared a small party with food from different countries.',items:[['The students stayed in a hotel.','False'],['They visited a history museum.','True'],['All visitors came from the same country.','Not stated']]}
  ];
  const listens = [
    {text:'Hi, Mia. Are you coming to the library on Saturday? The book club starts at eleven, not at ten as we thought. I can meet you outside at half past ten. Don’t forget your notebook, because we are going to write a short review.',items:[['Where will the friends meet?','Outside the library',['Outside the library','At the cinema','At school']],['When does the club start?','At eleven',['At eleven','At ten','At half past ten']],['What should Mia bring?','A notebook',['A notebook','A laptop','A camera']]]},
    {text:'Good morning, everyone. Tomorrow’s school trip will start at eight fifteen. Please arrive at the school gates by eight o’clock. We are visiting the science museum first and then having lunch in the park. Bring a packed lunch and a bottle of water.',items:[['When should students arrive?','By eight o’clock',['By eight o’clock','At eight fifteen','At nine o’clock']],['Where will they go first?','To the science museum',['To the science museum','To the park','To the zoo']],['What must students bring?','Lunch and water',['Lunch and water','A textbook','Sports equipment']]]},
    {text:'Hello, this is a message from your sports coach. Thursday’s football practice has been moved to Friday because of the weather. We will meet in the gym at four thirty. Remember to wear comfortable shoes. Please tell the other members of your team.',items:[['Why was practice moved?','Because of the weather',['Because of the weather','Because of an exam','Because of a holiday']],['Where will the team meet?','In the gym',['In the gym','Outside the school','At the stadium']],['What time will practice begin?','At four thirty',['At four thirty','At three thirty','At five']]]},
    {text:'Hi, Alex. I can’t come to the café today because I have to finish my history project. Could we meet tomorrow instead? I’ll be free after three o’clock. We can go to the small café next to the station. Please call me when you hear this message.',items:[['Why can’t the speaker meet today?','A school project',['A school project','A family holiday','A doctor’s appointment']],['When is the speaker free tomorrow?','After three',['After three','Before two','At noon']],['Where is the café?','Next to the station',['Next to the station','In the park','Opposite the library']]]},
    {text:'Welcome to Green Park. Our guided walk begins in five minutes and takes about forty minutes. Today we will learn about the trees and birds that live here. Photography is allowed, but please do not feed the animals. The visitor centre closes at six o’clock.',items:[['How long is the walk?','About forty minutes',['About forty minutes','Ten minutes','An hour and a half']],['What is allowed?','Taking photographs',['Taking photographs','Feeding the animals','Picking flowers']],['When does the visitor centre close?','At six',['At six','At five','At seven']]]},
    {text:'Hello, everyone. I have some news about the art competition. Entries must be sent by next Monday. You may use paint, pencils or digital tools, but your picture must show a place that matters to you. The winners will be announced at the end of the month.',items:[['What must the picture show?','An important place',['An important place','A famous person','A wild animal']],['When are entries due?','Next Monday',['Next Monday','Tomorrow morning','At the end of the month']],['When will winners be announced?','At the end of the month',['At the end of the month','Next Monday','This evening']]]}
  ];
  const prompts = [
    ['Напиши 3–4 предложения о своей семье и повседневном дне.','Опиши человека, которому ты доверяешь. Объясни почему.','Ответь на вопросы друга о семье, школе и увлечениях.'],
    ['Опиши внешность и характер одного из знакомых.','Напиши, что делает твой лучший друг в свободное время.','Представь нового одноклассника: 5 фактов и своё мнение.'],
    ['Опиши обычный школьный день и любимые предметы.','Объясни, что тебе нравится и что ты хотела бы изменить в школе.','Ответь другу, какие предметы ты изучаешь и как готовишься к тестам.']
  ];
  const sessions = [
    {name:'Занятие 1 · Грамматика',short:'Разобрать правило и применить его',kind:'grammar',minutes:'50–60',hint:'Рекомендуется в начале недели',minWords:25},
    {name:'Занятие 2 · Словарь и чтение',short:'Выучить слова, прочитать текст, найти доказательства',kind:'reading',minutes:'45–60',hint:'Через 1–2 дня',minWords:30},
    {name:'Занятие 3 · Экзаменационная практика',short:'Проверить материал, потренировать аудирование и письмо',kind:'exam',minutes:'50–65',hint:'В конце недели',minWords:40}
  ];
  function vocabTopic(index){const w=P.weeks[index];const v=P.vocabulary.find(x=>x.title.toLowerCase()===w.vocab.toLowerCase()||x.title.toLowerCase().includes(w.vocab.toLowerCase()));return v||P.vocabulary[(index===7?0:index)%P.vocabulary.length];}
  function reading(index){return passages[index%passages.length];}
  function listen(index){return listens[index%listens.length];}
  function grammarQuestions(index,count){
    const ranges=[[0,8],[0,8],[4,9],[8,12],[12,16],[11,17],[16,21],[0,23],[21,25],[24,27],[27,30],[27,30],[29,32],[0,38],[31,34],[33,35],[34,36],[35,38],[37,40],[10,46],[40,44],[44,48],[40,48],[8,48],[12,36],[0,38],[0,48],[0,48],[0,48]];
    const [start,end]=ranges[index]||[0,grammarBank.length];
    const priority=Array.from({length:end-start},(_,j)=>start+(j+index)%(end-start));
    const reviewLimit=Math.max(end,Math.min(grammarBank.length,14+index*2));
    const review=Array.from({length:reviewLimit},(_,j)=>(index*11+j*7)%reviewLimit);
    const extra=Array.from({length:grammarBank.length},(_,j)=>(index*11+j*7)%grammarBank.length);
    const chosen=[...new Set([...priority,...review,...extra])].slice(0,count);
    return chosen.map((n,k)=>{const q=grammarBank[n];return {id:'g'+index+'-'+k,question:q[0],answer:q[1],options:q[2],explain:q[3]};});
  }
  function vocabularyQuestions(index,count){
    let words=vocabTopic(index).words.filter(x=>x.en?.trim()&&x.ru?.trim());const pool=P.vocabulary.flatMap(t=>t.words).filter(w=>w.ru?.trim());let arr=[];
    for(let k=0;k<count;k++){
      let word=words[(k*7+index*3)%words.length],options=[word.ru];
      for(let n=1;options.length<4&&n<pool.length;n++){
        const distractor=pool[(index*19+k*13+n*23)%pool.length].ru;
        if(!options.includes(distractor))options.push(distractor);
      }
      const offset=(index+k)%options.length;options=[...options.slice(offset),...options.slice(0,offset)];
      arr.push({id:'v'+index+'-'+k,question:`Выбери точный перевод: ${word.en}`,answer:word.ru,options,explain:`${word.en} — ${word.ru}.`});
    }
    return arr;
  }
  function readingQuestions(index){return reading(index).items.map((x,k)=>({id:'r'+index+'-'+k,question:x[0],answer:x[1],options:['True','False','Not stated'],explain:x[1]==='Not stated'?'В тексте об этом не сообщается.':`Ответ: ${x[1]}. Найди подтверждение в тексте.`}));}
  function listeningQuestions(index){return listen(index).items.map((x,k)=>({id:'a'+index+'-'+k,question:x[0],answer:x[1],options:x[2],explain:`Правильный ответ: ${x[1]}.` }));}
  function questions(index,kind){if(kind==='grammar')return grammarQuestions(index,10);if(kind==='reading')return [...vocabularyQuestions(index,12),...readingQuestions(index)];return [...grammarQuestions(index,17).slice(10),...listeningQuestions(index)];}
  function prompt(index,kind){let base=prompts[index]||[ `Составь 4–5 предложений по теме «${P.weeks[index].vocab}». Используй грамматику недели: ${P.weeks[index].grammar}.`, `Опиши личный опыт, связанный с темой «${P.weeks[index].vocab}». Употреби не менее четырёх новых слов.`, `Ответь на три вопроса друга: что тебе нравится в этой теме, почему и что бы ты посоветовала другим? Тема: «${P.weeks[index].vocab}».` ];return base[sessions.findIndex(s=>s.kind===kind)];}
  return { sessions, vocabTopic,reading,listen,questions,prompt,grammarBank,passages };
})();
