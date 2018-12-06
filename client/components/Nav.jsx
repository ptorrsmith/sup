// PARENT OF ABOUT, HOW TO USE, LOGIN, REGISTER
// CHILD OF APP

import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Nav = () => (
    <React.Fragment>

        {/* About the website, contact details, etc */}
        <About />

        {/* INstructions for how to use the website */}
        <HowToUse />


        {/* STRETCH GOALS BELOW */}


        {/* Allow the admin to log in */}
        <LogIn />

        {/* Allow someone to register a new login */}
        <Register />

    </React.Fragment>
)

export default Nav