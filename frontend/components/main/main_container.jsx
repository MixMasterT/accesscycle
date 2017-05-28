import React from 'react';
import { connect } from 'react-redux';
import Main from './main.jsx';

import { getNetworks } from '../../actions/network_actions';

const mapStateToProps = (state, ownProps) => ({
  // your code here...
});

const mapDispatchToProps = dispatch => ({
  getNetworks: () => dispatch(getNetworks()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
