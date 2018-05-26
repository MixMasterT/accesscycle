import React from 'react';
import { connect } from 'react-redux';

import Pagination from './pagination.jsx';
import { updateCityPage,
         updateCountryPage } from '../../actions/pagination_actions';

const mapStateToProps = (state, ownProps) => {
  const pagination = state.pagination;
  return ({
    countryPage: pagination.currentCountryPage,
    cityPage: pagination.currentCityPage,
    totalCountryPages: pagination.totalCountryPages,
    totalCityPages: pagination.totalCityPages,
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
