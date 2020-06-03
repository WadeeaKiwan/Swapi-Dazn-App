import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Grid, Card, CardMedia, CardContent, Typography } from "@material-ui/core";

import { connect } from "react-redux";
import { getActorMovies } from "../../redux/actions/actorActions";

const profileAvatar = require("../../assets/profile-avatar.png");

const styles = (theme) => ({
  ...theme.styles,
  actorCard: {
    display: "flex"
  },
  actorImage: {
    width: 200,
    minHeight: 250
  },
  cardContent: {
    display: "flex"
  },
  actorDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    "&:first-child": {
      marginRight: "1.5rem"
    },
    "& h5": {
      marginBottom: "1rem"
    },
    "& a": {
      textDecoration: "none",
      marginBottom: "0.5rem"
    }
  }
});

const ActorItem = ({ classes, actor, getActorMovies, movies }) => {
  // useEffect(() => {
  //   getActorMovies(actor.url);
  // }, [getActorMovies, actor.url]);

  return (
    <Grid item key={actor.url} xs={12} md={6}>
      <Card className={classes.actorCard}>
        <CardMedia
          className={classes.actorImage}
          component='img'
          alt='Profile Avatar'
          image={profileAvatar}
        />
        <CardContent className={classes.cardContent}>
          <div className={classes.actorDetails}>
            <Typography variant='h5'>{actor.name}</Typography>
            <Typography>Born in {actor.birth_year}</Typography>
            <Typography>height {actor.height}</Typography>
            <Typography>{actor.gender}</Typography>
          </div>
          <div className={classes.actorDetails}>
            <Typography variant='h5'>Movies</Typography>
            {movies.map((movie) => (
              <Link key={movie.episode_id} to={`/movie/${movie.episode_id}`}>
                {movie.title}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

ActorItem.propTypes = {
  classes: PropTypes.object.isRequired,
  actor: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  movies: state.actor.movies
});

export default connect(mapStateToProps, { getActorMovies })(withStyles(styles)(ActorItem));
