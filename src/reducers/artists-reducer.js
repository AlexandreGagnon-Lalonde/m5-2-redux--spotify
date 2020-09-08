const initialState = {
  currentArtist: null,
  status: "idle",
};

export default function artistsReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ARTIST_PROFILE": {
      return {
        ...state,
        status: "Loading",
      };
    }
    case "RECEIVE_ARTIST_PROFILE": {
      return {
        ...state,
        status: "Idle",
        currentArtist: {
          profile: action.currentArtist,
        }
      };
    }
    case "RECEIVE_ARTIST_PROFILE_ERROR": {
      return {
        ...state,
        status: "Error",
      };
    }
    case "FINISH_RECEIVING_ALL_ARTIST_PROFILE": {
      return {
        ...state,
        status: "Finish",
      };
    }
    case "RECEIVE_TOP_TRACKS": {
      return {
        ...state,
        status: "Idle",
        topTracks: {
          tracks: action.topTracks,
        }
      };
    }
    case "PLAY_SONG": {
      return {
        ...state,
        status: "active",
      };
    }
    case "PAUSE_SONG": {
      return {
        ...state,
        status: "pause",
      };
    }
    case "STOP_SONG": {
      return {
        ...state,
        status: "stop",
      };
    }
    default: {
      return state;
    }
  }
}
