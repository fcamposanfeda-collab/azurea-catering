import { routes } from './routes';

export type NavLink = { label: string; href: string };

export type NavItem =
  | NavLink
  | {
      label: string;
      href: string;
      children: NavLink[];
    };

export const mainNav: NavItem[] = [
  {
    label: 'Servicios',
    href: routes.services,
    children: [
      { label: 'Bodas', href: routes.weddings },
      { label: 'Comuniones', href: routes.communions },
      { label: 'Eventos', href: routes.events },
    ],
  },
  { label: 'Crea tu evento', href: routes.createEvent },
  { label: 'Luxury Experiences', href: routes.luxury },
  { label: 'Sobre Azurea', href: routes.about },
];

export const footerNav: NavLink[] = [
  { label: 'Inicio', href: routes.home },
  { label: 'Servicios', href: routes.services },
  { label: 'Bodas', href: routes.weddings },
  { label: 'Comuniones', href: routes.communions },
  { label: 'Eventos', href: routes.events },
  { label: 'Crea tu evento', href: routes.createEvent },
  { label: 'Luxury Experiences', href: routes.luxury },
  { label: 'Sobre Azurea', href: routes.about },
  { label: 'Contacto', href: routes.contact },
];

export const legalNav: NavLink[] = [
  { label: 'Aviso legal', href: '/aviso-legal' },
  { label: 'Política de privacidad', href: '/politica-de-privacidad' },
  { label: 'Política de cookies', href: '/politica-de-cookies' },
];
