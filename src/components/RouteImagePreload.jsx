import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getPreloadImagesForPath } from '../data/routePreloadImages'

/**
 * Al cambiar de ruta, pide al navegador que precargue las imágenes previstas
 * antes de que el CSS pida el background (mejor paralelismo en SPA).
 */
export default function RouteImagePreload() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    const urls = getPreloadImagesForPath(pathname)
    if (!urls.length) return
    const links = urls.map((href) => {
      const l = document.createElement('link')
      l.rel = 'preload'
      l.as = 'image'
      l.href = href
      l.setAttribute('data-route-preload', '1')
      document.head.appendChild(l)
      return l
    })
    return () => links.forEach((el) => el.remove())
  }, [pathname])
  return null
}
