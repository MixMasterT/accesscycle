import React from 'react';

import Cities from '../cities/cities_container';
import Countries from '../countries/countries_container';
import Pagination from '../pagination/pagination_container';

class Locations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: true,
      searchTerm: '',
    }
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  handleSearchInput(e) {
    this.setState({ searchTerm: e.target.value });
  }

  clearSearch() {
    this.setState({ searchTerm: '' });
  }

  render() {
    return (
      <div className='locations'>
        <div className='locations-selector'>
          <div
            onClick={ () => this.setState({ countries: true }) }
            className={`select-countries${this.state.countries ? ' active' : ''}`}
          >Countries</div>
          <div
            onClick={ () => this.setState({ countries: false }) }
            className={`select-cities${this.state.countries ? '' : ' active'}`}
          >Cities</div>
        </div>
        <div className="search">
          <input
            className={`search-box${this.state.searchTerm !== '' ? ' active' : ''}`}
            type="text"
            placeholder={`search by ${this.state.countries ? 'country' : 'city'}`}
            value={this.state.searchTerm}
            onChange={this.handleSearchInput}
          />
          <span
            className="clear-icon"
            onClick={this.clearSearch}
          >&times;</span>
          <span className="search-icon">&#x1F50D;</span>
        </div>
        { this.state.countries ? <Countries /> : <Cities />}
        <Pagination isCountries={this.state.countries} />
      </div>
    );
  }
}

export default Locations;
