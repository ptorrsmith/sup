
const initialState = {
  loggedIn: false,
  providerId: 0
};

export default function fakeAuth(state = initialState, action) {
  switch (action.type) {
    case "AUTH_LOGIN":
      return {
        ...state,
        loggedIn: true,
        providerId: action.providerId
      };
    case "AUTH_LOGOUT":
      return {
        ...state,
        loggedIn: false
      };
    default:
      return state;
  }
}
