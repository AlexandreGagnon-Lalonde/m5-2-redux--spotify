export const requestAccessToken = () => ({
  type: "REQUEST_ACCESS_TOKEN",
});

export const receiveAccessToken = (token) => ({
  type: "RECEIVE_ACCESS_TOKEN",
  token,
});

export const receiveAccessTokenError = () => ({
  type: "RECEIVE_ACCESS_TOKEN_ERROR",
});

export const requestArtistProfile = () => ({
  type: "REQUEST_ARTIST_PROFILE",
});

export const receiveArtistProfile = (currentArtist) => ({
  type: "RECEIVE_ARTIST_PROFILE",
  currentArtist,
});

export const receiveArtistProfileError = () => ({
  type: "RECEIVE_ARTIST_PROFILE_ERROR",
});
