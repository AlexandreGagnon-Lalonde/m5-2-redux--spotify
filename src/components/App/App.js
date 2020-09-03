import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { useDispatch } from 'react-redux';

import ArtistRoute from "../ArtistRoute";
import { requestAccessToken, receiveAccessToken, receiveAccessTokenError } from '../../action'

const DEFAULT_ARTIST_ID = "5j4HeCoUlzhfWtjAfM1acR";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(requestAccessToken());

    fetch('/spotify_access_token')
      .then(res => res.json())
      .then(token => {
        dispatch(receiveAccessToken(token.access_token));
      })
      .catch(err => {
        dispatch(receiveAccessTokenError());
      })
  }, [])

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
