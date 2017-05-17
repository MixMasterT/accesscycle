import React from 'react';
import { connect } from 'react-redux';
import Cities from './cities.jsx';

import { citiesFromNetworks } from '../../util/selectors';
import { getNetworks } from '../../actions/network_actions';

const mapStateToProps = (state, ownProps) => ({
  citiesList: citiesFromNetworks(state.networks),
});


const mapDispatchToProps = dispatch => ({
  getNetworks: () => dispatch(getNetworks()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cities);
