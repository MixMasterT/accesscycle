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
    // first clear out old markers
    this.clearMarkers();
    // definemMarkerFunction must specify a position property as 'google
    // map coords' and take a second argument that is the map
    objectsToMark.forEach(obj => {
      const marker = defineMarkerFunction(obj, this.map, this.markIcon);

      this._addMarker(marker);
    })
  }

  clearMarkers() {
    this.markers.forEach( marker => marker.setMap(null));
    this.markers = [];
  }

  _addMarker(marker) {
    // pass marker to clickHandler for processing
    marker.addListener('click', () => this.markerClickHandler(marker));
    this.markers.push(marker);
  }
}

export default MarkerManager;
