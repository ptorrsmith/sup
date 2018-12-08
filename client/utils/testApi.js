
export function getData() {



  return fetch('/api/v1/providerservices').then((aResponse) => {
    return aResponse.json()
  })


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
}