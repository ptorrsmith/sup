// const providersDB = require('./providersDB')
// const servicesDB = require('./servicesDB')

// EXPORTED FUNCTIONS

// module.exports = {
//     getProviderServices
// }

// const config = require('../../knexfile').development // [environment]
// const connection = require('knex')(config)
// // const _ = require('lodash')

// function getProviderServices(geoBoxSearch, ignoreProvidersArray, db = connection) {
//     console.log("About to start db and then")
//     const providersDataPromise = db('providers AS p')
//       .select(
//           'p.id as provider_id')

//           return providersDataPromise
//       }

//     db('providers')
//         .select()
//         .then(providers => {
//         let providersWithServices = providers.map(provider => {
//             return db('services').where('provider_id', provider.id)
//             .then(services => {
//                 console.log("Provider id: >>> ", provider.id, " services >>>", services)
//                 provider.services = services
//                 return provider
//             })
//         })
//         console.log("providerServices::::: ", providersWithServices)
//            return providersWithServices 
//     })
// }

// function getProviderServices(geoBoxSearch, ignoreProvidersArray, db = connection) {
//     providersDB.getProviders()
//         .then(providers => {
//             servicesDB.getServicesForProviders(providers.map(provider => provider.id))
//                 .then(services => {
//                     console.log("Providers", providers)
//                     console.log("services", services)
//                 })
//         })
// }


//   function getProviderServices(geoBoxSearch, ignoreProvidersArray, db = connection) {     
//       const dataPromise = db('providers AS p')
//       .leftOuterJoin('services AS s', 's.provider_id', 'p.id'  )
//       .leftOuterJoin('service_types AS st', 's.service_type_id', 'st.id')
//       // .select('p.*', 's.*', 'st.*', 'p.id AS provicer_id', 's.id AS service_id') //.where('long', p.long)
//       .select(
//           'p.id as provider_id',
//             'p.name as provider_name',
//             'p.description as provider_description',
//             'p.lat',
//             'p.long',
//             'p.hours',
//             'p.update_message', 
//             'p.address',
//             'p.email',
//             'p.website_url',
//             'p.updated_at as provider_updated_at',
//             's.id as service_id',
//             's.name as service_name',
//             's.unit as units',
//             's.qty_default',
//             's.qty_remaining',
//             's.updated_at as service_updated_at',
//             'st.id as service_type_id',
//             'st.name as service_type_name',
//             'st.code as service_type_code',
//             'st.icon'
//             )

            // thinking of nesting db calls to make proper shape response object
            // const dataPromise = db('providers')
            //     .then(providers => {
            //         const joinServicesPromise = db('services')
            //     })

            //   console.log("providerServicesDB getprovsvs dataPromise : ", dataPromise)

        //     return dataPromise
        // }

        // returning promises to mock the knex asynchronous behaviour
        // this was mocking the database
        // return new Promise((resolve, reject) => {
  //   resolve(providerServices.filter(providerService => !owner_id || providerService.owner_id == owner_id))
  // })
  // }


