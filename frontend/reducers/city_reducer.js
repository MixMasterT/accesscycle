import { merge } from 'lodash';
import {
  CLEAR_CITY,
  SET_CITY } from "../actions/city_actions.js";
import {
  CLEAR_COUNTRY,
  SET_COUNTRY } from "../actions/country_actions.js";

let _defaultState = "";

const cityReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case CLEAR_CITY:
    case SET_COUNTRY:
      return "";
    case SET_CITY:
    // city actually looks like: city, country so we need just city
      const cityLocDetails = action.city.split(',');
      const city = cityLocDetails.length === 2 ?
                    cityLocDetails[0] :
                    [cityLocDetails[0], cityLocDetails[1]].join(',');
      return city;
    default:
      return state;
  }
};

export default cityReducer;
