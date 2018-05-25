import { merge } from 'lodash';
import {
          CLEAR_COUNTRY,
          UPDATE_CURRENT_COUNTRIES,
          SET_COUNTRY     } from "../actions/country_actions.js";
import {
          CLEAR_CITY,
          SET_CITY        } from "../actions/city_actions.js";

let _defaultState = {
  country: "",
  currentCountries: [],
};

const countryReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case CLEAR_COUNTRY:
    case SET_CITY:
      return merge({}, state, {city: ""});
    case SET_COUNTRY:
      return merge({}, state, {country: action.country});
    case UPDATE_CURRENT_COUNTRIES:
      return merge({}, state, {currentCountries: actions.countries})
    default:
      return state;
  }
};

export default countryReducer;
