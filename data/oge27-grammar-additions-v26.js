/* Original teaching content for Kristina's OGE-2027 course. All tasks are authored; not official FIPI tasks. */
(() => {
  'use strict';
  const specs = [
    {
      title:'Указательные местоимения this / that / these / those',
      intro:'В английском нужно учитывать одновременно расстояние и число предметов. This/these — рядом с говорящим или в центре внимания; that/those — далеко или уже упомянуты.',
      formula:'Рядом + один: this; рядом + несколько: these; далеко + один: that; далеко + несколько: those. This is ... / These are ...',
      contrast:[['This book is mine.','Эта книга (рядом) моя.'],['Those books are mine.','Те книги (вдали) мои.']],
      table:[['Рядом, единственное','this','This apple is red.'],['Далеко, единственное','that','That building is a museum.'],['Рядом, множественное','these','These shoes are new.'],['Далеко, множественное','those','Those shoes are old.']],
      nuance:'После these и those используем существительное во множественном числе. Если местоимение — подлежащее, глагол согласуется с числом: These are, а не These is.',
      how:'Сначала найди, сколько объектов. Затем посмотри, рядом они или далеко. Проверь число существительного и форму be.',
      mistakes:[['These is my keys.','These are my keys.'],['That people are friendly.','Those people are friendly.']],
      practice:[
        ['___ is my phone here in my hand. (один, рядом)','This'],['___ are my gloves on this chair. (несколько, рядом)','These'],['Look over there! ___ is our bus. (один, далеко)','That'],['Can you see ___ birds above the river? (несколько, далеко)','those'],['___ pencil on my desk is broken. (один, рядом)','This'],['___ windows across the street are open. (несколько, далеко)','Those'],
        ['Complete: ___ are my cousins standing next to me.','These'],['Choose the verb: Those children ___ at school.','are'],['Complete: This pair of shoes ___ expensive.','is'],['___ houses across the lake belong to my grandparents.','Those'],['___ woman in the photograph is my aunt. (далеко от говорящего)','That'],['Complete: These photos ___ from our summer holiday.','are'],
        ['At the market Anna held two pears and said, “___ look fresh.”','These'],['The school was on the other side of the park. “___ is my school,” said Jack.','That'],['My sister pointed to three paintings at the far end of the hall. “I like ___,” she said.','those'],['A child showed me one drawing he had just made: “___ is my family.”','This'],['Complete the sentence: ___ three bags on the floor next to me are very heavy.','These'],['A tourist pointed towards distant mountains and asked, “What are ___?”','those']
      ]
    },
    {
      title:'Глаголы-связки be / look / feel / seem / sound / become',
      intro:'Глагол-связка соединяет подлежащее с его характеристикой. После look, seem, feel, sound и become часто стоит ПРИЛАГАТЕЛЬНОЕ, а не наречие: The soup smells good, не well.',
      formula:'subject + linking verb + adjective / noun phrase. She looks tired. He became a doctor.',
      contrast:[['She looks happy.','Она выглядит счастливой (признак).'],['She looks carefully at the screen.','Она внимательно смотрит на экран (действие).']],
      table:[['Впечатление глазами','look + adjective','The sky looks dark.'],['Ощущение','feel + adjective','I feel better now.'],['Звучание','sound + adjective','The idea sounds interesting.'],['Предположение','seem + adjective','He seems worried.'],['Изменение состояния','become / get + adjective','It became colder.']],
      nuance:'Good — прилагательное после feel/look/sound; well обычно наречие, но I feel well может означать «я здоров». Look at + объект — смысловой глагол с наречием (carefully).',
      how:'Спроси: слово описывает подлежащее или способ действия? Если описывает состояние, выбирай прилагательное. При действии возможны наречия.',
      mistakes:[['The music sounds beautifully.','The music sounds beautiful.'],['She looked happily after the long walk.','She looked happy after the long walk.']],
      practice:[
        ['The cake smells ___. (GOOD)','good'],['My parents seem ___. (HAPPY)','happy'],['It is getting ___. (DARK)','dark'],['This song sounds ___. (GREAT)','great'],['After the game I felt ___. (TIRED)','tired'],['That idea sounds ___. (INTERESTING)','interesting'],
        ['He looked ___ after hearing the news. (SAD)','sad'],['The athlete ran ___. (QUICK)','quickly'],['The coffee tasted ___. (BITTER)','bitter'],['The weather became ___ in November than it had been in October. (COLD)','colder'],['Our teacher spoke ___. (CLEAR)','clearly'],['Your explanation seems ___. (LOGICAL)','logical'],
        ['After two hours of walking, we all felt ___ and went home. (EXHAUST)','exhausted'],['When the lights went out, the corridor suddenly became ___. (DARK)','dark'],['“This plan sounds ___,” said Kate after hearing the details. (REASON)','reasonable'],['The actor looked ___ on stage, although he was nervous. (CONFIDENT)','confident'],['The children listened ___ to the story. (CAREFUL)','carefully'],['The mountain path looked ___ after the storm. (DANGER)','dangerous']
      ]
    },
    {
      title:'Предпочтения prefer / would prefer / would rather',
      intro:'Prefer говорит о привычном выборе, would prefer — о предпочтении в конкретной ситуации, would rather — о том, что человек скорее сделал бы сейчас.',
      formula:'prefer A to B; prefer doing A to doing B; would prefer to + V1; would rather + V1 (без to).',
      contrast:[['I prefer tea to coffee.','Обычно предпочитаю чай кофе.'],['I’d rather have tea now.','Сейчас я лучше выпью чай.']],
      table:[['Общее предпочтение','prefer + noun / -ing + to','I prefer walking to driving.'],['Конкретная ситуация','would prefer + to-infinitive','I would prefer to stay home.'],['Скорее сделал бы','would rather + bare infinitive','I would rather stay home.'],['Предпочёл бы не делать','would rather not + V1','I’d rather not go.']],
      nuance:'После would rather не ставь to: I’d rather go, не I’d rather to go. После prefer чаще используется to, а не than.',
      how:'Определи: речь об обычных вкусах или об этом решении? Затем проверь, нужен ли инфинитив с to или без to.',
      mistakes:[['I would rather to watch a film.','I would rather watch a film.'],['I prefer tea than coffee.','I prefer tea to coffee.']],
      practice:[
        ['I prefer pizza ___ pasta.','to'],['I would rather ___ at home. (STAY)','stay'],['She would prefer ___ the bus. (TAKE)','to take'],['We prefer reading ___ watching TV.','to'],['I’d rather ___ eat now. (отрицание)','not'],['Would you prefer ___ first? (GO)','to go'],
        ['Kate would rather ___ a walk than sit indoors. (TAKE)','take'],['My mum prefers cooking ___ ordering food.','to'],['I’d prefer ___ a glass of water. (HAVE)','to have'],['He would rather not ___ late. (BE)','be'],['Do you prefer summer ___ winter?','to'],['They would prefer ___ earlier. (LEAVE)','to leave'],
        ['The restaurant was noisy, so we would rather ___ outside. (SIT)','sit'],['He usually prefers travelling by train ___ flying.','to'],['After the exam she would prefer ___ a rest. (HAVE)','to have'],['“Would you like to drive?” “No, I’d rather ___.” (WALK)','walk'],['Mia does not like crowds: she would rather not ___ to the festival. (GO)','go'],['My brother prefers studying in the morning ___ studying at night.','to']
      ]
    },
    {
      title:'Парные союзы both … and / either … or / neither … nor',
      intro:'Парные союзы связывают два однородных элемента. Both … and включает оба варианта, either … or предлагает один из двух, neither … nor исключает оба.',
      formula:'both A and B = и A, и B; either A or B = либо A, либо B; neither A nor B = ни A, ни B.',
      contrast:[['Both Nick and Anna came.','Пришли оба.'],['Neither Nick nor Anna came.','Не пришёл ни один из них.']],
      table:[['Оба','both ... and','Both lessons are useful.'],['Один из двух','either ... or','You can choose either Monday or Tuesday.'],['Ни один из двух','neither ... nor','Neither answer is correct.']],
      nuance:'В конструкции neither ... nor уже есть отрицание — второе not обычно не требуется. Когда подлежащие разного числа, согласование может зависеть от ближайшего: Neither my parents nor my brother is at home.',
      how:'Сначала реши, включаешь оба варианта, выбираешь один или отвергаешь оба. Проверь второй союз и согласование сказуемого.',
      mistakes:[['Both Jack or Kate are ready.','Both Jack and Kate are ready.'],['Neither she nor I don’t know.','Neither she nor I know.']],
      practice:[
        ['Both my mum ___ my dad work here.','and'],['Either you ___ I will call later.','or'],['Neither Tom ___ Ben likes skiing.','nor'],['___ teachers are here today. (оба)','Both'],['You can have either coffee ___ tea.','or'],['Neither film ___ book was boring.','nor'],
        ['Both my friends ___ I enjoyed the concert.','and'],['We can meet either on Tuesday ___ on Thursday.','or'],['Neither Lena ___ her brother has a bike.','nor'],['___ the stories were interesting. (оба рассказа)','Both'],['___ of the two answers is correct. (ни один)','Neither'],['___ of these two roads leads to the station. (одна из двух)','Either'],
        ['Kate liked both the museum ___ the art gallery.','and'],['We had no milk and no juice: there was neither milk ___ juice.','nor'],['The school bus leaves at either seven ___ eight, depending on the day.','or'],['Neither the coach nor the players ___ pleased with the result yesterday. (BE)','were'],['Both the entrance test and the interview ___ required. (BE, present)','are'],['You can choose either option; ___ answer is acceptable. (EITHER)','either']
      ]
    },
    {
      title:'Собирательные, только множественные и особые существительные',
      intro:'Не все существительные принимают обычное -s. People, children, teeth и mice — неправильное множественное; trousers и scissors употребляются с множественным согласованием. Family может обозначать группу как целое.',
      formula:'a child → children; a tooth → teeth; a mouse → mice. The police ARE ...; My trousers ARE ...; A pair of trousers IS ...',
      contrast:[['The police are here.','Полиция здесь: множественное согласование.'],['My family is very friendly.','Моя семья дружная: группа как единое целое.']],
      table:[['Неправильное число','man → men; person → people','Two people are waiting.'],['Только множественное','scissors / trousers / clothes','These trousers are new.'],['Одна пара','a pair of + plural noun','This pair of scissors is sharp.'],['Собирательные','family / team / class','Our team is ready.']],
      nuance:'People обычно множественное (many people are). The police требует are. A pair of trousers — грамматическое ядро pair, поэтому is. В британском варианте family are возможно при акценте на членах семьи, но в базовых заданиях безопаснее family is как целое.',
      how:'Найди грамматическое главное слово и его число. Если pair — единственное. Если trousers/police/people — множественное.',
      mistakes:[['The police is looking for him.','The police are looking for him.'],['This scissors is old.','These scissors are old.']],
      practice:[
        ['Two ___ were playing in the garden. (CHILD)','children'],['The ___ are investigating the accident. (POLICE)','police'],['My trousers ___ too long. (BE, present)','are'],['I have three ___. (TOOTH)','teeth'],['One ___ ran across the floor. (MOUSE)','mouse'],['There are many ___ here. (PERSON)','people'],
        ['A pair of jeans ___ on the bed. (BE, present)','is'],['The police ___ already here. (BE, present)','are'],['Several ___ have fallen from the tree. (LEAF)','leaves'],['We need two ___ for the salad. (TOMATO)','tomatoes'],['My family ___ in Ufa. (LIVE, present)','lives'],['There are five ___ on the farm. (SHEEP)','sheep'],
        ['The children brushed their ___ before bed. (TOOTH)','teeth'],['These ___ are made of steel. (SCISSORS)','scissors'],['A pair of black trousers ___ hanging by the door. (BE, past)','was'],['The museum welcomed hundreds of ___ that day. (PERSON)','people'],['Our basketball team ___ ready for the match. (BE, present, team as one unit)','is'],['The police officers ___ working in the street all night. (BE, past)','were']
      ]
    },
    {
      title:'Each / every / all / none / one и местоимения выбора',
      intro:'Each выделяет каждого по отдельности, every — всех членов группы без исключения, all — группу целиком. None отрицает наличие или количество; one заменяет уже названное исчисляемое существительное.',
      formula:'each/every + singular noun + singular verb; all + plural noun + plural verb; one/ones = заменитель предмета.',
      contrast:[['Every student has a notebook.','У каждого ученика есть тетрадь.'],['All students have notebooks.','У всех учеников есть тетради.']],
      table:[['Каждый отдельно','each + singular','Each child has a ticket.'],['Все без исключения','every + singular','Every day is different.'],['Вся группа','all + plural','All the students are here.'],['Ни один','none (of)','None of the answers is correct.'],['Замена предмета','one / ones','I want the blue one.']],
      nuance:'После every ставится единственное число: every student is. Every нельзя использовать самостоятельно без существительного (используй everyone / every one of). One заменяет существительное, а не человека всегда.',
      how:'Проверь, имеется ли существительное после слова. Если every/each + единичный элемент — singular. Если all + несколько — plural.',
      mistakes:[['Every students are ready.','Every student is ready.'],['I like the red shoes, not the black one.','I like the red shoes, not the black ones.']],
      practice:[
        ['___ student needs a pen. (каждый)','Every'],['___ the children are here. (все)','All'],['Each person ___ a ticket. (HAVE, present)','has'],['I want this blue ___, not that red one.','one'],['___ of them was ready. (ни один)','None'],['All the books ___ on the shelf. (BE, present)','are'],
        ['___ pupil in our class has a dictionary. (EVERY)','Every'],['I tried three keys, but ___ worked. (NONE)','none'],['These shoes are too small. Have you got larger ___?','ones'],['___ of the two girls received a prize. (EACH)','Each'],['___ the questions were difficult. (ALL)','All'],['There are four bags. Which ___ is yours?','one'],
        ['The teacher spoke to ___ student individually. (EACH)','each'],['We examined all five solutions, but ___ was suitable. (NONE)','none'],['Every visitor ___ to show a ticket. (HAVE, present)','has'],['I like the green gloves better than the yellow ___.','ones'],['___ the shops on this street close at six. (ALL)','All'],['___ child in the group has completed the task. (EVERY)','Every']
      ]
    },
    {
      title:'Косвенная речь: местоимения, время и модальные глаголы',
      intro:'При передаче чужой речи меняется точка зрения: I → he/she, here → there, today → that day. После said в прошлом часто происходит сдвиг времени. Модальные глаголы тоже ведут себя по-разному.',
      formula:'“I am busy,” Ann said. → Ann said (that) she was busy. “I will call,” → he said he would call.',
      contrast:[['He said, “I can swim.”','Прямая речь.'],['He said (that) he could swim.','Косвенная речь: can → could.']],
      table:[['Present Simple → Past Simple','“I work.”','She said she worked.'],['Will → would','“I will come.”','He said he would come.'],['Can → could','“I can swim.”','She said she could swim.'],['May → might','“I may leave.”','She said she might leave.'],['Yesterday → the day before','“I came yesterday.”','He said he had come the day before.']],
      nuance:'Must выражения обязанности часто передают через had to, но must (логический вывод) может сохраняться. Could, would, should обычно не сдвигаются. При актуальной истине возможен несдвинутый present, поэтому смотри на контекст.',
      how:'Отметь говорящего, адресата и момент речи. Замени местоимения/указатели, затем проверь время и модальные формы.',
      mistakes:[['He said that I was tired. (говорил о себе)','He said that he was tired.'],['She asked where did I live.','She asked where I lived.']],
      practice:[
        ['“I can help,” she said. → She said she ___ help.','could'],['“I will phone,” he said. → He said he ___ phone.','would'],['“I am late,” Ann said. → Ann said she ___ late.','was'],['“I may go,” he said. → He said he ___ go.','might'],['“We have to leave,” they said. → They said they ___ to leave.','had'],['“I work here,” Kate said. → Kate said she worked ___.','there'],
        ['“My brother likes chess,” Mia said. → Mia said ___ brother liked chess.','her'],['“I saw Tom yesterday,” Nina said. → Nina said she had seen Tom the day ___.','before'],['“I cannot swim,” he said. → He said he ___ swim.','couldn’t||could not'],['“I will visit tomorrow,” she said. → She said she would visit the next ___.','day'],['“I am studying,” he said. → He said he ___ studying.','was'],['“I should rest,” he said. → He said he ___ rest.','should'],
        ['Leo said, “I can see the mountains from here.” → Leo said he ___ see the mountains from there.','could'],['Mia said, “I will finish the project tomorrow.” → Mia said she ___ finish it the next day.','would'],['He said, “I have to work tonight.” → He said he ___ to work that night.','had'],['The girl said, “We visited the museum yesterday.” → She said they had visited it the day ___.','before'],['Ann asked, “Where does Ben live?” → Ann asked where Ben ___.','lived'],['Tom said, “I might be late.” → Tom said he ___ be late.','might']
      ]
    },
    {
      title:'Артикли: география, абстрактные и вещественные существительные',
      intro:'Артикль выбирают по смыслу и типу географического названия: the обычно нужен с реками, морями, океанами, группами островов и названиями государств во множественном числе. Города и большинство стран — без артикля.',
      formula:'the Volga / the Black Sea / the United States; Ø Russia / London / Lake Baikal. Ø love / Ø water (в общем); the water in this glass (конкретная).',
      contrast:[['Water is important.','Вода вообще важна (Ø).'],['The water in this bottle is cold.','Вода в этой бутылке холодная (the).']],
      table:[['Реки и моря','the','the Thames; the Black Sea'],['Страны и города','Ø','Russia; France; London'],['Группы островов','the','the Maldives'],['Озеро + название','Ø','Lake Baikal'],['Абстрактная категория','Ø','Friendship is important.'],['Конкретное вещество','the','The milk in the fridge is fresh.']],
      nuance:'The United Kingdom, the Netherlands, the United States — с the; Mount Everest — без. С абстрактными существительными конкретизация меняет артикль: the happiness she felt. Не ставь a/an перед неисчисляемым water без особого значения порции.',
      how:'Для географии определи тип объекта. Для абстрактного/вещественного существительного реши: речь вообще или о конкретном известном предмете.',
      mistakes:[['She lives in the Russia.','She lives in Russia.'],['We swam in Black Sea.','We swam in the Black Sea.']],
      practice:[
        ['We travelled along ___ Volga.','the'],['My friend lives in ___ London. (введи Ø)','Ø||—||-'],['___ United States is a large country.','The'],['___ water is necessary for life. (вообще)','Ø||—||-'],['They visited ___ Lake Baikal. (введи Ø)','Ø||—||-'],['We sailed across ___ Atlantic Ocean.','the'],
        ['Our school is in ___ Ufa. (Ø)','Ø||—||-'],['The train crossed ___ Alps.','the'],['___ happiness of the children was obvious.','The'],['She visited ___ Netherlands last summer.','the'],['They climbed ___ Mount Elbrus. (Ø)','Ø||—||-'],['___ information you sent me was useful.','The'],
        ['Before the trip the class studied ___ geography of Scotland.','the'],['We could see ___ Baltic Sea from the hotel.','the'],['My grandparents moved to ___ France in 2015. (Ø)','Ø||—||-'],['___ air in the classroom felt warm and heavy.','The'],['On their holiday they visited ___ Canary Islands.','the'],['The scientist spoke about ___ importance of clean drinking water.','the']
      ]
    },
    {
      title:'Словообразование глаголов: -en / -ise / -ize / -ify и приставки',
      intro:'В заданиях 29–34 исходное слово может превратиться в глагол. Сначала ищи позицию сказуемого и значение, затем подбирай знакомый глагол, проверяй орфографию и его форму по времени.',
      formula:'wide → widen; short → shorten; simple → simplify; modern → modernise/modernize; class → classify; clear → clarify.',
      contrast:[['The teacher simplified the task.','Глагол: сделала задание проще.'],['It was a simple task.','Прилагательное: простое задание.']],
      table:[['-en','wide → widen; short → shorten','The days shorten.'],['-ify','simple → simplify; class → classify','Please clarify your answer.'],['-ise/-ize','modern → modernise / modernize','They modernised the library.'],['re-','write → rewrite','Rewrite the sentence.'],['mis-','understand → misunderstand','I misunderstood the question.']],
      nuance:'Не существует универсальной модели: wide → widen, но long → lengthen. Возможны варианты British -ise и American -ize. Если нужен Past Simple или Passive, образованный глагол дополнительно изменяется.',
      how:'Определи часть речи в пропуске → нужна ли приставка по смыслу → образование глагола → временна́я или залоговая форма.',
      mistakes:[['Please simple the answer.','Please simplify the answer.'],['The road was wide by workers.','The road was widened by workers.']],
      practice:[
        ['The exercise was difficult, so the teacher tried to ___ it. (SIMPLE)','simplify'],['They plan to ___ the old library. (MODERN)','modernise||modernize'],['Please ___ your answer. (CLEAR)','clarify'],['The company wanted to ___ the road. (WIDE)','widen'],['Children often ___ a simple instruction. (UNDERSTAND, negative meaning)','misunderstand'],['Could you ___ this paragraph? (WRITE, again)','rewrite'],
        ['The days ___ in autumn. (SHORT, present)','shorten'],['The new law will ___ the rules. (SIMPLE)','simplify'],['They need to ___ the entrance. (WIDE)','widen'],['The club hopes to ___ more students. (ACTIVE, verb)','activate'],['We should ___ the files by subject. (CLASS)','classify'],['His plan was to ___ the apartment. (MODERN)','modernise||modernize'],
        ['The engineers ___ the bridge last year to make it safer. (WIDE)','widened'],['The teacher ___ the instructions after students looked confused. (CLEAR)','clarified'],['The computer system was ___ last month. (MODERN)','modernised||modernized'],['The two routes were ___ into separate categories. (CLASS)','classified'],['After the storm, the days began to ___ again in spring. (LONG)','lengthen'],['She realised she had ___ the question and asked again. (UNDERSTAND, negative)','misunderstood']
      ]
    },
    {
      title:'Словообразование: словосложение и конверсия',
      intro:'Не все новые слова получаются суффиксами. Словосложение соединяет основы (football, blue-eyed), конверсия меняет часть речи без суффикса (to email → an email, a hand → to hand).',
      formula:'N + N → compound noun; adj + N + -ed → compound adjective; noun ↔ verb (conversion).',
      contrast:[['She sent me an email.','Email — существительное.'],['Please email me tomorrow.','Email — глагол.']],
      table:[['Два существительных','rain + coat → raincoat','Take your raincoat.'],['Прилагательное + N + -ed','blue + eye → blue-eyed','A blue-eyed girl'],['Число + N + -ed','eight + leg → eight-legged','An eight-legged spider'],['Конверсия N → V','hand → to hand','Hand me the paper.'],['Конверсия V → N','to walk → a walk','Let’s go for a walk.']],
      nuance:'В сложных прилагательных перед существительным часто стоит дефис: a well-known actor, a five-year-old boy. После five-year-old слово year в единственном числе. Отделяй словообразование от простой комбинации существительного и прилагательного.',
      how:'Определи функцию слова в предложении. Сравни с известными родственными словами. Не добавляй суффикс, если это конверсия.',
      mistakes:[['A five-years-old boy entered.','A five-year-old boy entered.'],['He gave me a blue eye girl.','He introduced me to a blue-eyed girl.']],
      practice:[
        ['It started raining, so I put on my ___. (RAIN + COAT)','raincoat'],['The spider has eight legs: it is ___. (EIGHT + LEG)','eight-legged'],['She has blue eyes: she is ___. (BLUE + EYE)','blue-eyed'],['He asked me to ___ the note to Anna. (HAND, verb)','hand'],['We went for a long ___ after lunch. (WALK, noun)','walk'],['I received an ___ from my teacher. (EMAIL, noun)','email'],
        ['The artist was ___. (WELL + KNOW, adjective)','well-known'],['They bought a ___ house. (THREE + BEDROOM)','three-bedroom'],['Please ___ me the details. (EMAIL, verb)','email'],['The school organized a ___ competition. (FOOT + BALL)','football'],['A ___ child was waiting outside. (FIVE + YEAR + OLD)','five-year-old'],['The child wore a ___ sweater. (HAND + MAKE)','handmade'],
        ['She joined a ___ course for beginners. (SHORT + TERM)','short-term'],['We saw a ___ bird in the garden. (BRIGHT + COLOUR)','bright-coloured||bright-colored'],['The ___ stopped at the crossing. (DRIVE)','driver'],['“Could you ___ me that book?” asked Mia. (HAND)','hand'],['The family rented a ___ cottage for their trip. (TWO + BEDROOM)','two-bedroom'],['The children went for an evening ___ in the park. (WALK)','walk']
      ]
    },
    {
      title:'Отрицательные и смысловые приставки dis- / mis- / re- / over- / under-',
      intro:'Приставка меняет смысл корня. Не все приставки означают отрицание: re- = снова, mis- = неправильно, over- = чрезмерно, under- = недостаточно, dis- нередко выражает отрицание или обратное действие.',
      formula:'rewrite = write again; misunderstand = understand wrongly; overcook = cook too much; underestimate = estimate too low; disagree = not agree.',
      contrast:[['I rewrote the email.','Я переписала письмо (снова).'],['I misunderstood the email.','Я неправильно поняла письмо.']],
      table:[['re-','повторно','rewrite, rebuild, reread'],['mis-','ошибочно','misunderstand, misread, misplace'],['over-','чрезмерно','overcook, overestimate'],['under-','недостаточно','underestimate, underpay'],['dis-','противоположное','disagree, disconnect']],
      nuance:'Не подбирай приставку только по звучанию. Например, `disunderstand` и `overunderstand` — неверные слова. Перепроверь орфографию и часть речи, а затем изменяй форму по контексту.',
      how:'Определи, означает ли контекст повтор, ошибку, избыток, недостаток или отрицание. Выбери реальное слово из словарного семейства.',
      mistakes:[['He ununderstood the rule.','He misunderstood the rule.'],['The chef undercooked the food for too long.','The chef overcooked the food.']],
      practice:[
        ['Please ___ this paragraph. (WRITE, again)','rewrite'],['I ___ the address and got lost. (READ, wrongly)','misread'],['You shouldn’t ___ this dish. (COOK, too much)','overcook'],['They often ___ the difficulty. (ESTIMATE, too low)','underestimate'],['I completely ___ with that opinion. (AGREE, negative)','disagree'],['The internet was ___ during the storm. (CONNECT, negative)','disconnected'],
        ['She ___ the message because she was tired. (UNDERSTAND, wrongly, past)','misunderstood'],['The bridge was ___ after the flood. (BUILD, again, past participle)','rebuilt'],['He ___ the test results. (ESTIMATE, too high, past)','overestimated'],['The children ___ the names on their papers. (WRITE, again, past)','rewrote'],['The sauce was ___. (COOK, too much)','overcooked'],['It is easy to ___ the cost of travelling. (ESTIMATE, too low)','underestimate'],
        ['After checking her email, she realised she had ___ the time. (READ, wrongly)','misread'],['The school decided to ___ the old sports hall. (BUILD, again)','rebuild'],['The coach warned us not to ___ our opponents. (ESTIMATE, too low)','underestimate'],['He had to ___ the file after the first version was lost. (WRITE, again)','rewrite'],['The alarm was ___ so we could restart the system. (CONNECT, negative)','disconnected'],['Parents sometimes ___ how much sleep teenagers need. (ESTIMATE, too low)','underestimate']
      ]
    },
    {
      title:'Relative pronouns: who / which / that / whose / whom',
      intro:'Относительные местоимения присоединяют информацию о человеке или предмете. Who обычно о людях, which — о вещах, whose — принадлежность; whom — формальный объект.',
      formula:'the girl who helped me; the book which/that I read; the boy whose bike was stolen; the person to whom I spoke (formal).',
      contrast:[['This is the boy who won.','Мальчик, который победил (подлежащее).'],['This is the boy whose bike was stolen.','Мальчик, чей велосипед украли (принадлежность).']],
      table:[['Люди, подлежащее','who / that','The girl who called me'],['Вещи','which / that','The film that we saw'],['Чей','whose','The student whose bag is red'],['Формальный объект','whom','The man whom I met']],
      nuance:'В ограничительных предложениях объектное who/which/that часто опускается: The film (that) I watched. Подлежащее не опускают: The boy who lives here. После запятой в добавочных relative clauses обычно не ставят that.',
      how:'Найди определяемое существительное и роль слова внутри придаточного: человек, вещь или принадлежность.',
      mistakes:[['The girl which called is here.','The girl who called is here.'],['I know the boy who mother teaches English.','I know the boy whose mother teaches English.']],
      practice:[
        ['This is the girl ___ won the prize.','who||that'],['The computer ___ I use is old.','which||that'],['I know a boy ___ father is a doctor.','whose'],['The woman to ___ I spoke was kind.','whom'],['The film ___ we watched was funny.','which||that'],['The tree ___ grows near our house is old.','which||that'],
        ['The girl ___ bicycle was stolen called the police.','whose'],['The man ___ lives next door is a teacher.','who||that'],['The museum ___ opened last year is popular.','which||that'],['The friend ___ I met yesterday lives in Moscow.','whom||who||that'],['This is the student ___ essay won.','whose'],['The phone ___ I bought is already broken.','which||that'],
        ['A young inventor ___ project won the competition spoke at the event.','whose'],['The village ___ we visited last summer was beautiful.','which||that'],['The traveller ___ showed us the way was from Scotland.','who||that'],['I spoke to the teacher ___ daughter studies in our school.','whose'],['That is the author ___ novel we read in class.','whose'],['The group visited an island ___ has no permanent residents.','which||that']
      ]
    }
  ];

  const library=window.OGE_GRAMMAR_REFERENCE_V18;
  const program=window.OGE_PROGRAM;
  if(!library?.guides || !program?.grammarGroups){console.error('ОГЭ v26: основы v19 не загружены');return;}
  const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function renderTheory(s,index){
    const table=s.table.map(x=>`<tr><th>${escape(x[0])}</th><td>${escape(x[1])}</td><td lang="en">${escape(x[2])}</td></tr>`).join('');
    const error=s.mistakes.map(pair=>`<div class="og26-error"><span>${escape(pair[0])}</span><strong>${escape(pair[1])}</strong></div>`).join('');
    return `<div class="og26-guide" id="rule-theory">
    <p class="og26-eyebrow">ОГЭ 2027 · учебный разбор ${index+1} · дополнение к 98 темам</p><h2>${escape(s.title)}</h2>
    <section><h3>01 · Зачем нужна конструкция</h3><p>${escape(s.intro)}</p></section>
    <div class="og26-schema"><span>СМЫСЛ</span><b>→</b><span>РОЛЬ В ПРЕДЛОЖЕНИИ</span><b>→</b><span>ФОРМА</span><b>→</b><span>ПРОВЕРКА</span></div>
    <section><h3>02 · Основная модель</h3><div class="og26-formula">${escape(s.formula)}</div></section>
    <section><h3>03 · Сравни два значения</h3><div class="og26-pair">${s.contrast.map(p=>`<div><strong lang="en">${escape(p[0])}</strong><p>${escape(p[1])}</p></div>`).join('')}</div>
    <div class="og26-overflow"><table class="og26-table"><thead><tr><th>Когда</th><th>Форма</th><th>Пример</th></tr></thead><tbody>${table}</tbody></table></div></section>
    <section><h3>04 · Важные ограничения</h3><p>${escape(s.nuance)}</p><div class="og26-error-list">${error}</div></section>
    <section><h3>05 · Алгоритм для экзамена</h3><p>${escape(s.how)}</p><p class="og26-note">После разбора пройди три уровня без вариантов. Отдельный тренажёр заданий 20–34 содержит связные тексты с грамматическим преобразованием и словообразованием.</p></section>
    </div>`;
  }
  const group={id:'g12',name:'Дополнения по кодификатору: специальные случаи и словообразование',topics:[]};
  specs.forEach((s,n)=>{
    if(library.guides[s.title])throw new Error('Повторяющаяся грамматическая тема: '+s.title);
    if(s.practice.length!==18)throw new Error('Для '+s.title+' найдено '+s.practice.length+' заданий вместо 18');
    const id='g12t'+(n+1);
    group.topics.push({id,title:s.title});
    library.guides[s.title]={title:s.title,subtitle:s.intro,theory:renderTheory(s,n),levels:[0,1,2].map(stage=>[...s.practice.slice(stage*6,stage*6+6),...s.practice.slice(((stage+1)%3)*6,((stage+1)%3)*6+6)].map((row,i)=>({id:'og26-'+n+'-'+stage+'-'+i,prompt:row[0],answer:row[1],why:s.how+' '+s.nuance}))),v26:true};
  });
  program.grammarGroups.push(group);
  // Сохраняем предыдущие 98 объяснений и прогресс, но исправляем несколько систематически слабых мест.
  const extra={
    'Артикли a / an / the / нулевой':{note:'Дополнительно: реки и моря требуют the (the Volga, the Black Sea), большинство стран и городов — Ø (Russia, Ufa). Абстрактные и вещественные слова без конкретизации часто без артикля: Water is essential. The water in this glass — конкретная вода.',tasks:[['We crossed ___ Thames in the morning.','the'],['She visited ___ Norway in June.','Ø||—||-'],['___ coffee in this cup is cold.','The']]},
    'Единственное и множественное число':{note:'Особые случаи: people и police требуют множественного согласования; scissors, jeans и trousers обычно употребляются во множественном числе. A pair of jeans is ... — ядро pair стоит в единственном.',tasks:[['Two ___ were waiting. (PERSON)','people'],['The ___ are here. (POLICE)','police'],['A pair of jeans ___ on the table. (BE, present)','is']]},
    'Relative clauses':{note:'Who относится к людям, which — к предметам, whose обозначает принадлежность. Whom используется как формальная объектная форма. Нельзя опускать относительное местоимение в роли подлежащего.',tasks:[['The boy ___ bike was stolen is upset.','whose'],['A woman ___ teaches English lives here.','who||that'],['The exhibition ___ we visited was wonderful.','which||that']]},
    'Reported questions':{note:'Косвенные вопросы сохраняют порядок утверждения: She asked where I lived, не where did I live. Can → could, will → would после глагола сообщения в прошлом, если важен временной сдвиг.',tasks:[['She asked where I ___. (LIVE)','lived'],['Tom asked if I ___ help. (CAN, reported)','could'],['Mia asked what time the train ___. (LEAVE, habitual timetable, reported)','left||leaves']]},
    'Both / either / neither':{note:'Три логики: BOTH ... AND (оба), EITHER ... OR (один из двух), NEITHER ... NOR (ни один). После neither ... nor не добавляй дополнительное not.',tasks:[['Both my mum ___ dad were there.','and'],['Neither Nick ___ Paul was late.','nor'],['You may choose either red ___ blue.','or']]},
    'Словообразование существительных':{note:'Не забывай существительные -ance/-ence, -ity, -ness, -tion/-sion, -er/-or и орфографию: decide→decision, perform→performance, happy→happiness. Сначала проверяй часть речи по синтаксису.',tasks:[['The ___ was difficult. (DECIDE)','decision'],['Her ___ surprised us. (HAPPY)','happiness'],['The ___ gave a speech. (SPEAK)','speaker']]},
    'Словообразование прилагательных':{note:'Включи -able/-ible, -ive, -ous, -ful/-less, -al, -ic, -ed/-ing: comfort→comfortable, impress→impressive, danger→dangerous. При отрицательном значении выбирай приставку по конкретному слову.',tasks:[['The journey was ___. (COMFORT)','comfortable'],['The film was ___. (IMPRESS)','impressive'],['The path is ___. (DANGER)','dangerous']]},
    'Словообразование наречий':{note:'-ly не всегда добавляется механически: happy→happily, true→truly; fast и hard могут быть наречиями без -ly. Сравни hard (усердно) и hardly (едва).',tasks:[['She answered ___. (POLITE)','politely'],['The test was ___ difficult. (SURPRISE)','surprisingly'],['He drove ___. (CAREFUL)','carefully']]},
    'Отрицательные приставки':{note:'Нельзя свободно комбинировать приставки. Наиболее употребимы impossible, illegal, irregular, dishonest, unhappy. Сначала определяй смысл, затем точное слово.',tasks:[['The plan is ___. (POSSIBLE, negative)','impossible'],['His answer was ___. (HONEST, negative)','dishonest'],['It was an ___ action. (LEGAL, negative)','illegal']]},
    'Союзы и слова-связки':{note:'Различай despite / in spite of + noun/-ing и although + целое придаточное. Because + sentence; because of + noun/-ing. However соединяет самостоятельные части текста.',tasks:[['___ it was raining, we went out. (ALTHOUGH)','Although'],['We stayed home because ___ the storm.','of'],['___ being tired, she continued studying. (DESPITE)','Despite']]}
  };
  for(const [title,v] of Object.entries(extra)){
    const item=library.guides[title]; if(!item)throw new Error('Нет старой темы: '+title);
    item.theory+=`<section class="og26-supplement"><h3>Дополнительный разбор кодификатора · v26</h3><p>${escape(v.note)}</p><a href="#/экзамен-грамматика">Перейти к тренировке заданий 20–34</a></section>`;
    // Каждый дополнительный вопрос добавляем только к итоговому уровню и не заменяем старые ответы.
    const levels=item.levels;v.tasks.forEach((row,i)=>levels[2].push({id:'og26-extra-'+i+'-'+title.length,prompt:'Дополнительный экзаменационный контекст: '+row[0],answer:row[1],why:v.note}));
  }
  window.OGE_GRAMMAR_V26={topics:specs.length,total:program.grammarGroups.reduce((n,g)=>n+g.topics.length,0),enhanced:Object.keys(extra).length};
})();
