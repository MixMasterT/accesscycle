import React from 'react';

class Countries extends React.Component {
  constructor(props) {
    super(props);

    this.handleCountryClick = this.handleCountryClick.bind(this);
  }

  handleCountryClick(country) {
    return e => this.props.setCountry(country);
  }
  
  render() {
    return (
      <div className='countries'>
        <ul>
          <li onClick={this.props.getNetworks}>All Countries</li>
          {this.props.countriesList.map((country, idx) => (
            <li key={idx} onClick={this.handleCountryClick(country)}>
              {country}
            </li>)
          )}
        </ul>
      </div>
    );
  }
}

export default Countries;
