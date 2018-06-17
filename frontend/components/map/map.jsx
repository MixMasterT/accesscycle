import React from 'react';

import MarkerManager from '../../util/marker_manager';

import mapStyles from './map_styles.json';
import { bikeIconPath, stationIconPath } from './path';

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
    this.centerMapOnMarkers = this.centerMapOnMarkers.bind(this);
    this.handleStationClick = this.handleStationClick.bind(this);
    this.clearStationMarker = this.clearStationMarker.bind(this);
  }

  componentDidMount() {
    let mapOptions = {
      center: { lat: 0, lng: -90.2934337 },
      zoom: 3,
      styles: mapStyles,
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
      this.props.updateBounds(bounds);
    })

    google.maps.event.addListener(this.map, 'resize', () => {
      const height = $(this.map.getDiv()).children().eq(0).height();
      const width = $(this.map.getDiv()).children().eq(0).width();
      this.setState({
        height,
        width,
      });
    })

    const bikeIcon = {
      path: bikeIconPath,
      fillColor: '#000000',
      fillOpacity: 1,
      anchor: new google.maps.Point(100, 150),
      strokeWeight: 0,
      scale: 0.1
    }

    const stationIcon = {
      path: stationIconPath, // path in separate file
      fillColor: '#000000',
      fillOpacity: 1,
      anchor: new google.maps.Point(100, 150),
      strokeWeight: 0,
      scale: 0.1
    }

    const markers = {
      'bicycle': bikeIcon,
      'station': {
                    url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(stationIconPath),
                    scaledSize: new google.maps.Size(60, 60),
                    optimized: true
                  },
      'network': 'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=N|ffff00',
      'home': 'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=N|0000FF',
      'currentStation': 'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=S|FF6666',
    }
    this.locationMarkerManager = new MarkerManager(
      this.map,
      (marker) => this.props.getNetwork(marker.id),
      markers.network
    );

    this.stationMarkerManager = new MarkerManager(
      this.map,
      (marker) => this.handleStationClick(marker),
      markers.station
    );

    this.currentStationMarkerManager = new MarkerManager(
      this.map,
      (marker) => null,
      markers.currentStation
    );
    this.markers = markers;
  }

  componentWillReceiveProps(newProps) {
    if (this.props !== newProps) {

      if (this.props.city !== newProps.city || this.props.country !== newProps.country) {
        let location = newProps.city || newProps.country;
        if (location === 'Georgia') {
          location = 'Country Georgia';
        }
      }

      if (this.props.nearbyNetworks !== newProps.nearbyNetworks) {
        this.stationMarkerManager.clearMarkers();
        this.updateLocationMarkers(newProps.nearbyNetworks);
      }

      if (this.props.networkDetail !== newProps.networkDetail) {
        this.updateCurrentNetworkMarkers(newProps.networkDetail);
      }
    }
  }

  updateLocationMarkers(networkArray) {
    this.currentStationMarkerManager.clearMarkers();
    // MarkerManager.addMarkerArray requires two arguments, an array of ojbects
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
    if (networkArray.length < 500) {
      this.centerMapOnMarkers(this.locationMarkerManager.markers);
    } else {
      this.map.setZoom(2);
    }
  }

  updateCurrentNetworkMarkers(network) {
    if (!network) { return; }
    this.currentStationMarkerManager.clearMarkers();
    this.stationMarkerManager.addMarkerArray(network.stations, (station, map, mark) => (
      new google.maps.Marker({
        position: new google.maps.LatLng(station.latitude, station.longitude),
        map: map,
        title: station.name,
        icon: mark,
        station,
      })
    ))
    this.centerMapOnMarkers(this.stationMarkerManager.markers);
  }

  addHomeMarker(lat, lng) {
    if (this.state.homeMarker) { this.state.homeMarker.setMap(null); }
    const otherImage = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.BOUNCE,
      position: { lat, lng },
      label: 'H',
      icon: this.markers.home,
    });
  }

  centerMapOnMarkers(markers) {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach((marker) => {
      bounds.extend(marker.position);
    })
    this.map.fitBounds(bounds);
    if (this.map.getZoom() > 20) {
      this.map.setZoom(7);
    }
  }

  handleStationClick(marker) {
    this.props.receiveStation(marker.station);
    const currentStationMarker = new google.maps.Marker({
      map: this.map,
      position: marker.position,
      icon: this.markers.currentStation,
      title: `Selected Station: ${marker.title}`,
    });
    this.clearStationMarker();
    this.currentStationMarkerManager._addMarker(currentStationMarker);
    // console.log('this.props.networkDetail.id', this.props.networkDetail.id);
    // this.props.getNetwork(this.props.networkDetail.id);
  }

  clearStationMarker() {
    this.currentStationMarkerManager.clearMarkers();
    this.stationMarkerManager.redrawMarkers();
  }

  render() {
    return (
      <div
        className='map-component'
      >
        <div
          className="map"
          ref={ map => this.mapNode = map }
          style={{
            width: this.props.width,
            height: this.props.height,
          }}
      ></div>
      </div>
    )
  }
}

export default Map;
