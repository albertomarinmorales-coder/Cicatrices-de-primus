import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { EQUIPO_DISCORD_INVITE } from '../data/equipo'
import { useScrollReveal, useCardGlow } from '../hooks/useScrollReveal'

const BENTO_ITEMS = [
  {
    className: 'bento-item bento-2x2',
    bg: '/images/938f05_21021a0aa69c4a3d8b01cf06a38b12c5~mv2.png',
    title: 'Bienvenido a Primus',
    desc: 'En un continente marcado por las guerras, las traiciones y la magia oscura, las cicatrices del pasado moldean el presente. Únete a nuestro servidor de roleplay ambientado en el universo de Conan Exiles y forja tu propio destino entre reinos, razas y secretos olvidados.',
    path: null,
  },
  {
    className: 'bento-item',
    bg: '/images/c41305_8ef9b64ba0524648ad1b1827a0d79e6c~mv2.png',
    title: 'Lore',
    desc: 'Cinco eras de historia descritas al detalle.',
    path: '/lore',
  },
  {
    className: 'bento-item',
    bg: '/images/c41305_884a15d7ed9a4713a13fc68832bcb4c1~mv2.png',
    title: 'Razas',
    desc: 'Descubre los 10 linajes de Primus.',
    path: '/razas',
  },
  {
    className: 'bento-item',
    bg: '/images/c41305_939b85edc3c342189fc4033a8c83a56b~mv2.png',
    title: 'Clases',
    desc: 'Especializa tu personaje y define tu rol.',
    path: '/clases',
  },
  {
    className: 'bento-item',
    bg: '/images/c41305_f3fe37fdd485426fb37873838f2563b0~mv2.png',
    title: 'Profesiones',
    desc: 'Maestría para prosperar en el continente.',
    path: '/profesiones',
  },
  {
    className: 'bento-item',
    bg: '/images/gremiosBento.png',
    title: 'Gremios',
    desc: 'Organizaciones y hermandades del servidor.',
    path: '/gremios',
  },
  {
    className: 'bento-item bento-wide',
    bg: '/images/c41305_cb53584d750f40359f3b7f885959b67c~mv2.png',
    title: 'Normativa General',
    desc: 'Comprende las leyes de Primus antes de forjar tu camino. Reglas de combate, construcción y convivencia.',
    path: '/normativa',
  },
]

export default function Inicio() {
  const navigate = useNavigate()
  useScrollReveal('inicio')
  useCardGlow('inicio')

  return (
    <div className="page active">
      <section className="hero">
        <img
          src="/images/hero.png"
          alt="Cicatrices de Primus Hero"
          className="hero-bg-img"
          fetchPriority="high"
          decoding="async"
          role="presentation"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">Roleplay Server</p>
          <h1 className="hero-title">Cicatrices<br />de Primus</h1>
          <div className="hero-divider" />
          <p className="hero-subtitle">Crea tu historia</p>
          <a
            className="equipo-discord-btn equipo-discord-btn--hero"
            href={EQUIPO_DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-discord equipo-discord-btn__icon" aria-hidden />
            Abrir Ticket
          </a>
        </div>
      </section>

      <div className="bento-container">
        {BENTO_ITEMS.map((item, i) => (
          <div
            key={i}
            className={item.className}
            onClick={item.path ? () => navigate(item.path) : undefined}
            style={item.path ? { cursor: 'pointer' } : undefined}
          >
            <div className="bento-bg" style={{ backgroundImage: `url('${item.bg}')` }} />
            <div className="bento-overlay" />
            <div className="bento-content">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  )
}
