import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const OFICIOS = [
  { name: 'Alquimista', path: '/oficio-gen-alquimista', img: '/images/PortadaProfesiones/Alquimista.png' },
  { name: 'Artifices del Velo y del Brillo', path: '/oficio-gen-artifices-del-velo-y-del-brillo', img: '/images/PortadaProfesiones/artifice.png', compact: true },
  { name: 'Cazador', path: '/oficio-gen-cazador', img: '/images/PortadaProfesiones/Cazador.png' },
  { name: 'Forjador', path: '/oficio-gen-forjador', img: '/images/PortadaProfesiones/Forjador.png' },
  { name: 'Galeno', path: '/oficio-gen-galeno', img: '/images/PortadaProfesiones/galeno.png' },
  { name: 'Granjero', path: '/oficio-gen-granjero', img: '/images/PortadaProfesiones/Granjero.png' },
  { name: 'Guardia', path: '/oficio-gen-guardia', img: '/images/PortadaProfesiones/guardias.png' },
  { name: 'Minero', path: '/oficio-gen-minero', img: '/images/PortadaProfesiones/minero.png' },
  { name: 'Seeker', path: '/oficio-gen-seeker', img: '/images/PortadaProfesiones/Seeker.png' },
  { name: 'Tabernero', path: '/oficio-gen-tabernero', img: '/images/PortadaProfesiones/Tabernero.png' },
]

export default function Profesiones() {
  const navigate = useNavigate()
  return (
    <div className="page active" id="page-profesiones">
      <div className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: "url('/images/c41305_5d27df9e861d464480ebd0dc7a3cf2bb~mv2.png')" }} />
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
            <div key={o.name} className="raza-card" onClick={() => navigate(o.path)} style={{ cursor: 'pointer' }}>
              <div className="raza-card-img-wrap">
                <img className="raza-card-img" src={o.img} alt={o.name} loading="lazy" decoding="async" />
              </div>
              <div className="raza-card-body">
                <h3 title={o.name}>{o.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
