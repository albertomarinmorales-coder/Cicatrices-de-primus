import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { normativaData } from '../data/normativa'

const NORM_ITEMS = [
  {
    path: '/norm-general',
    label: 'Normativa General',
    desc: 'Leyes fundamentales, reglas de convivencia y conceptos de rol en Primus.',
  },
  {
    path: '/norm-housing',
    label: 'Vivienda y Construcción',
    desc: 'Regulaciones sobre edificación, límites de construcción y propiedad de tierras.',
  },
  {
    path: '/norm-esclavitud',
    label: 'Esclavitud y Sometimiento',
    desc: 'Normas sobre la captura, trato y límites del sistema de esclavos.',
  }
]

export default function Normativa() {
  const navigate = useNavigate()
  const [hoveredPath, setHoveredPath] = useState(null)

  return (
    <div className="page active" id="page-normativas-index">
      <div className="page-header">
        <div className="page-header-bg" aria-hidden="true" />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <h1>Normativas</h1>
          <p>Leyes y reglamentos del continente de Primus</p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Reglamento del Reino</h2>
        <div className="section-underline" aria-hidden="true" />

        <div className="norm-grid-v2">
          {NORM_ITEMS.map((item) => {
            const slug = item.path.replace(/^\/norm-/, '')
            const meta = normativaData[slug] || {}
            const glow = meta.introGlow || 'rgb(201, 168, 76)'
            
            let glowLevel = 'glow-2'
            if (hoveredPath) {
              glowLevel = hoveredPath === item.path ? 'glow-3' : 'glow-1'
            }

            return (
              <div
                key={item.path}
                className={`norm-item norm-item--${glowLevel}${item.path === '/norm-esclavitud' ? ' norm-item--centered' : ''}`}
                onClick={() => navigate(item.path)}
                onMouseEnter={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(null)}
                style={{
                  cursor: 'pointer',
                  '--norm-intro-glow': glow,
                }}
              >
                {meta.introImage && (
                  <div className="norm-item__intro" aria-hidden="true">
                    <div className="norm-item__intro-frame">
                      <img className="norm-item__intro-img" src={meta.introImage} alt="" decoding="async" loading="lazy" />
                    </div>
                  </div>
                )}
                <div className="norm-item__content">
                  <h3 className="norm-item__title">{item.label}</h3>
                  <p className="norm-item__desc">{item.desc}</p>
                  <span className="norm-item__cta">
                    Ver Normativa <span className="norm-item__arrow">→</span>
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <Footer />
    </div>
  )
}
