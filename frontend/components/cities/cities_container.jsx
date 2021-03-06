import React from 'react';
import { connect } from 'react-redux';
import Cities from './cities.jsx';

import { citiesFromNetworks } from '../../util/selectors';
import { getNetworks } from '../../actions/network_actions';
import { setCity } from '../../actions/city_actions';

const mapStateToProps = (state, ownProps) => {
  const cityPage = state.pagination.currentCityPage;
  const itemsPerPage = state.pagination.itemsPerPage;
  let pageStart = cityPage * itemsPerPage;
  let pageEnd = pageStart + itemsPerPage;
  let allCities = citiesFromNetworks(state.networks);
  if (state.filter) {
    const filter = state.filter.toLowerCase();
    allCities = allCities.filter((city) => {
      const cityName = city.toLowerCase();
      return -1 < cityName.indexOf(filter);
    })
  }
  if(pageEnd > allCities.length - 1) {
    pageStart = allCities.length - itemsPerPage;
    pageEnd = allCities.length;
  }
  const citiesList = allCities.slice(pageStart, pageEnd);
  return ({
    citiesList,
    networks: state.networks,
  });
}

const mapDispatchToProps = dispatch => ({
  getNetworks: () => dispatch(getNetworks()),
  setCity: (city) => dispatch(setCity(city)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cities);
