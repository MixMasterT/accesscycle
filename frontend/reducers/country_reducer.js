import { merge } from 'lodash';
import {
  CLEAR_COUNTRY,
  SET_COUNTRY } from "../actions/country_actions.js";

let _defaultState = {};

const countryReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case CLEAR_COUNTRY:
      // your code here
    case SET_COUNTRY:
      // your code here
    default:
      return state;
  }
};

export default countryReducer;