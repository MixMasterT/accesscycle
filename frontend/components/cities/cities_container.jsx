import React from 'react';
import { connect } from 'react-redux';
import Cities from './cities.jsx';

import { citiesFromNetworks } from '../../util/selectors';
import { getNetworks } from '../../actions/network_actions';
import { setCity } from '../../actions/city_actions';

const mapStateToProps = (state, ownProps) => ({
  citiesList: citiesFromNetworks(state.networks),
  networks: state.networks,
});

const mapDispatchToProps = dispatch => ({
  getNetworks: () => dispatch(getNetworks()),
  setCity: (city) => dispatch(setCity(city)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cities);
