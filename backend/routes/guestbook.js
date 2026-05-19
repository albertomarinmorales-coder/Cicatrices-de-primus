const router = require('express').Router();
const pool   = require('../db');
const { resolveAvatarUrl } = require('../utils/avatarUrl');

// ── GET /api/guestbook — Obtener todas las firmas ────────────────
router.get('/', async (_req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT g.id, g.message, g.created_at,
             u.id AS user_id, u.username, u.avatar, u.guild_avatar
      FROM guestbook_entries g
      JOIN users u ON u.id = g.user_id
      ORDER BY g.created_at DESC
    `);
    const result = rows.map(r => ({
      ...r,
      avatar_url: resolveAvatarUrl(r.user_id, r.avatar, r.guild_avatar),
    }));
    res.json(result);
  } catch (err) {
    console.error('[Guestbook] GET error:', err);
    res.status(500).json({ error: 'Error al obtener las firmas' });
  }
});

// ── POST /api/guestbook — Crear una nueva firma ──────────────────
// Requiere sesión de Discord (no admin-secret)
router.post('/', async (req, res) => {
  // Verificar autenticación
  const user = req.user || (req.session.adminSecret ? req.session.adminUser : null);
  if (!user) return res.status(401).json({ error: 'Debes iniciar sesión con Discord' });

  const { message } = req.body;
  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'El mensaje no puede estar vacío' });
  }

  const cleanMsg = message.trim().slice(0, 500); // Max 500 caracteres

  try {
    const { rows } = await pool.query(
      `INSERT INTO guestbook_entries (user_id, message)
       VALUES ($1, $2)
       RETURNING id, message, created_at`,
      [user.id, cleanMsg]
    );

    const entry = rows[0];
    res.status(201).json({
      ...entry,
      user_id:      user.id,
      username:     user.username,
      avatar:       user.avatar,
      guild_avatar: user.guild_avatar || null,
      avatar_url:   resolveAvatarUrl(user.id, user.avatar, user.guild_avatar || null),
    });
  } catch (err) {
    console.error('[Guestbook] POST error:', err);
    res.status(500).json({ error: 'Error al guardar la firma' });
  }
});

// ── DELETE /api/guestbook/:id — Borrar una firma (admin o autor) ─
router.delete('/:id', async (req, res) => {
  const user = req.user || (req.session.adminSecret ? req.session.adminUser : null);
  if (!user) return res.status(401).json({ error: 'No autenticado' });

  const entryId = parseInt(req.params.id, 10);
  if (isNaN(entryId)) return res.status(400).json({ error: 'ID inválido' });

  try {
    // Solo el autor o un admin pueden borrar
    const { rows } = await pool.query('SELECT user_id FROM guestbook_entries WHERE id = $1', [entryId]);
    if (rows.length === 0) return res.status(404).json({ error: 'Firma no encontrada' });

    const isOwner = rows[0].user_id === user.id;
    const isAdmin = !!user.is_admin;

    if (!isOwner && !isAdmin) {
      return res.status(403).json({ error: 'No tienes permisos para borrar esta firma' });
    }

    await pool.query('DELETE FROM guestbook_entries WHERE id = $1', [entryId]);
    res.json({ ok: true });
  } catch (err) {
    console.error('[Guestbook] DELETE error:', err);
    res.status(500).json({ error: 'Error al borrar la firma' });
  }
});

module.exports = router;
