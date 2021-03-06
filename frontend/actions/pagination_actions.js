export const UPDATE_COUNTRY_PAGE = 'UPDATE_COUNTRY_PAGE';
export const UPDATE_CITY_PAGE = 'UPDATE_CITY_PAGE';
export const SET_TOTAL_COUNTRY_PAGES = 'SET_TOTAL_COUNTRY_PAGES';
export const SET_TOTAL_CITY_PAGES = 'SET_TOTAL_CITY_PAGES';
export const SET_ITEMS_PER_PAGE = 'SET_ITEMS_PER_PAGE';

export const updateCountryPage = (page) => ({
  type: UPDATE_COUNTRY_PAGE,
  page
});

export const updateCityPage = (page) => ({
  type: UPDATE_CITY_PAGE,
  page
});

export const setTotalCountryPages = (totalPages) => ({
  type: SET_TOTAL_COUNTRY_PAGES,
  totalPages
});

export const setTotalCityPages = (totalPages) => ({
  type: SET_TOTAL_CITY_PAGES,
  totalPages
});

export const setItemsPerPage = (itemsPerPage, networks) => {
  return ({
    type: SET_ITEMS_PER_PAGE,
    itemsPerPage,
    networks,
  });
}

export const updateItemsPerPage = (n) => (dispatch, getState) => (
  dispatch(setItemsPerPage(n, getState().networks))
)
