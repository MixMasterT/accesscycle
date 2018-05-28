import React from 'react';

import PaginatedNetworks from './paginated_networks';

class Networks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      recordsPerPage: 10,
    }
  }

  render() {
    const props = this.props;
    const nearbyNetworks = this.props.nearbyNetworks;
    let list = <div className="disclaimer">
                 <li>No networks found</li>
                 <li>Click on a location!</li>
               </div>
    if (nearbyNetworks.length > 0) {
      list = nearbyNetworks.map((network, idx) => {
        return (
          <li
            className="network-name"
            key={network.id}
            onClick={() => props.getNetwork(network.id) }
            >
            {network.name}{network.location.city ?
              ` (${network.location.city})` :
              ''
            }
          </li>
        )}
      )
    }
    return (
      <div className='networks'>
        <h3 className="heading">
          Bicycle Networks{props.location ? ` in ${props.location}` : ''}
        </h3>
        { nearbyNetworks.length < 26 ?
            <ul className="network-names">{list}</ul> :
            <PaginatedNetworks networks={list} />
        }
      </div>
    );
  }
}

export default Networks;
