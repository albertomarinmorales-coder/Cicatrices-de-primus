import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

export default function NormTutorial() {
  const navigate = useNavigate()
  return (
    <div className="page active" id="page-norm-tutorial">
      <div className="page-header">
        <div className="page-header-bg" aria-hidden="true" />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <h1>Tutorial</h1>
          <p>Guía y primeros pasos en Primus</p>
        </div>
      </div>

      <div className="section">
        <span
          className="back-btn"
          onClick={() => navigate('/normativa')}
          style={{ display: 'inline-block', marginBottom: '1.5rem', cursor: 'pointer' }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') navigate('/normativa') }}
        >
          &#8592; Volver a Normativa
        </span>

        <div className="norm-tutorial-construction" role="status" aria-live="polite">
          <div className="norm-tutorial-construction__ornament" aria-hidden="true" />
          <i className="ra ra-hammer norm-tutorial-construction__icon" aria-hidden />
          <h2 className="norm-tutorial-construction__title">En construcción</h2>
          <p className="norm-tutorial-construction__body">
            Esta sección ofrecerá una guía paso a paso para empezar en el servidor. Mientras la preparamos,
            puedes revisar el resto de la normativa desde el enlace de arriba.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
