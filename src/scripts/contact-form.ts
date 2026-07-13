const FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

function showStatus(form: HTMLFormElement, type: 'success' | 'error', message: string) {
  const status = form.querySelector<HTMLElement>('[data-form-status]');
  if (!status) return;

  status.hidden = false;
  status.textContent = message;
  status.classList.remove('contact-form__status--success', 'contact-form__status--error');
  status.classList.add(`contact-form__status--${type}`);
}

function fallbackMailto(form: HTMLFormElement, email: string) {
  const data = new FormData(form);
  const subject = encodeURIComponent('Solicitud de presupuesto Azurea Catering');
  const body = encodeURIComponent(
    [
      `Nombre: ${data.get('nombre') ?? ''}`,
      `Teléfono: ${data.get('telefono') ?? ''}`,
      `Email: ${data.get('email') ?? ''}`,
      `Tipo de evento: ${data.get('evento') ?? ''}`,
      '',
      'Detalles:',
      `${data.get('mensaje') ?? ''}`,
    ].join('\n'),
  );

  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

function initContactForms(accessKey: string, contactEmail: string) {
  document.querySelectorAll<HTMLFormElement>('[data-contact-form]').forEach((form) => {
    const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const defaultLabel = submitButton?.textContent?.trim() ?? 'Enviar solicitud';

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const honeypot = form.querySelector<HTMLInputElement>('input[name="botcheck"]');
      if (honeypot?.checked) return;

      const data = new FormData(form);

      if (!accessKey) {
        fallbackMailto(form, contactEmail);
        return;
      }

      const payload = new FormData();
      payload.append('access_key', accessKey);
      payload.append('subject', 'Solicitud de presupuesto Azurea Catering');
      payload.append('from_name', 'Web Azurea Catering');
      payload.append('name', String(data.get('nombre') ?? ''));
      payload.append('email', String(data.get('email') ?? ''));
      payload.append('phone', String(data.get('telefono') ?? ''));
      payload.append(
        'message',
        [
          `Tipo de evento: ${data.get('evento') ?? ''}`,
          '',
          'Detalles:',
          `${data.get('mensaje') ?? ''}`,
        ].join('\n'),
      );

      submitButton?.setAttribute('disabled', 'true');
      if (submitButton) submitButton.textContent = 'Enviando…';

      try {
        const response = await fetch(FORMS_ENDPOINT, { method: 'POST', body: payload });
        const result = (await response.json()) as { success?: boolean; message?: string };

        if (!response.ok || !result.success) {
          throw new Error(result.message ?? 'No se pudo enviar el formulario.');
        }

        form.reset();
        showStatus(
          form,
          'success',
          '¡Solicitud enviada! Te responderemos pronto a tu correo o teléfono.',
        );
      } catch {
        showStatus(
          form,
          'error',
          `No pudimos enviar el formulario. Escríbenos a ${contactEmail} o llámanos directamente.`,
        );
      } finally {
        submitButton?.removeAttribute('disabled');
        if (submitButton) submitButton.textContent = defaultLabel;
      }
    });
  });
}

const accessKey = import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY ?? '';
const contactEmail = import.meta.env.PUBLIC_CONTACT_EMAIL ?? 'comercial@azureacatering.com';

initContactForms(accessKey, contactEmail);
