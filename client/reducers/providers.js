

const initialState = {
  providers: [],
  isFetching: false
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'GETTING_PROVIDERS':
      return {
        ...state,
        isFetching: true
      }
    case 'RECEIVED_PROVIDERS':
      return {
        ...state,
        isFetching: false,
        providers: action.providers
      }
    default:
      return state
  }
}