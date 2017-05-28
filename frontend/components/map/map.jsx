import React from 'react';

import MarkerManager from '../../util/marker_manager';

import mapStyles from './map_styles.json';
import path from './path';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationMarkers: [],
      currentNetwork: [],
    }

    this.addHomeMarker = this.addHomeMarker.bind(this);
    this.updateLocationMarkers = this.updateLocationMarkers.bind(this);
    this.updateCurrentNetworkMarkers = this.updateCurrentNetworkMarkers.bind(this);

  }

  componentDidMount() {
    let mapOptions = {
      center: { lat: 37.773972, lng: -122.431297 },
      zoom: 12,
      styles: mapStyles,
    }

    navigator.geolocation.getCurrentPosition((loc) => {
      if (loc.coords.latitude) {
        this.map.setCenter(new google.maps.LatLng(loc.coords.latitude,
                                                  loc.coords.longitude));

        this.addHomeMarker(loc.coords.latitude, loc.coords.longitude);
      }
    })

    this.geocoder = new google.maps.Geocoder();

    this.map = new google.maps.Map(this.mapNode, mapOptions)

    google.maps.event.addListener(this.map, 'idle', () => {
      const mapBounds = this.map.getBounds();
      const northEast = mapBounds.getNorthEast();
      const southWest = mapBounds.getSouthWest();
      const bounds = {
        northEast: getCoordsObj(northEast),
        southWest: getCoordsObj(southWest)
      }
      this.props.updateBounds(bounds);
    })

    const bikeIcon = {
        path, // path in separate file
        fillColor: '#000000',
        fillOpacity: 1,
        anchor: new google.maps.Point(0,0),
        strokeWeight: 0,
        scale: 0.1
    }

    const markers = {
      'bicycle': bikeIcon,
      'network': 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=N|ffff00',
      'station': 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=J|FFFF00',
    }

    this.locationMarkerManager = new MarkerManager(
      this.map,
      (marker) => this.props.getNetwork(marker.id),
      markers['network']
    )

    this.stationMarkerManager = new MarkerManager(
      this.map,
      (marker) => console.log('station marker clicked', marker),
      markers['bicycle']
    )
  }

  componentWillReceiveProps(newProps) {
    if (this.props !== newProps) {
      let location = newProps.city || newProps.country;
      if (location === 'Georgia') {
        location = 'Country Georgia';
      }

      this.geocoder.geocode( {'address' : location}, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
              this.map.setCenter(results[0].geometry.location);
              this.map.setZoom((newProps.city ? 12 : 5))
          }
      });
      this.updateLocationMarkers(newProps.nearbyNetworks);
      this.updateCurrentNetworkMarkers(newProps.networkDetail);
    }
  }

  updateLocationMarkers(networkArray) {
    console.log("location networks are ", networkArray);
    // MarkerManager addMarkerArray requires two arguments, and array of ojbects
    // to be marked, and a function that defines the markers. The defineMarkerFunction
    // requires three arguments: 1 object to mark, 2 map, 3 mark. The MarkerManager
    // instance will hold these second two arguments, but they must be handled
    // by the defineMarkerFunction...
    this.locationMarkerManager.addMarkerArray(networkArray, (network, map, mark) => (
      new google.maps.Marker({
        position: new google.maps.LatLng(
          network.location.latitude,
          network.location.longitude
        ),
        map: map,
        title: network.name,
        icon: mark,
        id: network.id,
      })
    ))
  }

  updateCurrentNetworkMarkers(network) {
    if (!network) { return; }
    console.log("current network is ", network);
    this.stationMarkerManager.addMarkerArray(network.stations, (station, map, mark) => (
      new google.maps.Marker({
        position: new google.maps.LatLng(station.latitude,station.longitude),
        map: map,
        title: station.name,
        icon: mark,
        station,
      })
    ))
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
        <h2> Bicycle Network Map </h2>
        <div className="map" ref={ map => this.mapNode = map }
      ></div>
      </div>
    )
  }
}

export default Map;
