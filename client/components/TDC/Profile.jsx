
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Divider from '@material-ui/core/Divider';
// import { theBackground, grid_container, profile_header, profole_body } from '../../../public/style'


import {setCurrentProvider} from '../../actions'

function setCurrentProfile(dispatch) {
    // dispatch(setCurrentProvider(
    //     {
    //       id: 1,
    //       name: 'The Mens Night Shelter',
    //       description: "We provide 3 levels of accommodation support:<br> <br>stage 1: dormitory style accommodation which including shower and laundry facilities ($10 a night)<br>stage 2: hostel room accommodation ($80 a week)<br>stage 3: community support (tempoary emergency shelter)<br><br>Dormitory services include a bed for the night, shower facilities, clothes washed, cup of tea. Occasionally some light food is donated and made available.<br><br>Facilities: Bathroom, Laundry & Food.",
    //       address: "304 Taranki St, Mt. Cook, Wellington 6011",
    //       phone: "(04) 385-9546",
    //       updateMessage: "fully functional",
    //       lat: -41.300598,
    //       long: 174.774082,
    //       email: "menshelter@hotmail.com",
    //       websiteUrl: "http://wellingtonnightshelter.org.nz/",
    //       hours: "Open: 7 days a week, all year round<br>Checkin: 5:30pm – 9:00pm<br>Checkout: 6:00am – 7:30am",
    //     }
    // ))
}

class Profile extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
 
        return (

            <div>
                <div className="theBackground">
                    {/* <div classname="grid_container profileContainer"> */}
                    <div className="profileContainer">
                        {/* <div classname="profile_header profileImage"> */}
                        <div className="profileHeader">
                            <img src="/images/img-1.jpeg" className="profileImage"></img>
                        </div>
                        <fieldset className="profileInfo">
                            <h3>{this.props.provider.name ? this.props.provider.name : ""}</h3>
                            <p>{this.props.provider.address ? this.props.provider.address : ""}</p>
                            <p>{this.props.provider.phone ? this.props.provider.phone : ""}</p>
                            <p>Site: {this.props.provider.websiteUrl ? this.props.provider.websiteUrl : ""}</p>
                            <div>Hours: {this.props.provider.hours ? this.props.provider.hours.split("<br>").map( (item,i) => (<p key={"time"+i}>{item}</p>) ) : ""}</div>
                        </fieldset>

                        <fieldset className="profileDescription">
                            {/* <div className="profile_body"> */}
                            <fieldset>
                                <span>{this.props.provider.updateMessage ? this.props.provider.updateMessage : ""}</span>
                            </fieldset>
                            <div>
                                <button onClick={() => {setCurrentProfile(this.props.dispatch)}}>getInfo</button>
                                <div>{this.props.provider.description ? this.props.provider.description.split("<br>").map( (item,i) => (<p key={"desc"+i}>{item}</p>) ) : ""}</div>
                            </div>
                        </fieldset>
                    </div>
                </div>

            </div>

        )
    }
}


const mapStateToProps = (state) =>{
    return {
        provider : state.currentProvider.provider
    }
}

export default connect(mapStateToProps)(Profile)








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











