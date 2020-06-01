import React, { useState } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

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

const SearchBar = ({ classes }) => {
  const [searchField, setSearchField] = useState("");

  const searchChangeHandler = (e) => {
    setSearchField(e.target.value);
    if (e.target.value.length >= 3) {
      console.log("hello");
    }
    console.log(e.target.value);
  };

  return (
    <Container maxWidth='lg'>
      <Typography variant='h3'>STAR WARS</Typography>
      <div className={classes.searchContainer}>
        <TextField
          id='search'
          placeholder='Search for movie actors'
          fullWidth
          margin='normal'
          variant='outlined'
          className={classes.searchField}
          value={searchField}
          onChange={searchChangeHandler}
        />
        <Button variant='contained' color='secondary' className={classes.searchButton}>
          <SearchIcon />
        </Button>
      </div>
    </Container>
  );
};

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(null, {})(withStyles(styles)(SearchBar));
