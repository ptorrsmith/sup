import React from "react";
// import { ReactLeaflet, LeafletMap, TileLayer, Marker, Popup } from 'leaflet'
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import { connect } from "react-redux";

import { setCurrentProvider } from "../actions";

class AMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: -41.296817,
      lng: 174.773934,
      zoom: 13,
      hasLocation: false
    };

    this.getLocation = this.getLocation.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setLocation);
    }
  }

  setLocation(position) {
    console.log("this has value", this);
    console.log("position is ", position);

    let lat = position.coords.latitude;
    let lng = position.coords.longitude;

    //Quick hack
    if (this.state.lat == lat) {
      lat += 0.000001;
    }

    this.setState({
      lat,
      lng,
      zoom: 16,
      hasLocation: true
    });
  }

  render() {
    const position = [this.state.lat, this.state.lng];

    let markers = [];
    if (this.props.providers) {
      markers = this.props.providers.map((thePlace, i) => {
        return (
          <div key={`mapMarker${i}`}>
            <Marker position={[thePlace.lat, thePlace.long]}>
              <Popup>
                <Link
                  to={`/profile/${thePlace.id}`}
                  onClick={() => {
                    this.props.dispatch(setCurrentProvider(thePlace));
                  }}
                >
                  {" "}
                  Go to profile{" "}
                </Link>
                <h3>{thePlace.name}</h3>
                <span>{thePlace.address}</span>
              </Popup>
            </Marker>
          </div>
        );
      });
    }

    if (this.state.hasLocation) {
      markers.push(
        <div key={`mapMarker${markers.length}`}>
          <Marker position={[this.state.lat, this.state.lng]}>
            <Popup>
              <h3>you Be Here</h3>
            </Popup>
          </Marker>
        </div>
      );
    }

    return (
      <div>
        <button onClick={this.getLocation}>Get location</button>
        <Map center={position} zoom={this.state.zoom}>
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
    providers: state.providers.providers
  };
};

export default connect(mapStateToProps)(AMap);
