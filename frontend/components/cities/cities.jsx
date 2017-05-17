import React from 'react';

class Cities extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getNetworks();
  }

  render() {
    return (
      <ul>
        {this.props.citiesList.map((city) => <li key={city} >{city}</li> )}
      </ul>
    );
  }
}

export default Cities;
