import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

const MoreInfo = () => (
  <span>
    <span className="more_info_header">
      <h2>
        Do you need help?:
      </h2>
    </span>

    <span className="more_info_body">
      <p>If you're in immediate danger, please call 111.</p>
      <p>If you're needing help from the Refuge, please call them on 0800 REFUGE or 0800 733 843.</p>
      <p>If you'd like to get ahold of us or you ahve questiosn for teh team, then pop us a message via whats-sup@gmail.com</p>
    </span>
  </span>
  
    );
    
    export default MoreInfo;
