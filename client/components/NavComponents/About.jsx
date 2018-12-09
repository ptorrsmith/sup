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
                <em>SUP</em> is a kindness focused Progessive Web Application (PWA for short) designed to help. If you're struggling or need a bit of a hand, <em>SUP</em> is here to point you in the direction of people or services who can get you moving in teh right direction.
    
        Meet The <em>Sup</em> Team:
        <ul>
                    <li>Bobbi Kerei - Visonary and Front end Developer</li>
                    <li>Brandon Ross - Back end Developer</li>
                    <li>James Turner - Full Stack Developer</li>
                    <li>Peter Smith - Full Stack Developer</li>
                    <li>Ruby Moyes - Front end Developer</li>
                </ul>
            </p>

        </div>

    </div>

)

export default About