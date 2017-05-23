import React from 'react';

class Networks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='networks'>
        <h3>Bicycle Networks{this.props.location ? ` in ${this.props.location}` : ''}</h3>
        <ul>
          {this.props.nearbyNetworks.map((nearNetwork) => (
            <li
              key={nearNetwork.id}
              onClick={() => {console.log(nearNetwork.id);}}
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
