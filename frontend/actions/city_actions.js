export const SET_CITY = 'SET_CITY';
export const CLEAR_CITY = 'CLEAR_CITY';
export const UPDATE_CURRENT_CITIES = 'UPDATE_CURRENT_CITIES';
export const UPDATE_CURRENT_COUNTRIES = 'UPDATE_CURRENT_COUNTRIES';

export const updateCurrentCities = cities => ({
  type: UPDATE_CURRENT_CITIES,
  cities
});

export const updateCurrentCountries = countries => ({
  type: UPDATE_CURRENT_COUNTRIES,
  countries
});

export const setCity = city => ({
  type: SET_CITY,
  city,
});

export const clearCity = () => ({
  type: CLEAR_CITY,
});
