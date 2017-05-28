import React from 'react';
import { connect } from 'react-redux';
import Map from './map.jsx';

import { getNetworks, getNetwork } from '../../actions/network_actions';
import { updateBounds } from '../../actions/bounds_actions';

const mapStateToProps = (state, ownProps) => ({
  city: state.city,
  country: state.country,
  nearbyNetworks: state.nearbyNetworks,
  networkDetail: state.networkDetail.network,
});

const mapDispatchToProps = dispatch => ({
  getNetworks: () => dispatch(getNetworks()),
  getNetwork: (networkId) => dispatch(getNetwork(networkId)),
  updateBounds: bounds => dispatch(updateBounds(bounds)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
