import React from "react";
import "./App.css";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import themeFile from "./util/theme";

import SearchBar from "./components/SearchBar";
import ActorList from "./components/ActorList";

const theme = createMuiTheme(themeFile);

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <SearchBar />
      <ActorList />
    </MuiThemeProvider>
  );
};

export default App;
