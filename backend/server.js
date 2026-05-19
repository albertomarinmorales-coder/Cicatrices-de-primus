require('dotenv').config();
const express    = require('express');
const session    = require('express-session');
const pgSession  = require('connect-pg-simple')(session);
const { Pool }   = require('pg');
const passport   = require('passport');
const cors       = require('cors');

const authRouter      = require('./routes/auth');
const photosRouter    = require('./routes/photos');
const guestbookRouter = require('./routes/guestbook');

const app = express();
app.set('trust proxy', 1); // Render corre detrás de un proxy HTTPS

// ── CORS ─────────────────────────────────────────────────────────
const allowedOrigins = (process.env.FRONTEND_URL || '').split(',').map(s => s.trim()).filter(Boolean);
app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
    cb(new Error('Not allowed by CORS'));
  },
  credentials: true
}));

// ── Sesiones con PostgreSQL ──────────────────────────────────────
function parseDbUrl(url) {
  const u = new URL(url);
  return {
    user:     decodeURIComponent(u.username),
    password: decodeURIComponent(u.password),
    host:     u.hostname,
    port:     parseInt(u.port, 10) || 5432,
    database: u.pathname.replace(/^\//, ''),
    ssl:      { rejectUnauthorized: false }
  };
}
const sessionPool = new Pool(parseDbUrl(process.env.DATABASE_URL || ''));

const isProd = process.env.NODE_ENV === 'production'
app.use(session({
  store: new pgSession({ pool: sessionPool, createTableIfMissing: true }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: isProd ? 'none' : 'lax',
    secure: isProd,
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 días
  }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

// ── Rutas ─────────────────────────────────────────────────────────
app.use('/auth', authRouter);
app.use('/api/photos', photosRouter);
app.use('/api/guestbook', guestbookRouter);

// ── Health check ──────────────────────────────────────────────────
app.get('/api/health', (_req, res) => res.json({ ok: true }));

// La raíz no sirve el front (Vite/Netlify/Vercel). Evita "Cannot GET /" en el navegador.
app.get('/', (_req, res) => {
  const front = allowedOrigins[0];
  if (front) return res.redirect(302, front);
  res.type('text').send('Cicatrices de Primus — API. Estado: GET /api/health');
});

// ── Arranque ──────────────────────────────────────────────────────
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend corriendo en http://localhost:${PORT}`));
