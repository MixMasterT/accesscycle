import React from 'react';
import { connect } from 'react-redux';
import Countries from './countries.jsx';

import { countriesFromNetworks } from '../../util/selectors';
import { setCountry } from '../../actions/country_actions';

const mapStateToProps = (state, ownProps) => ({
  countriesList: countriesFromNetworks(state.networks),
  networks: state.networks,
});

const mapDispatchToProps = dispatch => ({
  setCountry: (country) => dispatch(setCountry(country)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countries);
