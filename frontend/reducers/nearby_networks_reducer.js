import { merge } from 'lodash';

import { SET_COUNTRY } from "../actions/country_actions.js";
import { SET_CITY } from "../actions/city_actions.js";

let _defaultState = [];

const nearbyNetworksReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    
    default:
      return state;
  }
};

export default nearbyNetworksReducer;
