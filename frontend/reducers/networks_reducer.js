import { merge } from 'lodash';
import {
  RECEIVE_NETWORKS } from "../actions/network_actions.js";

let _defaultState = [];

const networksReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NETWORKS:
      return action.networks.networks;
    default:
      return state;
  }
};

export default networksReducer;
