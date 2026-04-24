import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export default function Particles() {
  const ref = useRef(null)
  const { pathname } = useLocation()
  const deidades = pathname === '/deidades'

  useEffect(() => {
    const container = ref.current
    if (!container) return
    container.innerHTML = ''
    const animName = deidades ? 'floatParticleDeidades' : 'floatParticle'
    for (let i = 0; i < 100; i++) {
      const p = document.createElement('div')
      p.className = 'particle'
      const size = Math.random() * 4 + 1.5
      p.style.width = size + 'px'
      p.style.height = size + 'px'
      p.style.left = Math.random() * 100 + '%'
      p.style.top = Math.random() * 100 + '%'
      p.style.setProperty('--moveX', (Math.random() - 0.5) * 200 + 'px')
      p.style.setProperty('--moveY', (Math.random() * -300 - 100) + 'px')
      const duration = Math.random() * 15 + 10
      const delay = Math.random() * -25
      p.style.animation = `${animName} ${duration}s ${delay}s infinite linear`
      container.appendChild(p)
    }
  }, [deidades])

  return <div id="particles-container" ref={ref} />
}
