import React from 'react';
import { connect } from 'react-redux';
import Map from './map.jsx';

import { getNetworks } from '../../actions/network_actions';
import { updateBounds } from '../../actions/bounds_actions';

const mapStateToProps = (state, ownProps) => ({
  city: state.city,
  country: state.country,
  nearbyNetworks: state.nearbyNetworks,
});

const mapDispatchToProps = dispatch => ({
  getNetworks: () => dispatch(getNetworks()),
  updateBounds: bounds => dispatch(updateBounds(bounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
