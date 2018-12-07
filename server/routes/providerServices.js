const express = require('express')
const providerServicesDB = require('../data/providerServicesDB')
const providersDB = require('../data/providersDB')
const servicesDB = require('../data/servicesDB')
const router = express.Router()

// get request for list of providers and their services
// Expect a geoBox type search object to define search area
// Optional list of providers to NOT return (as already have them)
// No params or other search object can return all / some providers and services, for system admin use.

router.get('/', (req, res) => {
    providersDB.getProviders()
    .then (providers => {
        console.log("providers count ", providers.length)
        let providerServices = providers.map( provider => {
            servicesDB.getServicesForProvider(provider.id)
                .then (services => {
                    // console.log("Provider and services:::: ", provider.id, services.length)
                    // console.log("provider.services: ", provider.services.length)
                    provider.services = services
                    console.log("provider.services1: ", provider.id, provider.services.length)
                    return provider
                })
        })
        res.json(providerServices)
    })
    // console.log("providerServices get / ")
    // providerServicesDB.getProviderServices()
    //     .then( data => {
    //         // console.log("providerServices get / data: ", data)
    //     //    const jsonData = dataFormater.nestData(data)
    //         // console.log("providerServices get / jsonData: ", jsonData)
    //         // console.log("providerServices get / data: ", JSON.stringify(data))
    //         res.json({data: data})
    //     }) 
})

module.exports = router
// export default router // why not this?