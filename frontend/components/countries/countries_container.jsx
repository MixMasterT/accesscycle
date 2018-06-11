import React from 'react';
import { connect } from 'react-redux';
import Countries from './countries.jsx';

import { countriesFromNetworks } from '../../util/selectors';
import { getNetworks } from '../../actions/network_actions';
import { setCountry } from '../../actions/country_actions';

const mapStateToProps = (state, ownProps) => {
  const countryPage = state.pagination.currentCountryPage;
  const itemsPerPage = state.pagination.itemsPerPage;
  let pageStart = countryPage * itemsPerPage;
  let pageEnd = pageStart + itemsPerPage;
  let allCountries = countriesFromNetworks(state.networks);
  if (state.filter) {
    const filter = state.filter.toLowerCase();
    allCountries = allCountries.filter((country) => {
      const countryName = country.toLowerCase();
      return -1 < countryName.indexOf(filter);
    })
  }
  if (pageEnd > allCountries.length - 1) {
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
  getNetworks: () => dispatch(getNetworks()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countries);
