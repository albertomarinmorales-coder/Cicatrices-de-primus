import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const NORM_ITEMS = [
  { path: '/norm-general', icon: 'fa-solid fa-scroll', label: 'General', className: 'norm-item norm-2x2' },
  { path: '/norm-concepto', icon: 'fa-solid fa-masks-theater', label: 'Concepto de Rol', className: 'norm-item norm-tall' },
  { path: '/norm-ic', icon: 'fa-solid fa-list-check', label: 'Normativa IC', className: 'norm-item' },
  { path: '/norm-construccion', icon: 'fa-solid fa-hammer', label: 'Construcción', className: 'norm-item' },
  { path: '/norm-combate', icon: 'fa-solid fa-khanda', label: 'Sistema de Combate', className: 'norm-item' },
  { path: '/norm-heridas', icon: 'fa-solid fa-heart-pulse', label: 'Heridas', className: 'norm-item' },
  { path: '/norm-esclavitud', icon: 'fa-solid fa-link-slash', label: 'Sistemas de Esclavitud', className: 'norm-item' },
  { path: '/norm-robo', icon: 'fa-solid fa-user-secret', label: 'Sistemas de Robo', className: 'norm-item' },
  { path: '/norm-housing', icon: 'fa-solid fa-house', label: 'Sistemas de Housing', className: 'norm-item norm-half' },
  { path: '/norm-mazmorra', icon: 'fa-solid fa-dungeon', label: 'Sistemas de Mazmorra', className: 'norm-item norm-half' },
]

export default function Normativa() {
  const navigate = useNavigate()
  return (
    <div className="page active">
      <div className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: "url('/images/c41305_8ef9b64ba0524648ad1b1827a0d79e6c~mv2.png')" }} />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <h1>Normativa</h1>
          <p>Reglas del servidor</p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Normativas</h2>
        <div className="section-underline"><i className="fa-solid fa-gavel" /></div>

        <div className="normativa-intro">
          <p>En caso de incumplir alguna de estas normas, se le aplicará las sanciones debidas según lo hecho.</p>
          <blockquote className="quote">
            "El desconocimiento de la normativa no exime de su cumplimiento. Siempre debes
            ser consciente de lo que hacéis, recordad que estáis en un servidor de rol y
            todo lo que hagas tendrá una consecuencia, por lo que debéis usar el sentido
            común."
          </blockquote>
        </div>

        <div className="norm-grid">
          {NORM_ITEMS.map((item) => (
            <div key={item.path} className={item.className} onClick={() => navigate(item.path)} style={{ cursor: 'pointer' }}>
              {item.customIcon
                ? <span className="norm-icon" style={{ fontStyle: 'normal' }}>{item.customIcon}</span>
                : <i className={`${item.icon} norm-icon`} />}
              <h3>{item.label}</h3>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
