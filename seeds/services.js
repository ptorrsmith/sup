

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
        {
          id: 2,
          name: "Compassion Soup Kitchen",
          qty_default: 10000,
          qty_remaining: 10000,
          unit: "meals",
          status: "open",
          provider_id: 2,
          service_type_id: 3,

        },
        {
          id: 3,
          name: "Wellington City Mission",
          qty_default: 10000,
          qty_remaining: 10000,
          unit: "meals",
          status: "open",
          provider_id: 3,
          service_type_id: 2,

        },
        {
          id: 4,
          name: "St Vincient De Paul Wellington",
          qty_default: 10000,
          qty_remaining: 10000,
          unit: "meals",
          status: "open",
          provider_id: 4,
          service_type_id: 2,

        },
        {
          id: 5,
          name: "DCM",
          qty_default: 10000,
          qty_remaining: 10000,
          unit: "housing",
          status: "open",
          provider_id: 5,
          service_type_id: 1,

        },
        {
          id: 6,
          name: "DCM",
          qty_default: 10000,
          qty_remaining: 10000,
          unit: "Advice",
          status: "open",
          provider_id: 5,
          service_type_id: 4,

        },
        {
          id: 7,
          name: "Wesley Methodist Church",
          qty_default: 10000,
          qty_remaining: 10000,
          unit: "Showers",
          status: "open",
          provider_id: 6,
          service_type_id: 5,

        },
        {
          id: 8,
          name: "Catacombs",
          qty_default: 10000,
          qty_remaining: 10000,
          unit: "washing facilities, light snacks and drinks",
          status: "open",
          provider_id: 7,
          service_type_id: 5,

        },
        {
          id: 9,
          name: "Catacombs",
          qty_default: 10000,
          qty_remaining: 10000,
          unit: "washing facilities",
          status: "open",
          provider_id: 7,
          service_type_id: 5,

        },
        {
          id: 10,
          name: "Catacombs",
          qty_default: 10000,
          qty_remaining: 10000,
          unit: "light snacks and drinks",
          status: "open",
          provider_id: 7,
          service_type_id: 3,

        },
        {
          id: 11,
          name: "DCM",
          qty_default: 10000,
          qty_remaining: 10000,
          unit: "Food",
          status: "open",
          provider_id: 5,
          service_type_id: 4,

        },





      ]);
    });
};