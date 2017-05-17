export const SET_CITY = 'SET_CITY';
export const CLEAR_CITY = 'CLEAR_CITY';

export const setCity = city => ({
  type: SET_CITY,
  city,
});

export const clearCity = () => ({
  type: CLEAR_CITY,
});
