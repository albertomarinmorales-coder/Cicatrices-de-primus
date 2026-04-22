import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const ROSTER_IMGS = [
  { src: '/sources/Clases/1. Ciudadano/fotos/avatar.png', alt: 'Ciudadano' },
  { src: '/sources/Clases/2. Argent Praetor/Fotos/avatar.png', alt: 'Argent Praetor' },
  { src: '/sources/Clases/3. Dualhar/Fotos/avatar.png', alt: 'Dualhar' },
  { src: "/sources/Clases/4. Luminari Vox/fotos/avatar.png", alt: 'Luminari Vox' },
  { src: "/sources/Clases/5. Noc'thar/fotos/avatar.png", alt: "Noc'thar" },
  { src: '/sources/Clases/6. Stormheilm/fotos/avatar.png', alt: 'Stormheilm' },
  { src: '/sources/Clases/7. Velum Caedis/fotos/avatar.png', alt: 'Velum Caedis' },
  { src: '/sources/Clases/8. Zereth-Mor/Fotos/avatar.png', alt: 'Zereth-Mor' },
  { src: '/sources/Clases/9. Magharyn/fotos/avatar.png', alt: 'Magharyn' },
  { src: "/sources/Clases/10. Vhark'Hul/fotos/avatar.png", alt: "Vhark'Hul" },
]

const CLASES = [
  { name: 'Ciudadano', path: '/clase-ciudadano', img: '/sources/Clases/1. Ciudadano/fotos/avatar.png', role: null },
  { name: "Vhark'Hul", path: '/clase-vhark-hul', img: "/sources/Clases/10. Vhark'Hul/fotos/avatar.png", role: 'Tanque/Luchador' },
  { name: 'Argent Praetor', path: '/clase-argent-praetor', img: '/sources/Clases/2. Argent Praetor/Fotos/avatar.png', role: 'Tanque/Luchador' },
  { name: 'Dualhar', path: '/clase-dualhar', img: '/sources/Clases/3. Dualhar/Fotos/avatar.png', role: 'DPS Distancia/DPS Fisico' },
  { name: 'Luminari Vox', path: '/clase-luminari-vox', img: '/sources/Clases/4. Luminari Vox/fotos/avatar.png', role: 'Healer/Buffer' },
  { name: "Noc'thar", path: '/clase-noc-thar', img: "/sources/Clases/5. Noc'thar/fotos/avatar.png", role: 'Debuffer/Healer' },
  { name: 'Stormheilm', path: '/clase-stormheilm', img: '/sources/Clases/6. Stormheilm/fotos/avatar.png', role: 'Luchador/Tanque' },
  { name: 'Velum Caedis', path: '/clase-velum-caedis', img: '/sources/Clases/7. Velum Caedis/fotos/avatar.png', role: 'Burst DPS' },
  { name: 'Velum Cantoris', path: '/clase-velum-cantoris', img: '/sources/Clases/7. Velum Cantoris/fotos/avatar.png', role: 'Buffer/Debuffer' },
  { name: 'Zereth-Mor', path: '/clase-zereth-mor', img: '/sources/Clases/8. Zereth-Mor/Fotos/avatar.png', role: 'DPS Mágico' },
  { name: 'Magharyn', path: '/clase-magharyn', img: '/sources/Clases/9. Magharyn/fotos/avatar.png', role: 'Soporte/Luchador' },
]

export default function Clases() {
  const navigate = useNavigate()
  return (
    <div className="page active">
      <div className="roster-grid-header">
        {ROSTER_IMGS.map((r) => (
          <div key={r.alt} className="roster-grid-item">
            <img src={r.src} alt={r.alt} />
          </div>
        ))}
        <div className="roster-grid-overlay">
          <div className="page-header-content">
            <h1>Clases</h1>
            <p>Las sendas de poder en Primus</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Las Clases</h2>
        <div className="section-underline"><i className="fa-solid fa-khanda" /></div>
        <div className="razas-grid">
          {CLASES.map((c) => (
            <div key={c.name} className="raza-card" onClick={() => navigate(c.path)} style={{ cursor: 'pointer' }}>
              <div className="raza-card-img-wrap">
                <img src={c.img} alt={c.name} className="raza-card-img" loading="lazy" decoding="async" />
              </div>
              <div className="raza-card-body">
                <h3>{c.name}</h3>
                {c.role && <p className="raza-card-role" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>{c.role}</p>}
                <span className="btn-ghost">Ver más</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
