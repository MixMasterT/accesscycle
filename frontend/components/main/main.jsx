import React from 'react';

import Locations from '../locations/locations_container';
import Map from '../map/map_container';
import Networks from '../networks/networks_container';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mapShowing: false,
    }
  }

  componentDidMount() {
    if (window.matchMedia("(min-width: 640px)").matches) {
      console.log("screen width is greater than 640 px!");
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
          { this.state.mapShowing ? <Map /> : "" }
          <Networks />
        </div>
      </main>
    );
  }
}

export default Main;
