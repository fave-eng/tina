/** OGE 2027 v21: mobile and desktop navigation parity.
 * Additive UI only. No storage writes, cloud calls or progress mutations.
 * Works with the existing hash routes in app.js, including #/дневник.
 */
(() => {
  'use strict';
  const SECTIONS = [
    ['главная','Главная','house'],
    ['занятия','Мои занятия','calendar'],
    ['план','План подготовки','chart'],
    ['повторение','Повторение','rotate'],
    ['диагностика','Стартовый тест','target'],
    ['грамматика','Грамматика','book'],
    ['чтение','Чтение','bookOpen'],
    ['словарь','Словарь','list'],
    ['дневник','Мой дневник','edit'],
    ['письмо','Задание 35 · Письмо','edit'],
    ['тренажёр','Тренажёр ОГЭ','headphones'],
    ['отчёты','Отчёты','chart'],
    ['материалы','Материалы','download'],
    ['настройки','Настройки','settings']
  ];
  const ICONS = {
    house: '<path d="m3 10 9-7 9 7v10H3z"/><path d="M9 20v-7h6v7"/>',
    calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/>',
    chart:'<path d="M4 20V11m6 9V5m6 15v-9m5 9V3"/>',
    rotate:'<path d="M20 7v5h-5M4 17v-5h5"/><path d="M5 9a8 8 0 0 1 14-2l1 5M4 12l1 5a8 8 0 0 0 14-2"/>',
    target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    book:'<path d="M4 5h7a3 3 0 0 1 3 3v12a3 3 0 0 0-3-3H4zM20 5h-3a3 3 0 0 0-3 3v12a3 3 0 0 1 3-3h3z"/>',
    bookOpen:'<path d="M12 6c-3-2-6-2-10-1v15c4-1 7-1 10 1 3-2 6-2 10-1V5c-4-1-7-1-10 1zm0 0v15"/>',
    list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h1M3 12h1M3 18h1"/>',
    edit:'<path d="m4 17-.5 3.5L7 20l12-12-3-3L4 17zm10-10 3 3"/>',
    headphones:'<path d="M3 14v-3a9 9 0 0 1 18 0v3M3 14h4v6H3zm14 0h4v6h-4z"/>',
    download:'<path d="M12 3v12m-4-4 4 4 4-4M4 17v4h16v-4"/>',
    settings:'<circle cx="12" cy="12" r="3"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    more:'<path d="M4 6h16M4 12h16M4 18h16"/>'
  };
  const icon = key => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[key]||ICONS.list}</svg>`;
  const currentRoute = () => {
    try {return decodeURIComponent(location.hash.split('?')[0].replace(/^#\/?/, '')||'главная').toLowerCase();}
    catch (_) {return 'главная';}
  };
  const alias = r => ({'урок':'занятия','неделя':'план','ошибки':'повторение','тест':'диагностика',
    'правило':'грамматика','чтение-урок':'чтение','глаголы':'словарь','карточки':'словарь',
    'задания':'тренажёр','письмо':'тренажёр','говорение':'тренажёр'})[r]||r;
  const isActive = id => alias(currentRoute())===id;
  let lastFocus = null;
  function closeMenu(restoreFocus=false){
    const panel=document.getElementById('oge-mobile-full-menu'),mask=document.getElementById('oge-mobile-mask');
    if(!panel)return;
    panel.hidden=true; if(mask)mask.hidden=true;
    document.body.classList.remove('oge-mobile-menu-open');
    const button=document.querySelector('[data-oge-mobile-toggle]');
    button?.setAttribute('aria-expanded','false');
    if(restoreFocus && lastFocus?.isConnected)lastFocus.focus();
  }
  function openMenu(){
    const panel=document.getElementById('oge-mobile-full-menu'),mask=document.getElementById('oge-mobile-mask');
    if(!panel)return;
    lastFocus=document.activeElement;
    panel.hidden=false; if(mask)mask.hidden=false;
    document.body.classList.add('oge-mobile-menu-open');
    document.querySelector('[data-oge-mobile-toggle]')?.setAttribute('aria-expanded','true');
    (panel.querySelector('.oge-mobile-menu-close')||panel.querySelector('a'))?.focus();
  }
  function enhance(){
    const nav=document.querySelector('#app .mobile-nav');
    if(!nav || nav.dataset.ogeMobileParity==='21')return;
    nav.dataset.ogeMobileParity='21';
    const primary=['главная','занятия','дневник','повторение'];
    nav.innerHTML=primary.map(id=>SECTIONS.find(x=>x[0]===id)).map(([id,label,ic])=>
      `<a href="#/${id}" class="${isActive(id)?'active':''}" aria-label="${label}">${icon(ic)}<span>${id==='занятия'?'Занятия':id==='дневник'?'Дневник':id==='повторение'?'Повтор':'Главная'}</span></a>`
    ).join('')+`<button type="button" class="oge-mobile-more-button ${primary.some(isActive)?'':'active'}" data-oge-mobile-toggle aria-expanded="false" aria-controls="oge-mobile-full-menu" aria-label="Показать все разделы">${icon('more')}<span>Ещё</span></button>`;
    const parent=nav.parentElement;
    const backdrop=document.createElement('div');
    backdrop.id='oge-mobile-mask'; backdrop.className='oge-mobile-mask';backdrop.hidden=true;
    const panel=document.createElement('section');
    panel.id='oge-mobile-full-menu';panel.className='oge-mobile-full-menu';
    panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','true');panel.setAttribute('aria-label','Все разделы сайта');panel.hidden=true;
    panel.innerHTML=`<div class="oge-mobile-menu-header"><strong>Все разделы</strong><button type="button" class="oge-mobile-menu-close" data-oge-mobile-close aria-label="Закрыть меню">Закрыть ×</button></div><nav class="oge-mobile-all-links" aria-label="Все разделы подготовки">${SECTIONS.map(([id,label,ic])=>`<a href="#/${id}" class="${isActive(id)?'active':''}">${icon(ic)}<span>${label}</span></a>`).join('')}</nav>`;
    parent.insertBefore(backdrop,nav);
    parent.insertBefore(panel,nav);
    const content=document.querySelector('#app .content');
    if(alias(currentRoute())==='главная' && content && !content.querySelector('#oge-diary-home-link')){
      const card=document.createElement('a');
      card.id='oge-diary-home-link';card.className='oge-diary-home-link';card.href='#/дневник';
      card.innerHTML=`<span class="oge-diary-home-icon">${icon('edit')}</span><span class="oge-diary-home-copy"><strong>Мой дневник</strong><small>Каждый день — минимум 2 предложения на английском. Проверка и история записей.</small></span><span class="oge-diary-home-arrow" aria-hidden="true">→</span>`;
      const hero=content.querySelector('.hero');
      if(hero)hero.insertAdjacentElement('afterend',card);else content.prepend(card);
    }
  }
  let scheduled=false;
  const schedule=()=>{if(scheduled)return;scheduled=true;queueMicrotask(()=>{scheduled=false;enhance()});};
  document.addEventListener('click',event=>{
    if(event.target.closest('[data-oge-mobile-toggle]')){event.preventDefault();
      if(document.getElementById('oge-mobile-full-menu')?.hidden)openMenu();else closeMenu(true);return;}
    if(event.target.closest('[data-oge-mobile-close],#oge-mobile-mask')){event.preventDefault();closeMenu(true);return;}
    if(event.target.closest('#oge-mobile-full-menu a,.mobile-nav a'))closeMenu();
  });
  document.addEventListener('keydown',e=>{
    const panel=document.getElementById('oge-mobile-full-menu');if(!panel||panel.hidden)return;
    if(e.key==='Escape'){e.preventDefault();closeMenu(true);return;}
    if(e.key!=='Tab')return;
    const items=[...panel.querySelectorAll('a[href],button:not([disabled])')];
    if(!items.length)return;
    const first=items[0],last=items[items.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
  });
  window.addEventListener('hashchange',()=>{closeMenu();schedule()});
  window.addEventListener('resize',()=>{if(innerWidth>900)closeMenu()});
  function init(){const host=document.getElementById('app');if(!host)return;new MutationObserver(schedule).observe(host,{childList:true,subtree:false});schedule();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
