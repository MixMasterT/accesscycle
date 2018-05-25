import { merge } from 'lodash';
import { UPDATE_COUNTRY_PAGE,
         UPDATE_CITY_PAGE,
         SET_TOTAL_COUNTRY_PAGES,
         SET_TOTAL_CITY_PAGES,
       } from '../actions/pagination_actions.js'

let _defaultState = {
  itemsPerPage: 25,
  totalCityPages: 0,
  totalCountryPages: 0,
  currentCityPage: 0,
  currentCountryPage:0,
};

const paginationReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case UPDATE_COUNTRY_PAGE:
      newState = merge(state, {currentCountryPage: action.page});
    case UPDATE_CITY_PAGE:
      newState = merge(state, {currentCityPage: action.page});
    case SET_TOTAL_COUNTRY_PAGES:
      newState = merge(state, {totalCountryPages: action.totalPages});
    case SET_TOTAL_CITY_PAGES:
      newState = merge(state, {totalCityPages: action.totalPages});
    default:
      return state;
  }
};

export default paginationReducer;
