const express = require('express')
// const providerServicesDB = require('../data/providerServicesDB')  // not used yet
const providersDB = require('../data/providersDB')
const servicesDB = require('../data/servicesDB')
const router = express.Router()

// get request for list of providers and their services
// Expect a geoBox type search object to define search area
// Optional list of providers to NOT return (as already have them)
// No params or other search object can return all / some providers and services, for system admin use.


// The res.json returns the provider, but not the service. Can this be resolved?

router.get('/:id', (req, res) => {
    const id = req.params.id
    // console.log('provider services get/id', id)
    providersDB.getProvider(id) // NOTE!! will return an array, so we want first record
        .then(results => results[0])
        .then(provider => {
            // console.log("providerIds: ", providerIds)
            servicesDB.getServicesForProviders([id])  //  array, but that is what we want this time
                .then(services => {
                    console.log('PROVIDER>>>>', provider)
                    console.log('SERVICES>>>>', services)
                    provider.services = services
                    // res.json({
                    //     ...provider,
                    //     services: [...provider.services]})
                    res.json(provider)
                })
        })
})

router.get('/', (req, res) => {
    providersDB.getProviders()
        .then(providers => {
            // console.log("providers count ", providers.length)
            const providerIds = providers.map(provider => provider.id)
            // console.log("providerIds: ", providerIds)
            servicesDB.getServicesForProviders(providerIds)
                .then(services => {
                    const providerServices = providers.map(provider => {
                        // find all services for this provider and attach them
                        let pServices = services.filter(service => service.provider_id == provider.id)
                        // console.log("provider: ", provider.id, " pServices length: ", pServices.length)
                        provider.services = pServices
                        // console.log("Provider ", provider.id, " provider.services count: ", provider.services.length)
                        return provider
                    })
                    // console.log("providerServices >>>>> ", providerServices)
                    res.json(providerServices)
                })
        })
})


router.get('/liveUpdates', (req, res) => {
    providersDB.getProviderUpdates()
        .then(providerUpdates => {
            // console.log("providerUpdates count ", providerUpdates.length)
            const providerIds = providerUpdates.map(provider => provider.id)
            // console.log("providerIds: ", providerIds)
            servicesDB.getServicesUpdatesForProviders(providerIds)
                .then(servicesUpdates => {
                    const providerServicesUpdates = providerUpdates.map(provider => {
                        // find all services for this provider and attach them
                        let pServices = servicesUpdates.filter(service => service.provider_id == provider.id)
                        // console.log("provider: ", provider.id, " pServices length: ", pServices.length)
                        provider.services = pServices
                        // console.log("Provider ", provider.id, " provider.services count: ", provider.services.length)
                        return provider
                    })
                    // console.log("providerServicesUpdates >>>>> ", providerServicesUpdates)
                    res.json(providerServicesUpdates)
                })
        })
})






module.exports = router
// export default router // why not this?