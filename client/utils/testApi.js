export function getProvidersAndServices() {
  return fetch('/api/v1/providerservices')
    .then( aResponse => {
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

 export function setProviderMessageAPI (id, message) {
  //  console.log('Is the providermessageAPI going through?')
   return fetch(`/api/v1/providers/${id}/updatemessage`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
     method: 'put',
     body: JSON.stringify({ id: id, updateMessage: message })
   })
   .then(res => res.body.result)
 }

 export function setProviderMessageAPI (id, message) {
  //  console.log('Is the providermessageAPI going through?')
   return fetch(`/api/v1/providers/${id}/updatemessage`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
     method: 'put',
     body: JSON.stringify({ id: id, updateMessage: message })
   })
   .then(res => res.body.result)
 }