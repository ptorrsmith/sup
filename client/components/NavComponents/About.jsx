// CHILD OF NAV

import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

const About = () => (
    <div>

        <div className="about_header">
            <h2>About Sup:</h2>
        </div>

        <div className="about_body">
            <p>
                <em>Sup</em> is a progressive web application specifically designed to provide support for New Zealanders in need.

        Sup gives users the opportunity to open and view service providers in Wellington, including their locations,
        facilities, opening and closing hours, and the availability of the service. Services include emergency shelters, food banks,
        bathroom facilities and soup kitchens.<br></br>

        Sup also allows registered providers to update their service details from the admin panel, and gives the users real-time updates
        directly from the service, notifying them about recent changes.<br></br>

        Sup is an independent site, currently being updated and maintained by students at Enspiral Dev Academy.<br></br>

        Meet The <em>Sup</em> Team:
        <ul>
                    <li>Bobbi Kerei - Founder, Developer</li>
                    <li>Brandon Ross - Developer</li>
                    <li>James Turner - Developer</li>
                    <li>Peter Smith - Developer</li>
                    <li>Ruby Moyes - Developer</li>
                </ul>
            </p>

        </div>

        {/* Information about what the website provides */}

    </div>

)

export default About