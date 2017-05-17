import React from 'react';
import { connect } from 'react-redux';
import Networks from './networks.jsx';

import { networksByCity, networksByCountry } from '../../util/selectors';

const mapStateToProps = (state, ownProps) => ({
  nearbyNetworks: (state.city === "" ?
                        (state.country === "" ? [] :
                        networksByCountry(state.country, state.networks)
                    ): networksByCity(state.city, state.networks)
                  ),
});

const mapDispatchToProps = dispatch => ({
  // your code here...
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Networks);
