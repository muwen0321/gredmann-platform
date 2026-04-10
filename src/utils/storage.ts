export const getSelectedProduct = (): string => {
  return sessionStorage.getItem('gredmann_product') || 'al-pouch-film';
};

export const setSelectedProduct = (productId: string): void => {
  sessionStorage.setItem('gredmann_product', productId);
};
