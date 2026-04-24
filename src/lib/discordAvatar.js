/**
 * URL pública de avatar de Discord (CDN).
 * Con solo el ID de usuario NO basta: hace falta el hash del avatar (API de Discord o copiar URL de imagen).
 *
 * @param {string} [avatarUrl] – URL completa (recomendado si te pasan el enlace de cdn.discordapp.com)
 * @param {string} [discordUserId] – Snowflake del usuario
 * @param {string} [discordAvatarHash] – Hash (p. ej. "a1b2c3d4e5f6..." o animado "a_xxxx")
 * @param {number} [size] – p. ej. 256
 * @returns {string|null}
 */
export function resolveDiscordAvatarUrl({ avatarUrl, discordUserId, discordAvatarHash }, size = 256) {
  if (avatarUrl && String(avatarUrl).trim()) return String(avatarUrl).trim()
  if (!discordUserId || !discordAvatarHash) return null
  const id = String(discordUserId).trim()
  const hash = String(discordAvatarHash).trim()
  const ext = hash.startsWith('a_') ? 'gif' : 'webp'
  return `https://cdn.discordapp.com/avatars/${id}/${hash}.${ext}?size=${size}`
}
