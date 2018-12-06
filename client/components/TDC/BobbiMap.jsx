import React from 'react'
// import { ReactLeaflet, LeafletMap, TileLayer, Marker, Popup } from 'leaflet'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'



// const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet


class AMap extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: -41.296817,
      lng: 174.773934,
      zoom: 13
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
        </Map>
      </div>
    );
  }
}

// ReactDOM.render(<Map />, document.getElementById('container'))


export default AMap

