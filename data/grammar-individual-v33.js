/* ОГЭ-2027: v33. Четыре независимых учебных раздела по реально существующим темам каталога.
 * Загружать после v32, до app.js. Не меняет идентификаторы тем и модель хранения прогресса.
 */
(()=>{'use strict';
const library=window.OGE_GRAMMAR_REFERENCE_V18;
if(!library?.guides){console.error('v33: не найден общий справочник');return;}
const lessons = {
  "Used to": {
    "slug": "used-to",
    "theory": "\n<article class=\"gm33 gm33-habits\" id=\"rule-theory\">\n<header class=\"gm33-hero\"><span class=\"gm33-eyebrow\">ПРОШЛОЕ БОЛЬШЕ НЕ ТАКОЕ</span><h2>Used to: раньше было привычным — теперь изменилось</h2><p>Представь две фотографии одной жизни — <b>тогда</b> и <b>сейчас</b>. Конструкция <b>used to + V1</b> рассказывает о прошлом состоянии или повторяющемся действии, которые были типичны тогда, но уже не соответствуют сегодняшней ситуации или рассматриваются как часть прошлого.</p></header>\n<section class=\"gm33-panel\" id=\"gm33-used-meaning\"><h3>1. Сравни две фотографии</h3><div class=\"gm33-pair\"><div><small>THEN · раньше</small><p><b>I used to live near the sea.</b><br>Раньше я жил(а) у моря.</p><p><b>She used to play chess every Friday.</b><br>Раньше она играла в шахматы каждую пятницу.</p></div><div><small>NOW · сейчас</small><p><b>Now I live in Ufa.</b><br>Теперь я живу в Уфе.</p><p><b>Now she rarely plays.</b><br>Теперь она почти не играет.</p></div></div><p>Значение не просто «сделал однажды». <b>I visited London in 2022</b> — разовая поездка: здесь достаточно Past Simple. <b>I used to visit London every summer</b> — старая привычка.</p><div class=\"gm33-note\">Слово <b>used to</b> само по себе не указывает точную дату прекращения привычки. Если важно, когда всё изменилось, скажи об этом отдельно.</div></section>\n<section class=\"gm33-panel\" id=\"gm33-used-form\"><h3>2. Как устроены три формы</h3><div class=\"gm33-table\"><table><tr><th>Функция</th><th>Схема</th><th>Пример с переводом</th></tr><tr><td>Утверждение</td><td>subject + <b>used to + V1</b></td><td>He <b>used to have</b> long hair. — Раньше у него были длинные волосы.</td></tr><tr><td>Отрицание</td><td>subject + <b>didn't use to + V1</b></td><td>I <b>didn't use to like</b> tea. — Раньше я не любил(а) чай.</td></tr><tr><td>Вопрос</td><td><b>Did</b> + subject + <b>use to + V1?</b></td><td><b>Did</b> you <b>use to walk</b> to school? — Ты раньше ходил(а) в школу пешком?</td></tr><tr><td>Краткий ответ</td><td>Yes, I did. / No, I didn't.</td><td>В ответе не повторяем used to.</td></tr></table></div><p>После <b>did</b> и <b>didn't</b> — написание <b>use to</b> (без -d), потому что прошедшее время уже выражено did. В утвердительной форме — <b>used to</b>.</p></section>\n<section class=\"gm33-panel\" id=\"gm33-used-contrast\"><h3>3. Не путай used to, be used to и get used to</h3><div class=\"gm33-lanes\"><div><strong>used to + V1</strong><span>Привычка в прошлом</span><p>I <b>used to wake up</b> late. — Раньше я вставал(а) поздно.</p></div><div><strong>be used to + noun / V-ing</strong><span>Привычно сейчас / был привычен</span><p>I'm <b>used to waking up</b> early. — Я привык(ла) рано вставать.</p></div><div><strong>get used to + noun / V-ing</strong><span>Процесс привыкания</span><p>I'm <b>getting used to waking up</b> early. — Я привыкаю рано вставать.</p></div></div><p>Ошибка <s>I'm used to wake up</s> возникает, когда смешивают разные конструкции. В <i>be used to</i> слово <b>to</b> — предлог, поэтому после него глагол принимает форму <b>-ing</b>.</p></section>\n<section class=\"gm33-panel\" id=\"gm33-used-vs-would\"><h3>4. Used to и would: состояния против привычных действий</h3><p><b>We used to own a dog.</b> — Раньше у нас была собака (состояние). <b>We would play with it every evening.</b> — Мы обычно играли с ней каждый вечер (повторяемое действие). <b>Would</b> в этом значении нельзя механически употребить для обычного состояния: <s>We would own a dog.</s></p><p>Конструкция <b>used to</b> естественно вводит старую привычку без дополнительного контекста, а <b>would</b> обычно требует, чтобы контекст прошлого уже был задан.</p></section>\n<section class=\"gm33-panel\" id=\"gm33-used-exam\"><h3>5. Как применять на экзамене</h3><ol><li>Определи: действие было регулярным или это было устойчивое состояние в прошлом?</li><li>Проверь, есть ли контраст со временем «сейчас».</li><li>После did/didn't напиши <b>use to</b>, в утверждении — <b>used to</b>.</li><li>После конструкции поставь <b>V1</b>: <i>used to play</i>, не <s>used to played</s>.</li></ol><p class=\"gm33-note\">Это полезно для письменной и устной речи, а также при выборе формы по смыслу. В заданиях 20–28 проверяй прежде всего грамматику конкретного предложения: не всякая старая привычка обязана выражаться через used to.</p></section>\n</article>",
    "levels": [
      [
        {
          "id": "v33-used-to-0-1",
          "prompt": "I ___ play in this park when I was six. (USED TO)",
          "answer": "used to",
          "why": "Старая регулярная привычка: used to + V1."
        },
        {
          "id": "v33-used-to-0-2",
          "prompt": "She ___ have very long hair, but now it is short. (USED TO)",
          "answer": "used to",
          "why": "Состояние в прошлом, изменившееся сейчас."
        },
        {
          "id": "v33-used-to-0-3",
          "prompt": "We didn't ___ to watch documentaries. (USE)",
          "answer": "use",
          "why": "После didn't нужна базовая форма use."
        },
        {
          "id": "v33-used-to-0-4",
          "prompt": "___ you use to walk to school? (DID)",
          "answer": "Did",
          "why": "Вопрос о прошлом: Did + подлежащее + use to."
        },
        {
          "id": "v33-used-to-0-5",
          "prompt": "He used to ___ in London. (LIVE)",
          "answer": "live",
          "why": "После used to нужен инфинитив без to, базовая форма глагола."
        },
        {
          "id": "v33-used-to-0-6",
          "prompt": "I ___ use to like coffee, but now I love it. (DIDN'T)",
          "answer": "didn't",
          "why": "Отрицание прежней привычки: didn't use to."
        },
        {
          "id": "v33-used-to-0-7",
          "prompt": "My aunt ___ to work in a library. (USE)",
          "answer": "used",
          "why": "Утверждение в прошлом: used to."
        },
        {
          "id": "v33-used-to-0-8",
          "prompt": "Did he ___ to wear glasses? (USE)",
          "answer": "use",
          "why": "После Did окончание -d у use не ставят."
        },
        {
          "id": "v33-used-to-0-9",
          "prompt": "They used to ___ their grandparents every Sunday. (VISIT)",
          "answer": "visit",
          "why": "Повторяемое действие в прошлом: used to visit."
        },
        {
          "id": "v33-used-to-0-10",
          "prompt": "There ___ to be a cinema here. (USE)",
          "answer": "used",
          "why": "Старая ситуация: There used to be..."
        },
        {
          "id": "v33-used-to-0-11",
          "prompt": "Yes, she ___. (Did she use to sing?)",
          "answer": "did",
          "why": "Краткий ответ на вопрос с Did."
        },
        {
          "id": "v33-used-to-0-12",
          "prompt": "We ___ to own two cats, but now we have one. (USE)",
          "answer": "used",
          "why": "Past state, used to own."
        }
      ],
      [
        {
          "id": "v33-used-to-1-1",
          "prompt": "Correct: He use to live here, but he moved away.",
          "answer": "He used to live here, but he moved away.",
          "why": "В утвердительном предложении используем used to."
        },
        {
          "id": "v33-used-to-1-2",
          "prompt": "Correct: Did she used to play tennis?",
          "answer": "Did she use to play tennis?",
          "why": "После did пишем use to без -d."
        },
        {
          "id": "v33-used-to-1-3",
          "prompt": "Correct: I didn't used to eat breakfast.",
          "answer": "I didn't use to eat breakfast.",
          "why": "После didn't базовая форма use."
        },
        {
          "id": "v33-used-to-1-4",
          "prompt": "Make a question: You used to ride a bike to school.",
          "answer": "Did you use to ride a bike to school?",
          "why": "Вопрос: Did + subject + use to + V1."
        },
        {
          "id": "v33-used-to-1-5",
          "prompt": "Make negative: She used to collect stamps.",
          "answer": "She didn't use to collect stamps.||She did not use to collect stamps.",
          "why": "Отрицание did not + use to."
        },
        {
          "id": "v33-used-to-1-6",
          "prompt": "Correct: They used to playing together after class.",
          "answer": "They used to play together after class.",
          "why": "После used to здесь V1, не -ing."
        },
        {
          "id": "v33-used-to-1-7",
          "prompt": "Complete: I am used to ___ early now. (GET UP)",
          "answer": "getting up",
          "why": "Be used to означает «привык», после предлога to нужна форма -ing."
        },
        {
          "id": "v33-used-to-1-8",
          "prompt": "Complete: My brother is getting used to ___ alone. (LIVE)",
          "answer": "living",
          "why": "Get used to = привыкать к чему-либо, + V-ing."
        },
        {
          "id": "v33-used-to-1-9",
          "prompt": "Correct: My grandparents would own a farm when they were young. (use USED TO)",
          "answer": "My grandparents used to own a farm when they were young.",
          "why": "Own выражает состояние владения: подходит used to."
        },
        {
          "id": "v33-used-to-1-10",
          "prompt": "Rewrite: She lived near the station before, but not now. (USED TO)",
          "answer": "She used to live near the station.",
          "why": "Заменяем старое длительное состояние на used to live."
        },
        {
          "id": "v33-used-to-1-11",
          "prompt": "Make a short negative answer: Did you use to swim every day?",
          "answer": "No, I didn't.||No, I did not.",
          "why": "Ответ строится с did not, не used to."
        },
        {
          "id": "v33-used-to-1-12",
          "prompt": "Correct: I use to be shy, but I am more confident now.",
          "answer": "I used to be shy, but I am more confident now.",
          "why": "При сопоставлении с now старая черта: used to be."
        }
      ],
      [
        {
          "id": "v33-used-to-2-1",
          "prompt": "Life changes: I ___ (LIVE) in a village, but I moved to a big city last year. [past state; USED TO]",
          "answer": "used to live",
          "why": "Долгое прежнее место проживания: used to + live."
        },
        {
          "id": "v33-used-to-2-2",
          "prompt": "Life changes: My sister ___ (BE) afraid of dogs, but now she loves them. [USED TO]",
          "answer": "used to be",
          "why": "Старая черта/состояние: used to be."
        },
        {
          "id": "v33-used-to-2-3",
          "prompt": "Life changes: ___ (YOU / WALK) to school when you were little? [USED TO]",
          "answer": "Did you use to walk",
          "why": "Did + subject + use to + V1."
        },
        {
          "id": "v33-used-to-2-4",
          "prompt": "Life changes: We ___ (NOT / HAVE) a car in those days. [USED TO]",
          "answer": "didn't use to have||did not use to have",
          "why": "Отрицание прошлого состояния: didn't use to have."
        },
        {
          "id": "v33-used-to-2-5",
          "prompt": "Life changes: Dad ___ (COOK) pasta every Friday when he was a student. [USED TO]",
          "answer": "used to cook",
          "why": "Прежнее повторяющееся действие, used to cook."
        },
        {
          "id": "v33-used-to-2-6",
          "prompt": "Life changes: I am ___ (WORK) from home now; it feels normal. [USED TO]",
          "answer": "used to working",
          "why": "Be used to + -ing означает, что привычка уже сформировалась."
        },
        {
          "id": "v33-used-to-2-7",
          "prompt": "School memories: There ___ (BE) a small library next to our classroom. [USED TO]",
          "answer": "used to be",
          "why": "Объект раньше существовал: there used to be."
        },
        {
          "id": "v33-used-to-2-8",
          "prompt": "School memories: Our teacher ___ (TELL) us stories at the end of each lesson. [USED TO]",
          "answer": "used to tell",
          "why": "Старое регулярное действие, used to tell."
        },
        {
          "id": "v33-used-to-2-9",
          "prompt": "School memories: We ___ (NOT / USE) computers much back then. [DID]",
          "answer": "didn't use||did not use",
          "why": "После did not, базовая форма use."
        },
        {
          "id": "v33-used-to-2-10",
          "prompt": "School memories: I ___ (COLLECT) postcards as a child, but now I collect coins. [USED TO]",
          "answer": "used to collect",
          "why": "Старая привычка, now подчёркивает изменение."
        },
        {
          "id": "v33-used-to-2-11",
          "prompt": "School memories: ___ (HE / WEAR) a uniform when he went to that school? [USED TO]",
          "answer": "Did he use to wear",
          "why": "Did в начале вопроса; после use to V1."
        },
        {
          "id": "v33-used-to-2-12",
          "prompt": "School memories: She is slowly ___ (SPEAK) in front of the class. [GET USED TO]",
          "answer": "getting used to speaking",
          "why": "Процесс привыкания: is getting used to + V-ing."
        }
      ]
    ]
  },
  "Would для привычек в прошлом": {
    "slug": "past-habit-would",
    "theory": "\n<article class=\"gm33 gm33-story\" id=\"rule-theory\"><header class=\"gm33-hero\"><span class=\"gm33-eyebrow\">ВОСПОМИНАНИЯ И ПОВТОРЯЮЩИЕСЯ СЦЕНЫ</span><h2>Would в рассказе о прошлом: «бывало, мы…»</h2><p>Сравни два типа информации: <strong>каким было положение вещей</strong> и <strong>что снова и снова происходило</strong>. <b>Would + V1</b> в рассказе часто показывает повторявшееся действие, когда читатель уже понимает, что речь о прошлом.</p></header>\n<section class=\"gm33-panel\" id=\"gm33-would-story\"><h3>1. Сцена, которая повторялась</h3><div class=\"gm33-scene\"><span>When I was ten…</span><p><b>Every summer, we would visit my grandparents. After dinner, Grandpa would tell us stories.</b></p><p>Каждое лето мы ездили к бабушке и дедушке. После ужина дедушка обычно рассказывал нам истории.</p></div><p>Слова <b>every summer</b>, <b>on Sundays</b>, <b>whenever</b> и контекст «When I was a child…» помогают понять привычный повтор. <b>Would</b> здесь не выражает будущее из прошлого и не обозначает условное действие — оно описывает привычные эпизоды.</p></section>\n<section class=\"gm33-panel\" id=\"gm33-would-filter\"><h3>2. Проверь тип глагола — действие или состояние?</h3><div class=\"gm33-grid3\"><div><strong>✓ Действие</strong><p>We <b>would play</b> in the garden.</p><small>Регулярно играли.</small></div><div><strong>✗ Состояние</strong><p><s>I would know</s> her address when I was six.</p><small>Здесь лучше <b>I used to know</b> her address.</small></div><div><strong>✓ Нейтральная альтернатива</strong><p>We <b>played</b> outside every day.</p><small>Past Simple также выражает регулярные события.</small></div></div><p>Некоторые глаголы могут описывать и состояние, и действие, но в базовом употреблении <b>would</b> для привычек выбирают повторяющиеся действия, а не <i>be, have (= possess), know, own</i>.</p></section>\n<section class=\"gm33-panel\" id=\"gm33-would-forms\"><h3>3. Структура и отрицание</h3><div class=\"gm33-table\"><table><tr><th>Тип</th><th>Пример и перевод</th></tr><tr><td>Утверждение</td><td>She <b>would bring</b> snacks every Friday. — Бывало, она приносила перекусы каждую пятницу.</td></tr><tr><td>Отрицание</td><td>He <b>wouldn't speak</b> during the journey. — Он бывало не разговаривал в дороге (или отказывался говорить — нужен контекст).</td></tr><tr><td>Вопрос</td><td><b>Would</b> your uncle <b>read</b> to you on Sundays? — Твой дядя обычно читал тебе по воскресеньям?</td></tr></table></div><p>В практической речи прошлые привычки обычно вводят через <b>used to</b> или Past Simple, а <b>would</b> раскрывает последовательность знакомых событий. Сами вопросы с would могут иметь другое значение («вы бы…?»), поэтому для тренировки добавляем контекст прошлого.</p></section>\n<section class=\"gm33-panel\" id=\"gm33-would-vs\"><h3>4. Три варианта в одном рассказе</h3><div class=\"gm33-table\"><table><tr><th>Форма</th><th>Пример</th><th>Смысл</th></tr><tr><td><b>used to</b></td><td>We used to live in a small town.</td><td>Старое состояние, часто изменившееся</td></tr><tr><td><b>would</b></td><td>In the evenings, we would sit by the river.</td><td>Повторяющаяся сцена прошлого</td></tr><tr><td><b>Past Simple</b></td><td>We sat by the river every evening.</td><td>Нейтральный факт о старом распорядке</td></tr></table></div><p>После would всегда базовая форма: <b>would go</b>, не <s>would went</s> и не <s>would to go</s>. Не путай с вежливым <b>Would you like…?</b> и условным <b>I would travel if…</b>.</p></section>\n<section class=\"gm33-panel\" id=\"gm33-would-exam\"><h3>5. Что делать с заданиями ОГЭ</h3><ol><li>Прочитай предложение вместе с предыдущим: есть ли воспоминание?</li><li>Определи, идёт ли речь о многократных действиях или состоянии.</li><li>Если дано would, после него используй V1.</li><li>Если дан глагол без подсказок, чаще возможно Past Simple; не подставляй would механически.</li></ol><p class=\"gm33-note\">В упражнениях этой темы контекст явно требует или запрещает would. Это учебная отработка значения, а не утверждение, что every day автоматически требует бы.</p></section>\n</article>",
    "levels": [
      [
        {
          "id": "v33-past-habit-would-0-1",
          "prompt": "As a child, I ___ visit my grandmother every Friday. (WOULD)",
          "answer": "would",
          "why": "Повторяющаяся старая привычка в заданном прошлом контексте."
        },
        {
          "id": "v33-past-habit-would-0-2",
          "prompt": "Every winter, we would ___ a snowman together. (BUILD)",
          "answer": "build",
          "why": "После would V1 build."
        },
        {
          "id": "v33-past-habit-would-0-3",
          "prompt": "In the evenings, Grandpa ___ tell us stories. (WOULD)",
          "answer": "would",
          "why": "Воспоминание о повторявшемся действии."
        },
        {
          "id": "v33-past-habit-would-0-4",
          "prompt": "She would ___ us postcards from her trips. (SEND)",
          "answer": "send",
          "why": "После would базовая форма send."
        },
        {
          "id": "v33-past-habit-would-0-5",
          "prompt": "When I was eight, I ___ play chess with my dad on Sundays. (WOULD)",
          "answer": "would",
          "why": "Регулярное действие в прошлом."
        },
        {
          "id": "v33-past-habit-would-0-6",
          "prompt": "He ___ read by the fireplace every evening. (WOULD)",
          "answer": "would",
          "why": "Повторяемая сцена прошлого."
        },
        {
          "id": "v33-past-habit-would-0-7",
          "prompt": "We would ___ along the river after dinner. (WALK)",
          "answer": "walk",
          "why": "Would + V1 walk."
        },
        {
          "id": "v33-past-habit-would-0-8",
          "prompt": "Every summer, my cousins would ___ with us. (STAY)",
          "answer": "stay",
          "why": "Would + V1 stay."
        },
        {
          "id": "v33-past-habit-would-0-9",
          "prompt": "When we lived there, my friends ___ knock on the door every morning. (WOULD)",
          "answer": "would",
          "why": "Регулярное стучали, задан старый контекст."
        },
        {
          "id": "v33-past-habit-would-0-10",
          "prompt": "On rainy Sundays, Mum would ___ cakes. (BAKE)",
          "answer": "bake",
          "why": "Would + V1 bake."
        },
        {
          "id": "v33-past-habit-would-0-11",
          "prompt": "When we were little, we ___ spend hours making models. (WOULD)",
          "answer": "would",
          "why": "Воспоминание о регулярных действиях."
        },
        {
          "id": "v33-past-habit-would-0-12",
          "prompt": "My granddad would ___ the same song at bedtime. (SING)",
          "answer": "sing",
          "why": "Would + V1 sing, а не sang."
        }
      ],
      [
        {
          "id": "v33-past-habit-would-1-1",
          "prompt": "Correct: As kids, we would played in that park.",
          "answer": "As kids, we would play in that park.",
          "why": "После would — V1 play."
        },
        {
          "id": "v33-past-habit-would-1-2",
          "prompt": "Correct: Every Sunday, she would to visit her aunt.",
          "answer": "Every Sunday, she would visit her aunt.",
          "why": "После модального would частица to не ставится."
        },
        {
          "id": "v33-past-habit-would-1-3",
          "prompt": "Correct: In those years, he would owned a big house. (replace WOULD with USED TO)",
          "answer": "In those years, he used to own a big house.",
          "why": "Own — состояние владения; used to подходит лучше."
        },
        {
          "id": "v33-past-habit-would-1-4",
          "prompt": "Rewrite with WOULD: When I was young, every winter we visited my cousins.",
          "answer": "When I was young, every winter we would visit my cousins.",
          "why": "Регулярное действие в заданном прошлом контексте."
        },
        {
          "id": "v33-past-habit-would-1-5",
          "prompt": "Correct: Whenever it snowed, we would went sledging.",
          "answer": "Whenever it snowed, we would go sledging.",
          "why": "After would, V1 go."
        },
        {
          "id": "v33-past-habit-would-1-6",
          "prompt": "Make negative with WOULDN'T: As a child, he always talked at dinner.",
          "answer": "As a child, he wouldn't talk at dinner.",
          "why": "В задании изменяем смысл на «обычно не разговаривал»; wouldn't talk."
        },
        {
          "id": "v33-past-habit-would-1-7",
          "prompt": "Correct: My mother would knew the neighbours when she was young. (use USED TO)",
          "answer": "My mother used to know the neighbours when she was young.",
          "why": "Know — состояние, used to know."
        },
        {
          "id": "v33-past-habit-would-1-8",
          "prompt": "Rewrite with WOULD: At the old camp, every evening we sang by the fire.",
          "answer": "At the old camp, every evening we would sing by the fire.",
          "why": "Воспоминание о повторяемом действии."
        },
        {
          "id": "v33-past-habit-would-1-9",
          "prompt": "Correct: On Fridays, our coach would giving us advice.",
          "answer": "On Fridays, our coach would give us advice.",
          "why": "После would нужна базовая форма give."
        },
        {
          "id": "v33-past-habit-would-1-10",
          "prompt": "Rewrite with USED TO: In the past, our family had a small cottage. [state of possession]",
          "answer": "In the past, our family used to have a small cottage.",
          "why": "Иметь в собственности — состояние: used to have."
        },
        {
          "id": "v33-past-habit-would-1-11",
          "prompt": "Make a question (old habit): Your uncle would visit you every Sunday when you were young.",
          "answer": "Would your uncle visit you every Sunday when you were young?",
          "why": "Инверсия: Would + подлежащее + V1?"
        },
        {
          "id": "v33-past-habit-would-1-12",
          "prompt": "Correct: When I was seven, my brother would be shy. (use USED TO for a state)",
          "answer": "When I was seven, my brother used to be shy.",
          "why": "Для прошлого состояния shy — used to be."
        }
      ],
      [
        {
          "id": "v33-past-habit-would-2-1",
          "prompt": "Childhood memory: Whenever it rained, we ___ (PLAY) board games. [WOULD]",
          "answer": "would play",
          "why": "Повторяемое действие в прошлой истории, would + V1."
        },
        {
          "id": "v33-past-habit-would-2-2",
          "prompt": "Childhood memory: In the old house, my sister ___ (KEEP) a diary every evening. [WOULD]",
          "answer": "would keep",
          "why": "Регулярно вела дневник, would keep."
        },
        {
          "id": "v33-past-habit-would-2-3",
          "prompt": "Childhood memory: We ___ (BE) very close to the sea. [USED TO; past state]",
          "answer": "used to be",
          "why": "Быть близко к морю — состояние, used to be."
        },
        {
          "id": "v33-past-habit-would-2-4",
          "prompt": "Childhood memory: At weekends, Dad ___ (COOK) breakfast for us. [WOULD]",
          "answer": "would cook",
          "why": "Повторяемое действие: would cook."
        },
        {
          "id": "v33-past-habit-would-2-5",
          "prompt": "Childhood memory: He ___ (HAVE) a bicycle with blue wheels. [USED TO; possession]",
          "answer": "used to have",
          "why": "Владение в прошлом, used to have."
        },
        {
          "id": "v33-past-habit-would-2-6",
          "prompt": "Childhood memory: In the evening, we ___ (SIT) outside and watch the stars. [WOULD]",
          "answer": "would sit",
          "why": "Повторяющаяся сцена: would sit."
        },
        {
          "id": "v33-past-habit-would-2-7",
          "prompt": "Summer camp: When I was twelve, our group ___ (SING) around the fire every night. [WOULD]",
          "answer": "would sing",
          "why": "Регулярное событие, would sing."
        },
        {
          "id": "v33-past-habit-would-2-8",
          "prompt": "Summer camp: Our camp ___ (BE) on a hill near a lake. [USED TO; location]",
          "answer": "used to be",
          "why": "Местоположение как прежнее состояние."
        },
        {
          "id": "v33-past-habit-would-2-9",
          "prompt": "Summer camp: After lunch, our instructor ___ (TEACH) us a new game. [WOULD]",
          "answer": "would teach",
          "why": "Регулярное действие после обеда."
        },
        {
          "id": "v33-past-habit-would-2-10",
          "prompt": "Summer camp: Our room ___ (HAVE) two windows. [USED TO; possession]",
          "answer": "used to have",
          "why": "Have = иметь, старое состояние."
        },
        {
          "id": "v33-past-habit-would-2-11",
          "prompt": "Summer camp: Whenever we felt tired, we ___ (REST) under a large tree. [WOULD]",
          "answer": "would rest",
          "why": "Повторяемое действие при условии."
        },
        {
          "id": "v33-past-habit-would-2-12",
          "prompt": "Summer camp: Every Sunday, we ___ (WRITE) postcards home. [WOULD]",
          "answer": "would write",
          "why": "Привычное действие в прошлом; would write."
        }
      ]
    ]
  },
  "Future Simple": {
    "slug": "future-simple",
    "theory": "\n<article class=\"gm33 gm33-decision\" id=\"rule-theory\"><header class=\"gm33-hero\"><span class=\"gm33-eyebrow\">РЕШЕНИЕ В МОМЕНТ РЕЧИ · ПРЕДПОЛОЖЕНИЕ · ОБЕЩАНИЕ</span><h2>Future Simple с will: почему мы говорим о будущем?</h2><p>Will не означает «любое будущее». Часто говорящий <strong>решает прямо сейчас, обещает или делает предположение</strong>. Выбери форму не по наличию слова tomorrow, а по намерению говорящего и контексту.</p></header>\n<section class=\"gm33-panel\" id=\"gm33-will-intents\"><h3>1. Три причины выбрать will</h3><div class=\"gm33-grid3\"><div><strong>Решение сейчас</strong><p>It's cold. <b>I'll close</b> the window.</p><small>Холодно. Я закрою окно (решил(а) сейчас).</small></div><div><strong>Обещание / предложение помощи</strong><p><b>I'll help</b> you after school.</p><small>Я помогу тебе после школы.</small></div><div><strong>Предположение / мнение</strong><p>I think she <b>will win</b>.</p><small>Думаю, она победит.</small></div></div><p>В вопросе <b>Will you help me?</b> может звучать просьба, а <b>Shall I…?</b> часто предлагает помощь в BrE: <i>Shall I open the door?</i></p></section>\n<section class=\"gm33-panel\" id=\"gm33-will-form\"><h3>2. Схема: will не изменяется по лицам</h3><div class=\"gm33-table\"><table><tr><th>Тип</th><th>Форма</th><th>Пример</th></tr><tr><td>Утверждение</td><td>I/you/he/she/we/they <b>will + V1</b></td><td>She <b>will call</b>. — Она позвонит.</td></tr><tr><td>Отрицание</td><td><b>won't + V1</b></td><td>We <b>won't be</b> late. — Мы не опоздаем.</td></tr><tr><td>Вопрос</td><td><b>Will</b> + подлежащее + V1?</td><td><b>Will</b> he <b>come</b>? — Он придёт?</td></tr><tr><td>Краткие ответы</td><td>Yes, I will. / No, she won't.</td><td>Без смыслового глагола в коротком ответе.</td></tr></table></div><p><b>I'll, you'll, she'll</b> — сокращения с апострофом. Не смешивай с <b>'d</b> (had / would), значение определяет контекст.</p><div class=\"gm33-warning\"><s>He will goes tomorrow.</s><b>He will go tomorrow.</b><span>После will только V1, без -s и to.</span></div></section>\n<section class=\"gm33-panel\" id=\"gm33-will-other\"><h3>3. Will / going to / Present Continuous</h3><div class=\"gm33-table\"><table><tr><th>Что важно говорящему</th><th>Пример</th></tr><tr><td>Решил(а) прямо сейчас</td><td>There's no milk. <b>I'll buy</b> some. — Сейчас решаю купить.</td></tr><tr><td>Был план заранее</td><td>I'<b>m going to buy</b> milk. — Я собираюсь купить, план был раньше.</td></tr><tr><td>Уже договорились о встрече</td><td>I'<b>m meeting</b> Ana at six. — Договорённость на шесть.</td></tr><tr><td>Есть явные признаки события</td><td>Look at those clouds! It'<b>s going to rain</b>. — Видимые признаки.</td></tr><tr><td>Мнение о будущем</td><td>I think it <b>will rain</b> tomorrow. — Предположение.</td></tr></table></div><p>Некоторые будущие ситуации допускают больше одной формы — выбор меняет акцент. Не считай грамматически правильные альтернативы ошибкой без специально заданного смысла.</p></section>\n<section class=\"gm33-panel\" id=\"gm33-will-time\"><h3>4. После if и when: особое правило</h3><p><b>I'll text you when I get home.</b> — Я напишу, когда приду домой. <b>If it rains, we'll stay inside.</b> — Если пойдёт дождь, останемся дома.</p><p>В придаточных времени и реального условия, относящихся к будущему, обычно используют <b>Present Simple</b>, а не will: <s>when I will get home</s> — неверно в этом значении. Но <b>will</b> допустим, например, для выражения готовности: <i>If you'll wait here, I'll ask the manager.</i> Это другой смысл.</p></section>\n<section class=\"gm33-panel\" id=\"gm33-will-exam\"><h3>5. Алгоритм для самостоятельного ответа</h3><ol><li>Найди говорящего и причину сообщения: обещание, новое решение или предположение?</li><li>Посмотри, не описывается ли заранее запланированное действие.</li><li>Проверь will/won't и V1 без окончаний.</li><li>После if / when проверь структуру двух частей предложения.</li></ol><p class=\"gm33-note\">В задании ОГЭ 20–28 исходное слово может преобразовываться в целую конструкцию <b>will + V1</b>, но нельзя выбирать Future Simple только по слову tomorrow.</p></section></article>",
    "levels": [
      [
        {
          "id": "v33-future-simple-0-1",
          "prompt": "It's cold. I ___ close the window. (WILL)",
          "answer": "will",
          "why": "Решение прямо сейчас: will close."
        },
        {
          "id": "v33-future-simple-0-2",
          "prompt": "I think she ___ pass the exam. (WILL)",
          "answer": "will",
          "why": "Мнение о будущем: will pass."
        },
        {
          "id": "v33-future-simple-0-3",
          "prompt": "He will ___ you tomorrow. (CALL)",
          "answer": "call",
          "why": "После will нужен V1 call."
        },
        {
          "id": "v33-future-simple-0-4",
          "prompt": "We ___ be late, I promise. (WON'T)",
          "answer": "won't",
          "why": "Отрицательное обещание: won't be late."
        },
        {
          "id": "v33-future-simple-0-5",
          "prompt": "___ they come to the party? (WILL)",
          "answer": "Will",
          "why": "Future Simple вопрос: Will + subject + V1."
        },
        {
          "id": "v33-future-simple-0-6",
          "prompt": "Yes, I ___. (Will you help?)",
          "answer": "will",
          "why": "Краткий ответ: Yes, I will."
        },
        {
          "id": "v33-future-simple-0-7",
          "prompt": "No, she ___. (Will Anna arrive soon?)",
          "answer": "won't",
          "why": "Краткое отрицание: won't."
        },
        {
          "id": "v33-future-simple-0-8",
          "prompt": "I ___ help you with those bags. (WILL)",
          "answer": "will",
          "why": "Спонтанное предложение помощи: will."
        },
        {
          "id": "v33-future-simple-0-9",
          "prompt": "She won't ___ the answer yet. (KNOW)",
          "answer": "know",
          "why": "Won't + V1 know."
        },
        {
          "id": "v33-future-simple-0-10",
          "prompt": "What ___ you do if it rains? (WILL)",
          "answer": "will",
          "why": "Will + subject + do, главное предложение о будущем."
        },
        {
          "id": "v33-future-simple-0-11",
          "prompt": "I think the team ___ win. (WILL)",
          "answer": "will",
          "why": "Предположение о будущем."
        },
        {
          "id": "v33-future-simple-0-12",
          "prompt": "They will ___ us when they arrive. (TEXT)",
          "answer": "text",
          "why": "Will + V1 text."
        }
      ],
      [
        {
          "id": "v33-future-simple-1-1",
          "prompt": "Correct: He will goes to the library tomorrow.",
          "answer": "He will go to the library tomorrow.",
          "why": "После will базовая форма go."
        },
        {
          "id": "v33-future-simple-1-2",
          "prompt": "Correct: She won't to forget your birthday.",
          "answer": "She won't forget your birthday.",
          "why": "После won't не ставим to."
        },
        {
          "id": "v33-future-simple-1-3",
          "prompt": "Make a question: They will finish soon.",
          "answer": "Will they finish soon?",
          "why": "Will перед подлежащим they."
        },
        {
          "id": "v33-future-simple-1-4",
          "prompt": "Make negative: We will be late.",
          "answer": "We won't be late.||We will not be late.",
          "why": "Отрицание will not / won't."
        },
        {
          "id": "v33-future-simple-1-5",
          "prompt": "Correct: If it will rain, we will stay at home. [ordinary real condition]",
          "answer": "If it rains, we will stay at home.",
          "why": "В первом условном придаточном if + Present Simple."
        },
        {
          "id": "v33-future-simple-1-6",
          "prompt": "Correct: I'll call you when I will arrive. [time clause]",
          "answer": "I'll call you when I arrive.",
          "why": "В придаточном времени when + Present Simple."
        },
        {
          "id": "v33-future-simple-1-7",
          "prompt": "Give an instant decision: The phone is ringing. [begin: I WILL]",
          "answer": "I will answer it.",
          "why": "Спонтанное решение прямо сейчас: I will answer it."
        },
        {
          "id": "v33-future-simple-1-8",
          "prompt": "Make a short positive answer: Will your parents visit us?",
          "answer": "Yes, they will.",
          "why": "Краткий положительный ответ с will."
        },
        {
          "id": "v33-future-simple-1-9",
          "prompt": "Correct: Will she helps you?",
          "answer": "Will she help you?",
          "why": "В вопросе после will — V1 help."
        },
        {
          "id": "v33-future-simple-1-10",
          "prompt": "Rewrite with WILL: I promise to tell you tomorrow. [begin: I WILL]",
          "answer": "I will tell you tomorrow.",
          "why": "Обещание: I will tell you tomorrow."
        },
        {
          "id": "v33-future-simple-1-11",
          "prompt": "Correct: He wills visit us next week.",
          "answer": "He will visit us next week.",
          "why": "Will не получает -s в 3-м лице."
        },
        {
          "id": "v33-future-simple-1-12",
          "prompt": "Rewrite as a question: You won't forget me. [ask if forgetting will happen]",
          "answer": "Will you forget me?",
          "why": "Вопрос Will you forget me? без not."
        }
      ],
      [
        {
          "id": "v33-future-simple-2-1",
          "prompt": "At home: The kettle is boiling. I ___ (MAKE) tea for us. [decision now]",
          "answer": "will make",
          "why": "Спонтанное решение, will + make."
        },
        {
          "id": "v33-future-simple-2-2",
          "prompt": "At home: Don't worry. I ___ (NOT / TELL) anyone your secret. [promise]",
          "answer": "won't tell||will not tell",
          "why": "Отрицательное обещание: won't tell."
        },
        {
          "id": "v33-future-simple-2-3",
          "prompt": "At home: I think our guests ___ (ARRIVE) before seven. [prediction]",
          "answer": "will arrive",
          "why": "Мнение, will + V1."
        },
        {
          "id": "v33-future-simple-2-4",
          "prompt": "At home: ___ (YOU / OPEN) the door, please? [request with WILL]",
          "answer": "Will you open",
          "why": "Просьба: Will you open...?"
        },
        {
          "id": "v33-future-simple-2-5",
          "prompt": "At home: If Dad ___ (FINISH) early, we'll watch a film. [real condition]",
          "answer": "finishes",
          "why": "В условном придаточном if + Present Simple 3-е лицо finishes."
        },
        {
          "id": "v33-future-simple-2-6",
          "prompt": "At home: We'll eat when everyone ___ (BE) here. [time clause]",
          "answer": "is",
          "why": "После when со значением будущего — Present Simple is."
        },
        {
          "id": "v33-future-simple-2-7",
          "prompt": "School project: I ___ (CARRY) these boxes for you. [offering help now]",
          "answer": "will carry",
          "why": "Новое предложение помощи: will carry."
        },
        {
          "id": "v33-future-simple-2-8",
          "prompt": "School project: We ___ (NOT / FORGET) our presentation, I promise.",
          "answer": "won't forget||will not forget",
          "why": "Обещание, отрицание future simple."
        },
        {
          "id": "v33-future-simple-2-9",
          "prompt": "School project: She believes our model ___ (WORK) well. [prediction]",
          "answer": "will work",
          "why": "Предположение: will work."
        },
        {
          "id": "v33-future-simple-2-10",
          "prompt": "School project: When the bell ___ (RING), we'll go inside. [future time clause]",
          "answer": "rings",
          "why": "После when Present Simple rings."
        },
        {
          "id": "v33-future-simple-2-11",
          "prompt": "School project: I promise I ___ (CHECK) your notes tonight. [promise]",
          "answer": "will check",
          "why": "Обещание: will check."
        },
        {
          "id": "v33-future-simple-2-12",
          "prompt": "School project: If the printer ___ (BREAK), we'll use the library. [real condition]",
          "answer": "breaks",
          "why": "Реальное условие: if + Present Simple breaks."
        }
      ]
    ]
  },
  "Be going to": {
    "slug": "going-to",
    "theory": "\n<article class=\"gm33 gm33-signs\" id=\"rule-theory\"><header class=\"gm33-hero\"><span class=\"gm33-eyebrow\">ПЛАН ИЛИ ПРИЗНАК?</span><h2>Be going to: намерение заранее или прогноз по тому, что видно</h2><p>Спроси себя: <b>план уже существовал</b> или <b>есть признаки, что событие произойдёт</b>? Оба значения выражает <b>am / is / are going to + V1</b>. Это не просто другое название Future Simple.</p></header>\n<section class=\"gm33-panel\" id=\"gm33-gt-fork\"><h3>1. Два пути к going to</h3><div class=\"gm33-pair\"><div><small>ПЛАН ДО МОМЕНТА РЕЧИ</small><p><b>I'm going to learn Italian this year.</b><br>Я собираюсь учить итальянский в этом году.</p><p>Решение уже принято, даже если точная дата ещё не назначена.</p></div><div><small>ВИДНЫЕ ПРИЗНАКИ</small><p><b>Look at those clouds! It's going to rain.</b><br>Посмотри на тучи! Сейчас пойдёт дождь.</p><p>Прогноз опирается на текущую ситуацию, а не только на мнение.</p></div></div><p><b>Careful! You're going to drop your phone!</b> — Ты сейчас уронишь телефон! Говорящий замечает признаки близкого события.</p></section>\n<section class=\"gm33-panel\" id=\"gm33-gt-forms\"><h3>2. Выбери правильный be</h3><div class=\"gm33-table\"><table><tr><th>Лицо</th><th>Утверждение</th><th>Отрицание и вопрос</th></tr><tr><td>I</td><td>I <b>am going to</b> study.</td><td>I'm not going to study. / Am I going to study?</td></tr><tr><td>he, she, it</td><td>She <b>is going to</b> call.</td><td>She isn't going to call. / Is she going to call?</td></tr><tr><td>you, we, they</td><td>They <b>are going to</b> travel.</td><td>They aren't going to travel. / Are they going to travel?</td></tr></table></div><p>Краткие ответы используют <b>be</b>: <i>Are you going to study? — Yes, I am. / No, I'm not.</i> После <b>going to</b> всегда V1: <i>going to go</i> возможно и грамматически правильно, хотя иногда звучит тяжеловато.</p></section>\n<section class=\"gm33-panel\" id=\"gm33-gt-contrast\"><h3>3. Будущее — четыре разных сообщения</h3><div class=\"gm33-table\"><table><tr><th>Контекст</th><th>Форма</th><th>Почему</th></tr><tr><td>Мы уже решили купить билеты</td><td>We <b>are going to buy</b> tickets.</td><td>План</td></tr><tr><td>«Билетов нет? Я куплю!»</td><td><b>I'll buy</b> them.</td><td>Решение сейчас</td></tr><tr><td>Встреча согласована на 6</td><td>We <b>are meeting</b> at six.</td><td>Личная договорённость</td></tr><tr><td>Поезд отправляется в 6 по расписанию</td><td>The train <b>leaves</b> at six.</td><td>Расписание</td></tr></table></div><p>В разговоре формы иногда взаимозаменяемы, если можно понять несколько нюансов. В наших тестах нужный смысл указан, чтобы правильный альтернативный ответ не объявлялся ошибкой.</p></section>\n<section class=\"gm33-panel\" id=\"gm33-gt-traps\"><h3>4. Три распространённые ошибки</h3><div class=\"gm33-warning\"><s>She going to study.</s><b>She is going to study.</b><span>Без am / is / are конструкция неполна.</span></div><div class=\"gm33-warning\"><s>Are he going to come?</s><b>Is he going to come?</b><span>He требует is.</span></div><div class=\"gm33-warning\"><s>They are going to visiting us.</s><b>They are going to visit us.</b><span>После going to используется V1.</span></div><p>Различай <b>be going to + V1</b> (будущее) и буквальное <b>be going to + place</b> (идти куда-то): <i>I'm going to school</i> — «Я иду в школу» без глагола после to.</p></section>\n<section class=\"gm33-panel\" id=\"gm33-gt-exam\"><h3>5. Как решать без подсказки</h3><ol><li>Найди признак плана или видимое свидетельство будущего события.</li><li>Определи подлежащее: am, is или are?</li><li>Проверь отрицание / вопрос и место be.</li><li>Убедись, что после going to стоит V1.</li></ol><p class=\"gm33-note\">В заданиях ОГЭ 20–28 может потребоваться несколько слов, например <b>is going to visit</b>. Всегда проверяй контекст: наличие tomorrow не делает going to обязательным.</p></section></article>",
    "levels": [
      [
        {
          "id": "v33-going-to-0-1",
          "prompt": "I ___ going to study tonight. (BE)",
          "answer": "am",
          "why": "I am going to + V1."
        },
        {
          "id": "v33-going-to-0-2",
          "prompt": "She ___ going to visit her aunt tomorrow. (BE)",
          "answer": "is",
          "why": "She is going to visit."
        },
        {
          "id": "v33-going-to-0-3",
          "prompt": "They ___ going to buy a new bike. (BE)",
          "answer": "are",
          "why": "They are going to buy."
        },
        {
          "id": "v33-going-to-0-4",
          "prompt": "We are going to ___ a video tonight. (WATCH)",
          "answer": "watch",
          "why": "После going to — V1 watch."
        },
        {
          "id": "v33-going-to-0-5",
          "prompt": "___ he going to join us? (BE)",
          "answer": "Is",
          "why": "Вопрос: Is he going to...?"
        },
        {
          "id": "v33-going-to-0-6",
          "prompt": "I am not going to ___ the game. (PLAY)",
          "answer": "play",
          "why": "Going to + V1 play."
        },
        {
          "id": "v33-going-to-0-7",
          "prompt": "Look at the dark clouds. It ___ going to rain. (BE)",
          "answer": "is",
          "why": "По признакам ожидаем дождь: It is going to rain."
        },
        {
          "id": "v33-going-to-0-8",
          "prompt": "I have a plan: I ___ going to learn French. (BE)",
          "answer": "am",
          "why": "Заранее выбранный план: I am going to."
        },
        {
          "id": "v33-going-to-0-9",
          "prompt": "My friends aren't going to ___ late. (BE)",
          "answer": "be",
          "why": "Be going to be late: после going to может стоять be."
        },
        {
          "id": "v33-going-to-0-10",
          "prompt": "___ you going to take the bus? (BE)",
          "answer": "Are",
          "why": "You: Are you going to...?"
        },
        {
          "id": "v33-going-to-0-11",
          "prompt": "No, we ___. (Are you going to leave now?)",
          "answer": "aren't||are not",
          "why": "Краткий отрицательный ответ: No, we aren't."
        },
        {
          "id": "v33-going-to-0-12",
          "prompt": "He isn't going to ___ his phone. (SELL)",
          "answer": "sell",
          "why": "Is not going to + sell."
        }
      ],
      [
        {
          "id": "v33-going-to-1-1",
          "prompt": "Correct: I going to have lunch soon.",
          "answer": "I am going to have lunch soon.",
          "why": "I требует am перед going to."
        },
        {
          "id": "v33-going-to-1-2",
          "prompt": "Correct: They is going to watch a film.",
          "answer": "They are going to watch a film.",
          "why": "They + are going to."
        },
        {
          "id": "v33-going-to-1-3",
          "prompt": "Correct: Is your friends going to play?",
          "answer": "Are your friends going to play?",
          "why": "Friends — множественное число, are."
        },
        {
          "id": "v33-going-to-1-4",
          "prompt": "Make a question: She is going to study abroad.",
          "answer": "Is she going to study abroad?",
          "why": "Вопрос: Is + she + going to...?"
        },
        {
          "id": "v33-going-to-1-5",
          "prompt": "Make negative: He is going to join the club.",
          "answer": "He isn't going to join the club.||He is not going to join the club.",
          "why": "Отрицание ставится после is."
        },
        {
          "id": "v33-going-to-1-6",
          "prompt": "Correct: We are going to visiting our teacher.",
          "answer": "We are going to visit our teacher.",
          "why": "Going to + V1 visit."
        },
        {
          "id": "v33-going-to-1-7",
          "prompt": "Rewrite with THEY: She is going to order a pizza.",
          "answer": "They are going to order a pizza.",
          "why": "Subject they требует are; глагол остаётся order."
        },
        {
          "id": "v33-going-to-1-8",
          "prompt": "Make a short positive answer: Are you going to finish today?",
          "answer": "Yes, I am.",
          "why": "Краткий ответ строится с am."
        },
        {
          "id": "v33-going-to-1-9",
          "prompt": "Correct: Are he going to write to us?",
          "answer": "Is he going to write to us?",
          "why": "He + is в вопросе."
        },
        {
          "id": "v33-going-to-1-10",
          "prompt": "Correct: The baby going to fall! (visible signs)",
          "answer": "The baby is going to fall!",
          "why": "По видимым признакам: is going to fall."
        },
        {
          "id": "v33-going-to-1-11",
          "prompt": "Rewrite with I: We are going to take a break.",
          "answer": "I am going to take a break.",
          "why": "I am going to, не I are."
        },
        {
          "id": "v33-going-to-1-12",
          "prompt": "Make a question: They are going to move next year.",
          "answer": "Are they going to move next year?",
          "why": "Are перед they в вопросе."
        }
      ],
      [
        {
          "id": "v33-going-to-2-1",
          "prompt": "Weekend plan: We ___ (VISIT) the science museum. [GOING TO; decided yesterday]",
          "answer": "are going to visit",
          "why": "Заранее принятое решение: we are going to + V1."
        },
        {
          "id": "v33-going-to-2-2",
          "prompt": "Weekend plan: I ___ (NOT / BUY) anything expensive. [GOING TO; already decided]",
          "answer": "am not going to buy",
          "why": "Отрицательный план: am not going to buy."
        },
        {
          "id": "v33-going-to-2-3",
          "prompt": "Weekend plan: ___ (SHE / TAKE) her camera? [GOING TO; ask about plan]",
          "answer": "Is she going to take",
          "why": "Вопрос: Is + she + going to + V1."
        },
        {
          "id": "v33-going-to-2-4",
          "prompt": "Weekend plan: It ___ (RAIN) soon. [GOING TO; look at the dark clouds]",
          "answer": "is going to rain",
          "why": "Прогноз по видимым признакам: is going to rain."
        },
        {
          "id": "v33-going-to-2-5",
          "prompt": "Weekend plan: My friends ___ (BRING) sandwiches. [GOING TO; arranged yesterday]",
          "answer": "are going to bring",
          "why": "План: are going to bring."
        },
        {
          "id": "v33-going-to-2-6",
          "prompt": "Weekend plan: Watch out! You ___ (FALL)! [GOING TO; visible danger]",
          "answer": "are going to fall",
          "why": "По видимым признакам: are going to fall."
        },
        {
          "id": "v33-going-to-2-7",
          "prompt": "Holiday planning: She ___ (STAY) with her cousin. [GOING TO; decided last week]",
          "answer": "is going to stay",
          "why": "Заранее принятый план: is going to stay."
        },
        {
          "id": "v33-going-to-2-8",
          "prompt": "Holiday planning: We ___ (NOT / DRIVE) there. [GOING TO; plan already made]",
          "answer": "aren't going to drive||are not going to drive",
          "why": "Отрицание: are not going to + V1."
        },
        {
          "id": "v33-going-to-2-9",
          "prompt": "Holiday planning: ___ (THEY / RENT) a car? [GOING TO; asking about plans]",
          "answer": "Are they going to rent",
          "why": "Are they going to + V1."
        },
        {
          "id": "v33-going-to-2-10",
          "prompt": "Holiday planning: Look at the heavy suitcase! It ___ (BREAK). [GOING TO; visible signs]",
          "answer": "is going to break",
          "why": "Прогноз по видимым признакам: is going to break."
        },
        {
          "id": "v33-going-to-2-11",
          "prompt": "Holiday planning: Our guide ___ (SHOW) us the old town. [GOING TO; plan already agreed]",
          "answer": "is going to show",
          "why": "Заранее согласованное намерение: is going to show."
        },
        {
          "id": "v33-going-to-2-12",
          "prompt": "Holiday planning: I ___ (WRITE) a travel diary. [GOING TO; I planned it yesterday]",
          "answer": "am going to write",
          "why": "Заранее принятое решение: am going to write."
        }
      ]
    ]
  }
};
let installed=0;
for(const [title,lesson] of Object.entries(lessons)){
 const previous=library.guides[title];
 if(!previous)throw Error('v33: отсутствует тема '+title);
 if(lesson.levels.length!==3||lesson.levels.some(stage=>stage.length!==12))throw Error('v33: банк неполон '+title);
 library.guides[title]={...previous,theory:lesson.theory,levels:lesson.levels,v33:true};
 installed++;
}
window.OGE_GRAMMAR_INDIVIDUAL_V33={installed,topics:Object.keys(lessons),bankSize:installed*36};
})();
