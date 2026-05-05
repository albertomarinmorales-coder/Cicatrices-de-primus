import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Gremios() {
  const navigate = useNavigate()
  return (
    <div className="page active" id="page-gremios">
      <div className="page-header">
        <div className="page-header-bg" aria-hidden="true" />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <h1>Gremios</h1>
          <p>Los Gremios de Primus</p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Nuestros Gremios</h2>
        <div className="section-underline"><i className="ra ra-cracked-shield" aria-hidden /></div>
        <div className="profesiones-grid">
          <div className="oficio-card" onClick={() => navigate('/gremio-aventuras')} style={{ cursor: 'pointer' }}>
            <div className="oficio-card-img-wrap" style={{ background: '#111' }}>
              <img
                className="oficio-card-img"
                src="/assets/images/guilds/emblema.png"
                alt="Gremio de Aventuras"
                loading="lazy"
                decoding="async"
                style={{
                  objectFit: 'contain',
                  padding: '2rem',
                  boxSizing: 'border-box',
                  filter:
                    'drop-shadow(0 2px 6px rgba(139, 105, 20, 0.85)) drop-shadow(0 0 14px rgba(255, 200, 60, 0.65)) drop-shadow(0 0 28px rgba(212, 175, 55, 0.45))',
                }}
              />
            </div>
            <div className="oficio-card-label">Gremio de Aventuras</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
