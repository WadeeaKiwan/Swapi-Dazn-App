import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";

import { connect } from "react-redux";

const styles = (theme) => ({
  ...theme.styles,
  root: {
    "& > *": {
      margin: theme.spacing(2)
    }
  }
});

const PaginationBar = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Pagination count={11} size='large' color='secondary' />
    </div>
  );
};

PaginationBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(null, {})(withStyles(styles)(PaginationBar));
