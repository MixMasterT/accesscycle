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
      return action.city;
    default:
      return state;
  }
};

export default cityReducer;
