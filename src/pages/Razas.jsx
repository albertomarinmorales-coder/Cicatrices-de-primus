import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const ROSTER_IMGS = [
  { src: '/sources/Razas/Elfos/images/cover.png', alt: 'Elfos' },
  { src: '/sources/Razas/Enanos/images/cover.png', alt: 'Enanos' },
  { src: '/sources/Razas/Humanos/images/cover.png', alt: 'Humanos' },
  { src: '/sources/Razas/Malvakari/images/cover.png', alt: 'Malvakari' },
  { src: '/sources/Razas/Mestizos/images/cover.png', alt: 'Mestizos' },
  { src: '/sources/Razas/Nhekthal/images/cover.png', alt: 'Nhek-Thal' },
  { src: '/sources/Razas/Ossalyth/images/cover.png', alt: 'Ossalyth' },
  { src: '/sources/Razas/Rosaveld/images/cover.png', alt: 'Rosaveld' },
  { src: '/sources/Razas/Shazari/images/cover.png', alt: 'Shazari' },
  { src: '/sources/Razas/Thaetir/images/cover.png', alt: 'Thae-Tir' },
]

const RAZAS = [
  { name: 'Elfos', path: '/raza-gen-elfos', img: '/sources/Razas/Elfos/images/cover.png' },
  { name: 'Enanos', path: '/raza-gen-enanos', img: '/sources/Razas/Enanos/images/cover.png' },
  { name: 'Humanos', path: '/raza-gen-humanos', img: '/sources/Razas/Humanos/images/cover.png' },
  { name: 'Malvakari', path: '/raza-gen-malvakari', img: '/sources/Razas/Malvakari/images/cover.png' },
  { name: 'Mestizos', path: '/raza-gen-mestizos', img: '/sources/Razas/Mestizos/images/cover.png' },
  { name: "Nhek'thal", path: '/raza-gen-nhek-thal', img: '/sources/Razas/Nhekthal/images/cover.png' },
  { name: 'Ossalyth', path: '/raza-gen-ossalyth', img: '/sources/Razas/Ossalyth/images/cover.png' },
  { name: 'Rosaveld', path: '/raza-gen-rosaveld', img: '/sources/Razas/Rosaveld/images/cover.png' },
  { name: 'Shazari', path: '/raza-gen-shazari', img: '/sources/Razas/Shazari/images/cover.png' },
  { name: "Thae'tir", path: '/raza-gen-thae-tir', img: '/sources/Razas/Thaetir/images/cover.png' },
]

export default function Razas() {
  const navigate = useNavigate()
  return (
    <div className="page active">
      <div className="roster-grid-header">
        {ROSTER_IMGS.map((r, i) => (
          <div key={r.alt} className="roster-grid-item">
            <img
              src={r.src}
              alt={r.alt}
              fetchPriority={i < 4 ? 'high' : 'low'}
              decoding="async"
            />
          </div>
        ))}
        <div className="roster-grid-overlay">
          <div className="page-header-content">
            <h1>Razas</h1>
            <p>Los diez linajes de Primus</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Las Razas de Primus</h2>
        <div className="section-underline"><i className="fa-solid fa-users" /></div>
        <div className="razas-grid">
          {RAZAS.map((r) => (
            <div key={r.name} className="raza-card" onClick={() => navigate(r.path)} style={{ cursor: 'pointer' }}>
              <div className="raza-card-img-wrap">
                <img src={r.img} alt={r.name} className="raza-card-img" loading="lazy" decoding="async" />
              </div>
              <div className="raza-card-body">
                <h3>{r.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
