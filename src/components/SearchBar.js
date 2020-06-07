import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Container, Typography, TextField, Button, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

import ActorList from "./actors/ActorList";
import { connect } from "react-redux";

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
  const [filteredActors, setFilteredActors] = useState(actors);

  useEffect(() => {
    setFilteredActors(actors);
  }, [setFilteredActors, actors]);

  const searchChangeHandler = (e) => {
    setSearchField(([e.target.name] = e.target.value));
    console.log(searchField);
    if (searchField.length >= 2) {
      setFilteredActors(
        filteredActors.filter(
          (actor) => actor.name.toLowerCase().indexOf(searchField.toLowerCase()) !== -1
        )
      );
      console.log(filteredActors);
    } else if (searchField.length === 0) {
      setFilteredActors(actors);
    }
  };

  const handleSearch = (e) => {
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
          onClick={handleSearch}
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
  actors: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  actors: state.actor.actors,
  loading: state.actor.loading
});

export default connect(mapStateToProps, {})(withStyles(styles)(SearchBar));
