

var environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)
const _ = require('lodash')

var hash = require('../auth/hash')


function createUser(user_name, password, provider_id, testDb) {
  const db = testDb || connection
  return new Promise((resolve, reject) => {
    hash.generate(password, (err, hash) => {
      if (err) reject(err)
      db('users')
        .insert({ user_name, provider_id, hash })
        .then(user_id => resolve(user_id))
        .catch(err => reject(err))
    })
  })
}
function userExists(user_name, testDb) {
  const db = testDb || connection
  return db('users')
    .where('user_name', user_name)
    .first()
}

function getUserByName(user_name, testDb) {
  const db = testDb || connection
  return db('users')
    .where('user_name', user_name)
    .first()
}


// function getUsers(testDb) {
//   const db = testDb || connection
//   return db('users').select('id', 'user_name', 'first_name', 'last_name')
// }

module.exports = {
  createUser,
  userExists,
  getUserByName,
  // getUsers
}
