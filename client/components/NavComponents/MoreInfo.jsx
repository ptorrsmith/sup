import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

const MoreInfo = () => (
  <span>
    <span className="more_info_header">
      <h2>
        How to Use <em>Sup</em>:
      </h2>
    </span>

    <span className="more_info_body">
      <p>If you're in immediate danger, please call 111.</p>
      <p>If you're needing help from the Refuge, please call them on 0800 000 000.</p>
    </span>

    {/* Information about what the website provides */}
  </span>
);

export default MoreInfo;
