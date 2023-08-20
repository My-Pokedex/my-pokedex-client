export const convertIdToOrder = (id: number) =>
  `No.${String(id).padStart(4, '0')}`;
