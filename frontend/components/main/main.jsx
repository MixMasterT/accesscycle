import React from 'react';

import Locations from '../locations/locations_container';
import Map from '../map/map_container';
import Networks from '../networks/networks_container';
import Station from '../station/station_container';

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
    console.log('window.width', window.innerWidth);
    if (this.state.width > 700) {
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
