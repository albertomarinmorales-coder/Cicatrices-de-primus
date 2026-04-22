import { useState } from 'react'

export default function TierTabs({ tabs }) {
  const [active, setActive] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)

  function handleTab(idx) {
    if (window.innerWidth <= 900 && idx === active) {
      setMobileOpen(v => !v)
      return
    }
    setActive(idx)
    setMobileOpen(false)
  }

  return (
    <div className="oficio-tiers">
      <div
        className={`tier-tabs${mobileOpen ? ' open' : ''}`}
        onClick={() => window.innerWidth <= 900 && setMobileOpen(v => !v)}
      >
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`tier-tab${active === i ? ' active' : ''}`}
            onClick={e => { e.stopPropagation(); handleTab(i) }}
          >
            <span className="tier-tab-name">{tab.label}</span>
          </button>
        ))}
      </div>
      {tabs.map((tab, i) => (
        <div key={i} className={`tier-panel${active === i ? ' active' : ''}`}>
          {tab.topLabel && (
            <div className="tier-panel-top"><h3>{tab.topLabel}</h3></div>
          )}
          <div className="tier-panel-content">
            {tab.content}
          </div>
        </div>
      ))}
    </div>
  )
}
