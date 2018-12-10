// EXPORTED FUNCTIONS

module.exports = {
    // getServicesForProvider,
    getServicesForProviders,
    getServicesUpdatesForProviders,
    updateQtyRemaining,
    updateStatus,
    createService,
    updateService
}

// const config = require('../../knexfile').development // [environment]
// const connection = require('knex')(config)
// const _ = require('lodash')

var environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)
const _ = require('lodash')

function getServicesForProviders(providersIdList, serviceSearchObj, db = connection) {
    // console.log("servicesDB getservicesforproviders: providersIdList ", providersIdList)
    console.log('ServicesDB getServicesForProviders', providersIdList)
    if (providersIdList) {
        console.log("sDB, gSFP else pIL, ", providersIdList)
        const promise = db('services AS s')
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
        return promise

    } else {
        console.log("sDB, gSFP else ")
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
    // console.log(qtyRemaining)
    return db('services').where('id', id).update({ qty_remaining: qtyRemaining })
}

function updateStatus(id, currentStatus, db = connection) {
    // console.log("im in servicesDB, updateStatus function, this is currentStatus  :", id, currentStatus)
    return db('services').where('id', id).update({ status: currentStatus })
}

function createService(serviceInfo, db = connection) {
    console.log("servicesDB createService serviceInfo = ", serviceInfo)

    return db('services').insert({
        provider_id: serviceInfo.provider_id, name: serviceInfo.name,
        unit: serviceInfo.unit, status: serviceInfo.status, qty_default: serviceInfo.qty_default,
        qty_remaining: serviceInfo.qty_remaining, updated_at: serviceInfo.updated_at,
        service_type_id: serviceInfo.service_type_id,

    })
}

function updateService(id, updatedService, db = connection) {
    console.log('ServicesDB updateService updatedService = ', updatedService)
    return db('services').where('id', id).update({
        provider_id: updatedService.provider_id, name: updatedService.name,
        unit: updatedService.unit, status: updatedService.status, qty_default: updatedService.qty_default,
        qty_remaining: updatedService.qty_remaining, updated_at: updatedService.updated_at,
        service_type_id: updatedService.service_type_id,

    })
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


