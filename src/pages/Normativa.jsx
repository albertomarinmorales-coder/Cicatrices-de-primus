import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const NORM_ITEMS = [
  {
    path: '/norm-heridas',
    icon: 'broken-bone',
    label: 'Heridas y Estados',
    desc: 'Tiers de daño, estados del personaje y porcentajes de vida.',
    className: 'norm-item norm-featured',
  },
  {
    path: '/norm-cordura',
    icon: 'brain-freeze',
    label: 'Sistema de Cordura',
    desc: 'Estabilidad mental frente a los horrores del mundo.',
    className: 'norm-item norm-featured',
  },
  {
    path: '/norm-infectados',
    icon: 'poison-cloud',
    label: 'Sistema de Infectados',
    desc: 'Corrupciones, fases de infección y consecuencias.',
    className: 'norm-item',
  },
  {
    path: '/norm-conquista',
    icon: 'castle-flag',
    label: 'Conquista Territorial',
    desc: 'Conquista, defensa y consolidación de puestos de avanzada.',
    className: 'norm-item',
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
        <div className="section-underline"><i className="ra ra-gavel" aria-hidden /></div>

        <div className="norm-grid-v2">
          {NORM_ITEMS.map((item) => (
            <div
              key={item.path}
              className={item.className}
              onClick={() => navigate(item.path)}
              style={{ cursor: 'pointer' }}
            >
              <div className="norm-item__glow" aria-hidden="true" />
              <div className="norm-item__content">
                <div className="norm-item__icon-wrap">
                  {item.customIcon
                    ? <span className="norm-item__icon" style={{ fontStyle: 'normal' }}>{item.customIcon}</span>
                    : <i className={`ra ra-${item.icon} norm-item__icon`} aria-hidden />}
                </div>
                <h3 className="norm-item__title">{item.label}</h3>
                <p className="norm-item__desc">{item.desc}</p>
                <span className="norm-item__cta">
                  Explorar <span className="norm-item__arrow">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
