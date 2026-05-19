/**
 * Construye la URL del avatar de Discord priorizando el avatar específico
 * del guild (server de Primus) sobre el avatar global.
 *
 * Prioridad:
 *   1. guild_avatar (avatar específico del server de Primus)
 *   2. avatar (avatar global de Discord)
 *   3. Default avatar de Discord (basado en user ID)
 *
 * @param {string} userId       – Discord user ID (snowflake)
 * @param {string|null} avatar  – Hash del avatar global
 * @param {string|null} guildAvatar – Hash del avatar del guild
 * @param {number} [size=128]   – Tamaño solicitado
 * @returns {string|null}
 */
function resolveAvatarUrl(userId, avatar, guildAvatar, size = 128) {
  const guildId = process.env.DISCORD_GUILD_ID;

  // 1. Avatar del guild (prioridad máxima)
  if (guildAvatar && guildId) {
    const ext = guildAvatar.startsWith('a_') ? 'gif' : 'png';
    return `https://cdn.discordapp.com/guilds/${guildId}/users/${userId}/avatars/${guildAvatar}.${ext}?size=${size}`;
  }

  // 2. Avatar global
  if (avatar) {
    const ext = avatar.startsWith('a_') ? 'gif' : 'png';
    return `https://cdn.discordapp.com/avatars/${userId}/${avatar}.${ext}?size=${size}`;
  }

  // 3. Avatar por defecto de Discord
  try {
    return `https://cdn.discordapp.com/embed/avatars/${Number(BigInt(userId) % 5n)}.png`;
  } catch {
    return null;
  }
}

module.exports = { resolveAvatarUrl };
