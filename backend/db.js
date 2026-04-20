const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Inicializar tablas al arrancar
pool.query(`
  CREATE TABLE IF NOT EXISTS users (
    id       TEXT PRIMARY KEY,
    username TEXT NOT NULL,
    avatar   TEXT,
    is_admin INTEGER NOT NULL DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS photos (
    id            SERIAL PRIMARY KEY,
    uploader_id   TEXT NOT NULL REFERENCES users(id),
    cloudinary_id TEXT NOT NULL,
    url           TEXT NOT NULL,
    category      TEXT NOT NULL DEFAULT 'general',
    title         TEXT,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
  );

  INSERT INTO users (id, username, avatar, is_admin)
  VALUES ('admin-secret', 'Admin', NULL, 1)
  ON CONFLICT (id) DO NOTHING;
`).catch(err => console.error('DB init error:', err));

module.exports = pool;
