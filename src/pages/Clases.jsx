import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import RosterGridHeader from '../components/RosterGridHeader'
import { VELUM_IMG } from '../data/clases'

const ROLE_FILTERS = [
  { id: 'all', label: 'Todas' },
  { id: 'tanque', label: 'Tanque' },
  { id: 'dps', label: 'DPS' },
  { id: 'healer', label: 'Healer' },
  { id: 'support', label: 'Support' },
]

const CLASES = [
  { name: 'Ciudadano', path: '/clase-ciudadano', img: '/assets/images/classes/ciudadano/avatar.png', role: null, roleGroup: 'Support', roleLabel: 'Base' },
  { name: "Vhark'Hul", path: '/clase-vhark-hul', img: "/assets/images/classes/vharkhul/avatar.png", role: 'Tanque/Luchador', roleGroup: 'tanque', roleLabel: 'Tanque' },
  { name: 'Argent Praetor', path: '/clase-argent-praetor', img: '/assets/images/classes/argent-praetor/avatar.png', role: 'Tanque/Luchador', roleGroup: 'tanque', roleLabel: 'Tanque' },
  { name: 'Dualhar', path: '/clase-dualhar', img: '/assets/images/classes/dualhar/avatar.webp', role: 'DPS Distancia/DPS Fisico', roleGroup: 'dps', roleLabel: 'DPS' },
  { name: 'Luminari Vox', path: '/clase-luminari-vox', img: '/assets/images/classes/luminari-vox/avatar.png', role: 'Healer/Buffer', roleGroup: 'healer', roleLabel: 'Healer' },
  { name: "Noc'thar", path: '/clase-noc-thar', img: "/assets/images/classes/nocthar/avatar.png", role: 'Debuffer/Healer', roleGroup: 'healer', roleLabel: 'Healer' },
  { name: 'Stormheilm', path: '/clase-stormheilm', img: '/assets/images/classes/stormheilm/avatar.png', role: 'Luchador/Tanque', roleGroup: 'tanque', roleLabel: 'Tanque' },
  { name: 'Velum Caedis', path: '/clase-velum-caedis', img: VELUM_IMG.caedisAvatar, role: 'Burst DPS', roleGroup: 'dps', roleLabel: 'DPS' },
  { name: 'Velum Cantoris', path: '/clase-velum-cantoris', img: VELUM_IMG.cantorisAvatar, role: 'Buffer / Debuffer', roleGroup: 'support', roleLabel: 'Support' },
  { name: 'Zereth-Mor', path: '/clase-zereth-mor', img: '/assets/images/classes/zereth-mor/avatar.png', role: 'DPS Mágico', roleGroup: 'dps', roleLabel: 'DPS' },
  { name: 'Magharyn', path: '/clase-magharyn', img: '/assets/images/classes/magharyn/avatar.png', role: 'Support/Luchador', roleGroup: 'support', roleLabel: 'Support' },
]

export default function Clases() {
  const navigate = useNavigate()
  const [activeRole, setActiveRole] = useState('all')

  const visibleClases = useMemo(
    () => (activeRole === 'all' ? CLASES : CLASES.filter((c) => c.roleGroup === activeRole)),
    [activeRole]
  )

  return (
    <div className="page active" id="page-clases">
      <RosterGridHeader title="Clases" subtitle="Las sendas de poder en Primus" />

      <div className="section">
        <h2 className="section-heading-kicker">Elige tu senda</h2>
        <div className="section-underline"><i className="ra ra-crossed-swords" aria-hidden /></div>
        <div className="clases-filter-bar" role="tablist" aria-label="Filtrar clases por rol">
          {ROLE_FILTERS.map((role) => (
            <button
              key={role.id}
              type="button"
              className={`clases-filter-chip${activeRole === role.id ? ' active' : ''}`}
              onClick={() => setActiveRole(role.id)}
            >
              {role.label}
            </button>
          ))}
        </div>
        <div className="razas-grid">
          {visibleClases.map((c) => (
            <div
              key={c.name}
              className={c.velumsSplit ? 'raza-card clase-card raza-card--velums clase-card--velums' : 'raza-card clase-card'}
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
                  <span className={`clase-card-role-chip is-${c.roleGroup}`}>
                    {c.role}
                  </span>
                  <div className="raza-card-body">
                    <div className="clase-card-nameplate">
                      <h3>{c.name}</h3>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="raza-card-img-wrap">
                  <img src={c.img} alt={c.name} className="raza-card-img" loading="lazy" decoding="async" />
                  <span className={`clase-card-role-chip is-${c.roleGroup}`}>
                    {c.role || 'Clase base de inicio'}
                  </span>
                  <div className="raza-card-body">
                    <div className="clase-card-nameplate">
                      <h3>{c.name}</h3>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
