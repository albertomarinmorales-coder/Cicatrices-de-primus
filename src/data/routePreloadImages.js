/**
 * Imágenes a precargar al entrar en cada ruta (HashRouter: pathname sin #).
 * Complementa index.html: aquí entra el contenido al navegar con el cliente.
 */

const LORE_HEADER = '/assets/images/legacy/c41305-8ef9b64ba0524648ad1b1827a0d79e6c-mv2.png'
const MUNDO_HEADER = '/assets/images/legacy/guilds-bento.png'
const PROF_HEADER = '/assets/images/legacy/c41305-5d27df9e861d464480ebd0dc7a3cf2bb-mv2.png'
const GREM_HEADER = '/assets/images/legacy/rules-bento.png'
const HISTORIA_HERO = '/assets/images/legacy/938f05-156a74c1aa9a4b06b6a5da69a955e632-mv2.png'

const CLASES_ROSTER_TOP = [
  '/assets/images/classes/ciudadano/avatar.png',
  '/assets/images/classes/argent-praetor/avatar.png',
  '/assets/images/classes/dualhar/avatar.png',
  '/assets/images/classes/luminari-vox/avatar.png',
  '/assets/images/classes/nocthar/avatar.png',
]

const RAZAS_ROSTER_TOP = [
  '/assets/images/races/elfos/cover.png',
  '/assets/images/races/enanos/cover.png',
  '/assets/images/races/humanos/cover.png',
  '/assets/images/races/malvakari/cover.png',
  '/assets/images/races/mestizos/cover.png',
]

const LORE_CARDS = [LORE_HEADER, '/assets/images/common/map.png', '/assets/images/lore/deities/deidades-banner.jpg']

const VELUMS_HUB = [
  '/assets/images/classes/velums/velums-hero.png',
  '/assets/images/classes/velum-caedis/avatar.png',
  '/assets/images/classes/velum-cantoris/avatar.png',
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
      return ['/assets/images/legacy/adventurers.webp']
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
