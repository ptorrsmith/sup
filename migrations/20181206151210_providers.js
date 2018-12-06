
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('providers', table => {
    table.increments('id').primary
    table.string('name')
    table.text('description')
    table.string('address')
    table.text('update_message')
    table.decimal('lat', null)
    table.decimal('long', null)
    table.string('email')
    table.string('phone')
    table.string('hours')
    table.string('website_url')
    table.datetime('created_at').defaultTo(knex.fn.now())
    table.datetime('updated_at').defaultTo(knex.fn.now())


  })

};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('providers')

};
