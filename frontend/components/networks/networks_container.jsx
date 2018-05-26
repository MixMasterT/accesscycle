import React from 'react';
import { connect } from 'react-redux';

import Networks from './networks.jsx';
import { uniq } from 'lodash';
import { setNearbyNetworks, getNetwork } from '../../actions/network_actions';
import { networksByCity, networksByCountry } from '../../util/selectors';

const mapStateToProps = (state, ownProps) => {
  let city = state.city.city;
  let country = state.country.country;
  let networks = networksByCountry(country, state.networks);
  if(city !== undefined && city !== "") {
    networks = networksByCity(city, state.networks)
  }
  const namesAndIds = networks.map((network) => ({
    name: network.name,
    id: network.id,
    location: network.location,
  }))
  return ({
    networks,
    nearbyNetworks: uniq(namesAndIds),
    location: (city ? city : country),
  });
}

const mapDispatchToProps = dispatch => ({
  setNearbyNetworks: (nearbyNetworks) => dispatch(setNearbyNetworks(nearbyNetworks)),
  getNetwork: (networkId) => dispatch(getNetwork(networkId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Networks);
