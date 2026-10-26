/** Datos del titular del sitio web (art. 10 LSSI) y responsable del tratamiento (RGPD). */
export const legal = {
  holder: 'Sabores en tu Puerta, S.L.',
  taxId: 'B21780341',
  address: {
    street: 'Carretera de Toledo, 26, oficina 304',
    postalCode: '13005',
    city: 'Ciudad Real',
    province: 'Ciudad Real',
    country: 'España',
  },
  /** Datos de inscripción en el Registro Mercantil (tomo, folio, hoja). Vacío hasta confirmarlos. */
  registry: '',
} as const;

export const legalAddressLine = `${legal.address.street}, ${legal.address.postalCode} ${legal.address.city} (${legal.address.country})`;
