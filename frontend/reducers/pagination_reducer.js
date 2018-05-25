import { merge } from 'lodash';

import { UPDATE_COUNTRY_PAGE,
         UPDATE_CITY_PAGE,
         SET_TOTAL_COUNTRY_PAGES,
         SET_TOTAL_CITY_PAGES,
       } from '../actions/pagination_actions.js'

import { RECEIVE_NETWORKS } from '../actions/network_actions.js'

import { citiesFromNetworks,
         countriesFromNetworks } from '../util/selectors';

let _defaultState = {
  itemsPerPage: 25,
  totalCityPages: 0,
  totalCountryPages: 0,
  currentCityPage: 0,
  currentCountryPage:0,
};

const paginationReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NETWORKS:
      const networks = action.networks.networks;
      const itemsPerPage = state.itemsPerPage;
      const cities = citiesFromNetworks(networks);
      const countries = countriesFromNetworks(networks);
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
    default:
      return state;
  }
};

export default paginationReducer;
