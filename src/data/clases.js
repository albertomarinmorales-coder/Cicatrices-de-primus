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

/** Párrafos de historia (pestañas I–III); omitir marcadores tipo "Imagen" del texto fuente */
const historiaP = (...bloques) =>
  bloques
    .map((s) => String(s).trim())
    .filter((s) => s && !/^imagen$/i.test(s))
    .map((t) => `<p class="tier-desc">${t}</p>`)
    .join('\n')

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
<p class="tier-desc">Los Ciudadanos suelen optar en un punto de su vida a un camino distinto, optando por estudiar artes en combate o seguir haciéndose en negocios.</p>`,
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
${ROW(
      historiaP(
        'No fueron creados por capricho, ni por necesidad inmediata. Los Vhark\'hul nacen de una obsesión.',
        'Fue Erick quien, en su búsqueda por trascender los límites del Thae conocido, comenzó a experimentar con una combinación que muchos consideraban imposible… o prohibida: el Thae del Poder y el Thae de la Muerte. No se trataba de dominar ambos, sino de fundirlos, de crear una fuerza que no solo destruyera, sino que perdurara más allá del final.',
        'El resultado no fue una criatura, sino un propósito encarnado. Los Vhark\'hul no nacen: son forjados.',
        'Cada uno es el producto de rituales donde la vida es moldeada, quebrada y reconstruida bajo una voluntad superior. No poseen la inestabilidad de los Magharyn ni la dependencia de los Nigromantes. Son algo distinto. Algo más… definitivo..'
      ),
      IMG("/assets/images/classes/vharkhul/foto1.png", 'Foto 1')
    )}
${ROW(
      historiaP(
        'Sus armas no son simples herramientas de guerra. Las hojas que empuñan están ligadas a su esencia, y con cada enemigo caído, reclaman algo más que la victoria: recolectan su alma. No como trofeo, sino como combustible. Cada alma absorbida fortalece su existencia, refuerza su vínculo con el Thae y los acerca más a aquello que Erick buscaba crear… una entidad autosostenida, imposible de extinguir por medios convencionales.',
        'Por ello, muchos los llaman desalmados. No por carecer de alma, sino porque han trascendido la necesidad de una propia. Sus emociones son ecos lejanos, su humanidad una sombra que apenas recuerdan. Se mueven con precisión, con frialdad, como si cada acción estuviera ya decidida desde antes de ejecutarse. Otros los llaman guardianes.'
      ),
      IMG("/assets/images/classes/vharkhul/foto2.png", 'Foto 2')
    )}
${ROW(
      historiaP(
        'En lo alto de la Torre del Último Juramento, los Vhark\'hul permanecen. No como vigilantes pasivos, sino como centinelas de algo que pocos comprenden. Allí donde los votos no pueden romperse, donde las promesas tienen peso real, ellos existen como recordatorio viviente de que algunos compromisos… no admiten traición.',
        'Responden al reino. No responden a órdenes comunes. Y no luchan por gloria.',
        'Cada Vhark\'hul sigue un propósito propio, grabado en su ser durante su creación. Un objetivo que puede tomar años, décadas… o siglos en cumplirse.',
        'Y cuando finalmente lo logran, no celebran. Solo continúan.'
      ),
      IMG("/assets/images/classes/vharkhul/foto3.png", 'Foto 3')
    )}`,
  },

  'argent-praetor': {
    slug: 'argent-praetor',
    name: 'Argent Praetor',
    tag: 'Tanque / Luchador',
    avatarImg: '/assets/images/classes/argent-praetor/avatar.png',
    stats: [],
    contentHtml: `
${ROW(
      historiaP(
        'Tras la caída de Raventree Hall y los años del Aislamiento Luminar, la antigua orden de los Thrones fue reformada. De aquella fuerza indivisible nacieron dos caminos distintos, pero complementarios. Así surgieron los Praetor: la manifestación más pura del brazo militar de Thronus.',
        'Si en otros tiempos fueron llamados custodios de la fe, hoy son algo más preciso y necesario: el muro que sostiene el mundo cuando la oscuridad presiona sus cimientos.',
        'No fueron creados para gobernar ni instruir. No fueron llamados para debatir doctrina. Fueron consagrados para resistir.',
        'Allí donde la Llama Eterna es desafiada, el Praetor avanza.',
        'La fuerza de los Praetor no reside únicamente en su armadura ni en el filo de sus armas, sino en la convicción que los sostiene. Viven bajo los Preceptos con disciplina absoluta, respirando la doctrina como si fuese aire. Para ellos, la fe no es consuelo ni refugio: es ley irrevocable.'
      ),
      IMG('/assets/images/classes/argent-praetor/foto1.png', 'Foto 1')
    )}
${ROW(
      historiaP(
        'Su presencia en el campo de batalla no es simbólica. Se interponen entre la oscuridad y el inocente, entre la corrupción y el orden, entre la blasfemia y el altar. Son severos porque el mundo lo exige. Son firmes porque el mal no negocia. Son implacables porque la corrupción no descansa.',
        'El Praetor no protege por compasión. Protege por deber.'
      ),
      IMG('/assets/images/classes/argent-praetor/foto2.png', 'Foto 2')
    )}
${ROW(
      historiaP(
        'No buscan la guerra, pero tampoco la evitan cuando la herejía rehúsa inclinarse. Cuando la sombra se niega a extinguirse y la corrupción rechaza redención, entonces la espada habla y la llama consume. No por odio, ni por placer, sino por mandato del Orden. Dentro de la Lucis Aeternae, los Praetor conforman la primera línea de toda cruzada. Son la cabeza visible de la rama militar, ejemplo para todo aquellos que les siguen y piedra angular de la estrategia bélica de la Orden. Su disciplina refleja el orden celestial que veneran: jerarquía clara, responsabilidad absoluta y obediencia incuestionable al Lux Belator y al Primus Luxor.',
        'No son conquistadores. No son fanáticos sin dirección. Son la muralla viva de Thronus. Y mientras arda la Llama Eterna, un Praetor permanecerá en pie.'
      ),
      IMG('/assets/images/classes/argent-praetor/foto3.png', 'Foto 3')
    )}`,
  },

  dualhar: {
    slug: 'dualhar',
    name: 'Dualhar',
    tag: 'Híbrido de DPS distancia y DPS Físico',
    avatarImg: '/assets/images/classes/dualhar/avatar.webp',
    stats: [],
    contentHtml: `
${ROW(
      historiaP(
        'Primero fue la caída de la Arboleda. Después, la desaparición del Fragmento de Poder. Por último, la caída del Bastión de la Orden Krieger.',
        'Tres hechos. Tres quiebras. Un mismo mundo desmoronándose en silencio.',
        'Pero no todos murieron, ni traicionaron su juramento.',
        'Un eco de Zhenra apareció en el este. Tal vez por intervención directa de la Diosa en un último intento desesperado en buscar aliados en los que una vez fueron bendecidos por su hermana y lucharon en la defensa de la Arboleda. O simplemente el reflejo de un mundo que ya estaba ahogándose en la oscuridad.',
        'De ese eco nacieron los Dualhar.'
      ),
      IMG('/assets/images/classes/dualhar/foto1.png', 'Foto 1')
    )}
${ROW(
      historiaP(
        'Los primeros en manifestarlo fueron algunos de los antiguos Krieger supervivientes que se mantuvieron fieles a sus votos y sus anillos. Con el tiempo, se extendió más allá de estos guerreros. Personas que nunca pertenecieron a la Orden comenzaron a manifestar el mismo vínculo con la vida. Supervivientes, individuos que resistieron donde nada debía sobrevivir o simplemente viajeros que se oponían a la oscuridad.',
        'Con la historia reescrita a día de hoy para muchos, Seralyth fue la responsable del colapso junto los Kriegers que la siguieron. Algunos afirman que su poder creció tras destruir la Arboleda y a Zhenra y de ese poder surgieron los Dualhar.'
      ),
      IMG('/assets/images/classes/dualhar/foto2.png', 'Foto 2')
    )}
${ROW(
      historiaP(
        'Por ello, los Dualhar, portadores de este vínculo viven bajo sospecha constante. Por miedo y desconocimiento, son rechazados y vigilados. Para muchos, no son más que el recuerdo de una traición.',
        'Muchos aceptan ese rechazo y continúan actuando pese a él. Otros ocultan lo que son para evitar ser señalados.',
        'Protegen un mundo que rara vez los acepta, lo que genera una mezcla de distanciamiento, pragmatismo y, en algunos casos, resentimiento. Y mientras la mentira sostiene el nuevo orden, ellos caminan entre dos realidades.'
      ),
      IMG('/assets/images/classes/dualhar/foto3.png', 'Foto 3')
    )}`,
  },

  'luminari-vox': {
    slug: 'luminari-vox',
    name: 'Luminari Vox',
    tag: 'Healer / Buffer',
    avatarImg: '/assets/images/classes/luminari-vox/avatar.png',
    stats: [],
    contentHtml: `
${ROW(
      historiaP(
        'Tras la disolución de los antiguos Thrones y la reforma de la orden luego de los acontecimientos de Raventree Hall, no toda la fuerza de la iglesia tomó la armadura ni el escudo. De la misma raíz nació una segunda vocación. Así surgieron los Luminarii: aquellos destinados no a resistir el embate, sino a revelar la verdad que lo precede. Si los Praetor son el muro que contiene la oscuridad, los Luminarii son la luz que la descubre. No marchan primero para destruir; marchan para revelar.',
        'Dentro de la Lucis Aeternae, los Luminarii encarnan la dimensión doctrinal y espiritual del mandato de Thronus. Son custodios de la palabra, guardianes del dogma y vigilantes de la pureza interna de la fe. Viven consagrados al estudio de los Preceptos, examinando cada verso, preservando cada enseñanza como si se tratase de una chispa desprendida de la Llama Eterna. Para ellos, la fe no solo se defiende. Se comprende; se examina y se prueba.'
      ),
      IMG('/assets/images/classes/luminari-vox/foto1.png', 'Foto 1')
    )}
${ROW(
      historiaP(
        'Su labor no siempre es visible en los campos de batalla, pero sin ella ninguna cruzada sería justa. La corrupción rara vez se manifiesta con estruendo; se infiltra en susurros, se disfraza de duda, se oculta en medias verdades. Los Luminarii escuchan esos susurros. Observan donde otros apartan la mirada. Investigan lo que muchos prefieren ignorar. Son eruditos y jueces. Curiosos y severos. Compasivos, pero nunca ingenuos. Cuando descubren la sombra, no la enfrentan con furia ciega, sino con revelación. Obligan a lo impuro a exponerse bajo la claridad de la Lucis Aeterna, pues entienden que nada corrupto puede resistir una luz que arde sin titubeos.',
        'Mas su deber no termina en el juicio. Allí donde la guerra deja cicatrices y el miedo amenaza con quebrar la esperanza, los Luminarii restauran lo que puede ser salvado. Curan la carne herida, fortalecen el espíritu debilitado y purifican aquello que aún no ha sido consumido por completo. Saben que la fe no solo se impone mediante la espada: también se sostiene mediante la guía y el entendimiento.'
      ),
      IMG('/assets/images/classes/luminari-vox/foto2.png', 'Foto 2')
    )}
${ROW(
      historiaP(
        'Dentro de la jerarquía de la Orden, los Luminarii representan el equilibrio del fuego sagrado. Si los Praetor ejecutan el mandato visible, ellos garantizan que dicho mandato permanezca alineado con la verdad doctrinal. Responden al Lux Purificare y al Primus Luxor con la misma obediencia que sus hermanos armados, pero su campo de batalla es el pensamiento, la herejía latente y la corrupción encubierta.',
        'No buscan protagonismo; buscan claridad. No desean condenar por impulso; desean purificar con precisión.',
        'No son meros inquisidores ni simples sanadores; son el Ojo de la Llama Eterna. Y mientras exista una sombra en Primus, un Luminarii estará observando.'
      ),
      IMG('/assets/images/classes/luminari-vox/foto3.png', 'Foto 3')
    )}`,
  },

  'noc-thar': {
    slug: 'noc-thar',
    name: "Noc'thar",
    tag: 'Debuffer / Healer',
    avatarImg: "/assets/images/classes/nocthar/avatar.png",
    stats: [],
    contentHtml: `
${ROW(
      historiaP(
        'Adentrarse en sus dominios ya no es solo cruzar el umbral de un bosque antiguo. Es internarse en una tierra que recuerda. Una tierra que fue herida… y que no ha olvidado.',
        'Durante eras, la Naturaleza en Primus fue paciente. Toleró el hierro, el fuego y la ambición de las civilizaciones. Susurró advertencias en hojas agitadas y raíces que crujían bajo pasos imprudentes. Los Custos Saltus escuchaban esos susurros y respondían con equilibrio, actuando como puentes entre el mundo físico y los ecos espirituales del cambio eterno representado por Zhenra.',
        'Pero en las tierras del Este, la arboleda de Narthilnor cayó; El corazón verde desapareció… Y con ello, algo más despertó.',
        'En el vacío dejado por su madre espiritual, los antiguos guardianes comprendieron una verdad que siempre había estado latente: la naturaleza no es solo equilibrio. También es instinto. Es tormenta. Es supervivencia.'
      ),
      IMG("/assets/images/classes/nocthar/foto1.png", 'Foto 1')
    )}
${ROW(
      historiaP(
        'Así nacieron los Noc\'thar. No como una orden fundada. No como una tradición transmitida. Sino como la venganza de la propia naturaleza.',
        'Si los Custos fueron Guardianes del Cambio y el Equilibrio, los Noc\'thar son guardianes de la Respuesta y la Reparación. No buscan dominar la naturaleza, pero tampoco limitarla a la paciencia eterna. Han aceptado que cuando la corrupción desgarra el mundo, el bosque no susurra: ruge.',
        'Su vínculo espiritual no fue destruido con la caída de Narthilnor; fue transformado. Allí donde antes encontraban guía en la serenidad perpetua, ahora han aprendido a canalizar también la fuerza primordial del caos, representada en la figura de Vorgrimm, no como amo, sino como herramienta. Entienden que la vida no florece sin violencia natural: el incendio limpia, la helada endurece, y la tormenta purifica.'
      ),
      IMG("/assets/images/classes/nocthar/foto2.png", 'Foto 2')
    )}
${ROW(
      historiaP(
        'Algunos entre ellos aún sanan tierras heridas, pero sus manos ya no son solo suaves. Otros marchan como guerreros inclementes, arrancando la corrupción desde la raíz antes de que pueda extenderse. No actúan desde la compasión ingenua, sino desde una justicia antigua que precede a reyes y credos.',
        'Habitan ahora los lugares donde el bosque es más áspero, donde el viento corta y la nieve cubre cicatrices que aún laten bajo el suelo. Allí, los Noc\'thar velan por el mundo no como mediadores pasivos, sino como su ultimátum viviente.',
        'No han abandonado su misión. La han endurecido. No son meros druidas heridos. Son la herida que aprendió a caminar.',
        'Y cuando la tierra vuelva a gritar, no responderán con un susurro. Responderán con un rugido..'
      ),
      IMG("/assets/images/classes/nocthar/foto3.png", 'Foto 3')
    )}`,
  },

  stormheilm: {
    slug: 'stormheilm',
    name: 'Stormheilm',
    tag: 'Luchador / Tanque',
    avatarImg: '/assets/images/classes/stormheilm/avatar.png',
    stats: [],
    contentHtml: `
${ROW(
      historiaP(
        'Allí donde las cumbres desgarran el cielo y el viento azota como un juicio antiguo, los Stormheilm no esperan. El norte no es herencia. No es derecho. Es conquista constante.',
        'Hubo un tiempo en que fueron guerreros ritualistas dedicados a la resistencia, templados por la supervivencia extrema y el vínculo espiritual con la montaña. Enfrentaban pruebas imposibles y renacían de ellas con la fuerza de la piedra y el trueno en las venas. Buscaban equilibrio con los elementos, honrando la montaña que nunca se inclina. Pero el norte fue manchado por la traición, y la ambición. Por ello, alianzas se quebraron, y la montaña respondió. No dialogó, ni tampoco dudó. Sino que dejó al trueno proclamar su voluntad.',
        'Desde aquella purga, los Stormheilm ya no se definen únicamente por resistencia, sino por determinación absoluta. Son la manada que no retrocede. No portan estandartes pulcros ni proclaman juramentos de corte caballeresco. Son el rugido de la montaña cuando esta decide expulsar el peso muerto que la debilita. Cada Stormheilm sigue siendo un renacido, marcado por ritos que separan al mortal del digno. Pero ahora esas pruebas no solo fortalecen el cuerpo y el espíritu: seleccionan. El débil cae. El desleal se quiebra. El que permanece se convierte en relámpago encarnado.'
      ),
      IMG('/assets/images/classes/stormheilm/foto1.png', 'Foto 1')
    )}
${ROW(
      historiaP(
        'No conocen la retirada. No conocen el temor. La única dirección que aceptan es hacia adelante.',
        'La purga de Ravensvik redujo su número, pero templó su esencia. Comprendieron que el enemigo no siempre se alza más allá del horizonte helado; a veces se oculta en la ambición interna, en el orgullo sin honor. Desde entonces, la manada es más pequeña, más unida y más letal.',
        'Su vínculo con los elementos también se transformó. La piedra, el hielo y el trueno ya no son solo maestros: son armas vivientes en sus manos. Y en la tormenta reconocen el eco de Vorgrimm, no como divinidad distante, sino como principio de prueba y selección. Para ellos, el caos no es destrucción sin sentido; es supervivencia. Es el derecho del fuerte a mantenerse en pie cuando todo lo demás cae.'
      ),
      IMG('/assets/images/classes/stormheilm/foto2.png', 'Foto 2')
    )}
${ROW(
      historiaP(
        'Luchan por dominio del norte. Por legado, y por la manada.',
        'Defenderán Yrsafell hasta que el hielo reclame sus huesos y el trueno pronuncie su nombre por última vez. Porque si la montaña no retrocede ante la tormenta, tampoco lo harán sus hijos.',
        'No son meros bárbaros. No son simples exploradores del norte. Son la tormenta que avanza.',
        'Y cuando el viento aúlle en las cumbres, no será advertencia. Será un anuncio.'
      ),
      IMG('/assets/images/classes/stormheilm/foto3.png', 'Foto 3')
    )}`,
  },

  'velum-caedis': {
    slug: 'velum-caedis',
    name: 'Velum Caedis',
    tag: 'Burst DPS',
    avatarImg: '/assets/images/classes/velum-caedis/avatar.png',
    stats: [],
    contentHtml: `
${ROW(
      historiaP(
        'Azharn. Donde otros retroceden ante el silencio de la muerte, los Azharn avanzan. No lo desafían… lo aceptan. En ese vacío donde todo termina, ellos encuentran propósito.',
        'Son seres marcados por un destino irrevocable, ligados a lo invisible, a lo olvidado, a aquello que se niega a desaparecer. No escuchan a los muertos como un don, sino como una condena que late en su sangre. Susurros sin descanso, voces que no conocen reposo. A través del viento y la música, los ecos de los caídos se aferran a ellos, guiando sus pasos… o arrastrándolos.',
        'Nunca están solos. El aire a su alrededor vibra con presencias: melodías que nacen de recuerdos marchitos, lamentos que desgarran la cordura, armonías que no pertenecen al mundo de los vivos. Para un Azharn, la música no es arte. Es un umbral. Un lenguaje antiguo con el más allá.',
        'Son los intérpretes de lo inconcluso. Ejecutores de voluntades que la muerte no logró apagar. Sanadores de penas que jamás encontraron descanso. Vengadores de agravios enterrados en el olvido… o marionetas de voces que susurran mentiras con la forma de promesas.',
        'El origen de su poder es un secreto que ni siquiera ellos comprenden del todo. Su sangre no los corrompe… los transforma. Los convierte en entidades suspendidas entre dos mundos, capaces de mirar donde otros enloquecerían al instante.',
        'Pero ningún mortal puede sostener esa mirada eternamente. A veces, el umbral devuelve la mirada. Y cuando eso ocurre, no todos logran resistir.',
        'Los Azharn no buscan gloria. La gloria es para los vivos. Lo suyo es algo más antiguo, más frío. Su existencia es un equilibrio imposible, una danza al filo de lo inevitable. Donde otros apartan la vista del final, ellos lo contemplan… y responden.',
        'Cuando el silencio se alza para devorarlo todo, los Azharn no huyen. Ellos cantan. Ellos danzan. Y el mundo se rompe con ellos.'
      ),
      IMG(VELUM_IMG.velumsHero, 'Velum')
    )}
${ROW(
      historiaP(
        'Velum Caedis — Caminantes del Umbral.',
        'Antes de ser vistos… ya han pasado.',
        'Los Velum Caedis no luchan. No en el sentido que los vivos entienden. Ellos se desplazan entre instantes, guiados por una música que nadie más puede oír. Un susurro constante que marca el ritmo de su existencia.',
        'Cada movimiento es una respuesta. Cada paso, una sentencia.',
        'No dominan a los muertos. No los esclavizan. Caminan junto a ellos… o quizás son arrastrados por ellos. Voces sin descanso murmuran en su mente, señalando objetivos, exigiendo actos, reclamando finales.'
      ),
      IMG(VELUM_IMG.caedisFotoApertura, 'Foto 1')
    )}
${ROW(
      historiaP(
        'Algunos obedecen por deber. Otros, por culpa. Y algunos… porque han olvidado cómo dejar de escuchar.',
        'En combate, son irreales. Apariciones fugaces que cortan el tejido de la realidad y desaparecen antes de que la sangre toque el suelo. No buscan destrucción. Buscan precisión.',
        'Un nombre. Un acto. Un final. Y luego, nada.',
        'Pero el precio es inevitable.',
        'Cuanto más tiempo permanecen entre el mundo de los vivos y el eco de los muertos, más difusa se vuelve su existencia. Sus cuerpos siguen moviéndose… pero algo en ellos ya no regresa.',
        'Y llega un momento en que el susurro deja de guiar. Y empieza a reclamar.'
      ),
      IMG(VELUM_IMG.caedisFoto1, 'Foto 2')
    )}`,
  },

  'velum-cantoris': {
    slug: 'velum-cantoris',
    name: 'Velum Cantoris',
    tag: 'Buffer / Debuffer',
    avatarImg: '/assets/images/classes/velum-cantoris/avatar.png',
    stats: [],
    contentHtml: `
${ROW(
      historiaP(
        'Donde otros retroceden ante el silencio de la muerte, los Azharn avanzan. No lo desafían… lo aceptan. En ese vacío donde todo termina, ellos encuentran propósito.',
        'Son seres marcados por un destino irrevocable, ligados a lo invisible, a lo olvidado, a aquello que se niega a desaparecer. No escuchan a los muertos como un don, sino como una condena que late en su sangre. Susurros sin descanso, voces que no conocen reposo. A través del viento y la música, los ecos de los caídos se aferran a ellos, guiando sus pasos… o arrastrándolos.',
        'Nunca están solos. El aire a su alrededor vibra con presencias: melodías que nacen de recuerdos marchitos, lamentos que desgarran la cordura, armonías que no pertenecen al mundo de los vivos. Para un Azharn, la música no es arte. Es un umbral. Un lenguaje antiguo con el más allá.',
        'Son los intérpretes de lo inconcluso. Ejecutores de voluntades que la muerte no logró apagar. Sanadores de penas que jamás encontraron descanso. Vengadores de agravios enterrados en el olvido… o marionetas de voces que susurran mentiras con la forma de promesas.',
        'El origen de su poder es un secreto que ni siquiera ellos comprenden del todo. Su sangre no los corrompe… los transforma. Los convierte en entidades suspendidas entre dos mundos, capaces de mirar donde otros enloquecerían al instante.',
        'Pero ningún mortal puede sostener esa mirada eternamente. A veces, el umbral devuelve la mirada. Y cuando eso ocurre, no todos logran resistir.',
        'Los Azharn no buscan gloria. La gloria es para los vivos. Lo suyo es algo más antiguo, más frío. Su existencia es un equilibrio imposible, una danza al filo de lo inevitable. Donde otros apartan la vista del final, ellos lo contemplan… y responden.',
        'Cuando el silencio se alza para devorarlo todo, los Azharn no huyen. Ellos cantan. Ellos danzan. Y el mundo se rompe con ellos.'
      ),
      IMG(VELUM_IMG.velumsHero, 'Velum')
    )}
${ROW(
      historiaP(
        'Velum Cantoris — La Voz que Descompone el Mundo.',
        'No toda música está destinada a ser escuchada.',
        'Los Velum Cantoris no se limitan a cantar… serían más soportables si así fuera. Son canales, conductos a través de los cuales lo que yace más allá encuentra forma y sonido. Sus voces son solo el inicio.',
        'Instrumentos antiguos cuelgan de sus manos o reposan a su alrededor: cuerdas que vibran sin ser tocadas, tambores que laten como corazones olvidados, flautas que exhalan alientos que no pertenecen a ningún pulmón vivo. A veces son ellos quienes interpretan. A veces… no.',
        'Hay momentos en los que sus manos se detienen… y la música continúa. Los muertos tocan a través de ellos. O en lugar de ellos.'
      ),
      IMG('/assets/images/classes/velum-cantoris/foto2.png', 'Foto 1')
    )}
${ROW(
      historiaP(
        'Donde su arte resuena, la realidad se agrieta. Las certezas se pudren. La voluntad se deshace como ceniza entre los dedos. No invocan el Thae de Muerte y Caos… porque ya habita en cada nota, en cada vibración que se arrastra entre mundos.',
        'Cada sonido arrastra un eco antiguo. Cada pausa es una grieta por donde algo observa de vuelta.',
        'Algunos creen que provocan la desesperación. Se equivocan. La desesperación siempre estuvo ahí. Ellos solo le dan forma. Le dan voz. Le dan ritmo.',
        'Y cuando la última nota muere… la música no desaparece. Permanece, aferrada a la mente, repitiéndose en silencio, erosionando lentamente lo que encuentra.',
        'Nadie que haya presenciado a un Velum Cantoris vuelve intacto. Porque no importa quién tocó realmente… la canción siempre encuentra a quien escucharla.'
      ),
      IMG('/assets/images/classes/velum-cantoris/foto3.png', 'Foto 2')
    )}`,
  },

  'zereth-mor': {
    slug: 'zereth-mor',
    name: 'Zereth-Mor',
    tag: 'DPS mágico / Debuffer',
    avatarImg: '/assets/images/classes/zereth-mor/avatar.png',
    stats: [],
    contentHtml: `
${ROW(
      historiaP(
        'No todos los que estudian la muerte lo hacen desde las sombras. Algunos fueron autorizados a mirarla de frente… y a utilizarla.',
        'Los Zereth\'mor no surgieron como una orden clandestina ni como un culto prohibido. Su existencia fue legitimada en un momento donde el mundo necesitaba respuestas que la vida no podía ofrecer. Fue Meiga, en un acto que muchos consideraron impensable, quien presentó la nigromancia no como una aberración, sino como una herramienta. Y contra todo pronóstico, tanto el rey como Caelis concedieron su aprobación. No por confianza. Sino por necesidad.'
      ),
      IMG('/assets/images/classes/zereth-mor/foto1.png', 'Foto 1')
    )}
${ROW(
      historiaP(
        'Desde entonces, los Zereth\'mor caminan una línea peligrosa: son practicantes de un arte prohibido… permitido bajo vigilancia. Enseñan a quienes pueden soportarlo, formando discípulos capaces de manipular lo que otros temen incluso nombrar.',
        'Para ellos, los muertos no son sagrados. Son útiles.'
      ),
      IMG('/assets/images/classes/zereth-mor/foto2.png', 'Foto 2')
    )}
${ROW(
      historiaP(
        'No ven almas en descanso ni cuerpos dignos de duelo. Ven estructuras vacías, listas para ser reclamadas. En sus manos, los caídos se convierten en marionetas, obedientes, silenciosas, eternamente funcionales. Cada cadáver reanimado es un hilo más en una red invisible que solo ellos saben manejar.',
        'Por eso se les teme. Porque los Zereth\'mor no desafían la muerte. La reorganizan.',
        'Aun así, su existencia sigue siendo cuestionada. Para muchos, son una traición al orden natural. Para otros, una herramienta necesaria en tiempos de guerra. Pero para quienes entienden su verdadera naturaleza, representan algo más inquietante: la prueba de que la muerte… puede perder su significado.',
        'Y cuando eso ocurre, no hay límite claro entre lo que debe permanecer en reposo… y lo que puede volver a levantarse.'
      ),
      IMG('/assets/images/classes/zereth-mor/foto3.png', 'Foto 3')
    )}`,
  },

  magharyn: {
    slug: 'magharyn',
    name: 'Magharyn',
    tag: 'Burst DPS',
    avatarImg: '/assets/images/classes/magharyn/avatar.png',
    stats: [],
    contentHtml: `
${ROW(
      historiaP(
        'Aquí no estamos ante simples magos o hechiceros. Los Magharyn son los guardianes del Thae, una energía primordial que fluye a través de toda forma de vida y materia: desde el aire que respiramos hasta las rocas más antiguas del mundo. No se limitan a canalizar esta fuerza; la transforman, le dan forma y, lo más importante, la interpretan. Entienden el Thae como una corriente viva, en constante diálogo con el entorno, y a través de ese diálogo es como nace su poder.'
      ),
      IMG('/assets/images/classes/magharyn/foto1.png', 'Foto 1')
    )}
${ROW(
      historiaP(
        'Su poder no es caótico ni impulsivo. Es estructurado, preciso, guiado por una filosofía ancestral que combina el estudio riguroso con una espiritualidad introspectiva. Para un Magharyn, lanzar un hechizo es tanto una acción práctica como un acto de fe, de conexión con el universo.'
      ),
      IMG('/assets/images/classes/magharyn/foto2.png', 'Foto 2')
    )}
${ROW(
      historiaP(
        'Antiguamente reconocidos oficialmente por la Academia Nidharrow, los Magharyn actúan bajo permiso real y operan en todo el territorio como fuerza de orden, investigadores. En los actuales tiempos de conflictos, son la fuerza principal al servicio del reino. Pero en la calma, florecen como eruditos, compartiendo su conocimiento con comunidades, nobles y otros estudiosos.'
      ),
      IMG('/assets/images/classes/magharyn/foto3.png', 'Foto 3')
    )}`,
  },

}
