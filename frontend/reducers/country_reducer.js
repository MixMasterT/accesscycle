import { merge } from 'lodash';
import {
          CLEAR_COUNTRY,
          SET_COUNTRY     } from "../actions/country_actions.js";
import {
          CLEAR_CITY,
          SET_CITY        } from "../actions/city_actions.js";

let _defaultState = "";

const countryReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case CLEAR_COUNTRY:
    case SET_CITY:
      return "";
    case SET_COUNTRY:
      return (action.country === "Georgia" ? "Country Georgia" : action.country);
    default:
      return state;
  }
};

export default countryReducer;
