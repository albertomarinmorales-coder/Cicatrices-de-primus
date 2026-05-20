import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import DiscordIcon from '../components/DiscordIcon'
import { EQUIPO_DISCORD_INVITE } from '../data/equipo'
import { useScrollReveal } from '../hooks/useScrollReveal'

const BENTO_ITEMS = [
  {
    className: 'bento-item bento-2x2',
    bg: '/assets/images/legacy/home-intro.png',
    title: 'Bienvenido a Primus',
    desc: 'En un continente marcado por las guerras, las traiciones y la magia oscura, las cicatrices del pasado moldean el presente. Únete a nuestro servidor de roleplay ambientado en el universo de Conan Exiles y forja tu propio destino entre reinos, razas y secretos olvidados.',
    path: null,
  },
  {
    className: 'bento-item',
    bg: '/assets/images/lore/eras/ano5/1.png',
    title: 'Lore',
    desc: 'Seis eras de historia descritas al detalle.',
    path: '/lore',
  },
  {
    className: 'bento-item',
    bg: '/assets/images/carousel/razas-carrusel.png',
    title: 'Razas',
    desc: 'Descubre los 10 linajes de Primus.',
    path: '/razas',
  },
  {
    className: 'bento-item bento-item--bg-zoom',
    bg: '/assets/images/classes/luminari-vox/foto3.png',
    title: 'Clases',
    desc: 'Especializa tu personaje y define tu rol.',
    path: '/clases',
  },
  {
    className: 'bento-item bento-item--bg-zoom',
    bg: '/assets/images/professions/granjero/1.png',
    title: 'Profesiones',
    desc: 'Maestría para prosperar en el continente.',
    path: '/profesiones',
  },
  {
    className: 'bento-item',
    bg: '/assets/images/carousel/gremios-carrusel.png',
    bgPosition: 'center 5%',
    title: 'Gremios',
    desc: 'Organizaciones y hermandades del servidor.',
    path: '/gremios',
  },
  {
    className: 'bento-item bento-wide',
    bg: '/assets/images/legacy/rules-bento.png',
    title: 'Normativa General',
    desc: 'Comprende las leyes de Primus antes de forjar tu camino. Reglas de combate, construcción y convivencia.',
    path: '/normativa',
  },
]

export default function Inicio() {
  const navigate = useNavigate()
  useScrollReveal('inicio')

  function renderBentoItem(item, i) {
    const content = (
      <>
        <div
          className="bento-bg"
          style={{
            backgroundImage: `url('${item.bg}')`,
            backgroundPosition: item.bgPosition ?? 'center',
          }}
        />
        <div className="bento-overlay" />
        <div className="bento-content">
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
        </div>
      </>
    )

    if (!item.path) {
      return (
        <div key={i} className={item.className}>
          {content}
        </div>
      )
    }

    return (
      <a
        key={i}
        href={item.path}
        className={item.className}
        onClick={(e) => {
          e.preventDefault()
          navigate(item.path)
        }}
      >
        {content}
      </a>
    )
  }

  return (
    <div className="page active">
      <section className="hero">
        <img
          src="/assets/images/common/hero.png"
          alt=""
          className="hero-bg-img"
          fetchPriority="high"
          decoding="async"
          aria-hidden="true"
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
            <DiscordIcon className="equipo-discord-btn__icon" />
            Abrir Ticket
          </a>
        </div>
      </section>

      <div className="bento-container">
        {BENTO_ITEMS.map(renderBentoItem)}
      </div>

      <Footer />
    </div>
  )
}
