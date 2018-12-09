import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HowToUse from "../NavComponents/HowToUse";
import About from "../NavComponents/About";
import MoreInfo from "../NavComponents/MoreInfo";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      {/* Getting started */}
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Getting started</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {/* <Typography> */}
          <HowToUse />
          {/* </Typography> */}
        </ExpansionPanelDetails>
      </ExpansionPanel>

      {/* About panel */}
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>About</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {/* <Typography> */}
          <About />
          {/* </Typography> */}
        </ExpansionPanelDetails>
      </ExpansionPanel>
      {/* More info panel */}
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>More Info</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {/* <Typography> */}
          <MoreInfo />
          {/* </Typography> */}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleExpansionPanel);
