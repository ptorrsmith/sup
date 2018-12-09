
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
      // RUBY'S REDUCERS FOR LIVE UPDATE:

      // SET_QTY_REMAINING
      // SET_UPDATE
      // SET_STATUS
      
      case 'SET_QTY_REMAINING':
      return {
        ...state,
        /// SOMETHING HERE
      }
      case 'SET_UPDATE':
      return {
        ...state,
        /// SOMETHING HERE
      }
      case 'SET_STATUS':
      return {
        ...state,
        /// SOMETHING HERE
      }
    default:
      return state
  }
}

