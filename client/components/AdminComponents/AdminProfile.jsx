// CHILD OF VIEW PREVIEW - REDIRECTS HERE FROM PROFILE LIST

import React from 'react'
// import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchData } from '../../actions/index'

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
        this.props.fetchData()
    }

    render() {
        return (

            <div className="view_profile_body">

                <div>
                    <p>Admin Profile</p>
                    <p>admin profile CL  {this.props.providers.providers.length}  more or less</p>
                    
                </div>

                <div>

                </div>

            </div>

        )
    }
}


const mapStateToProps = ({providers}) => {
    return {
        providers
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (params) => {
            return dispatch(fetchData(params))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AdminProfile)