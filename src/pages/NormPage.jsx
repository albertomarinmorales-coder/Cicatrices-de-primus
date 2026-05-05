import { useNavigate } from 'react-router-dom'
import { normativaData } from '../data/normativa'
import Footer from '../components/Footer'

const SYSTEM_SLUGS = new Set(['construccion', 'combate', 'heridas', 'housing', 'mazmorra', 'cordura', 'infectados', 'conquista'])

const SEVERITY_CLASS = {
  1: 'norm-card-v2--sev1',
  2: 'norm-card-v2--sev2',
  3: 'norm-card-v2--sev3',
  4: 'norm-card-v2--sev4',
}

export default function NormPage({ slug }) {
  const navigate = useNavigate()
  const data = normativaData[slug]
  const backTo = SYSTEM_SLUGS.has(slug) ? '/sistema' : '/normativa'
  const backLabel = SYSTEM_SLUGS.has(slug) ? 'Sistema' : 'Normativa'

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
    <div className={`page active norm-page--${slug}`}>
      <div className="detail-hero">
        <div className="detail-hero-bg detail-hero-bg--norm" aria-hidden="true" />
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <div className="breadcrumb" onClick={() => navigate(backTo)} style={{ cursor: 'pointer' }}>
            {backLabel} <span>/ {data.breadcrumb}</span>
          </div>
          <h1>{data.title}</h1>
          <span className="detail-tag">{data.subtitle}</span>
        </div>
      </div>

      <div className="detail-body norm-detail-body">
        <span className="back-btn" onClick={() => navigate(backTo)} style={{ cursor: 'pointer' }}>
          &#8592; Volver a {backLabel}
        </span>

        {data.intro && (
          <div className="norm-intro-block" dangerouslySetInnerHTML={{ __html: data.intro }} />
        )}

        {data.sections.map((section, si) => (
          <div key={si} className="norm-section-block">
            {section.label && (
              <div className="norm-section-header">
                <div className="norm-section-header__line" aria-hidden="true" />
                <span className="norm-section-header__label">{section.label}</span>
                <div className="norm-section-header__line" aria-hidden="true" />
              </div>
            )}

            {section.type === 'process' ? (
              <div className="norm-process-timeline">
                {section.steps.map((step, spi) => (
                  <div key={spi} className="norm-process-step">
                    <div className="norm-process-step__icon">
                      <i className={`ra ra-${step.icon}`} aria-hidden="true" />
                    </div>
                    <span className="norm-process-step__label">{step.label}</span>
                  </div>
                ))}
              </div>
            ) : section.type === 'info' ? (
              <div className="norm-info-block">
                <i className={`ra ra-${section.icon} norm-info-block__icon`} aria-hidden="true" />
                <div className="norm-info-block__content">
                  <h4 className="norm-info-block__title">{section.title}</h4>
                  <div className="norm-info-block__text" dangerouslySetInnerHTML={{ __html: section.text }} />
                </div>
              </div>
            ) : (
              <div className="norm-cards-grid-v2">
                {section.cards.map((card, ci) => {
                  const sevClass = card.severity ? SEVERITY_CLASS[card.severity] || '' : ''
                  const warnClass = card.warning && !card.severity ? ' norm-card-v2--warning' : ''
                  return (
                    <div key={ci} className={`norm-card-v2${warnClass}${sevClass ? ` ${sevClass}` : ''}`}>
                      <div className="norm-card-v2__top-accent" aria-hidden="true" />
                      {card.num && <span className="norm-card-v2__num">{card.num}</span>}
                      <h4 className="norm-card-v2__title">{card.title}</h4>
                      <div className="norm-card-v2__divider" aria-hidden="true" />
                      <div className="norm-card-v2__text" dangerouslySetInnerHTML={{ __html: card.text }} />
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        ))}

        {data.outro && (
          <div className="norm-outro-block" dangerouslySetInnerHTML={{ __html: data.outro }} />
        )}
      </div>
      <Footer />
    </div>
  )
}
