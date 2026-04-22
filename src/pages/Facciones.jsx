import Footer from '../components/Footer'

export default function Facciones() {
  return (
    <div className="page active">
      <div className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: "url('/images/gremiosBento.png')" }} />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <h1>Facciones</h1>
          <p>Las fuerzas que definen el equilibrio de Primus</p>
        </div>
      </div>

      <div className="section">
        <div className="detail-body" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <h2 className="section-title">En Construcción</h2>
          <div className="section-underline"><i className="fa-solid fa-compass" /></div>
          <p className="detail-text" style={{ maxWidth: '800px', margin: '2rem auto' }}>
            Las fuerzas que moldean el equilibrio de Primus están siendo documentadas. Pronto podrás explorar las intrigas
            de las Grandes Casas, las Órdenes Militares y los Cultos Prohibidos.
          </p>
          <div className="oficio-card" style={{ margin: '3rem auto', maxWidth: '400px', cursor: 'default', transform: 'none' }}>
            <div className="oficio-card-img-wrap">
              <img className="oficio-card-img" src="/images/gremiosBento.png" alt="Facciones" style={{ filter: 'grayscale(1)' }} />
            </div>
            <div className="oficio-card-label">Documentación en Proceso</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
