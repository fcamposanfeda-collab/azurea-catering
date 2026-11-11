declare global {
  interface Window {
    umami?: { track: (event: string, data?: Record<string, string>) => void };
  }
}

/** Registra en Umami los clics de contacto directo (WhatsApp, teléfono y email). */
document.addEventListener('click', (event) => {
  const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href]');
  if (!link) return;

  const href = link.getAttribute('href') ?? '';
  const page = window.location.pathname;

  if (href.includes('wa.me/')) window.umami?.track('Clic WhatsApp', { pagina: page });
  else if (href.startsWith('tel:')) window.umami?.track('Clic teléfono', { pagina: page });
  else if (href.startsWith('mailto:')) window.umami?.track('Clic email', { pagina: page });
});

export {};
