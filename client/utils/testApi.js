
export function getData() {
  return fetch('/api/v1/providerservices').then((aResponse) => {
    console.log("TestApi getdata")
    return aResponse.json()
  })
  // .catch(() => {
  //   return new Error({ error: 'Something went wrong' })
  // })
}