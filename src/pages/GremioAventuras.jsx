import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function GremioAventuras() {
  const navigate = useNavigate()
  useScrollReveal('gremio-aventuras')
  return (
    <div className="page active" id="page-gremio-aventuras">
      <div className="detail-hero">
        <div className="detail-hero-bg detail-hero-bg--gremio-aventuras" aria-hidden="true" />
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <div className="breadcrumb" onClick={() => navigate('/gremios')} style={{ cursor: 'pointer' }}>
            Gremios <span>/ Gremio de Aventuras</span>
          </div>
          <h1>Gremio de Aventuras</h1>
        </div>
      </div>

      <div className="detail-body">
        <span className="back-btn" onClick={() => navigate('/gremios')} style={{ cursor: 'pointer' }}>&#8592; Volver a Gremios</span>

        <div className="gremio-aventuras-card">
          <div className="gremio-aventuras-card__head">
            <i className="ra ra-compass" aria-hidden />
            <span>A la aventura</span>
          </div>
          <div className="gremio-aventuras-card__inner">
            <blockquote className="gremio-aventuras-card__quote">
              &ldquo;Un grupo desordenado sobrevive una vez. Una formación entrenada vuelve a casa como una leyenda.&rdquo;
            </blockquote>

            <div className="detail-text gremio-aventuras-card__prose">
              <p>
                Bienvenido al nuevo Gremio de Aventuras, un espacio pensado para quienes buscan participar, disfrutar y vivir
                historias épicas sin depender de horarios rígidos ni largas esperas.
              </p>
              <p>
                Tras escuchar propuestas e inquietudes de la comunidad, hemos trabajado en un sistema más dinámico y
                accesible, donde pequeños grupos de aventureros podrán adentrarse en las peligrosas tierras de Primus, superar
                misiones, crecer en poder y desarrollar la historia de sus personajes con total libertad creativa.
              </p>
              <p>
                Cada expedición será una oportunidad para colaborar, improvisar, combatir y dejar huella. No importa si
                dispones de mucho o poco tiempo: la idea es que todos puedan formar parte de la experiencia y avanzar a su
                ritmo.
              </p>
              <p>
                Para explicar el funcionamiento completo del sistema, normas, mecánicas y detalles importantes, hemos
                preparado una guía en Notion que encontrarás justo debajo.
              </p>
              <p>Consulta toda la información en el siguiente enlace y prepárate para comenzar la aventura.</p>
            </div>
          </div>
          <div className="gremio-aventuras-card__foot">
            <a
              className="btn-primary gremio-aventuras-card__btn"
              href="https://www.notion.so/Gremio-de-aventuras-3388d8f1501f8041b9e9d8c52f01cae9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ra ra-scroll-unfurled" aria-hidden />
              Guía: Gremio de Aventuras
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
