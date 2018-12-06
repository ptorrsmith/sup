

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('services').del()
    .then(function () {
      // Inserts seed entries
      return knex('services').insert([
        {
          id: 1,
          name: "Men's night shelter",
          qty_default: 80,
          qty_remaining: 50,
          unit: "beds",
          status: "open",
          provider_id: 1,
          service_type_id: 1,

        },
        // { id: 2, colName: 'rowValue2' },
        // { id: 3, colName: 'rowValue3' }
      ]);
    });
};