const express = require('express')
const servicesDB = require('../data/servicesDB')

const dataFormater = require('../helpers/dataFormater')
const router = express.Router()


var token = require('../auth/token')


router.get('/', (req, res) => {

  servicesDB.getServicesForProviders()
    .then(data => {

      res.json({
        data: data
      })
    })
})

router.put('/:id/updateavailability', token.decode, (req, res) => {
  console.log('req', req.body)

  const id = req.params.id
  const qtyRemaining = req.body.qty_remaining
  console.log('qtyRemaining', qtyRemaining)

  servicesDB.updateQtyRemaining(id, qtyRemaining)
    // 
    .then(result => {

      res.json({
        result: result
      })

      // console.log('our result is ', result)
    })

  // console.log(id, qtyRemaining)
})


router.put('/:id/updatestatus', token.decode, (req, res) => {

  const id = req.params.id
  const currentStatus = req.body.status
  // console.log("services, updateStatus route  ", req.body)
  servicesDB.updateStatus(id, currentStatus)
    .then(result => {

      res.json({
        result: result
      })

      // console.log('our result is ', result)
    })

  // console.log(id, updateMessage)
})


router.post('/', token.decode, (req, res) => {

  const serviceInfo = req.body

  servicesDB.createService(serviceInfo)
    .then(newService => {

      res.json({
        newService: newService[0]
      })
    })
})

router.put('/:id/', token.decode, (req, res) => {

  const id = req.params.id
  const updatedService = req.body

  servicesDB.updateService(id, updatedService)
    .then(response => {

      res.json({
        updateResponse: response
      })
    })
})

module.exports = router