import { merge } from 'lodash';

import { UPDATE_COUNTRY_PAGE,
         UPDATE_CITY_PAGE,
         SET_TOTAL_COUNTRY_PAGES,
         SET_TOTAL_CITY_PAGES,
         SET_ITEMS_PER_PAGE,
       } from '../actions/pagination_actions.js'

import { RECEIVE_NETWORKS } from '../actions/network_actions.js'
import { citiesFromNetworks,
         countriesFromNetworks } from '../util/selectors';

let _defaultState = {
  itemsPerPage: 23,
  totalCityPages: 0,
  totalCountryPages: 0,
  currentCityPage: 0,
  currentCountryPage:0,
};

const paginationReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let cities = null;
  let countries = null;
  let networks = null;
  let itemsPerPage = null;
  switch(action.type) {
    case RECEIVE_NETWORKS:
      networks = action.networks.networks;
      itemsPerPage = state.itemsPerPage;
      cities = citiesFromNetworks(networks);
      countries = countriesFromNetworks(networks);
      return merge({}, state, {
        totalCityPages: Math.floor(cities.length / itemsPerPage),
        totalCountryPages: Math.floor(countries.length / itemsPerPage),
      });
    case UPDATE_COUNTRY_PAGE:
      return merge({}, state, {currentCountryPage: action.page});
    case UPDATE_CITY_PAGE:
      return merge({}, state, {currentCityPage: action.page});
    case SET_TOTAL_COUNTRY_PAGES:
      return merge({}, state, {totalCountryPages: action.totalPages});
    case SET_TOTAL_CITY_PAGES:
      return merge({}, state, {totalCityPages: action.totalPages});
    case SET_ITEMS_PER_PAGE:
      cities = citiesFromNetworks(action.networks);
      countries = countriesFromNetworks(action.networks);
      return merge({}, state, {
        itemsPerPage: action.itemsPerPage,
        totalCityPages: Math.floor(cities.length / action.itemsPerPage),
        totalCountryPages: Math.floor(countries.length / action.itemsPerPage),
        currentCityPage: 0,
        currentCityPage: 0,
      });
    default:
      return state;
  }
};

export default paginationReducer;
