import React from 'react';
import { connect } from 'react-redux';
import Countries from './countries.jsx';

import { getNetworks } from '../../actions/network_actions';
import { countriesFromNetworks } from '../../util/selectors';

const mapStateToProps = (state, ownProps) => ({
  countriesList: countriesFromNetworks(state.networks),
});

const mapDispatchToProps = dispatch => ({
  getNetworks: () => dispatch(getNetworks()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countries);
