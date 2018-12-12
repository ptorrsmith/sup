import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";

const MoreInfo = () => (
  <span>
    
    <Typography variant="h6" gutterBottom>
        Do you need help?:
        </Typography>
        <Divider />
<Typography variant="body1" gutterBottom>
      <p>If you're in immediate danger, please call 111.</p>
      <p>If you're needing help from the Refuge, please call them on 0800 REFUGE or 0800 733 843.</p>
      <p>If you'd like to get ahold of us or you have a question for the team, then pop us a message via whats-sup@gmail.com</p>
      </Typography>
  </span>
  
    );
    
    export default MoreInfo;
