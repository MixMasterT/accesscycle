import React from 'react';
import { connect } from 'react-redux';
import Station from './station.jsx';
import { clearStation } from '../../actions/station_actions';

const mapStateToProps = (state, ownProps) => ({
  station: state.station,
});

const mapDispatchToProps = dispatch => ({
  clearStation: () => dispatch(clearStation()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Station);
