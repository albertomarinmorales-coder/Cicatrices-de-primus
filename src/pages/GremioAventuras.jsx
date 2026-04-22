import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

export default function GremioAventuras() {
  const navigate = useNavigate()
  return (
    <div className="page active">
      <div className="detail-hero">
        <div className="detail-hero-bg" style={{ backgroundImage: "url('/images/aventureros.webp')" }} />
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <div className="breadcrumb" onClick={() => navigate('/gremios')} style={{ cursor: 'pointer' }}>
            Gremios <span>/ Gremio de Aventuras</span>
          </div>
          <h1>Gremio de Aventuras</h1>
        </div>
      </div>

      <div className="detail-body">
        <span className="back-btn" onClick={() => navigate('/gremios')} style={{ cursor: 'pointer' }}>Volver a Gremios</span>

        <div className="detail-text" style={{ marginTop: '2rem' }}>
          <p style={{ fontStyle: 'italic', fontSize: '1.2rem', borderLeft: '4px solid var(--gold)', paddingLeft: '1rem', color: 'var(--gold)', marginBottom: '2rem' }}>
            "Un grupo desordenado sobrevive una vez. Una formación entrenada vuelve a casa como una leyenda."
          </p>

          <p>Bienvenido al nuevo Gremio de Aventuras, un espacio pensado para quienes buscan participar, disfrutar y vivir
            historias épicas sin depender de horarios rígidos ni largas esperas.</p>

          <p>Tras escuchar propuestas e inquietudes de la comunidad, hemos trabajado en un sistema más dinámico y
            accesible, donde pequeños grupos de aventureros podrán adentrarse en las peligrosas tierras de Primus, superar
            misiones, crecer en poder y desarrollar la historia de sus personajes con total libertad creativa.</p>

          <p>Cada expedición será una oportunidad para colaborar, improvisar, combatir y dejar huella. No importa si
            dispones de mucho o poco tiempo: la idea es que todos puedan formar parte de la experiencia y avanzar a su
            ritmo.</p>

          <p>Para explicar el funcionamiento completo del sistema, normas, mecánicas y detalles importantes, hemos
            preparado una guía en Notion que encontrarás justo debajo.</p>

          <p>Consulta toda la información en el siguiente enlace y prepárate para comenzar la aventura.</p>

          <div style={{ marginTop: '3rem', marginBottom: '2rem', textAlign: 'center' }}>
            <a
              className="btn-primary"
              href="https://www.notion.so/Gremio-de-aventuras-3388d8f1501f8041b9e9d8c52f01cae9"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '1rem 2rem', fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', textDecoration: 'none' }}
            >
              <i className="fa-solid fa-scroll" />
              Guía: Gremio de Aventuras
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
