import React from 'react';
import { connect } from 'react-redux';
import Countries from './countries.jsx';

import { getNetworks } from '../../actions/network_actions';
import { countriesFromNetworks } from '../../util/selectors';
import { setCountry } from '../../actions/country_actions';

const mapStateToProps = (state, ownProps) => ({
  countriesList: countriesFromNetworks(state.networks),
  networks: state.networks,
});

const mapDispatchToProps = dispatch => ({
  getNetworks: () => dispatch(getNetworks()),
  setCountry: (country) => dispatch(setCountry(country)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countries);
