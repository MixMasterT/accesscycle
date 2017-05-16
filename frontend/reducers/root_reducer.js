import { combineReducers } from 'redux';
import networkDetailReducer from './network_detail_reducer.js';
import networksReducer from './networks_reducer.js';


const rootReducer = combineReducers({
  networkDetail: networkDetailReducer,
  networks: networksReducer,
  
});

export default rootReducer;
