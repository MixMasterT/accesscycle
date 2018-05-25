import { merge } from 'lodash';
import {
  CLEAR_CITY,
  UPDATE_CURRENT_CITIES,
  SET_CITY } from "../actions/city_actions.js";
import {
  CLEAR_COUNTRY,
  SET_COUNTRY } from "../actions/country_actions.js";

let _defaultState = {
  city: "",
  currentCities: [],
};

const cityReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case CLEAR_CITY:
    case SET_COUNTRY:
      return merge({}, state, {city: ""});
    case UPDATE_CURRENT_CITIES:
      return merge({}, state, {currentCities: action.cities})
    case SET_CITY:
    // city actually looks like: city, country so we need just city
      const cityLocDetails = action.city.split(',');
      const city = cityLocDetails.length === 2 ?
                    cityLocDetails[0] :
                    [cityLocDetails[0], cityLocDetails[1]].join(',');
      return merge({}, state, { city });
    default:
      return state;
  }
};

export default cityReducer;
