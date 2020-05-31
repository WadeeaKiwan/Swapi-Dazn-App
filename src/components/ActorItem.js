import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  ...theme.styles
});

const ActorItem = ({ classes }) => {
  return <div></div>;
};

ActorItem.propTypes = {};

export default withStyles(styles)(ActorItem);
