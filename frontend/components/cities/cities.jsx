import React from 'react';

class Cities extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(props) {
    console.log(props.citiesList);
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
