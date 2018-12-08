export function getData() {

  return fetch('/api/v1/providerservices').then((aResponse) => {
    return aResponse.json()
  })
  // .catch(() => {
  //   return new Error({ error: 'Something went wrong' })
  // })


  // new Promise((resolve, reject) => {

  //     setTimeout(() => {
  //         if (true) {
  //             resolve(data);
  //         }
  //         else {
  //             reject("How did this even happen")
  //         }
  //     }, 10)


  // })


return fetchProvider('/api/v1/providerservices').then((aResponse) => {
  return aResponse.json()
})

}
