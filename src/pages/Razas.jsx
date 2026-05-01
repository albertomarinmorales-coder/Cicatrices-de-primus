import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import RosterGridHeader from '../components/RosterGridHeader'

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
      <RosterGridHeader title="Razas" subtitle="Los diez linajes de Primus" />

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
