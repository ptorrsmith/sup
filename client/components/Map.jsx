import React from "react";
// import { ReactLeaflet, LeafletMap, TileLayer, Marker, Popup } from 'leaflet'
import Button from "@material-ui/core/Button";
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
    super(props);
    // this.state = {
    //   lat: -41.296817,
    //   lng: 174.773934,
    //   zoom: 13,
    //   hasLocation: false
    // };

    // this.getLocation = this.getLocation.bind(this);
    // this.setLocation = this.setLocation.bind(this);
  }

  // getLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(this.setLocation);
  //   }

  // }

  // setLocation(position) {
  //   console.log("this has value", this);
  //   console.log("position is ", position);

  //   let lat = position.coords.latitude;
  //   let lng = position.coords.longitude;

  //   //Quick hack
  //   if (this.state.lat == lat) {
  //     lat += 0.000001;
  //   }

  //   this.setState({
  //     lat,
  //     lng,
  //     zoom: 16,
  //     hasLocation: true
  //   });
  // }

  handleZoomChange(params){

    console.log("Has zoomed ",params)

  }

  render() {
    const position = [this.props.location.lat, this.props.location.long];

    console.log("postion of the map is ",position)

    let zoomLevel = this.props.location.zoom

    const icon = L.icon({ 
      iconUrl: 'images/location.svg',
      iconSize:     [40, 50],
      iconAnchor:   [22, 94],
      popupAnchor:  [-3, -76],
    })

    const soupIcon = L.icon({ 
      iconUrl: 'images/soup.svg',
      iconSize:     [40, 50],
      iconAnchor:   [22, 94],
      popupAnchor:  [-3, -76],
    })

    const foodBankIcon = L.icon({ 
      iconUrl: 'images/foodbank.svg',
      iconSize:     [40, 50],
      iconAnchor:   [22, 94],
      popupAnchor:  [-3, -76],
    })

    const shelterIcon = L.icon({ 
      iconUrl: 'images/bed.svg',
      iconSize:     [40, 50],
      iconAnchor:   [22, 94],
      popupAnchor:  [-3, -76],
    })

    const adviceIcon = L.icon({ 
      iconUrl: 'images/advice.svg',
      iconSize:     [40, 50],
      iconAnchor:   [22, 94],
      popupAnchor:  [-3, -76],
    })

    const dropinIcon = L.icon({ 
      iconUrl: 'images/dropin.svg',
      iconSize:     [40, 50],
      iconAnchor:   [22, 94],
      popupAnchor:  [-3, -76],
    })

    const medicalIcon = L.icon({ 
      iconUrl: 'images/medical.svg',
      iiconSize:     [40, 50],
      iconAnchor:   [22, 94],
      popupAnchor:  [-3, -76],
    })

    const otherIcon = L.icon({ 
      iconUrl: 'images/heart.svg',
      iconSize:     [40, 50],
      iconAnchor:   [22, 94],
      popupAnchor:  [-3, -76],
    })

    let markers = [];
    if (this.props.providers) {
      markers = this.props.providers.map((thePlace, i) => {

        let theIcon = icon

        // console.log("the place is ",thePlace)
        if(thePlace.services[0] && thePlace.services[0].service_type_id == 3){
          theIcon = soupIcon
        }
        if(thePlace.services[0] && thePlace.services[0].service_type_id == 2){
          theIcon = foodBankIcon
        }
        if(thePlace.services[0] && thePlace.services[0].service_type_id == 1){
          theIcon = shelterIcon
        }
        if(thePlace.services[0] && thePlace.services[0].service_type_id == 4){
          theIcon = adviceIcon
        }
        if(thePlace.services[0] && thePlace.services[0].service_type_id == 5){
          theIcon = dropinIcon
        }
        if(thePlace.services[0] && thePlace.services[0].service_type_id == 6){
          theIcon = medicalIcon
        }
        if(thePlace.services[0] && thePlace.services[0].service_type_id == 7){
          theIcon = otherIcon
        }

        return (
          <div key={`mapMarker${i}`}>
            <Marker position={[thePlace.lat, thePlace.long]} icon={theIcon}>
              <Popup>
                <Link to={`/profile/${thePlace.id}`} onClick={ () => {this.props.dispatch(setCurrentProvider(thePlace)) } }>Click for More Info</Link>
                <h3>{thePlace.name}</h3>
                <span>{thePlace.address}</span>
              </Popup>
            </Marker>
          </div>
        );
      });
    }

    if (this.props.location.hasLocation) {
      markers.push(
        <div key={`mapMarker${markers.length}`}>
          <Marker position={position} icon={icon}>
            <Popup>
              <h3>You Are Here</h3>
            </Popup>
          </Marker>
        </div>
      );
    }

    return (
      <div>
      {/* <Button color="secondary" onClick={this.getLocation}>Get location</Button> */}
        <Map center={position} onzoomend={this.handleZoomChange} zoom={this.props.location.zoom}>
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />

          {markers}
        </Map>
      </div>
    );
  }
}






// ReactDOM.render(<Map />, document.getElementById('container'))
const mapStateToProps = state => {
  return {
    providers: state.providers.providers,
    location: state.location,
  };
};

export default connect(mapStateToProps)(AMap);
