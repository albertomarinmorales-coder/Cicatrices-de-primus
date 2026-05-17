const router    = require('express').Router();
const multer    = require('multer');
const cloudinary = require('cloudinary').v2;
const pool      = require('../db');

// ── Cloudinary config ────────────────────────────────────────────
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const IMAGE_MAX = 10  * 1024 * 1024  // 10 MB
const VIDEO_MAX = 100 * 1024 * 1024  // 100 MB

// ── Multer (memoria, sin guardar en disco) ───────────────────────
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: VIDEO_MAX },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) cb(null, true);
    else cb(new Error('Solo se permiten imágenes y vídeos'));
  }
});

// ── Middlewares ───────────────────────────────────────────────────
function requireLogin(req, res, next) {
  if (!req.user && !req.session.adminSecret) {
    return res.status(401).json({ error: 'Inicia sesión con Discord primero' });
  }
  if (!req.user && req.session.adminSecret) {
    req.user = req.session.adminUser;
  }
  next();
}

async function requireOwnerOrAdmin(req, res, next) {
  try {
    const { rows } = await pool.query('SELECT * FROM photos WHERE id = $1', [req.params.id]);
    if (!rows[0]) return res.status(404).json({ error: 'Foto no encontrada' });
    if (!req.user.is_admin && rows[0].uploader_id !== req.user.id) {
      return res.status(403).json({ error: 'No tienes permiso para borrar esta foto' });
    }
    req.photo = rows[0];
    next();
  } catch (err) {
    next(err);
  }
}

// ── GET /api/photos ── lista pública ─────────────────────────────
router.get('/', async (req, res) => {
  try {
    const { cat } = req.query;
    const { rows } = cat && cat !== 'all'
      ? await pool.query('SELECT p.*, u.username, u.avatar, u.guild_avatar FROM photos p LEFT JOIN users u ON p.uploader_id = u.id WHERE p.category = $1 ORDER BY p.created_at DESC', [cat])
      : await pool.query('SELECT p.*, u.username, u.avatar, u.guild_avatar FROM photos p LEFT JOIN users u ON p.uploader_id = u.id ORDER BY p.created_at DESC');

    const result = rows.map(r => ({
      ...r,
      uploader: { username: r.username, avatar: r.avatar, guild_avatar: r.guild_avatar }
    }));
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener fotos' });
  }
});

// ── POST /api/photos ── subir foto ───────────────────────────────
router.post('/', requireLogin, upload.single('photo'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No se recibió ningún archivo' });

  const isVideo = req.file.mimetype.startsWith('video/');
  const maxSize = isVideo ? VIDEO_MAX : IMAGE_MAX;
  if (req.file.size > maxSize) {
    return res.status(400).json({ error: isVideo
      ? 'El vídeo no puede superar los 100 MB'
      : 'La imagen no puede superar los 10 MB' });
  }

  const { category = 'general', title = '' } = req.body;
  if (!title.trim()) return res.status(400).json({ error: 'El título es obligatorio' });

  const validCategories = ['general', 'razas', 'clases', 'oficios', 'mundo', 'eventos'];
  if (!validCategories.includes(category)) {
    return res.status(400).json({ error: 'Categoría no válida' });
  }

  try {
    const cloudResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: 'cicatrices-primus', resource_type: 'auto' },
        (err, result) => err ? reject(err) : resolve(result)
      ).end(req.file.buffer);
    });

    const { rows } = await pool.query(
      'INSERT INTO photos (uploader_id, cloudinary_id, url, category, title) VALUES ($1, $2, $3, $4, $5) RETURNING id',
      [req.user.id, cloudResult.public_id, cloudResult.secure_url, category, title.trim()]
    );

    res.status(201).json({ id: rows[0].id, url: cloudResult.secure_url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al subir la imagen' });
  }
});

// ── DELETE /api/photos/:id ── borrar foto ────────────────────────
router.delete('/:id', requireLogin, requireOwnerOrAdmin, async (req, res) => {
  try {
    await cloudinary.uploader.destroy(req.photo.cloudinary_id);
    await pool.query('DELETE FROM photos WHERE id = $1', [req.photo.id]);
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al borrar la imagen' });
  }
});

module.exports = router;
