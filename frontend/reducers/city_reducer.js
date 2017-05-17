import { merge } from 'lodash';
import {
  CLEAR_CITY,
  SET_CITY } from "../actions/city_actions.js";

let _defaultState = {};

const cityReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case CLEAR_CITY:
      // your code here
    case SET_CITY:
      // your code here
    default:
      return state;
  }
};

export default cityReducer;