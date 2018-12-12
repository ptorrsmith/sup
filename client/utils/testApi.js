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