import React from 'react';

import Locations from '../locations/locations_container';
import Map from '../map/map_container';
import Networks from '../networks/networks_container';
import Station from '../station/station_container';
import FloatingDropdown from '../floating_dropdown/floating_dropdown';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
    this.getDimensions = this.getDimensions.bind(this);
  }

  componentDidMount() {
    this.props.getNetworks();
    window.addEventListener('resize', this.getDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getDimensions);
  }

  getDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  render() {
    return (
      <main className='main'>
        <div className='main-components'>
          <FloatingDropdown title="Locations">
            <Locations />
          </FloatingDropdown>
          <div className='center'>
            <Map width={this.state.width} height={this.state.height} />
            <Station />
          </div>
          <FloatingDropdown title="Networks">
            <Networks geocoder={this.geocoder} />
          </FloatingDropdown>
        </div>
      </main>
    );
  }
}


export default Main;
