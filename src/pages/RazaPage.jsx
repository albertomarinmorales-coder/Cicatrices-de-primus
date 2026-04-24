import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { razasData } from '../data/razas'
import Footer from '../components/Footer'
import { useScrollReveal, useCardGlow } from '../hooks/useScrollReveal'
import { usePreloadImages } from '../hooks/usePreloadImages'

function useTooltips(dep) {
  useEffect(() => {
    const tooltip = document.querySelector('.tooltip-box') || (() => {
      const t = document.createElement('div')
      t.className = 'tooltip-box'
      document.body.appendChild(t)
      return t
    })()

    const terms = document.querySelectorAll('.lore-term')
    const handlers = []
    terms.forEach(term => {
      const enter = () => { tooltip.innerText = term.dataset.tooltip; tooltip.style.opacity = '1' }
      const move = (e) => { tooltip.style.left = (e.clientX + 20) + 'px'; tooltip.style.top = (e.clientY + 20) + 'px' }
      const leave = () => { tooltip.style.opacity = '0' }
      term.addEventListener('mouseenter', enter)
      term.addEventListener('mousemove', move)
      term.addEventListener('mouseleave', leave)
      handlers.push({ term, enter, move, leave })
    })
    return () => handlers.forEach(({ term, enter, move, leave }) => {
      term.removeEventListener('mouseenter', enter)
      term.removeEventListener('mousemove', move)
      term.removeEventListener('mouseleave', leave)
    })
  }, [dep])
}

export default function RazaPage({ slug }) {
  const navigate = useNavigate()
  const data = razasData[slug]
  const [activeTab, setActiveTab] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)

  useScrollReveal(slug)
  useCardGlow(slug)
  useTooltips(slug)
  usePreloadImages(data ? [data.headerImg, data.coverImg] : [])

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
        <div className="detail-hero-bg" style={{ backgroundImage: `url('${data.headerImg}')` }} />
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <div className="breadcrumb" onClick={() => navigate('/razas')}>
            Razas <span>/ {data.name}</span>
          </div>
          <h1>{data.name}</h1>
        </div>
      </div>

      <div className="detail-body">
        <span className="back-btn" onClick={() => navigate('/razas')}>← Volver a Razas</span>

        <div className="raza-intro-row">
          <div className="raza-intro-img">
            <img
              src={data.coverImg}
              alt={data.name}
              className="raza-detail-img"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="raza-intro-text">
            <div
              className="detail-text"
              dangerouslySetInnerHTML={{ __html: data.introHtml }}
            />
          </div>
        </div>

        <div className="raza-photos-row">
          {data.photos.map((src, i) => (
            <div key={i} className="raza-photo-item">
              <div className="raza-card-img-wrap">
                <img className="raza-card-img" src={src} alt={`${data.name} ${i + 1}`} loading="lazy" decoding="async" />
              </div>
            </div>
          ))}
        </div>

        <div className="oficio-tiers">
          <div
            className={`tier-tabs${mobileOpen ? ' open' : ''}`}
            onClick={() => window.innerWidth <= 900 && setMobileOpen(v => !v)}
          >
            {data.tabs.map((tab, i) => (
              <button
                key={i}
                className={`tier-tab${activeTab === i ? ' active' : ''}`}
                onClick={e => { e.stopPropagation(); handleTab(i) }}
              >
                <span className="tier-tab-name">{tab.label}</span>
              </button>
            ))}
          </div>

          {data.tabs.map((tab, i) => (
            <div key={i} className={`tier-panel${activeTab === i ? ' active' : ''}`}>
              <div
                className="tier-panel-content"
                dangerouslySetInnerHTML={{ __html: tab.html }}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
