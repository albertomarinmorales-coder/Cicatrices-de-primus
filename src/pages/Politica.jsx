import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Politica() {
  const navigate = useNavigate()
  return (
    <div className="page active">
      <div className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: "url('/assets/images/legacy/guilds-bento.png')" }} />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <h1>Política</h1>
          <p>Las estructuras de poder y los territorios de Primus</p>
        </div>
      </div>

      <div className="section">
        <div className="detail-body" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <span className="back-btn" onClick={() => navigate('/mundo')} style={{ display: 'block', textAlign: 'left' }}>
            &#8592; Volver a Mundo
          </span>
          <h2 className="section-title">En Construcción</h2>
          <div className="section-underline"><i className="fa-solid fa-landmark" /></div>
          <p className="detail-text" style={{ maxWidth: '800px', margin: '2rem auto' }}>
            Los tratados, alianzas y disputas territoriales que rigen el mundo de Primus
            están siendo documentados. Pronto podrás explorar los reinos, sus gobernantes
            y las intrigas que mueven los hilos del poder.
          </p>
          <div className="lore-card" style={{ margin: '3rem auto', maxWidth: '400px', cursor: 'inherit' }}>
            <div className="lore-card-img-wrap" style={{
              background: 'repeating-linear-gradient(45deg, transparent, transparent 14px, rgba(201,168,76,0.09) 14px, rgba(201,168,76,0.09) 15px), linear-gradient(135deg, #0a0f18 0%, #1a1610 50%, #0a0f18 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              height: '240px',
              borderBottom: '1px solid var(--gold)',
            }}>
              <i className="fa-solid fa-hammer" style={{ fontSize: '3rem', color: 'var(--gold)', opacity: 0.75 }} />
            </div>
            <div className="lore-card-body">
              <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', margin: 0 }}>Documentación en Proceso</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
