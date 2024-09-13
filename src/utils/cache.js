const SYSTEM_NAME = "PNTT";
const ACCESS_TOKEN_KEY = `${SYSTEM_NAME}-accessToken`;

export function getToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function setToken(token) {
  return localStorage.setItem(ACCESS_TOKEN_KEY, token);
}
