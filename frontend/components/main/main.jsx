import React from 'react';

import Locations from '../locations/locations_container';
import Map from '../map/map_container';
import Networks from '../networks/networks_container';
import Station from '../station/station_container';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mapShowing: false,
    }
  }

  componentDidMount() {
    if (window.matchMedia("(min-width: 640px)").matches) {
      this.setState({ mapShowing: true })
    }
    this.props.getNetworks();
  }

  render() {
    return (
      <main className='main'>
        <button
          className='show-map-btn'
          onClick={() => this.setState({ mapShowing: !this.state.mapShowing })}
        >
          { this.state.mapShowing ? "Hide " : "Show "}Map
        </button>
        <div className='main-components'>
          <Locations />
          <div className='center'>
            { this.state.mapShowing ? <Map /> : "" }
            <Station />
          </div>
          <Networks />
        </div>
      </main>
    );
  }
}

export default Main;
