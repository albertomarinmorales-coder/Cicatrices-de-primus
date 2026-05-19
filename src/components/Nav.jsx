import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { id: 'inicio', label: 'Inicio', path: '/' },
  {
    id: 'lore', label: 'Lore', path: '/lore',
    children: [
      { label: 'Historia', path: '/historia' },
      { label: 'Deidades', path: '/deidades' },
    ],
  },
  { id: 'mundo', label: 'Mundo', path: '/mundo' },
  {
    id: 'razas', label: 'Razas', path: '/razas',
    children: [
      { label: 'Elfos', path: '/raza-gen-elfos' },
      { label: 'Enanos', path: '/raza-gen-enanos' },
      { label: 'Humanos', path: '/raza-gen-humanos' },
      { label: 'Malvakari', path: '/raza-gen-malvakari' },
      { label: 'Mestizos', path: '/raza-gen-mestizos' },
      { label: "Nhek'thal", path: '/raza-gen-nhek-thal' },
      { label: 'Ossalyth', path: '/raza-gen-ossalyth' },
      { label: 'Rosaveld', path: '/raza-gen-rosaveld' },
      { label: 'Shazari', path: '/raza-gen-shazari' },
      { label: "Thae'tir", path: '/raza-gen-thae-tir' },
    ],
  },
  {
    id: 'clases', label: 'Clases', path: '/clases',
    children: [
      { label: 'Ciudadano', path: '/clase-ciudadano' },
      { label: "Vhark'Hul", path: '/clase-vhark-hul' },
      { label: 'Argent Praetor', path: '/clase-argent-praetor' },
      { label: 'Dualhar', path: '/clase-dualhar' },
      { label: 'Luminari Vox', path: '/clase-luminari-vox' },
      { label: "Noc'thar", path: '/clase-noc-thar' },
      { label: 'Stormheilm', path: '/clase-stormheilm' },
      { label: 'Velum Caedis', path: '/clase-velum-caedis' },
      { label: 'Velum Cantoris', path: '/clase-velum-cantoris' },
      { label: 'Zereth-Mor', path: '/clase-zereth-mor' },
      { label: 'Magharyn', path: '/clase-magharyn' },
    ],
  },
  {
    id: 'profesiones', label: 'Profesiones', path: '/profesiones', alignRight: true,
    children: [
      { label: 'Alquimista', path: '/oficio-gen-alquimista' },
      { label: 'Artífices del Velo y del Brillo', path: '/oficio-gen-artifices-del-velo-y-del-brillo' },
      { label: 'Cazador', path: '/oficio-gen-cazador' },
      { label: 'Forjador', path: '/oficio-gen-forjador' },
      { label: 'Galeno', path: '/oficio-gen-galeno' },
      { label: 'Granjero', path: '/oficio-gen-granjero' },
      { label: 'Guardia', path: '/oficio-gen-guardia' },
      { label: 'Minero', path: '/oficio-gen-minero' },
      { label: 'Seeker', path: '/oficio-gen-seeker' },
      { label: 'Tabernero', path: '/oficio-gen-tabernero' },
    ],
  },
  {
    id: 'gremios', label: 'Gremios', path: '/gremios', alignRight: true,
    children: [
      { label: 'Gremio de Aventuras', path: '/gremio-aventuras' },
    ],
  },
  {
    id: 'sistemas', label: 'Sistemas', path: '/sistemas', alignRight: true,
    children: [
      { label: 'Heridas y Estados', path: '/norm-heridas' },
      { label: 'Cordura', path: '/norm-cordura' },
      { label: 'Infectados', path: '/norm-infectados' },
      { label: 'Conquista', path: '/norm-conquista' },
      { label: 'Robos y Multas', path: '/norm-robos' },
      { label: 'Combate', path: '/norm-combate' },
      { label: 'Combate PvP', path: '/norm-pvp' },
    ]
  },
  {
    id: 'normativa', label: 'Normativas', path: '/normativa', alignRight: true,
    children: [
      { label: 'Normativa General', path: '/norm-general' },
      { label: 'Vivienda y Construcción', path: '/norm-housing' },
      { label: 'Esclavitud', path: '/norm-esclavitud' },
    ],
  },
  { id: 'galeria', label: 'Galería', path: '/galeria' },
  { id: 'libro-firmas', label: 'Libro de Firmas', path: '/libro-de-firmas' },
  { id: 'equipo', label: 'Staff', path: '/equipo', alignRight: true },
]

export default function Nav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function go(path) {
    navigate(path)
    setMenuOpen(false)
  }

  function isActive(item) {
    if (item.path === '/') return pathname === '/'
    if (pathname === item.path) return true
    if (item.children?.some(c => pathname === c.path)) return true
    return false
  }

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a
        href="/"
        className="nav-logo logo-wrap"
        onClick={(e) => {
          e.preventDefault()
          go('/')
        }}
      >
        <span className="logo-main">Cicatrices de Primus</span>
        <div className="logo-underline" />
      </a>
      <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
        {NAV_ITEMS.map(item => (
          <li key={item.id}>
            <a
              href={item.path}
              onClick={(e) => {
                e.preventDefault()
                go(item.path)
              }}
              className={isActive(item) ? 'active-nav' : ''}
            >
              {item.label}
            </a>
            {item.children && (
              <ul className={`nav-dropdown${item.children.length > 6 ? ' wide' : ''}${item.alignRight ? ' align-right' : ''}`}>
                <div className="nav-dropdown-inner">
                  {item.children.map(c => (
                    <li key={c.path}>
                      <a
                        href={c.path}
                        onClick={(e) => {
                          e.preventDefault()
                          go(c.path)
                        }}
                      >
                        {c.label}
                      </a>
                    </li>
                  ))}
                </div>
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div
        className={`nav-toggle${menuOpen ? ' active' : ''}`}
        id="navToggle"
        onClick={() => setMenuOpen(v => !v)}
      >
        <span /><span /><span />
      </div>
    </nav>
  )
}
