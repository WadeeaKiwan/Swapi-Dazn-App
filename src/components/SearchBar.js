import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Container, Typography, TextField, Button, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

import { connect } from "react-redux";
import { searchActors } from "../redux/actions/actorActions";

const styles = (theme) => ({
  ...theme.styles,
  header: {
    marginTop: "1rem"
  },
  searchContainer: {
    display: "flex"
  },
  searchButton: {
    marginTop: 16,
    marginBottom: 8,
    boxShadow: "none"
  }
});

const SearchBar = ({ classes, searchActors }) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    searchActors(searchText);
  }, [searchActors, searchText]);

  const searchChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  const searchButtonHandler = (e) => {
    searchActors(searchText);
  };

  return (
    <Container maxWidth='lg'>
      <Typography variant='h3' className={classes.header}>
        STAR WARS
      </Typography>
      <div className={classes.searchContainer}>
        <TextField
          id='search'
          name='searchText'
          placeholder='Search for movie actors'
          fullWidth
          margin='normal'
          variant='outlined'
          className={classes.searchText}
          value={searchText}
          onChange={searchChangeHandler}
          InputProps={{
            endAdornment: (
              <IconButton
                onClick={() => {
                  setSearchText("");
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
          disabled={searchText.length < 2}
          onClick={searchButtonHandler}
        >
          <SearchIcon />
        </Button>
      </div>
    </Container>
  );
};

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
  searchActors: PropTypes.func.isRequired
};

export default connect(null, { searchActors })(withStyles(styles)(SearchBar));
