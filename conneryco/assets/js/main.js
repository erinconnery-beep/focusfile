// Header background on scroll
const header = document.getElementById('header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile menu
const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('mobileMenu');
toggle.addEventListener('click', () => menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

// Lazy-start hero video only when it can help (respects reduced-motion / save-data)
const video = document.querySelector('.hero-video');
if (video) {
  const saveData = navigator.connection && navigator.connection.saveData;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (saveData || reduce) {
    video.removeAttribute('autoplay');      // keep the poster image, skip the download
  } else {
    // load + play once the page is idle so it never blocks first paint
    const start = () => { video.load(); video.play().catch(() => {}); };
    ('requestIdleCallback' in window) ? requestIdleCallback(start) : setTimeout(start, 200);
  }
}
