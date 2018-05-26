import React from 'react';

class Networks extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location !== newProps.location) {
      if (!!newProps.networks.length) {
        this.props.setNearbyNetworks(newProps.networks);
      } else {
        alert(`No bicycle networks found in ${newProps.location}`);
      }
    }
  }

  render() {
    const nearbyNetworks = this.props.nearbyNetworks;
    let list = <div className="disclaimer">
                 <li>No networks found</li>
                 <li>Click on a location!</li>
               </div>
    if (nearbyNetworks.length > 0) {
      list = nearbyNetworks.map((network, idx) => {
        console.log('network', idx, network);
        return (
          <li
            className="network-name"
            key={network.id}
            onClick={() => this.props.getNetwork(network.id) }
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
          Bicycle Networks{this.props.location ? ` in ${this.props.location}` : ''}
        </h3>
        <ul className="network-names">{list}</ul>
      </div>
    );
  }
}

export default Networks;
