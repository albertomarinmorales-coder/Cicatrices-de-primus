const router    = require('express').Router();
const multer    = require('multer');
const cloudinary = require('cloudinary').v2;
const db        = require('../db');

// ── Cloudinary config ────────────────────────────────────────────
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// ── Multer (memoria, sin guardar en disco) ───────────────────────
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB máximo
  fileFilter: (_req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('Solo se permiten imágenes'));
  }
});

// ── Middlewares ───────────────────────────────────────────────────
function requireLogin(req, res, next) {
  // Acepta login Discord normal o login secreto de admin
  if (!req.user && !req.session.adminSecret) {
    return res.status(401).json({ error: 'Inicia sesión con Discord primero' });
  }
  // Normaliza req.user para el resto del código
  if (!req.user && req.session.adminSecret) {
    req.user = req.session.adminUser;
  }
  next();
}

function requireOwnerOrAdmin(req, res, next) {
  const photo = db.prepare('SELECT * FROM photos WHERE id = ?').get(req.params.id);
  if (!photo) return res.status(404).json({ error: 'Foto no encontrada' });
  if (!req.user.is_admin && photo.uploader_id !== req.user.id) {
    return res.status(403).json({ error: 'No tienes permiso para borrar esta foto' });
  }
  req.photo = photo;
  next();
}

// ── GET /api/photos ── lista pública ─────────────────────────────
router.get('/', (req, res) => {
  const { cat } = req.query;
  const photos = cat && cat !== 'all'
    ? db.prepare('SELECT * FROM photos WHERE category = ? ORDER BY created_at DESC').all(cat)
    : db.prepare('SELECT * FROM photos ORDER BY created_at DESC').all();

  // Adjuntar info del uploader
  const result = photos.map(p => {
    const uploader = db.prepare('SELECT username, avatar FROM users WHERE id = ?').get(p.uploader_id);
    return { ...p, uploader };
  });
  res.json(result);
});

// ── POST /api/photos ── subir foto ───────────────────────────────
router.post('/', requireLogin, upload.single('photo'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No se recibió ninguna imagen' });

  const { category = 'general', title = '' } = req.body;
  const validCategories = ['general', 'razas', 'clases', 'oficios', 'mundo', 'eventos'];
  if (!validCategories.includes(category)) {
    return res.status(400).json({ error: 'Categoría no válida' });
  }

  try {
    // Subir a Cloudinary desde buffer
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: 'cicatrices-primus', resource_type: 'image' },
        (err, result) => err ? reject(err) : resolve(result)
      ).end(req.file.buffer);
    });

    const photo = db.prepare(`
      INSERT INTO photos (uploader_id, cloudinary_id, url, category, title)
      VALUES (?, ?, ?, ?, ?)
    `).run(req.user.id, result.public_id, result.secure_url, category, title.trim());

    res.status(201).json({ id: photo.lastInsertRowid, url: result.secure_url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al subir la imagen' });
  }
});

// ── DELETE /api/photos/:id ── borrar foto ────────────────────────
router.delete('/:id', requireLogin, requireOwnerOrAdmin, async (req, res) => {
  try {
    await cloudinary.uploader.destroy(req.photo.cloudinary_id);
    db.prepare('DELETE FROM photos WHERE id = ?').run(req.photo.id);
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al borrar la imagen' });
  }
});

module.exports = router;
