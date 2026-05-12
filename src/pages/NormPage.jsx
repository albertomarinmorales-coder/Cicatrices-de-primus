import { useNavigate } from 'react-router-dom'
import { normativaData } from '../data/normativa'
import Footer from '../components/Footer'
import { FaBan, FaCaravan, FaHand, FaMasksTheater, FaUserShield, FaUsers } from 'react-icons/fa6'

const NORM_SLUGS = new Set(['general', 'housing', 'esclavitud'])
const NEUTRAL_COLOR_SLUGS = new Set(['housing', 'general', 'esclavitud'])

const SEVERITY_CLASS = {
  1: 'norm-card-v2--sev1',
  2: 'norm-card-v2--sev2',
  3: 'norm-card-v2--sev3',
  4: 'norm-card-v2--sev4',
}

const REACT_ICON_PX = 28

const REACT_ICONS = {
  'fa-ban': <FaBan size={REACT_ICON_PX} />,
  'fa-caravan': <FaCaravan size={REACT_ICON_PX} />,
  'fa-hand': <FaHand size={REACT_ICON_PX} />,
  'fa-masks-theater': <FaMasksTheater size={REACT_ICON_PX} />,
  'fa-user-shield': <FaUserShield size={REACT_ICON_PX} />,
  'fa-users': <FaUsers size={REACT_ICON_PX} />,
}

export default function NormPage({ slug }) {
  const navigate = useNavigate()
  const data = normativaData[slug]
  const isNorm = NORM_SLUGS.has(slug)
  const backTo = isNorm ? '/normativa' : '/sistemas'
  const backLabel = isNorm ? 'Normativas' : 'Sistemas'

  if (!data) {
    return (
      <div className="page active" style={{ paddingTop: '120px', textAlign: 'center' }}>
        <h1>Contenido no encontrado</h1>
        <span className="btn-ghost" onClick={() => navigate(backTo)} style={{ cursor: 'pointer', marginTop: '2rem', display: 'inline-block' }}>
          Volver a {backLabel}
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
        <span className="back-btn" onClick={() => navigate(backTo)} style={{ cursor: 'pointer', marginBottom: '3rem', display: 'inline-block' }}>
          &#8592; Volver a {backLabel}
        </span>

        {data.intro && (
          <div
            className="norm-intro-block"
            style={data.introGlow ? { '--norm-intro-glow': data.introGlow } : undefined}
            dangerouslySetInnerHTML={{ __html: data.intro }}
          />
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
              <div className="norm-process-wrap">
                {section.introText && <p className="norm-section-intro-text">{section.introText}</p>}
                <div className="norm-process-timeline">
                {section.steps.map((step, spi) => (
                  <div key={spi} className="norm-process-step">
                    <div className="norm-process-step__icon">
                      {/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/.test(step.icon) ? (
                        <span className="norm-emoji-icon">{step.icon}</span>
                      ) : (
                        <i className={`ra ra-${step.icon}`} aria-hidden="true" />
                      )}
                    </div>
                    <span 
                      className="norm-process-step__label" 
                      dangerouslySetInnerHTML={{ __html: step.label }} 
                    />
                  </div>
                ))}
                </div>
              </div>
            ) : section.type === 'info' ? (
              <div className="norm-info-block">
                {/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/.test(section.icon) ? (
                  <span className="norm-emoji-icon norm-info-block__icon">{section.icon}</span>
                ) : (
                  <i className={`ra ra-${section.icon} norm-info-block__icon`} aria-hidden="true" />
                )}
                <div className="norm-info-block__content">
                  <h4 className="norm-info-block__title">{section.title}</h4>
                  <div className="norm-info-block__text" dangerouslySetInnerHTML={{ __html: section.text }} />
                </div>
              </div>
            ) : (
              <div className="norm-cards-wrap">
                {section.introText && <p className="norm-section-intro-text">{section.introText}</p>}
                <div className="norm-cards-grid-v2">
                {section.cards.map((card, ci) => {
                  const isNeutral = NEUTRAL_COLOR_SLUGS.has(slug);
                  const sevClass = (card.severity && !isNeutral) ? SEVERITY_CLASS[card.severity] || '' : '';
                  const warnClass = card.warning && !card.severity ? ' norm-card-v2--warning' : '';
                  return (
                    <div 
                      key={ci} 
                      className={`norm-card-v2${warnClass}${sevClass ? ` ${sevClass}` : ''}`}
                      style={card.fullWidth ? { gridColumn: '1 / -1' } : {}}
                    >
                      <div className="norm-card-v2__top-accent" aria-hidden="true" />
                      <div className="norm-card-v2__header">
                        {card.icon && (
                          <div className="norm-card-v2__icon">
                            {REACT_ICONS[card.icon] ? (
                              REACT_ICONS[card.icon]
                            ) : (
                              // Si el icono es un emoji (como 👍 o 👎), lo renderizamos como texto
                              /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/.test(card.icon) ? (
                                <span className="norm-emoji-icon">{card.icon}</span>
                              ) : (
                                <i className={`ra ra-${card.icon}`} aria-hidden="true" />
                              )
                            )}
                          </div>
                        )}
                        {card.num && (
                          <span className="norm-card-v2__num">
                            {card.num}
                          </span>
                        )}
                      </div>
                      <h4 className="norm-card-v2__title">{card.title}</h4>
                      <div className="norm-card-v2__divider" aria-hidden="true" />
                      <div className="norm-card-v2__text" dangerouslySetInnerHTML={{ __html: card.text }} />
                    </div>
                  )
                })}
                </div>
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
