import { merge } from 'lodash';
import {
  UPDATE_BOUNDS,
  CLEAR_BOUNDS } from "../actions/map_filter_bounds_actions.js";

let _defaultState = {};

const mapFilterBoundsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_BOUNDS:
      return action.bounds;
    case CLEAR_BOUNDS:
      return {};
    default:
      return state;
  }
};

export default mapFilterBoundsReducer;
