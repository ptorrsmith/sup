// EXPORTED FUNCTIONS

module.exports = {
    // getServicesForProvider,
    getServicesForProviders,
    getServicesUpdatesForProviders,
    updateQtyRemaining,
    updateStatus
}

const config = require('../../knexfile').development // [environment]
const connection = require('knex')(config)
const _ = require('lodash')

function getServicesForProviders(providersIdList, serviceSearchObj, db = connection) {
    // console.log("servicesDB getservicesforproviders: providersIdList ", providersIdList)
    if (providersIdList) {
        return db('services AS s')
            .leftOuterJoin('service_types AS st', 's.service_type_id', 'st.id')
            // .select('p.*', 's.*', 'st.*', 'p.id AS provicer_id', 's.id AS service_id') //.where('long', p.long)
            .select(
                's.id',
                's.provider_id',
                's.name',
                's.unit',
                's.status',
                's.qty_default',
                's.qty_remaining',
                's.updated_at',
                's.service_type_id',
                'st.name as service_type_name',
                'st.code as service_type_code',
                'st.icon as service_type_icon'
            )
            .whereIn('s.provider_id', providersIdList)

    } else {
        return db('services AS s')
            .leftOuterJoin('service_types AS st', 's.service_type_id', 'st.id')
            // .select('p.*', 's.*', 'st.*', 'p.id AS provicer_id', 's.id AS service_id') //.where('long', p.long)
            .select(
                's.id',
                's.provider_id',
                's.name',
                's.unit',
                's.status',
                's.qty_default',
                's.qty_remaining',
                's.updated_at',
                's.service_type_id',
                'st.name as service_type_name',
                'st.code as service_type_code',
                'st.icon as service_type_icon'
            )
    }
    return dataPromise
}

function getServicesUpdatesForProviders(providersIdList, serviceSearchObj, db = connection) {
    // console.log("servicesDB getservicesforproviders: providersIdList ", providersIdList)
    if (providersIdList) {
        return db('services AS s')
            .leftOuterJoin('service_types AS st', 's.service_type_id', 'st.id')
            // .select('p.*', 's.*', 'st.*', 'p.id AS provicer_id', 's.id AS service_id') //.where('long', p.long)
            .select(
                's.id',
                's.provider_id',
                's.status',
                's.qty_remaining',
                's.updated_at'
            )
            .whereIn('s.provider_id', providersIdList)

    } else {
        return db('services AS s')
            .leftOuterJoin('service_types AS st', 's.service_type_id', 'st.id')
            // .select('p.*', 's.*', 'st.*', 'p.id AS provicer_id', 's.id AS service_id') //.where('long', p.long)
            .select(
                's.id',
                's.provider_id',
                's.status',
                's.qty_remaining',
                's.updated_at'
            )
    }
    return dataPromise
}

function updateQtyRemaining(id, qtyRemaining, db = connection) {
    return db('services').where('id', id).update({ qty_remaining: qtyRemaining })
}

function updateStatus(id, currentStatus, db = connection) {
    // console.log("im in servicesDB, updateStatus function, this is currentStatus  :", id, currentStatus)
    return db('services').where('id', id).update({ status: currentStatus })
}





// function getServicesForProvider(providerId, serviceSearchObj, db = connection) {
//     const dataPromise = db('services AS s')
//         .leftOuterJoin('service_types AS st', 's.service_type_id', 'st.id')
//         .select(
//             's.name',
//             's.unit',
//             's.qty_default',
//             's.qty_remaining',
//             's.updated_at',
//             's.service_type_id',
//             'st.name as service_type_name',
//             'st.code as service_type_code',
//             'st.icon as service_type_icon'
//         )
//         .where('s.provider_id', providerId)
//     return dataPromise
// }


