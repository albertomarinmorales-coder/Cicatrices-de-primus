import { useState } from 'react'
import Footer from '../components/Footer'

const FACTIONS = [
  {
    id: 'corona',
    name: 'La Corona',
    img: '/assets/images/facciones/corona.png',
    paragraphs: [
      'Tras la caída de la antigua capital y la muerte del rey Jon, el reino quedó dividido, con territorios perdidos, casas nobles rebeldes y una autoridad debilitada. En este escenario, la Corona, liderada por el rey Cyprian Blackwood y su consejo, busca restaurar el orden, consolidar su poder y recuperar las tierras perdidas. Desde la capital Azimra, sus fuerzas trabajan por reconstruir un reino golpeado por años de conflicto, apoyándose en figuras clave como Caelis de la Torre del Último Juramento, Meiga, Red y Eryk para fortalecer tanto su dominio político como militar.',
      'Sin embargo, la estabilidad está lejos de alcanzarse. En el oeste, los rebeldes de Jorvik mantienen una guerra abierta contra el gobierno, resistiendo el avance de la Corona y desafiando su autoridad. A esta amenaza se suma una organización misteriosa que opera desde las sombras, infiltrándose en estructuras de poder y debilitando al reino desde dentro, convirtiendo la lucha actual en algo más complejo que una simple guerra territorial.',
      'En medio de esta tensión, la Corona mantiene el respaldo de la Torre del Último Juramento. Así, el reino vive una era de reconstrucción forzada, donde la política, la guerra y las alianzas estratégicas definen el presente de un mundo que aún intenta levantarse de sus ruinas.',
    ],
  },
  {
    id: 'rebeldes',
    name: 'Los Rebeldes',
    img: '/assets/images/facciones/rebeldes.png',
    paragraphs: [
      'Los rebeldes surgieron durante el segundo año del reinado de Cyprian Blackwood, cuando el descontento hacia la Corona comenzó a extenderse entre varias casas nobles y sectores del reino. La falta de experiencia del nuevo rey, sumada a la inestabilidad política tras la caída de la antigua capital, provocó fracturas profundas en la autoridad central. Lo que comenzó como oposición y desconfianza pronto se convirtió en rebelión abierta, fragmentando territorios y dando origen a múltiples facciones separadas del dominio de la Corona.',
      'Con el paso de los años, el caos inicial fue tomando forma. Entre los distintos grupos rebeldes, algunos desaparecieron, otros se volvieron más violentos y finalmente una fuerza principal comenzó a consolidarse bajo el liderazgo del Jarl de Jörvik. Desde el oeste, este líder logró organizar tropas, unificar objetivos y transformar una rebelión dispersa en una campaña militar real contra el reino. Bajo su mando, los rebeldes dejaron de ser simples disidentes para convertirse en una amenaza estructurada, capaz de disputar territorio directamente con las fuerzas reales.',
      'Aunque sus verdaderas intenciones siguen rodeadas de rumores, muchos aseguran que los rebeldes luchan para colocar en el trono a una figura misteriosa, mientras otros afirman que protegen al verdadero heredero y una verdad que la Corona intenta ocultar. Sea cual sea la realidad, su avance es constante, sus fuerzas están organizadas y su guerra contra Cyprian ya no es una revuelta pasajera, sino uno de los conflictos más decisivos del reino actual.',
    ],
  },
  {
    id: 'resistencia',
    name: 'La Resistencia',
    img: '/assets/images/facciones/resistencia.png',
    paragraphs: [
      'Tras la caída de la Arboleda y la destrucción del Bastión Krieger, un grupo de supervivientes parece recordar una verdad distinta a la que el mundo ahora acepta. Bajo el liderazgo de Seralyth Aeryndor, antiguos miembros de la Orden Krieger se unieron no para reconstruir una orden perdida, sino para enfrentar la certeza de que la historia fue alterada. Para ellos, el mundo actual se sostiene sobre una mentira, y su lucha consiste en impedir que esa falsedad termine por consumir todo lo que aún permanece y, tal vez, recobrar lo que algún día fue.',
      'La Resistencia combate en múltiples frentes, pero su propósito es uno solo: restaurar el equilibrio del mundo. Esto significa enfrentar la oscuridad que se expande, proteger los lugares que aún no han caído, recuperar los recuerdos verdaderos de quienes fueron afectados y limpiar el nombre de Seralyth y los Krieger, ahora vistos por muchos como traidores o responsables de la ruina.',
      'Para este grupo, sus principales enemigos son Meiga, Eryk y Red, a quienes consideran responsables directos de la oscuridad creciente y de la manipulación que distorsionó la realidad del continente. Sin alianzas conocidas y operando de forma aislada y desde la oscuridad, la Resistencia sobrevive como una fuerza perseguida, buscando desestabilizar el gobierno, enfrentando no solo poderosos adversarios, sino también un mundo que, en gran parte, ha olvidado por qué luchan.',
    ],
  },
  {
    id: 'torre',
    name: 'La Torre del Último Juramento',
    img: '/assets/images/facciones/laTorre.png',
    paragraphs: [
      'Tras la destrucción de la antigua Academia de Nidharrow durante la caída de la capital, el reino quedó expuesto a las grietas interplanares que durante años habían sido contenidas por Caelis y sus magharyn. En respuesta a esta amenaza, Caelis logró estabilizar una de estas fisuras cerca de la Gran Pirámide y fundó la Torre del Último Juramento, un nuevo centro dedicado al estudio, control y dominio del Thae. Desde entonces, la Torre se ha convertido en uno de los pilares más importantes del reino, preservando conocimientos mágicos esenciales y educando nuevas generaciones capaces de enfrentar amenazas que van más allá del mundo conocido.',
      'Hoy, la Torre reúne a practicantes de múltiples disciplinas, desde magos elementales hasta corrientes más oscuras como la nigromancia y el Thae de la muerte. La presencia de figuras como Caelis, Dario, Maekar, los Azharn y la creación de los Vhark’hul han convertido este lugar en mucho más que una academia: es un bastión de investigación, poder militar y preparación frente a fuerzas que desafían la lógica común. Su propósito es claro: contener las grietas, evitar la convergencia entre planos y proteger al reino de entidades cuya existencia misma altera la realidad.',
      'A diferencia de otras amenazas del continente, el mayor enemigo de la Torre no surge de conflictos políticos ni guerras territoriales, sino de criaturas y fuerzas provenientes de otros planos. Estas entidades traen consigo magias desconocidas, distorsiones del tiempo y alteraciones capaces de quebrar tanto la realidad como la cordura. Por ello, la Torre mantiene una relación estrecha con la Corona, funcionando no solo como institución académica, sino como una línea crítica de defensa ante peligros que pocos fuera de sus muros pueden siquiera comprender.',
    ],
  },
  {
    id: 'lucis-aeterna',
    name: 'Lucis Aeterna (La Orden)',
    img: '/assets/images/facciones/lucisAeterna.png',
    paragraphs: [
      'La Lucis Aeterna, conocida simplemente como la Orden, dejó atrás su antiguo papel como iglesia de consuelo para convertirse en una fuerza dedicada a combatir la corrupción que amenaza a Primus. Tras la revelación de Thronus como señor del Orden, lo que antes fue un credo centrado en armonía y compasión evolucionó hacia una organización militar y espiritual enfocada en purificar, proteger y restaurar aquello que ha sido corrompido. Desde Ashbourne, la Orden se alza como bastión contra las amenazas oscuras, utilizando la luz, la disciplina y la Flama Eterna como sus principales armas.',
      'A diferencia de otros grupos, la Lucis Aeterna no centra su atención en disputas políticas como la guerra entre la Corona y la Rebelión. Para ellos, esos conflictos son menores frente al verdadero peligro: la corrupción, las entidades oscuras y las fuerzas nacidas del sufrimiento que se expanden desde la caída de Raventree. Su propósito es restaurar el orden en Primus, proteger a su gente, recuperar el fragmento de Thronus y reconquistar las tierras sagradas perdidas, enfrentando amenazas que consideran mucho más graves que cualquier lucha por poder terrenal.',
      'La Orden mantiene una fuerte alianza con el Norte, compartiendo información, recursos y apoyo militar en campañas contra criaturas y corrupciones. Fuera de ello, se mantiene neutral ante los conflictos del reino, actuando como territorio consagrado para quienes busquen refugio o deseen unirse a su causa. En un mundo cada vez más consumido por la oscuridad, la Lucis Aeterna existe como una fuerza independiente cuya prioridad no es gobernar, sino asegurar que Primus sobreviva.',
    ],
  },
  {
    id: 'norte',
    name: 'El Norte',
    img: '/assets/images/facciones/ElNorte.png',
    paragraphs: [
      'Después de la caída de Ravensvik, el Norte se convirtió en una de las regiones más vulnerables y peligrosas de Primus. La construcción de Skalford buscó contener las amenazas provenientes de las tierras salvajes, pero los ataques constantes han demostrado que resistir no será suficiente. Ante la posibilidad de perder otro bastión y dejar a Yrsafell expuesta, los norteños han abandonado cualquier idea de simple defensa: su supervivencia depende de avanzar, recuperar territorio y empujar a las criaturas del norte lejos de sus asentamientos.',
      'El Norte no lucha contra un único enemigo, sino contra el propio territorio. Bestias antiguas, criaturas salvajes, horrores olvidados y un clima brutal convierten cada expedición en una batalla constante. El frío, la desolación y la hostilidad natural son tan letales como cualquier monstruo, obligando a sus habitantes a vivir bajo una lógica simple: conquistar o perecer. Su objetivo no es dominar por ambición, sino transformar una tierra casi inhabitable en un lugar donde la vida pueda persistir.',
      'A pesar de su aislamiento, el Norte mantiene una alianza sólida con la Orden de la Luz, basada en cooperación militar e intercambio de información frente a amenazas mayores. Fuera de eso, permanece al margen de la guerra entre la Corona y los Rebeldes, sin interés en disputas políticas externas. Para los pueblos del Norte, el poder no se mide en tronos ni coronas, sino en la capacidad de sobrevivir otro invierno.',
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
        <div className="detail-text" style={{ textAlign: 'left' }}>
          {faction.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Facciones() {
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
        <h2 className="section-title">Mundo de Primus</h2>
        <div className="section-underline"><i className="ra ra-compass" aria-hidden /></div>
        <div className="detail-text" style={{ maxWidth: '760px', margin: '0 auto 3.5rem', textAlign: 'center' }}>
          <p>Los sucesos que han marcado el mundo de Primus.</p>
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
