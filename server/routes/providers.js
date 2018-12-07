const express = require('express')
const providersDB = require('../data/providersDB')

const dataFormater = require('../helpers/dataFormater')

const router = express.Router()




router.get('/', (req, res) => {

  providersDB.getProviders()
    .then(data => {



      res.json({ data: data })
    })
})

module.exports = router