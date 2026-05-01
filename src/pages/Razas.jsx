import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const ROSTER_IMGS = [
  { src: '/assets/images/races/elfos/cover.png', alt: 'Elfos' },
  { src: '/assets/images/races/enanos/cover.png', alt: 'Enanos' },
  { src: '/assets/images/races/humanos/cover.png', alt: 'Humanos' },
  { src: '/assets/images/races/malvakari/cover.png', alt: 'Malvakari' },
  { src: '/assets/images/races/mestizos/cover.png', alt: 'Mestizos' },
  { src: '/assets/images/races/nhekthal/cover.png', alt: 'Nhek-Thal' },
  { src: '/assets/images/races/ossalyth/cover.png', alt: 'Ossalyth' },
  { src: '/assets/images/races/rosaveld/cover.png', alt: 'Rosaveld' },
  { src: '/assets/images/races/shazari/cover.png', alt: 'Shazari' },
  { src: '/assets/images/races/thaetir/cover.png', alt: 'Thae-Tir' },
]

const RAZAS = [
  { name: 'Elfos', path: '/raza-gen-elfos', img: '/assets/images/races/elfos/cover.png' },
  { name: 'Enanos', path: '/raza-gen-enanos', img: '/assets/images/races/enanos/cover.png' },
  { name: 'Humanos', path: '/raza-gen-humanos', img: '/assets/images/races/humanos/cover.png' },
  { name: 'Malvakari', path: '/raza-gen-malvakari', img: '/assets/images/races/malvakari/cover.png' },
  { name: 'Mestizos', path: '/raza-gen-mestizos', img: '/assets/images/races/mestizos/cover.png' },
  { name: "Nhek'thal", path: '/raza-gen-nhek-thal', img: '/assets/images/races/nhekthal/cover.png' },
  { name: 'Ossalyth', path: '/raza-gen-ossalyth', img: '/assets/images/races/ossalyth/cover.png' },
  { name: 'Rosaveld', path: '/raza-gen-rosaveld', img: '/assets/images/races/rosaveld/cover.png' },
  { name: 'Shazari', path: '/raza-gen-shazari', img: '/assets/images/races/shazari/cover.png' },
  { name: "Thae'tir", path: '/raza-gen-thae-tir', img: '/assets/images/races/thaetir/cover.png' },
]

export default function Razas() {
  const navigate = useNavigate()
  return (
    <div className="page active" id="page-razas">
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
        <h2 className="section-heading-kicker">Elige tu linaje</h2>
        <div className="section-underline"><i className="ra ra-double-team" aria-hidden /></div>
        <div className="razas-grid">
          {RAZAS.map((r) => (
            <div
              key={r.name}
              className="raza-card clase-card"
              onClick={() => navigate(r.path)}
              style={{ cursor: 'pointer' }}
            >
              <div className="raza-card-img-wrap">
                <img src={r.img} alt={r.name} className="raza-card-img" loading="lazy" decoding="async" />
                <div className="raza-card-body">
                  <div className="clase-card-nameplate">
                    <h3>{r.name}</h3>
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
