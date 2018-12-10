
// import { getData } from '../utils/tempData'
import { getProvidersAndServices, getProvider, saveProvider as saveProviderApi, saveService as saveServiceApi } from '../utils/testApi'


export const fetchProvidersAndServices = () => {
  console.log("Actions index fetchProvidersAndServices")
  return dispatch => {
    console.log("Actions index fetchProviders dispatch")
    dispatch({ type: 'GETTING_PROVIDERS' })
    getProvidersAndServices().then((providersAndServices) => {
      console.log("Actions index fetchProvidersAndServices providersAndServices>>>>>>>>>>", providersAndServices)
      dispatch({
        type: 'RECEIVED_PROVIDERS',
        providers: providersAndServices
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
        // TO DO UPDATE All our providerServices with these updates
      })
    })
  }
}

export const fetchProvider = (id) => {
  return dispatch => {
    dispatch({ type: 'GETTING_PROVIDER' })
    getProvider(id).then((data) => {
      console.log("Actions indexedDB, fetchProvider, data", data)
      dispatch({
        type: 'RECEIVED_PROVIDER',
        currentProvider: data
      })
    }).catch(() => {
      dispatch({
        type: 'FETCH_PROVIDER_ERROR'
      })
    })
  }
}


export const saveProvider = (providerInfo) => {
  return dispatch => {
    dispatch({ type: 'SAVING_PROVIDER' })
    saveProviderApi(providerInfo)
      .then(result => {
        console.log("actions, index saveProvider result = ", result)
      })
  }
}

export const saveService = (serviceInfo) => {
  return dispatch => {
    dispatch({ type: 'SAVING_SERVICE' })
    saveServiceApi(serviceInfo)
      .then(result => {
        console.log("actions, index saveService result = ", result)
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
    currentProvider: provider
  }
}




