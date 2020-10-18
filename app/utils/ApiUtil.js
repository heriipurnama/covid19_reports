export const DEV_API = 'https://covid19.mathdro.id/api';
export const PROD_API = 'https://covid19.mathdro.id/api';
export const BASE_API =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? DEV_API
    : PROD_API;
