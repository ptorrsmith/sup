

const initialState = {
  provider: {},
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_PROVIDER':
      return {
        ...state,
        provider: action.provider
      }
    default:
      return state
  }
}