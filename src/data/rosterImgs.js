import { VELUM_IMG } from './clases'

/** Misma retícula 5×2 que la página Clases: avatares + celda Velums partida. */
export const ROSTER_IMGS = [
  { src: '/sources/Clases/1. Ciudadano/fotos/avatar.png', alt: 'Ciudadano' },
  { src: '/sources/Clases/2. Argent Praetor/Fotos/avatar.png', alt: 'Argent Praetor' },
  { src: '/sources/Clases/3. Dualhar/Fotos/avatar.png', alt: 'Dualhar' },
  { src: "/sources/Clases/4. Luminari Vox/fotos/avatar.png", alt: 'Luminari Vox' },
  { src: "/sources/Clases/5. Noc'thar/fotos/avatar.png", alt: "Noc'thar" },
  { src: '/sources/Clases/6. Stormheilm/fotos/avatar.png', alt: 'Stormheilm' },
  {
    split: true,
    left: VELUM_IMG.caedisAvatar,
    right: VELUM_IMG.cantorisAvatar,
    alt: 'Velums',
  },
  { src: '/sources/Clases/8. Zereth-Mor/Fotos/avatar.png', alt: 'Zereth-Mor' },
  { src: '/sources/Clases/9. Magharyn/fotos/avatar.png', alt: 'Magharyn' },
  { src: "/sources/Clases/10. Vhark'Hul/fotos/avatar.png", alt: "Vhark'Hul" },
]
