
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('service_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('service_types').insert([
        { id: 1, name: "Shelters", icon: "shelter", code: "SHELTER" },
        { id: 2, name: "Food Banks", icon: "foodbank", code: "FOODBANK", },
        { id: 3, name: "Soup Kitchens", icon: "kitchen", code: "KITCHEN" },
        { id: 4, name: "Advice", icon: "advice", code: "ADVICE" },
        { id: 5, name: "Drop-in", icon: "dropin", code: "DROPIN" },
        { id: 6, name: "Medical", icon: "medical", code: "MEDICAL" },
        { id: 7, name: "Other", icon: "other", code: "OTHER" }

      ]);
    });
};
