/** Datos de geolocalización para SEO y schema.org (Ciudad Real / Castilla-La Mancha). */
export const local = {
  city: 'Ciudad Real',
  region: 'Castilla-La Mancha',
  country: 'España',
  countryCode: 'ES',
  regionCode: 'ES-CR',
  /** Centro aproximado de Ciudad Real para geo meta y schema. */
  geo: {
    latitude: 38.986,
    longitude: -3.9273,
  },
  /** Zonas donde Azurea suele trabajar; también se desplaza según el evento. */
  areaServed: [
    'Ciudad Real',
    'Provincia de Ciudad Real',
    'Castilla-La Mancha',
    'Toledo',
    'Albacete',
    'Cuenca',
    'Guadalajara',
  ],
  /** Frase breve reutilizable en copy visible (sin forzar la geolocalización). */
  serviceAreaShort: 'Ciudad Real, Castilla-La Mancha y alrededores',
} as const;
