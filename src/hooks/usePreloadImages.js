import { useLayoutEffect } from 'react'

/**
 * Inyecta <link rel="preload" as="image"> mientras el componente está montado.
 * Acelera la descarga en paralelo con el primer render (SPA) sin reencodear nada.
 */
export function usePreloadImages(urls) {
  const key = Array.isArray(urls) ? urls.filter(Boolean).join('\0') : ''
  useLayoutEffect(() => {
    if (!key) return
    const list = key.split('\0')
    const links = list.map((href) => {
      const l = document.createElement('link')
      l.rel = 'preload'
      l.as = 'image'
      l.href = href
      l.setAttribute('data-cdp-preload', '1')
      document.head.appendChild(l)
      return l
    })
    return () => links.forEach((el) => el.remove())
  }, [key])
}
