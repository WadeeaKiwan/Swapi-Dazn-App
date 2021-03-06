import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Grid, Card, CardMedia, CardContent, Typography, Slide } from "@material-ui/core";

const styles = (theme) => ({
  ...theme.styles,
  actorContainer: {
    display: "grid"
  },
  actorCard: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center"
    },
    [theme.breakpoints.only("md")]: {
      flexDirection: "column",
      alignItems: "center"
    }
  },
  actorImage: {
    width: 200
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
      marginBottom: "0.5rem",
      color: theme.palette.primary.main
    }
  }
});

const ActorItem = ({ classes, actor }) => {
  return (
    <Grid item xs={12} md={6} className={classes.actorContainer}>
      <Slide in direction='up' timeout={1000}>
        <Card className={classes.actorCard}>
          <CardMedia
            className={classes.actorImage}
            component='img'
            alt='Profile Avatar'
            image={"/assets/profile-avatar.png"}
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
              {actor.films.map((film) => (
                <Link key={film.episode_id} to={`/movie/${film.url.match(/[1-6]/g)}`}>
                  {film.title}
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </Slide>
    </Grid>
  );
};

ActorItem.propTypes = {
  classes: PropTypes.object.isRequired,
  actor: PropTypes.object.isRequired
};

export default withStyles(styles)(ActorItem);
