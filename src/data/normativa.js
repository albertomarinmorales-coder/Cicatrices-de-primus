export const normativaData = {
  heridas: {
    title: 'Sistema de Heridas y Estados',
    subtitle: 'Tiers de daño y vitalidad',
    introImage: '/assets/images/sistema/heridas.png',
    introGlow: '#b83a42',
    breadcrumb: 'Heridas',
    intro: `<blockquote class="norm-quote">"Todo acto tiene una consecuencia. Prepárate para enfrentar el daño que el mundo de Primus tiene reservado para los incautos."</blockquote>`,
    sections: [
      {
        label: 'Porcentaje de Vida según el Tier',
        type: 'process',
        steps: [
          { label: 'Tier 1 — Heridas leves (80% - 99%)', icon: 'heart-bottle' },
          { label: 'Tier 2 — Heridas medias (30% - 79%)', icon: 'broken-heart' },
          { label: 'Tier 3 — Heridas graves (1% - 29%)', icon: 'bleeding-hearts' },
          { label: 'Tier 4 — Heridas fatales / Estado crítico (0%)', icon: 'skull' },
        ],
      },
      {
        label: 'Tiers de Heridas',
        cards: [
          { 
            num: 'Tier 1', 
            title: 'Leves', 
            icon: 'health',
            text: 'Heridas menores que pueden sanar por sí solas.<br/><br/>• Rasguños<br/>• Golpes<br/>• Cortes pequeños<br/>• Contusiones leves<br/>• Quemaduras leves<br/>• Mordeduras menores', 
            severity: 1 
          },
          { 
            num: 'Tier 2', 
            title: 'Medias', 
            icon: 'medical-pack',
            text: 'Heridas que requieren atención básica.<br/><br/>• Cortes profundos<br/>• Fracturas simples<br/>• Contusiones fuertes<br/>• Dislocaciones<br/>• Perforación sin daño a órganos<br/>• Envenenamiento leve<br/>• Mordeduras infectadas<br/>• Perforación media', 
            severity: 2 
          },
          { 
            num: 'Tier 3', 
            title: 'Graves', 
            icon: 'hospital-cross',
            text: 'Comprometen tu salud seriamente.<br/><br/>• Fracturas expuestas<br/>• Sangrado profuso<br/>• Órganos perforados<br/>• Arterias cortadas<br/>• Envenenamiento medio<br/>• Quemaduras de 3er grado<br/>• Desmembramiento parcial<br/>• Cortes profundos que exponen órganos', 
            severity: 3 
          },
          { 
            num: 'Tier 4', 
            title: 'Fatales', 
            icon: 'skull',
            text: 'Heridas que ponen en riesgo inmediato tu vida.<br/><br/>• Desmembramiento completo<br/>• Fallo de órganos<br/>• Sangrado masivo<br/>• Quemaduras internas fatales<br/>• Envenenamiento crítico', 
            severity: 4 
          },
        ],
      },
      {
        label: 'Estados del Personaje',
        cards: [
          { 
            num: 'L', 
            title: 'Leve', 
            icon: 'clover',
            text: 'Puedes decidir si tratar la herida o no. Sanará por sí sola con el tiempo.', 
            severity: 1 
          },
          { 
            num: 'A', 
            title: 'Adolorido', 
            icon: 'player-pain',
            text: 'No hay riesgo inmediato, pero si no te tratas podrías empeorar y quedar incapacitado.', 
            severity: 2 
          },
          { 
            num: 'I', 
            title: 'Incapacitado', 
            icon: 'hospital-cross',
            text: 'Tu cuerpo está gravemente comprometido. Requiere tratamiento urgente o podrías morir o tener secuelas permanentes.', 
            severity: 3 
          },
          { 
            num: 'C', 
            title: 'Crítico', 
            icon: 'death-skull',
            text: 'Estás al borde de la muerte. Tu respiración es débil, el pulso casi perdido y no eres consciente. Requiere atención inmediata.', 
            severity: 4 
          },
        ],
      },
      {
        label: 'Determinación del Tier',
        type: 'info',
        icon: 'book',
        title: 'Porcentaje de Vida según el Tier',
        text: '• Tier 1 — Heridas leves → 80% - 99%<br/>• Tier 2 — Heridas medias → 30% - 79%<br/>• Tier 3 — Heridas graves → 1% - 29%<br/>• Tier 4 — Heridas fatales / Estado crítico → 0%<br/><br/><blockquote>El tier de heridas final será determinado por el %HP más bajo alcanzado durante el combate.</blockquote>',
      },
    ],
  },

  cordura: {
    title: 'Sistema de Cordura',
    subtitle: 'Estabilidad Mental',
    introImage: '/assets/images/sistema/cordura.png',
    introGlow: '#7a6fd4',
    breadcrumb: 'Cordura',
    intro: `<blockquote class="norm-quote">Todos los personajes poseen el atributo de Cordura, que representa la estabilidad mental y emocional frente a los horrores del mundo. Cada jugador comienza con 50 puntos de Cordura, los cuales pueden disminuir por múltiples causas: eventos traumáticos como la muerte de un aliado, experiencias personales extremas o encuentros con criaturas sobrenaturales.<br/><br/>
    En las tierras de Primus, los peligros no son solo físicos. Existen entidades tan grotescas y antinaturales que no solo ponen a prueba el cuerpo, sino también la mente.</blockquote>`,
    sections: [
      {
        label: 'Escala de Puntos',
        type: 'process',
        steps: [
          { label: 'Inestable (25 – 39)', icon: 'brain-freeze' },
          { label: 'Errático (10 – 24)', icon: 'lightning-bolt' },
          { label: 'Perturbado (1 – 9)', icon: 'broken-skull' },
          { label: 'Demente (0)', icon: 'player-despair' },
        ],
      },
      {
        label: 'Tiers de Cordura',
        cards: [
          { 
            num: 'Tier 1', 
            title: 'Inestable', 
            icon: 'brain-freeze',
            text: '25 – 39 pts de Cordura<br/><br/>Inestabilidad leve a moderada.<br/><br/>• Dolores de cabeza<br/>• Pesadillas frecuentes<br/>• Fatiga mental<br/>• Ansiedad<br/>• Irritabilidad', 
            severity: 1 
          },
          { 
            num: 'Tier 2', 
            title: 'Errático', 
            icon: 'lightning-bolt',
            text: '10 – 24 pts de Cordura<br/><br/>Colapso incipiente.<br/><br/>• Escuchas voces ocasionales<br/>• Dificultad para distinguir realidad de ilusión<br/>• Alucinaciones esporádicas<br/>• Desarrollo de fobias nuevas o agravación de miedos previos', 
            severity: 2 
          },
          { 
            num: 'Tier 3', 
            title: 'Perturbado', 
            icon: 'broken-skull',
            text: '1 – 9 pts de Cordura<br/><br/>Fractura psíquica severa.<br/><br/>• Disociación de personalidad<br/>• Visión de entidades que no deberían existir<br/>• Voces constantes<br/>• Alta vulnerabilidad a posesiones<br/>• Fobias múltiples y extremas', 
            severity: 3 
          },
          { 
            num: 'Tier 4', 
            title: 'Demente', 
            icon: 'player-despair',
            text: '0 pts de Cordura<br/><br/>Colapso total de la mente.<br/><br/>• Pérdida de identidad<br/>• Incapacidad para mantener interacciones sociales simples<br/>• Dificultad grave para el autocuidado<br/>• Dependencia casi total de terceros', 
            severity: 4 
          },
        ],
      },
      {
        label: 'Estados del Personaje',
        cards: [
          { 
            num: '01', 
            title: 'Inestable', 
            icon: 'brain-freeze',
            text: 'La ansiedad y la falta de descanso afectan tu humor y concentración. Dolores de cabeza y fatiga son constantes, pero aún mantienes control.', 
            severity: 1 
          },
          { 
            num: '02', 
            title: 'Errático', 
            icon: 'lightning-bolt',
            text: 'Tu comportamiento empieza a ser notado por otros. En ocasiones confundes la realidad con alucinaciones o voces internas.', 
            severity: 2 
          },
          { 
            num: '03', 
            title: 'Perturbado', 
            icon: 'broken-skull',
            text: 'Tu mente ya no responde como antes. Pierdes el control de tus pensamientos y tu conducta resulta inquietante o peligrosa.', 
            severity: 3 
          },
          { 
            num: '04', 
            title: 'Demente', 
            icon: 'player-despair',
            text: 'Tu identidad se fragmenta o desaparece. Apenas puedes cuidarte solo, olvidas comer, trabajar o incluso quién eres.', 
            severity: 4 
          },
        ],
      },
      {
        label: 'Recuperación',
        type: 'info',
        icon: 'campfire',
        title: 'Recuperación',
        text: 'No olviden, aventureros, que así como Primus ofrece la desolación, también ofrece el consuelo a aquellos que sepan donde encontrarlo.<br/><br/>En el mundo podrán encontrar métodos de sanación de cordura, pues incluso el más aguerrido de los guerreros necesita un descanso para poder enfrentar los horrores de estas tierras.',
      },
    ],
  },

  infectados: {
    title: 'Sistema de Infectados',
    subtitle: 'Fases y Corrupciones',
    introImage: '/assets/images/sistema/infectados.png',
    introGlow: '#4d9a5c',
    breadcrumb: 'Infectados',
    intro: `<blockquote class="norm-quote">Una rebelión abierta no es el único mal que azota las tierras de Primus, pues más allá del campo de batalla, escondiéndose entre las sombras del conflicto, acecha un mal mucho más oscuro y peligroso: Las corrupciones.<br/><br/>
    Los infectados son individuos afectados por una corrupción activa que irá agravándose a medida que pasa el tiempo. Son, a todo concepto, una bomba de tiempo que terminará, finalmente, por consumir a la persona infectada por completo.<br/><br/>
    Son conocidos, y su erradicación ha sido la misión de la orden desde su concepción, y ahora, con el caos que se asienta en el reino, han vuelto a resurgir.</blockquote>`,
    sections: [
      {
        label: 'Estado social y legal',
        type: 'info',
        icon: 'gavel',
        title: 'Estado social y legal',
        text: 'Los malditos son la escoria del reino, enemigos de la vida y considerados un error fatal en la existencia de este plano. Pueden ser vistos como víctimas de una cacería constante y activa por parte de la orden, el gremio, y todas las autoridades presentes en el reino. Todo contacto con un maldito puede ser sancionado de forma severa, llegando incluso a la ejecución de la persona comprobada como ayudante de alguno de ellos.<br/><br/>Una vez identificados, se les considera una amenaza pública, perdiendo así acceso a ciudades establecidas y prohibiéndosele actividad comercial de cualquier tipo. Son marginados de la sociedad, pues en la mayor parte de los casos un maldito sólo conoce una cosa: Alimentarse.',
      },
      {
        label: 'Comportamiento general',
        type: 'info',
        icon: 'biohazard',
        title: 'Comportamiento general',
        text: 'A lo largo y ancho del territorio se han visto escenas grotescas: Cuerpos destrozados, caravanas destruidas, puestos de vigilancia abandonados. Esto bien podría atribuirse a la guerra civil, a las víctimas de esta... pero la realidad va más allá de lo que está a simple vista, y dependerá de todo aquel que encuentre un indicio como este el identificar la naturaleza de estos sitios.<br/><br/>Un maldito es un ser dominado por el hambre, entregado al instinto básico de la supervivencia. Siempre buscarán alimentarse, saciar su deseo, y no tendrán piedad de cualquiera que se interponga entre ellos y esa satisfacción. Son peligrosos, y se dice que lo que buscan puede variar mucho entre un maldito y otro, sospechándose así indicios de diferentes tipos de corrupción sembrándose en sus corazones.',
      },
      {
        label: 'Clasificación de la Corrupción',
        type: 'info',
        icon: 'book',
        title: 'Infectados y Malditos',
        text: 'El riesgo de infección está siempre presente, aunque sus métodos de contagio específico todavía eluden el entendimiento de los eruditos del reino. Sin embargo, la Lucis Aeterna, ente encargado de liderar la batalla en contra de estos entes corruptos ha determinado un patrón por el cuál se puede identificar a un infectado a tiempo, e intentar salvarle.<br/><br/>Basándose en escritos e investigaciones realizados por esta orden, la corrupción se ha clasificado en dos grupos de acuerdo al avance de la corrupción en las víctimas:<br/><br/><strong>Grupo uno: Infectados</strong><br/>Los infectados son personas que sufren síntomas adversos originados del contacto con un maldito, depediendo del tipo de corrupción que le asole pueden sentir síntomas diversos. Bajo este esquema, la orden de la luz ha catalogado a los infectados en tres fases de corrupción. A medida que estas fases avanzan los síntomas empeoran, llegando incluso a causar desviaciones en el físico de la persona infectada, y directamente en su estado mental.<br/><br/><blockquote>Nota importante: Cada fase de la corrupción repercutirá directamente en la ficha del personaje de forma negativa y/o positiva según sea el caso.</blockquote><br/>Un infectado en estas tres fases puede ser salvado, siempre y cuando se administre la cura correspondiente a la corrupción que le asola.<br/><br/><strong>Grupo dos: Malditos</strong><br/>Infectados que cruzan a este grupo, llamado "Fase cuatro de infección" se consideran en el punto de no retorno. La orden ha determinado que toda persona infectada que llegue a esta fase de corrupción deberá ser ejecutada en el acto, o capturada para posterior estudio.',
      },
      {
        label: 'Detalle de las Fases',
        cards: [
          { 
            num: 'Fase 1', 
            title: 'Infectado', 
            icon: 'poison-cloud',
            text: 'Fase uno → Tier 1 de heridas', 
            severity: 1 
          },
          { 
            num: 'Fase 2', 
            title: 'Infectado', 
            icon: 'biohazard',
            text: 'Fase dos → Tier 2 de heridas + Posibilidad de secuelas físicas/mentales temporales', 
            severity: 2 
          },
          { 
            num: 'Fase 3', 
            title: 'Infectado', 
            icon: 'broken-skull',
            text: 'Fase tres → Tier 3 de heridas + Posibilidad de secuelas físicas/mentales permanentes', 
            severity: 3 
          },
          { 
            num: 'Fase 4', 
            title: 'Maldito', 
            icon: 'death-skull',
            text: 'Fase cuatro de infección. Se consideran en el punto de no retorno.', 
            severity: 4 
          },
        ],
      },
      {
        label: 'Consecuencias de fase cuatro (IC)',
        cards: [
          { 
            num: 'Opción 1', 
            title: 'CK administrativo', 
            icon: 'book',
            text: 'El personaje se entrega a la maldición, pierde su uso de razón y se considera perdido por completo. El jugador puede crear un nuevo personaje en el mismo Tier que el personaje perdido.', 
            severity: 4 
          },
          { 
            num: 'Opción 2', 
            title: 'Supervivencia', 
            icon: 'mountains',
            text: 'Se mantiene al personaje y entrará en una prueba de supervivencia, permitiéndosele al jugador maldito cazar libremente hasta el inevitable momento de su muerte.<br/><br/>Al morir, el jugador puede crear un nuevo personaje con un tier menos del alcanzado al momento de su conversión.', 
            severity: 3 
          },
          { 
            num: 'Nota', 
            title: 'CK Abierto', 
            icon: 'crossed-swords',
            text: 'El personaje tendrá un CK abierto por parte del servidor entero. Así mismo, el personaje podrá matar a todo aquel que le haga frente.', 
            severity: 4 
          },
        ],
      },
      {
        label: 'Sobre las curas',
        type: 'info',
        icon: 'vial',
        title: 'Sobre las curas',
        text: 'Las curas son tan misteriosas como las propias corrupciones que nacen en este reino. Será deber de cada jugador hacerse participe de ellas, entender como funcionan, y desarrollarlas en caso de ser necesario.<br/><br/>En la actualidad se rumorea que la Lucis Aeterna ha avanzado en sus investigaciones en este respecto. Se ha determinado igualmente que, dependiendo de la fase de la corrupción será más complicado de sanar, llegando incluso a dejar secuelas permanentes en las fases más altas de corrupción.<br/><br/>• Fase uno → Tier 1 de heridas<br/>• Fase dos → Tier 2 de heridas + Posibilidad de secuelas físicas/mentales temporales<br/>• Fase tres → Tier 3 de heridas + Posibilidad de secuelas físicas/mentales permanentes',
      },
    ],
  },

  conquista: {
    title: 'Sistema de Conquista y Defensa Territorial',
    subtitle: 'Control y expansión',
    introImage: '/assets/images/sistema/conquista.png',
    introGlow: '#d4a03a',
    breadcrumb: 'Conquista',
    intro: `<blockquote class="norm-quote">Primus, una tierra fracturada por innumerables guerras, conflictos y otros pareceres. Pero más allá de todo eso, existen territorios indomables… O así se pensaban que lo eran.<br/><br/>
    <strong>El Norte:</strong> Tierra de nadie, llena de pesadillas, muerte y desolación. Ha sido la tarea de los valientes Stormheilm explorar este territorio, dominarlo, y asegurarse que, a pesar de sus muchos peligros, fuese un lugar seguro de transitar. Por años se mantuvo salvaje, inhóspito, y despiadado.<br/><br/>
    <strong>El territorio central:</strong> Con la caída de Raventree, el centro del continente quedó a la deriva, desprotegido por la corona, y desprovisto de la fuerza militar que anteriormente lo mantenía seguro. Los Krieger, sin sus anillos, y con la rebelión en sus puertas, se vieron imposibilitados de mantener la estructura y la ley en esta tierra que hoy día se ha convertido en un campo de guerra. Aunque no sólo la guerra asola estas tierras, pues algo más oscuro parece acechar desde lugares sombríos.<br/><br/>
    Es momento de alzarse, de levantar la espada, y poner los ojos en el horizonte. Por lo que una vez fue, y lo que un día podrá volver a ser.</blockquote>`,
    sections: [
      {
        label: 'Fases Principales',
        type: 'process',
        steps: [
          { label: 'Fase de Conquista', icon: 'crossed-swords' },
          { label: 'Fase de Defensa y Consolidación', icon: 'castle-flag' },
        ],
      },
      {
        label: 'Fase I — Conquista',
        cards: [
          { 
            num: '01', 
            title: 'Objetivo', 
            icon: 'crossed-swords',
            text: 'Reclamar una zona inexplorada y establecer control inicial.<br/><br/>Durante la exploración pueden encontrarse distintos POIs (Puntos de Interés) determinados por el narrador o con tiradas automáticas asociadas.', 
            severity: 1 
          },
          { 
            num: '02', 
            title: 'POIs posibles', 
            icon: 'eyeball',
            text: '• Encuentros con enemigos a derrotar para “empujar” la frontera<br/>• Eventos ambientales (clima extremo, terreno hostil, fenómenos extraños)<br/>• Hallazgo de pistas sobre amenazas mayores<br/>• Descubrimiento de un punto estratégico ideal para puesto de avanzada', 
            severity: 1 
          },
          { 
            num: '03', 
            title: 'Formas de conquistar', 
            icon: 'map',
            text: 'La conquista será realizada a través de una narración administrativa por parte del narrador a cargo. Será elegida de forma aleatoria de alguno de estos tipos:<br/><br/>• Limpieza directa de enemigos<br/>• Escolta de caravana con materiales de construcción<br/>• Defensa ante emboscadas durante la instalación<br/>• Defensa improvisada mientras se asegura el perímetro', 
            severity: 1 
          },
        ],
      },
      {
        label: 'Construcción del puesto (Primeras 48 horas)',
        cards: [
          { 
            num: 'A', 
            title: 'Construcción', 
            icon: 'tower',
            text: 'Durante las primeras 48 horas tras la conquista:<br/><br/>• Se debe construir el puesto de avanzada<br/>• Pueden ocurrir ataques menores o interrupciones<br/><br/>La construcción del puesto de avanzada básico será estándar, y constará de materiales y recursos otorgados por la administración en un cofre de acceso público. Con dichos recursos habrán de construir el puesto.', 
            severity: 2 
          },
          { 
            num: 'B', 
            title: 'Requisitos', 
            icon: 'large-hammer',
            text: 'Los requisitos para su construcción serán los siguientes:<br/><br/>• Un forjador o un artífice (Profesiones)<br/>• Una tirada acumulativa grupal de “Pericia” igual o superior a 40<br/>• Emotes correspondientes para la estructura base del campamento<br/><br/>Si la construcción no se completa narrativamente en el plazo de 48 hrs., la zona vuelve a estado inestable, y tendrá que ser recapturada.', 
            severity: 2 
          },
        ],
      },
      {
        label: 'Fase II — Defensa y consolidación',
        cards: [
          { 
            num: '01', 
            title: 'Objetivo', 
            icon: 'shield',
            text: 'Mantener y sostener el puesto de avanzada.', 
            severity: 1 
          },
          { 
            num: '02', 
            title: 'Mantenimiento activo', 
            icon: 'repair',
            text: 'Tras la construcción, durante los días siguientes aparecen:<br/><br/>• POIs automáticos<br/>• NPC hostiles menores (Opcional: derrotables en solitario con mecánicas del gremio)<br/>• Pistas sobre amenazas mayores<br/>• Eventos de sabotaje o desgaste<br/><br/>Cada evento debe ser:<br/>• Narrado en autorol<br/>• Reportado por ticket como prueba de defensa', 
            severity: 1 
          },
          { 
            num: '03', 
            title: 'Fortificaciones', 
            icon: 'castle-flag',
            text: 'Los puestos de avanzada podrán ser mejorados con algunas de las siguientes fortificaciones, que a su vez contarán con distintas bonificaciones prácticas:<br/><br/>• Torre de vigía<br/>• Guardias adicionales<br/>• Muralla perimetral<br/>• Almacén de recursos<br/>• Emplazamientos fijos (Ballestas, catapultas, etc.)', 
            severity: 1 
          },
        ],
      },
      {
        label: 'Sistema de actividad hostil',
        type: 'info',
        icon: 'uncertainty',
        title: 'Alerta de Almenaras',
        text: 'Si durante 48 horas:<br/>• No se reportan bajas de NPC<br/>• No se investigan POIs<br/><br/>Entonces:<br/>• Se encienden las Almenaras/Campanas (llamado público de auxilio)<br/><br/>Esto indica que el puesto está en peligro. Los jugadores deberán reportar la actividad, el cuadrante del campamento bajo ataque, y formar un grupo de refuerzo para asistir.',
      },
      {
        label: 'Pérdida del Puesto',
        type: 'info',
        icon: 'skull',
        title: 'Consecuencias de Inactividad',
        text: 'Si 24 horas después de encender las almenaras/campanas:<br/>• No se responde al llamado<br/>• No se envían refuerzos<br/>• No se realizan tickets de reporte de actividad<br/><br/>Entonces:<br/>• El puesto cae<br/>• El territorio vuelve a estado hostil<br/>• Deberá ser conquistado nuevamente desde cero',
      },
    ],
    outro: `<blockquote class="norm-quote"><strong>Aviso importante para los jugadores:</strong><br/><br/>
    • Este es un evento en constante desarrollo y movimiento. El que ustedes no participen de él, no implica que el “sistema” no esté en funcionamiento.<br/><br/>
    • Mantener el territorio seguro les reportará el beneficio inmediato de reducción de actividad hostil en territorios capturados. Como beneficio adicional, participar de estas conquistas será validado para progreso de clase donde aplique, y obtención de beneficios adicionales a discreción de la administración.<br/><br/>
    • Perder control del territorio puede, y tendrá consecuencias graves para el entorno.<br/><br/>
    • La actividad en el evento es constante, aunque no requiere de una gran cantidad de personas, sino organización por su parte. Un grupo de jugadores pueden actuar de exploradores para verificar que los puestos de avanzada no tengan actividad. Si la tienen, reportarla a los demás en base a la severidad del evento para organizar las acciones pertinentes.</blockquote>`,
  },
}
