const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const providerServicesRoutes = require('./routes/providerServices')

const passport = require('passport') // not mvp

const server = express()

server.use(cors('*')) // not sure we'll need this since client and server from same server

server.use(passport.initialize())
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))


// server.use('/api/v1/providerservices', providerServicesRoutes )
server.use('/api/v1/providerservices', require('./routes/providerServices'))
server.use('/api/v1/providers', require('./routes/providers'))
server.use('/api/v1/services', require('./routes/services'))


server.use('/api/v1/auth', require('./routes/auth'))

// server.use('/api/users', require('./routes/users'))
// server.use('/api/auth', require('./routes/auth'))

module.exports = server