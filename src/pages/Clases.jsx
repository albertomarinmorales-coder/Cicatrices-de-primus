import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import RosterGridHeader from '../components/RosterGridHeader'
import { VELUM_IMG } from '../data/clases'

const CLASES = [
  { name: 'Ciudadano', path: '/clase-ciudadano', img: '/assets/images/classes/ciudadano/avatar.png', role: null },
  { name: "Vhark'Hul", path: '/clase-vhark-hul', img: "/assets/images/classes/vharkhul/avatar.png", role: 'Tanque/Luchador' },
  { name: 'Argent Praetor', path: '/clase-argent-praetor', img: '/assets/images/classes/argent-praetor/avatar.png', role: 'Tanque/Luchador' },
  { name: 'Dualhar', path: '/clase-dualhar', img: '/assets/images/classes/dualhar/avatar.png', role: 'DPS Distancia/DPS Fisico' },
  { name: 'Luminari Vox', path: '/clase-luminari-vox', img: '/assets/images/classes/luminari-vox/avatar.png', role: 'Healer/Buffer' },
  { name: "Noc'thar", path: '/clase-noc-thar', img: "/assets/images/classes/nocthar/avatar.png", role: 'Debuffer/Healer' },
  { name: 'Stormheilm', path: '/clase-stormheilm', img: '/assets/images/classes/stormheilm/avatar.png', role: 'Luchador/Tanque' },
  { name: 'Velums', path: '/clase-velums', velumsSplit: true, role: 'Caedis / Cantoris' },
  { name: 'Zereth-Mor', path: '/clase-zereth-mor', img: '/assets/images/classes/zereth-mor/avatar.png', role: 'DPS Mágico' },
  { name: 'Magharyn', path: '/clase-magharyn', img: '/assets/images/classes/magharyn/avatar.png', role: 'Soporte/Luchador' },
]

export default function Clases() {
  const navigate = useNavigate()
  return (
    <div className="page active">
      <RosterGridHeader title="Clases" subtitle="Las sendas de poder en Primus" />

      <div className="section">
        <h2 className="section-title">Las Clases</h2>
        <div className="section-underline"><i className="fa-solid fa-khanda" /></div>
        <div className="razas-grid">
          {CLASES.map((c) => (
            <div
              key={c.name}
              className={c.velumsSplit ? 'raza-card raza-card--velums' : 'raza-card'}
              onClick={() => navigate(c.path)}
              style={{ cursor: 'pointer' }}
            >
              {c.velumsSplit ? (
                <div className="raza-card-img-wrap raza-card-img-wrap--velums-split">
                  <img
                    src={VELUM_IMG.caedisAvatar}
                    alt=""
                    className="raza-card-img raza-card-img--velums-half"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src={VELUM_IMG.cantorisAvatar}
                    alt=""
                    className="raza-card-img raza-card-img--velums-half"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ) : (
                <div className="raza-card-img-wrap">
                  <img src={c.img} alt={c.name} className="raza-card-img" loading="lazy" decoding="async" />
                </div>
              )}
              <div className="raza-card-body">
                <h3>{c.name}</h3>
                <p
                  className="raza-card-role"
                  style={{ fontSize: '0.85rem', color: 'var(--text-muted)', minHeight: '1.4rem' }}
                >
                  {c.role || ''}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
