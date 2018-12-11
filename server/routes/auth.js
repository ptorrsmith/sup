var router = require('express').Router()

var { userExists, createUser } = require('../data/users')
var token = require('../auth/token')

router.post('/register', register, token.issue)

function register(req, res, next) {
  const { user_name, password } = req.body
  userExists(user_name, req.app.get('db'))
    .then(exists => {
      if (exists) return res.status(400).send({ message: "User Name Taken" })
      createUser(user_name, password, req.app.get('db'))
        .then(() => next())
        .catch(err => res.status(500).send({ message: "Server Error" }))
    })
    .catch(err => res.status(500).send({ message: "Server Error" }))
}



router.post('/login', token.issue)

module.exports = router
