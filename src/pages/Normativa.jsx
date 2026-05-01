import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const NORM_ITEMS = [
  { path: '/norm-general', icon: 'scroll-unfurled', label: 'General', className: 'norm-item norm-2x2' },
  { path: '/norm-concepto', icon: 'arcane-mask', label: 'Concepto de Rol', className: 'norm-item norm-tall' },
  { path: '/norm-ic', icon: 'jigsaw-piece', label: 'Normativa IC', className: 'norm-item' },
  { path: '/norm-construccion', icon: 'hammer', label: 'Construcción', className: 'norm-item' },
  { path: '/norm-combate', icon: 'crossed-swords', label: 'Sistema de Combate', className: 'norm-item' },
  { path: '/norm-heridas', icon: 'broken-bone', label: 'Heridas', className: 'norm-item' },
  { path: '/norm-esclavitud', icon: 'chain', label: 'Sistemas de Esclavitud', className: 'norm-item' },
  { path: '/norm-robo', icon: 'cloak-and-dagger', label: 'Sistemas de Robo', className: 'norm-item' },
  { path: '/norm-housing', icon: 'castle-flag', label: 'Sistemas de Housing', className: 'norm-item norm-half' },
  { path: '/norm-mazmorra', icon: 'metal-gate', label: 'Sistemas de Mazmorra', className: 'norm-item norm-half' },
]

export default function Normativa() {
  const navigate = useNavigate()
  return (
    <div className="page active" id="page-normativa">
      <div className="page-header">
        <div className="page-header-bg" aria-hidden="true" />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <h1>Normativa</h1>
          <p>Reglas del servidor</p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Normativas</h2>
        <div className="section-underline"><i className="ra ra-gavel" aria-hidden /></div>

        <div className="normativa-intro">
          <span className="normativa-intro__eyebrow">Antes de comenzar</span>
          <p>En caso de incumplir alguna de estas normas, se le aplicará las sanciones debidas según lo hecho.</p>
          <span className="normativa-intro__ornament" aria-hidden="true">✦</span>
          <blockquote className="norm-quote normativa-intro__quote">
            "El desconocimiento de la normativa no exime de su cumplimiento. Siempre debes
            ser consciente de lo que hacéis, recordad que estáis en un servidor de rol y
            todo lo que hagas tendrá una consecuencia, por lo que debéis usar el sentido
            común."
          </blockquote>
        </div>

        <div className="normativa-tutorial-wrap">
          <button
            type="button"
            className="normativa-tutorial-card"
            onClick={() => navigate('/norm-tutorial')}
          >
            <i className="ra ra-queen-crown normativa-tutorial-card__icon" aria-hidden="true" />
            <div className="normativa-tutorial-card__text">
              <span className="normativa-tutorial-card__label">TUTORIAL</span>
              <span className="normativa-tutorial-card__hint">Guía y primeros pasos (en preparación)</span>
            </div>
          </button>
        </div>

        <div className="norm-grid">
          {NORM_ITEMS.map((item) => (
            <div key={item.path} className={item.className} onClick={() => navigate(item.path)} style={{ cursor: 'pointer' }}>
              {item.customIcon
                ? <span className="norm-icon" style={{ fontStyle: 'normal' }}>{item.customIcon}</span>
                : <i className={`ra ra-${item.icon} norm-icon`} aria-hidden />}
              <h3>{item.label}</h3>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
