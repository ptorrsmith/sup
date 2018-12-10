// CHILD OF NAV

import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

const HowToUse = () => (

    <div>

        <div className="how_to_use_header">
            <h2>How to Use <em>Sup</em>:</h2>
        </div>

        <div className="how_to_use_body">
            <p>
              Welcome to <em>SUP</em> Lets get started!
            <ul>
                    <li>Tap on the Map to find a bed, a meal, a food parcel or other service.</li>
                    <li>Don't worry about telling the map where you are! We'll grab that info for you.</li>
                    <li>Use the box on the bottom left to filter for the services you're looking for.</li>
                    <li>If you want the address just zoom in on the map marker or tap the marker for more info.</li>
                </ul>
                
        </p>
        </div>

        {/* Information about what the website provides */}

    </div>
)

export default HowToUse
