export const SET_FILTER = 'SET_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTER';

export const setFilter = (term) => ({
  type: SET_FILTER,
  term,
});

export const clearFilter = () => ({
  type: CLEAR_FILTER,
});
