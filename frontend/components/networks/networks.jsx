import React from 'react';

class Networks extends React.Component {
  constructor(props) {
    super(props);

    this.handleNetworkSelection = this.handleNetworkSelection.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.location !== newProps.location) {
      this.props.setNearbyNetworks(newProps.networks);
    }
  }

  handleNetworkSelection(networkId) {
    this.props.getNetwork(networkId);
  }

  render() {
    return (
      <div className='networks'>
        <h3>Bicycle Networks{this.props.location ? ` in ${this.props.location}` : ''}</h3>
        <ul>
          {this.props.nearbyNetworks.map((nearNetwork) => (
            <li
              key={nearNetwork.id}
              onClick={() => this.handleNetworkSelection(nearNetwork.id)}
              >
              {nearNetwork.name}
            </li>)
          )}
        </ul>
      </div>
    );
  }
}

export default Networks;
