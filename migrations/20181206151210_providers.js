
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('providers', table => {
    table.increments('id').primary
    table.string('name')
    table.string('description')
    table.string('address')
    table.string('update_message')
    table.decimal('lattitude', null)
    table.decimal('longitude', null)
    table.string('email')
    table.string('phone')
    table.string('website_URL')
    table.datetime('created_at').defaultTo(knex.fn.now())
    table.datetime('updated_at').defaultTo(knex.fn.now())


  })

};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('providers')

};
