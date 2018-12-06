const express = require('express')
const providerServicesDB = require('../data/providerServicesDB')

const dataFormater = require('../helpers/dataFormater')
// import {nestData} from '../helpers/dataFormater'
const router = express.Router()

// get request for list of providers and their services
// Expect a geoBox type search object to define search area
// Optional list of providers to NOT return (as already have them)
// No params or other search object can return all / some providers and services, for system admin use.

router.get('/', (req, res) => {
    // console.log("providerServices get / ")
    providerServicesDB.getProviderServices()
        .then( data => {
            // console.log("providerServices get / data: ", data)
           const jsonData = dataFormater.nestData(data)
            // console.log("providerServices get / jsonData: ", jsonData)
            // console.log("providerServices get / data: ", JSON.stringify(data))
            res.json({data: jsonData})
        }) 
})

module.exports = router
// export default router // why not this?