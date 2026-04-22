import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Lore() {
  const navigate = useNavigate()
  return (
    <div className="page active">
      <div className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: "url('/images/c41305_8ef9b64ba0524648ad1b1827a0d79e6c~mv2.png')" }} />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <h1>Historia y Geografía</h1>
          <p>El continente de Primus</p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Lore</h2>
        <div className="section-underline"><i className="fa-solid fa-scroll" /></div>

        <div className="lore-grid">
          <div className="lore-card">
            <div className="lore-card-img-wrap">
              <img className="lore-card-img" src="/images/c41305_8ef9b64ba0524648ad1b1827a0d79e6c~mv2.png"
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
              <span onClick={() => navigate('/historia')} className="btn-ghost" style={{ cursor: 'pointer' }}>Ver más</span>
            </div>
          </div>

          <div className="lore-card">
            <div className="lore-card-img-wrap">
              <img className="lore-card-img" src="/images/938f05_21021a0aa69c4a3d8b01cf06a38b12c5~mv2.png" alt="Deidades"
                loading="lazy" decoding="async" />
            </div>
            <div className="lore-card-body">
              <h3>Deidades</h3>
              <p>
                Los dioses de Primus son entidades antiguas cuya influencia permea
                cada aspecto de la vida. Sus cultos, templos y misterios siguen
                dando forma a los destinos de mortales e inmortales por igual.
              </p>
              <span onClick={() => navigate('/deidades')} className="btn-ghost" style={{ cursor: 'pointer' }}>Leer más</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
