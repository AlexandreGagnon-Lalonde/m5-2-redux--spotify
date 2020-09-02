import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import ArtistRoute from "../ArtistRoute";

const DEFAULT_ARTIST_ID = "5j4HeCoUlzhfWtjAfM1acR";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Route path="/artist/:id">
          <ArtistRoute />
        </Route>
        <Route exact path="/">
          <Redirect to={`/artist/${DEFAULT_ARTIST_ID}`} />
        </Route>
      </Router>
    </>
  );
};

export default App;
