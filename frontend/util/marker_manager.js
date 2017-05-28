class MarkerManager {
  constructor(map, markerClickHandler, markIcon) {
    this.map = map;
    this.markerClickHandler = markerClickHandler;
    this.markIcon = markIcon;

    this.markers = [];

    this.addMarkerArray = this.addMarkerArray.bind(this);
    this.clearMarkers = this.clearMarkers.bind(this);

    this._addMarker = this._addMarker.bind(this);
    // this._removeMarker = this._removeMarker.bind(this);
  }

  addMarkerArray(objectsToMark, defineMarkerFunction) {
    // define marker function must specify a position property as google
    // map coords and take a second argument that is the map
    objectsToMark.forEach(obj => _addMarker(defineMarkerFunction(obj, this.map)));
  }

  clearMarkers() {
    this.markers.forEach( marker => marker.setMap(null));
  }

  _addMarker(marker) {
    marker.addListener('click', () => this.markerClickHandler());
    this.markers.push(marker);
  }
}

export default MarkerManager;
