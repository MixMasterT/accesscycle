import React from 'react';

class Countries extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.countriesList.map((country) => <li key={country} >{country}</li> )}
      </ul>
    );
  }
}

export default Countries;
