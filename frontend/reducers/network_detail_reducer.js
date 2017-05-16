import { merge } from 'lodash';
import {
  RECEIVE_NETWORK } from "../actions/network_actions.js";

let _defaultState = {};

const networkDetailReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NETWORK:
      return action.network;
    default:
      return state;
  }
};

export default networkDetailReducer;
