import React from 'react';
import { connect } from 'react-redux';
import Countries from './countries.jsx';

import { countriesFromNetworks } from '../../util/selectors';
import { setCountry } from '../../actions/country_actions';

const mapStateToProps = (state, ownProps) => {
  const countryPage = state.pagination.currentCountryPage;
  const itemsPerPage = state.pagination.itemsPerPage;
  let pageStart = countryPage * itemsPerPage;
  let pageEnd = pageStart + itemsPerPage;
  const allCountries = countriesFromNetworks(state.networks);
  if(pageEnd > allCountries.length - 1) {
    pageStart = allCountries.length - itemsPerPage;
    pageEnd = allCountries.length;
  }
  const countriesList = allCountries.slice(pageStart, pageEnd);
  return ({
    countriesList,
    networks: state.networks,
  });
}


const mapDispatchToProps = dispatch => ({
  setCountry: (country) => dispatch(setCountry(country)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countries);
