import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import themeFile from "./util/theme";

import SearchBar from "./components/SearchBar";
// import ActorList from "./components/actors/ActorList";
import MovieDetails from "./components/MovieDetails";

import { Provider } from "react-redux";
import store from "./redux/store";
import { getActors } from "./redux/actions/actorActions";

const theme = createMuiTheme(themeFile);

const App = () => {
  useEffect(() => {
    store.dispatch(getActors());
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <SearchBar />
              {/* <ActorList /> */}
            </Route>
            <Route exact path='/movie/:movieId'>
              <MovieDetails />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
};

export default App;
