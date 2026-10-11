// @ts-nocheck
// Отчёты для подготовки Кристины к ОГЭ-2027.
// Доступ по X-Report-Secret: без пользовательского JWT, НО не публичный эндпоинт.
// Никаких токенов в клиентские файлы сайта.
import { createClient } from 'npm:@supabase/supabase-js@2.58.0';

/* Общая логика отчётов: работает в браузере и в Supabase Edge Function. Без внешних зависимостей. */
(function (root) {
  'use strict';
  const OFFSET_MS = 5 * 60 * 60 * 1000; // Уфа, Asia/Yekaterinburg — UTC+05, без сезонного перевода
  const DAY_MS = 86400000;
  const pad = n => String(n).padStart(2,'0');
  const localParts = date => {
    const shifted = new Date(new Date(date).getTime()+OFFSET_MS);
    return {year:shifted.getUTCFullYear(),month:shifted.getUTCMonth()+1,day:shifted.getUTCDate(),weekday:shifted.getUTCDay()};
  };
  const dateKey = (y,m,d) => `${y}-${pad(m)}-${pad(d)}`;
  const boundary = (y,m,d) => new Date(Date.UTC(y,m-1,d)-OFFSET_MS).toISOString();
  const addDays = (y,m,d,delta) => {
    const out=new Date(Date.UTC(y,m-1,d+delta));
    return {year:out.getUTCFullYear(),month:out.getUTCMonth()+1,day:out.getUTCDate()};
  };
  const fmtDate = str => new Intl.DateTimeFormat('ru-RU',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(`${str}T12:00:00Z`));
  const monthName = (y,m) => new Intl.DateTimeFormat('ru-RU',{month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(Date.UTC(y,m-1,15)));
  function weeklyPeriod(now=new Date()) {
    const p=localParts(now);
    const currentMonday=addDays(p.year,p.month,p.day,-((p.weekday+6)%7));
    const start=addDays(currentMonday.year,currentMonday.month,currentMonday.day,-7);
    return {kind:'weekly',key:dateKey(start.year,start.month,start.day),start:boundary(start.year,start.month,start.day),end:boundary(currentMonday.year,currentMonday.month,currentMonday.day),label:`${fmtDate(dateKey(start.year,start.month,start.day))} — ${fmtDate((()=>{const x=addDays(currentMonday.year,currentMonday.month,currentMonday.day,-1);return dateKey(x.year,x.month,x.day)})())}`};
  }
  function monthlyPeriod(now=new Date()) {
    const p=localParts(now), recent=addDays(p.year,p.month,1,-1), prev=addDays(recent.year,recent.month,1,-1);
    const thisMonth={year:recent.year,month:recent.month};
    const previousMonth={year:prev.year,month:prev.month};
    return {kind:'monthly',key:dateKey(thisMonth.year,thisMonth.month,1),start:boundary(thisMonth.year,thisMonth.month,1),end:boundary(p.year,p.month,1),label:monthName(thisMonth.year,thisMonth.month),previous:{start:boundary(previousMonth.year,previousMonth.month,1),end:boundary(thisMonth.year,thisMonth.month,1),label:monthName(previousMonth.year,previousMonth.month)}};
  }
  function summarize(events, start, end) {
    const selected=(events||[]).filter(e=>e&&typeof e.date==='string'&&e.date>=start&&e.date<end);
    let correct=0,total=0,attempts=0,passes=0;
    const days=new Set(),passedDays=new Set(),sessions=new Set(),errors={},domains={},learned=new Set(),vocabMarked=new Set(),rulesPassed=new Set(),diagnosticScores=[],types={};
    for(const event of selected){
      types[event.type]=(types[event.type]||0)+1;
      if(event.type==='diagnostic' && Number.isFinite(event.score))diagnosticScores.push(event.score);
      if(event.type==='lesson'){
        attempts++;days.add(localDateKey(event.date));
        if(event.passed){passes++;passedDays.add(localDateKey(event.date));sessions.add(event.week+'-'+event.session);if(event.topic)learned.add(event.topic)}
      }
      if(event.type==='vocab' && event.status==='known' && event.word) vocabMarked.add(event.word);
      if(event.type==='grammar' && event.passed && event.topic){rulesPassed.add(event.topic);learned.add(event.topic)}
      const items=event.type==='diagnostic'?[]:Array.isArray(event.items)?event.items:[];
      for(const q of items){if(!q||typeof q.correct!=='boolean')continue;total++;if(q.correct)correct++;
        const domain=q.domain||'Другое';
        if(!domains[domain])domains[domain]={correct:0,total:0};
        domains[domain].total++;if(q.correct)domains[domain].correct++;
        else {const key=`${domain}||${q.topic||'Без уточнённой темы'}`;if(!errors[key])errors[key]={domain,topic:q.topic||'Без уточнённой темы',count:0};errors[key].count++}
      }
    }
    return {correct,total,accuracy:total?Math.round(correct*100/total):null,attempts,passes,studyDays:days.size,passedDays:passedDays.size,diagnosticScores,sessionCount:sessions.size,learned:[...learned],vocabMarked:vocabMarked.size,rulesPassed:rulesPassed.size,topErrors:Object.values(errors).sort((a,b)=>b.count-a.count||a.topic.localeCompare(b.topic,'ru')).slice(0,6),domains,types,events:selected.length};
  }
  function localDateKey(iso) {const p=localParts(iso);return dateKey(p.year,p.month,p.day)}
  function errorLines(m){return m.topErrors.length?m.topErrors.map(x=>`• ${x.domain}: ${x.topic} — ${x.count} ${x.count===1?'ошибка':x.count<=4?'ошибки':'ошибок'}`).join('\n'):'Ошибок в проверенных заданиях нет или ещё нет данных для анализа.'}
  function ideas(m){const main=m.topErrors[0];if(!main)return 'Продолжай заниматься по плану и повторяй слова небольшими порциями.';return `На следующей неделе удели 15 минут теме «${main.topic}» и повтори похожие задания.`}
  function weeklyReport(events, now=new Date()) {
    const period=weeklyPeriod(now),m=summarize(events,period.start,period.end);
    let motivation=m.studyDays>=3?'Три учебных дня — отличный ритм. Так держать!':m.studyDays>0?'Ты уже сделала шаг вперёд. На новой неделе попробуй распределить три занятия по разным дням.':'Даже после паузы можно спокойно вернуться к занятиям. Начни с одного небольшого шага.';
    const txt=[`📚 КРИСТИНА · ОТЧЁТ ЗА НЕДЕЛЮ`,`📅 ${period.label}`,'',`Учебные дни: ${m.studyDays}/3 (цель — минимум 3)`,`Зачтённые занятия: ${m.passes}; учебных дней с зачётом: ${m.passedDays}`,`Точность тестовых ответов: ${m.accuracy===null?'пока нет результатов':m.accuracy+'% ('+m.correct+'/'+m.total+')'}`,m.diagnosticScores.length?`Стартовая диагностика: ${m.diagnosticScores.at(-1)}% (отдельно от прогресса)`:null,'',`Пройденные темы: ${m.learned.length?m.learned.slice(0,8).join('; '):'пока нет зачтённых тем'}`,`Слова, отмеченные изученными: ${m.vocabMarked}`,'',`Где были ошибки:\n${errorLines(m)}`,'',`План: ${ideas(m)}`,'',motivation].filter(x=>x!==null).join('\n');
    return {period,metrics:m,text:txt};
  }
  function monthlyReport(events, now=new Date()) {
    const period=monthlyPeriod(now),cur=summarize(events,period.start,period.end),prev=summarize(events,period.previous.start,period.previous.end);
    let trend='Пока недостаточно проверенных ответов в обоих месяцах для корректного сравнения.',delta=null,kind='no-data';
    if(cur.total>=10&&prev.total>=10){
      delta=cur.accuracy-prev.accuracy;
      if(delta>=3){kind='better';trend=`Результат вырос на ${delta} п. п. Продолжай в том же духе — регулярная практика даёт результат!`}
      else if(delta<=-3){kind='worse';trend=`Результат изменился на ${delta} п. п. Это не оценка твоих способностей: сложные темы бывают у всех. Начни с повторения ошибок, и уверенности станет больше.`}
      else{kind='stable';trend='Точность ответов остаётся примерно на одном уровне. Это хорошая база, чтобы постепенно наращивать уверенность.'}
    }
    const acc=m=>m.accuracy===null?'нет проверенных ответов':`${m.accuracy}% (${m.correct}/${m.total})`;
    const txt=[`🌟 КРИСТИНА · ИТОГИ МЕСЯЦА`,`📅 ${period.label}`,'',`Сравнение с месяцем «${period.previous.label}»:`,`• Точность: ${acc(prev)} → ${acc(cur)}`,`• Дни учёбы: ${prev.studyDays} → ${cur.studyDays}`,`• Зачтённые занятия: ${prev.passes} → ${cur.passes}`,`• Новые темы в занятиях и мини-тестах: ${prev.learned.length} → ${cur.learned.length}`,`• Новые слова, отмеченные изученными: ${prev.vocabMarked} → ${cur.vocabMarked}`,'',`Изучено за последний месяц: ${cur.learned.length?cur.learned.slice(0,10).join('; '):'пока нет новых зачтённых тем'}`,'',`Какие темы стоит повторить:\n${errorLines(cur)}`,'',trend,'',`План на новый месяц: ${ideas(cur)}`].filter(x=>x!==null).join('\n');
    return {period,metrics:cur,previous:prev,delta,trendKind:kind,text:txt};
  }
  root.OGE_REPORTS_CORE=Object.freeze({weeklyPeriod,monthlyPeriod,summarize,weeklyReport,monthlyReport,localDateKey});
})(globalThis);


const REPORTS=globalThis.OGE_REPORTS_CORE;
const json=(x,status=200)=>new Response(JSON.stringify(x),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'}});
const env=(name)=>{const value=Deno.env.get(name);if(!value)throw new Error('Не задан секрет '+name);return value};
const ufaParts=(now)=>{const d=new Date(now.getTime()+5*60*60*1000);return {day:d.getUTCDate(),weekday:d.getUTCDay()}};

async function sendTelegram(text){
  const chatId=env('OGE_REPORT_CHAT_ID').trim();
  const threadId=env('OGE_REPORT_THREAD_ID').trim();
  if(!/^-?\d+$/.test(chatId) || !/^\d+$/.test(threadId))throw new Error('OGE_REPORT_CHAT_ID или OGE_REPORT_THREAD_ID заданы неверно');
  const reply=await fetch('https://api.telegram.org/bot'+env('OGE_TELEGRAM_BOT_TOKEN')+'/sendMessage',{
    method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({chat_id:chatId,message_thread_id:Number(threadId),text,disable_web_page_preview:true})
  });
  const content=await reply.json().catch(()=>({}));
  if(!reply.ok||!content.ok)throw new Error('Telegram: '+String(content.description||reply.status));
  return content.result?.message_id||null;
}

async function resolveStudent(sb){
  const forced=Deno.env.get('OGE_REPORT_STUDENT_USER_ID')?.trim();
  if(forced){
    if(!/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i.test(forced))throw new Error('OGE_REPORT_STUDENT_USER_ID должен быть UUID');
    const {data,error}=await sb.from('oge_student_state').select('user_id,snapshot').eq('user_id',forced).maybeSingle();
    if(error)throw error;
    if(!data||data.snapshot?.studentId!=='kristina-oge-2027')throw new Error('У выбранного аккаунта нет подтверждённого прогресса Кристины');
    return data;
  }
  const {data,error}=await sb.from('oge_student_state').select('user_id,snapshot').contains('snapshot',{studentId:'kristina-oge-2027'}).limit(3);
  if(error)throw error;
  if(!data?.length)throw new Error('Кристина ещё не синхронизировала прогресс в Supabase');
  if(data.length!==1)throw new Error('Найдено несколько аккаунтов Кристины: задайте OGE_REPORT_STUDENT_USER_ID');
  return data[0];
}

async function loadEvents(sb,userId,snapshot,earliest,end){
  const all=new Map();
  // Резервный источник — облачный снимок прогресса. Он может содержать импортированные
  // события ещё до того, как сайт успел разнести их в отдельную таблицу.
  for(const e of Array.isArray(snapshot?.events)?snapshot.events:[]){
    if(e?.id&&typeof e.date==='string'&&e.date>=earliest&&e.date<end)all.set(e.id,e);
  }
  for(let skip=0;skip<10000;skip+=1000){
    const {data,error}=await sb.from('oge_report_events').select('id,payload').eq('user_id',userId)
      .gte('date',earliest).lt('date',end).order('date',{ascending:true}).range(skip,skip+999);
    if(error)throw error;
    for(const row of data||[])if(row.payload?.id)all.set(row.payload.id,row.payload);
    if((data||[]).length<1000)break;
    if(skip===9000)throw new Error('Более 10000 событий: нужна расширенная пагинация');
  }
  return [...all.values()].sort((a,b)=>String(a.date).localeCompare(String(b.date)));
}

Deno.serve(async(req)=>{
  if(req.method!=='POST')return json({error:'method_not_allowed'},405);
  const configuredSecret=Deno.env.get('OGE_REPORT_CRON_SECRET');
  if(!configuredSecret||req.headers.get('X-Report-Secret')!==configuredSecret)return json({error:'unauthorized'},401);
  try{
    const input=await req.json().catch(()=>({}));
    // Пробное сообщение: не содержит успеваемости ученицы.
    if(input.test_telegram===true){
      const messageId=await sendTelegram('Проверка подключения: отчёты Кристины к ОГЭ-2027. Это единственное тестовое сообщение.');
      return json({test_sent:true,telegram_message_id:messageId});
    }
    if(!['weekly','monthly'].includes(input.period))return json({error:'period_must_be_weekly_or_monthly'},400);
    const now=new Date(),zone=ufaParts(now),kind=input.period;
    const preview=input.dry_run===true;
    const period=kind==='weekly'?REPORTS.weeklyPeriod(now):REPORTS.monthlyPeriod(now);
    // Нельзя случайно прислать итог за не тот период при ручном запуске.
    if(!preview){
      if(kind==='weekly'&&zone.weekday!==1)return json({error:'weekly_only_on_mondays_ufa'},409);
      if(kind==='monthly'&&zone.day!==1)return json({error:'monthly_only_on_first_day_ufa'},409);
      if(now<new Date('2026-10-12T00:00:00+05:00')||now>=new Date('2027-05-04T00:00:00+05:00'))return json({skipped:'outside_preparation_period'});
      if(kind==='weekly' && period.start < new Date('2026-10-12T00:00:00+05:00').toISOString())return json({skipped:'first_full_week_not_finished'});
    }
    const sb=createClient(env('SUPABASE_URL'),env('SUPABASE_SERVICE_ROLE_KEY'),{
      auth:{autoRefreshToken:false,persistSession:false}
    });
    const student=await resolveStudent(sb);
    const earliest=kind==='weekly'?period.start:period.previous.start;
    const events=await loadEvents(sb,student.user_id,student.snapshot,earliest,period.end);
    const report=kind==='weekly'?REPORTS.weeklyReport(events,now):REPORTS.monthlyReport(events,now);
    if(preview)return json({dry_run:true,period:report.period,preview:report.text,events_count:events.length});

    // Блокировка повтора. При ошибке доставки резервируем запись без sent_at:
    // повтор разрешается вручную только после проверки чата, чтобы не создать дубли.
    const claim={user_id:student.user_id,report_kind:kind,period_key:report.period.key};
    const {error:claimError}=await sb.from('oge_report_deliveries').insert(claim);
    if(claimError){
      if(claimError.code==='23505')return json({skipped:'already_claimed',period:report.period.key});
      throw claimError;
    }
    try{
      const messageId=await sendTelegram(report.text);
      const {error:updateError}=await sb.from('oge_report_deliveries')
        .update({sent_at:new Date().toISOString(),telegram_message_id:messageId,last_error:null})
        .eq('user_id',student.user_id).eq('report_kind',kind).eq('period_key',report.period.key);
      if(updateError)throw updateError;
      return json({sent:true,period:report.period.key,telegram_message_id:messageId});
    }catch(sendError){
      await sb.from('oge_report_deliveries').update({last_error:String(sendError?.message||sendError).slice(0,500)})
        .eq('user_id',student.user_id).eq('report_kind',kind).eq('period_key',report.period.key);
      throw sendError;
    }
  }catch(e){return json({error:String(e?.message||e)},500)}
});
