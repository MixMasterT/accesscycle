import React from 'react';

class Networks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='networks'>
        <h3>Nearby Bicycle Rental Networks</h3>
        <ul>
          {this.props.nearbyNetworks.map((nearNetwork) => (
            <li>
              {nearNetwork.company}
            </li>)
          }
        </ul>
      </div>
    );
  }
}

export default Networks;
