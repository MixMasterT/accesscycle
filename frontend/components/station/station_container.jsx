import React from 'react';
import { connect } from 'react-redux';
import Station from './station.jsx';

const mapStateToProps = (state, ownProps) => ({
  station: state.station,
});

const mapDispatchToProps = dispatch => ({
  // your code here...
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Station);
