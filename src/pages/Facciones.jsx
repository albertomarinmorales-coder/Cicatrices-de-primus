import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const FACTIONS = [
  {
    id: 'corona',
    name: 'La Corona',
    icon: 'ra-capitol',
    img: '/assets/images/facciones/corona.png',
    accent: '#c9a84c',
    summary: 'Reconstrucción política, fuerza militar y alianzas sostienen una autoridad debilitada desde Azimra.',
    paragraphs: [
      'Tras la caída de la antigua capital y la muerte del rey Jon, el reino quedó fragmentado: territorios perdidos, casas nobles rebeldes y una autoridad debilitada.',
      'Bajo el mando del rey Cyprian Blackwood, la Corona busca restaurar el orden desde Azimra. Su estrategia combina reconstrucción política y fuerza militar, apoyándose en figuras clave como Caelis (Torre del Último Juramento), Meiga, Red y Eryk.',
      'A pesar de ello, la Corona conserva el respaldo de la Torre del Último Juramento, sosteniéndose en una frágil era de reconstrucción donde política, guerra y alianzas definen el presente.',
    ],
    groups: [
      {
        label: 'La estabilidad sigue lejos',
        items: [
          'En el oeste, los rebeldes de Jorvik mantienen una guerra abierta.',
          'Una organización secreta infiltra estructuras de poder desde las sombras.',
        ],
      },
    ],
  },
  {
    id: 'rebeldes',
    name: 'Los Rebeldes',
    icon: 'ra-crossed-swords',
    img: '/assets/images/facciones/rebeldes.png',
    accent: '#b01010',
    summary: 'Una revuelta fragmentada se ha convertido en una amenaza estructurada contra el reino.',
    paragraphs: [
      'La rebelión surgió en el segundo año del reinado de Cyprian, impulsada por el descontento de casas nobles y la inestabilidad del reino.',
      'Lo que comenzó como oposición se convirtió en una revuelta fragmentada hasta consolidarse bajo el liderazgo del Jarl de Jörvik.',
      'Sea cual sea la verdad, ya no son disidentes: son uno de los conflictos centrales del reino.',
    ],
    groups: [
      {
        label: 'Desde el oeste logró',
        items: [
          'Unificar facciones dispersas',
          'Organizar un ejército real',
          'Convertir la rebelión en una amenaza estructurada',
        ],
      },
      {
        label: 'Sus objetivos no están claros',
        items: [
          'Algunos creen que buscan colocar a un nuevo monarca.',
          'Otros aseguran que protegen al heredero legítimo y una verdad oculta.',
        ],
      },
    ],
  },
  {
    id: 'resistencia',
    name: 'La Resistencia',
    icon: 'ra-scroll-unfurled',
    img: '/assets/images/facciones/resistencia.png',
    accent: '#6e4ba3',
    summary: 'Perseguidos y olvidados, afirman que la historia ha sido alterada y luchan por restaurar la verdad.',
    paragraphs: [
      'Tras la caída de la Arboleda y la destrucción del Bastión Krieger, surgió un grupo que afirma que la historia ha sido alterada.',
      'Consideran enemigos principales a Meiga, Eryk y Red, a quienes responsabilizan de la corrupción y manipulación del mundo.',
      'Operan desde las sombras, sin alianzas, perseguidos y olvidados por la mayoría.',
    ],
    groups: [
      {
        label: 'Liderados por Seralyth Aeryndor, antiguos miembros de la Orden Krieger luchan por',
        items: [
          'Restaurar la verdad',
          'Recuperar recuerdos perdidos',
          'Detener una realidad basada en una mentira',
        ],
      },
    ],
  },
  {
    id: 'torre',
    name: 'La Torre del Último Juramento',
    icon: 'ra-compass',
    img: '/assets/images/facciones/laTorre.png',
    accent: '#4a7ab5',
    summary: 'Academia, centro de investigación y bastión militar dedicado al estudio del Thae.',
    paragraphs: [
      'Tras la destrucción de la Academia de Nidharrow, surgieron grietas interplanares que amenazaban el mundo.',
      'Caelis estabilizó una de ellas y fundó la Torre cerca de la Gran Pirámide, creando un centro dedicado al estudio del Thae.',
      'Reúne disciplinas diversas, incluso prácticas oscuras, y figuras como Caelis, Dario, Maekar, los Azharn y los Vhark’hul.',
      'Mantiene una estrecha relación con la Corona, siendo una línea crítica de defensa ante amenazas incomprensibles.',
    ],
    groups: [
      {
        label: 'Hoy es',
        items: [
          'Academia mágica',
          'Centro de investigación',
          'Bastión militar',
        ],
      },
      {
        label: 'Su misión',
        items: [
          'Contener grietas',
          'Evitar la convergencia entre planos',
          'Defender el reino de entidades externas',
        ],
      },
    ],
  },
  {
    id: 'lucis-aeterna',
    name: 'Lucis Aeterna (La Orden)',
    icon: 'ra-cracked-shield',
    img: '/assets/images/facciones/lucisAeterna.png',
    accent: '#f1e9ba',
    summary: 'Antes una iglesia, ahora una fuerza militar y espiritual dedicada a purificar la corrupción.',
    paragraphs: [
      'Antes una iglesia, ahora una fuerza militar y espiritual.',
      'Tras la revelación de Thronus como señor del Orden, su propósito evolucionó hacia proteger Primus y restaurar el equilibrio.',
      'Desde Ashbourne, combaten amenazas oscuras mediante la Flama Eterna.',
      'Mantienen una fuerte alianza con el Norte y ofrecen refugio a quienes buscan su causa.',
    ],
    groups: [
      {
        label: 'Su propósito evolucionó hacia',
        items: [
          'Purificar la corrupción',
          'Proteger a Primus',
          'Restaurar el equilibrio',
        ],
      },
      {
        label: 'Se caracterizan por',
        items: [
          'Neutralidad política (no intervienen en la guerra entre la Corona y los Rebeldes)',
          'Enfoque en amenazas mayores (corrupción y entidades oscuras)',
          'Búsqueda del fragmento de Thronus y tierras sagradas',
        ],
      },
    ],
  },
  {
    id: 'norte',
    name: 'El Norte',
    icon: 'ra-mountains',
    img: '/assets/images/facciones/ElNorte.png',
    accent: '#9fb7d7',
    summary: 'Una región extrema donde el poder no se mide en coronas, sino en sobrevivir otro invierno.',
    paragraphs: [
      'Tras la caída de Ravensvik, el Norte se volvió una región extrema y hostil.',
      'La creación de Skalford intentó contener las amenazas, pero la estrategia ha cambiado: ya no basta resistir, ahora deben avanzar.',
      'Su filosofía es simple: conquistar o perecer.',
      'No buscan poder político, sino supervivencia.',
      'En el Norte, el poder no se mide en coronas, sino en sobrevivir otro invierno.',
    ],
    groups: [
      {
        label: 'El Norte lucha contra',
        items: [
          'Bestias antiguas',
          'Criaturas salvajes',
          'Horrores olvidados',
          'Un clima letal',
        ],
      },
      {
        label: 'Aun así',
        items: [
          'Mantienen alianza con la Orden',
          'Permanecen al margen del conflicto entre la Corona y los Rebeldes',
        ],
      },
    ],
  },
]

function FactionPanel({ faction }) {
  return (
    <article className="ano-block">
      <div className="ano-header">
        <div className="ano-num">Facción</div>
        <h2 className="ano-title">{faction.name}</h2>
        <div className="ano-divider"><span>✦</span></div>
      </div>

      <div className="ano-gallery ano-gallery--1">
        <img src={faction.img} alt={faction.name} loading="lazy" decoding="async" />
      </div>

      <div className="ano-body">
        <blockquote
          className="deity-quote"
          style={{
            borderLeft: '2px solid var(--gold)',
            borderRight: 'none',
            marginBottom: '1.75rem',
            padding: '0.6rem 1.1rem 0.6rem 1rem',
            textAlign: 'left',
          }}
        >
          {faction.summary}
        </blockquote>

        <div className="detail-text" style={{ textAlign: 'left' }}>
          {faction.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {faction.groups.map((group) => (
            <div key={group.label} style={{ marginTop: '1.25rem' }}>
              <p style={{ marginBottom: '0.45rem' }}>
                <strong style={{ color: 'var(--gold)', fontFamily: "'Cinzel', serif" }}>{group.label}:</strong>
              </p>
              <ul style={{ margin: '0 0 1.35rem 1.15rem', paddingLeft: '1.2rem', listStylePosition: 'outside' }}>
                {group.items.map((item) => (
                  <li key={item} style={{ marginBottom: '0.45rem', paddingLeft: '0.25rem' }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Facciones() {
  const navigate = useNavigate()
  const [activeFactionId, setActiveFactionId] = useState(FACTIONS[0].id)
  const [tabsOpen, setTabsOpen] = useState(false)
  const activeFaction = FACTIONS.find((faction) => faction.id === activeFactionId) || FACTIONS[0]

  return (
    <div className="page active" id="page-facciones">
      <div className="page-header">
        <div className="page-header-bg" aria-hidden="true" />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <h1>Facciones</h1>
          <p>Las fuerzas que definen el equilibrio de Primus</p>
        </div>
      </div>

      <div className="detail-body">
        <span className="back-btn" onClick={() => navigate('/mundo')} style={{ cursor: 'pointer' }}>&#8592; Volver a Mundo</span>

        <h2 className="section-title">Mundo de Primus</h2>
        <div className="section-underline"><i className="ra ra-compass" aria-hidden /></div>
        <div className="detail-text" style={{ maxWidth: '760px', margin: '0 auto 3.5rem', textAlign: 'center' }}>
          <p>Los poderes que lo moldean.</p>
        </div>

        <div className={`lore-tabs${tabsOpen ? ' open' : ''}`} id="facciones-tabs">
          <span className="mobile-dropdown-label">Facción</span>
          <button
            className="lore-tabs-trigger"
            type="button"
            aria-expanded={tabsOpen}
            aria-controls="facciones-tabs-list"
            onClick={() => setTabsOpen((open) => !open)}
          >
            <span>{activeFaction.name}</span>
            <i className="ra ra-heavy-fall" aria-hidden />
          </button>
          <div className="lore-tabs-list" id="facciones-tabs-list">
            {FACTIONS.map((faction) => (
              <button
                key={faction.id}
                type="button"
                className={`lore-tab${activeFactionId === faction.id ? ' active' : ''}`}
                onClick={() => {
                  setActiveFactionId(faction.id)
                  setTabsOpen(false)
                }}
              >
                {faction.name}
              </button>
            ))}
          </div>
        </div>

        <div className="lore-panel active">
          <FactionPanel faction={activeFaction} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
