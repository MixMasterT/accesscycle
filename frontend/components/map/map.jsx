import React from 'react';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobMarkers: []
    }

    this.addHomeMarker = this.addHomeMarker.bind(this);

  }

  componentDidMount() {
    let mapOptions = {
      center: { lat: 37.773972, lng: -122.431297 },
      zoom: 12
    }

    navigator.geolocation.getCurrentPosition((loc) => {
      if (loc.coords.latitude) {
        this.map.setCenter(new google.maps.LatLng(loc.coords.latitude,
                                                loc.coords.longitude));
        this.addHomeMarker(loc.coords.latitude, loc.coords.longitude);
      }
    })

    this.map = new google.maps.Map(this.mapNode, mapOptions)

    google.maps.event.addListener(this.map, 'idle', () => {
      const mapBounds = this.map.getBounds();
      const northEast = mapBounds.getNorthEast();
      const southWest = mapBounds.getSouthWest();
      const bounds = {
        northEast: getCoordsObj(northEast),
        southWest: getCoordsObj(southWest)
      }
      console.log(bounds);
      this.props.updateBounds(bounds);
    })


    const markers = {
      'pending': 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%24|00FF00',
      'designated': 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=J|FFFF00',
      'fulfilled': 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=F|FF00FF',
      'unfulfilled': 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=U|FF0000',
    }
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
      <div className='map-component'>
        <h2> Bicycle Map </h2>
        <div className="map" ref={ map => this.mapNode = map }
        ></div>
      </div>
    )
  }
}

export default Map;
