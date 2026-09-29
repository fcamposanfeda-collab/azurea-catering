/** Datos de geolocalización para SEO local (Ciudad Real y alrededor de una hora). */
export const local = {
  city: 'Ciudad Real',
  province: 'Provincia de Ciudad Real',
  region: 'Castilla-La Mancha',
  country: 'España',
  countryCode: 'ES',
  regionCode: 'ES-CR',
  /** Centro aproximado de Ciudad Real para geo meta y schema. */
  geo: {
    latitude: 38.986,
    longitude: -3.9273,
  },
  /**
   * Radio aproximado de desplazamiento: alrededor de una hora en carretera.
   * 90 km cubre la provincia y el borde de provincias vecinas en ese tiempo.
   */
  geoRadiusMeters: 90000,
  /** Frase breve reutilizable en copy visible. */
  serviceAreaShort: 'Ciudad Real y alrededores',
  serviceAreaLabel: 'Ciudad Real y localidades a alrededor de una hora',
} as const;

/** Localidades habituales de servicio, dentro de alrededor de una hora. */
export const servicePlaces = [
  { name: 'Ciudad Real', province: 'Provincia de Ciudad Real' },
  { name: 'Miguelturra', province: 'Provincia de Ciudad Real' },
  { name: 'Poblete', province: 'Provincia de Ciudad Real' },
  { name: 'Carrión de Calatrava', province: 'Provincia de Ciudad Real' },
  { name: 'Torralba de Calatrava', province: 'Provincia de Ciudad Real' },
  { name: 'Almagro', province: 'Provincia de Ciudad Real' },
  { name: 'Bolaños de Calatrava', province: 'Provincia de Ciudad Real' },
  { name: 'Daimiel', province: 'Provincia de Ciudad Real' },
  { name: 'Malagón', province: 'Provincia de Ciudad Real' },
  { name: 'Piedrabuena', province: 'Provincia de Ciudad Real' },
  { name: 'Puertollano', province: 'Provincia de Ciudad Real' },
  { name: 'Almodóvar del Campo', province: 'Provincia de Ciudad Real' },
  { name: 'Manzanares', province: 'Provincia de Ciudad Real' },
  { name: 'Membrilla', province: 'Provincia de Ciudad Real' },
  { name: 'La Solana', province: 'Provincia de Ciudad Real' },
  { name: 'Valdepeñas', province: 'Provincia de Ciudad Real' },
  { name: 'Tomelloso', province: 'Provincia de Ciudad Real' },
  { name: 'Alcázar de San Juan', province: 'Provincia de Ciudad Real' },
  { name: 'Campo de Criptana', province: 'Provincia de Ciudad Real' },
  { name: 'Consuegra', province: 'Provincia de Toledo' },
  { name: 'Madridejos', province: 'Provincia de Toledo' },
] as const;

export const serviceAreaFaqs = [
  {
    question: '¿Dónde hace catering Azurea?',
    answer:
      'Azurea Catering trabaja en Ciudad Real y en localidades a alrededor de una hora: la provincia y alrededores como Miguelturra, Puertollano, Almagro, Daimiel, Manzanares, Valdepeñas, Tomelloso o Consuegra.',
  },
  {
    question: '¿Os desplazáis fuera de la ciudad de Ciudad Real?',
    answer:
      'Sí. El servicio habitual cubre Ciudad Real, el resto de la provincia y localidades a alrededor de una hora, también en el borde de provincias vecinas. Si el evento queda un poco más lejos, consúltanos y te decimos si podemos organizarlo.',
  },
  {
    question: '¿Hacéis bodas y comuniones en pueblos y fincas de la zona?',
    answer:
      'Sí. Montamos bodas, comuniones, eventos de empresa y celebraciones privadas en Ciudad Real, en pueblos del entorno y en fincas o salones dentro de ese radio de alrededor de una hora.',
  },
] as const;
