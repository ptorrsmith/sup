// import React from 'react'
// import { ReactLeaflet } from 'leaflet'


// const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet

// class Map extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       lat: -41.296817,
//       lng: 174.773934,
//       zoom: 13
//     }
//   }

//   render() {
//     const position = [this.state.lat, this.state.lng];
//     return (
//       <LeafletMap center={position} zoom={this.state.zoom}>
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
//         />
//         <Marker position={position}>
//           <Popup>
//             A pretty popup. <br/>
//           </Popup>
//         </Marker>
//       </LeafletMap>
//     )
//   }
// }

// ReactDOM.render(<Map />, document.getElementById('container'))


// export default Map

