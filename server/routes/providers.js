const express = require('express')
const providersDB = require('../data/providersDB')

const dataFormater = require('../helpers/dataFormater')

const router = express.Router()




router.get('/', (req, res) => {

  providersDB.getProviders()
    .then(data => {

      const jsonData = dataFormater.nestData(data)

      res.json({ data: jsonData })
    })
})

module.exports = router