/**
 * Fincas de boda a alrededor de una hora de Ciudad Real que, según la información que publican en
 * bodas.net (consultada el 12/11/2026), permiten contratar catering externo.
 * Revisar periódicamente: las condiciones dependen de cada finca.
 */
export const venuesCheckedAt = 'noviembre de 2026';

export const venues = [
  {
    name: 'Finca La Noria',
    town: 'Ciudad Real',
    guests: 'De 20 a 500 invitados',
    catering: 'Solo alquila el espacio: el catering lo elegís vosotros.',
    url: 'https://www.bodas.net/fincas/finca-la-noria--e232596',
  },
  {
    name: 'La Posadilla',
    town: 'Ciudad Real',
    guests: 'De 20 a 400 invitados',
    catering: 'Sin catering exclusivo; trabaja con una selección de caterings entre los que elegir.',
    url: 'https://www.bodas.net/fincas/la-posadilla--e98648',
  },
  {
    name: 'Finca El Mirador de la Dehesa',
    town: 'Caracuel de Calatrava',
    guests: 'De 50 a 450 invitados',
    catering: 'No tiene catering propio: podéis llevar el catering que prefiráis.',
    url: 'https://www.bodas.net/fincas/finca-el-mirador-de-la-dehesa--e72784',
  },
  {
    name: 'Los Huertos',
    town: 'Caracuel de Calatrava',
    guests: 'Hasta 300 invitados',
    catering: 'No ofrece catering propio y colabora con varias empresas de catering.',
    url: 'https://www.bodas.net/fincas/los-huertos--e266515',
  },
  {
    name: 'Finca Las Hornias Bajas',
    town: 'Piedrabuena',
    guests: 'De 100 a 400 invitados',
    catering: 'Alquila el espacio y el catering lo eligen los novios.',
    url: 'https://www.bodas.net/fincas/finca-las-hornias-bajas--e74401',
  },
  {
    name: 'Finca La Inglesa',
    town: 'Piedrabuena',
    guests: 'Hasta 700 invitados',
    catering: 'No tiene exclusividad con ningún catering.',
    url: 'https://www.bodas.net/fincas/finca-la-inglesa--e137345',
  },
  {
    name: 'Finca El Chaparral',
    town: 'Malagón',
    guests: 'De 15 a 600 invitados',
    catering: 'Podéis contratar el catering que más os guste.',
    url: 'https://www.bodas.net/fincas/finca-el-chaparral--e224360',
  },
  {
    name: 'Quinta Santa María',
    town: 'Argamasilla de Calatrava',
    guests: 'De 80 a 400 invitados',
    catering: 'Sin catering propio ni exclusividad; dispone de cocina para uso del catering.',
    url: 'https://www.bodas.net/fincas/quinta-santa-maria--e260861',
  },
  {
    name: 'Soprano Eventos',
    town: 'Villarrubia de los Ojos',
    guests: 'De 50 a 550 invitados',
    catering: 'Tiene menú propio, pero los novios pueden elegir libremente su catering.',
    url: 'https://www.bodas.net/fincas/soprano-eventos--e25892',
  },
  {
    name: 'El Tamujo de Calatrava',
    town: 'Villanueva de San Carlos',
    guests: 'Bodas al aire libre de hasta 500-600 invitados',
    catering: 'Podéis escoger el catering que prefiráis.',
    url: 'https://www.bodas.net/fincas/el-tamujo-de-calatrava--e60348',
  },
  {
    name: 'Finca Lord Carrington',
    town: 'La Solana',
    guests: 'De 35 a 1.500 invitados',
    catering: 'Tiene cocina propia y permite alquilar solo el espacio, sin exclusividad de catering.',
    url: 'https://www.bodas.net/fincas/finca-lord-carrington--e4787',
  },
] as const;
