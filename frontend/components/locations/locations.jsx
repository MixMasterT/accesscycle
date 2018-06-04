import React from 'react';
import { debounce } from 'lodash';

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
    this.setFilter = debounce(this.props.setFilter, 300);
  }

  handleSearchInput(e) {
    this.setState({ searchTerm: e.target.value }, () => {
      this.setFilter(this.state.searchTerm);
    });
  }

  clearSearch() {
    this.props.clearFilter();
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
          <span className="search-icon">&#x1F50D;</span>
          <input
            className={`search-box${this.state.searchTerm !== '' ? ' active' : ''}`}
            type="text"
            placeholder={`search ${this.state.countries ? 'countr' : 'cit'}ies`}
            value={this.state.searchTerm}
            onChange={this.handleSearchInput}
          />
          <span
            className="clear-icon"
            onClick={this.clearSearch}
          >&times;</span>
        </div>
        { this.state.countries ? <Countries /> : <Cities />}
        <Pagination isCountries={this.state.countries} />
      </div>
    );
  }
}

export default Locations;
