

import { authFetch } from '../utils/auth'

export function getProvidersAndServices() {
  return fetch('/api/v1/providerservices')
    .then(aResponse => {
      // console.log("TestApi getdata")
      return aResponse.json()
    })
}
// .catch(() => {
//   return new Error({ error: 'Something went wrong' })
// })

export function getProvider(id) {
  return fetch(`/api/v1/providerServices/${id}`)
    .then(response => {
      return response.json()
    })

}

export function saveProvider(providerInfo) {
  // console.log("testApi saveProvider provider info = ", providerInfo)
  // may be new or existing, depends if has an id
  if (providerInfo.id) {
    return authFetch(`/api/v1/providers/${providerInfo.id}`, {
      method: 'put',
      body: JSON.stringify(providerInfo),
      headers: {
        "Content-Type": 'application/json'
      }

    })
      .then(response => {
        // console.log("testApi saveProvider response = ", response)
        return response.json()
      })
  } else {
    return authFetch('/api/v1/providers/', {
      method: 'post',
      body: JSON.stringify(providerInfo),
      headers: {
        "Content-Type": 'application/json'
      }

    })
      .then(response => {
        // console.log("testApi saveProvider response = ", response)
        return response.json()
      })
  }
}

export function saveService(serviceInfo) {
  // console.log("testApi saveService service info = ", serviceInfo)
  if (serviceInfo.id) {

    return authFetch(`/api/v1/services/${serviceInfo.id}`, {
      method: 'put',
      body: JSON.stringify(serviceInfo),
      headers: {
        "Content-Type": 'application/json'
      }
    })
      .then(response => {
        // console.log("testApi saveService response = ", response)
        return response.json()
      })
  } else {
    return authFetch('/api/v1/services/', {
      method: 'post',
      body: JSON.stringify(serviceInfo),
      headers: {
        "Content-Type": 'application/json'
      }
    })
      .then(response => {
        // console.log("testApi saveService response = ", response)
        return response.json()
      })
  }
}
// // console.log("TestApi getdata")

// .catch(() => {
//   return new Error({ error: 'Something went wrong' })
// })


export function setProviderMessageAPI(id, message) {
  //  // console.log('Is the providermessageAPI going through?')
  return authFetch(`/api/v1/providers/${id}/updatemessage`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'put',
    body: JSON.stringify({
      id: id,
      updateMessage: message
    })
  })
    .then(res => {
      return res.json()
    })
}

export function setServiceStatusAPI(id, status) {
  //  console.log('Is the providermessageAPI going through?')
  // console.log("the status being sent to service " + id + " is ", status)
  return authFetch(`/api/v1/services/${id}/updatestatus`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'put',
    body: JSON.stringify({
      id: id,
      status: status
    })
  })
    .then(res => res.body.result)
}

// SERVICE QUANTITY REMAINING

export function setServiceQtyRemainingAPI(id, qty_remaining) {
  // console.log('Is the providermessageAPI going through?')
  // console.log("the qty being sent to service " + id + " is ", qty_remaining)
  return authFetch(`/api/v1/services/${id}/updateavailability`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'put',
    body: JSON.stringify({
      id: id,
      qty_remaining: qty_remaining
      //         OR
      // qtyRemaining: quantity
    })

  })
    .then(res => res.body.result)

}