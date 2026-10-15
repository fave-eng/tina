/** ОГЭ 2027 · v23 · доступ к дневнику с компьютера и телефона.
 * Только навигация. Не работает с данными ученицы, Supabase или localStorage.
 * Учитывает перерисовки #app в существующем SPA.
 */
(() => {
  'use strict';
  const DIARY_PATH = '#/дневник';
  const DIARY_NAME = 'Мой дневник';
  const icon = '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9"/><path d="m12 12 7-7 2 2-7 7-4 1 2-3Z"/></svg>';
  const homeText = 'Каждый день пиши минимум два предложения на английском и следи за прогрессом';

  function isDiary() {
    try { return decodeURIComponent(location.hash.split('?')[0]) === DIARY_PATH; }
    catch (_) { return false; }
  }
  function isHome() {
    const app = document.getElementById('app');
    if (app?.dataset.route) return app.dataset.route === 'главная';
    return !location.hash || /^#\/?главная(?:\?|$)/.test(location.hash);
  }
  function ensure() {
    const host = document.getElementById('app');
    if (!host || !host.querySelector('.shell')) return;

    // Первый пункт компьютерного меню, а не скрытая под прокруткой ссылка.
    const sidebar = host.querySelector('.sidebar');
    const mainNav = sidebar?.querySelector('.nav-stack');
    if (mainNav) {
      let diaryLink = sidebar.querySelector('a[href="#/дневник"]');
      if (!diaryLink) {
        diaryLink = document.createElement('a');
        diaryLink.className = 'nav-item';
        diaryLink.href = DIARY_PATH;
        diaryLink.innerHTML = `${icon}<span>${DIARY_NAME}</span>`;
      }
      if (mainNav.firstElementChild !== diaryLink) mainNav.prepend(diaryLink);
      diaryLink.classList.toggle('active', isDiary());
      if (isDiary()) diaryLink.setAttribute('aria-current', 'page');
      else diaryLink.removeAttribute('aria-current');
    }

    // Постоянная кнопка рядом с настройками в шапке компьютера.
    const topActions = host.querySelector('.topbar .top-actions');
    if (topActions) {
      let action = topActions.querySelector('#oge-diary-desktop-cta');
      if (!action) {
        action = document.createElement('a');
        action.id = 'oge-diary-desktop-cta';
        action.className = 'oge-diary-desktop-cta';
        action.href = DIARY_PATH;
        action.innerHTML = `${icon}<span>Мой дневник</span>`;
        action.title = 'Открыть ежедневный дневник';
        topActions.prepend(action);
      }
      if (isDiary()) action.setAttribute('aria-current', 'page');
      else action.removeAttribute('aria-current');
    }

    // Карточка дневника на главной доступна и на широких экранах.
    const content = host.querySelector('.content');
    if (isHome() && content && !content.querySelector('#oge-diary-home-link')) {
      const card = document.createElement('a');
      card.id = 'oge-diary-home-link';
      card.className = 'oge-diary-home-link';
      card.href = DIARY_PATH;
      card.innerHTML = `<span class="oge-diary-home-icon">${icon}</span><span class="oge-diary-home-copy"><strong>${DIARY_NAME}</strong><small>${homeText}</small></span><span class="oge-diary-home-arrow" aria-hidden="true">→</span>`;
      const hero = content.querySelector('.hero');
      if (hero) hero.insertAdjacentElement('afterend', card);
      else content.prepend(card);
    }
  }

  let queued = false;
  function schedule() {
    if (queued) return;
    queued = true;
    queueMicrotask(() => { queued = false; ensure(); });
  }
  function init() {
    const host = document.getElementById('app');
    if (!host) return;
    new MutationObserver(schedule).observe(host, {childList: true});
    schedule();
  }
  window.addEventListener('hashchange', schedule);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once: true});
  else init();
})();
