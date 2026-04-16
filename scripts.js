const pages = ['inicio', 'lore', 'razas', 'oficios', 'gremios', 'gremio-aventuras', 'normativa', 'historia', 'deidades', 'norm-general', 'norm-concepto', 'norm-ic', 'norm-construccion', 'norm-heridas', 'norm-combate', 'norm-esclavitud', 'norm-robo', 'norm-mazmorra', 'norm-housing', 'clases', 'raza-gen-elfos', 'raza-gen-enanos', 'raza-gen-humanos', 'raza-gen-malvakari', 'raza-gen-mestizos', 'raza-gen-nhek-thal', 'raza-gen-ossalyth', 'raza-gen-rosaveld', 'raza-gen-shazari', 'raza-gen-thae-tir', 'oficio-gen-alquimista', 'oficio-gen-artifices-del-velo-y-del-brillo', 'oficio-gen-cazador', 'oficio-gen-forjador', 'oficio-gen-galeno', 'oficio-gen-granjero', 'oficio-gen-guardia', 'oficio-gen-minero', 'oficio-gen-seeker', 'oficio-gen-tabernero', 'clase-ciudadano', 'clase-vhark-hul', 'clase-argent-praetor', 'clase-dualhar', 'clase-luminari-vox', 'clase-noc-thar', 'clase-stormheilm', 'clase-velum-caedis', 'clase-velum-cantoris', 'clase-zereth-mor', 'clase-magharyn', 'clase-desconocido'];

    function showPage(id) {
      // Hide all pages
      pages.forEach(p => {
        const el = document.getElementById('page-' + p);
        if (el) el.classList.remove('active');
        const navEl = document.getElementById('nav-' + p);
        if (navEl) navEl.classList.remove('active-nav');
      });

      // Show the requested page
      const target = document.getElementById('page-' + id);
      if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
      }

      // Highlight the nav link
      const navTarget = document.getElementById('nav-' + id);
      if (navTarget) navTarget.classList.add('active-nav');

      // Close mobile menu if open
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
      // Tab active
      container.querySelectorAll('.tier-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      // Panel active
      container.querySelectorAll('.tier-panel').forEach(p => p.classList.remove('active'));
      document.getElementById(tierId).classList.add('active');
    }

    // Scroll effect for nav
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });

    // ─── AUDIO PLAYER LOGIC ───────────────────────────────────────────
    const bgMusic = document.getElementById('bgMusic');
    const audioToggle = document.getElementById('audioToggle');
    const audioIcon = audioToggle.querySelector('i');
    const audioLabel = document.getElementById('audioLabel');
    let isPlaying = false;

    bgMusic.volume = 0.4;

    function playAudio() {
      bgMusic.play().then(() => {
        isPlaying = true;
        audioToggle.classList.add('playing');
        audioIcon.className = 'fa-solid fa-pause'; 
        audioToggle.style.borderColor = 'var(--gold)';
      }).catch(e => {
          isPlaying = false;
          console.log('Autoplay blocked');
      });
    }

    function pauseAudio() {
        bgMusic.pause();
        isPlaying = false;
        audioToggle.classList.remove('playing');
        audioIcon.className = 'fa-solid fa-music'; // Corchea
        audioToggle.style.borderColor = 'var(--accent)';
    }

    // No autoplay anymore. Only manual via button.

    audioToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isPlaying) {
        pauseAudio();
      } else {
        playAudio();
      }
    });