import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Container, Grid, CircularProgress, Typography } from "@material-ui/core";

import { connect } from "react-redux";
import { getActors } from "../../redux/actions/actorActions";

import ActorItem from "./ActorItem";

const styles = (theme) => ({
  ...theme.styles
});

const ActorList = ({ classes, getActors, actors, loading }) => {
  useEffect(() => {
    getActors();
  }, [getActors]);

  return (
    <Container maxWidth='lg'>
      {loading ? (
        <CircularProgress size={150} className={classes.spinnerDiv} />
      ) : (
        <Grid container spacing={3}>
          {actors ? (
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
  getActors: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  actors: state.actor.actors,
  loading: state.actor.loading
});

export default connect(mapStateToProps, { getActors })(withStyles(styles)(ActorList));
