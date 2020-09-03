const initialState = {
  token: null,
  status: "idle",
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_ACCESS_TOKEN': {
      return {
        ...state,
        status: 'Loading',
      }
    }
    case 'RECEIVE_ACCESS_TOKEN': {
      return {
        ...state,
        token: action.token,
        status: 'Idle',
      }
    }
    case 'RECEIVE_ACCESS_TOKEN_ERROR': {
      return {
        ...state,
        status: 'Error',
      }
    }
    default: {
      return state;
    }
  }
}
