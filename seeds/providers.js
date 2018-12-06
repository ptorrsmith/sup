
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('providers').del()
    .then(function () {
      // Inserts seed entries
      return knex('providers').insert([
        {
          id: 1,
          name: 'The Mens Night Shelter',
          description: "We provide 3 levels of accommodation support:<br> <br>stage 1: dormitory style accommodation which including shower and laundry facilities ($10 a night)<br>stage 2: hostel room accommodation ($80 a week)<br>stage 3: community support (tempoary emergency shelter)<br><br>Dormitory services include a bed for the night, shower facilities, clothes washed, cup of tea. Occasionally some light food is donated and made available.<br><br>Facilities: Bathroom, Laundry & Food.",
          address: "304 Taranki St, Mt. Cook, Wellington 6011",
          phone: "(04) 385-9546",
          update_message: "fully functional",
          lat: -41.300610,
          long: 174.774080,
          email: "menshelter@hotmail.com",
          website_url: "http://wellingtonnightshelter.org.nz/",
          hours: "Open: 7 days a week, all year round<br>Checkin: 5:30pm – 9:00pm<br>Checkout: 6:00am – 7:30am",
        }

      ]);
    });
};

