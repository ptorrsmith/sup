
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', table => {
    table.increments('id')
    table.string('user_name')
    table.integer('provider_id')
    table.string('hash')
  })
};

exports.down = function(knex, Promise) {
  
  return knex.schema.dropTableIfExists('users')
};
