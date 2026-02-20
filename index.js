// ─── INTERSECTION OBSERVER: Fade-in sections ───────────────
const fadeEls = document.querySelectorAll('.fade-in-up');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

fadeEls.forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.08}s`;
  observer.observe(el);
});

// ─── NAVBAR: Active section highlight ──────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.remove('text-base-content', 'font-medium');
          link.classList.add('text-base-content/60');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.remove('text-base-content/60');
            link.classList.add('text-base-content', 'font-medium');
          }
        });
      }
    });
  },
  { rootMargin: '-40% 0px -50% 0px' }
);

sections.forEach((s) => sectionObserver.observe(s));

// ─── NAVBAR: Sticky shadow on scroll ───────────────────────
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('shadow-lg');
  } else {
    navbar.classList.remove('shadow-lg');
  }
});

// ─── MOBILE MENU ───────────────────────────────────────────
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu    = document.getElementById('mobile-menu');
const mobileClose   = document.getElementById('mobile-close');
const mobileLinks   = document.querySelectorAll('.mobile-link');

function openMenu() {
  mobileMenu.classList.remove('hidden');
  mobileMenu.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove('flex');
  document.body.style.overflow = '';
}

mobileMenuBtn?.addEventListener('click', openMenu);
mobileClose?.addEventListener('click', closeMenu);
mobileLinks.forEach((link) => link.addEventListener('click', closeMenu));

// Close on outside click
mobileMenu?.addEventListener('click', (e) => {
  if (e.target === mobileMenu) closeMenu();
});

// ─── SMOOTH SCROLL (fallback for older Safari) ─────────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ─── SKILL BADGE: subtle ripple on click ───────────────────
document.querySelectorAll('.skill-badge').forEach((badge) => {
  badge.addEventListener('click', function () {
    this.style.transform = 'scale(0.94)';
    setTimeout(() => { this.style.transform = ''; }, 150);
  });
});
