import { local } from './local';
import { site } from './site';

export const pagesMeta = {
  '/': {
    title: `Catering en ${local.city} y alrededores | ${site.name}`,
    description:
      'Catering en Ciudad Real y a una hora: Puertollano, Almagro, Daimiel, Manzanares y Valdepeñas. Bodas, comuniones y eventos a tu medida.',
  },
  '/servicios': {
    title: `Servicios de catering para eventos | ${site.name}`,
    description:
      'Cócteles, menús y buffets en Ciudad Real y alrededores, hasta una hora. Bodas, comuniones, empresas y celebraciones privadas.',
  },
  '/bodas': {
    title: `Catering para bodas en ${local.city} | ${site.name}`,
    description:
      'Catering de boda en Ciudad Real y localidades a una hora: menús, cóctel de bienvenida y servicio en mesa, adaptado a vuestro presupuesto.',
  },
  '/comuniones': {
    title: `Catering de comuniones en ${local.city} | ${site.name}`,
    description:
      'Catering de comuniones en Ciudad Real y alrededores. Menús para adultos y niños, presentación cuidada y opciones a tu medida.',
  },
  '/eventos': {
    title: `Catering corporativo y eventos privados | ${site.name}`,
    description:
      'Catering para empresas y eventos privados en Ciudad Real y a una hora. Servicio flexible, adaptado a cada ocasión y presupuesto.',
  },
  '/crea-tu-evento': {
    title: `Eventos personalizados y temáticos | ${site.name}`,
    description:
      'Eventos a medida en Ciudad Real y alrededores: temática, decoración, comida y corners. Catering creativo hasta una hora de la ciudad.',
  },
  '/luxury-experiences': {
    title: `Viajes de lujo en España | ${site.name}`,
    description:
      'Viajes de lujo a medida por España para invitados internacionales. Llegadas privadas, fincas, vino y costa con Azurea Luxury Experiences.',
  },
  '/sobre-azurea': {
    title: `Sobre ${site.name} | Catering en ${local.city}`,
    description:
      'Azurea Catering, en Ciudad Real. Celebraciones en la ciudad, la provincia y localidades a alrededor de una hora.',
  },
  '/contacto': {
    title: `Contacto y presupuesto | ${site.name}`,
    description:
      'Presupuesto de catering en Ciudad Real y alrededores, hasta una hora. Teléfono, WhatsApp y formulario para bodas, comuniones y eventos.',
  },
  '/aviso-legal': {
    title: `Aviso legal | ${site.name}`,
    description: 'Información legal del sitio web de Azurea Catering.',
  },
  '/politica-de-privacidad': {
    title: `Política de privacidad | ${site.name}`,
    description: 'Información sobre el tratamiento de datos personales en Azurea Catering.',
  },
  '/politica-de-cookies': {
    title: `Política de cookies | ${site.name}`,
    description: 'Información sobre el uso de cookies en el sitio web de Azurea Catering.',
  },
} as const;

export type PagePath = keyof typeof pagesMeta;

export const breadcrumbLabels: Record<PagePath, string> = {
  '/': 'Inicio',
  '/servicios': 'Servicios',
  '/bodas': 'Catering para bodas',
  '/comuniones': 'Catering para comuniones',
  '/eventos': 'Eventos y empresas',
  '/crea-tu-evento': 'Crea tu evento',
  '/luxury-experiences': 'Luxury Experiences',
  '/sobre-azurea': 'Sobre Azurea',
  '/contacto': 'Contacto',
  '/aviso-legal': 'Aviso legal',
  '/politica-de-privacidad': 'Política de privacidad',
  '/politica-de-cookies': 'Política de cookies',
};

export function getPageMeta(path: PagePath) {
  return pagesMeta[path];
}
