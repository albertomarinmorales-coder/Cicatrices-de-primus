const Database = require('better-sqlite3');
const path = require('path');
const fs   = require('fs');

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

const db = new Database(path.join(dataDir, 'galeria.db'));

// Esquema
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id       TEXT PRIMARY KEY,   -- Discord user ID o 'admin-secret'
    username TEXT NOT NULL,
    avatar   TEXT,
    is_admin INTEGER NOT NULL DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS photos (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    uploader_id  TEXT NOT NULL REFERENCES users(id),
    cloudinary_id TEXT NOT NULL,
    url          TEXT NOT NULL,
    category     TEXT NOT NULL DEFAULT 'general',
    title        TEXT,
    created_at   TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

// Asegurar que el usuario admin-secret siempre existe
db.prepare(`
  INSERT OR IGNORE INTO users (id, username, avatar, is_admin)
  VALUES ('admin-secret', 'Admin', NULL, 1)
`).run();

module.exports = db;
