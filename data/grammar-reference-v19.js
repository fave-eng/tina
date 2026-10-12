/* ОГЭ 2027. V19: 98 тематических конспектов и ступенчатые задания.
   Авторская методика: смысл -> контраст -> модель -> нюанс -> практика.
   Данные определены в grammar-reference-v19-data.js. Старые результаты не стираются. */
(() => {
  'use strict';
  const data = window.OGE_GRAMMAR_TOPIC_V19 || [];
  const base = window.OGE_GRAMMAR_REFERENCE_V18;
  if (!base || data.length !== 98) { console.error('V19: не удалось загрузить 98 тем или основу справочника'); return; }
  const esc = x => String(x ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  const lessonTypes = ['Основы предложения','Времена и их значения','Прошедшие события','Будущее и планы','Модальность','Количество и выбор','Признаки и сравнения','Сложные предложения','Глагольные модели','Образование слов','Коммуникация и оформление'];
  const sectionData = [
    {name:'Базовая грамматика',start:0,end:12},
    {name:'Настоящее время',start:12,end:21},
    {name:'Прошедшее время',start:21,end:28},
    {name:'Будущее время',start:28,end:34},
    {name:'Модальные глаголы',start:34,end:42},
    {name:'Существительные и местоимения',start:42,end:51},
    {name:'Прилагательные и наречия',start:51,end:59},
    {name:'Сложные грамматические конструкции',start:59,end:72},
    {name:'Глагольные конструкции',start:72,end:82},
    {name:'Лексическая грамматика',start:82,end:90},
    {name:'Предложения, речь, оформление',start:90,end:98}
  ];
  const special = {
    'have got / has got': ['**HAVE GOT** выражает обладание, но в обычном Present Simple глагол have может быть смысловым.', 'Have you got a sister? = Do you have a sister? Вопрос Has she got...? строится без does. Но Does she have breakfast? — со смысловым have.', 'В утвердительном предложении British English часто допускает I’ve got; формулировку I got в значении «у меня есть» не стоит переносить в школьные ответы.'],
    'There is / There are': ['**There is** вводит новый объект, **The library is...** сообщает о местонахождении известного объекта.', 'Уточняй число главного существительного: There is some water. / There are three chairs. С неисчисляемыми — is.', 'В вопросах о количестве: How many chairs are there?; для отрицания: There isn’t any milk.'],
    'Артикли a / an / the / нулевой': ['Артикль выбирается по смыслу: впервые называем один исчисляемый предмет (a/an) или говорим об уже определённом (the).', 'A/an определяется **звуком**, не буквой: an hour, a university. Во множественном числе и с неисчисляемыми при обобщении артикля обычно нет.', 'Профессия в единственном числе: She is a doctor. Но He likes music (в общем смысле, без the).'],
    'Предлоги времени': ['**IN** — широкий период (month, year, season); **ON** — конкретный день/дата; **AT** — точное время/момент.', 'in the morning, on Monday morning, at 7 o’clock; at night, at the weekend (BrE), on the weekend (AmE).', 'После last/next/this/every часто вообще не нужен предлог: next Monday, last year.'],
    'Предлоги места и движения': ['**IN** — внутри границ; **ON** — на поверхности; **AT** — пункт или конкретная точка.', 'in the car, on the bus, at the bus stop. Движение выражают into, onto, to, towards, across, through и др.', 'Не переводить русский предлог «в» автоматически как in: at school, in class, on the train.'],
    'Present Simple': ['**Регулярное** действие, общеизвестный факт и состояние. Не означает «в эту секунду» только потому, что это настоящее время.', 'С he/she/it прибавляем -s/-es: She studies. В вопросе does возвращаем основную форму: Does she study?', 'Обычные маркеры usually, every day, often помогают, но решающим остаётся смысл.'],
    'Present Continuous': ['**Процесс прямо сейчас** или временная ситуация в текущий период. Форма: am/is/are + -ing.', 'I am staying with my aunt this week — временное проживание, необязательно именно в эту секунду.', 'Know, belong, understand и ряд других глаголов состояния обычно не используют в Continuous.'],
    'Present Simple или Present Continuous': ['Нельзя выбирать время только по наличию now/usually: сначала определи привычку или процесс.', 'She works in a café (постоянная работа). She is working in a café this summer (временно).', 'С compare meanings think, have, see, look возможно разное время в разных значениях.'],
    'Present Perfect': ['Главная связь с настоящим — результат или опыт, а не просто «что-то было в прошлом».', 'I have lost my key (ключ до сих пор потерян). I lost it yesterday (указано завершённое время).', 'С finished time expressions (yesterday, last year, in 2020) в стандартных учебных примерах требуется Past Simple.'],
    'Present Perfect Continuous': ['Акцент на длительности/процессе до настоящего: have/has been + -ing.', 'I have been studying for two hours (длительность). I have finished two exercises (результат).', 'Не со всеми stative verbs Continuous естественно; I have known her for years, а не been knowing.'],
    'For и since': ['**For** отвечает «как долго» (for two years), **since** — «с какого момента» (since 2022).', 'I have lived here for five years. I have lived here since 2021.', 'For сочетается не только с Perfect: I stayed there for a week last summer.'],
    'Past Simple': ['Завершённые события в прошлом; форма V2/-ed, а после did — только основная форма V1.', 'I saw him yesterday. Did you see him? I didn’t see him.', 'Отрицание с was/were не строится через did: She wasn’t there.'],
    'Past Continuous': ['Фоновый процесс в момент прошлого: was/were + -ing. Действие может быть прервано коротким событием Past Simple.', 'I was reading when the phone rang. While I was reading, my sister was cooking.', 'When и while не являются абсолютными переключателями времён: учитывай тип каждого действия.'],
    'Past Simple или Past Continuous': ['**Past Simple** — событие целиком; **Past Continuous** — процесс в тот момент.', 'When I arrived, they were eating. Появление arrived — точечное событие, were eating — фон.', 'Два коротких последовательных действия: She opened the door and walked in (обычно оба Past Simple).'],
    'Past Perfect': ['Прошлое до другого прошлого: had + V3; нужно, если важно показать порядок двух прошедших событий.', 'When we arrived, the film had started (он начался раньше нашего прихода).', 'Past Perfect не требуется в каждом рассказе о прошлом: если порядок очевиден и нет особого смысла, часто достаточен Past Simple.'],
    'Future Simple': ['Will чаще выражает решение в момент речи, прогноз, обещание или предложение помощи.', 'I’ll help you. Look at the sky — it’s going to rain (видимые признаки).', 'После when/if о будущем в придаточном времени или условии обычно Present Simple, не will.'],
    'Be going to': ['Going to используется для намерения, намеченного решения, либо прогноза по видимым признакам.', 'I’m going to visit my grandma. Look at those clouds! It’s going to rain.', 'В going to обязательно нужна форма be: I am going to, not I going to.'],
    'Must и have to': ['Must часто подчёркивает позицию говорящего или сильную необходимость; have to нередко передаёт внешнюю обязанность.', 'I must call Mum. I have to wear a uniform at school.', 'Отрицания НЕ равны: mustn’t = нельзя; don’t have to = не обязательно.'],
    'Mustn’t и don’t have to': ['Mustn’t = **запрещено**. Don’t have to = **нет необходимости**. Это противоположные значения.', 'You mustn’t park here (запрет). You don’t have to come early (можно не приходить рано).', 'В Past Simple: didn’t have to = не было необходимости, а не запрет в прошлом.'],
    'Few / a few / little / a little': ['Few/little — почти нет, обычно негативная оценка; a few/a little — немного есть, может хватить.', 'Few/a few — с исчисляемыми множественного числа; little/a little — с неисчисляемыми.', 'A little water (немного воды). A few bottles (несколько бутылок).'],
    'Степени сравнения прилагательных': ['Короткие прилагательные часто получают -er/-est; длинные — more/the most.', 'big → bigger → the biggest (удвоение g). good → better → the best — исключение.', 'После comparative обычно than; при сравнении равенства — as ... as.'],
    'Прилагательные с -ed и -ing': ['-ed описывает чувство человека; -ing — свойство объекта, который вызывает это чувство.', 'I am bored (мне скучно). The film is boring (фильм скучный).', 'Не every -ed adjective обозначает чувство, и не every -ing word является прилагательным. Смотри на функцию в предложении.'],
    'First Conditional': ['Реальная возможная ситуация в будущем: If + Present Simple, will + V1.', 'If it rains, we will stay home. / We will stay home if it rains.', 'После if о будущем не нужно will в стандартном условном придаточном.'],
    'Second Conditional': ['Воображаемая/маловероятная ситуация сейчас или в будущем: If + Past Simple, would + V1.', 'If I had more time, I would read more. После if нельзя автоматически добавлять would.', 'В формальном стиле If I were you...; в речи слышно was, но для экзамена надёжнее were.'],
    'Passive Voice: Present Simple': ['Пассив фокусируется на том, что делают с объектом: am/is/are + V3.', 'They produce tea here → Tea is produced here.', 'Исполнитель при необходимости вводится by, но часто не нужен.'],
    'Passive Voice: Past Simple': ['Пассив в завершённом прошлом: was/were + V3.', 'They built the bridge in 1990 → The bridge was built in 1990.', 'Не путай was built (пассив) и was building (Past Continuous, актив).'],
    'Passive Voice: Present Perfect': ['Пассив с результатом к настоящему: have/has been + V3.', 'The letters have been sent. Сравни: They have sent the letters.', 'Не пропусти been: has repaired = актив, has been repaired = пассив.'],
    'Reported questions': ['В косвенном вопросе порядок как в утверждении: she asked where I lived.', 'Прямой: Where do you live? Косвенный: She asked where I lived.', 'Yes/no questions вводятся if/whether; вопросительный порядок и do/does исчезают внутри придаточного.'],
    'Словообразование существительных': ['В заданиях ОГЭ сначала выясни, что требуется после артикля/прилагательного/глагола, затем подбери суффикс.', 'happy → happiness; decide → decision; employ → employment.', 'Проверяй изменение основы и орфографию; одного знания суффикса иногда недостаточно.'],
    'Словообразование прилагательных': ['Прилагательное часто стоит перед существительным или после be/seem/look.', 'care → careful/careless, comfort → comfortable, danger → dangerous.', 'Проверяй значение: helpful и helpless имеют противоположный смысл.'],
    'Отрицательные приставки': ['Нужна не просто часть речи, но и смысл предложения: un-/in-/im-/il-/ir-/dis-.', 'possible → impossible, legal → illegal, regular → irregular.', 'Приставки нельзя выбирать свободно: не все корни принимают любой отрицательный префикс.']
  };
  const groupHints = [
    'Прежде чем ставить форму, найди подлежащее. Проверь, что сказуемое и вспомогательные глаголы согласованы с ним.',
    'Время выбирается по смыслу действия: факт, процесс, опыт, результат или длительность. Сигнальные слова только подсказывают.',
    'В рассказе о прошлом определи последовательность событий и что было процессом, а что — завершённым событием.',
    'Отличай план, прогноз по признакам, расписание и решение в момент речи; после союзов времени проверь форму придаточного.',
    'Сначала разберись со значением: способность, необходимость, запрет, совет, разрешение или вероятность.',
    'Проверь число, исчисляемость, определённость и смысл количества. Одного перевода русского слова недостаточно.',
    'Найди функцию в предложении: признак предмета, способ действия или сравнение; затем проверь форму и исключения.',
    'Раздели сложное предложение на главную и зависимую части. Посмотри, какая часть выражает условие, причину или чужую речь.',
    'После первого глагола нужно выбирать строго определённую модель: to-infinitive, bare infinitive или -ing.',
    'В заданиях на словообразование установи требуемую часть речи, затем значение, приставку/суффикс и орфографию.',
    'Тренируйся не только письменно: порядок слов, пауза, ударение и цель высказывания проверяются в контексте.'
  ];
  const examHint = (section,title) => {
    if(section===9) return 'ОГЭ, задания 29–34: словообразование в связном тексте. Сначала определяй часть речи и смысл, затем изменяй исходное слово.';
    if(section===10 && (/произнош|интонац/.test(title))) return 'ОГЭ, устная часть: чтение вслух и связное высказывание. Это не задание 20–34; потренируй произношение с аудио и преподавателем.';
    if(section===10) return 'ОГЭ, письмо / устная часть: применяй правило в естественном тексте и ответах. Некоторые конструкции дополнительно встречаются в 20–28.';
    if(section===0 && /порядок|вопрос|повел|предлог/.test(title)) return 'ОГЭ: правило важно для письма и устного ответа; в заданиях 20–28 акцент на образовании форм, а не на перестановке слов.';
    return 'ОГЭ, задания 20–28: грамматическое преобразование исходного слова с учётом контекста. Перед ответом читай всё предложение или связный текст.';
  };
  const fig = (section,title) => {
    if (/Предлоги (времени|места)/.test(title)) return `<div class="v19-visual v19-preps" aria-label="Смысловая иллюстрация IN, ON, AT">
      <div><svg viewBox="0 0 90 74" class="v19-picture-svg" role="img" aria-label="Мяч внутри коробки"><path d="M12 24 L44 8 L77 24 L45 40Z" fill="#b7defc" stroke="#2b79b7" stroke-width="2"/><path d="M12 24 V59 L45 72 V40 Z" fill="#86b8e7" stroke="#2b79b7" stroke-width="2"/><path d="M45 40 L77 24 V59 L45 72 Z" fill="#d0e9fa" stroke="#2b79b7" stroke-width="2"/><circle cx="44" cy="25" r="10" fill="#1678db" stroke="#0c519b" stroke-width="2"/></svg><b>IN</b><small>внутри пространства<br>in a box · in May</small></div>
      <div><svg viewBox="0 0 90 74" class="v19-picture-svg" role="img" aria-label="Книга на поверхности стола"><path d="M8 28 L65 28 L79 36 L22 36Z" fill="#e5b47f" stroke="#9a6331" stroke-width="2"/><path d="M22 36 V65 M69 36 V65" stroke="#9a6331" stroke-width="6"/><path d="M30 12 L61 12 L69 26 L36 26 Z" fill="#3685d0" stroke="#1f5d99" stroke-width="2"/><path d="M36 14 L61 14" stroke="#d5eafb" stroke-width="3"/></svg><b>ON</b><small>на поверхности<br>on a desk · on Monday</small></div>
      <div><svg viewBox="0 0 90 74" class="v19-picture-svg" role="img" aria-label="Метка конкретной точки на карте"><path d="M8 17 L30 12 L58 19 L82 12 V56 L59 65 L30 57 L8 61Z" fill="#a8dfb0" stroke="#48995e" stroke-width="2"/><path d="M30 12 V57 M58 19 V65" stroke="#6cad75" stroke-width="2"/><path d="M45 5 C27 5 27 25 45 46 C63 25 63 5 45 5Z" fill="#e84949" stroke="#b62232" stroke-width="2"/><circle cx="45" cy="19" r="7" fill="#fff"/></svg><b>AT</b><small>в точке / точное время<br>at school · at 7:00</small></div>
     </div>`;
    if ([1,2,3].includes(section) || /Conditional|Future in the Past|Since|For и/.test(title)) return `<div class="v19-visual v19-time" aria-label="Временная линия: прошлое, сейчас, будущее"><span>PAST</span><div class="v19-line"><i></i><strong>NOW</strong><i></i></div><span>FUTURE</span></div>`;
    if(section===4) return `<div class="v19-visual v19-modals"><div>Возможность</div><div>Совет</div><div>Необходимость</div><div class="v19-danger">Запрет</div></div>`;
    if(section===9) return `<div class="v19-visual v19-word"><span>ПРИСТАВКА</span><b>+</b><span>КОРЕНЬ</span><b>+</b><span>СУФФИКС</span><b>→</b><span>ФОРМА В КОНТЕКСТЕ</span></div>`;
    if(section===5 || section===6) return `<div class="v19-visual v19-word"><span>СМЫСЛ</span><b>→</b><span>КОНТЕКСТ</span><b>→</b><span>ФОРМА</span></div>`;
    if(section===7) return `<div class="v19-visual v19-word"><span>ПРИДАТОЧНАЯ ЧАСТЬ</span><b>↔</b><span>ГЛАВНАЯ ЧАСТЬ</span><b>→</b><span>СМЫСЛ</span></div>`;
    return `<div class="v19-visual v19-word"><span>КТО / ЧТО?</span><b>→</b><span>КАКОЕ ЗНАЧЕНИЕ?</span><b>→</b><span>КАКАЯ ФОРМА?</span></div>`;
  };
  const shorten = text => String(text || '').replace(/\s*\([^)]*\)\s*$/,'').trim();
  const splitSentence = sentence => String(sentence || '').trim().replace(/[.!?]$/,'');
  const tokenize = sentence => splitSentence(sentence).split(/\s+/).filter(Boolean);
  const rng = (parts,seed) => { let x=seed+13;const a=[...parts];for(let i=a.length-1;i>0;i--){x=(Math.imul(x,1664525)+1013904223)>>>0;const j=x%(i+1);[a[i],a[j]]=[a[j],a[i]]}if(a.join(' ')===parts.join(' '))a.reverse();return a;};
  const task=(id,prompt,answer,why,options=null)=>({id,prompt,answer:String(answer||''),why:String(why||''),options});
  const accepted = sentence => {
    const a=splitSentence(sentence);const variants=new Set([a]);
    const pairs=[[/^I am\b/i,"I'm"],[/^You are\b/i,"You're"],[/^We are\b/i,"We're"],[/^They are\b/i,"They're"],[/^He is\b/i,"He's"],[/^She is\b/i,"She's"],[/^It is\b/i,"It's"],[/\bdo not\b/ig,"don't"],[/\bdoes not\b/ig,"doesn't"],[/\bdid not\b/ig,"didn't"],[/\bis not\b/ig,"isn't"],[/\bare not\b/ig,"aren't"],[/\bhave not\b/ig,"haven't"],[/\bhas not\b/ig,"hasn't"],[/\bwill not\b/ig,"won't"]];
    for(const [re,val] of pairs){if(re.test(a))variants.add(a.replace(re,val));re.lastIndex=0;}
    return [...variants].join('||');
  };
  const createExerciseLevels = (item,idx) => {
    const [e1,e2]=item.examples;
    const n1=shorten(e1.ru),n2=shorten(e2.ru),a1=splitSentence(e1.en),a2=splitSentence(e2.en);
    const ss=[a1,a2],rr=[n1,n2];
    const original=item.items;
    const cloze=(en,n)=> {const words=tokenize(en);const j=words.length>2?Math.min(words.length-1,1+(n%Math.max(1,words.length-2))):0;
      const selected=words[j],context=words.map((w,k)=>k===j?'____':w).join(' ');
      return {context,selected};};
    const out=[[],[],[]];
    const push=(level,key,prompt,answer,why,options=null)=>out[level].push(task('v19-'+idx+'-'+level+'-'+key,prompt,answer,why,options));
    const g0=item.focus+' '+item.nuance;
    const g1=item.formula+' '+item.nuance;
    const g2=item.nuance+' Сверь смысл, форму и контекст целиком.';
    for(let i=0;i<2;i++){
      const t=original[i]; push(0,'form-'+i,'Впиши нужную форму. '+t.prompt,t.answer,g0);
      push(1,'form2-'+i,(idx>=90?'Практика для письма и речи: ':idx>=82?'Словообразование по контексту: ':'Тренировка грамматического преобразования: ')+t.prompt,t.answer,g1);
      push(2,'form3-'+i,'Итоговая грамматическая трансформация без вариантов. '+t.prompt,t.answer,g2);
      const c=cloze(ss[i],i);
      push(0,'context-'+i,`Закончи образец по переводу «${rr[i]}»: ${c.context} (впиши одно пропущенное слово).`,c.selected,item.focus);
      push(1,'translate-'+i,`Переведи на английский: ${rr[i]}`,accepted(ss[i]),g1);
      push(2,'order-'+i,`Собери предложение в правильном порядке из слов: ${rng(tokenize(ss[i]),idx*37+i*13+11).join(' / ')}.`,accepted(ss[i]),g2);
      push(0,'order-'+i,`Расставь слова по порядку: ${rng(tokenize(ss[i]),idx*17+i*31+3).join(' / ')}.`,ss[i],item.focus);
      push(1,'restore-'+i,`Запиши английское предложение целиком по русскому смыслу, используя изученную модель: ${rr[i]}`,accepted(ss[i]),g1);
      push(2,'translate2-'+i,`Перевод без подсказки, учитывай нюансы правила: ${rr[i]}`,accepted(ss[i]),g2);
      const c2=cloze(ss[i],i+1);
      push(0,'contextb-'+i,`Найди вторую пропущенную форму в модели: ${c2.context}. Русский смысл: ${rr[i]}`,c2.selected,item.focus);
      push(0,'translateeasy-'+i,`Запиши английский пример из теории по смыслу «${rr[i]}».`,accepted(ss[i]),g0);
      push(1,'arrange-'+i,`Поставь слова в порядок, чтобы получился верный английский пример: ${rng(tokenize(ss[i]),idx*25+i*79+19).join(' / ')}`,accepted(ss[i]),g1);
      push(1,'contextb-'+i,`Вставь нужное слово, ориентируясь на весь пример «${rr[i]}»: ${c2.context}`,c2.selected,item.formula);
      push(2,'editing-'+i,`Восстанови корректную модель с пропуском «${rr[i]}»: ${c2.context}. Запиши целое предложение.`,accepted(ss[i]),g2);
      push(2,'contextc-'+i,`Сложная проверка употребления. Впиши пропущенное слово в контексте: ${c.context}.`,c.selected,g2);

    }
    const t=original[2];
    push(0,'fix0','Найди ошибку и перепиши предложение верно: '+t.prompt,t.answer,item.nuance);
    push(1,'fix1','Исправь грамматическую ошибку. Не меняй исходный смысл: '+t.prompt,t.answer,item.nuance);
    push(2,'fix2','Итоговая редактура: исправь неправильную конструкцию: '+t.prompt,t.answer,item.nuance);
    push(0,'focus','По памяти впиши корректную форму из правила: '+original[0].prompt,original[0].answer,g0);
    push(1,'focus','Прочитай весь контекст и заполни пропуск: '+original[1].prompt,original[1].answer,g1);
    push(2,'focus','Смешанная проверка: '+original[0].prompt,original[0].answer,g2);
    for(let lev=0;lev<3;lev++){
      // Первые 6 — разные операции; после ошибки следующие 6 — другая подборка.
      const xs=out[lev]; const unique = [...new Map(xs.map(o=>[o.id,o])).values()];
      out[lev] = unique;
    }
    return out;
  };
  const block = (title,body) => `<section class="v19-block"><h3>${esc(title)}</h3>${body}</section>`;
  function buildTheory(item,index){
    const section=sectionData.findIndex(g=>index>=g.start&&index<g.end);
    const [e1,e2]=item.examples;
    const insights=special[item.title]||[];
    const twoExamples=`<div class="v19-compare"><div class="v19-compare-col"><span class="v19-tag">Основной образец</span><strong lang="en">${esc(e1.en)}</strong><p>${esc(e1.ru)}</p></div><div class="v19-compare-col"><span class="v19-tag">Сопоставь значение</span><strong lang="en">${esc(e2.en)}</strong><p>${esc(e2.ru)}</p></div></div>`;
    const guide=`<div class="v19-notebook"><div class="v19-lesson-id">РАЗБОР ${index+1} ИЗ 98 · ${esc(sectionData[section].name)}</div>
       <div class="v19-headline"><h2>Сначала пойми смысл, затем выбирай форму</h2><p>${esc(item.focus)}</p></div>
       ${fig(section,item.title)}
       ${block('01 · Когда употреблять и как узнать ситуацию',`<p>${esc(item.focus)}</p><div class="v19-guide-steps"><div><b>1</b><span>Найди главный смысл: что именно говорящий хочет сообщить?</span></div><div><b>2</b><span>Сравни два предложения: как меняется значение или грамматическая роль?</span></div><div><b>3</b><span>Выбери форму, затем сверь исключение и порядок слов.</span></div></div>`)}
       ${block('02 · Построение предложения',`<div class="v19-formula"><small>ГРАММАТИЧЕСКАЯ МОДЕЛЬ</small><strong>${esc(item.formula)}</strong></div><p class="v19-secondary">${esc(groupHints[section])}</p>`)}
       ${block('03 · Сравнительная таблица и перевод',`<p>Сравнение нужно читать по строкам: сначала смысл, затем конкретная конструкция и перевод.</p><div class="v19-table-wrap"><table class="v19-table"><thead><tr><th>Что сравниваем</th><th>Модель 1</th><th>Модель 2</th></tr></thead><tbody><tr><th>Предложение</th><td lang="en">${esc(e1.en)}</td><td lang="en">${esc(e2.en)}</td></tr><tr><th>Перевод и смысл</th><td>${esc(e1.ru)}</td><td>${esc(e2.ru)}</td></tr><tr><th>Как выбрать</th><td>${esc(item.focus)}</td><td>${esc(item.nuance)}</td></tr></tbody></table></div>${twoExamples}`)}
       ${block('04 · Нюансы, ограничения и типичные ошибки',`<div class="v19-caution"><b>Обязательно запомни</b><p>${esc(item.nuance)}</p></div>${insights.map(x=>`<p class="v19-insight">${esc(x.replace(/\*\*/g,''))}</p>`).join('')}<div class="v19-error-pair"><b>Найди ошибку</b><span class="v19-cross" lang="en">${esc(item.items[2].prompt)}</span><span class="v19-right" lang="en">${esc(item.items[2].answer)}</span><small>${esc(item.nuance)}</small></div>`)}
       ${block('05 · Как это проверяется на ОГЭ',`<p>${esc(examHint(section,item.title))}</p><p>На экзамене нельзя угадывать по одному соседнему слову. Определи роль слова, время или значение в предложении, а потом выбери грамматическую форму. Для устных и письменных конструкций объясни выбор своими словами.</p>`)}
       <div class="v19-checklist"><h3>Перед практикой проверь себя</h3><label><input type="checkbox"> Я могу объяснить, <b>когда</b> это употребляется</label><label><input type="checkbox"> Я могу построить форму без подглядывания</label><label><input type="checkbox"> Я понимаю разницу между сопоставленными примерами</label><label><input type="checkbox"> Я вижу ошибку и могу её исправить</label></div>
    </div>`;
    return guide;
  }
  const names=[];const duplicates=[];
  data.forEach((item,idx)=>{
    names.push(item.title);
    if(base.guides[item.title]){if(item.title!=='to be')duplicates.push(item.title);return;}
    base.guides[item.title]={title:item.title,theory:buildTheory(item,idx),levels:createExerciseLevels(item,idx),v19:true};
  });
  window.OGE_GRAMMAR_REFERENCE_V19={count:data.length,published:Object.keys(base.guides).length,duplicates,authoringModel:'context-first, contrast, visual scheme, errors, OGE-shaped response'};
})();
