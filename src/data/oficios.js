const p = (text) => `<p class="tier-desc">${text}</p>`

export const oficiosData = {
  alquimista: {
    slug: 'alquimista',
    name: 'Alquimista',
    coverImg: '/sources/Oficios/Alquimista/image/1.png',
    photos: [
      '/sources/Oficios/Alquimista/image/2.png',
      '/sources/Oficios/Alquimista/image/3.png',
      '/sources/Oficios/Alquimista/image/4.png',
    ],
    introHtml: `<p class="norm-quote">"Donde otros ven humo, el ve transmutacion."</p>
<p class="detail-body-text">Los Alquimistas son estudiosos de las esencias ocultas del mundo. En sus laboratorios, talleres y torres perfumadas de vapores extraños, transforman plantas, hongos y partes de criaturas en pociones de sanacion, balsamos para la mente y preparados capaces de restaurar tanto el cuerpo como el espiritu.<br>Su labor no se limita a la mezcla: investigan la naturaleza con paciencia y riesgo, adentrándose en bosques, pantanos y cavernas para recolectar ingredientes raros. Cada raiz, cada espora y cada fragmento de criatura es analizado y probado, pues el error en la alquimia puede ser tan mortal como una herida de guerra.<br>Los Alquimistas abastecen a aventureros, ejercitos y hospitales, y su conocimiento es tan valioso como peligroso. En Azimra se dice que donde un Galeno cierra una herida, un Alquimista prepara el remedio que permite seguir luchando.</p>`,
    tiers: [
      { label: 'Aprendiz', html: p('Recien iniciado en las artes alquimicas. Domina mezclas basicas y sigue recetas establecidas, aun dependiente de guias y supervision. Entre las pociones que puede realizar se encuentra la ya conocida Pocion de vida y tambien otras que alivian los males que afectan la salud mental de los ciudadanos de Azimra.') },
      { label: 'Oficial',  html: p('Alquimista formado, capaz de trabajar de manera independiente. Investiga, adapta formulas y en ocasiones se aventura a buscar ingredientes extraños que podrian dar lugar a nuevas pociones. Entre las pociones que realizan, se encuentra la Pocion de vida mayor.') },
      { label: 'Maestro',  html: p('Erudito de las ciencias quimicas. Crea nuevas formulas, manipula ingredientes raros y peligrosos, y su conocimiento roza los limites entre la ciencia y lo arcano. Entrena nuevos aprendices y podria hasta abrir su propia tienda y laboratorio. Entre sus pociones mas conocidas, se encuentra la Pocion de vida superior.') },
    ],
  },

  'artifices-del-velo-y-del-brillo': {
    slug: 'artifices-del-velo-y-del-brillo',
    name: 'Artifices del Velo y del Brillo',
    coverImg: '/sources/Oficios/Artifices%20del%20Velo%20y%20del%20Brillo/image/1.png',
    photos: [
      '/sources/Oficios/Artifices%20del%20Velo%20y%20del%20Brillo/image/2.png',
      '/sources/Oficios/Artifices%20del%20Velo%20y%20del%20Brillo/image/3.png',
      '/sources/Oficios/Artifices%20del%20Velo%20y%20del%20Brillo/image/4.png',
    ],
    introHtml: `<p class="norm-quote">"Cada pliegue es un relato, cada costura, cada baratija una historia."</p>
<p class="detail-body-text">Los Artifices del Velo y del Brillo trabajan en talleres donde el cuero, el metal, las gemas y la magia se encuentran. Hombres y mujeres expertos en confeccion y encantamiento, crean armaduras capaces de repeler tanto el acero como los ataques magicos, combinando cueros tratados, metales refinados y telas especialmente preparadas para resistir el uso y el desgaste del combate.<br>Su conocimiento no se limita a la proteccion. Tambien practican una orfebreria precisa y delicada, elaborando anillos, amuletos y collares arcanos capaces de potenciar el daño magico de aquellos que usuarios del thae. Cada gema tallada y pulida es el resultado de una precision trabajada a traves de años, gemas que son utilizadas para canalizar y potenciar el thae.<br>Las creaciones de estos artifices son raras y codiciadas. En el campo de batalla o en los salones del poder, portar una obra del Velo y del Brillo es señal de preparacion… y de peligro para los enemigos del reino.</p>`,
    tiers: [
      { label: 'Aprendiz', html: p('Iniciado en la confeccion y el encantamiento. Trabaja bajo supervision, aprendiendo a tratar telas, cueros y gemas, realizando piezas simples con propiedades magicas basicas.') },
      { label: 'Oficial',  html: p('Artifice experimentado capaz de trabajar de forma independiente. Confecciona armaduras resistentes y joyas arcanas funcionales, dominando el equilibrio entre material y thae.') },
      { label: 'Maestro',  html: p('Maestro del velo y el brillo. Sus creaciones son excepcionales: armaduras que desafian tanto acero como magia, y joyas capaces de canalizar y amplificar el thae con precision extraordinaria. Cada pieza es unica y altamente codiciada. Con el nivel de maestria alcanzado, algunos abren sus propias tiendas y talleres de venta al publico.') },
    ],
  },

  cazador: {
    slug: 'cazador',
    name: 'Cazador',
    coverImg: '/sources/Oficios/Cazador/image/1.png',
    photos: [
      '/sources/Oficios/Cazador/image/2.png',
      '/sources/Oficios/Cazador/image/3.png',
      '/sources/Oficios/Cazador/image/4.png',
    ],
    introHtml: `<p class="norm-quote">"Silencioso, letal... y en armonia con la tierra."</p>
<p class="detail-body-text">Los Cazadores son expertos en el arco y profundos conocedores del terreno y de las criaturas que lo habitan. Siguen rastros invisibles para otros, estudian habitos y saben cuando atacar para asegurar una muerte limpia y necesaria.<br>De sus presas provienen muchos de los recursos que sostienen al reino: la carne abastece las tabernas, los cueros son entregados a los Artifices del Velo y del Brillo para la creacion de armaduras, y las partes mas raras son destinadas a los Alquimistas.<br>Los cazadores mas experimentados no solo dan muerte. Tambien buscan y capturan animales aptos para la domesticacion, criaturas que luego seran entrenadas para el combate, el trabajo o la compañia.</p>`,
    tiers: [
      { label: 'Aprendiz', html: p('Iniciado en el rastreo y la caza. Aprende a leer huellas, usar el arco y reconocer criaturas comunes, y dando caza a criaturas menores. Tambien son habiles capturando animales para su domesticacion.') },
      { label: 'Oficial',  html: p('Cazador experimentado y autosuficiente. Rastrea presas complejas, provee recursos al reino. Con la venida de arcos mas especializados podra dar caza a criaturas mas poderosas. Colabora con la iniciacion de nuevos aprendices.') },
      { label: 'Maestro',  html: p('Señor del rastro y la presa. Conoce a fondo el comportamiento de las criaturas y el terreno, caza bestias peligrosas y raras, y puede capturar o abatir objetivos que otros ni siquiera logran encontrar. Los mas arriesgados organizan partidas de caza para colaborar con la seguridad del reino.') },
    ],
  },

  forjador: {
    slug: 'forjador',
    name: 'Forjador',
    coverImg: '/sources/Oficios/Forjador/image/1.png',
    photos: [
      '/sources/Oficios/Forjador/image/2.png',
      '/sources/Oficios/Forjador/image/3.png',
      '/sources/Oficios/Forjador/image/4.png',
    ],
    introHtml: `<p class="norm-quote">"Donde el fuego forja lo imaginado."</p>
<p class="detail-body-text">El Forjador es un maestro del metal cuya habilidad nace del fuego, el martillo y la experiencia. Con manos curtidas, trabaja minerales y aleaciones para dar forma a herramientas, escudos y armamento, piezas destinadas a resistir el uso mas brutal.<br>Son los encargados de crear y preparar los filos que empuñan los guerreros mas aguerridos del reino. Cada hoja es templada con cuidado, afilada para maximizar su poder y equilibrada para no fallar en el momento decisivo. Un buen forjador no solo fabrica armas: entiende como se mueven en combate y que exige la batalla de quien las porta.</p>`,
    tiers: [
      { label: 'Aprendiz', html: p('Iniciado en el arte de la forja. Aprende a trabajar el metal, encender la fragua y dar forma a herramientas y piezas simples para la venta de los aventureros de Azimra.') },
      { label: 'Oficial',  html: p('Forjador experimentado capaz de trabajar de manera independiente. Crea herramientas, escudos y armas funcionales, dominando el templado y el equilibrio del metal en combate. Tambien inicia nuevos aprendices y supervisa su trabajo si fuera necesario.') },
      { label: 'Maestro',  html: p('Señor de la fragua. Forja armas y herramientas excepcionales, perfeccionando filos y estructuras con precision casi artistica. Sus creaciones no solo resisten la batalla: la definen. Los mas independientes hasta abren sus propios talleres y venta al publico.') },
    ],
  },

  galeno: {
    slug: 'galeno',
    name: 'Galeno',
    coverImg: '/sources/Oficios/Galeno/image/1.png',
    photos: [
      '/sources/Oficios/Galeno/image/2.png',
      '/sources/Oficios/Galeno/image/3.png',
      '/sources/Oficios/Galeno/image/4.png',
    ],
    introHtml: `<p class="norm-quote">"Sus manos curan la carne, su saber sana el alma."</p>
<p class="detail-body-text">Los Galenos son los guardianes de la vida en Azimra. Sirven en hospitales, campamentos y bastiones, donde su conocimiento de hierbas, ungüentos y practicas medicas marca la diferencia entre la vida y la muerte.</p>`,
    tiers: [
      { label: 'Aprendiz', html: p('Iniciado en el arte de sanar. Aprende a tratar heridas leves, preparar ungüentos básicos y asistir en curaciones. Poco a poco gana en seguridad, asistiendo en el campo de batalla.') },
      { label: 'Oficial',  html: p('Galeno experimentado y autónomo. Atiende heridas graves, estabiliza pacientes en combate y mantiene con vida a quienes están al borde de la muerte. Encargado de un departamento médico y de las iniciaciones de los nuevos aprendices.') },
      { label: 'Maestro',  html: p('Guardián de la vida. Su conocimiento y pulso firme desafían a la muerte misma. Puede salvar a quienes otros darían por perdidos y lidera la sanación en los momentos más críticos.') },
    ],
  },

  granjero: {
    slug: 'granjero',
    name: 'Granjero',
    coverImg: '/sources/Oficios/Granjero/image/1.png',
    photos: [
      '/sources/Oficios/Granjero/image/2.png',
      '/sources/Oficios/Granjero/image/3.png',
      '/sources/Oficios/Granjero/image/4.png',
    ],
    introHtml: `<p class="norm-quote">"El pan y la vida nacen de su esfuerzo."</p>
<p class="detail-body-text">Los Granjeros cuidan las fertiles tierras del sur, donde el clima es mas amable y la vida puede echar raices. Alli trabajan los campos, protegen los cultivos y atienden a los animales de granja, asegurando el sustento diario del reino.</p>`,
    tiers: [
      { label: 'Aprendiz', html: p('Iniciado en el trabajo de la tierra. Aprende a cuidar cultivos y ordeñar vacas, asistiendo en cosechas y tareas diarias bajo supervision. El uso del molino y el trabajo en el tambo son habilidades que adquiriran siendo aprendices.') },
      { label: 'Oficial',  html: p('Granjero experimentado y autosuficiente. Gestiona campos, cria animales y procesa recursos, asegurando un suministro constante para el reino. Se enfrentaran a problematicas gallinas y deberan aprender el arte de cultivar delicadas hierbas aromaticas.') },
      { label: 'Maestro',  html: p('Guardian de la tierra fertil. Domina el cultivo y la domesticacion, optimizando cosechas y criando animales excepcionales. Su labor sostiene al reino incluso en tiempos de crisis. La cria del salmon y la prensa de aceite de oliva permiten obtener ingredientes de primera calidad para los taberneros de Azimra.') },
    ],
  },

  guardia: {
    slug: 'guardia',
    name: 'Guardia',
    coverImg: '/sources/Oficios/Guardia/image/1.png',
    photos: [
      '/sources/Oficios/Guardia/image/2.png',
      '/sources/Oficios/Guardia/image/3.png',
      '/sources/Oficios/Guardia/image/4.png',
    ],
    introHtml: `<p class="norm-quote">"Juramentados en la paz, los primeros en la guerra."</p>
<p class="detail-body-text">Los Guardias son hombres y mujeres juramentados al servicio del reino de Azimra, encargados de velar por la seguridad de sus ciudades, aldeas, fortalezas y senderos. Su presencia es sinonimo de orden: donde marchan, la ley del rey Cyprian se hace visible y tangible.</p>`,
    tiers: [
      { label: 'Aprendiz', html: p('Recién juramentado. Aprende a patrullar las calles de Azimra, mantener el orden y aplicar la ley bajo supervisión, participando en tareas básicas de vigilancia y escribiendo informes.') },
      { label: 'Oficial',  html: p('Guardia experimentado y autónomo. Patrulla ciudades y caminos, realiza arrestos, escolta caravanas y mantiene el orden incluso en situaciones de riesgo.') },
      { label: 'Maestro',  html: p('Líder de la guardia. Dirige patrullas, coordina defensas y hace cumplir la ley con autoridad absoluta. Su palabra representa la justicia del reino en acción.') },
    ],
  },

  minero: {
    slug: 'minero',
    name: 'Minero',
    coverImg: '/sources/Oficios/Minero/image/1.png',
    photos: [
      '/sources/Oficios/Minero/image/2.png',
      '/sources/Oficios/Minero/image/3.png',
      '/sources/Oficios/Minero/image/4.png',
    ],
    introHtml: `<p class="norm-quote">"Alli donde no llega la luz, el encuentra riqueza."</p>
<p class="detail-body-text">Los Mineros son hombres y mujeres de gran fuerza y resistencia, dispuestos a adentrarse en las peligrosas minas del norte, donde la roca es traicionera y la oscuridad nunca duerme. Alli extraen minerales y vetas metalicas que luego son refinadas y vendidas a los Forjadores, sosteniendo la forja y el armamento del reino.</p>`,
    tiers: [
      { label: 'Aprendiz', html: p('Iniciado en las labores de extraccion. Aprende a reconocer vetas basicas, trabajar la roca y manejar herramientas bajo supervision, pudiendo extraer metales y gemas de baja calidad.') },
      { label: 'Oficial',  html: p('Minero experimentado y resistente. Extrae minerales y metales de forma eficiente, identifica vetas valiosas y recolecta gemas en bruto con criterio. Con la apertura de nuevas minas y herramientas mas resistentes, el minero logra obtener minerales y gemas de calidad media.') },
      { label: 'Maestro',  html: p('Señor de las profundidades. Conoce los secretos de la tierra, localiza vetas excepcionales y gemas raras, y sobrevive donde pocos se atreven a descender. Su labor sostiene tanto la forja como la magia del reino. Con sus nuevas herramientas y conocimientos, logra obtener minerales y gemas de alta calidad en las nuevas minas.') },
    ],
  },

  seeker: {
    slug: 'seeker',
    name: 'Seeker',
    coverImg: '/sources/Oficios/Seeker/image/1.png',
    photos: [
      '/sources/Oficios/Seeker/image/2.png',
      '/sources/Oficios/Seeker/image/3.png',
      '/sources/Oficios/Seeker/image/4.png',
    ],
    introHtml: `<p class="norm-quote">"Curioso, explorador... y descubridor de la tierra."</p>
<p class="detail-body-text">Solo los hombres y mujeres mas habiles se atreven a tomar el oficio de Seeker. Son exploradores de lo prohibido, aquellos que se adentran en mazmorras, ruinas y lugares donde nadie mas osa aventurarse. Alli enfrentan criaturas, trampas y enemigos que ponen a prueba cuerpo y voluntad.</p>`,
    tiers: [
      { label: 'Aprendiz', html: p('Iniciado en la exploracion de lo prohibido. Acompaña expediciones, aprende a sortear peligros basicos y recolecta materiales en zonas de riesgo moderado. Enfrenta al peligro derrotando criaturas nunca antes vistas.') },
      { label: 'Oficial',  html: p('Seeker experimentado y autosuficiente. Se adentra en ruinas y mazmorras, enfrenta criaturas peligrosas y obtiene componentes raros sin necesidad de apoyo constante. Aunque siempre es mas sabio ir en grupos, este aventurero rara vez le teme al peligro.') },
      { label: 'Maestro',  html: p('Veterano de las profundidades. Explora los lugares mas letales, derrota monstruos excepcionales y recupera ingredientes que pocos siquiera han visto. Donde otros no regresan… el entra igual. Gracias a su valentia los alquimistas de Azimra logran crear sus pociones mas efectivas.') },
    ],
  },

  tabernero: {
    slug: 'tabernero',
    name: 'Tabernero',
    coverImg: '/sources/Oficios/Tabernero/image/1.png',
    photos: [
      '/sources/Oficios/Tabernero/image/2.png',
      '/sources/Oficios/Tabernero/image/3.png',
      '/sources/Oficios/Tabernero/image/4.png',
    ],
    introHtml: `<p class="norm-quote">"Donde hay fuego y bebida, hay historias... y secretos."</p>
<p class="detail-body-text">El Tabernero es el corazon de la taberna de Azimra, guardian del fuego del hogar en un mundo marcado por la guerra. Con ingredientes frescos y recetas transmitidas de generacion en generacion, prepara los mejores platos del reino, comidas capaces de devolver fuerzas a aventureros y guerreros antes de la batalla.</p>`,
    tiers: [
      { label: 'Aprendiz', html: p('Iniciado en la cocina y el servicio. Aprende a preparar platos simples y a mantener el orden de la taberna bajo la guia de un maestro. Calma el hambre con un pancito recien horneado o fortalece el cuerpo con un delicioso pinchito de carne, todos sus platillos deben de ser probados.') },
      { label: 'Oficial',  html: p('Tabernero experimentado y autosuficiente. Cocina comidas sustanciosas que revitalizan a aventureros y gestiona el ritmo del lugar, convirtiendolo en un verdadero refugio. Con nuevos ingredientes, logra nuevas recetas cada vez mas ambiciosas. No se pierdan ni las costillas BBQ ni la exquisita ensalada Cesar.') },
      { label: 'Maestro',  html: p('Alma de la taberna. Sus platos no solo alimentan, sino que fortalecen cuerpo y espiritu. Su establecimiento es punto de encuentro, descanso y recuperacion para todo aquel que cruza sus puertas. Los mas renombrados taberneros buscan abrir un establecimiento propio y agasajar comensales con sus deliciosos estofados y pescados de primerisima calidad.') },
    ],
  },
}
