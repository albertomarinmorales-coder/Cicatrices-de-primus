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
  /** Única imagen del hub /clase-velums (arte compartido Azharn) */
  velumsHero: '/sources/Clases/Velums/velums-hero.png',
  caedisAvatar: '/sources/Clases/7.%20Velum%20Caedis/fotos/avatar.png',
  cantorisAvatar: '/sources/Clases/7.%20Velum%20Cantoris/fotos/avatar.png',
  caedisFotoApertura: '/sources/Clases/7.%20Velum%20Caedis/fotos/foto-apertura.png',
  caedisFoto1: '/sources/Clases/7.%20Velum%20Caedis/fotos/foto1.png',
}

export const clasesData = {
  ciudadano: {
    slug: 'ciudadano',
    name: 'Ciudadano',
    tag: 'Soporte / Utilidad',
    avatarImg: '/sources/Clases/1.%20Ciudadano/fotos/avatar.png',
    stats: [
      { label: 'Utilidad', value: 95 },
      { label: 'Supervivencia', value: 65 },
      { label: 'Complejidad', value: 40 },
    ],
    contentHtml: `
${ROW(`<p class="tier-desc">El Ciudadano no es solo un campesino, un recolector o un simple trabajador. En Primus, el plebeyo representa el corazón de la sociedad. Es quien forja las espadas, cultiva las tierras, cura las enfermedades, y mantiene en pie los cimientos del mundo conocido. Mientras casas nobles juegan a la política y soldados alzan armas, el ciudadano común crea, construye y sobrevive.</p>`,
      IMG('/sources/Clases/1.%20Ciudadano/fotos/foto1.png', 'Foto 1'))}
${ROW(`<p class="tier-desc">Aunque históricamente relegados a las clases bajas, los Ciudadano que sobrevivieron a las guerras y los reinos fracturados adquirieron una sabiduría práctica invaluable. En la Quinta Era, muchos formaron gremios y aprendieron a negociar su trabajo como un recurso esencial.</p>
<p class="tier-desc">El Ciudadano ha vivido la vida sin grandes lujos o con muchos lujos depende de su posicion social, pero con una fuerte conexión con la realidad del mundo normalmente. Sabe que todo lo que sube puede caer, y que sin sus manos, ningún imperio puede sostenerse. Algunos Ciudadanos son idealistas, otros más cínicos; pero todos comparten una cosa: conocimiento del valor del esfuerzo y la repetición.</p>`,
      IMG('/sources/Clases/1.%20Ciudadano/fotos/foto2.png', 'Foto 2'))}
${ROW(`<p class="tier-desc">Donde una casa noble piensa en estrategia, el Ciudadano común ve el estado de la cosecha. Donde un Magharyn habla del equilibrio del Thae, el ciudadano aplicado en salud conoce qué planta puede sanar o envenenar en segundos.</p>
<p class="tier-desc" style="font-weight: bold; font-style: italic; color: var(--accent);">Los Ciudadanos Suelen Optar en un punto de su vida a un camino distinto, optando por estudiar artes en combate o, seguir haciéndose en negocios.</p>`,
      IMG('/sources/Clases/1.%20Ciudadano/fotos/foto3.png', 'Foto 3'))}`,
  },

  'vhark-hul': {
    slug: 'vhark-hul',
    name: "Vhark'Hul",
    tag: 'Tanque / Luchador',
    avatarImg: "/sources/Clases/10.%20Vhark'Hul/fotos/avatar.png",
    stats: [
      { label: 'Daño', value: 85 },
      { label: 'Resistencia', value: 90 },
      { label: 'Dificultad', value: 75 },
    ],
    contentHtml: `
${ROW(`<p class="tier-desc">No fueron creados por capricho, ni por necesidad inmediata.</p>
<p class="tier-desc" style="font-weight: bold; color: var(--accent);">Los Vhark'hul nacen de una obsesión.</p>
<p class="tier-desc">Fue Erick quien, en su búsqueda por trascender los límites del Thae conocido, comenzó a experimentar con una combinación que muchos consideraban imposible… o prohibida: el Thae del Poder y el Thae de la Muerte. No se trataba de dominar ambos, sino de fundirlos, de crear una fuerza que no solo destruyera, sino que perdurara más allá del final.</p>
<p class="tier-desc" style="font-style: italic;">El resultado no fue una criatura, sino un propósito encarnado.</p>
<p class="tier-desc" style="font-weight: bold; color: var(--gold);">Los Vhark'hul no nacen: son forjados.</p>
<p class="tier-desc">Cada uno es el producto de rituales donde la vida es moldeada, quebrada y reconstruida bajo una voluntad superior. No poseen la inestabilidad de los Magharyn ni la dependencia de los Nigromantes. Son algo distinto. Algo más… definitivo.</p>`,
      IMG("/sources/Clases/10.%20Vhark'Hul/fotos/foto1.png", 'Foto 1'))}
${ROW(`<p class="tier-desc" style="font-style: italic;">Sus armas no son simples herramientas de guerra.</p>
<p class="tier-desc">Las hojas que empuñan están ligadas a su esencia, y con cada enemigo caído, reclaman algo más que la victoria: recolectan su alma. No como trofeo, sino como combustible. Cada alma absorbida fortalece su existencia, refuerza su vínculo con el Thae y los acerca más a aquello que Erick buscaba crear… una entidad autosostenida, imposible de extinguir por medios convencionales.</p>
<p class="tier-desc">Por ello, muchos los llaman desalmados.</p>
<p class="tier-desc">No por carecer de alma, sino porque han trascendido la necesidad de una propia. Sus emociones son ecos lejanos, su humanidad una sombra que apenas recuerdan. Se mueven con precisión, con frialdad, como si cada acción estuviera ya decidida desde antes de ejecutarse.</p>
<p class="tier-desc" style="font-weight: bold; color: var(--gold);">Otros los llaman guardianes.</p>`,
      IMG("/sources/Clases/10.%20Vhark'Hul/fotos/foto2.png", 'Foto 2'))}
${ROW(`<p class="tier-desc">En lo alto de la Torre del Último Juramento, los Vhark'hul permanecen. No como vigilantes pasivos, sino como centinelas de algo que pocos comprenden. Allí donde los votos no pueden romperse, donde las promesas tienen peso real, ellos existen como recordatorio viviente de que algunos compromisos… no admiten traición.</p>
<p class="tier-desc" style="margin-bottom: 0;">Responden al reino.<br>No responden a órdenes comunes.<br>Y no luchan por gloria.</p>
<p class="tier-desc" style="margin-top: 1rem;">Cada Vhark'hul sigue un propósito propio, grabado en su ser durante su creación. Un objetivo que puede tomar años, décadas… o siglos en cumplirse.</p>
<p class="tier-desc" style="font-style: italic; color: var(--accent);">Y cuando finalmente lo logran, no celebran.<br>Solo continúan.</p>`,
      IMG("/sources/Clases/10.%20Vhark'Hul/fotos/foto%203.png", 'Foto 3'))}`,
  },

  'argent-praetor': {
    slug: 'argent-praetor',
    name: 'Argent Praetor',
    tag: 'Tanque / Luchador',
    avatarImg: '/sources/Clases/2.%20Argent%20Praetor/Fotos/avatar.png',
    stats: [],
    contentHtml: `
${ROW(`<p class="tier-desc">Tras la caída de Raventree Hall y los años del Aislamiento Luminar, la antigua orden de los Thrones fue reformada. De aquella fuerza indivisible nacieron dos caminos distintos, pero complementarios. Así surgieron los Praetor: la manifestación más pura del brazo militar de Thronus.</p>
<p class="tier-desc">Si en otros tiempos fueron llamados custodios de la fe, hoy son algo más preciso y necesario: el muro que sostiene el mundo cuando la oscuridad presiona sus cimientos.</p>
<p class="tier-desc" style="font-weight: bold; color: var(--gold);">No fueron creados para gobernar ni instruir. No fueron llamados para debatir doctrina. Fueron consagrados para resistir.</p>
<p class="tier-desc" style="font-style: italic; color: var(--accent);">Allí donde la Llama Eterna es desafiada, el Praetor avanza.</p>
<p class="tier-desc">La fuerza de los Praetor no reside únicamente en su armadura ni en el filo de sus armas, sino en la convicción que los sostiene. Viven bajo los Preceptos con disciplina absoluta, respirando la doctrina como si fuese aire. Para ellos, la fe no es consuelo ni refugio: es ley irrevocable.</p>`,
      IMG('/sources/Clases/2.%20Argent%20Praetor/Fotos/foto1.png', 'Foto 1'))}
${ROW(`<p class="tier-desc">Tras la caída de Raventree Hall y los años del Aislamiento Luminar, la antigua orden de los Thrones fue reformada. De aquella fuerza indivisible nacieron dos caminos distintos, pero complementarios. Así surgieron los Praetor: la manifestación más pura del brazo militar de Thronus.</p>
<p class="tier-desc">Si en otros tiempos fueron llamados custodios de la fe, hoy son algo más preciso y necesario: el muro que sostiene el mundo cuando la oscuridad presiona sus cimientos.</p>
<p class="tier-desc" style="font-style: italic;">No fueron creados para gobernar ni instruir. No fueron llamados para debatir doctrina. Fueron consagrados para resistir.</p>
<p class="tier-desc" style="font-weight: italic; color: var(--gold);">Allí donde la Llama Eterna es desafiada, el Praetor avanza.</p>
<p class="tier-desc">La fuerza de los Praetor no reside únicamente en su armadura ni en el filo de sus armas, sino en la convicción que los sostiene. Viven bajo los Preceptos con disciplina absoluta, respirando la doctrina como si fuese aire. Para ellos, la fe no es consuelo ni refugio: es ley irrevocable.</p>`,
      IMG('/sources/Clases/2.%20Argent%20Praetor/Fotos/foto2.png', 'Foto 2'))}
${ROW(`<p class="tier-desc">No buscan la guerra, pero tampoco la evitan cuando la herejía rehúsa inclinarse. Cuando la sombra se niega a extinguirse y la corrupción rechaza redención, entonces la espada habla y la llama consume. No por odio, ni por placer, sino por mandato del Orden. Dentro de la Lucis Aeternae, los Praetor conforman la primera línea de toda cruzada. Son la cabeza visible de la rama militar, ejemplo para todo aquellos que les siguen y piedra angular de la estrategia bélica de la Orden. Su disciplina refleja el orden celestial que veneran: jerarquía clara, responsabilidad absoluta y obediencia incuestionable al Lux Belator y al Primus Luxor.</p>
<p class="tier-desc" style="margin-bottom: 0;">No son conquistadores.<br>No son fanáticos sin dirección.<br>Son la muralla viva de Thronus.</p>
<p class="tier-desc" style="font-style: italic; color: var(--gold); margin-top: 1rem;">Y mientras arda la Llama Eterna, un Praetor permanecerá en pie.</p>`,
      IMG('/sources/Clases/2.%20Argent%20Praetor/Fotos/foto3.png', 'Foto 3'))}`,
  },

  dualhar: {
    slug: 'dualhar',
    name: 'Dualhar',
    tag: 'DPS Distancia / DPS Físico',
    avatarImg: '/sources/Clases/3.%20Dualhar/Fotos/avatar.png',
    stats: [],
    contentHtml: `
${ROW(`<p class="tier-desc">Debajo del Dualhar</p>
<p class="tier-desc">Los Dualhar no son un mito… pero tampoco son una presencia común.</p>
<p class="tier-desc">Su existencia es conocida en distintos rincones del mundo, mencionados en relatos de viajeros, informes militares y susurros en las cortes. No se ocultan como un secreto prohibido, pero tampoco se muestran abiertamente. Se sabe que existen, que operan… y que es mejor no interferir con sus asuntos.</p>
<p class="tier-desc">Su origen se vincula a unas antiguas ruinas al este de la capital de Azimra, lugar que muchos reconocen como su base o refugio principal. Aunque no es un territorio declarado, pocos dudan que quienes se acercan demasiado sin invitación están siendo observados mucho antes de darse cuenta.</p>`,
      IMG('/sources/Clases/3.%20Dualhar/Fotos/foto1.png', 'Foto 1'))}
${ROW(`<p class="tier-desc">Los Dualhar están presentes en ciudades, caminos y territorios clave.</p>
<p class="tier-desc" style="font-weight: bold; color: var(--accent);">No dominan… pero vigilan.</p>
<p class="tier-desc">Actúan como espías, exploradores y ejecutores cuando es necesario. Su capacidad para moverse sin ser detectados los convierte en una fuerza difícil de rastrear, pero no invisible. Algunos han visto sus marcas, otros han sobrevivido a sus intervenciones, y unos pocos incluso han logrado negociar con ellos.</p>`,
      IMG('/sources/Clases/3.%20Dualhar/Fotos/foto2.png', 'Foto 2'))}
${ROW(`<p class="tier-desc">En combate, su eficiencia es incuestionable.</p>
<p class="tier-desc">Son expertos arqueros, capaces de abatir objetivos a distancia con precisión implacable, y espadachines que dominan enfrentamientos rápidos y decisivos. No prolongan las batallas: las resuelven.</p>
<p class="tier-desc" style="font-weight: bold; color: var(--gold);">El sigilo es su lenguaje, pero no su única herramienta.<br>Saben cuándo observar… y cuándo actuar.</p>
<p class="tier-desc" style="margin-bottom: 0;">Para algunos reinos, los Dualhar son aliados incómodos.<br>Para otros, una amenaza latente.</p>
<p class="tier-desc" style="font-style: italic; color: var(--accent); margin-top: 1rem;">Pero para todos, representan una certeza:<br>No están ocultos…<br>solo eligen cuándo ser vistos.</p>`,
      IMG('/sources/Clases/3.%20Dualhar/Fotos/foto3.png', 'Foto 3'))}`,
  },

  'luminari-vox': {
    slug: 'luminari-vox',
    name: 'Luminari Vox',
    tag: 'Healer / Buffer',
    avatarImg: '/sources/Clases/4.%20Luminari%20Vox/fotos/avatar.png',
    stats: [],
    contentHtml: `
${ROW(`<p class="tier-desc">Tras la disolución de los antiguos Thrones y la reforma de la orden luego de los acontecimientos de Raventree Hall, no toda la fuerza de la iglesia tomó la armadura ni el escudo. De la misma raíz nació una segunda vocación. Así surgieron los Luminarii: aquellos destinados no a resistir el embate, sino a revelar la verdad que lo precede. Si los Praetor son el muro que contiene la oscuridad, los Luminarii son la luz que la descubre. No marchan primero para destruir; marchan para revelar.</p>
<p class="tier-desc">Dentro de la Lucis Aeternae, los Luminarii encarnan la dimensión doctrinal y espiritual del mandato de Thronus. Son custodios de la palabra, guardianes del dogma y vigilantes de la pureza interna de la fe. Viven consagrados al estudio de los Preceptos, examinando cada verso, preservando cada enseñanza como si se tratase de una chispa desprendida de la Llama Eterna. Para ellos, la fe no solo se defiende. Se comprende; se examina y se prueba.</p>`,
      IMG('/sources/Clases/4.%20Luminari%20Vox/fotos/foto1.png', 'Foto 1'))}
${ROW(`<p class="tier-desc">Su labor no siempre es visible en los campos de batalla, pero sin ella ninguna cruzada sería justa. La corrupción rara vez se manifiesta con estruendo; se infiltra en susurros, se disfraza de duda, se oculta en medias verdades. Los Luminarii escuchan esos susurros. Observan donde otros apartan la mirada. Investigan lo que muchos prefieren ignorar. Son eruditos y jueces. Curiosos y severos. Compasivos, pero nunca ingenuos. Cuando descubren la sombra, no la enfrentan con furia ciega, sino con revelación.</p>
<p class="tier-desc">Mas su deber no termina en el juicio. Allí donde la guerra deja cicatrices y el miedo amenaza con quebrar la esperanza, los Luminarii restauran lo que puede ser salvado. Curan la carne herida, fortalecen el espíritu debilitado y purifican aquello que aún no ha sido consumido por completo. Saben que la fe no solo se impone mediante la espada: también se sostiene mediante la guía y el entendimiento.</p>`,
      IMG('/sources/Clases/4.%20Luminari%20Vox/fotos/foto2.png', 'Foto 2'))}
${ROW(`<p class="tier-desc">Dentro de la jerarquía de la Orden, los Luminarii representan el equilibrio del fuego sagrado. Si los Praetor ejecutan el mandato visible, ellos garantizan que dicho mandato permanezca alineado con la verdad doctrinal. Responden al Lux Purificare y al Primus Luxor con la misma obediencia que sus hermanos armados, pero su campo de batalla es el pensamiento, la herejía latente y la corrupción encubierta.</p>
<p class="tier-desc" style="font-weight: bold; margin-bottom: 0;">No buscan protagonismo; Buscan claridad.<br>No desean condenar por impulso; desean purificar con precisión.</p>
<p class="tier-desc" style="font-style: italic; color: var(--gold); margin-top: 1rem;">No son meros inquisidores ni simples sanadores; son el Ojo de la Llama Eterna.<br>Y mientras exista una sombra en Primus, un Luminarii estará observando.</p>`,
      IMG('/sources/Clases/4.%20Luminari%20Vox/fotos/foto3.png', 'Foto 3'))}`,
  },

  'noc-thar': {
    slug: 'noc-thar',
    name: "Noc'thar",
    tag: 'Debuffer / Healer',
    avatarImg: "/sources/Clases/5.%20Noc'thar/fotos/avatar.png",
    stats: [],
    contentHtml: `
${ROW(`<p class="tier-desc">Adentrarse en sus dominios ya no es solo cruzar el umbral de un bosque antiguo. Es internarse en una tierra que recuerda. Una tierra que fue herida… y que no ha olvidado.</p>
<p class="tier-desc">Durante eras, la Naturaleza en Primus fue paciente. Toleró el hierro, el fuego y la ambición de las civilizaciones. Susurró advertencias en hojas agitadas y raíces que crujían bajo pasos imprudentes. Los Custos Saltus escuchaban esos susurros y respondían con equilibrio, actuando como puentes entre el mundo físico y los ecos espirituales del cambio eterno representado por Zhenra.</p>
<p class="tier-desc" style="font-weight: bold; color: var(--accent);">Pero en las tierras del Este, la arboleda de Narthilnor cayó; El corazón verde desapareció… Y con ello, algo más despertó.</p>
<p class="tier-desc">En el vacío dejado por su madre espiritual, los antiguos guardianes comprendieron una verdad que siempre había estado latente: la naturaleza no es solo equilibrio. También es instinto. Es tormenta. Es supervivencia.</p>`,
      IMG("/sources/Clases/5.%20Noc'thar/fotos/foto1.png", 'Foto 1'))}
${ROW(`<p class="tier-desc" style="font-style: italic; color: var(--gold); margin-bottom: 0;">Así nacieron los Noc'thar.</p>
<p class="tier-desc" style="font-weight: bold; margin-top: 1rem;">No como una orden fundada.<br>No como una tradición transmitida.<br>Sino como la venganza de la propia naturaleza.</p>
<p class="tier-desc">Si los Custos fueron Guardianes del Cambio y el Equilibrio, los Noc'thar son guardianes de la Respuesta y la Reparación. No buscan dominar la naturaleza, pero tampoco limitarla a la paciencia eterna. Han aceptado que cuando la corrupción desgarra el mundo, el bosque no susurra: ruge.</p>
<p class="tier-desc">Su vínculo espiritual no fue destruido con la caída de Narthilnor; fue transformado. Allí donde antes encontraban guía en la serenidad perpetua, ahora han aprendido a canalizar también la fuerza primordial del caos, representada en la figura de Vorgrimm, no como amo, sino como herramienta. Entienden que la vida no florece sin violencia natural: el incendio limpia, la helada endurece, y la tormenta purifica.</p>`,
      IMG("/sources/Clases/5.%20Noc'thar/fotos/foto2.png", 'Foto 2'))}
${ROW(`<p class="tier-desc">Algunos entre ellos aún sanan tierras heridas, pero sus manos ya no son solo suaves. Otros marchan como guerreros inclementes, arrancando la corrupción desde la raíz antes de que pueda extenderse. No actúan desde la compasión ingenua, sino desde una justicia antigua que precede a reyes y credos.</p>
<p class="tier-desc">Habitan ahora los lugares donde el bosque es más áspero, donde el viento corta y la nieve cubre cicatrices que aún laten bajo el suelo. Allí, los Noc'thar velan por el mundo no como mediadores pasivos, sino como su ultimátum viviente.</p>
<p class="tier-desc" style="margin-bottom: 0;">No han abandonado su misión.<br>La han endurecido.</p>
<p class="tier-desc" style="font-style: italic; color: var(--accent); margin-top: 1rem;">No son meros druidas heridos.<br>Son la herida que aprendió a caminar.</p>
<p class="tier-desc" style="font-weight: bold; color: var(--gold);">Y cuando la tierra vuelva a gritar, no responderán con un susurro.<br>Responderán con un rugido.</p>`,
      IMG("/sources/Clases/5.%20Noc'thar/fotos/foto3.png", 'Foto 3'))}`,
  },

  stormheilm: {
    slug: 'stormheilm',
    name: 'Stormheilm',
    tag: 'Luchador / Tanque',
    avatarImg: '/sources/Clases/6.%20Stormheilm/fotos/avatar.png',
    stats: [],
    contentHtml: `
${ROW(`<p class="tier-desc">Allí donde las cumbres desgarran el cielo y el viento azota como un juicio antiguo, los Stormheilm no esperan. El norte no es herencia. No es derecho. Es conquista constante.</p>
<p class="tier-desc">Hubo un tiempo en que fueron guerreros ritualistas dedicados a la resistencia, templados por la supervivencia extrema y el vínculo espiritual con la montaña. Enfrentaban pruebas imposibles y renacían de ellas con la fuerza de la piedra y el trueno en las venas. Buscaban equilibrio con los elementos, honrando la montaña que nunca se inclina. Pero el norte fue manchado por la traición, y la ambición. Por ello, alianzas se quebraron, y la montaña respondió. No dialogó, ni tampoco dudó. Sino que dejó al trueno proclamar su voluntad.</p>
<p class="tier-desc">Desde aquella purga, los Stormheilm ya no se definen únicamente por resistencia, sino por determinación absoluta. Son la manada que no retrocede. No portan estandartes pulcros ni proclaman juramentos de corte caballeresco. Son el rugido de la montaña cuando esta decide expulsar el peso muerto que la debilita. Cada Stormheilm sigue siendo un renacido, marcado por ritos que separan al mortal del digno. Pero ahora esas pruebas no solo fortalecen el cuerpo y el espíritu: seleccionan. El débil cae. El desleal se quiebra. El que permanece se convierte en relámpago encarnado.</p>`,
      IMG('/sources/Clases/6.%20Stormheilm/fotos/foto1.png', 'Foto 1'))}
${ROW(`<p class="tier-desc">No conocen la retirada. No conoce</p>
<p class="tier-desc">La única dirección que aceptan es hacia adelante.</p>
<p class="tier-desc">La purga de Ravensvik redujo su número, pero templó su esencia. Comprendieron que el enemigo no siempre se alza más allá del horizonte helado; a veces se oculta en la ambición interna, en el orgullo sin honor. Desde entonces, la manada es más pequeña, más unida y más letal.</p>
<p class="tier-desc">Su vínculo con los elementos también se transformó. La piedra, el hielo y el trueno ya no son solo maestros: son armas vivientes en sus manos. Y en la tormenta reconocen el eco de Vorgrimm, no como divinidad distante, sino como principio de prueba y selección. Para ellos, el caos no es destrucción sin sentido; es supervivencia. Es el derecho del fuerte a mantenerse en pie cuando todo lo demás cae.</p>`,
      IMG('/sources/Clases/6.%20Stormheilm/fotos/foto2.png', 'Foto 2'))}
${ROW(`<p class="tier-desc">Luchan por dominio del norte. Por legado, y por la manada.</p>
<p class="tier-desc">Defenderán Yrsafell hasta que el hielo reclame sus huesos y el trueno pronuncie su nombre por última vez. Porque si la montaña no retrocede ante la tormenta, tampoco lo harán sus hijos.</p>
<p class="tier-desc">No son meros bárbaros.</p><p class="tier-desc">No son simples exploradores del norte.</p>
<p class="tier-desc">Son la tormenta que avanza.</p>
<p class="tier-desc">Y cuando el viento aúlle en las cumbres, no será advertencia.</p>
<p class="tier-desc">Será un anuncio.</p>`,
      IMG('/sources/Clases/6.%20Stormheilm/fotos/foto3.png', 'Foto 3'))}`,
  },

  'velum-caedis': {
    slug: 'velum-caedis',
    name: 'Velum Caedis',
    chapterTitle: 'Caminantes del Umbral',
    tag: 'Burst DPS',
    avatarImg: '/sources/Clases/7.%20Velum%20Caedis/fotos/avatar.png',
    stats: [],
    contentHtml: `
${ROW(`<p class="tier-desc">Antes de ser vistos… ya han pasado. Los Velum Caedis no luchan, no en el sentido que los vivos entienden: se desplazan entre instantes, guiados por una música que nadie más puede oír, un susurro constante que marca el ritmo de su existencia. Cada movimiento es una respuesta; cada paso, una sentencia.</p>
<p class="tier-desc">No dominan a los muertos, no los esclavizan. Caminan junto a ellos… o quizás son arrastrados por ellos. Voces sin descanso murmuran en su mente, señalando objetivos, exigiendo actos, reclamando finales.</p>`,
      IMG(VELUM_IMG.caedisFotoApertura, 'Foto 1'))}
${ROW(`<p class="tier-desc">Algunos obedecen por deber; otros, por culpa; y otros aún, porque hace ya tanto que olvidaron cómo dejar de escuchar que ni el silencio les resulta un alivio.</p>
<p class="tier-desc">En combate son irreales: apariciones fugaces que cortan el tejido de la realidad y se evaden antes de que la sangre toque el suelo. No anhelan la destrucción en abstracto: buscan un nombre, un acto, un final. Y luego, nada.</p>
<p class="tier-desc">Pero el precio es inevitable. Cuanto más se demoran en la frontera entre el mundo de los vivos y el eco de los muertos, más se difuminan. El cuerpo obedece; la presencia, en cambio, se resquebraja — algo de ellos deja de volver, aunque los pies sigan andando.</p>
<p class="tier-desc">Y entonces, un día, el susurro deja de guiar. Y empieza, en cambio, a reclamar.</p>`,
      IMG(VELUM_IMG.caedisFoto1, 'Foto 2'))}`,
  },

  'velum-cantoris': {
    slug: 'velum-cantoris',
    name: 'Velum Cantoris',
    tag: 'Buffer / Debuffer',
    avatarImg: '/sources/Clases/7.%20Velum%20Cantoris/fotos/avatar.png',
    stats: [],
    contentHtml: `
${ROW(`<p class="tier-desc">Velum Cantoris — La Voz que Descompone el Mundo</p>
<p class="tier-desc">No toda música está destinada a ser escuchada.</p>
<p class="tier-desc">Los Velum Cantoris no se limitan a cantar… serían más soportables si así fuera. Son canales, conductos a través de los cuales lo que yace más allá encuentra forma y sonido. Sus voces son solo el inicio.</p>
<p class="tier-desc">Instrumentos antiguos cuelgan de sus manos o reposan a su alrededor: cuerdas que vibran sin ser tocadas, tambores que laten como corazones olvidados, flautas que exhalan alientos que no pertenecen a ningún pulmón vivo. A veces son ellos quienes interpretan.</p>
<p class="tier-desc">A veces… no.</p>
<p class="tier-desc">Hay momentos en los que sus manos se detienen…</p>
<p class="tier-desc">y la música continúa.</p>
<p class="tier-desc">Los muertos tocan a través de ellos.</p>
<p class="tier-desc">O en lugar de ellos.</p>`,
      IMG('/sources/Clases/7.%20Velum%20Cantoris/fotos/foto2.png', 'Foto 1'))}
${ROW(`<p class="tier-desc">Donde su arte resuena, la realidad se agrieta. Las certezas se pudren. La voluntad se deshace como ceniza entre los dedos. No invocan el Thae de Muerte y Caos… porque ya habita en cada nota, en cada vibración que se arrastra entre mundos.</p>
<p class="tier-desc">Cada sonido arrastra un eco antiguo. Cada pausa es una grieta por donde algo observa de vuelta.</p>
<p class="tier-desc">Algunos creen que provocan la desesperación.</p>
<p class="tier-desc">Se equivocan.</p>
<p class="tier-desc">La desesperación siempre estuvo ahí.</p>
<p class="tier-desc">Ellos solo le dan forma.</p>
<p class="tier-desc">Le dan voz.</p>
<p class="tier-desc">Le dan ritmo.</p>
<p class="tier-desc">Y cuando la última nota muere… la música no desaparece. Permanece, aferrada a la mente, repitiéndose en silencio, erosionando lentamente lo que encuentra.</p>
<p class="tier-desc">Nadie que haya presenciado a un Velum Cantoris vuelve intacto.</p>
<p class="tier-desc">Porque no importa quién tocó realmente…</p>
<p class="tier-desc">la canción siempre encuentra a quien escucharla.</p>`,
      IMG('/sources/Clases/7.%20Velum%20Cantoris/fotos/foto3.png', 'Foto 2'))}`,
  },

  'zereth-mor': {
    slug: 'zereth-mor',
    name: 'Zereth-Mor',
    tag: 'Mágico / Debuff',
    avatarImg: '/sources/Clases/8.%20Zereth-Mor/Fotos/avatar.png',
    stats: [],
    contentHtml: `
${ROW(`<p class="tier-desc">No todos los que estudian la muerte lo hacen desde las sombras.</p>
<p class="tier-desc">Algunos fueron autorizados a mirarla de frente… y a utilizarla.</p>
<p class="tier-desc">Los Zereth'mor no surgieron como una orden clandestina ni como un culto prohibido. Su existencia fue legitimada en un momento donde el mundo necesitaba respuestas que la vida no podía ofrecer. Fue Meiga, en un acto que muchos consideraron impensable, quien presentó la nigromancia no como una aberración, sino como una herramienta. Y contra todo pronóstico, tanto el rey como Caelis concedieron su aprobación.</p>
<p class="tier-desc">No por confianza.</p><p class="tier-desc">Sino por necesidad.</p>`,
      IMG('/sources/Clases/8.%20Zereth-Mor/Fotos/foto%201.png', 'Foto 1'))}
${ROW(`<p class="tier-desc">Desde entonces, los Zereth'mor caminan una línea peligrosa: son practicantes de un arte prohibido… permitido bajo vigilancia. Enseñan a quienes pueden soportarlo, formando discípulos capaces de manipular lo que otros temen incluso nombrar.</p>
<p class="tier-desc">Para ellos, los muertos no son sagrados.</p><p class="tier-desc">Son útiles.</p>`,
      IMG('/sources/Clases/8.%20Zereth-Mor/Fotos/foto%202.png', 'Foto 2'))}
${ROW(`<p class="tier-desc">No ven almas en descanso ni cuerpos dignos de duelo. Ven estructuras vacías, listas para ser reclamadas. En sus manos, los caídos se convierten en marionetas, obedientes, silenciosas, eternamente funcionales. Cada cadáver reanimado es un hilo más en una red invisible que solo ellos saben manejar.</p>
<p class="tier-desc">Por eso se les teme.</p>
<p class="tier-desc">Porque los Zereth'mor no desafían la muerte.</p><p class="tier-desc">La reorganizan.</p>
<p class="tier-desc">Aun así, su existencia sigue siendo cuestionada. Para muchos, son una traición al orden natural. Para otros, una herramienta necesaria en tiempos de guerra. Pero para quienes entienden su verdadera naturaleza, representan algo más inquietante:</p>
<p class="tier-desc">La prueba de que la muerte… puede perder su significado.</p>
<p class="tier-desc">Y cuando eso ocurre, no hay límite claro entre lo que debe permanecer en reposo… y lo que puede volver a levantarse.</p>`,
      IMG('/sources/Clases/8.%20Zereth-Mor/Fotos/foto%203.png', 'Foto 3'))}`,
  },

  magharyn: {
    slug: 'magharyn',
    name: 'Magharyn',
    tag: 'DPS Mágico / Debuff',
    avatarImg: '/sources/Clases/9.%20Magharyn/fotos/avatar.png',
    stats: [],
    contentHtml: `
${ROW(`<p class="tier-desc">Aquí no estamos ante simples magos o hechiceros. Los Magharyn son los guardianes del Thae, una energía primordial que fluye a través de toda forma de vida y materia: desde el aire que respiramos hasta las rocas más antiguas del mundo. No se limitan a canalizar esta fuerza; la transforman, le dan forma y, lo más importante, la interpretan. Entienden el Thae como una corriente viva, en constante diálogo con el entorno, y a través de ese diálogo es como nace su poder.</p>`,
      IMG('/sources/Clases/9.%20Magharyn/fotos/foto1.png', 'Foto 1'))}
${ROW(`<p class="tier-desc">Su poder no es caótico ni impulsivo. Es estructurado, preciso, guiado por una filosofía ancestral que combina el estudio riguroso con una espiritualidad introspectiva. Para un Magharyn, lanzar un hechizo es tanto una acción práctica como un acto de fe, de conexión con el universo.</p>`,
      IMG('/sources/Clases/9.%20Magharyn/fotos/foto2.png', 'Foto 2'))}
${ROW(`<p class="tier-desc">Antiguamente reconocidos oficialmente por la Academia Nidharrow, los Magharyn actúan bajo permiso real y operan en todo el territorio como fuerza de orden, investigadores. En los actuales tiempos de conflictos, son la fuerza principal al servicio del reino. Pero en la calma, florecen como eruditos, compartiendo su conocimiento con comunidades, nobles y otros estudiosos.</p>`,
      IMG('/sources/Clases/9.%20Magharyn/fotos/foto%203.png', 'Foto 3'))}`,
  },

  desconocido: {
    slug: 'desconocido',
    name: 'Desconocido',
    tag: null,
    avatarImg: '/sources/Clases/Desconocido/fotos/avatar.png',
    stats: [],
    contentHtml: `<p class="tier-desc">Algunos nacen con acero, otros con fe, otros con dones que el mundo puede nombrar. Pero existen unos pocos cuya senda no figura en códices ni juramentos. No pertenecen a órdenes conocidas, no responden a linajes ni a doctrinas visibles. Caminan entre ruinas, guerras y sombras dejando señales que pocos entienden.</p>
<p class="tier-desc" style="font-style: italic; color: var(--accent);">Se desconoce si son restos de una verdad olvidada… o ecos de algo que aún no ha despertado.</p>
<p class="tier-desc" style="font-weight: bold; margin-bottom: 0;">Nadie sabe de dónde vienen.<br>Nadie sabe qué buscan.</p>`,
  },
}
