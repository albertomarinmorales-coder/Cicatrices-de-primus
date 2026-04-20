const router   = require('express').Router();
const passport = require('passport');
const crypto   = require('crypto');
require('../passport'); // registra la estrategia

// ── Login secreto para admins (sin Discord) ───────────────────────
// POST /auth/admin-login   body: { password: "..." }
// La URL no está enlazada en el frontend — solo quien la conozca puede usarla
router.post('/admin-login', (req, res) => {
  const { password } = req.body;
  if (!password) return res.status(400).json({ error: 'Contraseña requerida' });

  // Comparación segura contra timing attacks
  const expected = process.env.ADMIN_SECRET_PASSWORD || '';
  const match = crypto.timingSafeEqual(
    Buffer.from(password.padEnd(64).slice(0, 64)),
    Buffer.from(expected.padEnd(64).slice(0, 64))
  ) && password === expected;

  if (!match) {
    // Delay artificial para dificultar brute-force
    return setTimeout(() => res.status(401).json({ error: 'Contraseña incorrecta' }), 1200);
  }

  // Crear sesión de admin sin usuario de Discord
  req.session.adminSecret = true;
  req.session.adminUser = { id: 'admin-secret', username: 'Admin', avatar: null, is_admin: true };
  res.json({ ok: true, user: req.session.adminUser });
});

// Redirige a Discord para login
router.get('/discord', passport.authenticate('discord'));

// Callback tras login en Discord
const FRONTEND_ORIGIN = (process.env.FRONTEND_URL || '').split(',')[0].trim();

router.get('/discord/callback',
  passport.authenticate('discord', { failureRedirect: `${FRONTEND_ORIGIN}?login=error` }),
  (req, res) => {
    // Redirige al frontend con éxito
    res.redirect(`${FRONTEND_ORIGIN}?login=ok`);
  }
);

// Logout
router.post('/logout', (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    res.json({ ok: true });
  });
});

// Devuelve el usuario en sesión (o null)
router.get('/me', (req, res) => {
  // Admin por contraseña secreta
  if (req.session.adminSecret) {
    return res.json({ user: req.session.adminUser });
  }
  if (!req.user) return res.json({ user: null });
  const { id, username, avatar, is_admin } = req.user;
  res.json({ user: { id, username, avatar, is_admin: !!is_admin } });
});

module.exports = router;
