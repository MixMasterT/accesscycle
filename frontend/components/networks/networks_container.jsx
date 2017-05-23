import React from 'react';
import { connect } from 'react-redux';
import Networks from './networks.jsx';

import { uniq } from 'lodash';

import { networksByCity, networksByCountry } from '../../util/selectors';

const mapStateToProps = (state, ownProps) => {
  const networks = (state.city === "" ?
                        (state.country === "" ? [] :
                        networksByCountry(state.country, state.networks)
                    ): networksByCity(state.city, state.networks)
                  );

  const namesAndIds = networks.map((network) => ({
    name: network.name,
    id: network.id,
  }))

  return ({
    nearbyNetworks: uniq(namesAndIds),
    location: (state.city ? state.city : state.country),
  });
}

const mapDispatchToProps = dispatch => ({
  // your code here...
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Networks);
