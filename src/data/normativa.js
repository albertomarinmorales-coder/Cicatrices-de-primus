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
          { label: 'Tier 1 (80-99%)', icon: 'heart-bottle' },
          { label: 'Tier 2 (30-79%)', icon: 'broken-heart' },
          { label: 'Tier 3 (1-29%)', icon: 'bleeding-hearts' },
          { label: 'Tier 4 (0%)', icon: 'skull' },
        ],
      },
      {
        label: 'Tiers de Heridas',
        cards: [
          { 
            num: 'Tier 1', 
            title: 'Leves', 
            icon: 'health',
            text: 'Heridas menores que pueden sanar por sí solas.<br/>• Rasguños<br/>• Golpes<br/>• Cortes pequeños<br/>• Contusiones leves<br/>• Quemaduras leves<br/>• Mordeduras menores', 
            severity: 1 
          },
          { 
            num: 'Tier 2', 
            title: 'Medias', 
            icon: 'medical-pack',
            text: 'Heridas que requieren atención básica.<br/>• Cortes profundos<br/>• Fracturas simples<br/>• Contusiones fuertes<br/>• Dislocaciones<br/>• Perforación sin daño a órganos<br/>• Envenenamiento leve<br/>• Mordeduras infectadas<br/>• Perforación media', 
            severity: 2 
          },
          { 
            num: 'Tier 3', 
            title: 'Graves', 
            icon: 'hospital-cross',
            text: 'Comprometen tu salud seriamente.<br/>• Fracturas expuestas<br/>• Sangrado profuso<br/>• Órganos perforados<br/>• Arterias cortadas<br/>• Envenenamiento medio<br/>• Quemaduras de 3er grado<br/>• Desmembramiento parcial<br/>• Cortes profundos que exponen órganos', 
            severity: 3 
          },
          { 
            num: 'Tier 4', 
            title: 'Fatales', 
            icon: 'skull',
            text: 'Heridas que ponen en riesgo inmediato tu vida.<br/>• Desmembramiento completo<br/>• Fallo de órganos<br/>• Sangrado masivo<br/>• Quemaduras internas fatales<br/>• Envenenamiento crítico', 
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
        title: 'Regla de HP',
        text: 'El tier de heridas final será determinado por el %HP más bajo alcanzado durante el combate.',
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
          { label: 'Inestable (25-39)', icon: 'brain-freeze' },
          { label: 'Errático (10-24)', icon: 'lightning-bolt' },
          { label: 'Perturbado (1-9)', icon: 'broken-skull' },
          { label: 'Demente (0)', icon: 'player-despair' },
        ],
      },
      {
        label: 'Tiers de Cordura y Síntomas',
        cards: [
          { 
            num: 'T1', 
            title: 'Inestable', 
            icon: 'brain-freeze',
            text: 'Inestabilidad leve a moderada.<br/>• Dolores de cabeza<br/>• Pesadillas frecuentes<br/>• Fatiga mental<br/>• Ansiedad<br/>• Irritabilidad', 
            severity: 1 
          },
          { 
            num: 'T2', 
            title: 'Errático', 
            icon: 'lightning-bolt',
            text: 'Colapso incipiente.<br/>• Escuchas voces ocasionales<br/>• Dificultad para distinguir realidad de ilusión<br/>• Alucinaciones esporádicas<br/>• Desarrollo de fobias nuevas o agravación de miedos previos', 
            severity: 2 
          },
          { 
            num: 'T3', 
            title: 'Perturbado', 
            icon: 'broken-skull',
            text: 'Fractura psíquica severa.<br/>• Disociación de personalidad<br/>• Visión de entidades que no deberían existir<br/>• Voces constantes<br/>• Alta vulnerabilidad a posesiones<br/>• Fobias múltiples y extremas', 
            severity: 3 
          },
          { 
            num: 'T4', 
            title: 'Demente', 
            icon: 'player-despair',
            text: 'Colapso total de la mente.<br/>• Pérdida de identidad<br/>• Incapacidad para mantener interacciones sociales simples<br/>• Dificultad grave para el autocuidado<br/>• Dependencia casi total de terceros', 
            severity: 4 
          },
        ],
      },
      {
        label: 'Estados Mentales',
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
        label: 'Estado Social y Legal',
        type: 'info',
        icon: 'gavel',
        title: 'Estado Social y Legal',
        text: 'Los malditos son la escoria del reino, enemigos de la vida y considerados un error fatal en la existencia de este plano. Pueden ser vistos como víctimas de una cacería constante y activa por parte de la orden, el gremio, y todas las autoridades presentes en el reino. Todo contacto con un maldito puede ser sancionado de forma severa, llegando incluso a la ejecución de la persona comprobada como ayudante de alguno de ellos.<br/><br/>Una vez identificados, se les considera una amenaza pública, perdiendo así acceso a ciudades establecidas y prohibiéndosele actividad comercial de cualquier tipo. Son marginados de la sociedad, pues en la mayor parte de los casos un maldito sólo conoce una cosa: Alimentarse.',
      },
      {
        label: 'Comportamiento General',
        type: 'info',
        icon: 'biohazard',
        title: 'Comportamiento General',
        text: 'A lo largo y ancho del territorio se han visto escenas grotescas: Cuerpos destrozados, caravanas destruidas, puestos de vigilancia abandonados. Esto bien podría atribuirse a la guerra civil, a las víctimas de esta... pero la realidad va más allá de lo que está a simple vista, y dependerá de todo aquel que encuentre un indicio como este el identificar la naturaleza de estos sitios.<br/><br/>Un maldito es un ser dominado por el hambre, entregado al instinto básico de la supervivencia. Siempre buscarán alimentarse, saciar su deseo, y no tendrán piedad de cualquiera que se interponga entre ellos y esa satisfacción. Son peligrosos, y se dice que lo que buscan puede variar mucho entre un maldito y otro, sospechándose así indicios de diferentes tipos de corrupción sembrándose en sus corazones.',
      },
      {
        label: 'Progresión de la Corrupción',
        type: 'process',
        steps: [
          { label: 'Fase 1 (Incipiente)', icon: 'poison-cloud' },
          { label: 'Fase 2 (Latente)', icon: 'biohazard' },
          { label: 'Fase 3 (Fractura)', icon: 'broken-skull' },
          { label: 'Fase 4 (Maldito)', icon: 'death-skull' },
        ],
      },
      {
        label: 'Detalle de las Fases',
        cards: [
          { 
            num: 'Fase 1', 
            title: 'Incipiente', 
            icon: 'poison-cloud',
            text: 'Primer contacto. Síntomas leves según el tipo. Corresponde a Tier 1 de heridas. Salvable con cura básica.', 
            severity: 1 
          },
          { 
            num: 'Fase 2', 
            title: 'Latente', 
            icon: 'biohazard',
            text: 'Comienza a arraigarse. Síntomas moderados. Tier 2 de heridas. Posibles secuelas físicas o mentales temporales.', 
            severity: 2 
          },
          { 
            num: 'Fase 3', 
            title: 'Fractura', 
            icon: 'broken-skull',
            text: 'Síntomas graves y desviaciones físicas/mentales. Tier 3 de heridas. Posibles secuelas permanentes.', 
            severity: 3 
          },
          { 
            num: 'Fase 4', 
            title: 'Maldito', 
            icon: 'death-skull',
            text: 'Punto de no retorno. Debe ser ejecutado en el acto o capturado para estudio.', 
            severity: 4 
          },
        ],
      },
      {
        label: 'Consecuencias de Fase 4',
        cards: [
          { 
            num: 'Opción 1', 
            title: 'CK Administrativo', 
            icon: 'book',
            text: 'El personaje se entrega a la maldición, pierde la razón y se pierde por completo. Nuevo personaje en el mismo Tier.', 
            severity: 4 
          },
          { 
            num: 'Opción 2', 
            title: 'Supervivencia', 
            icon: 'mountains',
            text: 'Prueba de supervivencia cazando libremente hasta morir. Nuevo PJ con un tier menos del alcanzado.', 
            severity: 3 
          },
          { 
            num: 'Nota', 
            title: 'CK Abierto', 
            icon: 'crossed-swords',
            text: 'El personaje tendrá un CK abierto por parte del servidor entero. Podrá matar a todo el que le haga frente.', 
            severity: 4 
          },
          { 
            num: 'Ficha', 
            title: 'Repercusión', 
            icon: 'quill-ink',
            text: 'Cada fase repercutirá directamente en la ficha del personaje de forma negativa y/o positiva.', 
            severity: 2 
          },
        ],
      },
      {
        label: 'Sobre las Curas',
        type: 'info',
        icon: 'vial',
        title: 'Sobre las Curas',
        text: 'Las curas son tan misteriosas como las propias corrupciones que nacen en este reino. Será deber de cada jugador hacerse participe de ellas, entender como funcionan, y desarrollarlas en caso de ser necesario.<br/><br/>En la actualidad se rumorea que la Lucis Aeterna ha avanzado en sus investigaciones en este respecto. Se ha determinado igualmente que, dependiendo de la fase de la corrupción será más complicado de sanar, llegando incluso a dejar secuelas permanentes en las fases más altas de corrupción.',
      },
    ],
  },

  conquista: {
    title: 'Conquista y defensa territorial',
    subtitle: 'Control y expansión',
    introImage: '/assets/images/sistema/conquista.png',
    introGlow: '#d4a03a',
    breadcrumb: 'Conquista',
    intro: `<blockquote class="norm-quote">Primus, una tierra fracturada por innumerables guerras, conflictos y otros pareceres. Pero más allá de todo eso, existen territorios indomables… o así se pensaban que lo eran.<br/><br/>
    <strong>El Norte:</strong> Tierra de nadie, llena de pesadillas, muerte y desolación. Ha sido la tarea de los valientes Stormheilm explorar este territorio, dominarlo, y asegurarse que, a pesar de sus muchos peligros, fuese un lugar seguro de transitar. Por años se mantuvo salvaje, inhóspito, y despiadado.<br/><br/>
    <strong>El territorio central:</strong> Con la caída de Raventree, el centro del continente quedó a la deriva, desprotegido por la corona, y desprovisto de la fuerza militar que anteriormente lo mantenía seguro. Los Krieger, sin sus anillos, y con la rebelión en sus puertas, se vieron imposibilitados de mantener la estructura y la ley en esta tierra que hoy día se ha convertido en un campo de guerra. Aunque no sólo la guerra asola estas tierras, pues algo más oscuro parece acechar desde lugares sombríos.<br/><br/>
    Es momento de alzarse, de levantar la espada, y poner los ojos en el horizonte. Por lo que una vez fue, y lo que un día podrá volver a ser.</blockquote>`,
    sections: [
      {
        label: 'Fases Principales',
        type: 'process',
        steps: [
          { label: 'Fase de Conquista', icon: 'crossed-swords' },
          { label: 'Defensa y Consolidación', icon: 'castle-flag' },
        ],
      },
      {
        label: 'Fase I — Conquista',
        cards: [
          { 
            num: 'Objetivo', 
            title: 'Reclamar Zona', 
            icon: 'crossed-swords',
            text: 'Establecer control inicial. Se realiza a través de narración administrativa aleatoria:<br/>• Limpieza directa de enemigos<br/>• Escolta de caravana con materiales<br/>• Defensa ante emboscadas durante instalación<br/>• Defensa improvisada mientras se asegura perímetro', 
            severity: 1 
          },
          { 
            num: 'POIs', 
            title: 'Puntos de Interés', 
            icon: 'eyeball',
            text: 'Durante la exploración pueden hallarse:<br/>• Encuentros con enemigos para empujar frontera<br/>• Eventos ambientales (clima, terreno hostil)<br/>• Hallazgo de pistas sobre amenazas mayores<br/>• Descubrimiento de punto estratégico ideal', 
            severity: 1 
          },
          { 
            num: 'Puesto', 
            title: 'Construcción (48h)', 
            icon: 'tower',
            text: 'Tras la conquista hay 48 horas para construir. Si no se completa narrativamente, la zona vuelve a estado inestable y debe ser recapturada.', 
            severity: 2 
          },
        ],
      },
      {
        label: 'Requisitos de Construcción',
        cards: [
          { 
            num: '01', 
            title: 'Personal', 
            icon: 'player',
            text: 'Un forjador o un artífice (Profesiones).', 
            severity: 1 
          },
          { 
            num: '02', 
            title: 'Pericia', 
            icon: 'large-hammer',
            text: 'Una tirada acumulativa grupal de “Pericia” igual o superior a 40.', 
            severity: 1 
          },
          { 
            num: '03', 
            title: 'Logística', 
            icon: 'fast-ship',
            text: 'Uso de materiales otorgados en cofre público y emotes correspondientes para la estructura base.', 
            severity: 1 
          },
        ],
      },
      {
        label: 'Fase II — Defensa y consolidación',
        cards: [
          { 
            num: 'A', 
            title: 'Mantenimiento Activo', 
            icon: 'repair',
            text: 'Aparecen POIs automáticos, NPC hostiles menores, pistas y eventos de sabotaje. Cada evento debe ser narrado en autorol y reportado por ticket.', 
            severity: 1 
          },
          { 
            num: 'B', 
            title: 'Fortificaciones', 
            icon: 'shield',
            text: 'Mejoras con: Torre de vigía, Guardias adicionales, Muralla perimetral, Almacén de recursos y Emplazamientos fijos (ballestas, catapultas).', 
            severity: 1 
          },
        ],
      },
      {
        label: 'Actividad Hostil y Pérdida',
        type: 'info',
        icon: 'uncertainty',
        title: 'Alerta de Almenaras',
        text: 'Si durante 48h no hay reportes de bajas o POIs, se encienden las almenaras (llamado público). Si 24h después no hay respuesta ni refuerzos, el puesto cae y debe ser reconquistado desde cero.',
      },
    ],
    outro: `<blockquote class="norm-quote"><strong>Aviso importante para los jugadores:</strong><br/>
    Este es un evento en constante desarrollo y movimiento. El que ustedes no participen de él, no implica que el sistema no esté en funcionamiento.<br/><br/>
    Mantener el territorio seguro les reportará el beneficio inmediato de reducción de actividad hostil en territorios capturados. Como beneficio adicional, participar de estas conquistas será validado para progreso de clase donde aplique, y obtención de beneficios adicionales a discreción de la administración.<br/><br/>
    Perder control del territorio puede, y tendrá consecuencias graves para el entorno.<br/><br/>
    La actividad en el evento es constante, aunque no requiere de una gran cantidad de personas, sino organización por su parte. Un grupo de jugadores pueden actuar de exploradores para verificar que los puestos de avanzada no tengan actividad. Si la tienen, reportarla a los demás en base a la severidad del evento para organizar las acciones pertinentes.</blockquote>`,
  },
}
