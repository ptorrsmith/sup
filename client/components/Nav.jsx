// PARENT OF ABOUT, HOW TO USE, LOGIN, REGISTER
// CHILD OF APP

import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import About from './About'
import HowToUse from './HowToUse'

const Nav = () => (

    <div>

    <div className="nav_header">
    <h1>Hello from the Nav component.</h1>
    </div>

    <div className="nav_body">

        {/* About the website, contact details, etc */}
        <About />

        {/* INstructions for how to use the website */}
        <HowToUse />


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