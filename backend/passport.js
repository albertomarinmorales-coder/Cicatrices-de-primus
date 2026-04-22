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
    scope: ['identify']
  },
  async (_accessToken, _refreshToken, profile, done) => {
    try {
      const adminIds = (process.env.ADMIN_DISCORD_IDS || process.env.ADMIN_DISCORD_ID || '')
        .split(',').map(s => s.trim()).filter(Boolean);
      const isAdmin = adminIds.includes(profile.id);
      await pool.query(`
        INSERT INTO users (id, username, avatar, is_admin)
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (id) DO UPDATE SET
          username = EXCLUDED.username,
          avatar   = EXCLUDED.avatar,
          is_admin = EXCLUDED.is_admin
      `, [profile.id, profile.global_name || profile.username, profile.avatar ?? null, isAdmin ? 1 : 0]);
      const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [profile.id]);
      return done(null, rows[0]);
    } catch (err) {
      return done(err);
    }
  }
));
