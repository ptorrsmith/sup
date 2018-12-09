export function getProvidersAndServices() {
  return fetch('/api/v1/providerservices')
    .then( aResponse => {
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

 export function setProviderMessageAPI (message) {
   return fetch(`/api/v1/providers/${id}/updatemessage`, {
     method: 'put',
     body: JSON.stringify({ updateMessage: message })
   })
   .then(res => res.body.result)
 }
