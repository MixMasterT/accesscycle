export const SET_COUNTRY = 'SET_COUNTRY';
export const CLEAR_COUNTRY = 'CLEAR_COUNTRY';
export const UPDATE_CURRENT_COUNTRIES = 'UPDATE_CURRENT_COUNTRIES';

export const setCountry = country => ({
  type: SET_COUNTRY,
  country,
});

export const updateCurrentCountries = countries => ({
  type: UPDATE_CURRENT_COUNTRIES,
  countries,
});

export const clearCountry = () => ({
  type: CLEAR_COUNTRY
});
