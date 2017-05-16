export const RECEIVE_NETWORK = 'RECEIVE_NETWORK';
export const RECEIVE_NETWORKS = 'RECEIVE_NETWORKS';

import * as networkUtils from '../util/city_bikes_api_util';

const receiveNetwork = networkId => ({
  type: RECEIVE_NETWORK,
  networkId
});

const receiveNetworks = () => ({
  type: RECEIVE_NETWORKS,
  networks
});

export const getNetwork = (networkId) => dispatch => (
  networkUtils.fetchNetworks().then((network) => dispatch(receiveNetwork(network)))
  .fail((err) => console.log(err))
)

export const getNetworks = () => dispatch => (
  networkUtils.fetchNetworks().then((networks) => dispatch(receiveNetworks(networks)))
    .fail((err) => console.log(err))
)
