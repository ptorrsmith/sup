// SERVICE ID + NAMES

// id: 1,
// name: "Shelter",

// id: 2,
// name: "Food Bank",

// id: 3,
// name: "Soup Kitchen",

// id: 4,
// name: "Advice",

// id: 5,
// name: "Drop-In",

// id: 6,
// name: "Medical",

// id: 7,
// name: "Other",


// PROVIDER NAMES + IDS


// id: 1,
// name: 'The Mens Night Shelter',

// id: 2,
// name: 'Compassion Soup Kitchen',

// id: 3,
// name: 'Wellington City Mission',

// id: 4,
// name: 'St Vincent De Paul Wellington',

// id: 5,
// name: 'The Salvation Army',

// id: 6,
// name: 'DCM',

// id: 7,
// name: 'Wesley Methodist Church',

// id: 8,
// name: 'Catacombs',

// id: 9,
// name: 'Evolve',


exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('services').del()
    .then(function () {
      // Inserts seed entries
      return knex('services').insert([{
          id: 1,
          name: "Men's Night Shelter Dormitory Accomodation",
          qty_default: 80,
          qty_remaining: 50,
          unit: "Beds",
          status: "Open",
          provider_id: 1,
          service_type_id: 1,
        },
        {
          id: 2,
          name: "Men's Night Shelter Hostel Accomodation",
          qty_default: 80,
          qty_remaining: 50,
          unit: "Beds",
          status: "Open",
          provider_id: 1,
          service_type_id: 1,
        },
        {
          id: 3,
          name: "Men's Night Shelter Community Support (Emergency Shelter)",
          qty_default: 80,
          qty_remaining: 50,
          unit: "Beds",
          status: "Open",
          provider_id: 1,
          service_type_id: 1,
        },
        //
        {
          id: 4,
          name: "Compassion Soup Kitchen - Breakfast Meal",
          qty_default: 10000,
          qty_remaining: 10000,
          unit: "Meals",
          status: "Closed",
          provider_id: 2,
          service_type_id: 3,
        },
        {
          id: 5,
          name: "Compassion Soup Kitchen - Dinner Meal",
          qty_default: 10000,
          qty_remaining: 10000,
          unit: "Meals",
          status: "Closed",
          provider_id: 2,
          service_type_id: 3,
        },
        //
        {
          id: 6,
          name: "Wellington City Mission - Food Parcels",
          qty_default: 10000,
          qty_remaining: 10000,
          unit: "Food parcels",
          status: "Closed",
          provider_id: 3,
          service_type_id: 2,

        },
        {
          id: 7,
          name: "St Vincent De Paul Wellington - Food Parcels",
          qty_default: 10000,
          qty_remaining: 10000,
          unit: "Food parcels",
          status: "Closed",
          provider_id: 4,
          service_type_id: 2,

        },
        {
          id: 8,
          name: "The Salvation Army - Food Parcels",
          qty_default: 10000,
          qty_remaining: 10000,
          unit: "Food parcels",
          status: "open",
          provider_id: 5,
          service_type_id: 2,

        },
        {
          id: 9,
          name: "DCM - Advice and Support",
          qty_default: 10000,
          qty_remaining: 10000,
          unit: "Advice",
          status: "Open",
          provider_id: 6,
          service_type_id: 4,

        },
        {
          id: 10,
          name: "Wesley Methodist Church - Showers & Bathroom Facilities",
          qty_default: 10000,
          qty_remaining: 10000,
          unit: "Showers",
          status: "Open",
          provider_id: 7,
          service_type_id: 5,

        },
        {
          id: 11,
          name: "Catacombs - Showers & Bathroom Facilities",
          qty_default: 10000,
          qty_remaining: 10000,
          unit: "Showers",
          status: "open",
          provider_id: 8,
          service_type_id: 5,

        },
        {
          id: 12,
          name: "Catacombs - Washing Machine & Dryer Facilities",
          qty_default: 10000,
          qty_remaining: 10000,
          unit: "Washing machines and dryers",
          status: "open",
          provider_id: 8,
          service_type_id: 5,

        },
        {
          id: 13,
          name: "Catacombs - TV Lounge & Telephone",
          qty_default: 10000,
          qty_remaining: 10000,
          unit: "TV lounge and telephone",
          status: "open",
          provider_id: 8,
          service_type_id: 5,

        },
        {
          id: 14,
          name: "Evolve - Medical Assistance and Support",
          qty_default: 10000,
          qty_remaining: 10000,
          unit: "Medical services",
          status: "Open",
          provider_id: 9,
          service_type_id: 6,

        },
      ]);
    });
};