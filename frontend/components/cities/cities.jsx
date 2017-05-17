import React from 'react';

class Cities extends React.Component {
  constructor(props) {
    super(props);

    this.handleCityClick = this.handleCityClick.bind(this);
  }

  componentDidMount() {
    this.props.getNetworks();
  }

  handleCityClick(city) {
    return e => this.props.setCity(city);
  }

  render() {
    return (
      <div className='cities'>
        <h3>Cities with Bicycle Rental</h3>
        <ul>
          {this.props.citiesList.map((city) => (
            <li key={city} onClick={this.handleCityClick(city)}>
              {city}
            </li>)
          )}
        </ul>
      </div>
    );
  }
}

export default Cities;
