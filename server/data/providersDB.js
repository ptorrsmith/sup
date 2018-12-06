// EXPORTED FUNCTIONS

module.exports = {
    getProviders
  }
  
  const config = require('../../knexfile').development // [environment]
  const connection = require('knex')(config)
  const _ = require('lodash')
  
  
  function getProviders(geoBoxSearch, ignoreProvidersArray, db = connection) {     
      console.log("ProvidersDB, getProvicers")
      const dataPromise = db('providers AS p')
      // .select('p.*', 's.*', 'st.*', 'p.id AS provicer_id', 's.id AS service_id') //.where('long', p.long)
      .select(
          'p.id as provider_id',
            'p.name as provider_name',
            'p.description as provider_description',
            'p.lat',
            'p.long',
            'p.hours',
            'p.update_message', 
            'p.address',
            'p.email',
            'p.website_url',
            'p.updated_at as provider_updated_at'
            )
            
            return dataPromise
        }
  
  
  