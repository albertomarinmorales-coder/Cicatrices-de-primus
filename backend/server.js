require('dotenv').config();
const express    = require('express');
const session    = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);
const passport   = require('passport');
const cors       = require('cors');
const path       = require('path');

const authRouter   = require('./routes/auth');
const photosRouter = require('./routes/photos');

const app = express();

// ── CORS ─────────────────────────────────────────────────────────
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

// ── Sesiones con SQLite ──────────────────────────────────────────
app.use(session({
  store: new SQLiteStore({ db: 'sessions.db', dir: path.join(__dirname, 'data') }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 días
  }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

// ── Rutas ─────────────────────────────────────────────────────────
app.use('/auth', authRouter);
app.use('/api/photos', photosRouter);

// ── Health check ──────────────────────────────────────────────────
app.get('/api/health', (_req, res) => res.json({ ok: true }));

// ── Arranque ──────────────────────────────────────────────────────
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend corriendo en http://localhost:${PORT}`));
