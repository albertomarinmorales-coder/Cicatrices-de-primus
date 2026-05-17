const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const pool = require('./db');

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
  try {
    const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    done(null, rows[0] || false);
  } catch (err) {
    done(err);
  }
});

passport.use(new DiscordStrategy(
  {
    clientID:     process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL:  process.env.DISCORD_CALLBACK_URL || 'https://cicatrices-de-primus.onrender.com/auth/discord/callback',
    scope: ['identify', 'guilds', 'guilds.members.read']
  },
  async (accessToken, _refreshToken, profile, done) => {
    try {
      // 1. Obtener datos básicos del perfil como fallback
      let displayName = profile.global_name || profile.username;
      let guildAvatar = null;

      // 2. Intentar obtener el nombre del miembro en el servidor configurado (Guild)
      const guildId = process.env.DISCORD_GUILD_ID;
      if (guildId) {
        try {
          const response = await fetch(`https://discord.com/api/v10/users/@me/guilds/${guildId}/member`, {
            headers: { Authorization: `Bearer ${accessToken}` }
          });
          
          if (response.ok) {
            const member = await response.json();
            console.log(`[Discord Auth] Miembro encontrado en el guild ${guildId}:`, {
              nick: member.nick,
              user_display: member.user?.display_name,
              global_name: profile.global_name
            });
            
            /**
             * Prioridad:
             * 1. member.nick (nickname específico del guild)
             * 2. member.user.display_name o member.user.global_name
             * 3. profile.global_name (nombre global de Discord)
             * 4. profile.username (username único/legacy)
             */
            displayName = member.nick || member.user?.display_name || member.user?.global_name || profile.global_name || profile.username;
            guildAvatar = member.avatar || null;
          } else {
            console.warn(`[Discord Auth] No se pudo obtener info del miembro en el guild ${guildId}. Código: ${response.status}`);
            const errorData = await response.json().catch(() => ({}));
            console.warn(`[Discord Auth] Detalle error:`, errorData);
          }
        } catch (fetchErr) {
          console.error('[Discord Auth] Error al consultar el nickname del guild:', fetchErr);
        }
      }

      const adminIds = (process.env.ADMIN_DISCORD_IDS || process.env.ADMIN_DISCORD_ID || '')
        .split(',').map(s => s.trim()).filter(Boolean);
      const isAdmin = adminIds.includes(profile.id);

      await pool.query(`
        INSERT INTO users (id, username, avatar, guild_avatar, is_admin)
        VALUES ($1, $2, $3, $4, $5)
        ON CONFLICT (id) DO UPDATE SET
          username     = EXCLUDED.username,
          avatar       = EXCLUDED.avatar,
          guild_avatar = EXCLUDED.guild_avatar,
          is_admin     = EXCLUDED.is_admin
      `, [profile.id, displayName, profile.avatar ?? null, guildAvatar, isAdmin ? 1 : 0]);

      const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [profile.id]);
      return done(null, rows[0]);
    } catch (err) {
      console.error('[Discord Auth] Critical error:', err);
      return done(err);
    }
  }
));
