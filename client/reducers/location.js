
const initialState = {
  lat: -41.296817,
  long: 174.773934,
  zoom: 15,
  isFetching: false,
  hasLocation: false
}

export default function location(state = initialState, action) {
  switch (action.type) {
    case 'GETTING_LOCATION':
      return {
        ...state,
        isFetching: true,
        hasLocation: false
      }
    case 'RECEIVED_LOCATION':
      return {
        ...state,
        isFetching: false,
        hasLocation: action.hasLocation,
        lat: action.lat,
        long: action.long,
        zoom: action.zoom
      }
    case 'FETCH_LOCATION_ERROR':
      return {
        ...state,
        isFetching: false,
        hasLocation: false
      }
    default:
      return state
  }
}