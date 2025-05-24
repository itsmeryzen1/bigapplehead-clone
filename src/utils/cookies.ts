/**
 * Set a cookie in the browser
 * @param name Cookie name
 * @param value Cookie value
 * @param days Days until cookie expires
 */
export const setCookie = (name: string, value: string, days = 1): void => {
  if (typeof window === 'undefined') return; // Server-side check
  
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
};

/**
 * Get a cookie value by name
 * @param name Cookie name
 * @returns Cookie value or empty string if not found
 */
export const getCookie = (name: string): string => {
  if (typeof window === 'undefined') return ''; // Server-side check
  
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  
  return '';
};

/**
 * Delete a cookie by name
 * @param name Cookie name
 */
export const deleteCookie = (name: string): void => {
  if (typeof window === 'undefined') return; // Server-side check
  
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Lax`;
};
