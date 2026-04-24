import Footer from '../components/Footer'
import { useCardGlow } from '../hooks/useScrollReveal'
import { EQUIPO_DISCORD_INVITE, EQUIPO_NARRADORES, EQUIPO_OWNERS } from '../data/equipo'
import { resolveDiscordAvatarUrl } from '../lib/discordAvatar'

function initials(name) {
  if (!name || !name.trim()) return '?'
  const p = name.trim().split(/\s+/)
  if (p.length === 1) return p[0].slice(0, 2).toUpperCase()
  return (p[0][0] + p[p.length - 1][0]).toUpperCase()
}

function TeamAvatar({ member, size }) {
  const url = resolveDiscordAvatarUrl(member, size === 'owner' ? 128 : 96)
  const cls = size === 'owner' ? 'equipo-card__avatar-wrap--owner' : 'equipo-card__avatar-wrap--narrador'
  if (url) {
    return (
      <div className={`equipo-card__avatar-wrap ${cls}`}>
        <img
          src={url}
          alt=""
          className="equipo-card__avatar-img"
          loading="lazy"
          decoding="async"
          width={size === 'owner' ? 80 : 64}
          height={size === 'owner' ? 80 : 64}
        />
      </div>
    )
  }
  return (
    <div className={`equipo-card__avatar-wrap ${cls}`} aria-hidden="true">
      <span className="equipo-card__avatar-fallback">{initials(member.name)}</span>
    </div>
  )
}

export default function Equipo() {
  useCardGlow('equipo')

  return (
    <div className="page active" id="page-equipo">
      <div className="page-header">
        <div
          className="page-header-bg"
          style={{ backgroundImage: "url('/images/c41305_8ef9b64ba0524648ad1b1827a0d79e6c~mv2.png')" }}
        />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <h1>El Concilio</h1>
          <p>Servidor de rol y narrativa · Equipo oficial</p>
        </div>
      </div>

      <div className="equipo-page">
        <section className="equipo-section" aria-labelledby="equipo-owners-title">
          <h2 id="equipo-owners-title" className="section-title">
            Owners
          </h2>
          <div className="section-underline" aria-hidden="true">
            <i className="fa-solid fa-crown" />
          </div>
          <div className="equipo-grid equipo-grid--owners">
            {EQUIPO_OWNERS.map((m) => (
              <article key={m.id} className="equipo-card equipo-card--owner">
                <TeamAvatar member={m} size="owner" />
                <span className="equipo-card__badge">Owner</span>
                <h3 className="equipo-card__name">{m.name}</h3>
                <p className="equipo-card__role">{m.role}</p>
                <p className="equipo-card__desc">{m.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="equipo-section" aria-labelledby="equipo-nar-title">
          <h2 id="equipo-nar-title" className="section-title">
            Narradores
          </h2>
          <div className="section-underline" aria-hidden="true">
            <i className="fa-solid fa-book-open" />
          </div>
          <div className="equipo-grid equipo-grid--narradores">
            {EQUIPO_NARRADORES.map((m) => (
              <article key={m.id} className="equipo-card">
                <TeamAvatar member={m} size="narrador" />
                <h3 className="equipo-card__name">{m.name}</h3>
                <p className="equipo-card__role">{m.role}</p>
                <p className="equipo-card__desc">{m.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="equipo-footer-cta">
          <p className="equipo-footer-cta__label">Únete a la comunidad</p>
          <a
            className="equipo-discord-btn"
            href={EQUIPO_DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-discord equipo-discord-btn__icon" aria-hidden />
            Discord
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}
