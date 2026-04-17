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
    updateTheme(id);
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
  const activePanel = document.getElementById(tierId);
  if (activePanel) {
    activePanel.classList.add('active');
    // Trigger reveal animations for content inside the panel
    activePanel.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
  }

  // Close mobile menu after selection
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
  document.querySelectorAll('.section, .bento-item, .raza-card, .lore-card, .home-section, .clase-feature-row, .norm-item, .norm-card, .raza-stats-grid').forEach(el => {
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

const themeMap = {
  'inicio': { color: '#c9a84c', accent: '#b01010', palette: ['#c9a84c', '#e8c96a', '#fdfbf0'] },
  'lore': { color: '#c9a84c', accent: '#1c3a63', palette: ['#c9a84c', '#3a66a8', '#ffffff'] },
  'historia': { color: '#b87333', accent: '#4e3416', palette: ['#b87333', '#cd7f32', '#fdfbf0'] },
  'inicio': { color: '#c9a84c', accent: '#b01010', palette: ['#c9a84c', '#e8c96a', '#fdfbf0', '#b01010', '#a87f32'] },
  'lore': { color: '#c9a84c', accent: '#1c3a63', palette: ['#c9a84c', '#3a66a8', '#ffffff', '#1c3a63', '#162b4d'] },
  'historia': { color: '#b87333', accent: '#4e3416', palette: ['#b87333', '#cd7f32', '#4e3416', '#8b4513', '#fdfbf0'] },
  'deidades': { color: '#914eff', accent: '#250d30', palette: ['#914eff', '#c196ff', '#5c2da8', '#250d30', '#00ffff', '#ffffff'] },
  'razas': { color: '#2d5a27', accent: '#1a2e1a', palette: ['#2d5a27', '#4e6b45', '#1a2e1a', '#d4af37', '#8a722e', '#fdfbf0'] },
  'oficios': { color: '#4682b4', accent: '#1a2b3c', palette: ['#4682b4', '#5f9ea0', '#1a2b3c', '#c0c0c0', '#b8cddc', '#ffffff'] },
  'clases': { color: '#b01010', accent: '#440000', palette: ['#b01010', '#d4220f', '#660000', '#440000', '#ffffff'] },
  'normativa': { color: '#696969', accent: '#222222', palette: ['#696969', '#a9a9a9', '#333333', '#222222', '#ffffff'] },
  'gremios': { color: '#008080', accent: '#004040', palette: ['#008080', '#20b2aa', '#004040', '#e97451', '#ffffff'] },
  'gremio-aventuras': { color: '#e97451', accent: '#8b4513', palette: ['#e97451', '#f4a460', '#8b4513', '#d2691e', '#ffffff'] }
};

let activeTheme = 'inicio';

function updateTheme(pageId) {
  let themeId = pageId;

  // Refined Sub-pages logic
  if (pageId.startsWith('norm-')) themeId = 'normativa';
  if (pageId.startsWith('raza-gen-')) themeId = 'razas';
  if (pageId.startsWith('oficio-gen-')) themeId = 'oficios';
  if (pageId.startsWith('clase-')) themeId = 'clases';

  activeTheme = themeId;
  let theme = themeMap[themeId] || themeMap['inicio'];

  const root = document.documentElement;
  root.style.setProperty('--theme-color', theme.color);
  root.style.setProperty('--theme-accent', theme.accent);
  
  // Set Initial Palette Colors
  root.style.setProperty('--theme-c1', theme.palette[0]);
  root.style.setProperty('--theme-c2', theme.palette[1]);
  root.style.setProperty('--theme-c3', theme.palette[2]);
}

document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initScrollReveal();
  initCardGlow();
  initTooltips();
  startAuroraEffect();
});

function startAuroraEffect() {
  setInterval(() => {
    const theme = themeMap[activeTheme] || themeMap['inicio'];
    const p = theme.palette;
    const root = document.documentElement;
    
    // Pick two random colors from the current palette for variety
    const c2 = p[Math.floor(Math.random() * p.length)];
    const c3 = p[Math.floor(Math.random() * p.length)];
    
    root.style.setProperty('--theme-c2', c2);
    root.style.setProperty('--theme-c3', c3);
  }, 7000);
}

function initTooltips() {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip-box';
  document.body.appendChild(tooltip);

  document.querySelectorAll('.lore-term').forEach(term => {
    term.addEventListener('mouseenter', (e) => {
      tooltip.innerText = term.dataset.tooltip;
      tooltip.style.opacity = '1';
    });
    term.addEventListener('mousemove', (e) => {
      const x = e.clientX + 20;
      const y = e.clientY + 20;
      tooltip.style.left = x + 'px';
      tooltip.style.top = y + 'px';
    });
    term.addEventListener('mouseleave', () => {
      tooltip.style.opacity = '0';
    });
  });
}