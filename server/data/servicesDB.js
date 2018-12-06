// EXPORTED FUNCTIONS

module.exports = {
    getServicesForProviders
  }
  
  const config = require('../../knexfile').development // [environment]
  const connection = require('knex')(config)
  const _ = require('lodash')
  
  
  function getServicesForProviders(providersIdList, serviceSearchObj, db = connection) {     
      const dataPromise = db('services AS s')
      .leftOuterJoin('service_types AS st', 's.service_type_id', 'st.id')
      // .select('p.*', 's.*', 'st.*', 'p.id AS provicer_id', 's.id AS service_id') //.where('long', p.long)
      .select(
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
            .whereIn('s.provider_id', providersIdList)                       
            return dataPromise
        }
