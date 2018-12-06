
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('services', table => {
    table.increments('id')
    table.string('name')
    table.integer('quantity_default')
    table.integer('quantity_remaining')
    table.string('status')
    table.integer('provider_id')
    table.integer('service_type_id')
    table.datetime('created_at').defaultTo(knex.fn.now())
    table.datetime('updated_at').defaultTo(knex.fn.now())


  })

};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('services')

};
