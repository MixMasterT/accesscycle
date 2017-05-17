export const SET_COUNTRY = 'SET_COUNTRY';
export const CLEAR_COUNTRY = 'CLEAR_COUNTRY';

export const setCountry = country => ({
  type: SET_COUNTRY,
  country,
});

export const clearCountry = () => ({
  type: CLEAR_COUNTRY
});
