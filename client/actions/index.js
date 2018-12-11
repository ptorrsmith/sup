//client/actions/index.js 
// import { getData } from '../utils/tempData'
import {
  getProvidersAndServices,
  getProvider,
  setProviderMessageAPI,
  setServiceStatusAPI,
  saveProvider as saveProviderApi,
  saveService as saveServiceApi,
  setServiceQtyRemainingAPI
} from '../utils/testApi'

// import { push } from 'react-router-redux'

export const fetchProvidersAndServices = () => {
  // console.log("Actions index fetchProvidersAndServices");
  return dispatch => {
    // console.log("Actions index fetchProviders dispatch");
    dispatch({
      type: "GETTING_PROVIDERS"
    });
    getProvidersAndServices()
      .then(providersAndServices => {
        // console.log(          "Actions index fetchProvidersAndServices providersAndServices>>>>>>>>>>",          providersAndServices         );
        dispatch({
          type: "RECEIVED_PROVIDERS",
          providers: providersAndServices
        });
      })
      .catch(() => {
        dispatch({
          type: "FETCH_PROVIDERS_ERROR"
        });
      });
  };
};

export const fetchLiveUpdates = services => {
  return dispatch => {
    dispatch({
      type: "GETTING_LIVE_UPDATES"
    });
    getLiveUpdates(services).then(data => {
      dispatch({
        type: "RECEIVED_LIVE_UPDATES"
        // providers: data
        // TO DO UPDATE All our providerServices with these updates
      });
    });
  };
};

export const fetchProvider = id => {
  return dispatch => {
    dispatch({
      type: "GETTING_PROVIDER"
    });
    getProvider(id)
      .then(data => {
        // console.log("Actions indexedDB, fetchProvider, data", data);
        dispatch({
          type: "RECEIVED_PROVIDER",
          currentProvider: data
        })
      })
      .catch(() => {
        dispatch({
          type: "FETCH_PROVIDER_ERROR"
        });
      });
  };
};


export const saveProvider = (providerInfo) => {
  return dispatch => {
    dispatch({
      type: 'SAVING_PROVIDER'
    })
    saveProviderApi(providerInfo)
      .then(result => {
        console.log("actions, index saveProvider result = ", result)
        // if result.updateRespons then we stay on the same page
        // if result.newProvider then we need to redirect to /admin/providers/{result.newProvider.id}
        if (result.newProvider) {
          // console.log("action index saveProvider newProvider ", result.newProvider)
          // new provider, so get new provider and put into state
          // getProvider(result.newProvider)
          //   .then (providerAndServices => {

          //   })

          dispatch({
            type: "GETTING_PROVIDER"
          });
          getProvider(result.newProvider)
            .then(provider => {
              // console.log("Actions indexedDB, fetchProvider, data", data);
              dispatch({
                type: "RECEIVED_PROVIDER",
                currentProvider: provider
              })
            })
            .catch(() => {
              dispatch({
                type: "FETCH_PROVIDER_ERROR"
              })
            })

          // dispatch(push(`/admin/providers/${result.newProvider}`)); // this doesn't work :-(
        }
      })
    // .then(promise => promise)
  }
}

export const saveService = (serviceInfo) => {
  console.log("Actions Thunk saveService serviceInfo: ", serviceInfo)
  return dispatch => {
    dispatch({
      type: 'SAVING_SERVICE'
    })
    saveServiceApi(serviceInfo)
      .then(result => {
        console.log("actions, index saveService result = ", result)
        if (result.newService) {
          console.log("action index saveService result.newService (id?) ", result.newService)
          // new provider, so get new provider and put into state
          // getProvider(result.newProvider)
          //   .then (providerAndServices => {

          //   })

          dispatch({
            type: "GETTING_PROVIDER"
          })
          // console.log("Actions index saveService, calling provider with serviceInfo.provider_id, ", serviceInfo.providerId)
          getProvider(serviceInfo.provider_id)
            .then(provider => {
              // console.log("Actions indexedDB, fetchProvider, data", data);
              dispatch({
                type: "RECEIVED_PROVIDER",
                currentProvider: provider
              })
            })
            .catch(() => {
              dispatch({
                type: "FETCH_PROVIDER_ERROR"
              })
            })

          // dispatch(push(`/admin/providers/${result.newProvider}`)); // this doesn't work :-(
        } else {
          console.log("action index saveService else update result? ", result)
        }
      })
  }
}

export function setCurrentView(lat1, long1, lat2, long2) {
  return {
    type: "SET_CURRENT_VIEW",
    latitude1: lat1,
    longitude1: long1,
    latitude2: lat2,
    longitude2: long2
  };
}

export function setCurrentService(service) {
  return {
    type: "SET_CURRENT_SERVICE",
    service
  };
}

export function setCurrentProvider(provider) {
  return {
    type: "SET_CURRENT_PROVIDER",
    currentProvider: provider
  };
}

// function tickTimer(dispatch) {
//   console.log("timer ticked over");
// }

export function timerCountUpdate(count) {
  return {
    type: "UPDATE_COUNT",
    count
  };
}

export const timerStart = tickTimerFunction => {
  return (dispatch, getState) => {
    if (getState().timer.isRunning) { } else {
      // console.log("starting timer");

      if (!tickTimerFunction) {
        tickTimerFunction = () => {
          // console.log("timer tick");
        };
      }
      let timer = setInterval(() => {
        tickTimerFunction(dispatch);
      }, 10000);

      dispatch({
        type: "START_TIMER",
        timer: timer
      });
    }
  };
};

export const timerStop = () => {
  return (dispatch, getState) => {
    if (getState().timer.isRunning) {
      // console.log("stopping timer");
      clearInterval(getState().timer.timer);

      dispatch({
        type: "STOP_TIMER"
      });
    } else { }
  };
};

// Ruby's actions/thunks for LiveUpdate:
// SetQtyRemaining
// SetUpdate

/////////////////NOT THIS ONE CLIFF
export const setProviderMessage = (providerId, message) => {
  return dispatch => {
    // stuff goes here
    setProviderMessageAPI(providerId, message).then(result => {
      if (result.result == 1) {
        // console.log('confirming action 1', result)
        dispatch({
          type: "GETTING_PROVIDER"
        });
        getProvider(providerId)
          .then(data => {
            // console.log("Actions indexedDB, fetchProvider, data", data)
            dispatch({
              type: "RECEIVED_PROVIDER",
              currentProvider: data
            });
          })
          .catch(() => {
            dispatch({
              type: "FETCH_PROVIDER_ERROR"
            });
          });
      }
    });
  };
};




function setLocation(position, dispatch) {

  let lat = position.coords.latitude;
  let lng = position.coords.longitude;
  dispatch({
    type: 'RECEIVED_LOCATION',
    hasLocation: true,
    lat: lat,
    long: lng,
    zoom: 16,
  })
}


export const getLocation = () => {
  return dispatch => {
    dispatch({
      type: 'GETTING_LOCATION'
    })

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => (setLocation(position, dispatch)));
    } else {
      dispatch({
        type: 'FETCH_LOCATION_ERROR'
      })
    }
  }
}


// THIS THUNK NEEDS WORK. THE POSTMAN PUT WORKS, BUT THIS THUNK
// DOES NOT WORK. NEEDS HELP >:( 

export const setServiceStatus = (providerId, serviceId, status) => {
  console.log(`setServiceStatus args: serviceId: ${serviceId}, status: ${status}`)
  return dispatch => {
    setServiceStatusAPI(serviceId, status).then(result => {
      //console.log('what is result', result)
      // console.log('confirming action 1', result)
      dispatch({
        type: "GETTING_PROVIDER"
      });
      getProvider(providerId)
        .then(data => {
          dispatch({
            type: "RECEIVED_PROVIDER",
            currentProvider: data
          });
        })
        .catch(() => {
          dispatch({
            type: "FETCH_PROVIDER_ERROR"
          });
        });
    });
  };
};

export const setServiceQtyRemaining = (providerId, serviceId, quantity) => {
  console.log(`setServiceQty args: serviceId: ${serviceId}, quantity: ${quantity}`)
  return dispatch => {
    setServiceQtyRemainingAPI(serviceId, quantity).then(result => {
      console.log('what is result', result)
      // console.log('confirming action 1', result)
      dispatch({
        type: "GETTING_PROVIDER"
      });
      getProvider(providerId)
        .then(data => {
          dispatch({
            type: "RECEIVED_PROVIDER",
            currentProvider: data
          });
        })
        .catch(() => {
          dispatch({
            type: "FETCH_PROVIDER_ERROR"
          });
        });
    });
  };
};