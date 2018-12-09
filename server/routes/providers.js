const express = require('express')
const providersDB = require('../data/providersDB')

// const dataFormater = require('../helpers/dataFormater')

const router = express.Router()


router.get('/', (req, res) => {

  providersDB.getProviders()
    .then(data => {



      res.json({ data: data })
    })
})

// router.get('/:id', (req, res) => {
//   const id = req.params.id
//   providersDB.getProvider(id)
//     .then(response => {
//       res.json(response)
//     }
//     )
// }
// )

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

module.exports = router

