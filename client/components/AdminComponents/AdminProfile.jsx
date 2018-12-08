// CHILD OF VIEW PREVIEW - REDIRECTS HERE FROM PROFILE LIST
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchData } from '../../utils/testApi'



// TEMPORARY DATA
// import data from '../../utils/exampleData'

// let components = data.map( (item) => {
//     return components
// })

// console.log(components)

class AdminProfile extends React.Component {
    constructor(props) {
        super(props)

    }

    componentWillMount () {

    }

    render() {
        return (

            <div className="view_profile_body">

                <div>
                    <p>
                        Welcome to Admin Profile. Specific profile data will be displayed here.</p><br></br>
                    {/* There is supposed to be a link below here that reads 'edit this page's static contents?' but it doesn't seem to be working. Talk to Ruby and perhaps help her fix it when this functionality is necessary!</p> */}
                </div>

                <div>
                    <Link to={`/admin/${components.provider_id}/edit`}>
                        Edit this page's static contents?
        </Link>

            </div>

            </div>

        )
    }
}


const mapStateToProps = ({currentProvider}) => {
    return (
        currentProvider
    )
}

const mapDispatchToProps = (dispatch) => {
    return (
        dispatch
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminProfile)