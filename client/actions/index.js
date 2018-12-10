
// import { getData } from '../utils/tempData'
import { getProvidersAndServices, getProvider, setProviderMessageAPI } from '../utils/testApi'

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
    currentProvider : provider
  }
}

// Ruby's actions/thunks for LiveUpdate:
// SetQtyRemaining
// SetUpdate
// SetStatus

export const setServiceQtyRemaining = (serviceId, quantity) => {
  return dispatch => {
    dispatch({ 
    type: 'SET_SERVICE_QTY_REMAINING', 
    serviceId: serviceId, 
    quantity: quantity
  })
  }
}

export const setServiceStatus = (serviceId, status) => {
  return dispatch => {
// stuff goes here
    dispatch({ type: 'SET_SERVICE_STATUS' })
  }
}

export const setProviderMessage = (providerId, message) => {
  return dispatch => {
    
    // stuff goes here
    setProviderMessageAPI(providerId, message).then((result) => {
        if (result.result == 1) {
          // console.log('confirming action 1', result)
          dispatch({ type: 'GETTING_PROVIDER' })
          getProvider(providerId).then((data) => {
            // console.log("Actions indexedDB, fetchProvider, data", data)
            dispatch({
              type: 'RECEIVED_PROVIDER',
              currentProvider: data
            })
          }).catch(() => {
            dispatch({
              type: 'FETCH_PROVIDER_ERROR'
            })
          })
        } else {
          // console.log('what else gives us:', result)
        }

      // console.log('what is result from the actions', result)
    // dispatch ({ 
    //   type: 'SET_PROVIDER_MESSAGE',
    //   message: message
    //   // Stuff needs to go here, what is changing in the state?
    //    })

      })
  }
}