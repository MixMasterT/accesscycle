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
      // if (newProps.networks === []) {
      //   console.log('null network detected');
      // } else {
      //   this.props.setNearbyNetworks(newProps.networks);
      // }
    //}
  }

  render() {
    return (
      <div className='networks'>
        <h3>Bicycle Networks{this.props.location ? ` in ${this.props.location}` : ''}</h3>
        <ul>
          {this.props.nearbyNetworks.map((nearNetwork) => (
            <li
              key={nearNetwork.id}
              onClick={() => this.props.getNetwork(nearNetwork.id) }
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
