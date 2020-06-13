import React, { useState } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Container, Grid, CircularProgress, Typography } from "@material-ui/core";

import ActorItem from "./ActorItem";
import PaginationBar from "../PaginationBar";

const styles = (theme) => ({
  ...theme.styles,
  actorListContainer: {
    marginTop: "1rem"
  },
  spinnerDiv: {
    position: "absolute",
    top: "45%",
    left: "30%",
    [theme.breakpoints.up("sm")]: {
      left: "35%"
    },
    [theme.breakpoints.up("md")]: {
      left: "40%"
    }
  }
});

const ActorList = ({ classes, actors, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(8);

  const indexOfLastActor = currentPage * perPage;
  const indexOfFirstActor = indexOfLastActor - perPage;
  const currentActors = actors.slice(indexOfFirstActor, indexOfLastActor);

  const paginate = (currentPage) => setCurrentPage(currentPage);

  return (
    <Container maxWidth='lg' className={classes.actorListContainer}>
      {loading ? (
        <CircularProgress size={150} className={classes.spinnerDiv} />
      ) : (
        <React.Fragment>
          {actors.length ? (
            <React.Fragment>
              <Grid container spacing={5}>
                {currentActors.map((actor) => {
                  return <ActorItem key={actor.url} actor={actor} />;
                })}
              </Grid>
              <PaginationBar perPage={perPage} totalActors={actors.length} paginate={paginate} />
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
