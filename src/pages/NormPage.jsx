import { useNavigate } from 'react-router-dom'
import { normativaData } from '../data/normativa'
import Footer from '../components/Footer'

export default function NormPage({ slug }) {
  const navigate = useNavigate()
  const data = normativaData[slug]

  if (!data) {
    return (
      <div className="page active" style={{ paddingTop: '120px', textAlign: 'center' }}>
        <h1>Normativa no encontrada</h1>
        <span className="btn-ghost" onClick={() => navigate('/normativa')} style={{ cursor: 'pointer', marginTop: '2rem', display: 'inline-block' }}>
          Volver a Normativa
        </span>
      </div>
    )
  }

  return (
    <div className="page active">
      <div className="detail-hero">
        <div className="detail-hero-bg" style={{ backgroundImage: `url('${data.heroBg}')` }} />
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <div className="breadcrumb" onClick={() => navigate('/normativa')} style={{ cursor: 'pointer' }}>
            Normativa <span>/ {data.breadcrumb}</span>
          </div>
          <h1>{data.title}</h1>
          <span className="detail-tag">{data.subtitle}</span>
        </div>
      </div>

      <div className="detail-body">
        <span className="back-btn" onClick={() => navigate('/normativa')} style={{ cursor: 'pointer' }}>
          &#8592; Volver a Normativa
        </span>

        {data.intro && (
          <div dangerouslySetInnerHTML={{ __html: data.intro }} />
        )}

        {data.sections.map((section, si) => (
          <div key={si}>
            {section.label && (
              <span className="norm-section-label">{section.label}</span>
            )}
            <div className="norm-cards-grid">
              {section.cards.map((card, ci) => (
                <div key={ci} className={`norm-card${card.warning ? ' norm-card--warning' : ''}`}>
                  {card.num && <span className="norm-card-num">{card.num}</span>}
                  <h4>{card.title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: card.text }} />
                </div>
              ))}
            </div>
          </div>
        ))}

        {data.outro && (
          <div dangerouslySetInnerHTML={{ __html: data.outro }} />
        )}
      </div>
      <Footer />
    </div>
  )
}
