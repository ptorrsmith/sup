import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Divider from "@material-ui/core/Divider";
// import { theBackground, grid_container, profile_header, profole_body } from '../../../public/style'

import { setCurrentProvider, fetchProvider } from "../../actions";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    // get the provider from global redux state'
    // console.log("XXXX-id", id)
    console.log("DM XXXXXX-providers ", this.props.providers);
    // console.log("XXXXXX-props ", this.props)
    // console.log("XXXX-currentProvider", this.props.provider)
  }

  componentDidUpdate() {
    const id = this.props.match.params.id;
    // get the provider from global redux state'
    const currentProvider =
      this.props.providers.length > 0 &&
      this.props.providers.find(provider => provider.id == id);
    currentProvider && this.props.setCurrentProvider(currentProvider);
  }

  render() {
    let aProvider = this.props.provider;

    if (!aProvider) {
      aProvider = {
        id: 1,
        name: "Temp default provider",
        description: "Somthing isnt quite lining up",
        address: "??????",
        phone: "(04) ...---...",
        update_message: "not really functional",
        lat: -41.300598,
        long: 174.774082,
        email: "BlameBarry@Garry.com",
        website_url: "http://ComputerSaysNo.org.nz/",
        hours: "Open: untill something changes"
      };
    }

    return (
      <div>
        <div className="theBackground">
          {/* <div classname="grid_container profileContainer"> */}
          <div className="profileContainer">
            {/* <div classname="profile_header profileImage"> */}
            <div className="profileHeader">
              <img src="/images/img-1.jpeg" className="profileImage" />
            </div>
            <fieldset className="profileInfo">
              <h3>{aProvider.name ? aProvider.name : ""}</h3>
              <p>{aProvider.address ? aProvider.address : ""}</p>
              <p>{aProvider.phone ? aProvider.phone : ""}</p>
              <p>
                Site:{" "}
                {aProvider.website_url ? (
                  <a href={aProvider.website_url}>{aProvider.name}</a>
                ) : (
                  ""
                )}
              </p>
              <div>
                Hours:{" "}
                {aProvider.hours
                  ? aProvider.hours
                      .split("<br>")
                      .map((item, i) => <p key={"time" + i}>{item}</p>)
                  : ""}
              </div>
            </fieldset>

            <fieldset className="profileDescription">
              {/* <div className="profile_body"> */}
              <fieldset>
                <span>
                  {aProvider.update_message ? aProvider.update_message : ""}
                </span>
              </fieldset>
              <div>
                <div>
                  {aProvider.description
                    ? aProvider.description
                        .split("<br>")
                        .map((item, i) => <p key={"desc" + i}>{item}</p>)
                    : ""}
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    provider: state.currentProvider.currentProvider,
    providers: state.providers.providers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProvider: params => {
      return dispatch(fetchProvider(params));
    },
    setCurrentProvider: params => {
      return dispatch(setCurrentProvider(params));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

// return (

//     <div>
//         <div className="theBackground">
//             {/* <div classname="grid_container profileContainer"> */}
//             <div className="profileContainer">
//                 {/* <div classname="profile_header profileImage"> */}
//                 <div className="profileHeader">
//                     <img src="/images/img-1.jpeg" className="profileImage"></img>
//                 </div>
//                 <fieldset className="profileInfo">
//                     <h3>The Mens Night Shelter</h3>
//                     <p>Address: 304 Taranki St, Mt. Cook, Wellington 6011</p>
//                     <p>Phone: (04) 385-9546</p>
//                     <p>Site: http://wellingtonnightshelter.org.nz/</p>
//                     <p>Hours: "Open: 7 days a week, all year round</p>
//                     <p>Checkin: 5:30pm – 9:00pm</p>
//                     <p>Checkout: 6:00am – 7:30am"</p>
//                 </fieldset>

//                 <fieldset className="profileDescription">
//                     {/* <div className="profile_body"> */}
//                     <fieldset>
//                         <span>Updates Area</span>
//                     </fieldset>
//                     <div>
//                         <p>We provide 3 levels of accommodation support:</p>
//                         <p>stage 1: dormitory style accommodation which including shower and laundry facilities ($10 a night)</p>
//                         <p>stage 2: hostel room accommodation ($80 a week)</p>
//                         <p>stage 3: community support (tempoary emergency shelter)</p>
//                         <p>Dormitory services include a bed for the night, shower facilities, clothes washed, cup of tea. Occasionally some light food is donated and made available.</p>

//                     </div>
//                 </fieldset>
//             </div>
//         </div>

//     </div>

// )
