import React from 'react'
// import { ReactLeaflet, LeafletMap, TileLayer, Marker, Popup } from 'leaflet'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'



// const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet
let someData = [{
  name: "Wesley City Mission",
  address: "213 Abc Street, Thorndon, Wellington 6011",
  location: { lat: -41.286817, long: 174.779934 },
}, {
  name: "B",
  address: "215 Abc Street, Thorndon, Wellington 6011",
  location: { lat: -41.317817, long: 174.773934 },
}, {
  name: "C",
  address: "213 ",
  location: { lat: -41.295817, long: 174.773934 },
}, {
  name: "C",
  address: "213 ",
  location: { lat: -41.275817, long: 174.787934 },
}, {
  name: "C",
  address: "213 ",
  location: { lat: -41.295817, long: 174.806934 },
}]

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




    let markers = someData.map((thePlace, i) => {
      return (
        <div key={`mapMarker${i}`}>
          <Marker position={[thePlace.location.lat, thePlace.location.long]} >
            <Popup>
              <h1>{thePlace.name}</h1>
            </Popup>
          </Marker>
        </div>
      )
    });


    return (
      <div>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />

          {markers}

        </Map>
      </div >
    );
  }
}

// ReactDOM.render(<Map />, document.getElementById('container'))


export default AMap

