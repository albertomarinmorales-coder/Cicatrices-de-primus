import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Gremios() {
  const navigate = useNavigate()
  return (
    <div className="page active">
      <div className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: "url('/images/c41305_cb53584d750f40359f3b7f885959b67c~mv2.png')" }} />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <h1>Gremios</h1>
          <p>Los Gremios de Primus</p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Nuestros Gremios</h2>
        <div className="section-underline"><i className="fa-solid fa-shield-halved" /></div>
        <div className="profesiones-grid">
          <div className="oficio-card" onClick={() => navigate('/gremio-aventuras')} style={{ cursor: 'pointer' }}>
            <div className="oficio-card-img-wrap" style={{ background: '#111' }}>
              <img
                className="oficio-card-img"
                src="/sources/Gremios/Emblema.webp"
                alt="Gremio de Aventuras"
                loading="lazy"
                decoding="async"
                style={{ objectFit: 'contain', padding: '2rem', boxSizing: 'border-box' }}
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
