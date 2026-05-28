// Ano dinâmico no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Header: borda ao rolar
const header = document.getElementById('siteHeader');
const onScroll = () => {
  if (window.scrollY > 12) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const menuIcon = document.getElementById('menuIcon');

const ICON_OPEN = '<path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" />';
const ICON_CLOSE = '<path d="M6 6l12 12" /><path d="M18 6L6 18" />';

const setMenu = (open) => {
  navLinks.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuIcon.innerHTML = open ? ICON_CLOSE : ICON_OPEN;
};

menuToggle.addEventListener('click', () => {
  setMenu(!navLinks.classList.contains('open'));
});

document.querySelectorAll('[data-close-menu]').forEach((el) => {
  el.addEventListener('click', () => setMenu(false));
});

// Reveal on scroll
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
