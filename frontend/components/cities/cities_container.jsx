import React from 'react';
import { connect } from 'react-redux';
import Cities from './cities.jsx';

import { citiesFromNetworks } from '../../util/selectors';

const mapStateToProps = (state, ownProps) => ({
  citiesList: citiesFromNetworks(state.networks),
});


const mapDispatchToProps = dispatch => ({
  // your code here...
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cities);
