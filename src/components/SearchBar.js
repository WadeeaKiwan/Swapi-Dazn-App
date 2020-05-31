import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  ...theme.styles
});

const SearchBar = ({ classes }) => {
  return <div></div>;
};

SearchBar.propTypes = {};

export default withStyles(styles)(SearchBar);
