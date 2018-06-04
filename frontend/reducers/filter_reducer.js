import { merge } from 'lodash';
import {
  SET_FILTER,
  CLEAR_FILTER } from "../actions/filter_actions.js";

let _defaultState = null;

const filterReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SET_FILTER:
      return action.term;
    case CLEAR_FILTER:
      return null;
    default:
      return state;
  }
};

export default filterReducer;
