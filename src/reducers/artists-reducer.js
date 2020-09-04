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
          profile: action.currentArtist
        }
      };
    }
    case "RECEIVE_ARTIST_PROFILE_ERROR": {
      return {
        ...state,
        status: "Error",
      };
    }
    default: {
      return state;
    }
  }
}
