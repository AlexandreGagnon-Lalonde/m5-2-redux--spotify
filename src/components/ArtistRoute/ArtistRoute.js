import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { fetchArtistProfile } from "../../helpers/api-helpers";
import { receiveArtistProfile } from "../../action";

const ArtistRoute = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.token);
  const currentArtist = useSelector((state) => state.artists.currentArtist);
  const artistId = useParams();

  React.useEffect(() => {
    if (!accessToken) {
      return;
    }
    fetchArtistProfile(accessToken, artistId.id).then((profile) => {
      dispatch(receiveArtistProfile(profile));
    });
  }, [accessToken]);

  if (!currentArtist) {
    return "Loading";
  } else {
    return (
      <div>
        <img></img>
        <h2>{currentArtist.profile.name}</h2>
        <p>{currentArtist.profile.followers.total} Followers</p>
        <h3>Tags</h3>
        <ul>
          <li>{currentArtist.profile.genres[0]}</li>
          <li>
            {currentArtist.profile.genres[1]
              ? currentArtist.profile.genres[1]
              : null}
          </li>
        </ul>
      </div>
    );
  }
};

export default ArtistRoute;
