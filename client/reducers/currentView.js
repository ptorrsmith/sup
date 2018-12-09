


//just have a default wellington place for now
const initialState = {

  latitude1: -41.287167,
  longitude1: 174.763192,
  latitude2: -41.302579,
  longitude2: 174.791777
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_VIEW':
      return {
        ...state,
        latitude1: action.latitude1,
        longitude1: action.longitude1,
        latitude2: action.latitude2,
        longitude2: action.longitude2
      }
    default:
      return state
  }
}