import { useEffect } from 'react'

export function useScrollReveal(dep) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active') }),
      { threshold: 0.1 }
    )
    const els = document.querySelectorAll(
      '.section, .bento-item, .raza-card, .lore-card, .home-section, .norm-item, .norm-card, .raza-stats-grid'
    )
    els.forEach(el => { el.classList.add('reveal'); observer.observe(el) })
    return () => observer.disconnect()
  }, [dep])
}

export function useCardGlow(dep) {
  useEffect(() => {
    const cards = document.querySelectorAll('.raza-card, .bento-item, .lore-card, .oficio-card, .norm-item, .norm-card')
    const handlers = []
    cards.forEach(card => {
      const fn = (e) => {
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
      }
      card.addEventListener('mousemove', fn)
      handlers.push({ card, fn })
    })
    return () => handlers.forEach(({ card, fn }) => card.removeEventListener('mousemove', fn))
  }, [dep])
}
