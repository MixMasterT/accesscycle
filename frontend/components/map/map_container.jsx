import React from 'react';
import { connect } from 'react-redux';
import Map from './map.jsx';

import { getNetworks } from '../../actions/network_actions';
import { updateBounds } from '../../actions/bounds_actions';

const mapStateToProps = (state, ownProps) => ({
  // your code here...
});

const mapDispatchToProps = dispatch => ({
  getNetworks: () => dispatch(getNetworks()),
  updateBounds: bounds => dispatch(updateBounds(bounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
