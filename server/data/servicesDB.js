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
            's.id',
            's.provider_id',
            's.name',
            's.unit',
            's.qty_default',
            's.qty_remaining',
            's.updated_at',
            's.service_type_id',
            'st.name',
            'st.code',
            'st.icon'
        )
    // .whereIn('s.provider_id', providersIdList)
    return dataPromise
}
