import { merge } from 'lodash';

import {
         RECEIVE_STATION,
         CLEAR_STATION } from "../actions/station_actions.js";

let _defaultState = {};

const stationReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_STATION:
      return action.station;
    case CLEAR_STATION:
      return _defaultState;
    default:
      return state;
  }
};

export default stationReducer;
