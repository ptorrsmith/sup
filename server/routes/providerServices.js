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
                }
                )
        })
})

module.exports = router
// export default router // why not this?