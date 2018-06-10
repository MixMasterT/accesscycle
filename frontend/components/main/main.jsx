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
    this.clearStationMarker = this.clearStationMarker.bind(this);
  }

  componentDidMount() {
    this.props.getNetworks();
    window.addEventListener('resize', () => {
      console.log('resize event heard...');
      this.getDimensions();
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getDimensions);
  }

  getDimensions() {
    console.log('get getDimensions called');
    const width = window.innerWidth;
    const height = window.innerHeight;
    let itemsPerPage = 23;
    if (height < 800) {
      itemsPerPage = 16;
      if (height < 600) {
        itemsPerPage = 10;
      }
    }
    console.log('width', width);
    console.log('height', height);
    console.log('itemsPerPage', itemsPerPage);
    this.props.setItemsPerPage(itemsPerPage);
    this.setState({
      width,
      height
    })
  }

  clearStationMarker() {
    if (this.refs.map) {
      // definite 'code smell' here, but works to allow clearing from station component
      this.refs.map
        ._reactInternalInstance
        ._renderedComponent
        ._instance
        .clearStationMarker();
        // consider fixing by moving markerManagers up to Main from Map...
    }
  }

  render() {
    return (
      <main className='main'>
        <div className='main-components'>
          <FloatingDropdown title="Locations">
            <Locations />
          </FloatingDropdown>
          <div className='center'>
            <Map
              ref="map"
              width={this.state.width}
              height={this.state.height}
            />
            <Station
              clearStationMarker={this.clearStationMarker}
            />
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
