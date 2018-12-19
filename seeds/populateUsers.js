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
        {
          id: 10004,
          user_name: 'Mission',
          provider_id: '3',
          hash: hashSync('2', saltRounds)
        },
        {
          id: 10005,
          user_name: 'StVincent',
          provider_id: '4',
          hash: hashSync('2', saltRounds)
        },
        {
          id: 10006,
          user_name: 'Salvation',
          provider_id: '5',
          hash: hashSync('2', saltRounds)
        },
        {
          id: 10007,
          user_name: 'DCM',
          provider_id: '6',
          hash: hashSync('2', saltRounds)
        },
        {
          id: 10008,
          user_name: 'Wesley',
          provider_id: '7',
          hash: hashSync('2', saltRounds)
        },
        {
          id: 10009,
          user_name: 'Catacombs',
          provider_id: '8',
          hash: hashSync('2', saltRounds)
        },
        {
          id: 10010,
          user_name: 'Evolve',
          provider_id: '9',
          hash: hashSync('2', saltRounds)
        },
      ]);
    });
};