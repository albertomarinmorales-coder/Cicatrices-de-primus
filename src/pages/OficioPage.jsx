import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { oficiosData } from '../data/oficios'
import Footer from '../components/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function OficioPage({ slug }) {
  const navigate = useNavigate()
  const data = oficiosData[slug]
  const [activeTab, setActiveTab] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  useScrollReveal(slug)

  if (!data) return null

  function handleTab(i) {
    if (window.innerWidth <= 900 && i === activeTab) {
      setMobileOpen(v => !v)
      return
    }
    setActiveTab(i)
    setMobileOpen(false)
  }

  return (
    <div className="page active">
      <div className="detail-hero">
        <div className="detail-hero-bg oficio-hero-placeholder" />
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <div className="breadcrumb" onClick={() => navigate('/profesiones')}>
            Profesiones <span>/ {data.name}</span>
          </div>
          <h1>{data.name}</h1>
        </div>
      </div>

      <div className="detail-body">
        <span className="back-btn" onClick={() => navigate('/profesiones')}>&#8592; Volver a Profesiones</span>

        <div className="raza-intro-row">
          <div className="raza-intro-img">
            <img className="raza-detail-img" src={data.coverImg} alt={`${data.name} 1`} loading="lazy" />
          </div>
          <div className="raza-intro-text">
            <div className="detail-text" dangerouslySetInnerHTML={{ __html: data.introHtml }} />
          </div>
        </div>

        <div className="raza-photos-row">
          {data.photos.map((src, i) => (
            <div key={i} className="raza-photo-item">
              <div className="raza-card-img-wrap">
                <img className="raza-card-img" src={src} alt={`${data.name} ${i + 2}`} loading="lazy" />
              </div>
            </div>
          ))}
        </div>

        <div className="oficio-tiers" style={{ marginTop: '2.5rem' }}>
          <h2 className="section-title">Rangos y Progresión</h2>
          <div className="section-underline" />
          <div
            className={`tier-tabs${mobileOpen ? ' open' : ''}`}
            onClick={() => window.innerWidth <= 900 && setMobileOpen(v => !v)}
          >
            {data.tiers.map((tier, i) => (
              <button
                key={i}
                className={`tier-tab${activeTab === i ? ' active' : ''}`}
                onClick={e => { e.stopPropagation(); handleTab(i) }}
              >
                <span className="tier-tab-name">{tier.label}</span>
              </button>
            ))}
          </div>

          {data.tiers.map((tier, i) => (
            <div key={i} className={`tier-panel${activeTab === i ? ' active' : ''}`}>
              <div className="tier-panel-content" dangerouslySetInnerHTML={{ __html: tier.html }} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
