import React from 'react';
import { connect } from 'react-redux';
import Countries from './countries.jsx';

import { countriesFromNetworks } from '../../util/selectors';

const mapStateToProps = (state, ownProps) => ({
  countriesList: countriesFromNetworks(state.networks),
});

const mapDispatchToProps = dispatch => ({
  // your code here...
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countries);
