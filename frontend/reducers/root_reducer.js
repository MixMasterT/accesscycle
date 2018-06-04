import { combineReducers } from 'redux';
import filterReducer from './filter_reducer.js';
import paginationReducer from './pagination_reducer.js';
import stationReducer from './station_reducer.js';

import mapBoundsReducer from './map_bounds_reducer.js';
import countryReducer from './country_reducer.js';
import cityReducer from './city_reducer.js';
import nearbyNetworksReducer from './nearby_networks_reducer.js';
import networkDetailReducer from './network_detail_reducer.js';
import networksReducer from './networks_reducer.js';


const rootReducer = combineReducers({
  filter: filterReducer,
  pagination: paginationReducer,
  mapBounds: mapBoundsReducer,
  networks: networksReducer,
  country: countryReducer,
  city: cityReducer,
  nearbyNetworks: nearbyNetworksReducer,
  networkDetail: networkDetailReducer,
  station: stationReducer,
});

export default rootReducer;
