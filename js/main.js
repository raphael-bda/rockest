/**
 * ROCKEST — Main JS
 */

function setActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-inner a, .mobile-nav-overlay a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === current) a.classList.add('active');
  });
}

function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const overlay   = document.querySelector('.mobile-nav-overlay');
  const closeBtn  = document.querySelector('.mobile-nav-close');
  if (!hamburger || !overlay) return;

  hamburger.addEventListener('click', () => {
    overlay.classList.add('open');
    hamburger.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  });

  const close = () => {
    overlay.classList.remove('open');
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  closeBtn?.addEventListener('click', close);
  overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in');
  // Wait for layout.js to inject nav before setting active
  setTimeout(() => {
    setActiveNav();
    initMobileNav();
  }, 10);
});
