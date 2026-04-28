import { VELUM_IMG } from './clases'

/** Misma retícula 5×2 que la página Clases: avatares + celda Velums partida. */
export const ROSTER_IMGS = [
  { src: '/assets/images/classes/ciudadano/avatar.png', alt: 'Ciudadano' },
  { src: '/assets/images/classes/argent-praetor/avatar.png', alt: 'Argent Praetor' },
  { src: '/assets/images/classes/dualhar/avatar.png', alt: 'Dualhar' },
  { src: "/assets/images/classes/luminari-vox/avatar.png", alt: 'Luminari Vox' },
  { src: "/assets/images/classes/nocthar/avatar.png", alt: "Noc'thar" },
  { src: '/assets/images/classes/stormheilm/avatar.png', alt: 'Stormheilm' },
  {
    split: true,
    left: VELUM_IMG.caedisAvatar,
    right: VELUM_IMG.cantorisAvatar,
    alt: 'Velums',
  },
  { src: '/assets/images/classes/zereth-mor/avatar.png', alt: 'Zereth-Mor' },
  { src: '/assets/images/classes/magharyn/avatar.png', alt: 'Magharyn' },
  { src: "/assets/images/classes/vharkhul/avatar.png", alt: "Vhark'Hul" },
]
