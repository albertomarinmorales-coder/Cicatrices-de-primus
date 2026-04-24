import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Mundo() {
  const navigate = useNavigate()

  return (
    <div className="page active">
      <div className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: "url('/images/gremiosBento.png')" }} />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <h1>El Mundo</h1>
          <p>Las facciones y el poder político que moldean Primus</p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Mundo</h2>
        <div className="section-underline"><i className="fa-solid fa-globe" /></div>

        <div className="lore-grid">
          <div className="lore-card" onClick={() => navigate('/facciones')} style={{ cursor: 'pointer' }}>
            <div className="lore-card-img-wrap" style={{
              background: 'repeating-linear-gradient(45deg, transparent, transparent 14px, rgba(201,168,76,0.09) 14px, rgba(201,168,76,0.09) 15px), linear-gradient(135deg, #0a0f18 0%, #1a1610 50%, #0a0f18 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              height: '240px',
              borderBottom: '1px solid var(--gold)',
            }}>
              <i className="fa-solid fa-hammer" style={{ fontSize: '3rem', color: 'var(--gold)', opacity: 0.75 }} />
            </div>
            <div className="lore-card-body">
              <h3>Facciones</h3>
              <p style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>En construcción</p>
            </div>
          </div>

          <div className="lore-card" onClick={() => navigate('/politica')} style={{ cursor: 'pointer' }}>
            <div className="lore-card-img-wrap" style={{
              background: 'repeating-linear-gradient(45deg, transparent, transparent 14px, rgba(201,168,76,0.09) 14px, rgba(201,168,76,0.09) 15px), linear-gradient(135deg, #0a0f18 0%, #1a1610 50%, #0a0f18 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              height: '240px',
              borderBottom: '1px solid var(--gold)',
            }}>
              <i className="fa-solid fa-hammer" style={{ fontSize: '3rem', color: 'var(--gold)', opacity: 0.75 }} />
            </div>
            <div className="lore-card-body">
              <h3>Política</h3>
              <p style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>En construcción</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
