import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { normativaData } from '../data/normativa'

const NORM_ITEMS = [
  {
    path: '/norm-heridas',
    label: 'Heridas y Estados',
    desc: 'Tiers de daño, estados del personaje y porcentajes de vida.',
  },
  {
    path: '/norm-cordura',
    label: 'Sistema de Cordura',
    desc: 'Estabilidad mental frente a los horrores del mundo.',
  },
  {
    path: '/norm-infectados',
    label: 'Sistema de Infectados',
    desc: 'Corrupciones, fases de infección y consecuencias.',
  },
  {
    path: '/norm-conquista',
    label: 'Conquista Territorial',
    desc: 'Conquista, defensa y consolidación de puestos de avanzada.',
  },
  {
    path: '/norm-robos',
    label: 'Robo y Multas',
    desc: 'Reglas de hurto, habilidad de robo, multas y penas criminales.',
  },
  {
    path: '/norm-combate',
    label: 'Sistema de Combate',
    desc: 'Manual estratégico de combate, posicionamiento y cooperación.',
  },
]

export default function Normativa({ title = 'Sistemas', subtitle = 'Sistemas del servidor' }) {
  const navigate = useNavigate()
  return (
    <div className="page active" id="page-normativa">
      <div className="page-header">
        <div className="page-header-bg" aria-hidden="true" />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">{title}</h2>
        <div className="section-underline" aria-hidden="true" />

        <div className="norm-grid-v2">
          {NORM_ITEMS.map((item) => {
            const slug = item.path.replace(/^\/norm-/, '')
            const meta = normativaData[slug] || {}
            const glow = meta.introGlow || 'rgb(201, 168, 76)'
            return (
              <div
                key={item.path}
                className="norm-item"
                onClick={() => navigate(item.path)}
                style={{ cursor: 'pointer', '--norm-intro-glow': glow }}
              >
                {meta.introImage && (
                  <div className="norm-item__intro" aria-hidden="true">
                    <div className="norm-item__intro-frame">
                      <img className="norm-item__intro-img" src={meta.introImage} alt="" decoding="async" loading="lazy" />
                    </div>
                  </div>
                )}
                <div className="norm-item__content">
                  <h3 className="norm-item__title">{item.label}</h3>
                  <p className="norm-item__desc">{item.desc}</p>
                  <span className="norm-item__cta">
                    Explorar <span className="norm-item__arrow">→</span>
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}
