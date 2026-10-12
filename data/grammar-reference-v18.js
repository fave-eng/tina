/* ОГЭ 2027 · v18. Авторский учебный справочник, первое полное переиздание: to be.
   Формы и проверки создаются из смысловых блоков, не из коротких карточек. */
(()=>{'use strict';
const theory=`
<section class="gr18-intro" id="rule-theory" aria-label="Объяснение to be">
  <div class="gr18-kicker">Основы английского предложения · A1 → ОГЭ</div>
  <h2>TO BE: быть, являться, находиться</h2>
  <p>В русском мы говорим «Она дома», «Мне 15», «Они счастливы». В английском между подлежащим и описанием <strong>обязательно нужна форма глагола be</strong>: <b>She <em>is</em> at home.</b> Здесь <em>is</em> не переводится отдельным словом, но без него предложение будет неправильным.</p>
  <div class="gr18-equation" aria-label="Схема предложения"><span>КТО?</span><b>+</b><span class="be">AM / IS / ARE</span><b>+</b><span>КАКОЙ? ГДЕ? КТО ОН?</span></div>
  <div class="gr18-pair"><div><b class="gr18-cross">✕</b> She at home.<small>Пропущен глагол-связка.</small></div><div><b class="gr18-check">✓</b> She <mark>is</mark> at home.<small>Она дома.</small></div></div>
</section>
<section class="gr18-card">
  <div class="gr18-section-number">01</div><h2>Как выбрать am, is, are</h2><p class="gr18-desc">Смотри <strong>на подлежащее</strong>, а не на соседнее существительное. В настоящем времени три формы: <strong>am, is, are</strong>.</p>
  <div class="gr18-pronouns">
    <div class="gr18-pro gr18-am"><strong>I</strong><span class="gr18-arrow">↓</span><b>AM</b><small>I am happy.<br>Я счастлива.</small></div>
    <div class="gr18-pro gr18-is"><strong>HE · SHE · IT</strong><span class="gr18-arrow">↓</span><b>IS</b><small>She is ready.<br>Она готова.</small></div>
    <div class="gr18-pro gr18-are"><strong>YOU · WE · THEY</strong><span class="gr18-arrow">↓</span><b>ARE</b><small>They are here.<br>Они здесь.</small></div>
  </div>
  <div class="gr18-hint"><b>Важно:</b> you всегда употребляется с <b>are</b> — даже когда обращаешься к одному человеку. «My parents» = they → <b>are</b>. «My sister» = she → <b>is</b>.</div>
</section>
<section class="gr18-card">
  <div class="gr18-section-number">02</div><h2>Утверждение, отрицание и вопрос</h2><p class="gr18-desc">В отличие от большинства смысловых глаголов, <strong>be само образует отрицание и вопрос</strong>: вспомогательные do/does не нужны.</p>
  <div class="gr18-tablewrap"><table class="gr18-table"><thead><tr><th>Что строим</th><th>Как строим</th><th>Пример и перевод</th></tr></thead><tbody>
   <tr><th>Утверждение</th><td><code>subject + am/is/are + ...</code></td><td><strong>My brother is tired.</strong><small>Мой брат устал.</small></td></tr>
   <tr><th>Отрицание</th><td><code>subject + am/is/are + not + ...</code></td><td><strong>My brother isn't tired.</strong><small>Мой брат не устал.</small></td></tr>
   <tr><th>Общий вопрос</th><td><code>Am/Is/Are + subject + ...?</code></td><td><strong>Is your brother tired?</strong><small>Твой брат устал?</small></td></tr>
   <tr><th>Специальный вопрос</th><td><code>Wh-word + am/is/are + subject + ...?</code></td><td><strong>Why is your brother tired?</strong><small>Почему твой брат устал?</small></td></tr>
   <tr><th>Краткий ответ</th><td><code>Yes, + subject + be.</code><br><code>No, + subject + be + not.</code></td><td><strong>Yes, he is. / No, he isn’t.</strong><small>Да. / Нет.</small></td></tr>
  </tbody></table></div>
  <div class="gr18-pattern"><span>В английском вопросе be меняется местами с подлежащим:</span><div><b>She</b> <strong>is</strong> at school. <span>→</span> <strong>Is</strong> <b>she</b> at school?</div><small>Она в школе. → Она в школе?</small></div>
  <div class="gr18-hint"><b>Краткие ответы:</b> «Yes, she is» (а не «Yes, she's»). «No, I'm not» — стандартная форма отрицательного ответа с I.</div>
</section>
<section class="gr18-card">
 <div class="gr18-section-number">03</div><h2>Когда нужно to be — пять смысловых ситуаций</h2><p class="gr18-desc">Запомни ситуации, в которых после be стоит <strong>не действие</strong>, а информация о человеке или предмете.</p>
 <div class="gr18-situations">
  <article><span>👤</span><div><b>Кто это? Профессия, роль</b><strong>She is a doctor.</strong><small>Она врач. Перед профессией в единственном числе нужен a/an.</small></div></article>
  <article><span>🎂</span><div><b>Возраст</b><strong>I am fifteen.</strong><small>Мне пятнадцать. Не I have fifteen.</small></div></article>
  <article><span>📍</span><div><b>Местонахождение</b><strong>We are at school.</strong><small>Мы в школе. На вопрос Where are you?</small></div></article>
  <article><span>🌤</span><div><b>Состояние, настроение, качество</b><strong>They are happy. It's cold today.</strong><small>Они счастливы. Сегодня холодно. Для погоды часто нужно формальное it.</small></div></article>
  <article><span>🌍</span><div><b>Откуда, национальность, происхождение</b><strong>Are you from Russia?</strong><small>Ты из России? Для вопроса используем are перед you.</small></div></article>
 </div>
</section>
<section class="gr18-card">
 <div class="gr18-section-number">04</div><h2>Сравни: to be и обычный глагол</h2><p class="gr18-desc">Это самая частая путаница. <strong>Be</strong> соединяет подлежащее с описанием; <strong>work, like, play</strong> сами называют действие или отношение.</p>
 <div class="gr18-tablewrap"><table class="gr18-table gr18-compare"><thead><tr><th>Что хотим сказать</th><th>С TO BE</th><th>Со смысловым глаголом</th></tr></thead><tbody>
  <tr><th>Утверждение</th><td>She <b>is</b> tired.<small>Она устала.</small></td><td>She <b>likes</b> tea.<small>Она любит чай.</small></td></tr>
  <tr><th>Отрицание</th><td>She <b>isn't</b> tired.<small>Она не устала.</small></td><td>She <b>doesn't like</b> tea.<small>Она не любит чай.</small></td></tr>
  <tr><th>Вопрос</th><td><b>Is</b> she tired?<small>Она устала?</small></td><td><b>Does</b> she <b>like</b> tea?<small>Она любит чай?</small></td></tr>
 </tbody></table></div>
 <div class="gr18-pair"><div><b class="gr18-cross">✕</b> Does she <mark>is</mark> tired?<small>Нельзя использовать does перед формой be.</small></div><div><b class="gr18-check">✓</b> <mark>Is</mark> she tired?<small>Be само меняет порядок слов в вопросе.</small></div></div>
 <div class="gr18-hint">Не добавляй be перед обычным смысловым глаголом Present Simple: <b>She likes music</b> (не «She is likes music»). Но в Present Continuous <b>be + V-ing</b> обязательны: <b>She is listening</b> — это отдельная конструкция, которую изучишь позже.</div>
</section>
<section class="gr18-card">
 <div class="gr18-section-number">05</div><h2>Сокращения и короткие ответы</h2><p class="gr18-desc">В живой речи формы be часто сокращаются. При написании письма на ОГЭ допустимы обычные сокращения, если сохраняется уместный стиль.</p>
 <div class="gr18-tablewrap"><table class="gr18-table"><thead><tr><th>Полная форма</th><th>Сокращение</th><th>Пример</th></tr></thead><tbody>
  <tr><td>I am</td><td><b>I'm</b></td><td>I'm ready. — Я готова.</td></tr><tr><td>You are</td><td><b>You're</b></td><td>You're right. — Ты права.</td></tr>
  <tr><td>He is / She is / It is</td><td><b>He's / She's / It's</b></td><td>She's sixteen. — Ей 16.</td></tr>
  <tr><td>We are / They are</td><td><b>We're / They're</b></td><td>We're at home. — Мы дома.</td></tr>
  <tr><td>is not / are not</td><td><b>isn't / aren't</b></td><td>They aren't late. — Они не опоздали.</td></tr>
 </tbody></table></div><div class="gr18-hint">В отрицании с <b>I</b> говорим <b>I'm not</b>. А краткий утвердительный ответ: <b>Yes, she is</b>, не <b>Yes, she's</b>.</div>
</section>
<section class="gr18-card">
 <div class="gr18-section-number">06</div><h2>А что такое was и were?</h2><p class="gr18-desc">Это <b>прошедшее время</b> того же глагола. Не смешивай формы настоящего и прошлого при построении одного предложения.</p>
 <div class="gr18-tenses"><div class="gr18-now"><div class="gr18-time">СЕЙЧАС · PRESENT</div><b>I am / he is / they are</b><p>She <strong>is</strong> at home today.</p><small>Она сегодня дома.</small></div><div class="gr18-then"><div class="gr18-time">В ПРОШЛОМ · PAST</div><b>I was / he was / they were</b><p>She <strong>was</strong> at home yesterday.</p><small>Она была дома вчера.</small></div></div>
 <div class="gr18-tablewrap"><table class="gr18-table"><thead><tr><th>Подлежащее</th><th>Настоящее</th><th>Прошлое</th></tr></thead><tbody><tr><th>I</th><td>am</td><td>was</td></tr><tr><th>he / she / it</th><td>is</td><td>was</td></tr><tr><th>you / we / they</th><td>are</td><td>were</td></tr></tbody></table></div>
 <p class="gr18-desc">Отрицание: <b>wasn't / weren't</b>. Вопрос: <b>Was she at home?</b> — Она была дома? Это предварительное знакомство: подробнее прошедшее время разбирается в отдельных занятиях.</p>
</section>
<section class="gr18-card">
 <div class="gr18-section-number">07</div><h2>Ошибки, которые важно научиться замечать</h2>
 <div class="gr18-errors">
 <div><del>I 15 years old.</del><strong>I am 15 years old.</strong><small>Возраст: be, а не пропуск связки.</small></div>
 <div><del>Does she is ready?</del><strong>Is she ready?</strong><small>Перед формой be не нужен does.</small></div>
 <div><del>My parents is at home.</del><strong>My parents are at home.</strong><small>Parents — множественное число.</small></div>
 <div><del>Where you are?</del><strong>Where are you?</strong><small>В прямом специальном вопросе be стоит перед подлежащим.</small></div>
 <div><del>She is teacher.</del><strong>She is a teacher.</strong><small>Профессия в единственном числе: a/an + существительное.</small></div>
 <div><del>He not at school.</del><strong>He isn't at school.</strong><small>Отрицание: be + not.</small></div>
 </div>
 <div class="gr18-hint"><b>Алгоритм перед контрольным заданием:</b> ① Определи время. ② Найди подлежащее. ③ Выбери форму be. ④ Проверь порядок слов. ⑤ Проверь, нужен ли артикль перед профессией.</div>
</section>`;
// «answer» может содержать альтернативные допустимые формы, разделённые ||.
const levels=[
[
 ['I ___ tired today.','am','am|is|are','Только I сочетается с am.'],
 ['My sister ___ at school.','is','am|is|are','My sister = she → is.'],
 ['My friends ___ from Ufa.','are','am|is|are','My friends = they → are.'],
 ['You ___ very kind.','are','am|is|are','С you используется are даже для одного человека.'],
 ['The dog ___ hungry.','is','am|is|are','The dog = it → is.'],
 ['We ___ ready for the test.','are','am|is|are','We — множественное число: are.'],
 ['My mum and dad ___ at work.','are','am|is|are','Два человека = they → are.'],
 ['It ___ cold outside.','is','am|is|are','Для погоды используем it is.'],
 ['Where ___ your brother?','is','am|is|are','Your brother — один человек: is.'],
 ['___ I late?','Am','Am|Is|Are','Вопрос с I начинается с Am.'],
 ['Why ___ they upset?','are','am|is|are','Подлежащее they → are.'],
 ['___ she fifteen?','Is','Am|Is|Are','С she в вопросе Is ставится первым.'],
 ['That film ___ interesting.','is','am|is|are','Один фильм = it → is.'],
 ['___ your cousins from Kazan?','Are','Am|Is|Are','Cousins = they, поэтому Are.'],
 ['My grandmother ___ a teacher.','is','am|is|are','My grandmother = she → is.'],
 ['Why ___ I nervous?','am','am|is|are','Даже после why с I используется am.'],
 ['My schoolbag ___ heavy.','is','am|is|are','Schoolbag — единственное число: is.'],
 ['My sister and I ___ students.','are','am|is|are','My sister and I = we → are.'],
],
[
 ['Сделай отрицание: She is late.','She is not late.||She isn’t late.||She isn\'t late.',null,'В отрицании not идёт сразу после is.'],
 ['Сделай вопрос: They are from Moscow.','Are they from Moscow?',null,'В вопросе are ставится перед they.'],
 ['Переведи: Мне шестнадцать лет.','I am sixteen.||I’m sixteen.||I\'m sixteen.||I am sixteen years old.||I\'m sixteen years old.',null,'Возраст выражается через I am, а не I have.'],
 ['Исправь: He not at home.','He is not at home.||He isn’t at home.||He isn\'t at home.',null,'Отрицание строится из is + not.'],
 ['Дополни: ___ your parents at home?','Are',null,'Parents — множественное число, поэтому Are.'],
 ['Сделай вопрос: Your sister is a doctor.','Is your sister a doctor?',null,'Be выносится перед подлежащим. Артикль a сохраняется.'],
 ['Исправь: Where they are?','Where are they?',null,'В прямом Wh-вопросе be идёт перед подлежащим.'],
 ['Переведи: Мы не голодны.','We are not hungry.||We aren’t hungry.||We aren\'t hungry.',null,'We → are; отрицание not.'],
 ['Составь краткий ответ: Is she ready? (да)','Yes, she is.',null,'В положительном кратком ответе форма is не сокращается.'],
 ['Сделай отрицание: I am afraid.','I am not afraid.||I’m not afraid.||I\'m not afraid.',null,'С I используем am not, не amn’t.'],
 ['Переведи: Где твой рюкзак?','Where is your backpack?||Where is your rucksack?',null,'Where + is + подлежащее в прямом вопросе.'],
 ['Исправь: My cousins is here.','My cousins are here.',null,'Cousins — множественное число.'],
 ['Исправь: They isn’t ready.','They aren’t ready.||They are not ready.||They aren’t ready.',null,'They требует are, а отрицание — aren’t.'],
 ['Сделай вопрос: I am late.','Am I late?',null,'В вопросе с I форма am стоит перед I.'],
 ['Переведи: Она дома.','She is at home.||She’s at home.||She’s at home.',null,'Местонахождение выражается через is.'],
 ['Составь краткий ответ: Is he at work? (нет)','No, he isn’t.||No, he is not.||No, he isn’t.',null,'Краткий ответ с he: he isn’t.'],
 ['Сделай отрицание: We are friends.','We are not friends.||We aren’t friends.||We aren’t friends.',null,'Not после are.'],
 ['Исправь: Is you hungry?','Are you hungry?',null,'С you всегда используем are.'],
],
[
 ['Исправь вопрос: Does she is happy?','Is she happy?',null,'С be не используют do/does.'],
 ['Переведи: Твоя сестра учительница?','Is your sister a teacher?',null,'В вопросе Is перед подлежащим; нужен артикль a.'],
 ['Составь Wh-вопрос: He is sad. (почему?)','Why is he sad?',null,'Why + is + he + прилагательное.'],
 ['Исправь: They are not likes music.','They do not like music.||They don’t like music.||They don\'t like music.',null,'Like — смысловой глагол, в Present Simple отрицание do not + V1.'],
 ['Переведи: Сегодня холодно, но я не устала.','It is cold today, but I am not tired.||It’s cold today, but I’m not tired.||It\'s cold today, but I\'m not tired.',null,'Для погоды нужно it is. С I: am not.'],
 ['Составь краткий ответ: Are your friends ready? (нет)','No, they are not.||No, they aren’t.||No, they aren\'t.',null,'В кратком ответе к your friends используем they.'],
 ['Исправь: She is engineer.','She is an engineer.',null,'Перед профессией, начинающейся с гласного звука, используем an.'],
 ['Переведи: Почему ты сегодня дома?','Why are you at home today?',null,'Wh-вопрос: why + are + you.'],
 ['Исправь: I are good at English.','I am good at English.',null,'С I нужна форма am, даже если дальше есть существительное English.'],
 ['Сделай общий вопрос: They are interested in music.','Are they interested in music?',null,'Вопрос be: are + they, не do.'],
 ['Исправь: My father isn’t work on Sundays.','My father doesn’t work on Sundays.||My father does not work on Sundays.',null,'Work — действие. Present Simple с he образует отрицание doesn’t + work.'],
 ['Сделай отрицание: She is a nurse.','She isn’t a nurse.||She is not a nurse.||She isn\'t a nurse.',null,'Отрицание после is, артикль a сохраняется.'],
 ['Исправь: She is likes pizza.','She likes pizza.',null,'Like — смысловой глагол: без is в Present Simple.'],
 ['Сделай общий вопрос: The children are tired.','Are the children tired?',null,'The children = they, ставим Are перед подлежащим.'],
 ['Исправь: Does it cold today?','Is it cold today?',null,'Cold — прилагательное, а вопрос строится с be.'],
 ['Переведи: Я не из Москвы.','I am not from Moscow.||I’m not from Moscow.||I’m not from Moscow.',null,'Для происхождения: be + from. С I форма am not.'],
 ['Исправь: My teacher are from Russia.','My teacher is from Russia.',null,'Teacher — один человек, нужна is.'],
 ['Составь Wh-вопрос: My keys are on the table. (где?)','Where are my keys?',null,'Where + are + my keys, так как keys во множественном числе.'],
]
];
const tasks=levels.map((arr,stage)=>arr.map((a,i)=>({id:'be-'+stage+'-'+i,prompt:a[0],answer:a[1],options:a[2]?.split('|')||null,why:a[3]})));
function normalise(x){return String(x||'').trim().toLowerCase().replace(/[’‘]/g,"'").replace(/[.!?]+$/g,'').replace(/\s+/g,' ')}
function correct(value,expected){const v=normalise(value);return Boolean(v)&&expected.split('||').some(a=>normalise(a)===v)}
const guides={'to be':{title:'TO BE — быть, являться, находиться',subtitle:'Выбрать нужную форму, построить предложение и отличить be от обычных глаголов',theory,levels:tasks}};
window.OGE_GRAMMAR_REFERENCE_V18={guides,correct,normalise};
})();
