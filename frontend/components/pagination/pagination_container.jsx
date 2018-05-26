import React from 'react';
import { connect } from 'react-redux';

import Pagination from './pagination.jsx';
import { updateCityPage,
         updateCountryPage } from '../../actions/pagination_actions';

const mapStateToProps = (state, ownProps) => {
  const city = state.city.city;
  let pages = state.pagination.totalCountryPages;
  let page = state.pagination.currentCountryPage;
  let isCity = false;
  console.log('city', city, 'in mapStateToProps');
  if(city !== undefined && city !== "") {
    pages = state.pagination.totalCityPages;
    page = state.pagination.currentCityPage;
  }
  return ({
    page,
    isCity,
    totalPages: pages,
  });
}

const mapDispatchToProps = dispatch => ({
  updateCityPage: (page) => dispatch(updateCityPage(page)),
  updateCountryPage: (page) => dispatch(updateCountryPage(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
