/**
 * Páginas de zona (SEO local). Cada zona tiene contenido propio: no es una plantilla con el
 * nombre del pueblo cambiado. No se nombran fincas ni salones concretos hasta confirmar convenios.
 */
export interface ZoneFaq {
  question: string;
  answer: string;
}

export interface Zone {
  slug: string;
  /** Localidad principal, usada en la URL, el título y el menú de zonas. */
  town: string;
  /** Nombre de la comarca o del área que cubre la página. */
  area: string;
  province: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  heading: string;
  lead: string;
  /** Párrafos de introducción sobre cómo trabajamos en la zona. */
  intro: string[];
  towns: string[];
  /** Producto y cocina de la zona que se pueden llevar al menú. */
  flavours: { title: string; text: string }[];
  /** Tipos de evento con el enfoque propio de la zona. */
  events: { label: string; title: string; text: string }[];
  /** Consejo práctico para organizar un evento en la zona. */
  tip: { title: string; text: string };
  photo: { src: string; alt: string };
  faqs: ZoneFaq[];
}

export const zones: Zone[] = [
  {
    slug: 'almagro',
    town: 'Almagro',
    area: 'Campo de Calatrava',
    province: 'Provincia de Ciudad Real',
    metaTitle: 'Catering en Almagro y Campo de Calatrava | Azurea Catering',
    metaDescription:
      'Catering para bodas, comuniones y eventos en Almagro, Bolaños, Miguelturra y el Campo de Calatrava. Menús con producto de la zona y servicio completo.',
    kicker: 'Catering en Almagro y el Campo de Calatrava',
    heading: 'Bodas y celebraciones con el sabor del Campo de Calatrava',
    lead:
      'Llevamos el cóctel, el menú y el servicio a casas, patios, fincas y salones de Almagro, Bolaños de Calatrava, Miguelturra y el resto del Campo de Calatrava.',
    intro: [
      'El Campo de Calatrava es la zona que tenemos más a mano desde Ciudad Real, así que aquí podemos montar desde una comida familiar en un patio hasta una boda de varios cientos de invitados en una finca, con el mismo equipo que trabaja en la capital.',
      'Almagro tiene además un público que viene de fuera: invitados que se alojan en el pueblo y aprovechan para conocerlo. Por eso solemos proponer un cóctel de bienvenida con producto reconocible de la zona, que funciona muy bien como primera impresión.',
    ],
    towns: [
      'Almagro',
      'Bolaños de Calatrava',
      'Miguelturra',
      'Poblete',
      'Carrión de Calatrava',
      'Torralba de Calatrava',
      'Pozuelo de Calatrava',
      'Calzada de Calatrava',
      'Aldea del Rey',
      'Granátula de Calatrava',
    ],
    flavours: [
      {
        title: 'Berenjena de Almagro',
        text: 'La berenjena aliñada con su Indicación Geográfica Protegida, en banderilla o como parte de la barra de encurtidos del cóctel.',
      },
      {
        title: 'Aceite del Campo de Calatrava',
        text: 'Aceite de oliva virgen extra de la Denominación de Origen de la comarca para panes, tostas y aliños.',
      },
      {
        title: 'Queso manchego',
        text: 'Corner de queso manchego con diferentes curaciones, una apuesta segura con invitados de dentro y de fuera.',
      },
    ],
    events: [
      {
        label: 'Bodas',
        title: 'Bodas con invitados de fuera',
        text: 'Cóctel de bienvenida, banquete y barra libre pensados para un día largo, con horarios coordinados con la ceremonia y el alojamiento.',
      },
      {
        label: 'Comuniones',
        title: 'Comuniones en casa o en patio',
        text: 'Menú para adultos y niños servido en casa, en un patio o en el jardín, con montaje y recogida incluidos si los necesitas.',
      },
      {
        label: 'Empresa',
        title: 'Encuentros y jornadas',
        text: 'Cócteles, almuerzos y coffee breaks para presentaciones, jornadas o grupos de visita en la comarca.',
      },
    ],
    tip: {
      title: 'Si te casas en julio, reserva pronto',
      text: 'En julio Almagro acoge el Festival Internacional de Teatro Clásico y el pueblo recibe muchos visitantes. Si tu boda o evento cae en esas fechas, conviene cerrar espacio, alojamiento y catering con más antelación de lo habitual.',
    },
    photo: {
      src: '/images/optimized/azurea-mesa-exterior.webp',
      alt: 'Mesa de aperitivos al aire libre preparada por Azurea para una celebración en el Campo de Calatrava',
    },
    faqs: [
      {
        question: '¿Hacéis catering en Almagro y en Miguelturra?',
        answer:
          'Sí. Almagro, Miguelturra, Bolaños de Calatrava, Poblete y el resto del Campo de Calatrava forman parte de nuestra zona de trabajo habitual, muy cerca de Ciudad Real.',
      },
      {
        question: '¿Podéis incluir productos de la zona en el menú?',
        answer:
          'Sí. Podemos incluir berenjena de Almagro, aceite del Campo de Calatrava o queso manchego en el cóctel o en el menú. Dínoslo al pedir presupuesto y lo incorporamos a la propuesta.',
      },
      {
        question: '¿Servís en casas particulares y patios, no solo en fincas?',
        answer:
          'Sí. Trabajamos en casas, patios, jardines, fincas y salones. Al pedir presupuesto cuéntanos el espacio y valoramos el montaje, el menaje y el personal que hace falta.',
      },
    ],
  },
  {
    slug: 'puertollano',
    town: 'Puertollano',
    area: 'Puertollano y el Valle de Alcudia',
    province: 'Provincia de Ciudad Real',
    metaTitle: 'Catering en Puertollano y Almodóvar del Campo | Azurea Catering',
    metaDescription:
      'Catering en Puertollano, Almodóvar del Campo y Argamasilla de Calatrava: bodas, comuniones y eventos de empresa con menú, camareros y montaje.',
    kicker: 'Catering en Puertollano y alrededores',
    heading: 'Catering para empresas y familias en Puertollano',
    lead:
      'Preparamos eventos de empresa, bodas, comuniones y celebraciones en Puertollano, Almodóvar del Campo, Argamasilla de Calatrava y los pueblos del Valle de Alcudia.',
    intro: [
      'Puertollano combina un tejido industrial y energético importante con una vida familiar muy activa, y eso se nota en los encargos: inauguraciones, visitas de clientes y comidas de equipo entre semana, y comuniones, cumpleaños y bodas los fines de semana.',
      'Para las empresas trabajamos con propuesta por escrito, horarios cerrados y factura a nombre de la sociedad. Para las familias, el mismo cuidado con un trato más cercano y menús pensados para todas las edades.',
    ],
    towns: [
      'Puertollano',
      'Almodóvar del Campo',
      'Argamasilla de Calatrava',
      'Villamayor de Calatrava',
      'Brazatortas',
      'Mestanza',
      'Hinojosas de Calatrava',
      'Cabezarados',
    ],
    flavours: [
      {
        title: 'Cocina de dehesa',
        text: 'Ibéricos y carnes de la tradición ganadera del Valle de Alcudia, en tabla, en brocheta o como plato principal.',
      },
      {
        title: 'Migas y gachas manchegas',
        text: 'Platos de cuchara y de sartén que encajan muy bien en las celebraciones de otoño e invierno.',
      },
      {
        title: 'Queso y aceite de la provincia',
        text: 'Queso manchego y aceite de oliva virgen extra de la zona para el cóctel y los entrantes.',
      },
    ],
    events: [
      {
        label: 'Empresa',
        title: 'Inauguraciones y visitas de clientes',
        text: 'Cócteles de pie, almuerzos de trabajo y coffee breaks con un horario cerrado y un servicio discreto.',
      },
      {
        label: 'Navidad',
        title: 'Comidas y cenas de Navidad',
        text: 'Menús de grupo para plantillas pequeñas y grandes, en vuestras instalaciones o en el espacio que elijáis.',
      },
      {
        label: 'Familia',
        title: 'Comuniones y cumpleaños',
        text: 'Celebraciones en casa, en el jardín o en un salón, con menú infantil y mesa dulce si lo queréis.',
      },
    ],
    tip: {
      title: 'Para un evento de empresa, cierra el horario',
      text: 'En los eventos corporativos lo que más cambia el presupuesto es la duración del servicio y el número de camareros. Si nos dais hora de inicio, hora de fin y número aproximado de asistentes, la propuesta sale ajustada desde el principio.',
    },
    photo: {
      src: '/images/optimized/azurea-equipo-camareros.webp',
      alt: 'Equipo de camareros de Azurea preparado para recibir a los invitados de un evento en Puertollano',
    },
    faqs: [
      {
        question: '¿Hacéis catering para empresas en Puertollano?',
        answer:
          'Sí. Preparamos cócteles, almuerzos, coffee breaks y comidas o cenas de Navidad para empresas de Puertollano y alrededores, con propuesta por escrito y factura a nombre de la empresa.',
      },
      {
        question: '¿Llegáis a Almodóvar del Campo y a los pueblos del Valle de Alcudia?',
        answer:
          'Sí, trabajamos en Almodóvar del Campo, Argamasilla de Calatrava, Brazatortas y el resto de la zona. En los pueblos más alejados te confirmamos la disponibilidad al recibir la fecha y el lugar.',
      },
      {
        question: '¿Podéis servir en las instalaciones de la empresa?',
        answer:
          'Sí. Montamos el servicio en oficinas, naves, salas de reuniones o espacios exteriores. Necesitamos saber el espacio disponible y si hay toma de agua y luz cerca para planificar el montaje.',
      },
    ],
  },
  {
    slug: 'daimiel',
    town: 'Daimiel',
    area: 'Daimiel, Malagón y Villarrubia de los Ojos',
    province: 'Provincia de Ciudad Real',
    metaTitle: 'Catering en Daimiel, Malagón y Villarrubia | Azurea Catering',
    metaDescription:
      'Catering en Daimiel, Malagón, Villarrubia de los Ojos y Fernán Caballero. Bodas, comuniones y celebraciones al aire libre con servicio completo.',
    kicker: 'Catering en Daimiel, Malagón y Villarrubia de los Ojos',
    heading: 'Celebraciones al aire libre entre Daimiel y los Montes de Toledo',
    lead:
      'Montamos bodas, comuniones y fiestas privadas en Daimiel, Malagón, Villarrubia de los Ojos, Fernán Caballero y los pueblos del norte de la provincia.',
    intro: [
      'En esta zona muchas celebraciones se hacen en casas de campo, fincas y jardines, cerca del Parque Nacional de las Tablas de Daimiel o a los pies de los Montes de Toledo. Son eventos al aire libre en los que el montaje pesa tanto como el menú.',
      'Por eso, además de la comida, nos encargamos si lo necesitas de mobiliario, menaje, carpas o zonas de sombra, y de planificar un plan alternativo por si el tiempo no acompaña.',
    ],
    towns: [
      'Daimiel',
      'Malagón',
      'Villarrubia de los Ojos',
      'Fernán Caballero',
      'Fuente el Fresno',
      'Porzuna',
      'Piedrabuena',
      'Picón',
    ],
    flavours: [
      {
        title: 'Pisto y cocina de huerta',
        text: 'Pisto manchego, verduras de temporada y platos de huerta que funcionan muy bien en cóctel y en buffet.',
      },
      {
        title: 'Queso manchego',
        text: 'Corner de queso manchego con panes, aceites y mermeladas para acompañar la espera entre la ceremonia y el banquete.',
      },
      {
        title: 'Barra de aperitivos',
        text: 'Encurtidos, banderillas y bebidas frías servidas al aire libre, ideales para celebraciones de primavera y verano.',
      },
    ],
    events: [
      {
        label: 'Bodas',
        title: 'Bodas en finca o en el campo',
        text: 'Cóctel en el jardín, banquete en mesa o buffet, y la logística del montaje en exteriores resuelta por nuestro equipo.',
      },
      {
        label: 'Comuniones',
        title: 'Comuniones en casa de campo',
        text: 'Menús para adultos y niños, con espacio para que los pequeños jueguen y los mayores coman tranquilos.',
      },
      {
        label: 'Familia',
        title: 'Reuniones familiares y aniversarios',
        text: 'Comidas largas al aire libre para familias grandes, con servicio en mesa o formato buffet.',
      },
    ],
    tip: {
      title: 'Al aire libre, piensa en la sombra y en el plan B',
      text: 'En verano las horas centrales del día son muy calurosas y en primavera puede cambiar el tiempo. Recomendamos programar el cóctel a última hora de la tarde y tener prevista una zona cubierta. Te ayudamos a planificarlo al hacer la propuesta.',
    },
    photo: {
      src: '/images/optimized/azurea-celebracion.webp',
      alt: 'Invitados en el jardín durante una celebración al aire libre con catering de Azurea',
    },
    faqs: [
      {
        question: '¿Hacéis catering en Daimiel y en Malagón?',
        answer:
          'Sí. Daimiel, Malagón, Villarrubia de los Ojos, Fernán Caballero y los pueblos del entorno están dentro de nuestra zona de trabajo habitual.',
      },
      {
        question: '¿Os encargáis del montaje en una casa de campo o finca sin equipamiento?',
        answer:
          'Sí. Podemos aportar mobiliario, menaje, mantelería y el personal de montaje y recogida. Cuéntanos el espacio y el número de invitados y te decimos qué hace falta.',
      },
      {
        question: '¿Qué pasa si llueve el día de una celebración al aire libre?',
        answer:
          'Lo planificamos antes: te proponemos una zona cubierta o una carpa y adaptamos el servicio para que el cambio no afecte al menú ni a los horarios.',
      },
    ],
  },
  {
    slug: 'valdepenas',
    town: 'Valdepeñas',
    area: 'Valdepeñas y el sur de la provincia',
    province: 'Provincia de Ciudad Real',
    metaTitle: 'Catering en Valdepeñas para bodas y eventos | Azurea Catering',
    metaDescription:
      'Catering en Valdepeñas, Santa Cruz de Mudela, Moral de Calatrava y Torrenueva. Bodas, comuniones y eventos con maridaje de vinos de la zona.',
    kicker: 'Catering en Valdepeñas y alrededores',
    heading: 'Bodas y eventos en tierra de vino',
    lead:
      'Servimos bodas, comuniones, cenas de empresa y celebraciones en Valdepeñas, Santa Cruz de Mudela, Moral de Calatrava, Torrenueva y el sur de la provincia.',
    intro: [
      'En Valdepeñas el vino forma parte de cualquier celebración. Por eso aquí proponemos con frecuencia un menú pensado para maridar, un corner de vinos o un brindis con vino de la tierra en lugar del cava de siempre.',
      'Trabajamos en fincas, salones y espacios de bodega que admiten catering externo, y también en casas particulares para celebraciones más pequeñas.',
    ],
    towns: [
      'Valdepeñas',
      'Santa Cruz de Mudela',
      'Moral de Calatrava',
      'Torrenueva',
      'San Carlos del Valle',
      'Castellar de Santiago',
    ],
    flavours: [
      {
        title: 'Vinos de la D.O. Valdepeñas',
        text: 'Selección de vinos de la denominación para el banquete, el corner de vinos o el brindis final.',
      },
      {
        title: 'Corner de queso y vino',
        text: 'Queso manchego de diferentes curaciones acompañado de vinos de la zona: uno de los rincones que más se comentan.',
      },
      {
        title: 'Cocina manchega actualizada',
        text: 'Platos tradicionales en formato de cóctel, como migas o gachas en pequeñas raciones, para dar un toque local.',
      },
    ],
    events: [
      {
        label: 'Bodas',
        title: 'Bodas con maridaje',
        text: 'Banquete en mesa con vinos elegidos para cada plato y un cóctel de bienvenida con producto de la zona.',
      },
      {
        label: 'Empresa',
        title: 'Cenas de empresa y presentaciones',
        text: 'Cócteles y cenas para equipos, clientes y presentaciones de producto, con propuesta por escrito.',
      },
      {
        label: 'Comuniones',
        title: 'Comuniones y bautizos',
        text: 'Menús familiares con opciones infantiles, servidos en casa, en un jardín o en un salón.',
      },
    ],
    tip: {
      title: 'Evita coincidir con la vendimia si buscas un espacio de bodega',
      text: 'Entre finales de agosto y octubre muchas bodegas están en plena vendimia y tienen menos disponibilidad para eventos. Si quieres celebrar en un espacio vinculado al vino, consulta las fechas con tiempo.',
    },
    photo: {
      src: '/images/optimized/azurea-brindis.webp',
      alt: 'Servicio de copas para el brindis en un evento de Azurea en Valdepeñas',
    },
    faqs: [
      {
        question: '¿Hacéis catering en Valdepeñas?',
        answer:
          'Sí. Trabajamos en Valdepeñas y en localidades cercanas como Santa Cruz de Mudela, Moral de Calatrava, Torrenueva o San Carlos del Valle.',
      },
      {
        question: '¿Podéis preparar un menú con maridaje de vinos de Valdepeñas?',
        answer:
          'Sí. Podemos proponer vinos de la D.O. Valdepeñas para cada plato del banquete o un corner de queso y vino. Dínoslo al pedir presupuesto y lo incluimos en la propuesta.',
      },
      {
        question: '¿Servís en espacios que no tienen cocina?',
        answer:
          'Sí. Organizamos el servicio para espacios sin cocina propia y planificamos el montaje según el lugar. Cuéntanos dónde será el evento y lo valoramos.',
      },
    ],
  },
  {
    slug: 'manzanares',
    town: 'Manzanares',
    area: 'Manzanares, Membrilla y La Solana',
    province: 'Provincia de Ciudad Real',
    metaTitle: 'Catering en Manzanares, Membrilla y La Solana | Azurea Catering',
    metaDescription:
      'Catering en Manzanares, Membrilla, La Solana y Llanos del Caudillo. Bodas, comuniones y eventos con cocina manchega y servicio completo.',
    kicker: 'Catering en Manzanares, Membrilla y La Solana',
    heading: 'Cocina manchega para celebrar en el corazón de La Mancha',
    lead:
      'Preparamos bodas, comuniones, comidas de empresa y fiestas en Manzanares, Membrilla, La Solana, Llanos del Caudillo y los pueblos del entorno.',
    intro: [
      'Manzanares, Membrilla y La Solana son pueblos con mucha tradición de celebrarlo todo en familia y a lo grande. Aquí son habituales las comuniones con muchos invitados y las bodas que mezclan lo clásico con algún detalle moderno.',
      'Nuestro planteamiento en la zona es sencillo: una cocina manchega reconocible, bien presentada, y un servicio que llega a tiempo y deja todo recogido.',
    ],
    towns: ['Manzanares', 'Membrilla', 'La Solana', 'Llanos del Caudillo', 'Alhambra', 'Villarta de San Juan'],
    flavours: [
      {
        title: 'Azafrán de La Mancha',
        text: 'Un toque de azafrán con Denominación de Origen Protegida en arroces, cremas o salsas del menú.',
      },
      {
        title: 'Queso manchego',
        text: 'Tabla o corner de queso manchego para abrir el cóctel o cerrar la comida.',
      },
      {
        title: 'Platos de la tierra en formato cóctel',
        text: 'Migas, gachas o pisto en pequeñas raciones, para que los invitados prueben lo de siempre de otra manera.',
      },
    ],
    events: [
      {
        label: 'Comuniones',
        title: 'Comuniones con muchos invitados',
        text: 'Menús para grupos grandes, con un menú infantil propio y un servicio organizado para que todo salga a la vez.',
      },
      {
        label: 'Bodas',
        title: 'Bodas clásicas con detalles nuevos',
        text: 'Banquete tradicional con cóctel moderno, estaciones o mesa dulce para dar un aire actual a la celebración.',
      },
      {
        label: 'Empresa',
        title: 'Comidas de empresa y cooperativas',
        text: 'Comidas de grupo, celebraciones de fin de campaña y cenas de Navidad con factura a nombre de la entidad.',
      },
    ],
    tip: {
      title: 'Las fechas de comuniones se llenan antes',
      text: 'Los fines de semana de mayo concentran casi todas las comuniones de la zona. Si ya tienes la fecha, pide presupuesto cuanto antes para asegurar disponibilidad de catering y espacio.',
    },
    photo: {
      src: '/images/optimized/azurea-aperitivos.webp',
      alt: 'Bandeja de aperitivos de cocina manchega servida por Azurea Catering',
    },
    faqs: [
      {
        question: '¿Hacéis catering en Manzanares, Membrilla y La Solana?',
        answer:
          'Sí. Manzanares, Membrilla, La Solana y los pueblos del entorno forman parte de nuestra zona de servicio habitual.',
      },
      {
        question: '¿Preparáis comuniones para muchos invitados?',
        answer:
          'Sí. Organizamos comuniones de grupos grandes con menú para adultos y para niños, y ajustamos el número de camareros para que el servicio sea ágil.',
      },
      {
        question: '¿Podéis incluir azafrán de La Mancha u otros productos locales?',
        answer:
          'Sí. Podemos incorporar azafrán de La Mancha, queso manchego u otros productos de la zona en el menú. Indícalo al pedir presupuesto.',
      },
    ],
  },
  {
    slug: 'tomelloso',
    town: 'Tomelloso',
    area: 'Tomelloso, Argamasilla de Alba y Socuéllamos',
    province: 'Provincia de Ciudad Real',
    metaTitle: 'Catering en Tomelloso y Argamasilla de Alba | Azurea Catering',
    metaDescription:
      'Catering en Tomelloso, Argamasilla de Alba y Socuéllamos. Bodas, comuniones, cenas de empresa y celebraciones con menú a medida.',
    kicker: 'Catering en Tomelloso y alrededores',
    heading: 'Catering a medida en Tomelloso y su comarca',
    lead:
      'Llevamos nuestro servicio a Tomelloso, Argamasilla de Alba, Socuéllamos y los pueblos cercanos para bodas, comuniones, eventos de empresa y fiestas privadas.',
    intro: [
      'Tomelloso es una de las ciudades más grandes de la provincia y tiene una larga tradición vinícola, con sus cuevas excavadas bajo las casas y los bombos de piedra del campo. Es una zona donde se celebra mucho y donde se valora un buen vino en la mesa.',
      'Al estar en el límite de nuestro radio habitual de una hora, organizamos los eventos de la zona con la logística cerrada de antemano: horarios de llegada, montaje y servicio quedan fijados en la propuesta.',
    ],
    towns: ['Tomelloso', 'Argamasilla de Alba', 'Socuéllamos', 'Pedro Muñoz'],
    flavours: [
      {
        title: 'Vinos de la D.O. La Mancha',
        text: 'Vinos de la denominación para el banquete y el brindis, en una de las zonas con más tradición vinícola de la provincia.',
      },
      {
        title: 'Queso manchego',
        text: 'Corner de quesos manchegos con distintas curaciones, panes y aceites.',
      },
      {
        title: 'Cóctel con raíces',
        text: 'Aperitivos de inspiración manchega mezclados con propuestas más actuales para todo tipo de invitados.',
      },
    ],
    events: [
      {
        label: 'Bodas',
        title: 'Bodas con todo organizado',
        text: 'Cóctel, banquete, barra libre y coordinación del día, con una planificación detallada de horarios.',
      },
      {
        label: 'Empresa',
        title: 'Cenas de empresa y fin de campaña',
        text: 'Cenas de Navidad, celebraciones de fin de vendimia o de campaña y presentaciones, con factura a empresa.',
      },
      {
        label: 'Familia',
        title: 'Comuniones y cumpleaños',
        text: 'Celebraciones familiares en casa, en jardín o en salón, con menús adaptados a niños y mayores.',
      },
    ],
    tip: {
      title: 'Pide presupuesto con la dirección exacta',
      text: 'Como Tomelloso está en el borde de nuestro radio, la dirección exacta del lugar nos permite ajustar el desplazamiento y los horarios del equipo desde la primera propuesta.',
    },
    photo: {
      src: '/images/optimized/azurea-champan-brindis.webp',
      alt: 'Camarero de Azurea sirviendo copas para el brindis en una celebración en Tomelloso',
    },
    faqs: [
      {
        question: '¿Hacéis catering en Tomelloso?',
        answer:
          'Sí. Tomelloso, Argamasilla de Alba y Socuéllamos entran en nuestro radio de trabajo de alrededor de una hora desde Ciudad Real. Te confirmamos la disponibilidad al recibir la fecha y el lugar.',
      },
      {
        question: '¿Cobráis desplazamiento por ir a Tomelloso?',
        answer:
          'El desplazamiento se valora en cada propuesta según el lugar, el número de invitados y el personal necesario. Te lo indicamos de forma clara en el presupuesto.',
      },
      {
        question: '¿Hacéis cenas de empresa en Tomelloso?',
        answer:
          'Sí. Preparamos cenas de Navidad, celebraciones de fin de campaña, cócteles y presentaciones para empresas y cooperativas de la zona, con factura a empresa.',
      },
    ],
  },
  {
    slug: 'alcazar-de-san-juan',
    town: 'Alcázar de San Juan',
    area: 'Alcázar de San Juan, Campo de Criptana y Herencia',
    province: 'Provincia de Ciudad Real',
    metaTitle: 'Catering en Alcázar de San Juan y Campo de Criptana | Azurea Catering',
    metaDescription:
      'Catering en Alcázar de San Juan, Campo de Criptana, Herencia y Pedro Muñoz. Bodas, comuniones y eventos de empresa con servicio completo.',
    kicker: 'Catering en Alcázar de San Juan y Campo de Criptana',
    heading: 'Bodas y eventos en la tierra de los molinos',
    lead:
      'Preparamos bodas, comuniones, eventos de empresa y celebraciones en Alcázar de San Juan, Campo de Criptana, Herencia y los pueblos del entorno.',
    intro: [
      'Los molinos de Campo de Criptana y el paisaje de La Mancha más reconocible atraen cada año a parejas que quieren una boda con identidad manchega. Alcázar de San Juan, con su estación de tren, facilita además la llegada de invitados de Madrid y de otras ciudades.',
      'Para bodas con invitados de fuera, coordinamos el cóctel y el banquete con los horarios de llegada y de vuelta, y proponemos un menú que presente la cocina de la zona a quien no la conoce.',
    ],
    towns: [
      'Alcázar de San Juan',
      'Campo de Criptana',
      'Herencia',
      'Pedro Muñoz',
      'Arenales de San Gregorio',
      'Puerto Lápice',
    ],
    flavours: [
      {
        title: 'Queso manchego',
        text: 'El producto más reconocible de La Mancha, en corner, en tabla o integrado en el cóctel.',
      },
      {
        title: 'Vinos de la D.O. La Mancha',
        text: 'Vinos blancos y tintos de la denominación para el banquete y el brindis.',
      },
      {
        title: 'Detalles manchegos para invitados de fuera',
        text: 'Pequeñas raciones de cocina tradicional en el cóctel para que los invitados de otras ciudades prueben la zona.',
      },
    ],
    events: [
      {
        label: 'Bodas',
        title: 'Bodas con invitados de fuera',
        text: 'Cóctel, banquete y barra libre coordinados con los horarios de llegada y regreso de los invitados.',
      },
      {
        label: 'Empresa',
        title: 'Eventos y presentaciones',
        text: 'Cócteles de empresa, inauguraciones, jornadas y cenas de Navidad, con propuesta por escrito y factura.',
      },
      {
        label: 'Familia',
        title: 'Comuniones y bautizos',
        text: 'Celebraciones familiares con menú para adultos y niños, en casa, en jardín o en salón.',
      },
    ],
    tip: {
      title: 'Si tus invitados llegan en tren, ajusta el horario',
      text: 'Cuando una parte de los invitados viene en tren, conviene fijar el inicio del cóctel con margen sobre la llegada prevista. Lo tenemos en cuenta al planificar los tiempos del servicio.',
    },
    photo: {
      src: '/images/optimized/azurea-salon.webp',
      alt: 'Salón preparado para un banquete con catering de Azurea',
    },
    faqs: [
      {
        question: '¿Hacéis catering en Alcázar de San Juan y Campo de Criptana?',
        answer:
          'Sí. Alcázar de San Juan, Campo de Criptana, Herencia y los pueblos cercanos están dentro de nuestro radio de trabajo de alrededor de una hora desde Ciudad Real.',
      },
      {
        question: '¿Organizáis bodas con muchos invitados que vienen de fuera?',
        answer:
          'Sí. Coordinamos los horarios del cóctel y del banquete con la llegada y la salida de los invitados, y proponemos un menú que muestre la cocina de la zona.',
      },
      {
        question: '¿Cuánto cuesta el catering de una boda en la zona?',
        answer:
          'Cada boda se presupuesta a medida, así que el precio depende de la comida, la bebida, el servicio y el montaje que elijas con nosotros. Como referencia orientativa, un menú de boda completo parte de unos 100 € por invitado, aunque según lo que personalices puede quedar por debajo. Te lo detallamos todo en una propuesta a medida.',
      },
    ],
  },
  {
    slug: 'consuegra',
    town: 'Consuegra',
    area: 'Consuegra, Madridejos y Urda',
    province: 'Provincia de Toledo',
    metaTitle: 'Catering en Consuegra y Madridejos (Toledo) | Azurea Catering',
    metaDescription:
      'Catering en Consuegra, Madridejos, Urda y Villafranca de los Caballeros. Bodas, comuniones y eventos con cocina manchega y azafrán de La Mancha.',
    kicker: 'Catering en Consuegra y Madridejos',
    heading: 'Bodas y celebraciones a los pies del cerro Calderico',
    lead:
      'Desde Ciudad Real llegamos a Consuegra, Madridejos, Urda y los pueblos cercanos de la provincia de Toledo para bodas, comuniones y eventos.',
    intro: [
      'Consuegra, con su castillo y sus molinos sobre el cerro Calderico, es uno de los escenarios más fotografiados de La Mancha y un lugar muy elegido para bodas. Madridejos y Urda completan una zona con mucha tradición ligada al azafrán.',
      'Aunque pertenecen a la provincia de Toledo, estos pueblos están dentro de nuestro radio de alrededor de una hora desde Ciudad Real, y trabajamos en ellos con el mismo equipo y el mismo servicio.',
    ],
    towns: ['Consuegra', 'Madridejos', 'Urda', 'Villafranca de los Caballeros', 'Camuñas'],
    flavours: [
      {
        title: 'Azafrán de La Mancha',
        text: 'El producto emblema de la zona, con Denominación de Origen Protegida, en arroces, cremas o postres.',
      },
      {
        title: 'Queso manchego',
        text: 'Corner o tabla de queso manchego para el cóctel de bienvenida.',
      },
      {
        title: 'Cocina tradicional en pequeño formato',
        text: 'Platos de la tierra servidos en raciones de cóctel para invitados de dentro y de fuera.',
      },
    ],
    events: [
      {
        label: 'Bodas',
        title: 'Bodas con vistas a los molinos',
        text: 'Cóctel y banquete pensados para un entorno muy fotogénico, con una presentación cuidada en cada plato.',
      },
      {
        label: 'Comuniones',
        title: 'Comuniones y bautizos',
        text: 'Menús familiares con opción infantil, servidos en casa, en jardín o en salón.',
      },
      {
        label: 'Empresa',
        title: 'Eventos de empresa',
        text: 'Cócteles, comidas de grupo y cenas de Navidad para empresas y cooperativas de la zona.',
      },
    ],
    tip: {
      title: 'Ojo con el último fin de semana de octubre',
      text: 'Consuegra celebra a finales de octubre la Fiesta de la Rosa del Azafrán, que atrae a muchos visitantes. Si tu evento coincide con esas fechas, reserva espacio y alojamiento con más antelación.',
    },
    photo: {
      src: '/images/optimized/azurea-detalle.webp',
      alt: 'Plato emplatado por Azurea Catering para una boda en Consuegra',
    },
    faqs: [
      {
        question: '¿Hacéis catering en Consuegra y Madridejos aunque sean de Toledo?',
        answer:
          'Sí. Consuegra, Madridejos y Urda están dentro de nuestro radio de alrededor de una hora desde Ciudad Real y trabajamos en ellos con normalidad.',
      },
      {
        question: '¿Podéis incluir azafrán de La Mancha en el menú?',
        answer:
          'Sí. Podemos incorporar azafrán de La Mancha en arroces, cremas, salsas o postres. Indícalo al pedir presupuesto y lo incluimos en la propuesta.',
      },
      {
        question: '¿Con cuánta antelación conviene reservar una boda en Consuegra?',
        answer:
          'Para bodas en primavera, verano o en fechas de fiestas locales, recomendamos pedir presupuesto en cuanto tengáis la fecha y el lugar, para asegurar disponibilidad.',
      },
    ],
  },
];

export function zonePath(zone: Pick<Zone, 'slug'>): string {
  return `/catering-${zone.slug}/`;
}
