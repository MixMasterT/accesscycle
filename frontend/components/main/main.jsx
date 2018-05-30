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
      width: window.innerWidth
    }
    this.getWidth = this.getWidth.bind(this);
  }

  componentDidMount() {
    this.props.getNetworks();
    window.addEventListener('resize', this.getWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getWidth);
  }

  getWidth() {
    this.setState({
      width: window.innerWidth
    })
  }

  render() {
    if (this.state.width > 700) {
      return (
        <main className='main'>
          <div className='main-components'>
            <FloatingDropdown title="Locations">
              <Locations />
            </FloatingDropdown>
            <div className='center'>
              <Map />
              <Station />
            </div>
            <FloatingDropdown title="Networks">
              <Networks geocoder={this.geocoder} />
            </FloatingDropdown>
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
