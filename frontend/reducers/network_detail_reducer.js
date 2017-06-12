import { merge } from 'lodash';
import { RECEIVE_NETWORK,
        //  CLEAR_NETWORK
       } from "../actions/network_actions.js";

import { SET_CITY } from '../actions/city_actions';

import { SET_COUNTRY } from '../actions/country_actions';

let _defaultState = {};

const networkDetailReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NETWORK:
      return action.network;
    case SET_CITY:
    case SET_COUNTRY:
    // case CLEAR_NETWORK:
      return _defaultState;
    default:
      return state;
  }
};

export default networkDetailReducer;
