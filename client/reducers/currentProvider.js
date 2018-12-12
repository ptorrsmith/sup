

const initialState = {
  currentProvider: {},
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_PROVIDER':
      return {
        ...state,
        currentProvider: action.currentProvider
      }
      case 'RECEIVED_PROVIDER':
        return {
          ...state,
          currentProvider: action.currentProvider
        }
    default:
      return state
  }
}

