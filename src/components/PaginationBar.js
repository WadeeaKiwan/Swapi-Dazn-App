import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const styles = (theme) => ({
  ...theme.styles,
  root: {
    "& > *": {
      margin: theme.spacing(2)
    },
    "& ul": {
      justifyContent: "center"
    }
  }
});

const PaginationBar = ({ classes, perPage, totalActors, paginate }) => {
  return (
    <div className={classes.root}>
      <Pagination
        count={Math.ceil(totalActors / perPage)}
        onChange={(e, page) => paginate(page)}
        size='large'
        color='secondary'
      />
    </div>
  );
};

PaginationBar.propTypes = {
  classes: PropTypes.object.isRequired,
  perPage: PropTypes.number.isRequired,
  totalActors: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired
};

export default withStyles(styles)(PaginationBar);
