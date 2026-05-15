import Footer from '../components/Footer'
import { STAFF_MEMBERS, EQUIPO_DISCORD_INVITE } from '../data/equipo'
import DiscordIcon from '../components/DiscordIcon'

export default function Equipo() {
  return (
    <div className="page active" id="page-staff">
      <div className="detail-hero">
        <div className="detail-hero-bg detail-hero-bg--staff" aria-hidden="true" />
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <div className="breadcrumb">
            Primus <span>/ El Equipo</span>
          </div>
          <h1>El equipo de Primus</h1>
          <span className="detail-tag">Guardianes de la Narrativa</span>
        </div>
      </div>

      <div className="detail-body staff-detail-body">
        <div className="staff-intro-card">
          <div className="staff-intro-inner">
            <blockquote className="staff-quote">
              "Bienvenidos, valientes, insensatos y futuras víctimas de sus propias decisiones."
            </blockquote>

            <div className="staff-desc">
              <p>Estamos aquí para construir una historia entre todos. Nosotros ponemos el mundo, las reglas, los sistemas, los peligros, las tragedias inevitables y, ocasionalmente, algún trauma narrativo bien colocado… pero sin ustedes, los jugadores, nada de esto realmente cobra vida. Primus, sus caminos, sus guerras, sus tabernas, sus ruinas y sus gloriosas malas decisiones existen porque ustedes los recorren.</p>
              
              <p>Nuestro trabajo como staff es echarles una mano en lo que necesiten: desde crear personajes, levantar casas, entender sistemas, resolver dudas, o incluso acompañarlos en esas inevitables crisis existenciales sobre quiénes son, a dónde van y por qué tomaron ESA decisión claramente cuestionable. También estaremos presentes para brindar apoyo moral, espiritual y probablemente sarcasmo terapéutico cuando llegue ese momento que todos temen… el infame, oscuro y siempre acechante CK.</p>
              
              <p>Intentaremos ser un staff eficiente, amable y razonablemente cuerdo. Los ayudaremos siempre que podamos, responderemos dudas, guiaremos el caos… y solo seremos levemente tiránicos cuando la ocasión realmente lo amerite. Después de todo, todo gran reino necesita orden… incluso si a veces ese orden viene acompañado de mirar fijamente sus tickets hasta que aparezcan correctamente rellenados.</p>
              
              <p>Así que exploren, construyan, conspiren, sobrevivan… y recuerden: estamos para ayudar.</p>
            </div>

            <div className="staff-intro-footer">
              <div className="staff-signature">
                <p className="staff-p staff-p--small">O para juzgarlos en silencio. Depende bastante del contexto.</p>
                <div className="staff-signature-line" />
                <span>El staff de Primus</span>
              </div>
            </div>
          </div>
        </div>

        <div className="norm-section-header">
          <div className="norm-section-header__line" aria-hidden="true" />
          <span className="norm-section-header__label">STAFF</span>
          <div className="norm-section-header__line" aria-hidden="true" />
        </div>

        <div className="staff-grid">
          {STAFF_MEMBERS.map((m) => (
            <div key={m.id} className="staff-card">
              <div className="staff-card__img-wrap">
                <img src={m.image} alt={m.name} className="staff-card__img" loading="lazy" />
                <div className="staff-card__overlay" />
              </div>
              <div className="staff-card__content">
                <h3 className="staff-card__name">{m.name}</h3>
                {m.handle && <span className="staff-card__handle">{m.handle}</span>}
                <div className="staff-card__divider" />
              </div>
            </div>
          ))}
        </div>

        <div className="equipo-footer-cta" style={{ marginTop: '5rem' }}>
          <p className="equipo-footer-cta__label">¿Alguna duda? Únete al Discord</p>
          <a
            className="equipo-discord-btn"
            href={EQUIPO_DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordIcon className="equipo-discord-btn__icon" />
            Discord Oficial
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}
