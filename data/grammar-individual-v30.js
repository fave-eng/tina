/* ОГЭ 2027 · индивидуальные учебные модули по временам, этап 2.
 * Точные идентификаторы существующих тем, старый прогресс не изменяется.
 * Каждый текст и 36 заданий на тему составлены отдельно, без клонирования двух примеров.
 */
(()=>{'use strict';
const lib=window.OGE_GRAMMAR_REFERENCE_V18;
if(!lib?.guides){console.error('v30: необходим базовый грамматический модуль');return;}
const lessons={
"Present Simple": {
"slug": "present-simple",
"theory": "\n<article class=\"gm30 gm30-habit\" id=\"rule-theory\"><header class=\"gm30-hero\"><small>Настоящее простое · повторяемость, факты, состояния</small><h2>Present Simple: что верно обычно?</h2><p>Представь расписание недели. Мы не наблюдаем действие прямо сейчас, а рассказываем, <b>как устроена жизнь</b>, что бывает регулярно и какие факты остаются верными.</p></header>\n<section class=\"gm30-section\" id=\"gm30-ps-meaning\"><h3>1. Сначала выбери смысл</h3><div class=\"gm30-columns\"><div><strong>Повторяющиеся действия</strong><p><b>I walk to school on weekdays.</b><br>По будням я хожу в школу пешком.</p><p>Важна привычка, а не момент речи.</p></div><div><strong>Общие факты</strong><p><b>Water boils at 100°C at standard atmospheric pressure.</b><br>Вода кипит при 100°C при нормальном атмосферном давлении.</p><p>Общее утверждение, а не конкретная кастрюля сейчас.</p></div><div><strong>Постоянные состояния</strong><p><b>My grandmother lives in Kazan.</b><br>Моя бабушка живёт в Казани.</p><p>Где живёт обычно, а не где находится сегодня.</p></div></div><p class=\"gm30-hint\">Иногда <i>now</i> тоже встречается с Present Simple: «Now I understand» — если глагол описывает состояние. Нельзя выбирать время только по одному маркеру.</p></section>\n<section class=\"gm30-section\" id=\"gm30-ps-forms\"><h3>2. Как строить утверждения</h3><div class=\"gm30-table\"><table><thead><tr><th>Подлежащее</th><th>Обычный глагол</th><th>Пример</th></tr></thead><tbody><tr><td>I / you / we / they</td><td>основная форма</td><td>We <b>study</b> English. — Мы учим английский.</td></tr><tr><td>he / she / it</td><td>глагол + s / es</td><td>She <b>studies</b> English. — Она учит английский.</td></tr></tbody></table></div><p>После согласной + <b>y</b>: study → studies; после гласной + y: play → plays. Концовки -ss, -sh, -ch, -x, -o часто получают -es: watch → watches, go → goes. Исключения: <b>have → has</b>; be → am/is/are.</p></section>\n<section class=\"gm30-section\" id=\"gm30-ps-questions\"><h3>3. В вопросах и отрицаниях -s переходит к does</h3><div class=\"gm30-table\"><table><thead><tr><th>Тип</th><th>I / you / we / they</th><th>he / she / it</th></tr></thead><tbody><tr><td>Утверждение</td><td>They <b>like</b> films.</td><td>She <b>likes</b> films.</td></tr><tr><td>Отрицание</td><td>They <b>don't like</b> films.</td><td>She <b>doesn't like</b> films.</td></tr><tr><td>Вопрос</td><td><b>Do</b> they <b>like</b> films?</td><td><b>Does</b> she <b>like</b> films?</td></tr><tr><td>Краткий ответ</td><td>Yes, they do.</td><td>No, she doesn't.</td></tr></tbody></table></div><p>Вопрос о конкретной информации: <b>Where does she live?</b> — Где она живёт? После <b>does / doesn't</b> всегда начальная форма глагола: не <s>does she lives</s>.</p><p>Не применяй <b>do / does</b> к связке be: <b>Is he tired?</b>, а не <s>Does he is tired?</s>.</p></section>\n<section class=\"gm30-section\" id=\"gm30-ps-frequency\"><h3>4. Положение слов частоты</h3><div class=\"gm30-scale\"><span>always</span><span>usually</span><span>often</span><span>sometimes</span><span>rarely</span><span>never</span></div><p>Перед обычным глаголом: <b>She often reads</b> before bed (она часто читает перед сном). Но после be: <b>She is often busy</b> (она часто занята). Наречия выражают частоту, а не обязательное время.</p></section>\n<section class=\"gm30-section\" id=\"gm30-ps-exam\"><h3>5. Алгоритм для ОГЭ 20–28</h3><ol><li>Определи, речь о привычке, общем факте или состоянии.</li><li>Найди подлежащее, включая скрытое в сложной группе: <b>my best friend = he/she</b>.</li><li>Проверь тип предложения: отрицание и вопрос требуют do/does.</li><li>Внеси орфографическое изменение, только если оно необходимо: <b>tries, watches, has</b>.</li></ol><div class=\"gm30-errors\"><p><s>My brother don't play chess.</s><b>My brother doesn't play chess.</b> — Подлежащее he, значит doesn't.</p><p><s>Does she studies here?</s><b>Does she study here?</b> — Не ставим -s дважды.</p></div></section></article>\n",
"levels": [
[
{
"prompt": "My sister ___ in a hospital. (WORK)",
"answer": "works",
"why": "Sister = she; третье лицо требует -s."
},
{
"prompt": "I ___ coffee in the evening. (NOT DRINK)",
"answer": "don't drink||do not drink",
"why": "I образует отрицание через don't + основную форму."
},
{
"prompt": "___ your parents cook on Sundays? (DO)",
"answer": "Do",
"why": "Parents = they; общий вопрос начинается с Do."
},
{
"prompt": "He usually ___ early. (GET UP)",
"answer": "gets up",
"why": "С he к get добавляем -s."
},
{
"prompt": "She ___ three languages. (SPEAK)",
"answer": "speaks",
"why": "Утверждение, she + speaks."
},
{
"prompt": "My cousins ___ tennis twice a week. (PLAY)",
"answer": "play",
"why": "Cousins во множественном числе: начальная форма play."
},
{
"prompt": "Where ___ your brother study? (DO)",
"answer": "does",
"why": "Специальный вопрос: where + does + he + study."
},
{
"prompt": "My dog ___ sleeping in the garden on cold days. (NOT LIKE)",
"answer": "doesn't like||does not like",
"why": "Dog = it, после doesn't стоит like."
},
{
"prompt": "Our teacher ___ homework every Friday. (CHECK)",
"answer": "checks",
"why": "Teacher = he/she, check заканчивается на -ch: checks."
},
{
"prompt": "The train ___ at 8:15 every weekday. (LEAVE)",
"answer": "leaves",
"why": "Расписание: Present Simple, train = it."
},
{
"prompt": "Lucy ___ a blue bicycle. (HAVE)",
"answer": "has",
"why": "В третьем лице have → has."
},
{
"prompt": "___ he often visit his grandparents? (DO)",
"answer": "Does",
"why": "He образует вопрос через Does."
}
],
[
{
"prompt": "Rewrite as a question: She enjoys documentaries.",
"answer": "Does she enjoy documentaries?",
"why": "Does перед she; enjoy без -s."
},
{
"prompt": "Correct: My friend go to school by bus.",
"answer": "My friend goes to school by bus.",
"why": "Friend — одно лицо; go → goes."
},
{
"prompt": "Make negative: They watch TV in the morning.",
"answer": "They don't watch TV in the morning.||They do not watch TV in the morning.",
"why": "They → don't + watch."
},
{
"prompt": "Correct: Does your mum works at a library?",
"answer": "Does your mum work at a library?",
"why": "Does уже несёт показатель третьего лица."
},
{
"prompt": "Form a Where-question: Adam lives in Perm.",
"answer": "Where does Adam live?",
"why": "Where + does + Adam + начальная форма live."
},
{
"prompt": "Rewrite with SHE: I study French after school.",
"answer": "She studies French after school.",
"why": "Согласная + y → ies."
},
{
"prompt": "Make negative: He has lessons on Saturdays.",
"answer": "He doesn't have lessons on Saturdays.||He does not have lessons on Saturdays.",
"why": "После doesn't: have, не has."
},
{
"prompt": "Correct: I am usually go to school early.",
"answer": "I usually go to school early.",
"why": "Обычное действие в Simple не требует am."
},
{
"prompt": "Rewrite as a question: Your neighbours know each other.",
"answer": "Do your neighbours know each other?",
"why": "Neighbours во множественном числе: Do."
},
{
"prompt": "Correct: She don't understand this rule.",
"answer": "She doesn't understand this rule.",
"why": "She → doesn't."
},
{
"prompt": "Form a How-often question: Mark plays football every weekend.",
"answer": "How often does Mark play football?",
"why": "После does ставим play."
},
{
"prompt": "Make a short negative answer: Does Anna read comics?",
"answer": "No, she doesn't.||No, she does not.",
"why": "Краткий ответ с does, без основного глагола."
}
],
[
{
"prompt": "Every winter, my grandparents ___ to the mountains. (TRAVEL)",
"answer": "travel",
"why": "Grandparents во множественном числе; повторение every winter."
},
{
"prompt": "Our school ___ at nine on Mondays. (START)",
"answer": "starts",
"why": "Schedule: school = it."
},
{
"prompt": "A good detective always ___ small details. (NOTICE)",
"answer": "notices",
"why": "Notice → notices, третье лицо."
},
{
"prompt": "Not all animals ___ during the day. (SLEEP)",
"answer": "sleep",
"why": "Animals множественное число."
},
{
"prompt": "My cousin never ___ his phone at night. (SWITCH OFF)",
"answer": "switches off",
"why": "Switch заканчивается на -ch: switches."
},
{
"prompt": "Emma ___ her grandparents every Saturday. (VISIT)",
"answer": "visits",
"why": "Emma = she, регулярность every Saturday."
},
{
"prompt": "Why ___ your little brother dislike carrots? (DO)",
"answer": "does",
"why": "Brother = he, Wh-question с does."
},
{
"prompt": "The children ___ much sugar. (NOT EAT)",
"answer": "don't eat||do not eat",
"why": "Children = they, don't + eat."
},
{
"prompt": "My father ___ the news before breakfast. (WATCH)",
"answer": "watches",
"why": "Watch → watches после -ch."
},
{
"prompt": "Tom and Nina ___ in the same class. (STUDY)",
"answer": "study",
"why": "Two people → they, без -s."
},
{
"prompt": "Ice ___ in warm water. (MELT)",
"answer": "melts",
"why": "Общий физический факт; ice = it."
},
{
"prompt": "A person who reads a lot often ___ new words. (LEARN)",
"answer": "learns",
"why": "Главный подлежащий person — единственное число, не words."
}
]
]
},
"Present Continuous": {
"slug": "present-continuous",
"theory": "\n<article class=\"gm30 gm30-camera\" id=\"rule-theory\"><header class=\"gm30-hero\"><small>Настоящее длительное · действие в развитии</small><h2>Present Continuous: камера включена</h2><p>Представь кадр, который показывает действие <b>в процессе</b>. Но это не обязательно секунда, когда ты произносишь предложение: процесс может длиться всю неделю.</p></header>\n<section class=\"gm30-section\" id=\"gm30-pc-context\"><h3>1. Две камеры: прямо сейчас и временный период</h3><div class=\"gm30-columns gm30-two\"><div><strong>Прямо сейчас</strong><p><b>Look! It is snowing.</b><br>Смотри! Идёт снег.</p><p>Мы наблюдаем происходящее.</p></div><div><strong>Около настоящего</strong><p><b>I'm reading a long novel this month.</b><br>В этом месяце я читаю длинный роман.</p><p>В момент разговора книга может лежать закрытой.</p></div></div><p>Ещё один контекст — личная договорённость о будущем: <b>I'm meeting my tutor tomorrow.</b> — Завтра встречаюсь с репетитором. Тут важна запланированная встреча; это отдельная функция Continuous.</p></section>\n<section class=\"gm30-section\" id=\"gm30-pc-form\"><h3>2. Формула состоит из двух обязательных деталей</h3><div class=\"gm30-equation\"><span>am / is / are</span><b>+</b><span>глагол с -ing</span></div><div class=\"gm30-table\"><table><thead><tr><th></th><th>Утверждение</th><th>Отрицание</th><th>Вопрос</th></tr></thead><tbody><tr><td>I</td><td>I <b>am working.</b></td><td>I'm <b>not working.</b></td><td><b>Am</b> I working?</td></tr><tr><td>she/he/it</td><td>She <b>is working.</b></td><td>She <b>isn't working.</b></td><td><b>Is</b> she working?</td></tr><tr><td>you/we/they</td><td>They <b>are working.</b></td><td>They <b>aren't working.</b></td><td><b>Are</b> they working?</td></tr></tbody></table></div><p>Краткий ответ: <b>Are you working? — Yes, I am.</b> / <b>No, I'm not.</b> На вопрос Where: <b>Where are they going?</b> — Куда они идут?</p></section>\n<section class=\"gm30-section\" id=\"gm30-pc-spelling\"><h3>3. Почему writing, running, lying?</h3><div class=\"gm30-table\"><table><thead><tr><th>Правило</th><th>Примеры</th><th>Пояснение</th></tr></thead><tbody><tr><td>Обычное + ing</td><td>read → reading</td><td>Основа не меняется</td></tr><tr><td>Немое -e убираем</td><td>write → writing; make → making</td><td>Но see → seeing</td></tr><tr><td>Гласная + согласная</td><td>run → running; sit → sitting</td><td>Удвоение при соответствующем ударении и фонетическом строении</td></tr><tr><td>-ie → y</td><td>lie → lying; die → dying</td><td>Не <s>lieing</s></td></tr></tbody></table></div><p><b>Open → opening</b>: не удваиваем n, потому что ударение не на конечном слоге. <b>Play → playing</b>: конечная буква -y сохраняется перед -ing.</p></section>\n<section class=\"gm30-section\" id=\"gm30-pc-limits\"><h3>4. Когда Continuous обычно не подходит</h3><p>Глаголы состояния <b>know, believe, understand, own, prefer</b> в их обычном значении не обозначают развёртывающееся действие: <b>I know the answer</b>, а не <s>I am knowing the answer</s>.</p><p>Но у некоторых глаголов значение меняется: <b>I think this is right</b> (я считаю это правильным) и <b>I'm thinking about the answer</b> (я сейчас размышляю).</p></section>\n<section class=\"gm30-section\" id=\"gm30-pc-exam\"><h3>5. Контроль перед экзаменом</h3><ol><li>Происходит ли действие сейчас или в ограниченный период?</li><li>Есть ли вспомогательная форма <b>am/is/are</b>?</li><li>Правильно ли написано окончание <b>-ing</b>?</li><li>Не относится ли глагол к состояниям в данном значении?</li></ol><div class=\"gm30-errors\"><p><s>She is watch a film.</s><b>She is watching a film.</b> — После is нужен -ing.</p><p><s>They playing now.</s><b>They are playing now.</b> — Не пропускай are.</p></div></section></article>\n",
"levels": [
[
{
"prompt": "Look! The children ___ in the garden. (PLAY)",
"answer": "are playing",
"why": "Children = they; действие перед глазами."
},
{
"prompt": "I ___ dinner at the moment. (COOK)",
"answer": "am cooking",
"why": "I требует am + cooking."
},
{
"prompt": "My sister ___ a story now. (WRITE)",
"answer": "is writing",
"why": "Write теряет немое e перед -ing."
},
{
"prompt": "Listen! Someone ___ at the door. (KNOCK)",
"answer": "is knocking",
"why": "Someone — единственное число; knock + ing."
},
{
"prompt": "They ___ TV right now. (NOT WATCH)",
"answer": "aren't watching||are not watching",
"why": "They + aren't + watching."
},
{
"prompt": "___ your brother sleeping? (BE)",
"answer": "Is",
"why": "Brother = he, вопрос начинается с Is."
},
{
"prompt": "Mum ___ in the kitchen now. (MAKE)",
"answer": "is making",
"why": "Make → making: немое e исчезает."
},
{
"prompt": "Why ___ you smiling? (BE)",
"answer": "are",
"why": "Вопрос Why + are + you + smiling."
},
{
"prompt": "We ___ at the hotel this week. (STAY)",
"answer": "are staying",
"why": "Временное пребывание на этой неделе."
},
{
"prompt": "The baby ___ at the moment. (SLEEP)",
"answer": "is sleeping",
"why": "Baby = it; is + sleeping."
},
{
"prompt": "I ___ to music; I am studying. (NOT LISTEN)",
"answer": "am not listening listening",
"why": "I + am not + listening."
},
{
"prompt": "Look! The sun ___ behind the clouds. (DISAPPEAR)",
"answer": "is disappearing",
"why": "Наблюдаем меняющуюся ситуацию."
}
],
[
{
"prompt": "Make a question: She is waiting outside.",
"answer": "Is she waiting outside?",
"why": "Is переносится перед she."
},
{
"prompt": "Correct: He are speaking on the phone.",
"answer": "He is speaking on the phone.",
"why": "He требует is."
},
{
"prompt": "Make negative: We are cleaning the classroom.",
"answer": "We aren't cleaning the classroom.||We are not cleaning the classroom.",
"why": "We + are not + cleaning."
},
{
"prompt": "Correct: I am writeing an email.",
"answer": "I am writing an email.",
"why": "Нельзя сохранять немое e в write + ing."
},
{
"prompt": "Rewrite with THEY: She is running in the park.",
"answer": "They are running in the park.",
"why": "They + are running, двойная n."
},
{
"prompt": "Form a Where-question: Tom is going to school.",
"answer": "Where is Tom going?",
"why": "Where + is + Tom + going."
},
{
"prompt": "Correct: They playing a new game.",
"answer": "They are playing a new game.",
"why": "Перед -ing необходим are."
},
{
"prompt": "Make a short positive answer: Are you listening?",
"answer": "Yes, I am.",
"why": "Краткий ответ содержит am, без listening."
},
{
"prompt": "Correct: She is knowing the result.",
"answer": "She knows the result.",
"why": "Know в значении знания — состояние, обычно Simple."
},
{
"prompt": "Rewrite with I: They are doing their homework.",
"answer": "I am doing my homework.",
"why": "С I — am, меняется притяжательное their → my."
},
{
"prompt": "Make a question: The dogs are barking.",
"answer": "Are the dogs barking?",
"why": "Dogs во множественном числе; are ставим перед подлежащим."
},
{
"prompt": "Correct: I am lieing on the sofa.",
"answer": "I am lying on the sofa.",
"why": "Lie → lying (-ie заменяется на -y)."
}
],
[
{
"prompt": "At this moment, the scientists ___ a new experiment. (PREPARE)",
"answer": "are preparing",
"why": "Работа идёт прямо сейчас."
},
{
"prompt": "Be quiet! Our neighbour ___ a baby to sleep. (PUT)",
"answer": "is putting",
"why": "Put → putting: удвоение конечной согласной."
},
{
"prompt": "This week, my brother ___ in a rented flat. (LIVE)",
"answer": "is living",
"why": "Brother = he, is; временная ситуация."
},
{
"prompt": "Why ___ those students whispering? (BE)",
"answer": "are",
"why": "Those students — множественное число."
},
{
"prompt": "Look at Lily: she ___ a heavy suitcase. (CARRY)",
"answer": "is carrying",
"why": "Lily = she, действие в кадре."
},
{
"prompt": "The weather ___ colder every day this week. (GET)",
"answer": "is getting",
"why": "Текущая тенденция изменений."
},
{
"prompt": "Right now, I ___ the answer carefully. (CHECK)",
"answer": "am checking",
"why": "I + am checking."
},
{
"prompt": "We ___ dinner with our cousins tomorrow evening. (HAVE, arranged)",
"answer": "are having",
"why": "Личная договорённость на завтра; be + having."
},
{
"prompt": "My friends ___ for a bus at the moment. (WAIT)",
"answer": "are waiting",
"why": "Friends = they, временное действие."
},
{
"prompt": "Listen! Somebody ___ our names. (CALL)",
"answer": "is calling",
"why": "Somebody — единственное число."
},
{
"prompt": "Today, our coach ___ the beginners. (HELP)",
"answer": "is helping",
"why": "Действие ограничено сегодняшним днём."
},
{
"prompt": "The dog ___ towards the open gate right now. (RUN)",
"answer": "is running",
"why": "Run + ing → running, двойная n."
}
]
]
},
"Present Simple или Present Continuous": {
"slug": "simple-vs-continuous",
"theory": "\n<article class=\"gm30 gm30-contrast\" id=\"rule-theory\"><header class=\"gm30-hero\"><small>Контраст времён · один глагол, два смысла</small><h2>Привычка или временное действие?</h2><p>Чтобы выбрать время, не ищи ключевое слово механически. Сравни <b>то, что происходит обычно</b>, и <b>то, что происходит на нынешнем этапе</b>.</p></header>\n<section class=\"gm30-section\" id=\"gm30-contrast-main\"><h3>1. Изменили время — изменили смысл</h3><div class=\"gm30-columns gm30-two\"><div><strong>Present Simple = обычная ситуация</strong><p><b>Alex works in a café.</b><br>Алекс работает в кафе (вообще, это его работа).</p><p><b>I read before bed.</b><br>Я читаю перед сном (привычка).</p></div><div><strong>Present Continuous = временная ситуация</strong><p><b>Alex is working in a café this summer.</b><br>Этим летом Алекс работает в кафе (временно).</p><p><b>I'm reading a detective story now.</b><br>Сейчас читаю детектив (процесс).</p></div></div></section>\n<section class=\"gm30-section\" id=\"gm30-contrast-decision\"><h3>2. Схема выбора</h3><div class=\"gm30-flow\"><div>Смотри на действие в контексте</div><b>↓</b><div>Общее, привычное, постоянный факт?</div><b>↙︎ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↘︎</b><div class=\"gm30-columns gm30-two\"><span><b>ДА → Simple</b><small>She usually walks.</small></span><span><b>НЕТ: сейчас, временно → Continuous</b><small>She is walking now.</small></span></div></div><p>«Usually» и «now» полезные сигналы, но смысл важнее. <b>Now I understand</b> — состояние; <b>You're always losing your keys!</b> — Continuous может выражать раздражение от повторяющегося действия.</p></section>\n<section class=\"gm30-section\" id=\"gm30-contrast-form\"><h3>3. Две грамматические системы рядом</h3><div class=\"gm30-table\"><table><thead><tr><th>Значение</th><th>Утверждение</th><th>Отрицание</th><th>Вопрос</th></tr></thead><tbody><tr><td>Simple</td><td>She reads.</td><td>She doesn't read.</td><td>Does she read?</td></tr><tr><td>Continuous</td><td>She is reading.</td><td>She isn't reading.</td><td>Is she reading?</td></tr></tbody></table></div><p>Запомни: <s>She is reads</s> смешивает две модели. Выбирай одну целую конструкцию, а не части обеих.</p></section>\n<section class=\"gm30-section\" id=\"gm30-contrast-stative\"><h3>4. Глаголы состояния меняют картину</h3><p><b>I think you're right.</b> — Я считаю, что ты права (мнение). <b>I'm thinking about your idea.</b> — Я размышляю над твоей идеей (процесс).</p><p><b>She has a bike.</b> — У неё есть велосипед (обладание). <b>She's having lunch.</b> — Она обедает (действие). <b>I see the mountains</b> — Я вижу горы (восприятие, обычная конструкция Simple).</p></section>\n<section class=\"gm30-section\" id=\"gm30-contrast-exam\"><h3>5. Задания 20–28: извлекай смысл из соседних предложений</h3><p>В связном тексте первое предложение может задать общую привычку, а следующее показать исключение <b>сегодня</b>. Например: <b>Ben usually cycles to school, but today he is taking the bus.</b> — Обычно Бен ездит в школу на велосипеде, но сегодня едет на автобусе.</p><ol><li>Определи фон текста: общий факт, привычка или временное действие.</li><li>Найди подлежащее и выбери <b>do/does + V</b> либо <b>am/is/are + V-ing</b>.</li><li>Проверь глагол состояния и орфографию.</li></ol></section></article>\n",
"levels": [
[
{
"prompt": "She normally ___ to school. (WALK)",
"answer": "walks",
"why": "Normally описывает привычку; she + -s."
},
{
"prompt": "Listen! Somebody ___ the piano. (PLAY)",
"answer": "is playing",
"why": "Звук слышен прямо сейчас, Continuous."
},
{
"prompt": "My uncle ___ in a small village. (LIVE)",
"answer": "lives",
"why": "Постоянный факт: Simple."
},
{
"prompt": "I ___ the problem now. (UNDERSTAND)",
"answer": "understand",
"why": "Understand описывает состояние и обычно не используется в Continuous."
},
{
"prompt": "This month, Mia ___ with her aunt. (STAY)",
"answer": "is staying",
"why": "Временная ситуация this month."
},
{
"prompt": "We often ___ chess after school. (PLAY)",
"answer": "play",
"why": "Often показывает привычку."
},
{
"prompt": "Why ___ you crying? (BE)",
"answer": "are",
"why": "Crying сейчас — Continuous, нужна are."
},
{
"prompt": "He ___ orange juice. (PREFER)",
"answer": "prefers",
"why": "Prefer — состояние/предпочтение, Simple."
},
{
"prompt": "Right now, the bus ___ at the next stop. (TURN)",
"answer": "is turning",
"why": "Конкретное действие в момент речи."
},
{
"prompt": "My parents ___ at seven on weekdays. (GET UP)",
"answer": "get up",
"why": "Weekdays = регулярное действие."
},
{
"prompt": "Look! A cat ___ the tree. (CLIMB)",
"answer": "is climbing",
"why": "Видим процесс."
},
{
"prompt": "Tom always ___ his keys in the same drawer. (KEEP)",
"answer": "keeps",
"why": "Always описывает обычную привычку, Simple."
}
],
[
{
"prompt": "Correct: She is usually walk to school.",
"answer": "She usually walks to school.",
"why": "Usually плюс привычка: Simple, walks."
},
{
"prompt": "Correct: Look! It rains very hard!",
"answer": "Look! It is raining very hard!||Look! It's raining very hard!",
"why": "Сейчас наблюдаем дождь, Continuous."
},
{
"prompt": "Rewrite as a temporary action this week: Kate works in a shop.",
"answer": "Kate is working in a shop this week.||Kate's working in a shop this week.",
"why": "Временный период this week меняет выбор на Continuous."
},
{
"prompt": "Correct: I am believing you.",
"answer": "I believe you.",
"why": "Believe — состояние в этом значении."
},
{
"prompt": "Make negative (habit): Nick plays games every evening.",
"answer": "Nick doesn't play games every evening.||Nick does not play games every evening.",
"why": "В отрицании Simple does not + play."
},
{
"prompt": "Make negative (right now): They are dancing.",
"answer": "They aren't dancing.||They are not dancing.",
"why": "Continuous отрицание с aren't."
},
{
"prompt": "Correct: Do you listening to me?",
"answer": "Are you listening to me?",
"why": "Для процесса сейчас нужен are + listening."
},
{
"prompt": "Correct: He don't wear a uniform at his school.",
"answer": "He doesn't wear a uniform at his school.",
"why": "С he в Simple нужен doesn't."
},
{
"prompt": "Question (current action): Your brother is cooking.",
"answer": "Is your brother cooking?",
"why": "Continuous: is перед brother."
},
{
"prompt": "Question (routine): Lucy visits her grandmother weekly.",
"answer": "Does Lucy visit her grandmother weekly?",
"why": "Simple: does + Lucy + visit."
},
{
"prompt": "Correct: I am having a bicycle.",
"answer": "I have a bicycle.",
"why": "Have в значении обладания — Simple."
},
{
"prompt": "Correct: She thinks about the question at the moment.",
"answer": "She is thinking about the question at the moment.||She's thinking about the question at the moment.",
"why": "Think about здесь процесс размышления, Continuous."
}
],
[
{
"prompt": "Every day, Oliver ___ his phone before lessons. (SWITCH OFF)",
"answer": "switches off",
"why": "Every day → привычка; switch → switches."
},
{
"prompt": "At the moment, he ___ a message to the teacher. (SEND)",
"answer": "is sending",
"why": "Прямо сейчас процесс отправки, Continuous."
},
{
"prompt": "Jane normally ___ a bike, but today she is walking. (RIDE)",
"answer": "rides",
"why": "Normally сообщает обычное действие."
},
{
"prompt": "This week, our classmates ___ for the competition. (PREPARE)",
"answer": "are preparing",
"why": "This week — ограниченный период."
},
{
"prompt": "I ___ what you mean. (KNOW)",
"answer": "know",
"why": "Know в значении знания — состояние, Simple."
},
{
"prompt": "The pupils ___ a test right now. (TAKE)",
"answer": "are taking",
"why": "Сейчас выполняют тест, Continuous."
},
{
"prompt": "My father often ___ late. (WORK)",
"answer": "works",
"why": "С he, часто повторяется: works."
},
{
"prompt": "Look! The trees ___ in the strong wind. (MOVE)",
"answer": "are moving",
"why": "Процесс виден прямо сейчас."
},
{
"prompt": "Ella ___ blue colours. (LIKE)",
"answer": "likes",
"why": "Like — устойчивое предпочтение."
},
{
"prompt": "Today she ___ a bright red coat. (WEAR)",
"answer": "is wearing",
"why": "Только сегодня, конкретная одежда в момент наблюдения."
},
{
"prompt": "We ___ dinner at six most days. (HAVE)",
"answer": "have",
"why": "Have dinner = действие, повторяется most days."
},
{
"prompt": "Look through the window: someone ___ our car. (WASH)",
"answer": "is washing",
"why": "Наблюдаемое действие, Continuous."
}
]
]
},
"Past Simple": {
"slug": "past-simple",
"theory": "\n<article class=\"gm30 gm30-past\" id=\"rule-theory\"><header class=\"gm30-hero\"><small>Прошедшее простое · законченный момент истории</small><h2>Past Simple: рассказываем, что произошло</h2><p>Событие помещено в <b>законченный период прошлого</b>. Вопрос не в том, как долго длилось действие, а в том, к какому прошлому событию оно относится.</p></header>\n<section class=\"gm30-section\" id=\"gm30-past-line\"><h3>1. Временная линия</h3><div class=\"gm30-timeline\"><span>ВЧЕРА</span><span class=\"gm30-dot\">● She visited her aunt.</span><span>СЕЙЧАС</span></div><p><b>We watched a film last night.</b> — Вчера вечером мы посмотрели фильм. <b>When I was six, I lived in Omsk.</b> — Когда мне было шесть лет, я жила в Омске. Оба примера относятся к завершённому прошлому отрезку.</p><p>Глагол может обозначать и длительную в прошлом ситуацию: <b>I lived there for five years (and then moved).</b> — Я жила там пять лет (а потом переехала).</p></section>\n<section class=\"gm30-section\" id=\"gm30-past-forms\"><h3>2. Обычные и неправильные глаголы</h3><div class=\"gm30-table\"><table><thead><tr><th>Начальная форма</th><th>Past Simple</th><th>Правило</th></tr></thead><tbody><tr><td>work</td><td>worked</td><td>обычно +ed</td></tr><tr><td>live</td><td>lived</td><td>после немого e только +d</td></tr><tr><td>study</td><td>studied</td><td>согласная + y → ied</td></tr><tr><td>stop</td><td>stopped</td><td>удвоение согласной при соответствующих условиях</td></tr><tr><td>go</td><td>went</td><td>неправильный глагол: запомни</td></tr><tr><td>buy</td><td>bought</td><td>неправильный глагол</td></tr></tbody></table></div><p>Прошедшая форма <b>одна для всех лиц</b>: I worked, she worked, they worked. Исключение — be: <b>was</b> / <b>were</b>.</p></section>\n<section class=\"gm30-section\" id=\"gm30-past-did\"><h3>3. Куда исчезает -ed после did?</h3><div class=\"gm30-equation\"><span>Did</span><b>+</b><span>подлежащее</span><b>+</b><span>V1?</span></div><div class=\"gm30-table\"><table><thead><tr><th></th><th>Правильно</th><th>Почему</th></tr></thead><tbody><tr><td>Утверждение</td><td>She <b>visited</b> the museum.</td><td>Past Simple на смысловом глаголе</td></tr><tr><td>Отрицание</td><td>She <b>didn't visit</b> the museum.</td><td>После didn't только начальная форма</td></tr><tr><td>Вопрос</td><td><b>Did</b> she <b>visit</b> the museum?</td><td>Did уже обозначает прошлое</td></tr></tbody></table></div><p><b>Where did they go?</b> — Куда они ходили? <b>Yes, they did.</b> — Да. Нельзя <s>did went</s> или <s>didn't played</s>.</p></section>\n<section class=\"gm30-section\" id=\"gm30-past-be\"><h3>4. С be не нужен did</h3><p><b>She was at home yesterday.</b> — Она была дома вчера. <b>Were your friends late?</b> — Твои друзья опоздали? <b>I wasn't ready.</b> — Я не была готова.</p><p>Проверяй, есть ли самостоятельный глагол действия: <b>Did she study?</b> vs <b>Was she tired?</b>.</p></section>\n<section class=\"gm30-section\" id=\"gm30-past-exam\"><h3>5. Как узнать Past Simple в тексте ОГЭ</h3><p>Временные обстоятельства: yesterday, last year, in 2019, two days ago. Однако решает <b>завершённый прошлый контекст</b>, даже если явного слова yesterday нет.</p><ol><li>Определи, относится ли событие к законченному прошлому.</li><li>В утверждении найди V2: regular -ed либо неправильную форму.</li><li>Для вопроса и отрицания используй did + V1.</li><li>Для be выбирай was/were отдельно.</li></ol><div class=\"gm30-errors\"><p><s>Did you saw her?</s><b>Did you see her?</b> — Did + V1.</p><p><s>He goed home.</s><b>He went home.</b> — Go имеет неправильную форму went.</p></div></section></article>\n",
"levels": [
[
{
"prompt": "Last Sunday, we ___ our grandparents. (VISIT)",
"answer": "visited",
"why": "Законченное прошлое, regular +ed."
},
{
"prompt": "I ___ a beautiful bird yesterday. (SEE)",
"answer": "saw",
"why": "See → saw, неправильный глагол."
},
{
"prompt": "She ___ to the library last night. (GO)",
"answer": "went",
"why": "Go → went."
},
{
"prompt": "___ you watch the match? (DID)",
"answer": "Did",
"why": "Вопрос с обычным глаголом в Past Simple."
},
{
"prompt": "My classmates ___ ready yesterday. (BE)",
"answer": "were",
"why": "Classmates множественное число: were."
},
{
"prompt": "He ___ the answer. (NOT KNOW, past)",
"answer": "didn't know||did not know",
"why": "После didn't основная форма know."
},
{
"prompt": "Anna ___ at the concert. (BE, past)",
"answer": "was",
"why": "Anna = she, была на концерте."
},
{
"prompt": "We ___ chess after dinner yesterday. (PLAY)",
"answer": "played",
"why": "Play → played."
},
{
"prompt": "Where ___ your parents travel last summer? (DID)",
"answer": "did",
"why": "Where + did + подлежащее + V1."
},
{
"prompt": "My brother ___ his keys two days ago. (LOSE)",
"answer": "lost",
"why": "Lose → lost, неправильный глагол."
},
{
"prompt": "I ___ late for school last week. (NOT BE)",
"answer": "wasn't||was not",
"why": "Для I + be в прошлом: wasn't."
},
{
"prompt": "The shop ___ at seven yesterday. (CLOSE)",
"answer": "closed",
"why": "Close с немым e: добавляется d."
}
],
[
{
"prompt": "Correct: Did they went to the cinema?",
"answer": "Did they go to the cinema?",
"why": "Did + основная форма go."
},
{
"prompt": "Make negative: Lisa bought a book.",
"answer": "Lisa didn't buy a book.||Lisa did not buy a book.",
"why": "Bought → buy после didn't."
},
{
"prompt": "Make question: He arrived early.",
"answer": "Did he arrive early?",
"why": "Did + he + arrive."
},
{
"prompt": "Correct: We was at home yesterday.",
"answer": "We were at home yesterday.",
"why": "We + were."
},
{
"prompt": "Rewrite with YESTERDAY: I study maths every day.",
"answer": "I studied maths yesterday.",
"why": "Study → studied при согласной + y."
},
{
"prompt": "Correct: She didn't watched TV.",
"answer": "She didn't watch TV.",
"why": "После didn't нет -ed."
},
{
"prompt": "Where-question: Dan met his friend at the station.",
"answer": "Where did Dan meet his friend?",
"why": "Meet → met в утверждении, после did: meet."
},
{
"prompt": "Make a short positive answer: Did you call Jack?",
"answer": "Yes, I did.",
"why": "Краткий ответ с did."
},
{
"prompt": "Correct: My dad buyed bread yesterday.",
"answer": "My dad bought bread yesterday.",
"why": "Buy → bought."
},
{
"prompt": "Make negative: They were tired.",
"answer": "They weren't tired.||They were not tired.",
"why": "Was/were образует отрицание без did."
},
{
"prompt": "Make question: The children were hungry.",
"answer": "Were the children hungry?",
"why": "С be меняем порядок: were + children."
},
{
"prompt": "Correct: He didn't was happy.",
"answer": "He wasn't happy.||He was not happy.",
"why": "Для be не используется did; was not."
}
],
[
{
"prompt": "In 2021, my family ___ to another city. (MOVE)",
"answer": "moved",
"why": "Законченное действие в 2021; move → moved."
},
{
"prompt": "At the end of the story, the hero ___ the secret. (DISCOVER)",
"answer": "discovered",
"why": "Завершённое событие в повествовании."
},
{
"prompt": "Last night, Ella ___ a strange noise outside. (HEAR)",
"answer": "heard",
"why": "Hear → heard."
},
{
"prompt": "Two months ago, I ___ my first bicycle. (BUY)",
"answer": "bought",
"why": "Buy → bought."
},
{
"prompt": "We ___ the science project on Friday. (FINISH)",
"answer": "finished",
"why": "Finish → finished, regular."
},
{
"prompt": "When my sister was seven, she ___ to swim. (LEARN)",
"answer": "learned||learnt",
"why": "Оба варианта Past Simple допустимы (AmE/BrE)."
},
{
"prompt": "The bus ___ at the wrong stop yesterday. (STOP)",
"answer": "stopped",
"why": "Stop → stopped, двойная p."
},
{
"prompt": "Our friends ___ the party very early. (LEAVE)",
"answer": "left",
"why": "Leave → left."
},
{
"prompt": "Yesterday morning, the teacher ___ us a difficult question. (ASK)",
"answer": "asked",
"why": "Событие завершено в утреннем прошлом контексте."
},
{
"prompt": "I ___ the answer in time. (NOT FIND, past)",
"answer": "didn't find||did not find",
"why": "Did not + find, без found."
},
{
"prompt": "___ the weather sunny during the trip? (BE, past)",
"answer": "Was",
"why": "Weather = it, вопрос Past Simple с be: Was."
},
{
"prompt": "My brother ___ his phone on the train last week. (FORGET)",
"answer": "forgot",
"why": "Forget → forgot, Past Simple."
}
]
]
},
"Present Perfect": {
"slug": "present-perfect",
"theory": "\n<article class=\"gm30 gm30-perfect\" id=\"rule-theory\"><header class=\"gm30-hero\"><small>Настоящее совершённое · прошлое связано с настоящим</small><h2>Present Perfect: почему прошлое важно сейчас?</h2><p>Событие уже произошло, но говорящий смотрит на его <b>значение для настоящего</b>: результат, опыт или период, который всё ещё продолжается.</p></header>\n<section class=\"gm30-section\" id=\"gm30-pp-result\"><h3>1. Не дата, а связь с настоящим</h3><div class=\"gm30-timeline\"><span>ПРОШЛОЕ</span><span class=\"gm30-dot\">● I have lost my keys.</span><span>СЕЙЧАС → нет ключей</span></div><p><b>I've lost my keys.</b> — Я потеряла ключи (и сейчас не могу их найти). Сравни <b>I lost my keys yesterday, but then I found them.</b> — Я потеряла их вчера, но потом нашла. Здесь события привязаны к завершённому времени прошлого.</p></section>\n<section class=\"gm30-section\" id=\"gm30-pp-form\"><h3>2. Две части: have/has + V3</h3><div class=\"gm30-equation\"><span>have / has</span><b>+</b><span>Past Participle (V3)</span></div><div class=\"gm30-table\"><table><thead><tr><th>Тип</th><th>I / we / they</th><th>he / she / it</th></tr></thead><tbody><tr><td>Утверждение</td><td>We have finished.</td><td>She has finished.</td></tr><tr><td>Отрицание</td><td>We haven't finished.</td><td>She hasn't finished.</td></tr><tr><td>Вопрос</td><td>Have we finished?</td><td>Has she finished?</td></tr></tbody></table></div><p><b>V3</b>: worked → worked (правильный), eat → eaten, write → written, go → gone, see → seen. Не смешивай V2 с V3: <s>has went</s> → <b>has gone</b>.</p></section>\n<section class=\"gm30-section\" id=\"gm30-pp-matrix\"><h3>3. Три смысла Present Perfect</h3><div class=\"gm30-columns\"><div><strong>Результат сейчас</strong><p><b>She has broken her glasses.</b><br>Она сломала очки (сейчас они сломаны).</p></div><div><strong>Жизненный опыт</strong><p><b>Have you ever visited London?</b><br>Ты когда-нибудь была в Лондоне?</p><p>Нас интересует сам факт опыта.</p></div><div><strong>Период до настоящего</strong><p><b>We have lived here since 2020.</b><br>Мы живём здесь с 2020 года (до сих пор).</p></div></div></section>\n<section class=\"gm30-section\" id=\"gm30-pp-signals\"><h3>4. For, since, already, yet, just, ever, never</h3><div class=\"gm30-table\"><table><thead><tr><th>Слово</th><th>Что выражает</th><th>Пример</th></tr></thead><tbody><tr><td><b>for</b></td><td>продолжительность</td><td>for two hours — два часа</td></tr><tr><td><b>since</b></td><td>момент начала</td><td>since Monday — с понедельника</td></tr><tr><td><b>already</b></td><td>уже</td><td>I have already eaten.</td></tr><tr><td><b>yet</b></td><td>ещё / уже (в вопросах)</td><td>Have you finished yet?</td></tr><tr><td><b>just</b></td><td>только что</td><td>She has just arrived.</td></tr><tr><td><b>ever / never</b></td><td>когда-либо / никогда</td><td>Have you ever seen snow?</td></tr></tbody></table></div><p>Не считай маркеры абсолютными: <b>today</b> может быть и с Past Simple, если обсуждается завершённый эпизод (например, время приёма), а в отдельных вариантах английского употребление Perfect и Past Simple различается.</p></section>\n<section class=\"gm30-section\" id=\"gm30-pp-past\"><h3>5. Сравнение с Past Simple</h3><div class=\"gm30-columns gm30-two\"><div><strong>Present Perfect</strong><p><b>Have you read this book?</b><br>Ты читала эту книгу? (есть ли опыт?)</p><p><b>She has moved.</b><br>Она переехала (новая ситуация актуальна).</p></div><div><strong>Past Simple</strong><p><b>When did you read it?</b><br>Когда ты её прочитала? (конкретное прошлое)</p><p><b>She moved last year.</b><br>Она переехала в прошлом году.</p></div></div><p><b>Yesterday, last week, in 2018, ago</b> с законченным периодом обычно требуют Past Simple: <s>I have met her yesterday</s> → <b>I met her yesterday.</b></p></section>\n<section class=\"gm30-section\" id=\"gm30-pp-exam\"><h3>6. Алгоритм для ОГЭ 20–28</h3><ol><li>Есть ли конкретное законченное время прошлого? Если да, обычно Past Simple.</li><li>Если важен текущий результат, опыт или связь до настоящего, рассматривай Present Perfect.</li><li>Выбери have/has по подлежащему и проверь правильную третью форму V3.</li><li>Различай <b>been to</b> (посетил и вернулся) и <b>gone to</b> (ушёл, ещё там/в пути) по контексту.</li></ol><div class=\"gm30-errors\"><p><s>She has saw this film.</s><b>She has seen this film.</b> — V3 от see — seen.</p><p><s>I have finished it yesterday.</s><b>I finished it yesterday.</b> — Yesterday определяет завершённый прошлый период.</p></div></section></article>\n",
"levels": [
[
{
"prompt": "We ___ just finished our homework. (HAVE)",
"answer": "have",
"why": "We + have; just внутри Perfect."
},
{
"prompt": "She ___ never been abroad. (HAVE)",
"answer": "has",
"why": "She + has + V3."
},
{
"prompt": "I have ___ the book already. (READ, V3)",
"answer": "read",
"why": "Read имеет одинаковое написание V1/V2/V3."
},
{
"prompt": "They ___ eaten yet. (NOT HAVE)",
"answer": "haven't||have not",
"why": "They + haven't + eaten."
},
{
"prompt": "___ you ever met a famous actor? (HAVE)",
"answer": "Have",
"why": "Have + you + V3 (experience)."
},
{
"prompt": "My dad has ___ his phone. (LOSE, V3)",
"answer": "lost",
"why": "Lose → lost (V3)."
},
{
"prompt": "The children have ___ the window. (BREAK, V3)",
"answer": "broken",
"why": "Break → broken в V3."
},
{
"prompt": "Anna has ___ to the shop; she'll return soon. (GO, V3)",
"answer": "gone",
"why": "Gone to = ушла, ещё не вернулась."
},
{
"prompt": "My sister has ___ to Italy twice. (BE, V3)",
"answer": "been",
"why": "Been to = посещала и вернулась."
},
{
"prompt": "We have lived here ___ 2021.",
"answer": "since",
"why": "Since + точка отсчёта."
},
{
"prompt": "He has worked here ___ three years.",
"answer": "for",
"why": "For + продолжительность."
},
{
"prompt": "She has ___ finished her lunch. (JUST)",
"answer": "just",
"why": "Just перед V3."
}
],
[
{
"prompt": "Correct: She have finished the test.",
"answer": "She has finished the test.",
"why": "She + has, V3 finished."
},
{
"prompt": "Make negative: We have seen that film.",
"answer": "We haven't seen that film.||We have not seen that film.",
"why": "Have not + seen."
},
{
"prompt": "Make question: Kate has lost her keys.",
"answer": "Has Kate lost her keys?",
"why": "Has перед Kate, V3 lost."
},
{
"prompt": "Correct: He has went home.",
"answer": "He has gone home.",
"why": "Go → gone в Perfect (V3)."
},
{
"prompt": "Complete with the correct preposition: since / for two months.",
"answer": "for",
"why": "Two months — продолжительность, for."
},
{
"prompt": "Complete with the correct preposition: since / for last Friday.",
"answer": "since",
"why": "Friday — точка отсчёта, since."
},
{
"prompt": "Correct: Have you ever ate sushi?",
"answer": "Have you ever eaten sushi?",
"why": "Eat → eaten (V3)."
},
{
"prompt": "Make question: They have visited the museum.",
"answer": "Have they visited the museum?",
"why": "Have + they + V3."
},
{
"prompt": "Correct: I have already wrote the email.",
"answer": "I have already written the email.",
"why": "Write → written (V3)."
},
{
"prompt": "Make negative: She has been to London.",
"answer": "She hasn't been to London.||She has not been to London.",
"why": "Has not + been."
},
{
"prompt": "Correct: He has finished his work yesterday.",
"answer": "He finished his work yesterday.",
"why": "Yesterday обозначает завершённый прошлый период."
},
{
"prompt": "Make a short positive answer: Has Eva finished?",
"answer": "Yes, she has.",
"why": "В ответе has, не has finished."
}
],
[
{
"prompt": "The guests have already ___, so we can start dinner. (ARRIVE)",
"answer": "arrived",
"why": "Результат сейчас: гости приехали."
},
{
"prompt": "My parents ___ just returned from a trip. (HAVE)",
"answer": "have",
"why": "Parents = they, have + V3."
},
{
"prompt": "Nobody knows where Tom is. He has ___ out. (GO)",
"answer": "gone",
"why": "Gone out: ушёл, сейчас отсутствует."
},
{
"prompt": "I have never ___ such a beautiful lake. (SEE)",
"answer": "seen",
"why": "See → seen в V3."
},
{
"prompt": "We have studied English ___ primary school. (SINCE/FOR)",
"answer": "since",
"why": "Primary school = период начала в прошлом."
},
{
"prompt": "Laura has kept this diary ___ five years. (SINCE/FOR)",
"answer": "for",
"why": "Five years — длительность."
},
{
"prompt": "The teacher has already ___ our tests. (CHECK)",
"answer": "checked",
"why": "Have/has + V3 checked."
},
{
"prompt": "My friends have not ___ the new film yet. (WATCH)",
"answer": "watched",
"why": "V3 regular verb watched."
},
{
"prompt": "I ___ never tried skiing. (HAVE)",
"answer": "have",
"why": "I + have never tried."
},
{
"prompt": "She has ___ her leg, so she cannot run. (HURT)",
"answer": "hurt",
"why": "Hurt имеет одинаковую форму V1, V2, V3."
},
{
"prompt": "Have they ___ the problem yet? (SOLVE)",
"answer": "solved",
"why": "Have + they + V3 solved."
},
{
"prompt": "It is the first time I have ___ this song. (HEAR)",
"answer": "heard",
"why": "После have нужна V3 heard; опыт до настоящего."
}
]
]
}
};
let installed=0;
for(const [title,lesson] of Object.entries(lessons)){
  const original=lib.guides[title];
  if(!original)throw Error('v30: нет ожидаемой темы '+title);
  if(lesson.levels.length!==3||lesson.levels.some(stage=>stage.length!==12))throw Error('v30: банк заданий неполон: '+title);
  lib.guides[title]={...original,theory:lesson.theory,
    levels:lesson.levels.map((rows,stage)=>rows.map((r,index)=>({
      id:`v30-${lesson.slug}-${stage}-${index+1}`,prompt:r.prompt,answer:r.answer,why:r.why
    }))),v30:true};
  installed++;
}
window.OGE_GRAMMAR_INDIVIDUAL_V30={installed,topics:Object.keys(lessons),method:'five separately authored tense lessons; 36 curated tasks per topic'};
})();
