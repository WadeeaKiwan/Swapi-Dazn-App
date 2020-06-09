import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Container, Grid, CircularProgress, Typography } from "@material-ui/core";

import ActorItem from "./ActorItem";
import PaginationBar from "../PaginationBar";

const styles = (theme) => ({
  ...theme.styles,
  actorListContainer: {
    marginTop: "1rem"
  }
});

const ActorList = ({ classes, actors, loading }) => {
  return (
    <Container maxWidth='lg' className={classes.actorListContainer}>
      {loading ? (
        <CircularProgress size={150} className={classes.spinnerDiv} />
      ) : (
        <React.Fragment>
          {actors ? (
            <React.Fragment>
              <Grid container spacing={5}>
                {actors.map((actor) => {
                  return <ActorItem key={actor.url} actor={actor} />;
                })}
              </Grid>
              <PaginationBar />
            </React.Fragment>
          ) : (
            <div className={classes.spinnerDiv}>
              <Typography variant='h4'>No actors found.</Typography>
            </div>
          )}
        </React.Fragment>
      )}
    </Container>
  );
};

ActorList.propTypes = {
  classes: PropTypes.object.isRequired,
  actors: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default withStyles(styles)(ActorList);
