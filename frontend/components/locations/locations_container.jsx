import React from 'react';
import { connect } from 'react-redux';
import Locations from './locations.jsx';
import { setFilter, clearFilter } from '../../actions/filter_actions';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
  setFilter: (term) => dispatch(setFilter(term)),
  clearFilter: () => dispatch(clearFilter()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Locations);
