import { merge } from 'lodash';

import { SET_NEARBY_NETWORKS } from "../actions/network_actions.js";


let _defaultState = [];

const nearbyNetworksReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SET_NEARBY_NETWORKS:
      return action.nearbyNetworks;
    default:
      return state;
  }
};

export default nearbyNetworksReducer;
