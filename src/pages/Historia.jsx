import { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const CIUDADES_DATA = {
  'aldea-akanthal': {
    nombre: "Aldea Akan'thal",
    subtitulo: "El Refugio de los Olvidados",
    desc: "Primer asentamiento de los Nhek'thal en Primus, provenientes de la tierra de los mil ecos. Su conocimiento de la agricultura hace estas tierras propicias para el cultivo de todo tipo de alimentos.",
    fotos: ["/assets/images/lore/cities/aldea-akanthal/1.png", "/assets/images/lore/cities/aldea-akanthal/2.png", "/assets/images/lore/cities/aldea-akanthal/3.png"]
  },
  'ashtorin': {
    nombre: "Ash'Torin",
    subtitulo: "El Enclave del Silencio Ardiente",
    desc: "Ciudad fundada por la familia Thalcharion y fiel a la corona de Cyprian. Puerto donde reside la fuerza naval del reino. Allí se ha fundado el nuevo Gremio de aventuras. El culto a Drashet es observado entre sus habitantes.",
    fotos: ["/assets/images/lore/cities/ashtorin/1.png", "/assets/images/lore/cities/ashtorin/2.png", "/assets/images/lore/cities/ashtorin/3.png"]
  },
  'ashbourne': {
    nombre: "Ashbourne",
    subtitulo: "La Ciudad de las Cenizas",
    desc: "Actual sede de la Orden de la Luz y donde se encuentra su monasterio. Pueblo portuario que conecta el norte con el resto del continente. Centro de estudio y combate de las corrupciones que asolan el reino.",
    fotos: ["/assets/images/lore/cities/ashbourne/1.png", "/assets/images/lore/cities/ashbourne/2.png", "/assets/images/lore/cities/ashbourne/3.png"]
  },
  'azimra': {
    nombre: "Azimra",
    subtitulo: "El Nuevo Comienzo",
    desc: "Lo que antiguamente era un poblado, hoy en día se erige como la capital del reino de Cyprian, desde donde actualmente intenta subsanar el conflicto que asola el continente. Es el centro comercial y político del reino, donde multitud de razas y culturas se entremezclan. El dios patrón de la ciudad es Drashet, ya que allí se encuentra la Pirámide, considerada su templo. También es el centro de estudio del thae en La Torre del Último Juramento.",
    fotos: ["/assets/images/lore/cities/azimra/1.png", "/assets/images/lore/cities/azimra/2.png", "/assets/images/lore/cities/azimra/3.png"]
  },
  'harrowfield': {
    nombre: "Harrowfield",
    subtitulo: "Los Campos que Nunca Descansan",
    desc: "Ciudad maldita al sur de la antigua capital. En la actualidad está gobernada por la familia Valpyre, que se ha alzado contra la corona, regando el caos y el terror y aliándose con criaturas como orcos y goblins, que recorren sus calles. Allí se encuentra en funcionamiento el mercado de esclavos, con subastas ocasionales y beneficios del comercio de sangre.",
    fotos: ["/assets/images/lore/cities/harrowfield/1.png", "/assets/images/lore/cities/harrowfield/2.png", "/assets/images/lore/cities/harrowfield/3.png"],
    isHarrow: true
  },
  'jorvik': {
    nombre: "Jörvik",
    subtitulo: "La Fortaleza del Norte",
    desc: "Antiguamente un pueblo que custodiaba el pasaje al norte, hoy día Jörvik es el punto de consolidación de la Rebelión, desde donde el Jarl Bjorn lidera su lucha en contra de la corona.",
    fotos: ["/assets/images/lore/cities/jorvik/1.png", "/assets/images/lore/cities/jorvik/2.png", "/assets/images/lore/cities/jorvik/3.png"]
  },
  'murun': {
    nombre: "Murun",
    subtitulo: "La Ciudad del Este Silencioso",
    desc: "Aldea dentro de las tierras de la corona. Habitada por aquellos que no encontraron lugar y resguardo dentro de las murallas de Azimra. Su población es de dudosa reputación y se escuchan rumores de habitantes que han desaparecido dentro de la pirámide.",
    fotos: ["/assets/images/lore/cities/murun/1.png", "/assets/images/lore/cities/murun/2.png", "/assets/images/lore/cities/murun/3.png"]
  },
  'ruinas-dolgaran': {
    nombre: "Ruinas Dol-Garan",
    subtitulo: "Lo Que Quedó Tras la Caída",
    desc: "Antiguo bastión de los enanos. Ciudad que estuvo atrapada en el tiempo por la influencia del fragmento de Kheos. Fue liberada del poder del fragmento tras ser recuperado por valientes guerreros. En la actualidad se encuentra abandonada y en ruinas.",
    fotos: ["/assets/images/lore/cities/ruinas-dol-garan/1.png", "/assets/images/lore/cities/ruinas-dol-garan/2.png", "/assets/images/lore/cities/ruinas-dol-garan/3.png"]
  },
  'ruinas-ravensvik': {
    nombre: "Ruinas Ravensvik",
    subtitulo: "La Última Frontera Olvidada",
    desc: "Antiguo asiento de la casa Greycliff y bastión del norte. Destruida después de la rebelión de sus líderes contra la corona. En la actualidad se encuentra en ruinas.",
    fotos: ["/assets/images/lore/cities/ruinas-ravensvik/1.png", "/assets/images/lore/cities/ruinas-ravensvik/2.png", "/assets/images/lore/cities/ruinas-ravensvik/3.png"]
  },
  'raventree-hill': {
    nombre: "Ruinas de Raventree Hall",
    subtitulo: "La Capital que el Mundo Olvidó",
    desc: "Antigua capital del reino de Jon Blackwood. En la actualidad se encuentra en ruinas y parece estar ocupada por fuerzas oscuras. Catalogada como Tierra Santa por la Orden de la Luz y localización de la antigua Catedral de Thronus.",
    fotos: ["/assets/images/lore/cities/ruinas-de-raventree-hall/1.png", "/assets/images/lore/cities/ruinas-de-raventree-hall/2.png", "/assets/images/lore/cities/ruinas-de-raventree-hall/3.png"]
  },
  'skalford': {
    nombre: "Skalford",
    subtitulo: "Donde la Justicia Tiene Precio",
    desc: "Precaria aldea aferrada a un islote en el río congelado del profundo Norte. Refugio de los antiguos habitantes de la ciudad de Ravensvik. Asechada constantemente por los peligros del norte, sus pobladores se niegan a abandonar el territorio.",
    fotos: ["/assets/images/lore/cities/skalford/1.png", "/assets/images/lore/cities/skalford/2.png", "/assets/images/lore/cities/skalford/3.png"]
  }
}

function CiudadModal({ ciudad, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  const harrowStyle = ciudad.isHarrow ? { filter: 'brightness(1.25) contrast(1.1)' } : {}
  const harrowStyle3 = ciudad.isHarrow ? { filter: 'brightness(1.6) contrast(1.1)' } : {}

  return createPortal(
    <div className="ciudad-modal-overlay open" onClick={onClose}>
      <div className="ciudad-modal" role="dialog" aria-modal="true" aria-labelledby="ciudad-modal-title" onClick={(e) => e.stopPropagation()}>
        <button className="ciudad-modal-close" onClick={onClose} aria-label="Cerrar">✕</button>
        <button className="ciudad-modal-nav ciudad-modal-nav--prev" type="button" onClick={onPrev} aria-label="Ciudad anterior">‹</button>
        <button className="ciudad-modal-nav ciudad-modal-nav--next" type="button" onClick={onNext} aria-label="Ciudad siguiente">›</button>
        <div className="modern-ciudad-modal">
          <div className="m-ciudad-hero">
            <div className="m-ciudad-hero-overlay" />
            <div className="m-ciudad-hero-content">
              <h2 className="m-ciudad-title" id="ciudad-modal-title">{ciudad.nombre}</h2>
              <div className="m-ciudad-divider" />
              <p className="m-ciudad-subtitle">{ciudad.subtitulo}</p>
            </div>
          </div>
          <div className="m-ciudad-gallery">
            <div className="m-gallery-item"><img src={ciudad.fotos[0]} alt={ciudad.nombre} loading="lazy" style={harrowStyle} /></div>
            <div className="m-gallery-item"><img src={ciudad.fotos[1]} alt={ciudad.nombre} loading="lazy" style={harrowStyle} /></div>
            <div className="m-gallery-item"><img src={ciudad.fotos[2]} alt={ciudad.nombre} loading="lazy" style={harrowStyle3} /></div>
          </div>
          <div className="m-ciudad-info">
            <div className="m-ciudad-desc"><p>{ciudad.desc}</p></div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

const ERAS = [
  {
    num: 'I Era',
    title: '"El Nacimiento de las Civilizaciones"',
    img: '/assets/images/legacy/938f05-82528c51b3f4476799987dbd0f2003a9-mv2.png',
    alt: 'I Era - El Nacimiento de las Civilizaciones',
    text: `<p>Eones habían transcurrido desde la creación. En el vasto mundo, los continentes se alzaban
      separados por océanos inmensos, y en aquellos días remotos solo uno era conocido: Primus. Este
      extenso territorio fue, en sus albores, el hogar de las primeras tribus: Humanos, Elfos, Shazari,
      Ossalyth y Enanos. Durante aquella primera era, poco se sabía aún de los Malvakari y los Thae'tirs.</p>
    <p>Los Elfos fueron los primeros en erigirse como una gran tribu. Dividieron a su pueblo en castas:
      <strong>Primales</strong> (sangre pura y gobernantes),
      <strong>Silvanos</strong> (guardianes de los bosques) y
      <strong>Oscuros</strong> (relegados a servidumbre).</p>
    <p>Los humanos crecieron con rapidez y se dividieron en pueblos diversos, mientras que los Shazari
      desarrollaron una cultura tribal basada en rituales y cacerías. Los Ossalyth fundaron aldeas
      neutrales conocidas por su sabiduría, y los Enanos construyeron fortalezas colosales en las montañas
      del norte.</p>
    <p>Todo cambió cuando el cielo ardió durante siete días y siete noches. Tras aquel cataclismo
      aparecieron los <strong>Malvakari</strong> y los <strong>Thae'tirs</strong> cerca de la Isla de Mármol.</p>`,
  },
  {
    num: 'II Era',
    title: 'Las Primeras Guerras',
    img: '/assets/images/legacy/938f05-d8a4840d292e405a9412b588b94968d4-mv2.png',
    alt: 'II Era - Las Primeras Guerras',
    text: `<p>Las antiguas alianzas comenzaron a romperse. Los Elfos Primales intentaron imponer su supremacía
      sobre Humanos y Shazari, desatando guerras en bosques y llanuras. Los Enanos fueron arrastrados al
      conflicto por la codicia élfica sobre sus riquezas minerales, y los Ossalyth abandonaron su
      neutralidad cuando los mares se tiñeron de sangre.</p>
    <p>Los Shazari demostraron ser guerreros formidables, mientras que los humanos sorprendieron por su
      capacidad de innovación militar. Durante esta era surgieron los primeros <strong>mestizos</strong>
      entre elfos y humanos, rechazados por ambos pueblos.</p>
    <p>Los Malvakari y Thae'tirs comenzaron a organizarse, usando su dominio del <strong>Thae</strong>
      como mercenarios para diversos bandos.</p>`,
  },
  {
    num: 'III Era',
    title: 'La Gran Guerra de Civilizaciones',
    img: '/assets/images/legacy/938f05-4c965443699c48d7879df5e0f2c047f4-mv2.png',
    alt: 'III Era - La Gran Guerra de Civilizaciones',
    text: `<p>La guerra escaló hasta convertirse en un conflicto entre civilizaciones enteras. Los Elfos Primales
      reunieron a Silvanos y Oscuros, prometiendo libertad a estos últimos; sin embargo, los Oscuros se
      rebelaron junto a los mestizos.</p>
    <p>Humanos, Enanos y Shazari formaron una coalición sin precedentes. Los Ossalyth incendiaron puertos
      y devastaron costas con ofensivas navales, mientras los Malvakari jugaban a múltiples bandos. Las
      alianzas colapsaron, ejércitos desaparecieron y Primus quedó cubierto de ruinas. No hubo vencedores,
      solo sobrevivientes.</p>`,
  },
  {
    num: 'IV Era',
    title: 'La Era de los Reinos Fracturados',
    img: '/assets/images/legacy/938f05-6fcb70fda3f4406c9bacac8b2e6d8048-mv2.png',
    alt: 'IV Era - La Era de los Reinos Fracturados',
    text: `<p>Tras generaciones de guerra, Primus quedó dividido en cientos de feudos y fortalezas aisladas. El
      abuso del Thae dejó huellas profundas: zonas corruptas, bestias deformadas y regiones donde las
      estaciones dejaron de seguir su curso natural.</p>
    <p>Surgieron nuevas figuras legendarias. La <strong>Casa Blackwood</strong> destacó entre los elfos
      por unir facciones enemigas, mientras que los humanos intentaron reconstruirse y los enanos se
      aislaron en sus bastiones. Los Shazari prosperaron como comerciantes y espías, y los Malvakari
      fundaron enclaves propios pactando con los Blackwood.</p>`,
  },
  {
    num: 'V Era',
    title: 'La Era de las Unificaciones',
    img: '/assets/images/legacy/938f05-156a74c1aa9a4b06b6a5da69a955e632-mv2.png',
    alt: 'V Era - La Era de las Unificaciones',
    text: `<p>El agotamiento de siglos de guerra llevó a buscar la paz. La Casa Blackwood impulsó tratados de
      unión y nacieron tres grandes ciudades que definieron el nuevo orden: <strong>Ruinas de Raventree
      Hall</strong> (la capital en la Isla de Mármol), <strong>Ravensvik</strong> (la fortaleza del
      norte) y <strong>Ash'Torin</strong> (el puerto multicultural del sur).</p>
    <p>Raventree Hall se convirtió en el centro político y cultural del mundo conocido, y por primera vez
      en la historia, las razas de Primus comenzaron a construir un futuro juntas.</p>`,
  },
]

const ANOS = [
  {
    num: 'Año 1',
    title: 'La Caída del Cuervo',
    imgs: ['/assets/images/lore/eras/ano1/1.png', '/assets/images/lore/eras/ano1/2.png', '/assets/images/lore/eras/ano1/3.png'],
    alt: 'Año 1 - La Caída del Cuervo',
    text: `<p>La muerte del Rey <strong>Jon Blackwood</strong> marcó el final definitivo de la frágil estabilidad que había mantenido unido al continente. Con su fallecimiento, Primus perdió la figura que había sostenido el equilibrio entre las distintas fuerzas del reino.</p>
    <p>Su hijo <strong>Cyprian Blackwood</strong> ascendió al trono, pero su juventud y la reciente pérdida de sus padres generaron dudas sobre su capacidad para gobernar. Aunque su legitimidad nunca fue cuestionada, muchos comenzaron a ver su reinado como vulnerable.</p>
    <p>El Consejo de Primus comenzó a fracturarse. Las órdenes ya no actuaban unidas: la Iglesia siguió sus propios designios, la Guardia priorizó el control interno, los consejeros buscaron mantener un equilibrio cada vez más frágil y las casas nobles empezaron a proteger únicamente sus intereses.</p>
    <p>Mientras tanto, <strong>Raventree Hall</strong>, la antigua capital destruida, comenzó a transformarse en algo peor que ruinas. Exploradores hablaban de zonas corrompidas, presencias extrañas y estructuras que parecían desafiar las leyes naturales. La ciudad se convirtió en un lugar maldito donde pocos entraban y menos aún regresaban.</p>
    <p>Con el poder central debilitado, el desorden comenzó a extenderse por el continente. Casas menores desobedecían al trono, los conflictos locales aumentaban y las rutas se llenaban de refugiados. Primus ya no enfrentaba un único enemigo, sino múltiples focos de inestabilidad.</p>`,
  },
  {
    num: 'Año 2',
    title: 'Rebeliones',
    imgs: ['/assets/images/lore/eras/ano2/1.png', '/assets/images/lore/eras/ano2/2.png', '/assets/images/lore/eras/ano2/3.png'],
    alt: 'Año 2 - Rebeliones',
    text: `<p>La debilidad percibida del nuevo rey desató una ola de rebeliones en todo el continente. Casas menores, pueblos fronterizos y facciones disidentes comenzaron a desafiar la autoridad de la corona.</p>
    <p>Algunas regiones dejaron de obedecer los decretos reales, mientras que otras cayeron en el saqueo constante. El reino comenzó a fragmentarse en territorios que sobrevivían por su cuenta.</p>
    <p>Entre los rebeldes surgieron grupos especialmente peligrosos, muchos de ellos liderados por <strong>magharyn renegados</strong> capaces de usar la magia como arma contra el propio reino, haciendo incluso alianzas con enemigos pasados como goblins y orcos.</p>
    <p>El bastión de la <strong>Orden Krieger</strong> fue asediado por fuerzas rebeldes muy superiores en número. Aunque resistieron, la batalla reveló una dura realidad: la orden ya no podía sostener el reino por sí sola. La pérdida del fragmento de poder debilitó sus anillos, reduciendo drásticamente su capacidad de combate. Y finalmente el Bastión Krieger cayó.</p>
    <p>Desde entonces, los <strong>Magharyn</strong>, liderados por <strong>Caelis</strong>, tuvieron que intervenir en múltiples frentes: sofocar rebeliones, proteger bastiones y escoltar refugiados. Pero su número era limitado, y Nidharrow se convirtió en un objetivo constante de ataques.</p>
    <p>Al finalizar el año, el reino se mantenía en pie no por su estructura política, sino por el sacrificio de unas pocas órdenes agotadas.</p>`,
  },
  {
    num: 'Año 3',
    title: 'Tormentas en el Norte',
    imgs: ['/assets/images/lore/eras/ano3/1.png', '/assets/images/lore/eras/ano3/2.png', '/assets/images/lore/eras/ano3/3.png'],
    alt: 'Año 3 - Tormentas en el Norte',
    text: `<p>Durante el tercer año la crisis alcanzó su punto más crítico. El Consejo de los Doce comenzó a fracturarse completamente y muchas órdenes reales eran ignoradas o desobedecidas.</p>
    <p>En el norte ocurrió una traición decisiva.</p>
    <p>La ciudad de <strong>Ravensvik</strong>, uno de los bastiones del reino, cayó bajo el control de la <strong>Casa Greycliff</strong>, iniciando una rebelión abierta que dividió a los <strong>Stormheilm</strong>.</p>
    <p>Una parte del pueblo del norte se unió a los rebeldes, mientras que otra permaneció fiel a los antiguos juramentos.</p>
    <p>Bajo el liderazgo de <strong>Mirna</strong> y el líder espiritual <strong>Saga</strong>, los Stormheilm leales reunieron a humanos, enanos y shazari para enfrentarse a los traidores en los campos nevados cercanos a Ravensvik. La batalla fue feroz, pero las fuerzas leales estaban superadas en número.</p>
    <p>Entonces ocurrió lo inesperado.</p>
    <p>Tras años de silencio, la <strong>Orden de la Luz</strong> reapareció desde el este, liderada por <strong>Kal&rsquo;ryn</strong> y <strong>Gabriel</strong>. Su llegada fue acompañada por un fenómeno divino que cambió el curso de la batalla.</p>
    <p>Con su intervención, el norte logró resistir.</p>
    <p>Aunque Ravensvik permaneció perdida y en ruinas, la alianza entre la Orden de la Luz y los Stormheilm es más fuerte que nunca y logró detener el caos de la rebelión, dejando al Norte en una situación precaria.</p>`,
  },
  {
    num: 'Año 4',
    title: 'El Despertar',
    imgs: ['/assets/images/lore/eras/ano4/1.png', '/assets/images/lore/eras/ano4/2.png', '/assets/images/lore/eras/ano4/3.png'],
    alt: 'Año 4 - El Despertar',
    text: `<p>Tras la caída de Ravensvik, Primus entró en una etapa de decadencia profunda. Nuevas rebeliones surgieron por todo el continente y el propio rey comenzó a desconfiar incluso de su consejo.</p>
    <p>Los pocos supervivientes de la <strong>Orden Krieger</strong>, liderados por <strong>Seralyth</strong>, siguieron apoyando los esfuerzos por aplacar las rebeliones, pero cada vez se debilitaban más. Con su castillo ya abandonado y el origen de su poder desvaneciéndose, sus pérdidas comenzaron a ser demasiado numerosas, y pesadas.</p>
    <p>Al mismo tiempo comenzó a expandirse la corrupción en el continente, regiones donde la vida se marchitaba y la magia se negaba a responder parecían extenderse como una infección en la misma tierra.</p>
    <p>Ante este panorama, <strong>Cyprian</strong> tomó una decisión decisiva: fundar una nueva capital. Así nació <strong>Azimra</strong>, levantada al oeste de <strong>Ash&rsquo;Torin</strong>, donde ahora se alzaba la gran <strong>Torre del Último Juramento</strong>, centro del estudio de <strong>Thae</strong>.</p>
    <p>Durante este año también ocurrió algo inquietante: <strong>Meiga</strong>, <strong>Erik</strong> y <strong>Red</strong> desaparecieron, sin ataques ni rumores sobre su paradero.</p>
    <p>Fue entonces cuando sucedió&hellip;</p>
    <p>Un evento que cambiaría la historia del mundo como era conocida, una inmensa explosión de Thae que parecería imposible para aquellos que la observasen y que a su paso reescribiría los eventos por los que el continente se regía. En el centro del continente, desde el inmenso volcán que allí dormita, una fuerte oleada del Thae fue desatada. La tierra se sacudió, el cielo tomó vida, llenándose de miles de auroras boreales que se extendieron por todo el continente de Primus.</p>
    <p>Un espectáculo de luces imposible que dejó a los habitantes de Primus boquiabiertos, y a la expectativa de lo que esto podría traer.</p>
    <p>¿Era acaso el fin? ¿Era un indicio de los dioses de Primus haciendo su presencia conocida? O acaso&hellip; ¿sería un nuevo principio?</p>
    <p>La esperanza llenó los corazones de aquellos que todavía creían en un mejor mañana; para otros, el temor de lo que aquello podía significar les infundió terror, pues el mundo se había sumido en tanta pérdida, dolor y decadencia, que aquellas luces podían presagiar algo mucho peor. Fuese lo que fuese, el continente fue a dormir, y entonces, todo cambió.</p>
    <p>Al amanecer del día siguiente quedó claro que algo fundamental había cambiado, no solo en el continente en sí, sino en el mismísimo destino de su gente.</p>`,
  },
  {
    num: 'Año 5',
    title: 'Azimra, un Nuevo Comienzo',
    imgs: ['/assets/images/lore/eras/ano5/1.png', '/assets/images/lore/eras/ano5/2.png', '/assets/images/lore/eras/ano5/3.png', '/assets/images/lore/eras/ano5/4.png'],
    alt: 'Año 5 - Azimra, un Nuevo Comienzo',
    text: `<p>Cinco años después de la desaparición en la pirámide, <strong>Azimra</strong> se había convertido en la nueva capital del reino. La ciudad fue construida gracias a refugiados, aliados extranjeros y pueblos de todo el continente.</p>
    <p>Las rebeliones continuaban, pero ahora la corona respondía con mayor estrategia y coordinación. <strong>Cyprian</strong> logró reconstruir el Consejo, incorporando nuevas figuras de poder. <strong>Meiga</strong>, erudita de la magia del reino; <strong>Red</strong> y su ingenio para crear los guardianes del reino, impresionantes criaturas al servicio de la corona y la capital contra la rebelión; y finalmente <strong>Eryk</strong>, legendario comandante de la antigua orden Krieger, quien con sus conocimientos y voluntad inquebrantable tomó el liderazgo de las fuerzas militares del reino. Así entonces, el reino comenzó a estabilizarse, pero una nueva amenaza apareció de entre las sombras.</p>
    <p>Nadie sabe de dónde vienen, ni por qué aparecieron; sin embargo, los rastros fueron claros. Caravanas atacadas de forma brutal y sangrienta en el sur; cadáveres marchitos y paralizados en un pánico casi palpable cerca de las ruinas de Raventree. Tierras que se marchitaban sin explicación. El <strong>Thae</strong> parecía responder ante el caos, la muerte, y la pérdida de equilibrio en el reino: las corrupciones avanzaban por el continente, y ya nada era seguro.</p>
    <p>Estas fuerzas no respondían a ningún enemigo conocido. No buscaban conquistar ni gobernar. Solo consumir.</p>
    <p>Así terminó el quinto año.</p>
    <p>Primus seguía hundido en guerras, rebeliones y catástrofes. Los rebeldes y la corona batiéndose en combate por el control del territorio. Azimra se alzaba como símbolo de reconstrucción y erudición, bajo la mirada de la Torre del Último Juramento, y los conocimientos de la muerte sobre los que estos presidían.</p>
    <p>Pero más allá de las tierras del reino, algo más había despertado en el mundo. Y solo los aventureros de Primus podrán decidir su destino.</p>`,
  },
]

const CIUDADES = [
  { id: 'jorvik', name: 'Jörvik', sub: 'La Fortaleza del Norte', px: '14.17%', py: '31.30%' },
  { id: 'skalford', name: 'Skalford', sub: 'Donde la Justicia Tiene Precio', px: '83.75%', py: '10.80%' },
  { id: 'ruinas-ravensvik', name: 'Ruinas Ravensvik', sub: 'La Última Frontera Olvidada', px: '66.85%', py: '11.50%' },
  { id: 'harrowfield', name: 'Harrowfield', sub: 'Los Campos que Nunca Descansan', px: '48.00%', py: '56.00%' },
  { id: 'ashbourne', name: 'Ashbourne', sub: 'La Ciudad de las Cenizas', px: '60.90%', py: '48.25%' },
  { id: 'aldea-akanthal', name: "Aldea Akan'thal", sub: 'El Refugio de los Olvidados', px: '46.70%', py: '81.00%' },
  { id: 'murun', name: 'Murun', sub: 'La Ciudad del Este Silencioso', px: '47.85%', py: '61.35%' },
  { id: 'azimra', name: 'Azimra', sub: 'El Nuevo Comienzo', px: '44.00%', py: '67.44%' },
  { id: 'raventree-hill', name: 'Ruinas de Raventree Hall', sub: 'Las ruinas de la antigua capital', px: '42.75%', py: '47.45%' },
  { id: 'ashtorin', name: "Ash'Torin", sub: 'El Enclave del Silencio Ardiente', px: '52.80%', py: '66.50%' },
  { id: 'ruinas-dolgaran', name: 'Ruinas Dol-Garan', sub: 'Lo Que Quedó Tras la Caída', px: '73.70%', py: '35.15%' },
]

function chapterImages(item) {
  if (item.imgs && item.imgs.length > 0) return item.imgs
  if (item.img) return [item.img]
  return null
}

function AnoGallery({ imgs, alt }) {
  if (!imgs || imgs.length === 0) {
    return <div className="ano-gallery-placeholder" aria-label="Imágenes próximamente" />
  }
  const count = imgs.length
  if (count === 1) {
    return (
      <div className="ano-gallery ano-gallery--1">
        <img src={imgs[0]} alt={alt} loading="lazy" decoding="async" />
      </div>
    )
  }
  if (count === 2) {
    return (
      <div className="ano-gallery ano-gallery--2">
        {imgs.map((src, i) => (
          <img key={i} src={src} alt={`${alt} ${i + 1}`} loading="lazy" decoding="async" />
        ))}
      </div>
    )
  }
  if (count === 3) {
    return (
      <div className="ano-gallery ano-gallery--3">
        <img className="ano-gallery-main" src={imgs[0]} alt={`${alt} 1`} loading="lazy" decoding="async" />
        <img src={imgs[1]} alt={`${alt} 2`} loading="lazy" decoding="async" />
        <img src={imgs[2]} alt={`${alt} 3`} loading="lazy" decoding="async" />
      </div>
    )
  }
  return (
    <div className="ano-gallery ano-gallery--4">
      {imgs.map((src, i) => (
        <img key={i} src={src} alt={`${alt} ${i + 1}`} loading="lazy" decoding="async" />
      ))}
    </div>
  )
}

function ChronicleTimeline({ items }) {
  const shellRef = useRef(null)
  const blockRefs = useRef([])
  const [spineFill, setSpineFill] = useState(0)
  const [activeIdx, setActiveIdx] = useState(0)

  const updateSpine = useCallback(() => {
    const shell = shellRef.current
    if (!shell) return
    const rect = shell.getBoundingClientRect()
    const vh = window.innerHeight
    const readY = vh * 0.38
    const h = rect.height
    if (h < 1) return
    let fill = (readY - rect.top) / h
    fill = Math.max(0, Math.min(1, fill))
    setSpineFill(fill)

    const blocks = blockRefs.current.filter(Boolean)
    let idx = 0
    for (let i = 0; i < blocks.length; i++) {
      const br = blocks[i].getBoundingClientRect()
      if (br.top <= readY) idx = i
    }
    setActiveIdx(idx)
  }, [])

  useEffect(() => {
    blockRefs.current = items.map(() => null)
  }, [items])

  useLayoutEffect(() => {
    const shell = shellRef.current
    if (!shell) return
    let ticking = false
    const tick = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        ticking = false
        updateSpine()
      })
    }
    updateSpine()
    window.addEventListener('scroll', tick, { passive: true })
    window.addEventListener('resize', tick, { passive: true })
    const ro = new ResizeObserver(tick)
    ro.observe(shell)
    return () => {
      window.removeEventListener('scroll', tick)
      window.removeEventListener('resize', tick)
      ro.disconnect()
    }
  }, [updateSpine, items])

  return (
    <div className="chronicle-timeline-shell" ref={shellRef}>
      <div className="chronicle-spine" aria-hidden="true">
        <div className="chronicle-spine-rail" />
        <div
          className="chronicle-spine-fill"
          style={{ transform: `scaleY(${spineFill})` }}
        />
      </div>
      <div className="caida-timeline">
        {items.map((item, idx) => (
          <div
            key={`${item.num}-${idx}`}
            className={`ano-block chronicle-chapter${activeIdx === idx ? ' chronicle-chapter--active' : ''}${activeIdx > idx ? ' chronicle-chapter--past' : ''}`}
            ref={(el) => { blockRefs.current[idx] = el }}
          >
            <div className="chronicle-marker" title={item.num}>
              <span className="chronicle-marker-inner" />
            </div>
            <div className="ano-header">
              <div className="ano-num">{item.num}</div>
              <h2 className="ano-title">{item.title}</h2>
              <div className="ano-divider"><span>✦</span></div>
            </div>
            <AnoGallery imgs={chapterImages(item)} alt={item.alt} />
            <div className="ano-body">
              {item.text
                ? <div className="detail-text" dangerouslySetInnerHTML={{ __html: item.text }} />
                : <p className="era-text-placeholder">Información próximamente...</p>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ChronicleTabs({ items, ariaLabel }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const activeItem = items[activeIdx] || items[0]

  if (!activeItem) return null

  return (
    <div
      className="caida-year-tabs-wrap"
      style={{ '--active-year-index': activeIdx, '--year-count': items.length }}
    >
      <div className="caida-year-tabs" role="tablist" aria-label={ariaLabel}>
        {items.map((item, idx) => {
          const isActive = activeIdx === idx
          return (
            <button
              key={item.num}
              type="button"
              className={`caida-year-tab${isActive ? ' active' : ''}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`caida-year-panel-${idx}`}
              id={`caida-year-tab-${idx}`}
              onClick={() => setActiveIdx(idx)}
            >
              <span>{item.num}</span>
              <strong>{item.title}</strong>
            </button>
          )
        })}
        <span className="caida-year-timeline-marker" aria-hidden="true" />
      </div>

      <div
        className="caida-year-panel"
        role="tabpanel"
        id={`caida-year-panel-${activeIdx}`}
        aria-labelledby={`caida-year-tab-${activeIdx}`}
      >
        <div className="ano-block caida-year-block">
          <div className="ano-header">
            <div className="ano-num">{activeItem.num}</div>
            <h2 className="ano-title">{activeItem.title}</h2>
            <div className="ano-divider"><span>✦</span></div>
          </div>
          <AnoGallery imgs={chapterImages(activeItem)} alt={activeItem.alt} />
          <div className="ano-body">
            {activeItem.text
              ? <div className="detail-text" dangerouslySetInnerHTML={{ __html: activeItem.text }} />
              : <p className="era-text-placeholder">Información próximamente...</p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Historia() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('antiguedad')
  const [modalCiudad, setModalCiudad] = useState(null)
  const [showTabsReturn, setShowTabsReturn] = useState(false)
  const [tabsReturnBottom, setTabsReturnBottom] = useState(32)
  const activeCiudadIndex = modalCiudad ? CIUDADES.findIndex((c) => c.id === modalCiudad) : -1
  const activeCiudad = modalCiudad ? CIUDADES_DATA[modalCiudad] : null

  useEffect(() => {
    const updateTabsReturn = () => {
      const tabs = document.getElementById('historia-tabs')
      const footer = document.querySelector('footer')
      const baseBottom = window.matchMedia('(max-width: 720px)').matches ? 18 : 32
      const footerGap = 12

      if (tabs) {
        setShowTabsReturn(tabs.getBoundingClientRect().bottom < 0)
      }

      if (!footer) {
        setTabsReturnBottom(baseBottom)
        return
      }

      const footerTop = footer.getBoundingClientRect().top
      const footerAvoidanceBottom = window.innerHeight - footerTop + footerGap
      setTabsReturnBottom(Math.max(baseBottom, footerAvoidanceBottom))
    }

    updateTabsReturn()
    window.addEventListener('scroll', updateTabsReturn, { passive: true })
    window.addEventListener('resize', updateTabsReturn)
    return () => {
      window.removeEventListener('scroll', updateTabsReturn)
      window.removeEventListener('resize', updateTabsReturn)
    }
  }, [])

  const showPrevCiudad = useCallback(() => {
    setModalCiudad((currentId) => {
      const currentIndex = CIUDADES.findIndex((c) => c.id === currentId)
      const prevIndex = currentIndex <= 0 ? CIUDADES.length - 1 : currentIndex - 1
      return CIUDADES[prevIndex].id
    })
  }, [])

  const showNextCiudad = useCallback(() => {
    setModalCiudad((currentId) => {
      const currentIndex = CIUDADES.findIndex((c) => c.id === currentId)
      const nextIndex = currentIndex < 0 || currentIndex >= CIUDADES.length - 1 ? 0 : currentIndex + 1
      return CIUDADES[nextIndex].id
    })
  }, [])

  const tabs = [
    { id: 'antiguedad', label: 'Crónicas de Antaño' },
    { id: 'caida', label: 'La Caída del Cuervo' },
    { id: 'ciudades', label: 'Geografía del Reino' },
  ]

  return (
    <div className="page active">
      <div className="detail-hero">
        <div className="detail-hero-bg" style={{ backgroundImage: "url('/assets/images/legacy/938f05-156a74c1aa9a4b06b6a5da69a955e632-mv2.png')", backgroundPosition: 'center center' }} />
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <div className="breadcrumb" onClick={() => navigate('/lore')} style={{ cursor: 'pointer' }}>
            Lore <span>/ Historia</span>
          </div>
          <h1>Historia de Primus</h1>
          <span className="detail-tag">Cinco Eras</span>
        </div>
      </div>

      <div className="detail-body">
        <span className="back-btn" onClick={() => navigate('/lore')} style={{ cursor: 'pointer' }}>&#8592; Volver al Lore</span>

        <div className="lore-tabs" id="historia-tabs">
          {tabs.map((t) => (
            <div
              key={t.id}
              className={`lore-tab${activeTab === t.id ? ' active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </div>
          ))}
        </div>

        {activeTab === 'antiguedad' && (
          <div className="lore-panel active">
            <ChronicleTabs items={ERAS} ariaLabel="Eras de las Crónicas de Antaño" />
          </div>
        )}

        {activeTab === 'caida' && (
          <div className="lore-panel active">
            <ChronicleTabs items={ANOS} ariaLabel="Años de La Caída del Cuervo" />
          </div>
        )}

        {activeTab === 'ciudades' && (
          <div className="lore-panel active">
            <div className="mapa-wrap">
              <img src="/assets/images/common/map.png" className="mapa-img" alt="Mapa de Primus" draggable="false" />
              {CIUDADES.map((c) => (
                <div
                  key={c.id}
                  className="ciudad-pin"
                  style={{ '--px': c.px, '--py': c.py }}
                  onClick={() => setModalCiudad(c.id)}
                  title={c.name}
                >
                  <div className="ciudad-pin-dot" />
                  <div className="ciudad-tooltip">
                    <strong>{c.name}</strong>
                    <span>{c.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {activeCiudad && activeCiudadIndex >= 0 && (
        <CiudadModal
          ciudad={activeCiudad}
          onClose={() => setModalCiudad(null)}
          onPrev={showPrevCiudad}
          onNext={showNextCiudad}
        />
      )}

      {createPortal(
        <button
          className={`historia-tabs-return${showTabsReturn ? ' is-visible' : ''}`}
          type="button"
          style={{ '--historia-tabs-return-bottom': `${tabsReturnBottom}px` }}
          onClick={() => document.getElementById('historia-tabs')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        >
          <span>↑</span>
          Secciones
        </button>,
        document.body
      )}

      <Footer />
    </div>
  )
}
