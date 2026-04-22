import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
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
          fetchpriority="high"
          role="presentation"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">Roleplay Server</p>
          <h1 className="hero-title">Cicatrices<br />de Primus</h1>
          <div className="hero-divider" />
          <p className="hero-subtitle">Crea tu historia</p>
          <a
            className="btn-primary"
            href="https://discord.com/channels/1373768671347871786/1374086297198657667/1385485322191634574"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '10px', verticalAlign: 'middle' }}>
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.5868 0-.1637-.3847-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0773-.0102c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0773.0102c.1201.099.246.1971.3718.2914a.077.077 0 01-.0066.1277c-.5979.3428-1.2192.6447-1.8722.8923a.0762.0762 0 00-.0416.1057c.3528.699.7644 1.3638 1.226 1.9942a.0775.0775 0 00.0842.0276c1.9516-.6066 3.9401-1.5218 5.9929-3.0294a.077.077 0 00.0312-.0561c.5004-5.177-.8707-9.6719-3.5955-13.6603a.0668.0668 0 00-.0312-.0278zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
            </svg>
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
