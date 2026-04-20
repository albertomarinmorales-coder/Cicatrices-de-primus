// Prevent browser from restoring scroll position on refresh
history.scrollRestoration = 'manual';

const pages = ['inicio', 'lore', 'razas', 'oficios', 'facciones', 'gremios', 'gremio-aventuras', 'normativa', 'historia', 'deidades', 'norm-general', 'norm-concepto', 'norm-ic', 'norm-construccion', 'norm-heridas', 'norm-combate', 'norm-esclavitud', 'norm-robo', 'norm-mazmorra', 'norm-housing', 'clases', 'raza-gen-elfos', 'raza-gen-enanos', 'raza-gen-humanos', 'raza-gen-malvakari', 'raza-gen-mestizos', 'raza-gen-nhek-thal', 'raza-gen-ossalyth', 'raza-gen-rosaveld', 'raza-gen-shazari', 'raza-gen-thae-tir', 'oficio-gen-alquimista', 'oficio-gen-artifices-del-velo-y-del-brillo', 'oficio-gen-cazador', 'oficio-gen-forjador', 'oficio-gen-galeno', 'oficio-gen-granjero', 'oficio-gen-guardia', 'oficio-gen-minero', 'oficio-gen-seeker', 'oficio-gen-tabernero', 'clase-ciudadano', 'clase-vhark-hul', 'clase-argent-praetor', 'clase-dualhar', 'clase-luminari-vox', 'clase-noc-thar', 'clase-stormheilm', 'clase-velum-caedis', 'clase-velum-cantoris', 'clase-zereth-mor', 'clase-magharyn', 'clase-desconocido', 'galeria'];

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

// ── GALERÍA ──────────────────────────────────────────────────────
let _galMediaActual = 'fotos';
let _galCatActual   = 'all';
let _galeriaUser    = null;

const BACKEND = 'https://cicatrices-de-primus.onrender.com';

// ── Auth ──────────────────────────────────────────────────────────
async function galeriaCheckAuth() {
  try {
    const res = await fetch(`${BACKEND}/auth/me`, { credentials: 'include' });
    const data = await res.json();
    _galeriaUser = data.user;
  } catch { _galeriaUser = null; }
  _galeriaUpdateAuthUI();
}

function _galeriaUpdateAuthUI() {
  const userInfo   = document.getElementById('galeriaUserInfo');
  const authBtns   = document.getElementById('galeriaAuthBtns');
  const btnUpload  = document.getElementById('galeriaBtnUpload');
  const avatarEl   = document.getElementById('galeriaUserAvatar');
  const nameEl     = document.getElementById('galeriaUserName');

  if (_galeriaUser) {
    userInfo.style.display  = 'flex';
    authBtns.style.display  = 'none';
    btnUpload.style.display = 'inline-flex';
    nameEl.textContent = _galeriaUser.username;
    if (_galeriaUser.avatar) {
      avatarEl.src = `https://cdn.discordapp.com/avatars/${_galeriaUser.id}/${_galeriaUser.avatar}.png?size=64`;
      avatarEl.style.display = 'inline-block';
    } else {
      avatarEl.style.display = 'none';
    }
  } else {
    userInfo.style.display  = 'none';
    authBtns.style.display  = 'flex';
    btnUpload.style.display = 'none';
  }
}

async function galeriaLogout() {
  await fetch(`${BACKEND}/auth/logout`, { method: 'POST', credentials: 'include' });
  _galeriaUser = null;
  _galeriaUpdateAuthUI();
}

// Login secreto admin (triple-click en "Galería" del título activa el modal)
function galeriaOpenAdminLogin() {
  document.getElementById('adminPasswordInput').value = '';
  document.getElementById('adminLoginError').style.display = 'none';
  document.getElementById('modalAdminLogin').style.display = 'flex';
}

async function galeriaAdminLogin(e) {
  e.preventDefault();
  const btn = document.getElementById('adminLoginBtn');
  const errEl = document.getElementById('adminLoginError');
  const password = document.getElementById('adminPasswordInput').value;

  btn.disabled = true;
  btn.textContent = 'Verificando…';
  errEl.style.display = 'none';

  try {
    const res = await fetch(`${BACKEND}/auth/admin-login`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Error');
    _galeriaUser = data.user;
    _galeriaUpdateAuthUI();
    galeriaCloseModal('modalAdminLogin');
  } catch (err) {
    errEl.textContent = err.message;
    errEl.style.display = 'block';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Entrar';
  }
}

// ── Upload ────────────────────────────────────────────────────────
function galeriaOpenUpload() {
  document.getElementById('uploadFileInput').value = '';
  document.getElementById('uploadPreview').style.display = 'none';
  document.getElementById('uploadFileName').textContent = 'Haz clic o arrastra una imagen aquí';
  document.getElementById('uploadTitle').value = '';
  document.getElementById('uploadError').style.display = 'none';
  document.getElementById('modalUpload').style.display = 'flex';
}

function galeriaPreviewFile(input) {
  const file = input.files[0];
  if (!file) return;
  document.getElementById('uploadFileName').textContent = file.name;
  const reader = new FileReader();
  reader.onload = e => {
    const preview = document.getElementById('uploadPreview');
    preview.src = e.target.result;
    preview.style.display = 'block';
  };
  reader.readAsDataURL(file);
}

async function galeriaUploadPhoto(e) {
  e.preventDefault();
  const btn    = document.getElementById('uploadBtn');
  const errEl  = document.getElementById('uploadError');
  const file   = document.getElementById('uploadFileInput').files[0];

  if (!file) { errEl.textContent = 'Selecciona una imagen primero'; errEl.style.display = 'block'; return; }

  const formData = new FormData();
  formData.append('photo',    file);
  formData.append('title',    document.getElementById('uploadTitle').value);
  formData.append('category', document.getElementById('uploadCategory').value);

  btn.disabled = true;
  btn.textContent = 'Subiendo…';
  errEl.style.display = 'none';

  try {
    const res = await fetch(`${BACKEND}/api/photos`, {
      method: 'POST',
      credentials: 'include',
      body: formData
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Error al subir');
    galeriaCloseModal('modalUpload');
    galeriaLoadPhotos();
  } catch (err) {
    errEl.textContent = err.message;
    errEl.style.display = 'block';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Subir';
  }
}

// ── Load photos ───────────────────────────────────────────────────
async function galeriaLoadPhotos() {
  const grid  = document.getElementById('galeria-fotos');
  const empty = document.getElementById('galeriaEmptyFotos');

  try {
    const res    = await fetch(`${BACKEND}/api/photos`, { credentials: 'include' });
    const photos = await res.json();

    // Limpiar ítems previos (mantener el empty)
    grid.querySelectorAll('.galeria-item').forEach(el => el.remove());

    if (!photos.length) { empty.style.display = 'flex'; return; }
    empty.style.display = 'none';

    photos.forEach(photo => {
      const canDelete = _galeriaUser &&
        (_galeriaUser.is_admin || _galeriaUser.id === photo.uploader_id);

      const item = document.createElement('div');
      item.className = 'galeria-item';
      item.dataset.cat = photo.category;
      item.innerHTML = `
        <img src="${photo.url}" alt="${photo.title || ''}" loading="lazy">
        <div class="galeria-item-overlay">
          <span>${photo.title || ''}</span>
          <small class="galeria-item-author">
            ${photo.uploader ? photo.uploader.username : ''}
          </small>
        </div>
        ${canDelete ? `<button class="galeria-item-delete" onclick="galeriaDeletePhoto(${photo.id}, this)" title="Borrar foto"><i class="fa-solid fa-trash"></i></button>` : ''}
      `;
      grid.insertBefore(item, empty);
    });

    _galeriaFiltrar();
  } catch {
    empty.style.display = 'flex';
  }
}

async function galeriaDeletePhoto(id, btn) {
  if (!confirm('¿Seguro que quieres borrar esta foto?')) return;
  btn.disabled = true;
  try {
    const res = await fetch(`${BACKEND}/api/photos/${id}`, {
      method: 'DELETE', credentials: 'include'
    });
    if (res.ok) galeriaLoadPhotos();
  } catch { btn.disabled = false; }
}

// ── Modal helpers ─────────────────────────────────────────────────
function galeriaCloseModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Triple-click en el título de galería para abrir modal admin
(function() {
  let _clicks = 0, _timer;
  document.addEventListener('click', e => {
    if (e.target.closest('.galeria-title')) {
      _clicks++;
      clearTimeout(_timer);
      _timer = setTimeout(() => _clicks = 0, 600);
      if (_clicks >= 3) { _clicks = 0; galeriaOpenAdminLogin(); }
    }
  });
})();

function galeriaSetMedia(media) {
  _galMediaActual = media;

  document.querySelectorAll('.galeria-toggle-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.media === media);
  });

  document.getElementById('galeria-fotos').style.display  = media === 'fotos'  ? 'grid' : 'none';
  document.getElementById('galeria-videos').style.display = media === 'videos' ? 'grid' : 'none';

  _galeriaFiltrar();
}

function galeriaSetCat(cat) {
  _galCatActual = cat;

  document.querySelectorAll('.galeria-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });

  _galeriaFiltrar();
}

function _galeriaFiltrar() {
  const gridId = _galMediaActual === 'fotos' ? 'galeria-fotos' : 'galeria-videos';
  const itemClass = _galMediaActual === 'fotos' ? '.galeria-item' : '.galeria-video-item';

  document.querySelectorAll('#' + gridId + ' ' + itemClass).forEach(item => {
    const match = _galCatActual === 'all' || item.dataset.cat === _galCatActual;
    item.classList.toggle('hidden', !match);
  });
}

// Inicializar galería cuando se navega a ella
document.addEventListener('DOMContentLoaded', () => {
  const observer = new MutationObserver(() => {
    const page = document.getElementById('page-galeria');
    if (page && page.classList.contains('active')) {
      galeriaCheckAuth();
      galeriaLoadPhotos();
    }
  });
  observer.observe(document.body, { subtree: false, childList: false, attributeFilter: ['class'], attributes: true });
  // Si ya está activa al cargar
  const page = document.getElementById('page-galeria');
  if (page && page.classList.contains('active')) {
    galeriaCheckAuth();
    galeriaLoadPhotos();
  }
});

// ── GALERÍA CARRUSEL ─────────────────────────────────────────────
(function () {
  let _carIdx = 0;
  let _carTimer = null;
  let _locked = false;
  const INTERVAL = 4500;

  function init() {
    const wrap = document.getElementById('galeriaCarousel');
    if (!wrap) return;

    // Eliminar clones previos
    wrap.querySelectorAll('.galeria-slide-clone').forEach(c => c.remove());
    wrap.style.transition = 'none';
    wrap.style.transform = 'translateX(0)';

    const origSlides = Array.from(wrap.querySelectorAll('.galeria-slide'));
    const total = origSlides.length;
    const dotsWrap = document.getElementById('galeriaCarouselDots');

    // Añadir clon del último al principio y del primero al final
    const cloneFirst = origSlides[0].cloneNode(true);
    const cloneLast  = origSlides[total - 1].cloneNode(true);
    cloneFirst.classList.add('galeria-slide-clone');
    cloneLast.classList.add('galeria-slide-clone');
    wrap.insertBefore(cloneLast, origSlides[0]);
    wrap.appendChild(cloneFirst);

    // Asegurar que el wrapper tenga el ancho correcto
    wrap.style.width = ((total + 2) * 100) + '%';
    wrap.querySelectorAll('.galeria-slide, .galeria-slide-clone').forEach(s => {
      s.style.width = (100 / (total + 2)) + '%';
    });

    _carIdx = 1;
    setPos(false);

    // Dots
    dotsWrap.innerHTML = '';
    origSlides.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.className = 'galeria-dot' + (i === 0 ? ' active' : '');
      dot.onclick = () => { if (!_locked) goTo(i + 1); };
      dotsWrap.appendChild(dot);
    });

    function setPos(animate) {
      wrap.style.transition = animate
        ? 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)'
        : 'none';
      wrap.style.transform = `translateX(-${(_carIdx / (total + 2)) * 100}%)`;
    }

    function updateDots() {
      const real = _carIdx - 1; // 0-based real index
      dotsWrap.querySelectorAll('.galeria-dot').forEach((d, i) =>
        d.classList.toggle('active', i === real));
    }

    function goTo(idx) {
      if (_locked) return;
      _locked = true;
      _carIdx = idx;
      setPos(true);
      updateDots();
      resetTimer();
    }

    wrap.addEventListener('transitionend', () => {
      if (_carIdx === 0) {
        _carIdx = total;
        setPos(false);
      } else if (_carIdx === total + 1) {
        _carIdx = 1;
        setPos(false);
      }
      updateDots();
      _locked = false;
    });

    function resetTimer() {
      clearInterval(_carTimer);
      _carTimer = setInterval(() => goTo(_carIdx + 1), INTERVAL);
    }

    window.galeriaCarouselMove = (dir) => goTo(_carIdx + dir);

    resetTimer();
  }

  document.addEventListener('DOMContentLoaded', () => {
    let _wasActive = false;
    const observer = new MutationObserver(() => {
      const page = document.getElementById('page-galeria');
      const isActive = page && page.classList.contains('active');
      if (isActive && !_wasActive) { _wasActive = true; init(); }
      if (!isActive) _wasActive = false;
    });
    observer.observe(document.body, { subtree: true, attributeFilter: ['class'] });
    const page = document.getElementById('page-galeria');
    if (page && page.classList.contains('active')) init();
  });
})();