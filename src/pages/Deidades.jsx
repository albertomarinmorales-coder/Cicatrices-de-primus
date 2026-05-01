import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { auroraLock } from '../lib/auroraLock'

const DEITY_COLORS = {
  drashet: '#6e4ba3',
  kheos:   '#f1e9ba',
  thronus: '#c9a84c',
  zhecher: '#960f2f',
  zhenra:  '#3d9550',
}

const DEIDADES = [
  {
    id: 'drashet',
    name: 'DRASHET',
    img: '/assets/images/lore/deities/drashet.png',
    quote: '"Como el mar que una vez fui, no juzgo lo que recibo; solo sostengo el eco de tu última canción mientras cruzas el velo hacia mi silencio".',
    desc: `Antes conocido como Nazhur, deidad del mar profundo, los secretos sumergidos y las tormentas marítimas del
      sur, su existencia estaba ligada al ciclo inevitable de abundancia y pérdida. Colosal y temido, de piel
      azul verdosa y ojos morados brillantes, encarnaba la dualidad del océano: generoso y devastador. Sus
      fieles, los Hijos del Oasis Hundido, honraban ese equilibrio a través de rituales de inmersión y visiones,
      sabiendo que el mar daba... pero también reclamaba. No fue hasta que su hermano Zhecher se presentó ante los
      mortales, que su verdadero nombre y naturaleza nos fue revelado.
      <br/><br/>
      Con el paso de las eras, su esencia cambió. Hoy es conocido como Drashet, deidad de la muerte, una entidad
      dual —mitad masculina, mitad femenina— que representa el tránsito inevitable entre la vida y lo que yace
      más allá del velo. Ya no es solo océano y sus secretos, sino silencio, final y transformación. Sus
      primeros seguidores aprendieron a usar la música como puente, comunicándose con las almas que habitan el
      otro lado, un don permitido por la propia deidad. Sin embargo, en la actualidad, otros buscan ir más allá:
      manipular la muerte misma, desafiando el orden natural en busca de poder. Aunque su nombre fue revelado
      por uno de sus hermanos, Drashet rara vez se manifiesta de forma directa; aun así, su presencia es
      palpable, y quienes lo siguen aseguran poder escuchar su voz. Sobre su fragmento divino, los rumores son
      inciertos: algunos creen que fue robado, mientras otros sostienen que el propio Drashet lo oculta, lejos
      de manos indignas.`,
  },
  {
    id: 'kheos',
    name: 'KHEOS',
    img: '/assets/images/lore/deities/kheos.png',
    quote: '"Que tiemblen los cimientos de lo eterno, pues soy el rayo que rompe los pactos y la tormenta que nace de las cenizas de vuestro orden".',
    desc: `Antes de ser llamado por su verdadero nombre, fue conocido como Vorgrimm, una deidad ancestral venerada y
      temida en las tierras heladas del norte, símbolo del fin y el renacimiento. Su figura —un coloso cubierto
      de pieles y huesos, con cuernos de alce, máscara de hielo negro y relámpagos azules recorriendo sus venas—
      inspiraba tanto devoción como terror. Sus fieles grababan su símbolo, una espiral rota con un ojo
      sangrante, en huesos y escudos, y veían en las tormentas sus susurros. En su nombre entraban en frenesí,
      rompiendo juramentos, derramando sangre y desatando guerras tribales. Se manifestaba como gigante, como
      anciano o como una aurora boreal sangrante, y según los relatos más antiguos, fue el primero en quebrar el
      Gran Pacto de los Cielos, desatando así el conflicto entre dioses.
      <br/><br/>
      Con el paso de las eras, su naturaleza se reveló con mayor crudeza bajo el nombre de Kheos, dios del caos,
      la tormenta y el rayo. Ya no es solo presagio de cambio, sino la fuerza misma que lo provoca: violento,
      indomable y absoluto. Sus seguidores, asentados en las montañas del norte, son guerreros endurecidos,
      devotos del combate y del poder que desciende como trueno desde los cielos. En él ven tanto la furia de la
      tormenta como la sabiduría brutal de quien ha visto caer mundos y levantarse otros. Su fragmento, antaño
      perdido en un antiguo bastión enano, fue recuperado y hoy se encuentra oculto en lo más profundo de sus
      dominios, protegido por sus más fieles guerreros. Allí, entre relámpagos perpetuos y ecos de guerra, Kheos
      observa... esperando el momento en que el mundo vuelva a quebrarse bajo su voluntad.`,
  },
  {
    id: 'thronus',
    name: 'THRONUS',
    img: '/assets/images/lore/deities/thronus.png',
    quote: '"La compasión fue el susurro de un ayer que ya no existe; hoy, solo el fuego del orden purificará la ponzoña de este mundo".',
    desc: `Antes conocida como Eselia, deidad de la luz pura, la revelación interior y la sabiduría silenciosa, esta
      entidad guiaba sin imponerse. Su presencia era sutil: una luz cálida, una voz en sueños, una niebla dorada
      que acompañaba a quienes buscaban respuestas dentro de sí mismos. Su culto no exigía devoción abierta,
      sino actos de compasión y equilibrio. Sin embargo, en la Sexta Era, cuando los dioses se revelaron
      directamente ante los mortales, su naturaleza cambió. Eselia dejó de ser un susurro y se manifestó como
      Thronus, adoptando una forma más firme, más severa, más absoluta.
      <br/><br/>
      Como Thronus, se convirtió en el Dios del Orden y la Luz, intolerante ante la corrupción que consume el
      mundo. Ya no busca comprenderla, sino erradicarla mediante la purificación, y sus seguidores empuñan
      llamas sagradas para cumplir ese propósito. Su última aparición ocurrió tras la caída de Raventree Hall,
      cuando ordenó a sus fieles retirarse al sur, lejos de lo que consideraba una tierra perdida. Su fragmento
      de poder, resguardado en la capital, fue robado, y desde entonces su orden lo busca incansablemente,
      convencida de que su recuperación es clave para restaurar el orden que el mundo ha perdido.`,
  },
  {
    id: 'zhecher',
    name: 'ZHECHER',
    img: '/assets/images/lore/deities/zhecher.png',
    quote: '"La magia no es un don para los devotos, sino la geometría del poder revelada solo a quienes se atreven a mirar tras el velo de la realidad".',
    desc: `Zhecher es la diosa del poder y de la magia misma, la fuente silenciosa de la que emana, en parte, la
      fuerza de los guerreros que recorren el continente. Hermana menor entre ellos, ha permanecido oculta
      durante eras, sin culto ni templos, ajena a la adoración de los mortales. Fría, calculadora y de una
      inteligencia insondable, nunca buscó seguidores; sin embargo, aquellos pocos que han sido tocados por su
      esencia se han convertido en figuras extraordinarias: grandes guerreros o maestros del thae, capaces de
      moldear la magia con una precisión casi imposible.
      <br/><br/>
      En tiempos recientes, su aislamiento llegó a su fin. Aventureros descubrieron una puerta hacia su dominio,
      un plano oculto donde Zhecher resguardaba su fragmento. Allí se manifestó ante ellos y reveló verdades que
      sacudieron al mundo: los verdaderos nombres de los dioses y la naturaleza real que se esconde tras cada
      uno. Se dice que, en ese encuentro, entregó su fragmento a aquellos que habían sido marcados con su poder.
      Desde entonces, su presencia ha desaparecido una vez más, y su paradero y el de su fragmento es
      desconocido... aunque las consecuencias de sus revelaciones ya han comenzado a cambiar el destino de todos.`,
  },
  {
    id: 'zhenra',
    name: 'ZHENRA',
    img: '/assets/images/lore/deities/zhenra.png',
    quote: '"Escuchad el rugido en el viento y buscad la vida en el brote que nace del incendio, pues aunque me oculte, la tierra jamás olvida a los suyos".',
    desc: `Zhenra es la diosa de la naturaleza, la fertilidad y la libertad instintiva, una fuerza viva que nunca ha
      ocultado su verdadero nombre ni su propósito. Se manifiesta como una mujer de piel terrosa, con cabello de
      raíces y musgo en los brazos, aunque también adopta formas animales o vegetales según la necesidad del
      mundo. No posee templos ni tronos: la tierra misma es su santuario, y sus símbolos —como una huella de la
      que brota un árbol— reflejan el ciclo eterno de vida, muerte y renacimiento. Sus antiguos seguidores,
      sabios nómadas, vivían en armonía con ese equilibrio, entendiendo que la naturaleza no es solo paz, sino
      también violencia: la tormenta que arrasa, el terremoto que quiebra la tierra o la fiera que caza para
      sobrevivir. Zhenra no habla con palabras; se manifiesta en lo esencial, en el brote tras el incendio o en
      el rugido de una madre salvaje defendiendo a los suyos.
      <br/><br/>
      En los tiempos recientes, ese equilibrio fue quebrado. Su Arboleda Sagrada fue atacada repetidas veces, y
      en uno de esos asaltos la reina cayó, defendiendo el santuario hasta su último aliento. Cuando los no
      muertos profanaron nuevamente aquel lugar, algo cambió: Zhenra ya no respondió. Muchos creen que la diosa
      se retiró, ocultándose para proteger su fragmento de poder ante una amenaza que incluso ella no podía
      enfrentar abiertamente. Desde entonces, sus seguidores vagan en desesperación contenida, intentando
      restaurar el equilibrio del continente y resguardar los vestigios de su presencia, con la esperanza de
      que, cuando la tierra vuelva a estar en armonía... Zhenra regrese.`,
  },
]

export default function Deidades() {
  const navigate = useNavigate()

  useEffect(() => {
    const ratios = {}
    const cards = document.querySelectorAll('.deity-card')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        const id = e.target.dataset.deityId
        ratios[id] = e.intersectionRatio
      })
      // Pick the deity most visible in the viewport
      const best = Object.entries(ratios).sort((a, b) => b[1] - a[1])[0]
      if (best && best[1] > 0.15) {
        auroraLock.active = true
        auroraLock.color  = DEITY_COLORS[best[0]] || null
        document.documentElement.style.setProperty('--theme-c2', auroraLock.color)
        document.documentElement.style.setProperty('--theme-c3', auroraLock.color)
      } else {
        auroraLock.active = false
        auroraLock.color  = null
      }
    }, { threshold: [0, 0.15, 0.3, 0.5, 0.75, 1] })

    cards.forEach(c => observer.observe(c))
    return () => {
      observer.disconnect()
      auroraLock.active = false
      auroraLock.color  = null
    }
  }, [])

  return (
    <div className="page active" id="page-deidades">
      <div className="detail-hero deidades-hero">
        <div className="deidades-hero-mosaic" aria-hidden="true">
          {DEIDADES.map((d) => (
            <div key={d.id} className={`deidades-hero-tile deity-hero-tile--${d.id}`} />
          ))}
        </div>
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <div className="breadcrumb" onClick={() => navigate('/lore')} style={{ cursor: 'pointer' }}>
            Lore <span>/ Deidades</span>
          </div>
          <h1>Deidades</h1>
          <span className="detail-tag">Los Dioses de Primus</span>
        </div>
      </div>

      <div className="detail-body">
        <span className="back-btn" onClick={() => navigate('/lore')} style={{ cursor: 'pointer' }}>&#8592; Volver al Lore</span>

        <div className="deidades-list">
          {DEIDADES.map((d) => (
            <article
              key={d.id}
              className={`deity-card deity-${d.id}`}
              data-deity-id={d.id}
            >
              <div className="deity-card-frame">
                <div className="deity-portrait">
                  <img src={d.img} alt={d.name} loading="lazy" decoding="async" />
                </div>
                <div className="deity-info">
                  <h2 className="deity-name">{d.name}</h2>
                  <blockquote className="deity-quote">{d.quote}</blockquote>
                  <div className="deity-desc" dangerouslySetInnerHTML={{ __html: d.desc }} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
