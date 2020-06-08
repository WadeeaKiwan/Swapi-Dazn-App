import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Container, Typography, TextField, Button, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

import ActorList from "./actors/ActorList";
import { connect } from "react-redux";
// import { searchActors } from "../redux/actions/actorActions";
// import { SEARCH_ACTORS } from "../redux/types";
// import store from "../redux/store";

const styles = (theme) => ({
  ...theme.styles,
  searchContainer: {
    display: "flex"
  },
  searchButton: {
    marginTop: 16,
    marginBottom: 8,
    boxShadow: "none"
  }
});

const SearchBar = ({ classes, actors, loading }) => {
  const [searchField, setSearchField] = useState("");
  const [filteredActors, setFilteredActors] = useState([]);

  useEffect(() => {
    if (searchField.length >= 2) {
      setFilteredActors(
        actors.filter((actor) => actor.name.toLowerCase().indexOf(searchField.toLowerCase()) !== -1)
      );
    } else {
      setFilteredActors(actors);
    }
    // store.dispatch({ type: SEARCH_ACTORS, payload: filteredActors });
  }, [actors, setFilteredActors, searchField]);

  const searchChangeHandler = (e) => {
    setSearchField(e.target.value);
  };

  const searchButtonHandler = (e) => {
    setFilteredActors(
      filteredActors.filter(
        (actor) => actor.name.toLowerCase().indexOf(searchField.toLowerCase()) !== -1
      )
    );
  };

  return (
    <Container maxWidth='lg'>
      <Typography variant='h3'>STAR WARS</Typography>
      <div className={classes.searchContainer}>
        <TextField
          id='search'
          name='searchField'
          placeholder='Search for movie actors'
          fullWidth
          margin='normal'
          variant='outlined'
          className={classes.searchField}
          value={searchField}
          onChange={searchChangeHandler}
          InputProps={{
            endAdornment: (
              <IconButton
                onClick={() => {
                  setSearchField("");
                  setFilteredActors(actors);
                }}
              >
                <ClearIcon />
              </IconButton>
            )
          }}
        />
        <Button
          variant='contained'
          color='secondary'
          className={classes.searchButton}
          disabled={searchField.length < 2}
          onClick={searchButtonHandler}
        >
          <SearchIcon />
        </Button>
      </div>
      <ActorList actors={filteredActors} loading={loading} />
    </Container>
  );
};

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
  actors: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  actors: state.actor.actors,
  loading: state.actor.loading
});

export default connect(mapStateToProps, {})(withStyles(styles)(SearchBar));
