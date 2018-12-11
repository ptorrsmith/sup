// CHILD OF NAV

import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";

const About = () => (
  <span>
   
    
    <Typography variant="h6" gutterBottom>
      About Sup:
      </Typography>
      <Divider />
   
      <span>
      <Typography variant="body1" gutterBottom >
        <em>SUP</em> is a kindness-focused Progessive Web Application (PWA for
        short) designed to help. If you're struggling or need a bit of a hand,{" "}
        <em>SUP</em> is here to point you in the direction of people or services
        who can get you moving in the right direction. 
        <Divider />
        Meet The <em>Sup</em>{" "} Team:
        <ul>
          <li>Bobbi Kerei - Visonary and Front end Developer</li>
          <li>Brandon Ross - Back end Developer</li>
          <li>James Turner - Full Stack Developer</li>
          <li>Peter Smith - Full Stack Developer</li>
          <li>Ruby Moyes - Full stack Developer</li>
        </ul>
        <Divider />
        </Typography>
    </span>
  </span>
);

export default About;
