import React from 'react';

class Countries extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'countries'}>
        <ul>
          {this.props.countriesList.map((country, idx) => <li key={idx}>{country}</li>)}
        </ul>
        <img src='https://upload.wikimedia.org/wikipedia/commons/9/9b/Upright_urban_bicyclist.svg' />
      </div>
    );
  }
}

export default Countries;
