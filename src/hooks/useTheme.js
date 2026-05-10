import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { auroraLock } from '../lib/auroraLock'

const themeMap = {
  '/': { color: '#c9a84c', accent: '#7a1a00', palette: ['#c9a84c', '#a87f30', '#e8c96a', '#8b6520', '#c9a84c55'] },
  '/lore': { color: '#1e6b8a', accent: '#0d3a4f', palette: ['#1e6b8a', '#155e7a', '#2d8fad', '#0d3a4f', '#1a5470'] },
  '/historia': { color: '#a0622a', accent: '#5c3010', palette: ['#a0622a', '#b87333', '#7a4a1e', '#cd8940', '#5c3010'] },
  '/deidades': { color: '#c9a84c', accent: '#250d30', palette: ['#6e4ba3', '#f1e9ba', '#c9a84c', '#960f2f', '#3d9550'] },
  '/razas': { color: '#2d6e35', accent: '#163b1c', palette: ['#2d6e35', '#1e5228', '#3d8a47', '#4a6b3a', '#163b1c'] },
  '/profesiones': { color: '#1e4d7a', accent: '#0e2a45', palette: ['#1e4d7a', '#163860', '#2860a0', '#1a4570', '#0e2a45'] },
  '/facciones': { color: '#4a1e8a', accent: '#28104a', palette: ['#4a1e8a', '#38166e', '#5c2aaa', '#3e1878', '#28104a'] },
  '/clases': { color: '#8b1a2d', accent: '#4a0010', palette: ['#8b1a2d', '#6e1020', '#a8223a', '#c0284a', '#4a0010'] },
  '/sistemas': { color: '#3a3a50', accent: '#1c1c28', palette: ['#3a3a50', '#2c2c3e', '#4e4e68', '#303045', '#1c1c28'] },
  '/normativa': { color: '#7a3a10', accent: '#3e1c06', palette: ['#7a3a10', '#5c2a08', '#9a4a18', '#6a3010', '#3e1c06'] },
  '/gremios': { color: '#1a5c45', accent: '#0c3026', palette: ['#1a5c45', '#124535', '#228a65', '#186050', '#0c3026'] },
  '/gremio-aventuras': { color: '#c05010', accent: '#6a2800', palette: ['#c05010', '#a03c08', '#e06020', '#8a3800', '#6a2800'] },
  '/equipo': { color: '#c9a84c', accent: '#4a3010', palette: ['#c9a84c', '#a87f30', '#e8c96a', '#8b6520', '#4a3010'] },
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
