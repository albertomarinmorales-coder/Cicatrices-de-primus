const { Pool } = require('pg');

// Parse DATABASE_URL manually to avoid pg mishandling usernames with dots
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

const dbUrl = process.env.DATABASE_URL || '';

const pool = new Pool(parseDbUrl(dbUrl));

// Inicializar tablas al arrancar
pool.query(`
  CREATE TABLE IF NOT EXISTS users (
    id           TEXT PRIMARY KEY,
    username     TEXT NOT NULL,
    avatar       TEXT,
    guild_avatar TEXT,
    is_admin     INTEGER NOT NULL DEFAULT 0
  );

  ALTER TABLE users ADD COLUMN IF NOT EXISTS guild_avatar TEXT;

  CREATE TABLE IF NOT EXISTS photos (
    id            SERIAL PRIMARY KEY,
    uploader_id   TEXT NOT NULL REFERENCES users(id),
    cloudinary_id TEXT NOT NULL,
    url           TEXT NOT NULL,
    category      TEXT NOT NULL DEFAULT 'general',
    title         TEXT,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
  );

  CREATE TABLE IF NOT EXISTS guestbook_entries (
    id         SERIAL PRIMARY KEY,
    user_id    TEXT NOT NULL REFERENCES users(id),
    message    TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  );

  INSERT INTO users (id, username, avatar, is_admin)
  VALUES ('admin-secret', 'Admin', NULL, 1)
  ON CONFLICT (id) DO NOTHING;
`).catch(err => console.error('DB init error:', err));

module.exports = pool;
