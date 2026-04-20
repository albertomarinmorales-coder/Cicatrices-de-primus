const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const db = require('./db');

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(id);
  done(null, user || false);
});

passport.use(new DiscordStrategy(
  {
    clientID:     process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL:  process.env.DISCORD_CALLBACK_URL || 'https://cicatrices-de-primus.onrender.com/auth/discord/callback',
    scope: ['identify']
  },
  (_accessToken, _refreshToken, profile, done) => {
    const isAdmin = profile.id === process.env.ADMIN_DISCORD_ID;

    // Upsert: crea o actualiza el usuario
    db.prepare(`
      INSERT INTO users (id, username, avatar, is_admin)
      VALUES (?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET
        username = excluded.username,
        avatar   = excluded.avatar,
        is_admin = excluded.is_admin
    `).run(profile.id, profile.username, profile.avatar ?? null, isAdmin ? 1 : 0);

    const user = db.prepare('SELECT * FROM users WHERE id = ?').get(profile.id);
    return done(null, user);
  }
));
