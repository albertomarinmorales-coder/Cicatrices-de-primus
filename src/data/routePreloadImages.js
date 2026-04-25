/**
 * Imágenes a precargar al entrar en cada ruta (HashRouter: pathname sin #).
 * Complementa index.html: aquí entra el contenido al navegar con el cliente.
 */

const LORE_HEADER = '/images/c41305_8ef9b64ba0524648ad1b1827a0d79e6c~mv2.png'
const MUNDO_HEADER = '/images/gremiosBento.png'
const PROF_HEADER = '/images/c41305_5d27df9e861d464480ebd0dc7a3cf2bb~mv2.png'
const GREM_HEADER = '/images/c41305_cb53584d750f40359f3b7f885959b67c~mv2.png'
const HISTORIA_HERO = '/sources/938f05_156a74c1aa9a4b06b6a5da69a955e632~mv2.png'

const CLASES_ROSTER_TOP = [
  '/sources/Clases/1. Ciudadano/fotos/avatar.png',
  '/sources/Clases/2. Argent Praetor/Fotos/avatar.png',
  '/sources/Clases/3. Dualhar/Fotos/avatar.png',
  '/sources/Clases/4. Luminari Vox/fotos/avatar.png',
  '/sources/Clases/5. Noc\'thar/fotos/avatar.png',
]

const RAZAS_ROSTER_TOP = [
  '/sources/Razas/Elfos/images/cover.png',
  '/sources/Razas/Enanos/images/cover.png',
  '/sources/Razas/Humanos/images/cover.png',
  '/sources/Razas/Malvakari/images/cover.png',
  '/sources/Razas/Mestizos/images/cover.png',
]

const LORE_CARDS = [LORE_HEADER, '/sources/Mapa.png', '/sources/Deidades Nuevas/Deidades-banner.jpg']

const VELUMS_HUB = [
  '/sources/Clases/Velums/velums-hero.png',
  '/sources/Clases/7.%20Velum%20Caedis/fotos/avatar.png',
  '/sources/Clases/7.%20Velum%20Cantoris/fotos/avatar.png',
]

/** @param {string} pathname */
export function getPreloadImagesForPath(pathname) {
  switch (pathname) {
    case '/lore':
      return LORE_CARDS
    case '/historia':
      return [HISTORIA_HERO]
    case '/mundo':
    case '/facciones':
    case '/politica':
      return [MUNDO_HEADER]
    case '/normativa':
      return [LORE_HEADER]
    case '/gremios':
      return [GREM_HEADER]
    case '/gremio-aventuras':
      return ['/images/aventureros.webp']
    case '/profesiones':
      return [PROF_HEADER]
    case '/equipo':
      return [LORE_HEADER]
    case '/clases':
      return CLASES_ROSTER_TOP
    case '/clase-velums':
      return VELUMS_HUB
    case '/razas':
      return RAZAS_ROSTER_TOP
    case '/galeria':
      return [] // imágenes dinámicas
    default:
      return []
  }
}
