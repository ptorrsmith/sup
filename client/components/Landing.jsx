import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Map from './Map'

const Landing = () => (

        <div>

            <div className="app_header">
             {/* Main header to encompass all pages... */}
            </div>

            <React.Fragment>
                <Map />
            </React.Fragment>

            <div className="app_body">
                <p> NOTES: Map will go here, and will underlay the entire page.
                    Nav will sit on top in the left hand side.
                    The Admin page will be accessible after the user has logged in, but for the demonstration and for usability,
                    it can be accessed at /admin.
            </p>
            </div>

        </div>
)

export default Landing