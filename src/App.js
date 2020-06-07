import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import themeFile from "./util/theme";

import SearchBar from "./components/SearchBar";
import ActorList from "./components/actors/ActorList";
import MovieDetails from "./components/MovieDetails";

import { Provider } from "react-redux";
import store from "./redux/store";
import { getActors } from "./redux/actions/actorActions";

const theme = createMuiTheme(themeFile);

const App = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    store.dispatch(getActors());
    store.subscribe(() => {
      setActors(store.getState().actor.actors);
      setLoading(store.getState().actor.loading);
    });
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <SearchBar />
              {/* <ActorList actors={actors} loading={loading} /> */}
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
