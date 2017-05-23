import React from 'react';

import Cities from '../cities/cities_container';
import Countries from '../countries/countries_container';

class Locations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: true,
    }
  }
  
  render() {
    return (
      <div className='locations'>
        <div className='locations-selector'>
          <div
            onClick={ () => this.setState({ countries: true }) }
            className='select-countries'
          >Countries</div>
          <div
            onClick={ () => this.setState({ countries: false }) }
            className='select-cities'
          >Cities</div>
        </div>
        { this.state.countries ? <Countries /> : <Cities />}
      </div>
    );
  }
}

export default Locations;
