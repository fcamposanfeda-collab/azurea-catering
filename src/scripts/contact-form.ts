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

function getFieldValues(data: FormData, key: string) {
  return data
    .getAll(key)
    .map((value) => String(value).trim())
    .filter(Boolean);
}

function buildMessage(data: FormData, formType: string) {
  if (formType === 'luxury') {
    return [
      'Solicitud Luxury Experiences',
      '',
      `Nombre: ${data.get('nombre') ?? ''} ${data.get('apellidos') ?? ''}`.trim(),
      `Email: ${data.get('email') ?? ''}`,
      `Teléfono: ${data.get('telefono') ?? ''}`,
      `País: ${data.get('pais') ?? ''}`,
      `Ciudad: ${data.get('ciudad') ?? ''}`,
      '',
      `Destinos de interés: ${data.get('destinos') ?? ''}`,
      `Intereses: ${getFieldValues(data, 'intereses').join(', ') || 'No indicado'}`,
      `Fechas: ${data.get('fechas_tipo') ?? ''} — ${data.get('fechas') ?? 'Sin fechas concretas'}`,
      `Adultos: ${data.get('adultos') ?? ''}`,
      `Niños: ${data.get('ninos') ?? '0'}`,
      `Noches: ${data.get('noches') ?? 'No indicado'}`,
      `Presupuesto: ${data.get('presupuesto') ?? ''}`,
      `Llegada: ${data.get('llegada') ?? ''}`,
      '',
      'Idea del viaje:',
      `${data.get('mensaje') ?? ''}`,
    ].join('\n');
  }

  return [
    `Tipo de evento: ${data.get('evento') ?? ''}`,
    '',
    'Detalles:',
    `${data.get('mensaje') ?? ''}`,
  ].join('\n');
}

async function submitWithWeb3Forms(accessKey: string, data: FormData, formType: string) {
  const payload = new FormData();
  const subject =
    formType === 'luxury'
      ? 'Luxury Experiences — solicitud de viaje a medida'
      : 'Solicitud de presupuesto Azurea Catering';

  payload.append('access_key', accessKey);
  payload.append('subject', subject);
  payload.append('from_name', 'Web Azurea Catering');
  payload.append('name', `${data.get('nombre') ?? ''} ${data.get('apellidos') ?? ''}`.trim());
  payload.append('email', String(data.get('email') ?? ''));
  payload.append('phone', String(data.get('telefono') ?? ''));
  payload.append('message', buildMessage(data, formType));

  const response = await fetch(WEB3FORMS_ENDPOINT, { method: 'POST', body: payload });
  const result = (await response.json()) as { success?: boolean; message?: string };

  if (!response.ok || !result.success) {
    throw new Error(result.message ?? 'No se pudo enviar el formulario.');
  }
}

async function submitWithFormSubmit(data: FormData, formType: string) {
  const subject =
    formType === 'luxury'
      ? 'Luxury Experiences — solicitud de viaje a medida'
      : 'Solicitud de presupuesto Azurea Catering';

  const response = await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: `${data.get('nombre') ?? ''} ${data.get('apellidos') ?? ''}`.trim(),
      email: String(data.get('email') ?? ''),
      phone: String(data.get('telefono') ?? ''),
      formulario: formType === 'luxury' ? 'Luxury Experiences' : String(data.get('evento') ?? ''),
      message: buildMessage(data, formType),
      _subject: subject,
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
    const formType = form.dataset.formType ?? 'contact';

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
          await submitWithWeb3Forms(accessKey, data, formType);
        } else {
          await submitWithFormSubmit(data, formType);
        }

        form.reset();
        showStatus(
          form,
          'success',
          formType === 'luxury'
            ? '¡Solicitud enviada! Prepararemos una propuesta privada para tu viaje a España.'
            : '¡Solicitud enviada! Te responderemos pronto a tu correo o teléfono.',
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
