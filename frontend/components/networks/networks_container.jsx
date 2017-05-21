import React from 'react';
import { connect } from 'react-redux';
import Networks from './networks.jsx';

import { uniq } from 'lodash';

import { networksByCity, networksByCountry } from '../../util/selectors';


// !!! I WAN TO REFACTOR THIS TO PASS A UNIQ LIST OF NETWORK NAMES IN , NOT THE WHOLE NETWORK OBJECTS
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
  });
}

const mapDispatchToProps = dispatch => ({
  // your code here...
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Networks);
