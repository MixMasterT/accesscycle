export const RECEIVE_NETWORK = 'RECEIVE_NETWORK';
export const RECEIVE_NETWORKS = 'RECEIVE_NETWORKS';
export const SET_NEARBY_NETWORKS = 'SET_NEARBY_NETWORKS';

import * as networkUtils from '../util/city_bikes_api_util';

const receiveNetwork = networkId => ({
  type: RECEIVE_NETWORK,
  networkId
});

const receiveNetworks = networks => ({
  type: RECEIVE_NETWORKS,
  networks
});

export const setNearbyNetworks = nearbyNetworks => ({
  type: SET_NEARBY_NETWORKS,
  nearbyNetworks
});

export const getNetwork = (networkId) => dispatch => (
  networkUtils.fetchNetworks().then((network) => dispatch(receiveNetwork(network)))
  .fail((err) => console.log(err))
)

export const getNetworks = () => dispatch => (
  networkUtils.fetchNetworks().then((networks) => dispatch(receiveNetworks(networks)))
    .fail((err) => console.log(err))
)
