import React, { Component } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { fetchArtistProfile } from "../../helpers/api-helpers";

const ArtistRoute = () => {
  const accessToken = useSelector((state) => state.auth.token);

  const artistId = useParams();

  React.useEffect(() => {
    if (!accessToken) {
      return;
    }

    fetchArtistProfile(accessToken, artistId.id);
  }, [accessToken]);

  return accessToken;
};

export default ArtistRoute;
