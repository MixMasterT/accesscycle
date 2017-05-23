import React from 'react';
import { connect } from 'react-redux';
import Locations from './locations.jsx';

const mapStateToProps = (state, ownProps) => ({
  city: state.city,
  country: state.country,
});

const mapDispatchToProps = dispatch => ({
  // your code here...
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Locations);
