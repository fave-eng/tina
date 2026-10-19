/* OGE 2027 · integrated week grammar.
   Single source: existing topic guides, levels and explanations (v18/v19/v28).
   No separate state or migration: student answers remain managed by app.js. */
(()=>{'use strict';
const P=window.OGE_PROGRAM,REF=window.OGE_GRAMMAR_REFERENCE_V18;
if(!P?.weeks?.length||!REF?.guides){console.error('Grammar bridge: topic guides unavailable');return;}
// Explicit mapping is important: the OGE timetable uses interdisciplinary weeks.
// A study-week topic is not necessarily identical to a grammar-catalog topic.
const TOPICS=[
 'to be','to be','Present Simple','Present Continuous','Past Simple',
 'Past Simple или Past Continuous','Present Perfect','Неправильные глаголы',
 'Future Simple','Must и have to','Исчисляемые и неисчисляемые существительные',
 'Some / any / no','Степени сравнения прилагательных',
 'Present Simple или Present Continuous','Passive Voice: Present Simple',
 'First Conditional','Second Conditional','Reported statements','Gerund (-ing)',
 'Past Perfect','Словообразование существительных','Словообразование прилагательных',
 'Фразовые глаголы','Неправильные глаголы','Reported questions',
 'Пунктуация и апостроф','Вопросы и краткие ответы','Словообразовательные семьи',
 'Present Simple или Present Continuous'
];
const cache=new Map();
function task(q,wi,i,kindOverride){
 const prompt=String(q.prompt||'').trim(),answer=String(q.answer||'').trim();
 // Keep the original answer and identifier. Avoid generating dubious solutions.
 const isOrder=/^(?:Расставь слова по порядку|Составь предложение из слов)\s*:/i.test(prompt)&&prompt.includes('/');
 const options=Array.isArray(q.options)&&q.options.length>1?q.options:null;
 return {id:'week-bridge-'+wi+'-'+q.id,kind:kindOverride||(isOrder?'order':options?'pick':'fill'),prompt,answer,
   options:options||[],explain:q.why||q.explain||'Вернись к объяснению правила и проверь контекст.'};
}
function source(wi){
 if(!Number.isInteger(wi)||wi<0||wi>=P.weeks.length)return null;
 if(cache.has(wi))return cache.get(wi);
 const topic=TOPICS[wi], guide=REF.guides[topic];
 if(!guide || !Array.isArray(guide.levels)||guide.levels.length<2){console.error('Missing grammar guide:',wi,topic);return null}
 const primary=guide.levels[0].filter(q=>q?.id&&q?.prompt&&q?.answer).slice(0,6);
 const later=guide.levels[1].filter(q=>q?.id&&q?.prompt&&q?.answer).slice(0,6);
 if(primary.length!==6||later.length!==6){console.error('Insufficient exercises for',wi,topic);return null;}
 const hint=window.OGE_GUIDES?.[wi];
 const o={
   week:wi,title:topic,meaning:hint?.explain||P.weeks[wi].grammar,
   formula:P.rules?.[topic]?.form||'Выбирай конструкцию исходя из значения и контекста.',
   negative:P.rules?.[topic]?.negative||'Проверь отрицательную форму в полном правиле.',
   question:P.rules?.[topic]?.question||'Проверь вопросительную форму в полном правиле.',
   nuance:hint?.mistake||'',compare:'Сравни условия применения и примеры в таблице ниже.',
   common:hint?.mistake||'',richTheory:guide.theory||'',
   examples:[[hint?.example||'',hint?.mistake||'']].filter(x=>x[0]),
   tasks:primary.map((q,i)=>task(q,wi,i)),
   review:later.map((q,i)=>({id:'week-review-'+wi+'-'+q.id,prompt:q.prompt,answer:q.answer,explain:q.why||q.explain||'',week:wi,topic}))
 };
 cache.set(wi,o);return o;
}
function isFortnight(wi){return Number.isInteger(wi)&&wi>0&&wi%2===1&&wi<P.weeks.length}
function fortnight(wi){
 if(!isFortnight(wi))return [];
 return [wi-1,wi].flatMap(x=>(source(x)?.review||[]).slice(0,3));
}
window.OGE_GRAMMAR_MASTERCLASS={get:source,isFortnight,fortnight,topicKeys:TOPICS.slice()};
})();
