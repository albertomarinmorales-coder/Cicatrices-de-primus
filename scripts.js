// Prevent browser from restoring scroll position on refresh
history.scrollRestoration = 'manual';

const pages = ['inicio', 'lore', 'razas', 'oficios', 'gremios', 'gremio-aventuras', 'normativa', 'historia', 'deidades', 'norm-general', 'norm-concepto', 'norm-ic', 'norm-construccion', 'norm-heridas', 'norm-combate', 'norm-esclavitud', 'norm-robo', 'norm-mazmorra', 'norm-housing', 'clases', 'raza-gen-elfos', 'raza-gen-enanos', 'raza-gen-humanos', 'raza-gen-malvakari', 'raza-gen-mestizos', 'raza-gen-nhek-thal', 'raza-gen-ossalyth', 'raza-gen-rosaveld', 'raza-gen-shazari', 'raza-gen-thae-tir', 'oficio-gen-alquimista', 'oficio-gen-artifices-del-velo-y-del-brillo', 'oficio-gen-cazador', 'oficio-gen-forjador', 'oficio-gen-galeno', 'oficio-gen-granjero', 'oficio-gen-guardia', 'oficio-gen-minero', 'oficio-gen-seeker', 'oficio-gen-tabernero', 'clase-ciudadano', 'clase-vhark-hul', 'clase-argent-praetor', 'clase-dualhar', 'clase-luminari-vox', 'clase-noc-thar', 'clase-stormheilm', 'clase-velum-caedis', 'clase-velum-cantoris', 'clase-zereth-mor', 'clase-magharyn', 'clase-desconocido'];

function showPage(id) {
  pages.forEach(p => {
    const el = document.getElementById('page-' + p);
    if (el) el.classList.remove('active');
    const navEl = document.getElementById('nav-' + p);
    if (navEl) navEl.classList.remove('active-nav');
  });

  const target = document.getElementById('page-' + id);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
  }

  const navTarget = document.getElementById('nav-' + id);
  if (navTarget) navTarget.classList.add('active-nav');

  const navLinks = document.getElementById('navLinks');
  const navToggle = document.getElementById('navToggle');
  if (navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
  }
}

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const navToggle = document.getElementById('navToggle');
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('active');
}

function showTier(btn, tierId) {
  const container = btn.closest('.oficio-tiers');
  const tabs = container.querySelector('.tier-tabs');
  if (window.innerWidth <= 900 && btn.classList.contains('active')) {
    if (tabs) tabs.classList.toggle('open');
    if (window.event) window.event.stopPropagation();
    return;
  }
  if (window.event) window.event.stopPropagation();
  container.querySelectorAll('.tier-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  container.querySelectorAll('.tier-panel').forEach(p => p.classList.remove('active'));
  document.getElementById(tierId).classList.add('active');
  if (tabs) tabs.classList.remove('open');
}

function toggleTabs(container) {
  if (window.innerWidth <= 900) {
    container.classList.toggle('open');
  }
}

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });

const bgMusic = document.getElementById('bgMusic');
const audioToggle = document.getElementById('audioToggle');
const audioIcon = audioToggle ? audioToggle.querySelector('i') : null;
let isPlaying = false;

if (bgMusic) bgMusic.volume = 0.4;

function playAudio() {
  if (!bgMusic) return;
  bgMusic.play().then(() => {
    isPlaying = true;
    audioToggle.classList.add('playing');
    if (audioIcon) audioIcon.className = 'fa-solid fa-pause';
  }).catch(e => console.log('Autoplay blocked'));
}

function pauseAudio() {
  if (!bgMusic) return;
  bgMusic.pause();
  isPlaying = false;
  audioToggle.classList.remove('playing');
  if (audioIcon) audioIcon.className = 'fa-solid fa-music';
}

if (audioToggle) {
  audioToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isPlaying) pauseAudio();
    else playAudio();
  });
}

function initParticles() {
  const container = document.getElementById('particles-container');
  if (!container) return;
  const count = 100;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 1.5;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    const moveX = (Math.random() - 0.5) * 200 + 'px';
    const moveY = (Math.random() * -300 - 100) + 'px';
    p.style.setProperty('--moveX', moveX);
    p.style.setProperty('--moveY', moveY);
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * -25;
    p.style.animation = `floatParticle ${duration}s ${delay}s infinite linear`;
    container.appendChild(p);
  }
}

function initScrollReveal() {
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  }, observerOptions);
  document.querySelectorAll('.section, .bento-item, .raza-card, .lore-card, .home-section, .clase-feature-row, .norm-item, .norm-card').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}



function initCardGlow() {
  document.querySelectorAll('.raza-card, .bento-item, .lore-card, .oficio-card, .norm-item').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initScrollReveal();
  initCardGlow();
});