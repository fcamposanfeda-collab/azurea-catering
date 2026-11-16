// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://azureacatering.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  redirects: {
    // URL de una versión anterior de la web que Google aún muestra en resultados.
    '/servicios-de-catering': '/servicios/',
    '/catering-profesional-para-comuniones': '/comuniones/',
    '/privacy-policy': '/politica-de-privacidad/',
    '/terminos-y-condiciones': '/aviso-legal/',
  },
});
