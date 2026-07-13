import { local } from './local';
import { site } from './site';

export const pagesMeta = {
  '/': {
    title: `Catering en ${local.province} | ${site.name}`,
    description:
      'Catering profesional para bodas, comuniones y eventos en la provincia de Ciudad Real. Menús personalizados, servicio cuidado y presupuesto a tu medida.',
  },
  '/servicios': {
    title: `Servicios de catering para eventos | ${site.name}`,
    description:
      'Cócteles, menús servidos, buffets y propuestas a medida en la provincia de Ciudad Real. Bodas, comuniones, empresas y celebraciones privadas.',
  },
  '/bodas': {
    title: `Catering para bodas en ${local.province} | ${site.name}`,
    description:
      'Catering de boda con menús personalizados, cóctel de bienvenida y servicio en mesa. Acompañamiento completo en la provincia de Ciudad Real.',
  },
  '/comuniones': {
    title: `Catering para comuniones en ${local.province} | ${site.name}`,
    description:
      'Catering para comuniones y celebraciones familiares en la provincia de Ciudad Real. Menús para adultos y niños, presentación cuidada y opciones según presupuesto.',
  },
  '/eventos': {
    title: `Catering corporativo y eventos privados | ${site.name}`,
    description:
      'Catering para empresas, cumpleaños y eventos en la provincia de Ciudad Real. Servicio flexible y profesional con propuestas adaptadas a cada ocasión.',
  },
  '/crea-tu-evento': {
    title: `Eventos personalizados y temáticos | ${site.name}`,
    description:
      'Diseña tu evento con temática, decoración, comida y corners especiales. Catering creativo en la provincia de Ciudad Real para celebraciones únicas.',
  },
  '/sobre-azurea': {
    title: `Sobre ${site.name} | Catering en ${local.province}`,
    description:
      'Conoce Azurea Catering: catering personalizado para eventos en la provincia de Ciudad Real. Calidad, creatividad y atención al detalle.',
  },
  '/contacto': {
    title: `Contacto y presupuesto | ${site.name}`,
    description:
      'Pide presupuesto de catering para bodas, comuniones o eventos en la provincia de Ciudad Real. Teléfono, email, WhatsApp y formulario de contacto.',
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
  '/sobre-azurea': 'Sobre Azurea',
  '/contacto': 'Contacto',
  '/aviso-legal': 'Aviso legal',
  '/politica-de-privacidad': 'Política de privacidad',
  '/politica-de-cookies': 'Política de cookies',
};

export function getPageMeta(path: PagePath) {
  return pagesMeta[path];
}
