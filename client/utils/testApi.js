export function getProvidersAndServices() {
  return fetch('/api/v1/providerservices')
    .then(aResponse => {
      console.log("TestApi getdata")
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
  console.log("testApi saveProvider provider info = ", providerInfo)
  return fetch('/api/v1/providers/', {
    method: 'post',
    body: JSON.stringify(providerInfo),
    headers: { "Content-Type": 'application/json' }

  })
    .then(response => {
      console.log("testApi saveProvider response = ", response)
      return response.json()
    })
}

export function saveService(serviceInfo) {
  console.log("testApi saveService service info = ", serviceInfo)
  return fetch('/api/v1/services/', {
    method: 'post',
    body: JSON.stringify(serviceInfo),
    headers: { "Content-Type": 'application/json' }

  })
    .then(response => {
      console.log("testApi saveService response = ", response)
      return response.json()
    })
}
// console.log("TestApi getdata")

// .catch(() => {
//   return new Error({ error: 'Something went wrong' })
// })


export function setProviderMessageAPI(id, message) {
  //  console.log('Is the providermessageAPI going through?')
  return fetch(`/api/v1/providers/${id}/updatemessage`, {
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
  return fetch(`/api/v1/providers/${id}/updatestatus`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'put',
    body: JSON.stringify({ id: id, updateStatus: status })
  })
    .then(res => res.body.result)
}
