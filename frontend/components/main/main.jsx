import React from 'react';

import Locations from '../locations/locations_container';
import Map from '../map/map_container';
import Networks from '../networks/networks_container';
import Station from '../station/station_container';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (window.matchMedia("(min-width: 640px)").matches) {
      this.setState({ oneRow: true })
    }
    this.props.getNetworks();
  }

  render() {
    console.log('window.width', window.innerWidth);
    if (window.innerWidth > 700) {
      return (
        <main className='main'>
          <div className='main-components'>
            <Locations />
            <div className='center'>
              <Map />
              <Station />
            </div>
            <Networks />
          </div>
        </main>
      );
    } else {
      return (
        <main className='main-narrow'>
          <div className='components'>
            <div className='top'>
              <Map />
            </div>

            <div className='second'>
              <Locations />
              <Station />
              <Networks />
            </div>
          </div>
        </main>
      );
    }
  }
}

export default Main;
