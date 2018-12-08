const express = require('express')
const servicesDB = require('../data/servicesDB')

const dataFormater = require('../helpers/dataFormater')

const router = express.Router()


router.get('/', (req, res) => {

  servicesDB.getServicesForProviders()
    .then(data => {

      res.json({ data: data })
    })
})

router.put('/:id/updateavailability', (req, res) => {

  const id = req.params.id
  const qtyRemaining = req.body.qty_remaining

  servicesDB.updateQtyRemaining(id, qtyRemaining)
    .then(result => {

      res.json({ result: result })

      // console.log('our result is ', result)
    })

  // console.log(id, updateMessage)
})


router.put('/:id/updatestatus', (req, res) => {

  const id = req.params.id
  const currentStatus = req.body.status
  // console.log("services, updateStatus route  ", req.body)
  servicesDB.updateStatus(id, currentStatus)
    .then(result => {

      res.json({ result: result })

      // console.log('our result is ', result)
    })

  // console.log(id, updateMessage)
})

module.exports = router