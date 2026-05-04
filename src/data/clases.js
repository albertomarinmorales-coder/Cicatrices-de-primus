const IMG = (src, alt) =>
  `<img src="${src}" alt="${alt}" loading="lazy" decoding="async">`

/** Primer <p class="tier-desc"> bajo I/II/III: misma caja = misma anchura de raya y texto */
const wrapFirstTierDesc = (text) => {
  const m = String(text).match(
    /^\s*(<p class="tier-desc"[^>]*>[\s\S]*?<\/p>)([\s\S]*)$/
  )
  if (!m) return text
  return `<div class="clase-feature-top">${m[1]}</div>${m[2] || ''}`
}

const ROW = (text, img) =>
  `<div class="clase-feature-row"><div class="clase-feature-img">${img}</div><div class="clase-feature-text">${wrapFirstTierDesc(text)}</div></div>`

export const VELUM_IMG = {
  /** Arte compartido Azharn usado en ambas sendas Velum */
  velumsHero: '/assets/images/classes/velums/velums-hero.png',
  caedisAvatar: '/assets/images/classes/velum-caedis/avatar.png',
  cantorisAvatar: '/assets/images/classes/velum-cantoris/avatar.png',
  caedisFotoApertura: '/assets/images/classes/velum-caedis/foto-apertura.png',
  caedisFoto1: '/assets/images/classes/velum-caedis/foto1.png',
}

export const claseFichas = {
  'argent-praetor': {
    descripcion:
      'Es un guerrero sagrado de la Orden de la Luz, especializado en combate directo y defensa.',
    funcion:
      'Es la primera línea en combate. Protege aliados, resiste el daño y enfrenta las amenazas más peligrosas de frente.',
    modoCombate:
      'Utiliza armadura pesada y armas cuerpo a cuerpo. Su resistencia y fuerza provienen de su entrenamiento y su devoción a Thronus, dios del Orden.',
    origen:
      'Tras la caída de Raventree Hall y los años del Aislamiento Luminar, la Orden se vio en la necesidad de especializar a sus guerreros. De esta especialización surgieron los Praetor, creados como el brazo militar puro de la Orden, siendo la primera y última línea de defensa ante las corrupciones.',
    mentalidad:
      'Son disciplinados, firmes y obedientes. No actúan por emoción ni compasión, sino por deber. Siguen una jerarquía estricta y cumplen órdenes sin cuestionarlas. Su objetivo es claro: mantener el orden y contener cualquier amenaza, sin importar el costo.',
    objetivo:
      'Destruir las corrupciones alli donde se las encuentre, poniendo su escudo y espada al servicio de la población del continente.',
    rolCombate: 'Tanque / Luchador',
  },
  'luminari-vox': {
    descripcion:
      'Es un devoto de la Orden de la Luz, enfocado en apoyo, sanación y detección de corrupción.',
    funcion:
      'Cura aliados, refuerza al grupo y detecta amenazas ocultas o corrupción. También investiga y actúa contra corrupciones.',
    modoCombate:
      'Utiliza thae de Orden y de Luz. No está centrado en el combate directo, pero puede defenderse, sanar y purificar aliados cuando es necesario.',
    origen:
      'Tras la caída de Raventree Hall y la reforma de la orden, Orden se vio en la necesidad de especializar a sus guerreros. Entiendiendo que para luchar la corrupcion no solo hace falta  fuerza, los Luminarii fueron creados para comprender y estudiar las corrupciones y erradicarlas del continente.',
    mentalidad:
      'Son analíticos, pacientes y observadores. No actúan por impulso, sino con criterio. Buscan entender antes de juzgar, pero cuando detectan corrupción, actúan con firmeza. Su rol no es liderar batallas, sino asegurar que todos aquellos bajo su ala regresen a casa.',
    objetivo:
      'Investiga las corrupciones buscando la cura y el origen de ellas. Prestan sus habilidades para mantener la linea frontal con vida haciendola inquebrantable contra su enemigo.',
    rolCombate: 'Healer / Buffer',
  },
  magharyn: {
    descripcion:
      'El Magharyn es un mago especializado en el uso del Thae elemental. Lo manipulan mediante runas y lenguaje arcano.',
    funcion:
      'Inflige daño a distancia, presión constante y puede adaptarse a distintas situaciones según el tipo de magia que utilice.',
    modoCombate:
      'Utiliza magia elemental (fuego, hielo, viento, tierra, etc.) para atacar. Sus ataques son constantes para generar desgaste en la linea enemiga, su Burst es una ventaja a la hora del daño pero esto hace que el Maghary quede vulnerable en el momento de concentrar su poder.',
    origen:
      'Formados en la antigua Academia de Nidharrow bajo estrictas limitaciones, los Magharyn fueron restringidos a naturalezas básicas para evitar catástrofes. Sin embargo, algunos comienzan a explorar poderes más allá de lo permitido en la nueva Torre y academia bajo el amparo del reino.',
    mentalidad:
      'Son estudiosos y disciplinados. Ven la magia como algo que debe entenderse y controlarse, no simplemente usarse. Buscan conocimiento y perfección en su dominio del Thae, siempre al borde de cruzar límites peligrosos en busca de mayor dominio..',
    objetivo:
      'Mantener el control y equilibrio del Thae dentro de los límites establecidos por la Torre, evitando que el Thae vaya corrompiendo el mundo. Línea de ataque ante las grietas a planos desconocidos.',
    rolCombate: 'Burst DPS',
  },
  'vhark-hul': {
    descripcion:
      'Guerreros que abandonaron sus antiguos juramentos y renacieron en el Thae de la muerte, especializado en el combate frontal y aguante, siendo estos armas vivientes',
    funcion:
      'Unidades de choque en la primera linea, presión constante en el combate, Debilitar enemigos, mantener el control del campo junto a un desgaste progresivo del enemigo.',
    modoCombate:
      'Utilizan armadura pesada y armas cuerpo a cuerpo de preferencia armas a dos manos. Sus armas se encuentran imbuidas con Thae oscuro y absorben las almas de los enemigos caídos, lo que refuerza su resistencia, regeneración y capacidad de seguir luchando.',
    origen:
      'Creados por la necesidad de reemplazar la antigua orden de los Krieger. Cada Vhark\'hul es forjado, no nacido, con el objetivo de crear entidades capaces de sostenerse más allá de los límites normales de la vida. El alma de un guerrero, con las voluntades y almas fragmentadas de de otros.',
    mentalidad:
      'Son fríos, implacables y enfocados. No reaccionan al dolor como otros, ni dependen de la moral o la emoción. Cumplen su propósito sin desviarse, resistiendo hasta el final sin importar el desgaste. Al final no conocen la paz. Solo sus momentos de silencio entre una batalla o otra.',
    objetivo:
      'Ser la linea se defensa tanto en las incursiones como cuando sea necesario para reino, no flaquear a la hora de eliminar o capturar aquellos enemigos que afecten al Reino. Mantener su arma alimentada sino este poco a poco cederá a la muerte perdiéndose en esta.',
    rolCombate: 'Tanque / Luchador',
  },
  'zereth-mor': {
    descripcion:
      'Hechiceros que manipulan el Thae de la Muerte a cambio de su propia humanidad.',
    funcion:
      'Ofensiva. Provocan daño en cadena con efectos que hacen vulnerable al oponente.',
    modoCombate:
      'Mágico, manipulan el Thae de la Muerte levantando cadáveres y creando sellos malditos que ocasionan daño continuo en el tiempo y entorpecen al enemigo.',
    origen:
      'Por medio de Meiga, la primera manipuladora del Thae de la Muerte, aquello que era un arte prohibido fue presentado ante las máximas autoridades del reino, los cuales aprobaron su uso en vista de la necesidad de seres que pudiesen manipular aquello que ellos no podían.',
    mentalidad:
      'Son fríos y pragmáticos actuando con una lógica brutal. No ven la muerte como algo sagrado, sino como un recurso ilimitado para manipular a placer, sin ningún respeto ni reverencia. Es promotor de actos de "traición" al orden natural, a menudo entra en conflicto con aquellos que respetan el equilibrio entre la vida y la muerte, y con quienes vigilan el descanso de los fallecidos.',
    objetivo:
      'Abandonar lo que es para convertirse en algo que trascienda lo conocido, y por medio de ello colaborar con los objetivos de la Torre del Último Juramento y sus integrantes en cuanto se les requiera. El proceso es completamente diferente para cada individuo, pero el avance en el estudio y ejecución implica una pérdida irreversible de humanidad. Todos los Zereth-mor se encuentran bajo la mirada inquisitiva de la Torre y de la sociedad en general, pero es imposible juzgarlos a todos por igual, cada quién actúa acorde a sus ambiciones personales.',
    rolCombate: 'DPS mágico / Debuffer',
  },
  'velum-caedis': {
    descripcion: 'Artistas que danzan entre los vivos y los muertos.',
    funcion: 'Ofensiva, Daño rápido cuerpo a cuerpo y movilidad.',
    modoCombate:
      'Manipulan el Thae acompañado por sombras y espíritus que guían sus armas en una danza que destroza y confunde a sus oponentes. Ataca de forma rápida y letal, entrando y saliendo del combate. Su estilo se basa en velocidad, sorpresa y ejecución limpia más que en fuerza bruta.',
    origen:
      'Originarios de Ash\'thorin y reconocidos como un arte del Sur de Primus, los Velum Caedis se especializan en la danza y actúan como médiums, llamados por la muerte de una manera distinta y viéndola desde un punto de vista espiritual. Son conocidos internamente como Azharn.',
    mentalidad:
      'Al Velum Caedis se le ve como a un artista excéntrico e incomprendido. Como “danzan” entre el plano Terrenal y el Espiritual, sus procesos mentales son inestables, variando en torno a aquello que le rodee. Esto llega a ser una experiencia abrumadora que incluso interfiere en sus interacciones cotidianas, su percepción de la realidad se vuelve dual y cambiante.',
    objetivo:
      'Buscan mantener el orden entre ambos planos, el Terrenal y el Espiritual, así como entender el mensaje que transmiten los espíritus. Además, son parte activa de los objetivos de la Torre del Último Juramento, siendo entrenados alli.',
    rolCombate: 'Burst DPS',
  },
  'velum-cantoris': {
    descripcion: 'Artistas que dan voz a los muertos a través de la música.',
    funcion: 'Apoyo a distancia en enfrentamientos.',
    modoCombate:
      'Utiliza música y sonidos como canal de Thae. Sus habilidades provocan diferentes efectos, positivos para los aliados, negativos en el adversario. No depende del combate físico.',
    origen:
      'Originarios de Ash\'thorin y reconocidos como un arte del Sur de Primus, los Velum Cantoris se especializan en la música y actúan como médiums, llamados por la muerte de una manera distinta y viéndola desde un punto de vista espiritual.',
    mentalidad:
      'Al Velum Cantoris se le ve como a un artista excéntrico e incomprendido. Como “escucha” entre el plano Terrenal y el Espiritual, su estabilidad mental es frágil en un principio, pues percibe espíritus, cánticos, melodías inexistentes o deseos en forma de música, ya sean de seres espirituales buenos, neutrales o malvados. Esto llega a ser una experiencia abrumadora que incluso interfiere en sus interacciones cotidianas, su percepción de la realidad se vuelve dual y cambiante.',
    objetivo:
      'Buscan mantener el orden entre ambos planos, el Terrenal y el Espiritual, así como entender el mensaje que transmiten los espíritus. Además, son parte activa de los objetivos de la Torre del Último Juramento, siendo entrenados alli.',
    rolCombate: 'Buffer / Debuffer',
  },
  stormheilm: {
    descripcion:
      'Guerrero del norte especializado en combate agresivo y supervivencia extrema.',
    funcion:
      'Inflige gran daño en combate cuerpo a cuerpo, resiste condiciones hostiles y lidera enfrentamientos directos. Es una fuerza ofensiva constante.',
    modoCombate:
      'Combate con armas pesadas o a dos manos, en especial armas tocadas por el rayo, usando fuerza bruta y resistencia. Puede canalizar el poder del rayo para potenciar sus ataques.',
    origen:
      'Antiguamente eran guerreros ritualistas ligados a la montaña, enfocados en la resistencia y en la exploración de terrenos inhóspitos. Tras traiciones y conflictos internos en el norte, sufrieron una purga que redefinió su identidad. Desde entonces, los Stormheilm se convirtieron en una fuerza más dura y selectiva, donde solo los más fuertes sobreviven y continúan.',
    mentalidad:
      'Son directos, agresivos y determinados. No retroceden ni negocian fácilmente. Valoran la fuerza, la lealtad y la supervivencia. Para ellos, el mundo es una prueba constante: o resistes, o caes.',
    objetivo:
      'Custodiar el fragmento del Caos que se guarda en lo mas profundo de la montaña, conquistar el Norte para hacerlo un lugar más seguro y transitable.',
    rolCombate: 'Luchador / Tanque',
  },
  'noc-thar': {
    descripcion:
      'Guardianes de la naturaleza salvaje, enfocados en entorpecer al enemigo y mantener al aliado de pie.',
    funcion:
      'Atacan amenazas naturales o corruptas, controlan el entorno y pueden tanto dañar como resistir. También son capaces de sanar.',
    modoCombate:
      'Utilizan magia natural agresiva, canalizando el thae de Zhenra junto con el de Kheos. Su poder combina el equilibrio natural con aspectos más caóticos y destructivos. Impedir el movimiento y drenar vida al enemigo son algunos ejemplos.',
    origen:
      'Tras la caída de Narthilnor, el corazón espiritual de la naturaleza en el Este, los antiguos guardianes (Custos Saltus) cambiaron su forma de ver el mundo. Comprendieron que la naturaleza no solo protege, sino que también destruye. Por medio de la influencia del fragmento del Caos surgieron los Noc\'thar, y la montaña los recibió. Ahora no son solo los guardianes del bosque, son sus vengadores.',
    mentalidad:
      'No son pacíficos ni conciliadores. Actúan con una lógica más dura: si algo amenaza el equilibrio, se elimina. No buscan negociar ni contener, sino erradicar el problema desde la raíz. Son la versión más implacable de la naturaleza: directa, violenta y necesaria.',
    objetivo:
      'Restaurar el equilibrio y sanar el continente para que regrese Zhenra. Participar de la conquista del Norte para proteger la montaña que los albergó y se convirtió en su hogar.',
    rolCombate: 'Debuffer / Healer',
  },
  dualhar: {
    descripcion:
      'Guerreros vinculados con el fragmento de la vida, surgidos tras la caída de la Arboleda y la Orden Krieger. Son la consecuencia del caos y oscuridad del mundo actual.',
    funcion:
      'Infligir daño sostenido y ejercer presión constante en combate. Destacan por su adaptabilidad y por aplicar efectos condicionantes en el combate',
    modoCombate:
      'Híbrido. Combinan combate cuerpo a cuerpo y a distancia con la misma eficacia. Aquellos bendecidos por Zhenra son capaces de canalizar el Thae de la naturaleza.',
    origen:
      'Surgieron tras la desaparición del Fragmento de Poder y la caída de La Arboleda. Algunos fueron antiguos Krieger. Otros, personas comunes afectadas  por el eco de Zhenra.',
    mentalidad:
      'Son desconfiados y resilientes. Viven marcados por un pasado distorsionado y perseguidos por una historia que los señala como culpables. Esto provoca que sean temidos y, al mismo tiempo, rechazados y vigilados de forma constante. Especialmente por grupos radicales. Algunos actúan en la sombra manteniéndose al margen para no ser señalados, otros aceptan ese rechazo y continúan actuando pese a él.  Protegen un mundo que rara vez los acepta, lo que genera una mezcla de distancia, pragmatismo y, en algunos casos, resentimiento.',
    objetivo:
      'La mayoría actúa para contener la oscuridad y evitar que el mundo siga degradándose, especialmente en las regiones del este. Otros intervienen solo cuando es necesario, manteniéndose al margen de conflictos mayores. Algunos, en cambio, actúan por interés propio.\n\nCada Dualhar decide hasta que punto está dispuesto a luchar, y por quién hacerlo.',
    rolCombate: 'Híbrido de DPS distancia y DPS Físico',
  },
}

export const clasesData = {
  ciudadano: {
    slug: 'ciudadano',
    name: 'Ciudadano',
    tag: 'Support / Utilidad',
    avatarImg: '/assets/images/classes/ciudadano/avatar.png',
    stats: [
      { label: 'Utilidad', value: 95 },
      { label: 'Supervivencia', value: 65 },
      { label: 'Complejidad', value: 40 },
    ],
    contentHtml: `
${ROW(`<p class="tier-desc">El Ciudadano no es solo un campesino, un recolector o un simple trabajador. En Primus, el plebeyo representa el corazón de la sociedad. Es quien forja las espadas, cultiva las tierras, cura las enfermedades, y mantiene en pie los cimientos del mundo conocido. Mientras casas nobles juegan a la política y soldados alzan armas, el ciudadano común crea, construye y sobrevive.</p>`,
      IMG('/assets/images/classes/ciudadano/foto1.png', 'Foto 1'))}
${ROW(`<p class="tier-desc">Aunque históricamente relegados a las clases bajas, los Ciudadano que sobrevivieron a las guerras y los reinos fracturados adquirieron una sabiduría práctica invaluable. En la Quinta Era, muchos formaron gremios y aprendieron a negociar su trabajo como un recurso esencial.</p>
<p class="tier-desc">El Ciudadano ha vivido la vida sin grandes lujos o con muchos lujos depende de su posicion social, pero con una fuerte conexión con la realidad del mundo normalmente. Sabe que todo lo que sube puede caer, y que sin sus manos, ningún imperio puede sostenerse. Algunos Ciudadanos son idealistas, otros más cínicos; pero todos comparten una cosa: conocimiento del valor del esfuerzo y la repetición.</p>`,
      IMG('/assets/images/classes/ciudadano/foto2.png', 'Foto 2'))}
${ROW(`<p class="tier-desc">Donde una casa noble piensa en estrategia, el Ciudadano común ve el estado de la cosecha. Donde un Magharyn habla del equilibrio del Thae, el ciudadano aplicado en salud conoce qué planta puede sanar o envenenar en segundos.</p>
<p class="tier-desc" style="font-weight: bold; font-style: italic; color: var(--accent);">Los Ciudadanos Suelen Optar en un punto de su vida a un camino distinto, optando por estudiar artes en combate o, seguir haciéndose en negocios.</p>`,
      IMG('/assets/images/classes/ciudadano/foto3.png', 'Foto 3'))}`,
  },

  'vhark-hul': {
    slug: 'vhark-hul',
    name: "Vhark'Hul",
    tag: 'Tanque / Luchador',
    avatarImg: "/assets/images/classes/vharkhul/avatar.png",
    stats: [
      { label: 'Daño', value: 85 },
      { label: 'Resistencia', value: 90 },
      { label: 'Dificultad', value: 75 },
    ],
    contentHtml: `
${ROW(`<p class="tier-desc">Guerreros que abandonaron sus antiguos juramentos y renacieron en el Thae de la muerte, especializado en el combate frontal y aguante, siendo estos armas vivientes</p>
<p class="tier-desc">Unidades de choque en la primera linea, presión constante en el combate, Debilitar enemigos, mantener el control del campo junto a un desgaste progresivo del enemigo.</p>`,
      IMG("/assets/images/classes/vharkhul/foto1.png", 'Foto 1'))}
${ROW(`<p class="tier-desc">Utilizan armadura pesada y armas cuerpo a cuerpo de preferencia armas a dos manos. Sus armas se encuentran imbuidas con Thae oscuro y absorben las almas de los enemigos caídos, lo que refuerza su resistencia, regeneración y capacidad de seguir luchando.</p>
<p class="tier-desc">Creados por la necesidad de reemplazar la antigua orden de los Krieger. Cada Vhark'hul es forjado, no nacido, con el objetivo de crear entidades capaces de sostenerse más allá de los límites normales de la vida. El alma de un guerrero, con las voluntades y almas fragmentadas de de otros.</p>`,
      IMG("/assets/images/classes/vharkhul/foto2.png", 'Foto 2'))}
${ROW(`<p class="tier-desc">Son fríos, implacables y enfocados. No reaccionan al dolor como otros, ni dependen de la moral o la emoción. Cumplen su propósito sin desviarse, resistiendo hasta el final sin importar el desgaste. Al final no conocen la paz. Solo sus momentos de silencio entre una batalla o otra.</p>
<p class="tier-desc">Ser la linea se defensa tanto en las incursiones como cuando sea necesario para reino, no flaquear a la hora de eliminar o capturar aquellos enemigos que afecten al Reino. Mantener su arma alimentada sino este poco a poco cederá a la muerte perdiéndose en esta.</p>`,
      IMG("/assets/images/classes/vharkhul/foto3.png", 'Foto 3'))}`,
  },

  'argent-praetor': {
    slug: 'argent-praetor',
    name: 'Argent Praetor',
    tag: 'Tanque / Luchador',
    avatarImg: '/assets/images/classes/argent-praetor/avatar.png',
    stats: [],
    contentHtml: `
${ROW(`<p class="tier-desc">Es un guerrero sagrado de la Orden de la Luz, especializado en combate directo y defensa.</p>
<p class="tier-desc">Es la primera línea en combate. Protege aliados, resiste el daño y enfrenta las amenazas más peligrosas de frente.</p>`,
      IMG('/assets/images/classes/argent-praetor/foto1.png', 'Foto 1'))}
${ROW(`<p class="tier-desc">Utiliza armadura pesada y armas cuerpo a cuerpo. Su resistencia y fuerza provienen de su entrenamiento y su devoción a Thronus, dios del Orden.</p>
<p class="tier-desc">Tras la caída de Raventree Hall y los años del Aislamiento Luminar, la Orden se vio en la necesidad de especializar a sus guerreros. De esta especialización surgieron los Praetor, creados como el brazo militar puro de la Orden, siendo la primera y última línea de defensa ante las corrupciones.</p>`,
      IMG('/assets/images/classes/argent-praetor/foto2.png', 'Foto 2'))}
${ROW(`<p class="tier-desc">Son disciplinados, firmes y obedientes. No actúan por emoción ni compasión, sino por deber. Siguen una jerarquía estricta y cumplen órdenes sin cuestionarlas. Su objetivo es claro: mantener el orden y contener cualquier amenaza, sin importar el costo.</p>
<p class="tier-desc">Destruir las corrupciones alli donde se las encuentre, poniendo su escudo y espada al servicio de la población del continente.</p>`,
      IMG('/assets/images/classes/argent-praetor/foto3.png', 'Foto 3'))}`,
  },

  dualhar: {
    slug: 'dualhar',
    name: 'Dualhar',
    tag: 'Híbrido de DPS distancia y DPS Físico',
    avatarImg: '/assets/images/classes/dualhar/avatar.webp',
    stats: [],
    contentHtml: `
${ROW(`<p class="tier-desc">Guerreros vinculados con el fragmento de la vida, surgidos tras la caída de la Arboleda y la Orden Krieger. Son la consecuencia del caos y oscuridad del mundo actual.</p>
<p class="tier-desc">Infligir daño sostenido y ejercer presión constante en combate. Destacan por su adaptabilidad y por aplicar efectos condicionantes en el combate</p>`,
      IMG('/assets/images/classes/dualhar/foto1.png', 'Foto 1'))}
${ROW(`<p class="tier-desc">Híbrido. Combinan combate cuerpo a cuerpo y a distancia con la misma eficacia. Aquellos bendecidos por Zhenra son capaces de canalizar el Thae de la naturaleza.</p>
<p class="tier-desc">Surgieron tras la desaparición del Fragmento de Poder y la caída de La Arboleda. Algunos fueron antiguos Krieger. Otros, personas comunes afectadas  por el eco de Zhenra.</p>`,
      IMG('/assets/images/classes/dualhar/foto2.png', 'Foto 2'))}
${ROW(`<p class="tier-desc">Son desconfiados y resilientes. Viven marcados por un pasado distorsionado y perseguidos por una historia que los señala como culpables. Esto provoca que sean temidos y, al mismo tiempo, rechazados y vigilados de forma constante. Especialmente por grupos radicales. Algunos actúan en la sombra manteniéndose al margen para no ser señalados, otros aceptan ese rechazo y continúan actuando pese a él.  Protegen un mundo que rara vez los acepta, lo que genera una mezcla de distancia, pragmatismo y, en algunos casos, resentimiento.</p>
<p class="tier-desc">La mayoría actúa para contener la oscuridad y evitar que el mundo siga degradándose, especialmente en las regiones del este. Otros intervienen solo cuando es necesario, manteniéndose al margen de conflictos mayores. Algunos, en cambio, actúan por interés propio.</p>
<p class="tier-desc">Cada Dualhar decide hasta que punto está dispuesto a luchar, y por quién hacerlo.</p>`,
      IMG('/assets/images/classes/dualhar/foto3.png', 'Foto 3'))}`,
  },

  'luminari-vox': {
    slug: 'luminari-vox',
    name: 'Luminari Vox',
    tag: 'Healer / Buffer',
    avatarImg: '/assets/images/classes/luminari-vox/avatar.png',
    stats: [],
    contentHtml: `
${ROW(`<p class="tier-desc">Es un devoto de la Orden de la Luz, enfocado en apoyo, sanación y detección de corrupción.</p>
<p class="tier-desc">Cura aliados, refuerza al grupo y detecta amenazas ocultas o corrupción. También investiga y actúa contra corrupciones.</p>`,
      IMG('/assets/images/classes/luminari-vox/foto1.png', 'Foto 1'))}
${ROW(`<p class="tier-desc">Utiliza thae de Orden y de Luz. No está centrado en el combate directo, pero puede defenderse, sanar y purificar aliados cuando es necesario.</p>
<p class="tier-desc">Tras la caída de Raventree Hall y la reforma de la orden, Orden se vio en la necesidad de especializar a sus guerreros. Entiendiendo que para luchar la corrupcion no solo hace falta  fuerza, los Luminarii fueron creados para comprender y estudiar las corrupciones y erradicarlas del continente.</p>`,
      IMG('/assets/images/classes/luminari-vox/foto2.png', 'Foto 2'))}
${ROW(`<p class="tier-desc">Son analíticos, pacientes y observadores. No actúan por impulso, sino con criterio. Buscan entender antes de juzgar, pero cuando detectan corrupción, actúan con firmeza. Su rol no es liderar batallas, sino asegurar que todos aquellos bajo su ala regresen a casa.</p>
<p class="tier-desc">Investiga las corrupciones buscando la cura y el origen de ellas. Prestan sus habilidades para mantener la linea frontal con vida haciendola inquebrantable contra su enemigo.</p>`,
      IMG('/assets/images/classes/luminari-vox/foto3.png', 'Foto 3'))}`,
  },

  'noc-thar': {
    slug: 'noc-thar',
    name: "Noc'thar",
    tag: 'Debuffer / Healer',
    avatarImg: "/assets/images/classes/nocthar/avatar.png",
    stats: [],
    contentHtml: `
${ROW(`<p class="tier-desc">Guardianes de la naturaleza salvaje, enfocados en entorpecer al enemigo y mantener al aliado de pie.</p>
<p class="tier-desc">Atacan amenazas naturales o corruptas, controlan el entorno y pueden tanto dañar como resistir. También son capaces de sanar.</p>`,
      IMG("/assets/images/classes/nocthar/foto1.png", 'Foto 1'))}
${ROW(`<p class="tier-desc">Utilizan magia natural agresiva, canalizando el thae de Zhenra junto con el de Kheos. Su poder combina el equilibrio natural con aspectos más caóticos y destructivos. Impedir el movimiento y drenar vida al enemigo son algunos ejemplos.</p>
<p class="tier-desc">Tras la caída de Narthilnor, el corazón espiritual de la naturaleza en el Este, los antiguos guardianes (Custos Saltus) cambiaron su forma de ver el mundo. Comprendieron que la naturaleza no solo protege, sino que también destruye. Por medio de la influencia del fragmento del Caos surgieron los Noc'thar, y la montaña los recibió. Ahora no son solo los guardianes del bosque, son sus vengadores.</p>`,
      IMG("/assets/images/classes/nocthar/foto2.png", 'Foto 2'))}
${ROW(`<p class="tier-desc">No son pacíficos ni conciliadores. Actúan con una lógica más dura: si algo amenaza el equilibrio, se elimina. No buscan negociar ni contener, sino erradicar el problema desde la raíz. Son la versión más implacable de la naturaleza: directa, violenta y necesaria.</p>
<p class="tier-desc">Restaurar el equilibrio y sanar el continente para que regrese Zhenra. Participar de la conquista del Norte para proteger la montaña que los albergó y se convirtió en su hogar.</p>`,
      IMG("/assets/images/classes/nocthar/foto3.png", 'Foto 3'))}`,
  },

  stormheilm: {
    slug: 'stormheilm',
    name: 'Stormheilm',
    tag: 'Luchador / Tanque',
    avatarImg: '/assets/images/classes/stormheilm/avatar.png',
    stats: [],
    contentHtml: `
${ROW(`<p class="tier-desc">Guerrero del norte especializado en combate agresivo y supervivencia extrema.</p>
<p class="tier-desc">Inflige gran daño en combate cuerpo a cuerpo, resiste condiciones hostiles y lidera enfrentamientos directos. Es una fuerza ofensiva constante.</p>`,
      IMG('/assets/images/classes/stormheilm/foto1.png', 'Foto 1'))}
${ROW(`<p class="tier-desc">Combate con armas pesadas o a dos manos, en especial armas tocadas por el rayo, usando fuerza bruta y resistencia. Puede canalizar el poder del rayo para potenciar sus ataques.</p>
<p class="tier-desc">Antiguamente eran guerreros ritualistas ligados a la montaña, enfocados en la resistencia y en la exploración de terrenos inhóspitos. Tras traiciones y conflictos internos en el norte, sufrieron una purga que redefinió su identidad. Desde entonces, los Stormheilm se convirtieron en una fuerza más dura y selectiva, donde solo los más fuertes sobreviven y continúan.</p>`,
      IMG('/assets/images/classes/stormheilm/foto2.png', 'Foto 2'))}
${ROW(`<p class="tier-desc">Son directos, agresivos y determinados. No retroceden ni negocian fácilmente. Valoran la fuerza, la lealtad y la supervivencia. Para ellos, el mundo es una prueba constante: o resistes, o caes.</p>
<p class="tier-desc">Custodiar el fragmento del Caos que se guarda en lo mas profundo de la montaña, conquistar el Norte para hacerlo un lugar más seguro y transitable.</p>`,
      IMG('/assets/images/classes/stormheilm/foto3.png', 'Foto 3'))}`,
  },

  'velum-caedis': {
    slug: 'velum-caedis',
    name: 'Velum Caedis',
    tag: 'Burst DPS',
    avatarImg: '/assets/images/classes/velum-caedis/avatar.png',
    stats: [],
    contentHtml: `
${ROW(`<p class="tier-desc">Artistas que danzan entre los vivos y los muertos.</p>
<p class="tier-desc">Ofensiva, Daño rápido cuerpo a cuerpo y movilidad.</p>`,
      IMG(VELUM_IMG.velumsHero, 'Velum'))}
${ROW(`<p class="tier-desc">Manipulan el Thae acompañado por sombras y espíritus que guían sus armas en una danza que destroza y confunde a sus oponentes. Ataca de forma rápida y letal, entrando y saliendo del combate. Su estilo se basa en velocidad, sorpresa y ejecución limpia más que en fuerza bruta.</p>
<p class="tier-desc">Originarios de Ash'thorin y reconocidos como un arte del Sur de Primus, los Velum Caedis se especializan en la danza y actúan como médiums, llamados por la muerte de una manera distinta y viéndola desde un punto de vista espiritual. Son conocidos internamente como Azharn.</p>`,
      IMG(VELUM_IMG.caedisFotoApertura, 'Foto 1'))}
${ROW(`<p class="tier-desc">Al Velum Caedis se le ve como a un artista excéntrico e incomprendido. Como “danzan” entre el plano Terrenal y el Espiritual, sus procesos mentales son inestables, variando en torno a aquello que le rodee. Esto llega a ser una experiencia abrumadora que incluso interfiere en sus interacciones cotidianas, su percepción de la realidad se vuelve dual y cambiante.</p>
<p class="tier-desc">Buscan mantener el orden entre ambos planos, el Terrenal y el Espiritual, así como entender el mensaje que transmiten los espíritus. Además, son parte activa de los objetivos de la Torre del Último Juramento, siendo entrenados alli.</p>`,
      IMG(VELUM_IMG.caedisFoto1, 'Foto 2'))}`,
  },

  'velum-cantoris': {
    slug: 'velum-cantoris',
    name: 'Velum Cantoris',
    tag: 'Buffer / Debuffer',
    avatarImg: '/assets/images/classes/velum-cantoris/avatar.png',
    stats: [],
    contentHtml: `
${ROW(`<p class="tier-desc">Artistas que dan voz a los muertos a través de la música.</p>
<p class="tier-desc">Apoyo a distancia en enfrentamientos.</p>`,
      IMG(VELUM_IMG.velumsHero, 'Velum'))}
${ROW(`<p class="tier-desc">Utiliza música y sonidos como canal de Thae. Sus habilidades provocan diferentes efectos, positivos para los aliados, negativos en el adversario. No depende del combate físico.</p>
<p class="tier-desc">Originarios de Ash'thorin y reconocidos como un arte del Sur de Primus, los Velum Cantoris se especializan en la música y actúan como médiums, llamados por la muerte de una manera distinta y viéndola desde un punto de vista espiritual.</p>`,
      IMG('/assets/images/classes/velum-cantoris/foto2.png', 'Foto 1'))}
${ROW(`<p class="tier-desc">Al Velum Cantoris se le ve como a un artista excéntrico e incomprendido. Como “escucha” entre el plano Terrenal y el Espiritual, su estabilidad mental es frágil en un principio, pues percibe espíritus, cánticos, melodías inexistentes o deseos en forma de música, ya sean de seres espirituales buenos, neutrales o malvados. Esto llega a ser una experiencia abrumadora que incluso interfiere en sus interacciones cotidianas, su percepción de la realidad se vuelve dual y cambiante.</p>
<p class="tier-desc">Buscan mantener el orden entre ambos planos, el Terrenal y el Espiritual, así como entender el mensaje que transmiten los espíritus. Además, son parte activa de los objetivos de la Torre del Último Juramento, siendo entrenados alli.</p>`,
      IMG('/assets/images/classes/velum-cantoris/foto3.png', 'Foto 2'))}`,
  },

  'zereth-mor': {
    slug: 'zereth-mor',
    name: 'Zereth-Mor',
    tag: 'DPS mágico / Debuffer',
    avatarImg: '/assets/images/classes/zereth-mor/avatar.png',
    stats: [],
    contentHtml: `
${ROW(`<p class="tier-desc">Hechiceros que manipulan el Thae de la Muerte a cambio de su propia humanidad.</p>
<p class="tier-desc">Ofensiva. Provocan daño en cadena con efectos que hacen vulnerable al oponente.</p>`,
      IMG('/assets/images/classes/zereth-mor/foto1.png', 'Foto 1'))}
${ROW(`<p class="tier-desc">Mágico, manipulan el Thae de la Muerte levantando cadáveres y creando sellos malditos que ocasionan daño continuo en el tiempo y entorpecen al enemigo.</p>
<p class="tier-desc">Por medio de Meiga, la primera manipuladora del Thae de la Muerte, aquello que era un arte prohibido fue presentado ante las máximas autoridades del reino, los cuales aprobaron su uso en vista de la necesidad de seres que pudiesen manipular aquello que ellos no podían.</p>`,
      IMG('/assets/images/classes/zereth-mor/foto2.png', 'Foto 2'))}
${ROW(`<p class="tier-desc">Son fríos y pragmáticos actuando con una lógica brutal. No ven la muerte como algo sagrado, sino como un recurso ilimitado para manipular a placer, sin ningún respeto ni reverencia. Es promotor de actos de "traición" al orden natural, a menudo entra en conflicto con aquellos que respetan el equilibrio entre la vida y la muerte, y con quienes vigilan el descanso de los fallecidos.</p>
<p class="tier-desc">Abandonar lo que es para convertirse en algo que trascienda lo conocido, y por medio de ello colaborar con los objetivos de la Torre del Último Juramento y sus integrantes en cuanto se les requiera. El proceso es completamente diferente para cada individuo, pero el avance en el estudio y ejecución implica una pérdida irreversible de humanidad. Todos los Zereth-mor se encuentran bajo la mirada inquisitiva de la Torre y de la sociedad en general, pero es imposible juzgarlos a todos por igual, cada quién actúa acorde a sus ambiciones personales.</p>`,
      IMG('/assets/images/classes/zereth-mor/foto3.png', 'Foto 3'))}`,
  },

  magharyn: {
    slug: 'magharyn',
    name: 'Magharyn',
    tag: 'Burst DPS',
    avatarImg: '/assets/images/classes/magharyn/avatar.png',
    stats: [],
    contentHtml: `
${ROW(`<p class="tier-desc">El Magharyn es un mago especializado en el uso del Thae elemental. Lo manipulan mediante runas y lenguaje arcano.</p>
<p class="tier-desc">Inflige daño a distancia, presión constante y puede adaptarse a distintas situaciones según el tipo de magia que utilice.</p>`,
      IMG('/assets/images/classes/magharyn/foto1.png', 'Foto 1'))}
${ROW(`<p class="tier-desc">Utiliza magia elemental (fuego, hielo, viento, tierra, etc.) para atacar. Sus ataques son constantes para generar desgaste en la linea enemiga, su Burst es una ventaja a la hora del daño pero esto hace que el Maghary quede vulnerable en el momento de concentrar su poder.</p>
<p class="tier-desc">Formados en la antigua Academia de Nidharrow bajo estrictas limitaciones, los Magharyn fueron restringidos a naturalezas básicas para evitar catástrofes. Sin embargo, algunos comienzan a explorar poderes más allá de lo permitido en la nueva Torre y academia bajo el amparo del reino.</p>`,
      IMG('/assets/images/classes/magharyn/foto2.png', 'Foto 2'))}
${ROW(`<p class="tier-desc">Son estudiosos y disciplinados. Ven la magia como algo que debe entenderse y controlarse, no simplemente usarse. Buscan conocimiento y perfección en su dominio del Thae, siempre al borde de cruzar límites peligrosos en busca de mayor dominio..</p>
<p class="tier-desc">Mantener el control y equilibrio del Thae dentro de los límites establecidos por la Torre, evitando que el Thae vaya corrompiendo el mundo. Línea de ataque ante las grietas a planos desconocidos.</p>`,
      IMG('/assets/images/classes/magharyn/foto3.png', 'Foto 3'))}`,
  },

  desconocido: {
    slug: 'desconocido',
    name: 'Desconocido',
    tag: null,
    avatarImg: '/assets/images/classes/desconocido/avatar.png',
    stats: [],
    contentHtml: `<p class="tier-desc">Algunos nacen con acero, otros con fe, otros con dones que el mundo puede nombrar. Pero existen unos pocos cuya senda no figura en códices ni juramentos. No pertenecen a órdenes conocidas, no responden a linajes ni a doctrinas visibles. Caminan entre ruinas, guerras y sombras dejando señales que pocos entienden.</p>
<p class="tier-desc" style="font-style: italic; color: var(--accent);">Se desconoce si son restos de una verdad olvidada… o ecos de algo que aún no ha despertado.</p>
<p class="tier-desc" style="font-weight: bold; margin-bottom: 0;">Nadie sabe de dónde vienen.<br>Nadie sabe qué buscan.</p>`,
  },
}
