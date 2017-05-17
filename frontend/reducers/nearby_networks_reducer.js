import { merge } from 'lodash';

let _defaultState = {};

const nearbyNetworksReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default nearbyNetworksReducer;