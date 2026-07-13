import { contact } from '../data/site';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

function showStatus(form: HTMLFormElement, type: 'success' | 'error', message: string) {
  const status = form.querySelector<HTMLElement>('[data-form-status]');
  if (!status) return;

  status.hidden = false;
  status.textContent = message;
  status.classList.remove('contact-form__status--success', 'contact-form__status--error');
  status.classList.add(`contact-form__status--${type}`);
}

async function submitWithWeb3Forms(form: HTMLFormElement, accessKey: string, data: FormData) {
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

  const response = await fetch(WEB3FORMS_ENDPOINT, { method: 'POST', body: payload });
  const result = (await response.json()) as { success?: boolean; message?: string };

  if (!response.ok || !result.success) {
    throw new Error(result.message ?? 'No se pudo enviar el formulario.');
  }
}

async function submitWithFormSubmit(data: FormData) {
  const response = await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: String(data.get('nombre') ?? ''),
      email: String(data.get('email') ?? ''),
      phone: String(data.get('telefono') ?? ''),
      evento: String(data.get('evento') ?? ''),
      message: String(data.get('mensaje') ?? ''),
      _subject: 'Solicitud de presupuesto Azurea Catering',
      _template: 'table',
      _captcha: 'false',
    }),
  });

  const result = (await response.json()) as { success?: string };

  if (!response.ok || result.success !== 'true') {
    throw new Error('No se pudo enviar el formulario.');
  }
}

function initContactForms(accessKey: string) {
  document.querySelectorAll<HTMLFormElement>('[data-contact-form]').forEach((form) => {
    const submitButton = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const defaultLabel = submitButton?.textContent?.trim() ?? 'Enviar solicitud';

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const honeypot = form.querySelector<HTMLInputElement>('input[name="botcheck"]');
      if (honeypot?.checked) return;

      const data = new FormData(form);

      submitButton?.setAttribute('disabled', 'true');
      if (submitButton) submitButton.textContent = 'Enviando…';

      try {
        if (accessKey) {
          await submitWithWeb3Forms(form, accessKey, data);
        } else {
          await submitWithFormSubmit(data);
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
          `No pudimos enviar el formulario. Escríbenos a ${contact.email} o llámanos al ${contact.phoneDisplay}.`,
        );
      } finally {
        submitButton?.removeAttribute('disabled');
        if (submitButton) submitButton.textContent = defaultLabel;
      }
    });
  });
}

const accessKey = import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY ?? '';

initContactForms(accessKey);
