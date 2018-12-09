
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('service_types', table => {
    table.increments('id')
    table.string('name')
    table.string('icon')
    table.string('code')
    table.datetime('created_at').defaultTo(knex.fn.now())
    table.datetime('updated_at').defaultTo(knex.fn.now())
  })

};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('service_types')

};
