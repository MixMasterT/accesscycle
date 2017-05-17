import React from 'react';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeMarker: null,
      bikeMarkers: [],
      slotMarkers: [],
    }

    this.addHomeMarker = this.addHomeMarker.bind(this);

  }

  componentDidMount() {
    this.props.getNetworks();
  }

  addHomeMarker(lat, lng) {
    if (this.state.homeMarker) { this.state.homeMarker.setMap(null); }
    const image = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
    const otherImage = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.BOUNCE,
      position: { lat, lng },
      label: 'H',
      icon: image
    })
    this.map.setZoom(13);
  }

  render() {
    return (
      <div>
        Map
      </div>
    );
  }
}

export default Map;
