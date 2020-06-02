import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Button, Container, Typography, CircularProgress, CardMedia } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { connect } from "react-redux";
import { getMovie } from "../redux/actions/actorActions";

const movieImage = require("../assets/A-New-Hope.jpg");

const styles = (theme) => ({
  ...theme.styles,
  movieContainer: {
    marginTop: "3rem"
  },
  movieDetailsContainer: {
    marginTop: "3rem",
    display: "flex"
  },
  movieDetails: {
    padding: "2rem",
    "& h4": {
      marginBottom: "3rem"
    },
    "& p": {
      marginBottom: "2rem"
    }
  },
  movieImage: {
    width: 350,
    height: 450
  }
});

const MovieDetails = ({ classes, getMovie, movie, loading }) => {
  const { movieId } = useParams();
  const history = useHistory();

  useEffect(() => {
    getMovie(movieId);
  }, [getMovie, movieId]);

  return (
    <Container maxWidth='lg' className={classes.movieContainer}>
      {loading ? (
        <CircularProgress size={150} className={classes.spinnerDiv} />
      ) : (
        <React.Fragment>
          <Button onClick={() => history.push("/")}>
            <ArrowBackIcon color='primary' /> Back to actors search
          </Button>
          <Container className={classes.movieDetailsContainer}>
            <CardMedia
              className={classes.movieImage}
              component='img'
              alt='Movie Image'
              image={movieImage}
            />
            <div className={classes.movieDetails}>
              <Typography variant='h4' gutterBottom>
                {movie.title}
              </Typography>
              <Typography gutterBottom>
                <strong>Director:</strong> {movie.director}
              </Typography>
              <Typography gutterBottom>
                <strong>Producer:</strong> {movie.producer}
              </Typography>
              <Typography color='textSecondary' gutterBottom>
                <strong>Release Date:</strong> {movie.release_date}
              </Typography>
              <Typography gutterBottom>
                <strong>Opening Crawl:</strong> {movie.opening_crawl}
              </Typography>
            </div>
          </Container>
        </React.Fragment>
      )}
    </Container>
  );
};

MovieDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  getMovie: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  movie: state.actor.movie,
  loading: state.actor.loading
});

export default connect(mapStateToProps, { getMovie })(withStyles(styles)(MovieDetails));
