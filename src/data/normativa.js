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
          { label: 'Tier 1<br/>(80% - 99%)', icon: 'heart-bottle' },
          { label: 'Tier 2<br/>(30% - 79%)', icon: 'broken-heart' },
          { label: 'Tier 3<br/>(1% - 29%)', icon: 'bleeding-hearts' },
          { label: 'Tier 4<br/>(0%)', icon: 'skull' },
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
          { label: 'Inestable<br/>(25 – 39)', icon: 'brain-freeze' },
          { label: 'Errático<br/>(10 – 24)', icon: 'lightning-bolt' },
          { label: 'Perturbado<br/>(1 – 9)', icon: 'broken-skull' },
          { label: 'Demente<br/>(0)', icon: 'player-despair' },
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
        label: 'Fases de Infección',
        type: 'process',
        steps: [
          { label: 'Fase I<br/>Asintomático', icon: 'poison-cloud' },
          { label: 'Fase II<br/>Síntomas leves', icon: 'biohazard' },
          { label: 'Fase III<br/>Deterioro físico', icon: 'broken-skull' },
          { label: 'Fase IV<br/>Punto de no retorno', icon: 'death-skull' },
        ],
      },
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
            severity: 4,
            fullWidth: true
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
            icon: 'crossed-swords',
            text: 'La conquista será realizada a través de una narración administrativa por parte del narrador a cargo. Será elegida de forma aleatoria de alguno de estos tipos:<br/><br/>• Limpieza directa de enemigos<br/>• Escolta de caravana con materiales de construcción<br/>• Defensa ante emboscadas durante la instalación<br/>• Defensa improvisada mientras se asegura el perímetro', 
            severity: 1,
            fullWidth: true
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
            severity: 1,
            fullWidth: true
          },
        ],
      },
      {
        label: 'Sistema de actividad hostil',
        type: 'info',
        icon: 'ringing-bell',
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

  robos: {
    title: 'Sistema de Robo y Multas',
    subtitle: 'Profesión de alto riesgo',
    introImage: '/assets/images/sistema/robos.png',
    introGlow: '#d4a03a',
    breadcrumb: 'Robos',
    intro: `<blockquote class="norm-quote">El robo es una profesión de alto riesgo y alta recompensa dentro de Azimra. A diferencia de otros oficios, su práctica depende del sigilo, la oportunidad y la capacidad de evitar consecuencias. Un ladrón puede obtener grandes beneficios, comparables o superiores a otras profesiones, pero cada hurto fallido o descubierto acerca al infractor al castigo del poder establecido.</blockquote>`,
    sections: [
      {
        label: 'Guías para el Rol del Robo',
        type: 'info',
        icon: 'hand',
        title: 'Guías para el Rol del Robo',
        text: '• La prioridad del ladrón es no ser descubierto.<br/><br/>• Si el robo es exitoso, la víctima puede no darse cuenta hasta mucho después… o jamás.<br/><br/>• Si el robo falla, la víctima sabrá que intentaron robarle, pero no necesariamente quién fue.<br/><br/>• Robar de forma absurda o evidente (por ejemplo, intentar hurtar a alguien estando completamente a solas con esa persona) aumenta drásticamente las probabilidades de ser identificado.<br/><br/>• El ladrón debe ser creativo, y saber utilizar oportunidades correctas para hacer sus fechorías.',
      },
      {
        label: 'Habilidad ROBAR',
        cards: [
          { 
            num: '01', 
            title: 'Éxito Alto', 
            icon: 'clover',
            text: '<strong>Critical success</strong><br/><br/>• El robo se completa.<br/>• La víctima no nota el hurto inmediatamente.<br/>• No se registra denuncia automática.', 
            severity: 1 
          },
          { 
            num: '02', 
            title: 'Éxito Parcial', 
            icon: 'plain-dagger',
            text: '• El robo se completa.<br/>• La víctima nota que algo falta o que hubo un intento.<br/>• Identificar al culpable se basará en tu capacidad de razonamiento del espacio.', 
            severity: 2 
          },
          { 
            num: '03', 
            title: 'Fallo', 
            icon: 'cancel',
            text: '• El robo fracasa.<br/>• La víctima detecta el intento, pero no identifica a quién lo intentó.<br/>• Existe posibilidad de denuncia por parte del afectado.<br/>• Se aplica un contador de robo fallido al ladrón.', 
            severity: 3 
          },
          { 
            num: '04', 
            title: 'Fallo Crítico', 
            icon: 'death-skull',
            text: '<strong>Critical fail</strong><br/><br/>• El ladrón es identificado directamente (Estado de SOSPECHOSO).<br/>• La guardia puede actuar directamente sobre alguien que porte el estado SOSPECHOSO.<br/>• Puede haber represalias inmediatas según contexto narrativo.<br/>• La víctima puede tomar acciones en contra del ladrón.', 
            severity: 4 
          },
        ],
      },
      {
        label: 'Consecuencias',
        cards: [
          { 
            num: '01', 
            title: 'Recompensa', 
            icon: 'gold-bar',
            text: 'La actividad de robo estará abierta para todos los jugadores. Igualmente, la capacidad de robo está ligada a los Tiers de profesión activos. Esto significa que un ladrón será capaz de robar una cantidad equivalente a un objeto de redux del tier ligado a la profesión.<br/><br/>Un ejemplo claro: Un ladrón de T2 podrá robar una cantidad igual a un objeto de redux de T2. Ya sea de tabernero, artífice, o forjador.', 
            severity: 1 
          },
          { 
            num: '02', 
            title: 'Castigo', 
            icon: 'gavel',
            text: 'No todo es ganancia y festejo en la vida de un ladrón, pues aquellos que lo intenten tendrán un contador de criminalidad asociado a su ficha, el cuál subirá en base a los intentos fallidos hasta un límite de tres (3).', 
            severity: 3 
          },
        ],
      },
      {
        label: 'Funcionamiento del Castigo',
        type: 'info',
        icon: 'interdiction',
        title: 'Para el ladrón y el guardia',
        text: '<strong>Para el ladrón:</strong><br/>Un ladrón que falle tres veces, y acumule los tres contadores de criminalidad recibirá el estado de SOSPECHOSO. A partir de este punto cualquier guardia podrá aplicarle una multa al ladrón (Con su rol asociado). Las multas variarán según las reincidencias registradas por parte del criminal.<br/><br/><strong>Para el guardia:</strong><br/>Como se menciona anteriormente, cualquier personaje con el estado de SOSPECHOSO podrá ser multado directamente.<br/><br/><blockquote>TIENE QUE HABER UN ROL ASOCIADO. Toda multa colocada sin rol será penalizada de forma IC y OOC. La severidad de la multa variará según la actividad criminal pasada del multado.</blockquote>',
      },
      {
        label: 'Trabajo comunitario',
        type: 'info',
        icon: 'campfire',
        title: 'Trabajo comunitario',
        text: 'El ladrón podrá optar a realizar trabajo comunitario en tierras de la corona. Cosas como ayudar en el orfanato, hacer asistencia civil en las calles de Azimra, o colaborar con las autoridades será bien visto, y por ende terminará con la reducción de un punto de contador.<br/><br/><blockquote>ESTO SÓLO PODRÁ REALIZARSE 1 VEZ A LA SEMANA.</blockquote> Así mismo, y a criterio de la administración y narradores, ciertas acciones tomadas en el mundo podrán ayudar a un ladrón a bajar su contador de criminalidad, siempre y cuando confiese sus crímenes para poder realizar la intervención adecuada por parte de la entidad a la que hayan asistido.',
      },
      {
        label: 'Niveles de Multa y Castigo',
        type: 'info',
        icon: 'scroll-unfurled',
        title: 'Niveles de Multa',
        text: 'En el reino no sólo se castiga al ladrón, pues el crimen es un concepto amplio y que deberá ser vigilado por las fuerzas del orden. Robos, exposición indecente, asesinatos, esclavitud, y traición son sólo uno de los pocos ejemplos que pueden traer problemas a cualquier ciudadano de estas tierras.',
      },
      {
        label: 'Categorías de Penas',
        cards: [
          { 
            num: '01', 
            title: 'Penas leves', 
            icon: 'pills',
            text: '<strong>Infractor Menor</strong><br/><br/>• Ingreso a ficha criminal<br/>• Detención temporal por parte de la guardia (rol de captura y encarcelamiento). (10 mins OOC)<br/><br/>o<br/><br/>• Multa leve', 
            severity: 1 
          },
          { 
            num: '02', 
            title: 'Penas moderadas', 
            icon: 'chain',
            text: '<strong>Criminal Reincidente</strong><br/><br/>Una vez tengas un antecedente penal, y se te capture por tercera vez con un estado de SOSPECHOSO, estarás en categoría de penas moderadas.<br/><br/>• Encarcelamiento de mediana duración (interpretado durante el día, 30 mins OOC)<br/><br/>o<br/><br/>• Multa media<br/>• Mutilación o marca permanente que lo identifique como un criminal del reino', 
            severity: 2 
          },
          { 
            num: '03', 
            title: 'Penas severas', 
            icon: 'skull',
            text: '<strong>Enemigo del Orden</strong><br/><br/>Tras recibir tres penas moderadas, y volver a ser capturado, entrarás directamente en penas severas. Estas penas son las más peligrosas, y bien pueden causarte la muerte. En casos que implique la seguridad del reino, y sus ciudadanos, un criminal puede entrar directamente en esta categoría, y ser ejecutado en el acto de ser apresado.<br/><br/>• Encarcelamiento prolongado o incluso rol de juicio ante autoridades<br/>• Castigo público<br/>• Mutilación o marca permanente que lo identifique como un criminal del reino<br/>• En casos extremos, pena de muerte<br/>• Multa alta', 
            severity: 4,
            fullWidth: true
          },
        ],
      },
      {
        label: 'Estado de sospechoso',
        type: 'info',
        icon: 'search',
        title: 'Estado de sospechoso',
        text: 'El estado que identifica a un criminal como tal.<br/><br/>Una vez tengas este estado no podrás acceder a los servicios públicos del reino; interacciones como tu profesión, los servicios de caravaneros y todo lo asociado a un ciudadano de bien estará prohibido para un sospechoso.<br/><br/>Igualmente, al tener una multa activa estos efectos se mantendrán. Has de considerar que con un estado de SOSPECHOSO no tendrás acceso al banco.<br/><br/>Para librarte del estado de sospechoso tendrás que entregarte a la guardia, recibir tu multa, y proceder desde ahí.',
      },
    ],
  },

  combate: {
    title: 'Sistema de Combate Primus',
    subtitle: 'Estrategia y cooperación',
    introImage: '/assets/images/sistema/combate.jpg',
    introGlow: '#b83a42',
    breadcrumb: 'Combate',
    intro: `<blockquote class="norm-quote">El combate en Primus es un combate basado en estrategia, posicionamiento, y cooperación. Los jugadores, al mando de sus personajes habrán de trabajar en equipo para cubrir sus debilidades, y aprovechar sus fortalezas.</blockquote>`,
    sections: [
      {
        label: 'Acceso al Sistema',
        type: 'info',
        icon: 'crossed-swords',
        title: 'Códice de Combate',
        text: 'Este sistema se encuentra alojado externamente para permitir una consulta rápida y dinámica de todas las mecánicas, habilidades y estados de combate.<br/><br/><div style="display: flex; justify-content: center; margin-top: 1.5rem;"><a href="https://rough-character-552.notion.site/Sistema-de-Combate-Primus-35c8d8f1501f80988168cd015b05debc?source=copy_link" target="_blank" rel="noopener noreferrer" class="btn-primary" style="text-decoration: none;">Abrir en Notion</a></div><br/><br/><blockquote>Nota administrativa: Este sistema será enlazado externamente desde la web, de forma similar al funcionamiento actual del Gremio de Aventuras.</blockquote>',
      },
    ],
  },
  esclavitud: {
    title: 'Normativa de Esclavitud',
    subtitle: 'Reglas y límites del sometimiento',
    introImage: '/assets/images/Normativa/Esclavitud.png',
    introGlow: '#b01010',
    breadcrumb: 'Esclavitud',
    intro: `<blockquote class="norm-quote">¡Hola aventureros! Aquí dejamos unas reglas importantes para manejar el tema de la esclavitud en el rol. Hagamos una pequeña aclaración antes de pasar a la normativa:<br/><br/>La esclavitud se verá, principalmente, destinada a la administración como herramienta narrativa; podrán sentenciarte a un período de esclavitud como parte de las consecuencias de tus actos dentro del rol.<br/><br/>Si deseas participar del rol de esclavista/esclavo puedes hacerlo, pero debes tener en cuenta el contexto actual y las siguientes normas.</blockquote>`,
    sections: [
      {
        label: 'Contexto',
        type: 'info',
        icon: 'scroll-unfurled',
        title: 'Contexto',
        text: 'La trata de personas y posesión de estas como propiedad está abolida en las tierras bajo dominio directo de la Corona, por lo tanto, cualquier persona que posea, compre, venda o maltrate a otro como esclavo será considerado criminal ante la ley, imponiéndose castigos y multas a quien es visto en público realizando estas prácticas. Se rumora que aún se realizan estas prácticas como parte de actividades criminales de alto nivel, y que las víctimas de este trato eran únicamente los elfos drel\u2019shan y los mestizos, pero ahora han dejado esas preferencias de lado, pudiendo ser víctima cualquier habitante, sin importar raza.<br/><br/>Se rumora que aún se realizan estas prácticas como parte de actividades criminales de alto nivel, y que las víctimas de este trato eran únicamente los elfos drel\u2019shan y los mestizos, pero ahora han dejado esas preferencias de lado, pudiendo ser víctima cualquier habitante, sin importar raza.',
      },
      {
        label: 'Esclavitud entre jugadores',
        type: 'info',
        icon: 'hand',
        title: 'Esclavitud entre jugadores',
        text: 'Al participar voluntariamente en el rol de esclavista o esclavo por iniciativa propia, ambas partes deben contar con consentimiento explícito fuera del personaje, dejando constancia de ello en el ticket de cada implicado. Dicho consentimiento puede revocarse en cualquier momento si se incumple lo pactado o se sobrepasan los límites.<br/><br/>Ten en cuenta que, al participar en tramas que impliquen activamente la compraventa, posesión o trato de esclavos (en cualquiera de los roles: esclavista o esclavo), <em>estás realizando algo ilegal</em> dentro del lore. El contexto es importante.<br/><br/>Está terminantemente prohibido usar la esclavitud para acosar, humillar o hacer bullying a otro jugador en la vida real, así como el lenguaje discriminatorio u ofensivo fuera del personaje. Mantengamos el rol como lo que es. Si vas a tener un esclavo, es para darle rol, no solo para escenas sexuales. Los actos sexuales solo se permiten <em>si ambas partes están 100% de acuerdo</em>.<br/><br/><em>Si en algún momento te sientes incómodo o víctima de abuso real bajo la excusa del rol de esclavitud, debes avisar al staff inmediatamente.</em>',
      },
      {
        label: 'Juego Justo',
        type: 'info',
        icon: 'gemini',
        title: 'Juego Justo',
        text: 'Un esclavo es siempre un personaje, nunca un objeto. Si interpretas a un esclavo debes saber que tu personaje tiene derecho a:<br/><br/>• Recibir interacciones en rol por parte de su esclavista.<br/>• Buscar su libertad mediante misiones, fugas o rebeliones planificadas.<br/>• Formar alianzas con otros esclavos o personajes libres.<br/>• Recibir un trato digno dentro del lore por parte de otros (salvo que aceptes voluntariamente un trato más duro, siempre con límites claros).<br/><br/><em>La esclavitud no define permanentemente al personaje; existirán momentos narrativos especiales en los que tengas oportunidad de cambiar tu situación.</em><br/><br/>Recordemos que el respeto y la diversión van primero.<br/><br/><strong>Si tienes dudas o quieres hablar acerca del tema, contáctanos vía ticket.</strong>',
      },
    ],
  },
  pvp: {
    title: 'Sistema de Combate PvP',
    subtitle: 'Conflicto entre jugadores y fair play',
    introImage: '/assets/images/sistema/pvp.png',
    introGlow: '#b83a42',
    breadcrumb: 'PvP',
    intro: `<blockquote class="norm-quote">En Primus el conflicto es inevitable, tanto contra el entorno como entre sus propios habitantes. Estas tierras son peligrosas, y el PvP estará siempre abierto para aquellos que deseen resolver cualquier situación por medidas menos diplomáticas.<br/><br/>Pero hemos de advertirles, aventureros, la vida en Primus tiene valor, y deberán ustedes cuidarla con todo lo que tienen… pues sólo tienen una. En el momento en el que tu vida llega a 0, te encontrarás en las puertas de la muerte. ¿Habrá alguien cercano para salvarte? ¿O acaso morirás desangrado en mitad de la nada? Lee a continuación para saber la respuesta.<br/><br/>A continuación, especificaremos ciertas reglas y procedimientos para asegurarnos que siempre exista el fair play:</blockquote>`,
    sections: [
      {
        label: 'Bases fundamentales',
        type: 'cards',
        cards: [
          {
            num: '01',
            title: 'Declaración y rol de apertura',
            icon: 'crossed-swords',
            text: '<p>El PvP es abierto de forma libre; si un jugador desea abrir PvP deberá declararlo, adjuntando igualmente su tirada de iniciativa. Pero siempre con un rol justificativo del porque se está abriendo PvP.</p><p>Todos los combates a PvP, una vez declarados y decidida la iniciativa, deberán ejecutarse en "gritar" en el chat.</p>',
            severity: 1,
          },
          {
            num: '02',
            title: 'Redux o combate a motor',
            icon: 'scroll-unfurled',
            text: '<p>Una vez declarada la apertura de PvP, los jugadores deberán pactar si el combate será hecho a Redux o a motor. En caso de un desacuerdo, el método predeterminado será siempre Redux.</p>',
            severity: 1,
          },
          {
            num: '03',
            title: 'Resultado y destino del derrotado',
            icon: 'plain-dagger',
            text: '<p>El ganador del combate decidirá el destino del derrotado, pudiendo ser este último víctima de robo de monedas, objetos, e incluso, la muerte.</p>',
            severity: 2,
          },
          {
            num: '04',
            title: 'Combate no letal y 0 HP',
            icon: 'hand',
            text: '<p>El combate “No letal” será medido por el propio jugador que lo ejecuta. Si desean, por ejemplo, sólo darle una paliza a alguien, será responsabilidad de los jugadores determinar donde detenerse. Llegar a 0 de HP resultará en heridas T4 sin excepción.</p>',
            severity: 2,
          },
          {
            num: '05',
            title: 'Personajes malditos',
            icon: 'skull',
            text: '<p>Si el atacante es un personaje maldito, y por las mecánicas asociadas a estos personajes en particular, deberá luchas a matar o morir. Para estos personajes no hay rendición válida, y no podrá perdonar la vida a nadie.</p>',
            severity: 3,
          },
          {
            num: '06',
            title: 'Habilidades de clase',
            icon: 'shield',
            text: '<p><strong>NOTA IMPORTANTE:</strong> Todos los ataques realizados con habilidades de clase serán catalogados como “Letales”. Consideren sus opciones cuidadosamente, pues vida sólo hay una, y no habrá retorno de un accidente.</p>',
            severity: 4,
          },
        ],
      },
      {
        label: 'Entorno',
        type: 'cards',
        cards: [
          {
            num: '01',
            title: 'Poblado, oficios y conquista',
            icon: 'mountains',
            text: '<p>Recuerda que el entorno existe, si estás dentro de un centro poblado, una zona de oficio, o campamentos del sistema de conquista, todo PvP abierto tendrá consecuencias para el agresor. Y en ciertos casos, para ambos.</p>',
            severity: 1,
            fullWidth: true,
          },
        ],
      },
      {
        label: 'Huida y Rendición',
        type: 'cards',
        cards: [
          {
            num: '01',
            title: 'Tirada de huida',
            icon: 'lightning-bolt',
            text: '<p>Si un jugador no quiere combatir, puede huir de la pelea utilizando su dado correspondiente frente a los enemigos con los que se ha iniciado el combate.</p>',
            severity: 1,
          },
          {
            num: '02',
            title: 'Huida exitosa',
            icon: 'clover',
            text: '<p>La tirada de huida es definitiva. <strong>Si es un éxito, el combate termina, y el jugador abandona la escena.</strong></p>',
            severity: 1,
          },
          {
            num: '03',
            title: 'Rendición y opciones del vencedor',
            icon: 'gemini',
            text: '<p>La supervivencia es primordial, si te ves superado o en riesgo, siempre puedes rendirte ante tu oponente. Una vez determinado el fin de combate por medio de la rendición, el vencedor podrá elegir uno (1) de los siguientes:</p><ul><li>Objeto redux legendario (Si lo posee).</li><li>1 objeto de redux (buff).</li><li>25% del total de dinero del derrotado.</li></ul>',
            severity: 2,
            fullWidth: true,
          },
          {
            num: '04',
            title: 'Sin aceptar la rendición',
            icon: 'tombstone',
            text: '<p>El vencedor puede optar por matar a su oponente al finalizar el combate sin aceptar la rendición.</p>',
            severity: 3,
          },
          {
            num: '05',
            title: 'Tras la rendición',
            icon: 'scroll-unfurled',
            text: '<p>Tras rendirse, ambos jugadores deberán “terminar combate” y el sistema asignará las heridas correspondientes de forma automática.</p>',
            severity: 1,
          },
        ],
      },
      {
        label: 'Ingreso al combate de forma tardía',
        type: 'cards',
        cards: [
          {
            num: '01',
            title: 'Espera de dos rondas',
            icon: 'eyeball',
            text: '<p>Los jugadores que lleguen una vez comenzado el combate deben esperar dos (2) rondas completas para intervenir.</p>',
            severity: 1,
          },
          {
            num: '02',
            title: 'Durante la espera',
            icon: 'player',
            text: '<p>Durante esas rondas, los jugadores ya involucrados pueden decidir si continuar o huir.</p>',
            severity: 1,
          },
          {
            num: '03',
            title: 'Huida antes de intervenir',
            icon: 'hood',
            text: '<p>Si escogen huir y tienen éxito en la tirada, los recién llegados no podrán impedir la huida.</p>',
            severity: 2,
            fullWidth: true,
          },
        ],
      },
      {
        label: 'Combate a motor',
        type: 'cards',
        cards: [
          {
            num: '01',
            title: 'Consentimiento mutuo',
            icon: 'spinning-sword',
            text: '<p>El combate a motor se realizará únicamente con consentimiento mutuo de parte de todos los involucrados.</p>',
            severity: 1,
          },
          {
            num: '02',
            title: 'Vidas, tiers y CK',
            icon: 'death-skull',
            text: '<p>Cada jugador contará con tres (3) vidas por cada tier de heridas. Por medio de este, se llegará al CK en la muerte número trece (13) —3 vidas por tier de heridas, y una muerte más después de llegar a T4—.</p>',
            severity: 3,
          },
        ],
      },
      {
        label: 'Final del combate',
        type: 'cards',
        cards: [
          {
            num: '01',
            title: '0 HP y estado T4',
            icon: 'skull',
            text: '<p>El sistema de heridas es automático. Por ende, al llegar a 0hp entrarás en estado “caído en combate (T4)”. Una vez en este estado estarás completamente incapacitado, inconsciente, y a merced de tu rival.</p>',
            severity: 2,
            fullWidth: true,
          },
          {
            num: '02',
            title: 'Ejecución y CK',
            icon: 'death-skull',
            text: '<p>El vencedor podrá ejecutar abiertamente al perdedor del combate, aplicándose un CK al personaje.</p>',
            severity: 4,
          },
          {
            num: '03',
            title: 'Saqueo de pertenencias',
            icon: 'gold-bar',
            text: '<p>El vencedor podrá robarse todas las pertenencias del perdedor (Objetos redux, monedas, legandarias y equipo motor).</p>',
            severity: 3,
          },
          {
            num: '04',
            title: 'Terminar combate',
            icon: 'scroll-unfurled',
            text: '<p>Ambos jugadores deberán “Terminar combate” y el sistema asignará las heridas correspondientes de forma automática.</p>',
            severity: 1,
          },
          {
            num: '05',
            title: 'Supervivencia',
            icon: 'hospital-cross',
            text: '<p><strong>SUPERVIVENCIA:</strong> Si el combate termina y el vencedor no ejecuta a su oponente, el perdedor podrá sobrevivir a sus heridas si se encuentra a dos (2) tiles de una zona con entorno público. Puedes caminar al hospital con la narrativa de que fuiste llevado allí inconsciente.</p>',
            severity: 1,
          },
          {
            num: '06',
            title: 'Fuera de alcance',
            icon: 'tombstone',
            text: '<p>Si te encuentras fuera de este alcance, tu personaje morirá desangrado, y quien encuentre posteriormente el sitio del enfrentamiento econtrará sólo un cadaver.</p>',
            severity: 3,
          },
          {
            num: '07',
            title: 'Maldito en el combate',
            icon: 'broken-skull',
            text: '<p>Reiterando: Si hay un personaje maldito involucrado en el combate, su instinto lo llevará a intentar matar o pelear hasta morir.</p>',
            severity: 3,
          },
          {
            num: '08',
            title: 'Reporte en tickets',
            icon: 'ringing-bell',
            text: '<p><strong>AMBOS JUGADORES DEBERÁN REPORTAR EL ROL HOSTIL Y POSTERIOR COMBATE EN SUS TICKETS DE FORMA COMPLETA PARA EVALUACIÓN.</strong></p>',
            severity: 4,
            fullWidth: true,
          },
        ],
      },
      {
        label: 'Consecuencias',
        type: 'cards',
        introText: 'En Primus toda acción tiene consecuencias, y el asesinato no será excepción:',
        cards: [
          {
            num: '01',
            title: 'Dado de supervivencia y evidencias',
            icon: 'lucide-dices',
            text: '<p>Después de finalizar el combate el vencedor podrá utilizar un dado de supervivencia para esconder tanta evidencia como le sea posible. EL DADO DEBE COINCIDIR EN AMBOS TICKETS.</p>',
            severity: 2,
            fullWidth: true,
          },
          {
            num: '02',
            title: 'Evidencia residual',
            icon: 'eyeball',
            text: '<p>Por muy buen dado que consiga el vencedor, SIEMPRE quedará evidencia en la zona.</p>',
            severity: 2,
          },
          {
            num: '03',
            title: 'Staff e investigación',
            icon: 'scroll-unfurled',
            text: '<p>Las evidencias serán colocadas por parte del STAFF y se realizará la investigación en conjunto con los jugadores que deseen hacerla en busca de justicia.</p>',
            severity: 1,
          },
          {
            num: '04',
            title: 'Guardia del sector',
            icon: 'knight-helmet',
            text: '<p>La guardia del sector podrá investigar esta evidencia siguiendo las pautas correspondientes para encontrar al asesino.</p>',
            severity: 1,
          },
          {
            num: '05',
            title: 'Juicio',
            icon: 'gavel',
            text: '<p>Si el asesino es encontrado por la guardia, se verá sometido a un juicio dependiendo de las leyes del sector donde haya cometido el crímen.</p>',
            severity: 3,
          },
          {
            num: '06',
            title: 'Entrega y absolución',
            icon: 'hand',
            text: '<p>El vencedor puede optar a entregarse, exponer su punto y colaborar con la investigación. Si las pruebas coinciden con las historia, el vencedor podrá ser absuelto de su crímen (en caso de defensa propia) o pagar multas más leves. <strong>NOTA IMPORTANTE:</strong> Esto no significa que un asesino quedará impune; si debe ser ejecutado, lo será.</p>',
            severity: 3,
            fullWidth: true,
          },
        ],
      },
      {
        label: 'Combates de entrenamiento',
        type: 'cards',
        cards: [
          {
            num: '01',
            title: 'Zonas seguras',
            icon: 'castle-flag',
            text: '<p>Habrán zonas designadas por el mapa para realizar combates de entrenamiento seguros. En estas zonas, el sistema de heridas no aplicará, y podrán llegar a 0HP de forma segura.</p>',
            severity: 1,
          },
          {
            num: '02',
            title: 'Ubicación',
            icon: 'tower',
            text: '<p>Estas zonas estarán ubicadas en cada centro de rol principal, como lo son la ciudad de Ash’torin —En el gremio de aventuras—, y las zonas de clase.</p>',
            severity: 1,
          },
          {
            num: '03',
            title: 'Heridas T1 al terminar',
            icon: 'health',
            text: '<p>Tras finalizar un combate de entrenamiento, todos los participantes verán heridas T1 aplicadas automáticamente por el sistema. Esto está diseñado para indicar que el entrenamiento, por más que haya sido eso, sigue teniendo efecto y consecuencia. Esto será, narrativamente, explicado como cansancio físico, moretones, y alguno que otro dolor por el cuerpo.</p>',
            severity: 2,
            fullWidth: true,
          },
        ],
      },
    ],
  },
  housing: {
    title: 'Normativa de Construcción y Housing',
    subtitle: 'Reglamento de Vivienda y Arquitectura en Primus',
    introImage: '/assets/images/Normativa/Housing.png',
    introGlow: '#e7732bff',
    breadcrumb: 'Housing',
    intro: `<blockquote class="norm-quote">Para mantener el servidor equilibrado, evitar sobrecargas innecesarias y permitir que todos los jugadores puedan disfrutar y desarrollarse en sus espacios, se establecen las siguientes normas de construcción.<br/><br/>
    No buscamos limitar tu creatividad, sino fomentar un entorno más justo, ordenado y funcional para toda la comunidad.<br/><br/>
    <strong>Nota de Lore:</strong> En esta season, las construcciones de viviendas por el mapa estarán más restringidas, ya que, debido a la situación actual del lore, no es seguro vivir fuera de las ciudades por las constantes amenazas del entorno.</blockquote>`,
    sections: [
      {
        label: 'Vivienda y Asentamientos',
        type: 'cards',
        cards: [
          {
            num: '01',
            title: 'Asentamientos Seguros',
            icon: 'castle-flag',
            text: '<strong>¿Dónde puedo adquirir una vivienda para vivir?</strong><br/><br/>Actualmente contamos con asentamientos que permitirán vivir a ti o a tu clan de forma segura:<br/><br/>• Azimra<br/>• Ash’torin<br/>• Ashbourne<br/>• Skalford',
            severity: 1
          },
          {
            num: '02',
            title: 'Vivienda Exterior',
            icon: 'mountains',
            text: '<strong>¿Se puede vivir fuera de las ciudades?</strong><br/><br/>Claro, pero no es simplemente llegar, colocar un cimiento y ya. Para ello contamos con un <strong>Sistema de conquista</strong>, el cual permitirá volver ciertos cuadrantes “seguros”, para la construcción de viviendas en el futuro.',
            severity: 2
          },
          {
            num: '03',
            title: 'Adquisición en Ciudades',
            icon: 'scroll-unfurled',
            text: '<strong>¿Cómo puedo adquirir una casa dentro de las ciudades?</strong><br/><br/>Primero debes acercarte al asentamiento de la guardia más cercano al lugar donde deseas vivir. Allí estará el censista, quien notificará al staff para atender tu solicitud.<br/><br/>Luego de la primera semana, comenzarás a pagar impuestos de forma semanal. Estos variarán según la cantidad de miembros que tenga el clan, desde <strong>1 plata</strong> hasta un máximo de <strong>30 platas</strong>.',
            severity: 1,
            fullWidth: true
          }
        ]
      },
      {
        label: 'Reglas Básicas',
        type: 'cards',
        cards: [
          {
            num: '01',
            title: 'Responsabilidad y Respeto',
            icon: 'hand',
            text: 'Evita ocupar grandes extensiones de terreno que puedan bloquear espacio para otros jugadores. El espacio es compartido, a pesar de estar fuera del mapa (en caso de las capas por TP) debemos ser conscientes a la hora de construir.',
            severity: 1
          },
          {
            num: '02',
            title: 'Rendimiento y FPS',
            icon: 'lightning-bolt',
            text: 'Recomendamos usar lámparas sin fuego animado, evitar decoraciones con demasiado movimiento y prescindir de elementos que puedan generar lag o bajones de FPS, tanto para ti como para los demás. Tu zona debe ser estética y también funcional.',
            severity: 2
          },
          {
            num: '03',
            title: 'Mantén el mapa limpio',
            icon: 'repair',
            text: 'Está prohibido dejar estructuras innecesarias como petates, mesas sueltas, fogatas, etc. Si ya no usas un objeto o estructura, elimínalo. Ayudemos entre todos a que el mapa no se llene de “basura visual”.',
            severity: 1
          },
          {
            num: '04',
            title: 'Lugares Públicos',
            icon: 'interdiction',
            text: 'Cualquier construcción en las cercanías de lugares públicos (Ciudades, Zonas de farmeo, Caravaneros) deberá estar justificada mediante rol y contar con el consentimiento necesario; de lo contrario, será eliminada sin previo aviso.<br/><br/><em>Construir es parte del rol, y hacerlo con responsabilidad mejora la experiencia de todos.</em>',
            severity: 3
          }
        ]
      },
      {
        label: 'Reglas de Construcción y Decoración',
        type: 'info',
        icon: 'large-hammer',
        title: 'Gestión de Piezas y Objetos',
        text: `Para asegurar la estabilidad, se aplican los siguientes límites de construcción:<br/><br/>
        <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; color: rgba(212, 201, 176, 0.85); font-size: 0.95rem;">
          <tr style="border-bottom: 1px solid rgba(201, 168, 76, 0.2);">
            <th style="text-align: left; padding: 0.5rem;">Concepto</th>
            <th style="text-align: center; padding: 0.5rem;">Base / Jugador</th>
            <th style="text-align: center; padding: 0.5rem;">Por Miembro</th>
            <th style="text-align: center; padding: 0.5rem;">Máximo Clan (12+ miemb.)</th>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
            <td style="padding: 0.5rem;">Piezas de construcción</td>
            <td style="text-align: center; padding: 0.5rem;">350 piezas</td>
            <td style="text-align: center; padding: 0.5rem;">+100 piezas</td>
            <td style="text-align: center; padding: 0.5rem;">1.450 piezas</td>
          </tr>
          <tr>
            <td style="padding: 0.5rem;">Objetos (Placeables)</td>
            <td style="text-align: center; padding: 0.5rem;">100 objetos</td>
            <td style="text-align: center; padding: 0.5rem;">+50 objetos</td>
            <td style="text-align: center; padding: 0.5rem;">700 objetos</td>
          </tr>
        </table>
        <p style="margin-top: 1rem; font-style: italic; opacity: 0.8;">Sabemos que los clanes tienen un máximo de 30 miembros; sin embargo, esto no significa que podrán tener 3250 piezas. Cuando vuestro clan alcance los 12 miembros, ese será el máximo permitido, siendo un total de 1450 piezas.</p>`,
      },
      {
        label: 'Asentamientos Exteriores',
        type: 'process',
        steps: [
          { label: '1. Respetar el proceso del sistema de conquista para volver “seguro” el lugar.', icon: 'crossed-swords' },
          { label: '2. Conseguir permiso de la guardia local o del Consejo de la Capital.', icon: 'gavel' },
          { label: '3. Pagar una cuota de 2 platas por miembro del clan al momento de fundar el asentamiento, además de cada civil añadido al clan.', icon: 'gold-bar' },
        ],
        introText: 'Los clanes o grupos que deseen asentarse fuera de la capital podrán hacerlo mediante el siguiente proceso:'
      },
      {
        label: 'Estética y Restricciones',
        type: 'cards',
        cards: [
          {
            num: '01',
            title: 'Ambientación en Rol',
            icon: 'eyeball',
            text: 'Evita construcciones incoherentes con el entorno o fuera del estilo del servidor (como casas cúbicas sin ambientación). Estamos en un mundo de rol y tu base también debe formar parte de la historia.',
            severity: 1
          },
          {
            num: '02',
            title: 'Uso de Arenisca',
            icon: 'radial-balance',
            text: 'No está permitido el uso definitivo de estructuras de arenisca. Estas construcciones se consideran temporales o de baja calidad estética, por lo que deberán ser reemplazadas.',
            severity: 2
          },
          {
            num: '03',
            title: 'Apilado de Cimientos',
            icon: 'tower',
            text: 'Está prohibido apilar cimientos con intención de fortificar estructuras. El daño a construcciones está desactivado por norma general, salvo excepciones por eventos o acuerdos entre jugadores. Apilar cimientos genera carga innecesaria al servidor y rompe la inmersión visual del entorno.',
            severity: 3
          },
          {
            num: '04',
            title: 'Los templos no están permitidos',
            icon: 'skull',
            text: 'Buscamos mantener la coherencia del mapa y evitar estructuras que puedan generar confusión o sobrecarga.',
            severity: 4
          }
        ]
      },
      {
        label: 'Adicionales Opcionales',
        type: 'cards',
        cards: [
          {
            num: '01',
            title: 'Marca en el mapa',
            icon: 'compass',
            text: '50 de plata (pago único).',
            severity: 1
          },
          {
            num: '02',
            title: 'Caravanero',
            icon: 'fa-caravan',
            text: '3 de oro (pago único) + 20 de platas de mantenimiento semanal.',
            severity: 2
          },
          {
            num: '03',
            title: 'Expansión Construcción',
            icon: 'large-hammer',
            text: '50 platas por cada ampliación de 100 piezas (solo construcción; mejora única, sin decoración).',
            severity: 1,
            fullWidth: true
          }
        ]
      },
      {
        label: 'Rol de Entorno',
        type: 'cards',
        introText: 'Límites y funciones del entorno (Guardias/Trabajadores):',
        cards: [
          {
            num: '01',
            title: 'Contrato y Costes',
            icon: 'scroll-unfurled',
            text: 'Se pueden contratar mediante Contrato de trabajadores:<br/><br/>• 2 oro por cada unidad de entorno.<br/>• Máximo 5 por asentamiento.<br/>• Solo servirán como entorno.<br/>• Los ToT Basic.',
            severity: 1,
            fullWidth: true
          },
          {
            num: '02',
            title: 'Sí pueden:',
            icon: '👍',
            text: '• Reducir enemigos (dejarlos en estado de captura).<br/>• Expulsar invasores (sacarlos de la zona mediante combates roleados).<br/>• Trasladar enemigos capturados a prisión dentro del asentamiento.<br/>• Defender pasivamente estructuras o puntos clave en eventos PvE.',
            severity: 1
          },
          {
            num: '03',
            title: 'No pueden:',
            icon: '👎',
            text: '• Matar.<br/>• Escuchar conversaciones.<br/>• Avisar sobre la presencia de jugadores enemigos en ausencia del clan.',
            severity: 3
          },
          {
            num: '04',
            title: 'Beneficio de Defensa',
            icon: 'knight-helmet',
            text: 'El entorno deberá ser roleado de manera narrativa y equilibrada, evitando su uso como “guardias automáticos”.<br/><br/>En caso de PvP-E dentro del territorio del asentamiento, el líder del clan recibirá un <strong>Turno de Ambiente</strong> adicional al final del combate (únicamente dentro de su zona reclamada y registrada).',
            severity: 2,
            fullWidth: true
          }
        ]
      }
    ]
  },
  general: {
    title: 'Normativa de Comunidad y Rol',
    subtitle: 'Leyes Fundamentales y Convivencia en Primus',
    introImage: '/assets/images/Normativa/Normativa.png',
    introGlow: '#ffffffcc',
    breadcrumb: 'General',
    intro: `<blockquote class="norm-quote">Bienvenido a Cicatrices de Primus. Para asegurar una experiencia inmersiva, respetuosa y equilibrada para todos, hemos establecido este marco de convivencia y reglas de interpretación. El respeto mutuo y la coherencia narrativa son los pilares de nuestra comunidad.</blockquote>`,
    sections: [
      {
        label: 'Normativa de Comunidad',
        type: 'cards',
        cards: [
          {
            num: '01',
            title: 'Contenido Adulto',
            icon: 'eyeball',
            text: 'Nuestro servidor incluye narrativa oscura, violencia, lenguaje explícito y contenido erótico. Por eso, sugerimos que los participantes tengan al menos 18 años.',
            severity: 1
          },
          {
            num: '02',
            title: 'Multicuentas',
            icon: 'fa-users',
            text: 'Si se detectan cuentas dobles, serán eliminadas inmediatamente. También se tomarán medidas con cuentas secundarias pertenecientes a usuarios ya expulsados.',
            severity: 4
          },
          {
            num: '03',
            title: 'Respeto y Educación',
            icon: 'hand',
            text: 'Trata a todos los miembros con educación y consideración. Comunícate siempre de forma madura, constructiva y cordial. Queremos que este servidor sea un lugar donde todos puedan disfrutar del rol y las historias que surgen.',
            severity: 1
          },
          {
            num: '04',
            title: 'Cero Toxicidad',
            icon: 'shield',
            text: 'No se permite el bullying, el abuso ni ningún tipo de comportamiento que genere mal ambiente. El respeto es la base de todo lo que construimos aquí.',
            severity: 4
          },
          {
            num: '05',
            title: 'Spam y Orden',
            icon: 'speech-bubbles',
            text: 'No envíes mensajes, imágenes, emojis, comandos o menciones de forma excesiva. Mantenemos los canales ordenados para que todos podamos disfrutar de una buena experiencia.',
            severity: 2
          },
          {
            num: '06',
            title: 'Uso de Canales',
            icon: 'quill-ink',
            text: 'Cada canal tiene su propósito. Te pedimos que leas las descripciones y publiques tu contenido en el lugar correspondiente.',
            severity: 1
          },
          {
            num: '07',
            title: '¿Necesitas ayuda?',
            icon: 'help',
            text: 'Puedes contactar al Staff abriendo un ticket en la sala destinada para ello o entrando al canal de voz “Ayuda Soporte”. Si algún miembro del Staff está disponible, te atenderá con gusto.',
            severity: 1,
            fullWidth: true
          }
        ]
      },
      {
        label: 'Conceptos de Rol',
        type: 'cards',
        cards: [
          {
            num: '01',
            title: "In Character 'IC'",
            icon: 'player',
            text: 'Este concepto se refiere a todo lo que ocurre DENTRO de rol y de la interpretación del personaje.',
            severity: 1
          },
          {
            num: '02',
            title: "Out of Character 'OOC'",
            icon: 'hood',
            text: 'Este concepto se refiere a todo lo que ocurre FUERA de rol y de la interpretación del personaje.',
            severity: 1
          },
          {
            num: '03',
            title: 'MetaGaming',
            icon: 'brain-freeze',
            text: 'El uso de información adquirida OOC para tu beneficio IC. Si en una sala de Discord un MD o cualquier medio fuera del rol obtienes información sobre algo que ha ocurrido IC tu personaje no debe interpretar que tiene dicha información.',
            severity: 3
          },
          {
            num: '04',
            title: 'PowerGaming',
            icon: 'muscle-up',
            text: 'Cuando una acción de rol sale de los límites de la realidad o de las capacidades naturales del personaje.',
            severity: 3
          },
          {
            num: '05',
            title: 'Fear RP',
            icon: 'fa-hand',
            text: 'No demostrar miedo al ver criaturas sobrenaturales o alguna situación en la que el rol lo requiera dentro de la coherencia del personaje y de la situación.',
            severity: 2
          },
          {
            num: '06',
            title: "Player Kill 'PK'",
            icon: 'tombstone',
            text: 'Muerte temporal de nuestro pj, solo se recordara hasta el momento antes de la muerte del pj.',
            severity: 2
          },
          {
            num: '07',
            title: "Character Kill 'CK'",
            icon: 'skull',
            text: 'Fin de la historia de nuestro personaje. Ya sea porque muera o porque “se va de viaje”, es el punto y final, o punto y aparte, de nuestro personaje. Ya sea por decisión propia, o ajena. Toca empezar una historia nueva, nuevas amistades, nuevos logros, etcetera.',
            severity: 4
          },
          {
            num: '08',
            title: 'Rol de Entorno',
            icon: 'mountains',
            text: 'Con el rol de entorno nos referimos a todo aquello que ocurre a nuestro alrededor y nos rodea. Sea visible o no, ya que por limitaciones del juego a veces te encontrarás zonas pobladas o concurridas y aunque no veas NPC’s esa zona tiene vida igualmente. Recordamos que toda acción que realicemos tiene consecuencias.',
            severity: 1
          }
        ]
      },
      {
        label: 'Interpretación y Fairplay',
        type: 'cards',
        cards: [
          {
            num: '01',
            title: 'Interpretación de Personaje',
            icon: 'fa-masks-theater',
            text: 'La interpretación de personaje tiene que ser FUNDAMENTAL a la hora de rolear en el servidor. Su vestimenta, expresiones, edad, carácter, clase social, conocimientos, costumbres hacen que tu personaje sea único. Cada cosa que afecte a tu personaje le afectará solo a él. Puesto que estamos interpretando un papel, no deberemos salir del mismo en ningún momento, y deberemos representar a nuestro personaje en las diferentes situaciones por las que pase, así como dos actores en una escena siguen el guion, nosotros debemos seguir fielmente la evolución de nuestro personaje a lo largo de su historia.<br/><br/>No obstante, no estamos obligados a seguir un rol que nos haga sentir incómodos.<br/><br/>Hay que ceñirse al lenguaje de la época, sin salirse de esta, y no usar expresiones que se utilizan en la actualidad, como por ejemplo ‘’Ok bro’’.',
            severity: 1,
            fullWidth: true
          },
          {
            num: '02',
            title: 'Fairplay',
            icon: 'gemini',
            text: 'Más allá del juego limpio, el Fairplay trata sobre jugar sin hacer aprovecharnos de errores o fallas en la normativa o el juego. También entender que formamos parte de una comunidad, y nuestra finalidad debe ser divertirnos en conjunto. Dar oportunidad al otro jugador de participar del rol, y no buscar la victoria por encima del entretenimiento mutuo.',
            severity: 1,
            fullWidth: true
          }
        ]
      },

      {
        label: 'Normativa IC (Rol en el Servidor)',
        type: 'cards',
        introText: 'Para mantener una experiencia de rol inmersiva, coherente y respetuosa para todos, te pedimos que leas y sigas estas normas cuando estés interpretando a tu personaje:',
        cards: [
          {
            num: '01',
            title: 'Trolleo y Cuerpo PJ',
            icon: 'player',
            text: 'Nada de trolleo con el cuerpo del personaje. Crear personajes con proporciones exageradas (como partes íntimas desproporcionadas) con la intención de molestar o burlarse está completamente prohibido. Cuidemos la estética y el ambiente del rol.',
            severity: 3
          },
          {
            num: '02',
            title: 'Chat Local (IC)',
            icon: 'speech-bubble',
            text: 'El chat local es solo para rol. El canal local debe usarse exclusivamente para interpretar a tu personaje (IC). No se permite utilizar el canal /channel para esto. Si necesitas comunicarte fuera de personaje (OOC), puedes usar el chat global o el de clan. En caso puntual, puedes escribir algo OOC en el chat local usando paréntesis: (así).',
            severity: 1
          },
          {
            num: '03',
            title: 'Bugs y Reportes',
            icon: 'repair',
            text: 'Glitches y bugs deben reportarse. Si encuentras un error del juego, por favor no lo aproveches. Notifica a la administración para que pueda solucionarlo lo antes posible.',
            severity: 4
          },
          {
            num: '04',
            title: 'Nombres Coherentes',
            icon: 'scroll-unfurled',
            text: 'Tu personaje debe tener un nombre acorde a una ambientación medieval y fantástica. No se permiten títulos (como "Rey", "Capitán", etc.), ni nombres de personajes famosos de series, videojuegos o películas. Además, tu personaje debe seguir las pautas raciales establecidas por el servidor.',
            severity: 2
          },
          {
            num: '05',
            title: 'Coherencia del PJ',
            icon: 'quill-ink',
            text: 'Coherencia en la creación e interpretación del personaje. Evita crear personajes con elementos exagerados (como manos gigantes para usar armas de forma injusta) o cambios bruscos de personalidad sin justificación narrativa. Todo debe tener sentido dentro del rol.',
            severity: 2
          },
          {
            num: '06',
            title: 'El Brazalete',
            icon: 'gem-pendant',
            text: 'El brazalete no es un medio de transporte. No se puede usar para teletransportarse a camas, petates o moverse por el mapa para evadir rol. Solo está permitido usarlo para resolver bugs, siempre con aviso previo a la administración.',
            severity: 3
          },
          {
            num: '07',
            title: 'Pensamientos',
            icon: 'brain-freeze',
            text: 'No se rolean pensamientos. Los demás personajes no pueden leer tu mente. Si quieres que alguien sepa lo que tu personaje piensa, exprésalo con gestos, palabras o acciones interpretadas.',
            severity: 1
          },
          {
            num: '08',
            title: 'Roles Intensos (Consenso)',
            icon: 'fa-ban',
            text: 'Roles intensos deben ser consensuados. Escenas de tortura, esclavitud o violencia extrema solo se permiten si todos los involucrados están de acuerdo. Nadie puede ser forzado a participar en este tipo de rol.<br/><br/>Si un jugador desea abandonar la escena, podrá usar el brazalete, y se deberá continuar el rol con el cuerpo que queda en el lugar. Además, el personaje deberá rolear las heridas o consecuencias físicas correspondientes a lo sucedido.',
            severity: 4,
            fullWidth: true
          },
          {
            num: '09',
            title: 'Entorno de Ciudades',
            icon: 'castle-flag',
            text: 'Lugares como ciudades o edificios oficiales están habitados por gente, guardias y defensores. Puedes intentar infiltrarte o generar conflictos allí, pero deberá hacerse con un rol bien trabajado y ser aprobado previamente por la administración mediante ticket. Acciones como "/me se cuela" no serán válidas.',
            severity: 2
          },
          {
            num: '10',
            title: 'Desconexión',
            icon: 'clover',
            text: 'Ten cuidado al desconectarte. Asegúrate de salir del juego en un lugar apropiado, para no interrumpir o afectar el rol de otros al volver a conectarte.',
            severity: 1
          },
          {
            num: '!',
            title: 'Consecuencias',
            icon: 'spinning-sword',
            text: 'Toda acción tiene una consecuencia. Recuerda siempre que estás en un servidor de rol. Cada decisión que tomes como personaje puede tener repercusiones. Usa el sentido común y sé coherente con lo que interpretas.',
            severity: 2,
            fullWidth: true
          }
        ]
      },
      {
        label: 'Contenido Prohibido',
        type: 'info',
        icon: 'interdiction',
        title: 'IMPORTANTE: Prohibición Absoluta',
        text: 'Está TERMINANTEMENTE PROHIBIDO cualquier tipo de rol sexual con personajes menores de edad (tanto NPC como jugadores). Ante cualquier situación de este tipo, los responsables serán sancionados de forma inmediata y severa por la administración.',
      }
    ]
  },
}

