import SHA256 from 'crypto-js/sha256';

const CORRECT_PASSWORD = 'Zz!234567890';
const CORRECT_HASH = SHA256(CORRECT_PASSWORD).toString();

export const verifyPassword = (input: string): boolean => {
  const inputHash = SHA256(input).toString();
  return inputHash === CORRECT_HASH;
};

export const isAuthenticated = (): boolean => {
  const auth = sessionStorage.getItem('gredmann_auth');
  return auth === 'true';
};

export const setAuthenticated = (): void => {
  sessionStorage.setItem('gredmann_auth', 'true');
};

export const clearAuthentication = (): void => {
  sessionStorage.removeItem('gredmann_auth');
};
