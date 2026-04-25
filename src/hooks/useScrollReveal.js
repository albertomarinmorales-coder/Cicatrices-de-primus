import { useEffect, useLayoutEffect } from 'react'

/**
 * Debe coincidir con el bloque card-glow en global.css.
 * Razas: grid (raza-card), foto en card (raza-card-img-wrap), portada y galería, tabs (tier-panel + tier-panel-content), bloques HTML.
 */
export const CARD_GLOW_SELECTOR = [
  '.raza-card',
  '.raza-card-img-wrap',
  '.bento-item',
  '.lore-card',
  '.oficio-card',
  '.norm-item',
  '.normativa-tutorial-card',
  '.norm-card',
  '.equipo-card',
  '.gremio-aventuras-card',
  '.velums-codex-panel',
  '.deity-card-frame',
  '.raza-photo-item',
  '.raza-intro-img',
  '.roster-grid-item',
  '.tier-panel',
  '.tier-panel-content',
  '.raza-variant-card',
  '.raza-requisitos-card',
].join(', ')

export function useScrollReveal(dep) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active') }),
      { threshold: 0.1 }
    )
    const els = document.querySelectorAll(
      '.section, .bento-item, .raza-card, .lore-card, .home-section, .norm-item, .norm-card, .raza-stats-grid, .gremio-aventuras-card'
    )
    els.forEach(el => { el.classList.add('reveal'); observer.observe(el) })
    return () => observer.disconnect()
  }, [dep])
}

export function useCardGlow(dep) {
  useLayoutEffect(() => {
    const setPos = (e) => {
      let n = e.target
      if (n && n.nodeType === Node.TEXT_NODE) n = n.parentElement
      if (!n || !n.matches) return
      // Actualizar --mouse en toda la cadena (p. ej. raza-card + raza-card-img-wrap anidados; tier-panel + tier-panel-content; tablas).
      let el = n
      while (el && el !== document.documentElement) {
        if (el.matches(CARD_GLOW_SELECTOR)) {
          const rect = el.getBoundingClientRect()
          el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
          el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
        }
        el = el.parentElement
      }
    }
    document.addEventListener('pointermove', setPos, true)
    document.addEventListener('mousemove', setPos, true)
    return () => {
      document.removeEventListener('pointermove', setPos, true)
      document.removeEventListener('mousemove', setPos, true)
    }
  }, [dep])
}
