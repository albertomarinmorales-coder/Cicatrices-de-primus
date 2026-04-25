import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import RosterGridHeader from '../components/RosterGridHeader'
import { VELUM_IMG } from '../data/clases'
import { useScrollReveal, useCardGlow } from '../hooks/useScrollReveal'

export default function VelumsPage() {
  const navigate = useNavigate()
  useScrollReveal('velums')
  useCardGlow('velums')

  return (
    <div className="page active" id="page-velums">
      <RosterGridHeader title="Velums" subtitle="Sendas compartidas" />

      <div className="detail-body">
        <div className="breadcrumb" onClick={() => navigate('/clases')}>
          Clases <span>/ Velums</span>
        </div>
        <span className="back-btn" onClick={() => navigate('/clases')}>&#8592; Volver a Clases</span>

        <div className="section">
          <h2 className="section-title">Los Azharn</h2>
          <div className="section-underline"><i className="fa-solid fa-music" /></div>

          <div className="velums-codex-panel">
            <div className="lore-card-img-wrap velums-hub-hero-wrap">
              <img
                src={VELUM_IMG.velumsHero}
                alt="Los Azharn — entre el silencio y la música"
                className="velums-hero-single"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>

            <header className="velums-chapter-head">
              <span className="velums-chapter-ornament" aria-hidden>✦</span>
              <h3 className="velums-elegant-title">Caminantes del Umbral</h3>
              <span className="velums-chapter-ornament" aria-hidden>✦</span>
            </header>

            <article className="velums-azharn-text detail-text">
              <div className="velums-azharn-block">
                <p className="tier-desc">
                  Donde otros retroceden ante el silencio de la muerte, los Azharn avanzan. No lo
                  desafían… lo aceptan. En ese vacío donde todo termina, ellos encuentran propósito.
                </p>
                <p className="tier-desc">
                  Son seres marcados por un destino irrevocable, ligados a lo invisible, a lo olvidado, a
                  aquello que se niega a desaparecer. No escuchan a los muertos como un don, sino como
                  una condena que late en su sangre. Susurros sin descanso, voces que no conocen
                  reposo. A través del viento y la música, los ecos de los caídos se aferran a ellos,
                  guiando sus pasos… o arrastrándolos.
                </p>
              </div>

              <div className="velums-azharn-refrain" aria-label="Lema">
                <p>Nunca están solos.</p>
              </div>

              <div className="velums-azharn-block">
                <p className="tier-desc">
                  El aire a su alrededor vibra con presencias: melodías que nacen de recuerdos
                  marchitos, lamentos que desgarran la cordura, armonías que no pertenecen al mundo de
                  los vivos. Para un Azharn, la música no es arte. Es un umbral. Un lenguaje antiguo
                  con el más allá.
                </p>
                <p className="tier-desc">
                  Son los intérpretes de lo inconcluso. Ejecutores de voluntades que la muerte no
                  logró apagar. Sanadores de penas que jamás encontraron descanso. Vengadores de
                  agravios enterrados en el olvido… o marionetas de voces que susurran mentiras con la
                  forma de promesas.
                </p>
                <p className="tier-desc">
                  El origen de su poder es un secreto que ni siquiera ellos comprenden del todo. Su
                  sangre no los corrompe… los transforma. Los convierte en entidades suspendidas
                  entre dos mundos, capaces de mirar donde otros enloquecerían al instante.
                </p>
              </div>

              <div className="velums-azharn-block velums-azharn-block--trio">
                <p className="tier-desc">Pero ningún mortal puede sostener esa mirada eternamente.</p>
                <p className="tier-desc">A veces, el umbral devuelve la mirada.</p>
                <p className="tier-desc">Y cuando eso ocurre, no todos logran resistir.</p>
              </div>

              <div className="velums-azharn-block">
                <p className="tier-desc">
                  Los Azharn no buscan gloria. La gloria es para los vivos. Lo suyo es algo más
                  antiguo, más frío. Su existencia es un equilibrio imposible, una danza al filo de lo
                  inevitable. Donde otros apartan la vista del final, ellos lo contemplan… y
                  responden.
                </p>
                <p className="tier-desc tier-desc--closing">
                  Cuando el silencio se alza para devorarlo todo, los Azharn no huyen.
                </p>
              </div>

              <div className="velums-azharn-coda" aria-label="Cierre">
                <p>Ellos cantan.</p>
                <p>Ellos danzan.</p>
                <p>Y el mundo se rompe con ellos.</p>
              </div>
            </article>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title velums-choose-title">Elegir senda</h2>
          <div className="section-underline"><i className="fa-solid fa-music" /></div>
          <div className="velums-choose-grid">
            <div
              className="raza-card lore-card"
              onClick={() => navigate('/clase-velum-caedis')}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') navigate('/clase-velum-caedis') }}
            >
              <div className="raza-card-img-wrap">
                <img
                  src={VELUM_IMG.caedisAvatar}
                  alt="Velum Caedis"
                  className="raza-card-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="raza-card-body">
                <h3>Velum Caedis</h3>
                <p className="raza-card-role">Burst DPS</p>
              </div>
            </div>
            <div
              className="raza-card lore-card"
              onClick={() => navigate('/clase-velum-cantoris')}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') navigate('/clase-velum-cantoris') }}
            >
              <div className="raza-card-img-wrap">
                <img
                  src={VELUM_IMG.cantorisAvatar}
                  alt="Velum Cantoris"
                  className="raza-card-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="raza-card-body">
                <h3>Velum Cantoris</h3>
                <p className="raza-card-role">Buffer / Debuffer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
