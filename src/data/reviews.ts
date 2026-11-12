/** Opiniones publicadas en bodas.net (titular de cada opinión, tal como aparece en la fuente). */
export const reviewsSource = {
  name: 'bodas.net',
  url: 'https://www.bodas.net/catering/azurea-catering-&-eventos--e283969/opiniones',
  rating: '5,0',
  count: 5,
};

/** Enlace para dejar una reseña en el perfil de Google (facilitado por el titular desde Google Business Profile). */
export const googleReviewUrl = 'https://share.google/S17M0XNJqaFKnoeoz';

export const reviews = [
  { name: 'Adriana', date: 'noviembre 2026', event: 'Boda', title: 'Gastronomía inolvidable y un servicio impecable en nuestra boda.' },
  { name: 'Belén', date: 'octubre 2026', event: 'Boda', title: 'Nuestra especial boda' },
  { name: 'Mari', date: 'abril 2026', event: 'Boda', title: 'Hicieron de nuestro día, un momento único' },
  { name: 'Antonio', date: 'febrero 2026', event: 'Comunión', title: 'Comunión de 10' },
] as const;
