import React from 'react';

import Locations from '../locations/locations_container';
import Map from '../map/map_container';
import Networks from '../networks/networks_container';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className='main'>
        <Locations />
        <Map />
        <Networks />
      </main>
    );
  }
}

export default Main;
