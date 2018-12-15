const {
  hashSync
} = require('bcrypt')
const saltRounds = 10

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([

        {
          id: 10001,
          user_name: 'Admin',
          provider_id: '-1',
          hash: hashSync('Admin', saltRounds)
        },
        {
          id: 10002,
          user_name: 'Shelter',
          provider_id: '1',
          hash: hashSync('1', saltRounds)
        },
        {
          id: 10003,
          user_name: 'Compassion',
          provider_id: '2',
          hash: hashSync('2', saltRounds)
        },
      ]);
    });
};