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

export const receiveTopTracks = (topTracks) => ({
  type: "RECEIVE_TOP_TRACKS",
  topTracks,
});

export const finishReceivingAllArtistProfile = () => ({
  type: "FINISH_RECEIVING_ALL_ARTIST_PROFILE",
});

export const playSong = () => ({
  type: "PLAY_SONG",
});
export const pauseSong = () => ({
  type: "PAUSE_SONG",
});
export const stopSong = () => ({
  type: "STOP_SONG",
});

export const receiveRelatedArtists = (relatedArtists) => ({
  type: "RECEIVE_RELATED_ARTISTS",
  relatedArtists,
});
