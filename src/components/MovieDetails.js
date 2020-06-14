import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  Container,
  Typography,
  CircularProgress,
  CardMedia,
  Slide
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { connect } from "react-redux";
import { getMovie } from "../redux/actions/actorActions";

const styles = (theme) => ({
  ...theme.styles,
  movieContainer: {
    marginTop: "3rem"
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
  },
  movieDetailsContainer: {
    marginTop: "3rem",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center"
    }
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
    maxWidth: 400
  }
});

const MovieDetails = ({ classes, getMovie, movie, loading }) => {
  const { movieId } = useParams();
  const history = useHistory();

  useEffect(() => {
    getMovie(movieId);
  }, [getMovie, movieId]);

  return (
    <Slide in direction='left' timeout={800}>
      <Container maxWidth='lg' className={classes.movieContainer}>
        {loading ? (
          <CircularProgress size={150} className={classes.spinnerDiv} />
        ) : (
          <React.Fragment>
            <Button onClick={() => history.push("/")}>
              <ArrowBackIcon color='primary' /> Back to actors
            </Button>
            <Container className={classes.movieDetailsContainer}>
              <CardMedia
                className={classes.movieImage}
                component='img'
                alt='Movie Image'
                image={movie.photoUrl}
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
    </Slide>
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
