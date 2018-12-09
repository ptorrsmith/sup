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

router.put('/:id/updatemessage', (req, res) => {

  const id = req.params.id
  const updateMessage = req.body.updateMessage

  providersDB.updateMessage(id, updateMessage)
    .then(result => {

      res.json({ result: result })

      // console.log('our result is ', result)
    })

  // console.log(id, updateMessage)
})

router.post('/', (req, res) => {
  //recieve new provider info, 
  //get provider info into a local variable
  const providerInfo = req.body
  //send to providersDB
  // console.log(providerInfo)
  providersDB.createProvider(providerInfo)
    .then(newProvider => {

      res.json({ newProvider: newProvider })
    })
  //send the response new id back as json

})

router.put('/:id/updateprovider', (req, res) => {

  const id = req.params.id
  const updatedProvider = req.body

  providersDB.updateProvider(id, updatedProvider)
    .then(updatedProvider => {

      res.json({ updatedProvider: updatedProvider })
    })
})

module.exports = router

