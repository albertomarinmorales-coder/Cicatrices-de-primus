import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const OFICIOS = [
  { name: 'Alquimista', path: '/oficio-gen-alquimista', img: '/assets/images/professions/covers/alquimista.png' },
  { name: 'Artifices del Velo y del Brillo', path: '/oficio-gen-artifices-del-velo-y-del-brillo', img: '/assets/images/professions/covers/artifice.png', compact: true },
  { name: 'Cazador', path: '/oficio-gen-cazador', img: '/assets/images/professions/covers/cazador.png' },
  { name: 'Forjador', path: '/oficio-gen-forjador', img: '/assets/images/professions/covers/forjador.png' },
  { name: 'Galeno', path: '/oficio-gen-galeno', img: '/assets/images/professions/covers/galeno.png' },
  { name: 'Granjero', path: '/oficio-gen-granjero', img: '/assets/images/professions/covers/granjero.png' },
  { name: 'Guardia', path: '/oficio-gen-guardia', img: '/assets/images/professions/covers/guardias.png' },
  { name: 'Minero', path: '/oficio-gen-minero', img: '/assets/images/professions/covers/minero.png' },
  { name: 'Seeker', path: '/oficio-gen-seeker', img: '/assets/images/professions/covers/seeker.png' },
  { name: 'Tabernero', path: '/oficio-gen-tabernero', img: '/assets/images/professions/covers/tabernero.png' },
]

export default function Profesiones() {
  const navigate = useNavigate()
  return (
    <div className="page active" id="page-profesiones">
      <div className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: "url('/assets/images/legacy/c41305-5d27df9e861d464480ebd0dc7a3cf2bb-mv2.png')" }} />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <h1>Profesiones</h1>
          <p>Los profesiones del continente de Primus</p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Profesiones</h2>
        <div className="section-underline"><i className="fa-solid fa-hammer" /></div>
        <div className="razas-grid">
          {OFICIOS.map((o) => (
            <div
              key={o.name}
              className="raza-card clase-card"
              onClick={() => navigate(o.path)}
              style={{ cursor: 'pointer' }}
            >
              <div className="raza-card-img-wrap">
                <img className="raza-card-img" src={o.img} alt={o.name} loading="lazy" decoding="async" />
                <div className="raza-card-body">
                  <div className="clase-card-nameplate">
                    {o.compact ? (
                      <h3 className="card-name-marquee-wrap" title={o.name}>
                        <span className="card-name-marquee">{o.name}</span>
                      </h3>
                    ) : (
                      <h3>{o.name}</h3>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
