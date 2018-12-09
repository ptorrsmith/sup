// CHILD OF VIEW PREVIEW - REDIRECTS HERE FROM PROFILE LIST

import React from 'react'
// import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchProvider } from '../../actions/index'

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
        const id = this.props.match.params.id
        this.props.fetchProvider(id)
    }

    render() {
        return (

            <div className="view_profile_body">

                <div>
                    <p>Admin Profile</p>
                    <p>Current provider name: {this.props.currentProvider.currentProvider.name}.</p>
                    
                </div>

                <div>

                </div>

            </div>

        )
    }
}


const mapStateToProps = ({providers, currentProvider}) => {
    return {
        providers,
        currentProvider
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProvider: (params) => {
            return dispatch(fetchProvider(params))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AdminProfile)