// CHILD OF NAV

import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

const HowToUse = () => (
    <div>

        <div className="how_to_use_header">
            <h2>How to Use <em>Sup</em>:</h2>
        </div>

        <div className="how_to_use_body">
            <p>
                To get started, here's what you do:
    
            <ul>
                    <li>If you're using the site for the first time, check that you are on a strong Wi-Fi signal. Or, just turn on your data.</li>
                    <li>You can move around the map using your mouse, if you're on a computer, or using your finger if you're on your phone.</li>
                    <li>You can move around the map to see different places in Wellington which provide services.</li>
                    <li>Click or press on an icon, and a pop-up will show on your screen. The pop-up shows information about the location you have selected.</li>
                    <li>Click on the pop-up box to view the full profile of a provider. You should view the profile page if you want to check the location, the service, the facilities and a special notice from the provider.</li>
                </ul>

                If you have any questions about the website, you can call call 0800 000 000 or email customerservice@sup.co.nz.
                <br></br><br></br>

                If you are noticing any bugs on the site unrelated to your internet connection, please call 0800 000 000 or email customerservice@sup.co.nz. We will endeavour to get back to you in 1-2 working days.
                <br></br><br></br>
                
                If you are a registered provider and are having issues unrelated to you internet connection, please call 0800 000 000, or email admin@sup.co.nz.
                
        </p>
        </div>

        {/* Information about what the website provides */}

    </div>
)

export default HowToUse