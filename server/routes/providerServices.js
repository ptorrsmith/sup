const express = require('express')

const router = express.Router()

// get request for list of providers and their services
// Expect a geoBox type search object to define search area
// Optional list of providers to NOT return (as already have them)
// No params or other search object can return all / some providers and services, for system admin use.

router.get('/', (req, res) => {
    console.log("providerServices get / ")
    res.json({response: "an array of providers with services"})
})

module.exports = router
// export default router // why not this?