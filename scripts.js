const pages = ['inicio', 'lore', 'razas', 'oficios', 'normativa', 'historia', 'deidades', 'raza-humano', 'raza-elfo', 'raza-enano', 'raza-shazari', 'raza-ossalyth', 'raza-malvakari', 'raza-thaetirs', 'raza-mestizo', 'oficio-galeno', 'oficio-herrero', 'oficio-minero', 'oficio-tabernero', 'oficio-joyero', 'oficio-artesano', 'oficio-granjero', 'oficio-guardia', 'oficio-alquimia', 'oficio-sastre', 'oficio-cazador', 'norm-general', 'norm-concepto', 'norm-ic', 'norm-construccion', 'norm-heridas', 'norm-combate', 'norm-esclavitud', 'norm-robo', 'norm-mazmorra', 'norm-housing'];

    function showPage(id) {
      // Hide all pages
      pages.forEach(p => {
        const el = document.getElementById('page-' + p);
        if (el) el.classList.remove('active');
        const nav = document.getElementById('nav-' + p);
        if (nav) nav.classList.remove('active-nav');
      });

      // Show target
      const target = document.getElementById('page-' + id);
      if (target) target.classList.add('active');
      const navTarget = document.getElementById('nav-' + id);
      if (navTarget) navTarget.classList.add('active-nav');

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' });

      // Close mobile menu
      document.getElementById('navLinks').classList.remove('open');
    }

    function showTier(btn, panelId) {
      const cont = btn.closest('.oficio-tiers');
      cont.querySelectorAll('.tier-tab').forEach(t => t.classList.remove('active'));
      cont.querySelectorAll('.tier-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(panelId).classList.add('active');
    }

    function toggleMenu() {
      document.getElementById('navLinks').classList.toggle('open');
    }

    // Keyboard nav accessibility
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        document.getElementById('navLinks').classList.remove('open');
      }
    });

    // Subtle parallax on hero bg
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        heroBg.style.transform = `scale(1.04) translateY(${scrollY * 0.25}px)`;
      }, { passive: true });
    }

    // ─── AUDIO PLAYER LOGIC ───────────────────────────────────────────
    const bgMusic = document.getElementById('bgMusic');
    const audioToggle = document.getElementById('audioToggle');
    const audioWaves = document.getElementById('audioWaves');
    const audioIcon = audioToggle.querySelector('i');
    const audioLabel = document.getElementById('audioLabel');
    let isPlaying = false;

    bgMusic.volume = 0.4;

    function playAudio() {
      bgMusic.play().then(() => {
        isPlaying = true;
        audioWaves.classList.add('playing');
        audioToggle.classList.add('playing');
        audioToggle.classList.remove('attention-pulse');
        audioIcon.className = 'fa-solid fa-pause';
        if(audioLabel) audioLabel.style.display = 'none';
        audioToggle.style.borderColor = 'var(--gold)';
      }).catch(e => {
        console.log('Autoplay blocked, waiting for interaction');
      });
    }

    // Intenta sonar al cargar (casi siempre bloqueado por navegador)
    window.addEventListener('load', playAudio);
    // También intenta al primer clic en cualquier sitio por si acaso
    document.addEventListener('click', () => {
      if(!isPlaying) playAudio();
    }, { once: true });

    audioToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // Evita el listener global de arriba
      if (isPlaying) {
        bgMusic.pause();
        audioWaves.classList.remove('playing');
        audioToggle.classList.remove('playing');
        audioIcon.className = 'fa-solid fa-music';
        audioToggle.style.borderColor = 'var(--accent)';
        if(audioLabel) audioLabel.style.display = 'inline';
      } else {
        playAudio();
      }
      isPlaying = !isPlaying;
    });