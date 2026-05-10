import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { auroraLock } from '../lib/auroraLock'

const themeMap = {
  '/': { color: '#c9a84c', accent: '#b01010', palette: ['#c9a84c', '#e8c96a', '#fdfbf0', '#b01010', '#a87f32'] },
  '/lore': { color: '#c9a84c', accent: '#1c3a63', palette: ['#c9a84c', '#e8c96a', '#f5f0dc', '#1c3a63', '#162b4d'] },
  '/historia': { color: '#b87333', accent: '#4e3416', palette: ['#b87333', '#cd7f32', '#4e3416', '#8b4513', '#f0e6c8'] },
  '/deidades': { color: '#c9a84c', accent: '#250d30', palette: ['#6e4ba3', '#f1e9ba', '#c9a84c', '#960f2f', '#3d9550'] },
  '/razas': { color: '#2d5a27', accent: '#1a2e1a', palette: ['#2d5a27', '#4e6b45', '#1a2e1a', '#d4af37', '#8a722e', '#fdfbf0'] },
  '/profesiones': { color: '#4682b4', accent: '#1a2b3c', palette: ['#4682b4', '#5f9ea0', '#1a2b3c', '#8fa8bc', '#b8cddc', '#ffffff'] },
  '/facciones': { color: '#008080', accent: '#004040', palette: ['#008080', '#20b2aa', '#004040', '#e97451', '#ffffff'] },
  '/clases': { color: '#b01010', accent: '#440000', palette: ['#b01010', '#d4220f', '#660000', '#440000', '#f5c5c5'] },
  '/sistemas': { color: '#696969', accent: '#222222', palette: ['#696969', '#a9a9a9', '#333333', '#222222', '#ffffff'] },
  '/normativa': { color: '#b01010', accent: '#440000', palette: ['#b01010', '#d4220f', '#660000', '#440000', '#f5c5c5'] },
  '/gremios': { color: '#008080', accent: '#004040', palette: ['#008080', '#20b2aa', '#004040', '#e97451', '#ffffff'] },
  '/gremio-aventuras': { color: '#e97451', accent: '#8b4513', palette: ['#e97451', '#f4a460', '#8b4513', '#d2691e', '#4a6b8a', '#ffffff'] },
  '/equipo': { color: '#c9a84c', accent: '#181510', palette: ['#c9a84c', '#e8c96a', '#fdfbf0', '#4a3a20', '#b01010'] },
}

function getThemeForPath(pathname) {
  if (pathname.startsWith('/norm-')) return themeMap['/sistemas']
  if (pathname.startsWith('/raza-gen-')) return themeMap['/razas']
  if (pathname.startsWith('/oficio-gen-')) return themeMap['/profesiones']
  if (pathname.startsWith('/clase-')) return themeMap['/clases']
  return themeMap[pathname] || themeMap['/']
}

export function useTheme() {
  const { pathname } = useLocation()
  const timerRef = useRef(null)

  useEffect(() => {
    const theme = getThemeForPath(pathname)
    const root = document.documentElement
    root.style.setProperty('--theme-color', theme.color)
    root.style.setProperty('--theme-accent', theme.accent)
    root.style.setProperty('--theme-c1', theme.palette[0])
    root.style.setProperty('--theme-c2', theme.palette[1])
    root.style.setProperty('--theme-c3', theme.palette[2])

    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      if (auroraLock.active && auroraLock.color) {
        root.style.setProperty('--theme-c2', auroraLock.color)
        root.style.setProperty('--theme-c3', auroraLock.color)
        return
      }
      const p = theme.palette
      const c2 = p[Math.floor(Math.random() * p.length)]
      const c3 = p[Math.floor(Math.random() * p.length)]
      root.style.setProperty('--theme-c2', c2)
      root.style.setProperty('--theme-c3', c3)
    }, 3000)

    return () => clearInterval(timerRef.current)
  }, [pathname])
}
