
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('service_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('service_types').insert([
        { id: 1, name: "Shelters", icon: "SHELTER", code: "SHELTER" },
        { id: 2, name: "Food Banks", icon: "FOODBANK", code: "FOODBANK", },
        { id: 3, name: "Soup Kitchens", icon: "KITCHEN", code: "KITCHEN" },
        { id: 4, name: "Advice", icon: "ADVICE", code: "ADVICE" },
        { id: 5, name: "Drop-in", icon: "DROPIN", code: "DROPIN" },
        { id: 6, name: "Medical", icon: "MEDICAL", code: "MEDICAL" },
        { id: 7, name: "Other", icon: "OTHER", code: "OTHER" }

      ]);
    });
};
