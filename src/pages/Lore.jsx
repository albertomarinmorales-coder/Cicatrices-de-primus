import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Lore() {
  const navigate = useNavigate()
  return (
    <div className="page active" id="page-lore">
      <div className="page-header">
        <div className="page-header-bg" aria-hidden="true" />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <h1>Historia y Geografía</h1>
          <p>El continente de Primus</p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Lore</h2>
        <div className="section-underline"><i className="ra ra-scroll-unfurled" aria-hidden /></div>

        <div className="lore-grid">
          <div className="lore-card" onClick={() => navigate('/historia')} style={{ cursor: 'pointer' }}>
            <div className="lore-card-img-wrap">
              <img className="lore-card-img" src="/assets/images/common/map.png"
                alt="Historia y Geografía" loading="lazy" decoding="async" />
            </div>
            <div className="lore-card-body">
              <h3>Historia y Geografía</h3>
              <p>
                El continente de Primus es una tierra ancient forjada en conflictos
                interminables. Sus terrenos vastos albergan civilizaciones olvidadas,
                ruinas de guerras pasadas y una geografía que refleja las cicatrices
                del tiempo.
              </p>
            </div>
          </div>

          <div className="lore-card" onClick={() => navigate('/deidades')} style={{ cursor: 'pointer' }}>
            <div className="lore-card-img-wrap">
              <img className="lore-card-img" src="/assets/images/lore/deities/deidades-banner.jpg" alt="Deidades"
                loading="lazy" decoding="async" />
            </div>
            <div className="lore-card-body">
              <h3>Deidades</h3>
              <p>
                Los dioses de Primus son entidades antiguas cuya influencia permea
                cada aspecto de la vida. Sus cultos, templos y misterios siguen
                dando forma a los destinos de mortales e inmortales por igual.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}