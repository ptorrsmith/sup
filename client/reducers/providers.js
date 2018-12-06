
import {getData} from '../utils/tempData'


const initialState = {
  providers: [],
  isFetching: false
}


export const fetchData = () => {
  return dispatch => {
    dispatch({type : 'GETTING_PROVIDERS'})

    getData().then( (data) => {

      addData(data)

      dispatch({
        type: 'RECEIVED_PROVIDERS',
        providers: data
      })
    })
  }
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