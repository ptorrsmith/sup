
// import { getData } from '../utils/tempData'
import { getData } from '../utils/testApi'


export const fetchData = () => {
  return dispatch => {
    dispatch({ type: 'GETTING_PROVIDERS' })
    getData().then((data) => {
      dispatch({
        type: 'RECEIVED_PROVIDERS',
        providers: data
      })
    }).catch(() => {
      dispatch({
        type: 'FETCH_PROVIDERS_ERROR'
      })
    })
  }
}

export const fetchLiveUpdates = (services) => {
  return dispatch => {
    dispatch({ type: 'GETTING_LIVE_UPDATES' })
    getLiveUpdates(services).then((data) => {
      dispatch({
        type: 'RECEIVED_LIVE_UPDATES',
        // providers: data
      })
    })
  }
}

export const fetchProvider = () => {
  return dispatch => {
    dispatch({ type: 'GETTING_PROVIDER' })
    getData().then((data) => {
      dispatch({
        type: 'RECEIVED_PROVIDER',
        provider: data
      })
    }).catch(() => {
      dispatch({
        type: 'FETCH_PROVIDER_ERROR'
      })
    })
  }
}

export function setCurrentView(lat1, long1, lat2, long2) {
  return {
    type: 'SET_CURRENT_VIEW',
    latitude1: lat1,
    longitude1: long1,
    latitude2: lat2,
    longitude2: long2
  }
}


export function setCurrentService(service) {
  return {
    type: 'SET_CURRENT_SERVICE',
    service
  }
}


export function setCurrentProvider(provider) {
  return {
    type: 'SET_CURRENT_PROVIDER',
    provider
  }
}


