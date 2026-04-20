// Prevent browser from restoring scroll position on refresh
history.scrollRestoration = 'manual';

const pages = ['inicio', 'lore', 'razas', 'oficios', 'facciones', 'gremios', 'gremio-aventuras', 'normativa', 'historia', 'deidades', 'norm-general', 'norm-concepto', 'norm-ic', 'norm-construccion', 'norm-heridas', 'norm-combate', 'norm-esclavitud', 'norm-robo', 'norm-mazmorra', 'norm-housing', 'clases', 'raza-gen-elfos', 'raza-gen-enanos', 'raza-gen-humanos', 'raza-gen-malvakari', 'raza-gen-mestizos', 'raza-gen-nhek-thal', 'raza-gen-ossalyth', 'raza-gen-rosaveld', 'raza-gen-shazari', 'raza-gen-thae-tir', 'oficio-gen-alquimista', 'oficio-gen-artifices-del-velo-y-del-brillo', 'oficio-gen-cazador', 'oficio-gen-forjador', 'oficio-gen-galeno', 'oficio-gen-granjero', 'oficio-gen-guardia', 'oficio-gen-minero', 'oficio-gen-seeker', 'oficio-gen-tabernero', 'clase-ciudadano', 'clase-vhark-hul', 'clase-argent-praetor', 'clase-dualhar', 'clase-luminari-vox', 'clase-noc-thar', 'clase-stormheilm', 'clase-velum-caedis', 'clase-velum-cantoris', 'clase-zereth-mor', 'clase-magharyn', 'clase-desconocido'];

function showPage(id, updateHash = true) {
  const target = document.getElementById('page-' + id);
  if (!target) return;

  pages.forEach(p => {
    const el = document.getElementById('page-' + p);
    if (el) el.classList.remove('active');
    const navEl = document.getElementById('nav-' + p);
    if (navEl) navEl.classList.remove('active-nav');
  });

  target.classList.add('active');
  window.scrollTo(0, 0);
  updateTheme(id);

  const navTarget = document.getElementById('nav-' + id);
  if (navTarget) navTarget.classList.add('active-nav');

  // Actualizar la URL sin recargar
  if (updateHash) {
    window.location.hash = id;
  }

  const navLinks = document.getElementById('navLinks');
  const navToggle = document.getElementById('navToggle');
  if (navLinks && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
  }
}

// ─── SISTEMA DE RUTAS (HASH) ────────────────────────────────

function handleRouting() {
  const hash = window.location.hash.replace('#', '');
  if (hash && pages.includes(hash)) {
    showPage(hash, false);
  } else {
    showPage('inicio', false);
  }
}

window.addEventListener('hashchange', handleRouting);


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

function showLoreTab(btn, panelId) {
  // Desactivar todas las pestañas
  const container = btn.closest('#page-historia');
  container.querySelectorAll('.lore-tab').forEach(t => t.classList.remove('active'));
  
  // Activar la seleccionada
  btn.classList.add('active');
  
  // Ocultar todos los paneles
  container.querySelectorAll('.lore-panel').forEach(p => p.classList.remove('active'));
  
  // Mostrar el panel seleccionado
  const activePanel = document.getElementById(panelId);
  if (activePanel) {
    activePanel.classList.add('active');
    // Reiniciar animaciones reveal
    activePanel.querySelectorAll('.reveal').forEach(el => el.classList.remove('active'));
    setTimeout(() => {
      activePanel.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    }, 50);
  }
  
  // Scrollear al inicio del contenido
  window.scrollTo({
    top: container.offsetTop + 100,
    behavior: 'smooth'
  });
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
    audioToggle.classList.add('playing'); audioToggle.classList.add('pulse-active');
    if (audioIcon) audioIcon.className = 'fa-solid fa-pause';
  }).catch(e => console.log('Autoplay blocked'));
}

function pauseAudio() {
  if (!bgMusic) return;
  bgMusic.pause();
  isPlaying = false;
  audioToggle.classList.remove('playing'); audioToggle.classList.remove('pulse-active');
  if (audioIcon) audioIcon.className = 'fa-solid fa-music';
}

if (audioToggle) {
  audioToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isPlaying) pauseAudio();
    else playAudio();
  });
}

// ─── WELCOME MODAL LOGIC ──────────────────────────────────────
const welcomeModal = document.getElementById('welcomeModal');
const btnAccept = document.getElementById('welcomeBtnAccept');
const btnCancel = document.getElementById('welcomeBtnCancel');

if (welcomeModal && btnAccept && btnCancel) {
  const STORAGE_KEY = 'musicPromptData';
  const EXPIRY_DAYS = 7;

  function hasValidPromptDecision() {
    const dataStr = localStorage.getItem(STORAGE_KEY);
    if (!dataStr) return false;
    try {
      const data = JSON.parse(dataStr);
      if (new Date().getTime() > data.expiry) {
        localStorage.removeItem(STORAGE_KEY);
        return false;
      }
      return true;
    } catch {
      return false;
    }
  }

  function savePromptDecision() {
    const expiry = new Date().getTime() + (EXPIRY_DAYS * 24 * 60 * 60 * 1000);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ answered: true, expiry }));
  }

  // Only show if not answered within the last 7 days
  if (!hasValidPromptDecision()) {
    setTimeout(() => {
      welcomeModal.classList.add('show');
      document.body.classList.add('modal-active');
    }, 50);
  } else {
    welcomeModal.style.display = 'none';
  }

  btnAccept.addEventListener('click', () => {
    playAudio();
    welcomeModal.classList.remove('show');
    document.body.classList.remove('modal-active');
    setTimeout(() => welcomeModal.style.display = 'none', 500);
    savePromptDecision();
  });

  btnCancel.addEventListener('click', () => {
    welcomeModal.classList.remove('show');
    document.body.classList.remove('modal-active');
    setTimeout(() => welcomeModal.style.display = 'none', 500);
    savePromptDecision();
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
  document.querySelectorAll('.raza-card, .bento-item, .lore-card, .oficio-card, .norm-item, .norm-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  });
}

const themeMap = {
  'inicio': { color: '#c9a84c', accent: '#b01010', palette: ['#c9a84c', '#e8c96a', '#fdfbf0', '#b01010', '#a87f32'] },
  'lore': { color: '#c9a84c', accent: '#1c3a63', palette: ['#c9a84c', '#e8c96a', '#f5f0dc', '#1c3a63', '#162b4d'] },
  'historia': { color: '#b87333', accent: '#4e3416', palette: ['#b87333', '#cd7f32', '#4e3416', '#8b4513', '#f0e6c8'] },
  'deidades': { color: '#914eff', accent: '#250d30', palette: ['#914eff', '#c196ff', '#5c2da8', '#250d30', '#e8d5ff', '#ffffff'] },
  'razas': { color: '#2d5a27', accent: '#1a2e1a', palette: ['#2d5a27', '#4e6b45', '#1a2e1a', '#d4af37', '#8a722e', '#fdfbf0'] },
  'oficios': { color: '#4682b4', accent: '#1a2b3c', palette: ['#4682b4', '#5f9ea0', '#1a2b3c', '#8fa8bc', '#b8cddc', '#ffffff'] },
  'facciones': { color: '#008080', accent: '#004040', palette: ['#008080', '#20b2aa', '#004040', '#e97451', '#ffffff'] },
  'clases': { color: '#b01010', accent: '#440000', palette: ['#b01010', '#d4220f', '#660000', '#440000', '#f5c5c5'] },
  'normativa': { color: '#696969', accent: '#222222', palette: ['#696969', '#a9a9a9', '#333333', '#222222', '#ffffff'] },
  'gremios': { color: '#008080', accent: '#004040', palette: ['#008080', '#20b2aa', '#004040', '#e97451', '#ffffff'] },
  'gremio-aventuras': { color: '#e97451', accent: '#8b4513', palette: ['#e97451', '#f4a460', '#8b4513', '#d2691e', '#4a6b8a', '#ffffff'] }
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
  injectFooterFaccionesLink();
  startAuroraEffect();
  handleRouting(); // Cargar la página correcta según la URL
});

function injectFooterFaccionesLink() {
  document.querySelectorAll('.footer-nav').forEach((footerNav) => {
    if (footerNav.querySelector('[data-footer-facciones="true"]')) return;

    const clasesLink = Array.from(footerNav.querySelectorAll('span')).find(
      (span) => span.textContent.trim() === 'Clases'
    );

    const faccionesLink = document.createElement('span');
    faccionesLink.textContent = 'Facciones';
    faccionesLink.dataset.footerFacciones = 'true';
    faccionesLink.setAttribute('onclick', "showPage('facciones')");

    if (clasesLink) {
      clasesLink.insertAdjacentElement('afterend', faccionesLink);
    } else {
      footerNav.appendChild(faccionesLink);
    }
  });
}

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
  }, 3000); // Cambio de color más rápido (3 segundos)
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
