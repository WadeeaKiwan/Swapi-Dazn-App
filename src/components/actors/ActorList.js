import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Container, Grid, CircularProgress, Typography } from "@material-ui/core";

import ActorItem from "./ActorItem";

const styles = (theme) => ({
  ...theme.styles
});

const ActorList = ({ classes, actors, loading }) => {
  return (
    <Container maxWidth='lg'>
      {loading ? (
        <CircularProgress size={150} className={classes.spinnerDiv} />
      ) : (
        <Grid container spacing={3}>
          {actors.length > 0 ? (
            actors.map((actor) => {
              return <ActorItem key={actor.url} actor={actor} />;
            })
          ) : (
            <div className={classes.spinnerDiv}>
              <Typography variant='h4'>No actors found.</Typography>
            </div>
          )}
        </Grid>
      )}
    </Container>
  );
};

ActorList.propTypes = {
  classes: PropTypes.object.isRequired,
  actors: PropTypes.array.isRequired
};

export default withStyles(styles)(ActorList);
