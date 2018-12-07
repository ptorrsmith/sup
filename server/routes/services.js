const express = require('express')
const servicesDB = require('../data/servicesDB')

const dataFormater = require('../helpers/dataFormater')

const router = express.Router()


router.get('/', (req, res) => {

  servicesDB.getServicesForProviders()
    .then(data => {

      const jsonData = dataFormater.nestData(data)

      res.json({ data: jsonData })
    })
})

module.exports = router