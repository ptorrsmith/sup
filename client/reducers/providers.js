const initialState = {
  providers: [],
  isFetching: false
};

export default function providers(state = initialState, action) {
  switch (action.type) {
    case "GETTING_PROVIDERS":
      return {
        ...state,
        isFetching: true
      };
    // case 'GETTING_PROVIDER':
    // return {
    //   ...state,
    //   provider: action.provider
    // }
    case "RECEIVED_PROVIDERS":
      return {
        ...state,
        isFetching: false,
        providers: action.providers
      };
    case "FETCH_PROVIDERS_ERROR":
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
}
