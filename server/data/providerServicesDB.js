// EXPORTED FUNCTIONS

module.exports = {
    getProviderServices
  }
  
  const config = require('../../knexfile').development // [environment]
  const connection = require('knex')(config)
  const _ = require('lodash')
  
  
  function getProviderServices(geoBoxSearch, ignoreProvidersArray, db = connection) {     
      // const dataPromise = db('providers')
      //     .then(providers => {
      //         const joinServicesPromise = db('services')
      //     })
      
      
      
        const dataPromise = db('providers AS p')
          .leftOuterJoin('services AS s', 's.provider_id', 'p.id'  )
          .leftOuterJoin('service_types AS st', 's.service_type_id', 'st.id')
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
            'p.updated_at as provider_updated_at',
            's.name as service_name',
            's.unit as units',
            's.qty_default',
            's.qty_remaining',
            's.updated_at as service_updated_at',
            'st.id as service_type_id',
            'st.name as service_type_name',
            'st.code as service_type_code',
            'st.icon'
          )
    //   .select(
    //     'u.id',
    //     'u.first_name',
    //     'u.last_name',
    //     'u.username',
    //     'u.image_url',
    //     'u.is_admin',
    //     'u.phone',
    //     'u.info',
    //     'la.email',
    //     'cu.customer_id',
    //     'cu.department_id'
    // )
    // .from('user AS u')
    // .leftJoin('local_auth AS la', 'la.user_id', 'u.id')
    // .leftJoin('customer_user AS cu', 'cu.user_id', 'u.id')
    // .where('u.id', '=', id)
    // .first()  



    //   console.log("providerServicesDB getprovsvs dataPromise : ", dataPromise)
      return dataPromise
    }
    
  // returning promises to mock the knex asynchronous behaviour
  // this was mocking the database
  // return new Promise((resolve, reject) => {
  //   resolve(providerServices.filter(providerService => !owner_id || providerService.owner_id == owner_id))
  // })
  // }
  
  
  