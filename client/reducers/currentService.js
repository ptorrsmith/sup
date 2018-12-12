

const initialState = {
  service: {}
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_SERVICE':
      return {
        ...state,
        service: action.service
      }
    default:
      return state
  }
}