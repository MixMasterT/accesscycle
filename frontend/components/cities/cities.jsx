import React from 'react';

class Cities extends React.Component {
  constructor(props) {
    super(props);

    this.handleCityClick = this.handleCityClick.bind(this);
  }

  handleCityClick(city) {
    return e => this.props.setCity(city);
  }

  render() {
    return (
      <div className='cities'>
        <ul>
          <li onClick={this.props.getNetworks}>All Cities</li>
          {this.props.citiesList.map((city) => (
            <li key={city} onClick={this.handleCityClick(city)}>
              {city.replace(",", ", ")}
            </li>)
          )}
        </ul>
      </div>
    );
  }
}

export default Cities;
