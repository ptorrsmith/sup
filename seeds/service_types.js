exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('service_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('service_types').insert([{
          id: 1,
          name: "Shelter",
          icon: "shelter",
          code: "SHELTER"
        },
        {
          id: 2,
          name: "Food Bank",
          icon: "foodbank",
          code: "FOODBANK",
        },
        {
          id: 3,
          name: "Soup Kitchen",
          icon: "kitchen",
          code: "KITCHEN"
        },
        {
          id: 4,
          name: "Advice",
          icon: "advice",
          code: "ADVICE"
        },
        {
          id: 5,
          name: "Drop-In",
          icon: "dropin",
          code: "DROPIN"
        },
        {
          id: 6,
          name: "Medical",
          icon: "medical",
          code: "MEDICAL"
        },
        {
          id: 7,
          name: "Other",
          icon: "other",
          code: "OTHER"
        }

      ]);
    });
};