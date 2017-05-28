import React from 'react';

class Countries extends React.Component {
  constructor(props) {
    super(props);

    this.handleCountryClick = this.handleCountryClick.bind(this);
  }

  componentDidMount() {
    this.props.getNetworks();
  }

  handleCountryClick(country) {
    return e => this.props.setCountry(country);
  }
  render() {
    return (
      <div className='countries'>
        <h3>Countries with listed Bicycle Rental</h3>
        <ul>
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
