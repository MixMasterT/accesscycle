import React from 'react';

class Station extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: ''
    }
  }
  componentDidMount() {
    this.geocoder = new google.maps.Geocoder();
  }
  componentWillReceiveProps(newProps) {
    if (newProps.station.name !== this.props.station.name) {
      const station = newProps.station;
      let address = station.address;
      if (!address || address === '') {
        address = station.extra ? station.extra.address : null;
      }
      if (address && address !== '') {
        this.setState({ address });
        return;
      } else if (!address && !!station.latitude && !!station.longitude) {
        const latLng = { lat: station.latitude, lng: station.longitude };
        this.geocoder.geocode({ location: latLng }, (results, status) => {
          if (status === 'OK') {
            if (results[0]) {
              address = results[0].formatted_address;
              this.setState({address})
            }
          }
        });
      }
    }
  }
  render() {
    const station = this.props.station;
    const clearStation = this.props.clearStation;
    if (Object.keys(station).length === 0) {
      return (
        <h2>No Station Selected</h2>
      )
    } else {
      return (
        <div className='station'>
          <h2>
            Station: {station.name}
          </h2>
          <span
            className="close-icon"
            onClick={clearStation}
            >&times;
          </span>
          <table>
            <thead>
              <tr>
                <th>address</th>
              </tr>

              <tr>
                <th>bikes available</th><th>free slots</th><th>address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{station.free_bikes}</td>
                <td>{station.empty_slots}</td>
                <td>{this.state.address || 'address not provided'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Station;
