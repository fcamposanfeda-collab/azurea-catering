/** Datos del titular del sitio web (art. 10 LSSI) y responsable del tratamiento (RGPD). */
export const legal = {
  holder: 'Sabores en tu Puerta, S.L.',
  /** Condición de sociedad unipersonal (art. 13 Ley de Sociedades de Capital). */
  holderNote: 'Sociedad unipersonal',
  taxId: 'B21780341',
  address: {
    street: 'Carretera de Toledo, 26, oficina 304',
    postalCode: '13005',
    city: 'Ciudad Real',
    province: 'Ciudad Real',
    country: 'España',
  },
  /** Datos de inscripción en el Registro Mercantil (escritura de 27/03/2025, inscrita el 06/05/2025). */
  registry: 'Registro Mercantil de Ciudad Real, hoja CR-34995, inscripción 1.ª',
} as const;

export const legalAddressLine = `${legal.address.street}, ${legal.address.postalCode} ${legal.address.city} (${legal.address.country})`;
