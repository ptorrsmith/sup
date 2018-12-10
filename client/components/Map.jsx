import React from 'react'
// import { ReactLeaflet, LeafletMap, TileLayer, Marker, Popup } from 'leaflet'
import { Map, Marker, Popup, TileLayer, leafletElement } from 'react-leaflet'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


import { connect } from 'react-redux'

import {setCurrentProvider} from '../actions'


// const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet
// let someData = [{
//   name: "The Mens Night Sheltern",
//   address: "304 Taranki St, Mt. Cook, Wellington",
//   location: { lat: -41.300598, long: 174.774082 },
// }, {
//   name: "Compassion Soup Kitchen",
//   address: "132 Tory St, TeAro, Wellington",
//   location: { lat: -41.296888, long: 174.779067 },
// }, {
//   name: "Wellington City Mission",
//   address: "19 Gordon Place, Newtown, Wellington",
//   location: { lat: -41.315028, long: 174.779635 },
// }, {
//   name: "St Vincient De Paul Wellington",
//   address: "Level 1, 207 Riddiford Street, Newtown, Wellington",
//   location: { lat: -41.314738, long: 174.780324 },
// }, {
//   name: "The Salvation Army",
//   address: "204 Cuba Street, Te Aro, Wellington",
//   location: { lat: -41.295214, long: 174.774482 },
// },
// {
//   name: "DCM",
//   address: "2 Lukes Lane, Te Aro, Wellington",
//   location: { lat: -41.291628, long: 174.778409 },
// },
// {
//   name: "Wesley Methodist Church",
//   address: "75 Taranki Street, Te Aro, Wellington",
//   location: { lat: -41.2936975, long: 174.7786946 },
// },
// {
//   name: "Catacombs",
//   address: "Level 1, 131 Manners Street, Te Aro, Wellington",
//   location: { lat: -41.291941, long: 174.778335 },
// },
// {
//   name: "Evolve",
//   address: "Level 2 James Smith Building, Corner Cuba and Manners streets, Te Aro, Wellington",
//   location: { lat: -41.29077, long: 174.777131 },
// }]

class AMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: -41.296817,
      lng: 174.773934,
      zoom: 13
    }

  }

  render() {
    const position = [this.state.lat, this.state.lng];



    let markers = [];
    if (this.props.providers) {
      markers = this.props.providers.map((thePlace, i) => {
        return (
          <div key={`mapMarker${i}`}>
            <Marker position={[thePlace.lat, thePlace.long]} >
              <Popup>
                <Link to={`/profile/${thePlace.id}`} onClick={ () => {this.props.dispatch(setCurrentProvider(thePlace)) } }>Click for MoreInfo</Link>
                <h3>{thePlace.name}</h3>
                <span>{thePlace.address}</span>
              </Popup>
            </Marker>
          </div>
        )
      });
    }


    return (
      <div>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />

          {markers}

        </Map>
      </div >
    );
  }
}






// ReactDOM.render(<Map />, document.getElementById('container'))
const mapStateToProps = (state) => {
  return {
    providers: state.providers.providers
  }
}

export default connect(mapStateToProps)(AMap)

