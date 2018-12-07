// PARENT OF ABOUT, HOW TO USE, LOGIN, REGISTER
// CHILD OF APP

import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import About from './NavComponents/About'
import HowToUse from './NavComponents/HowToUse'

const Nav = () => (

    <div>

        <div className="nav_header">
            <h1>Sup?</h1>
        </div>

        <div className="nav_body">

            {/* About the website, contact details, etc */}
            <About />

            {/* INstructions for how to use the website */}
            <HowToUse />

            <hr></hr>

            <Router>
                <Link to='/admin'>Click here to use the Admin page.</Link>
            </Router>

            <p>Here is where the Log In component will go.</p>
            <p>Here is where the Register component will go.</p>

            {/* STRETCH GOALS BELOW

        Allow the admin to log in
        <LogIn />

        Allow someone to register a new login
        <Register />
    
    */}

        </div>

    </div>
)

export default Nav