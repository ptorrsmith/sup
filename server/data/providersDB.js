// EXPORTED FUNCTIONS

module.exports = {
    getProviders,
    getProviderUpdates,
    updateMessage,
    getProvider,
    createProvider,
    updateProvider
}

const config = require('../../knexfile').development // [environment]
const connection = require('knex')(config)
const _ = require('lodash')


function getProviders(geoBoxSearch, ignoreProvidersArray, db = connection) {
    // const lat1 = geoBoxSearch[0] ? geoBoxSearch[0].lat : -30
    // const long1 = geoBoxSearch[0] ? geoBoxSearch[0].long : 150
    // const lat2 = geoBoxSearch[0] ? geoBoxSearch[1].lat : -60
    // const long2 = geoBoxSearch[0] ? geoBoxSearch[1].long : 180
    const lat1 = -30
    const long1 = 150
    const lat2 = -60
    const long2 = 180
    // console.log("ProvidersDB, getProviders")
    const dataPromise = db('providers AS p')
        // .select('p.*', 's.*', 'st.*', 'p.id AS provicer_id', 's.id AS service_id') //.where('long', p.long)
        .select(
            'p.id',
            'p.name',
            'p.description',
            'p.lat',
            'p.long',
            'p.hours',
            'p.update_message',
            'p.address',
            'p.email',
            'p.website_url',
            'p.updated_at'
        )
        .where('p.lat', '<', lat1).andWhere('p.lat', '>', lat2).andWhere('p.long', '>', long1)
        .andWhere('p.long', '<', long2)
    // console.log(dataPromise.toString())

    return dataPromise
}

function getProviderUpdates(geoBoxSearch, ignoreProvidersArray, db = connection) {
    // const lat1 = geoBoxSearch[0] ? geoBoxSearch[0].lat : -30
    // const long1 = geoBoxSearch[0] ? geoBoxSearch[0].long : 150
    // const lat2 = geoBoxSearch[0] ? geoBoxSearch[1].lat : -60
    // const long2 = geoBoxSearch[0] ? geoBoxSearch[1].long : 180
    const lat1 = -30
    const long1 = 150
    const lat2 = -60
    const long2 = 180
    // console.log("ProvidersDB, getProviders")
    const dataPromise = db('providers AS p')
        // .select('p.*', 's.*', 'st.*', 'p.id AS provicer_id', 's.id AS service_id') //.where('long', p.long)
        .select(
            'p.id',
            'p.update_message',
            'p.updated_at'
        )
        .where('p.lat', '<', lat1).andWhere('p.lat', '>', lat2).andWhere('p.long', '>', long1)
        .andWhere('p.long', '<', long2)
    // console.log(dataPromise.toString())

    return dataPromise
}

function getProvider(id, db = connection) {
    // console.log("ProvidersDB, getProviders")
    const dataPromise = db('providers AS p')
        // .select('p.*', 's.*', 'st.*', 'p.id AS provicer_id', 's.id AS service_id') //.where('long', p.long)
        .select(
            'p.id',
            'p.name',
            'p.description',
            'p.lat',
            'p.long',
            'p.hours',
            'p.update_message',
            'p.address',
            'p.email',
            'p.website_url',
            'p.updated_at'
        )
        .where('p.id', id)
    // console.log(dataPromise.toString())

    return dataPromise
}

function updateMessage(id, updateMessage, db = connection) {
    // console.log(updateMessage)
    return db('providers').where('id', id).update({ update_message: updateMessage })
}

function createProvider(providerInfo, db = connection) {
    //console.log("providertsDB createProvider providerInfo = ", providerInfo)
    return db('providers').insert({
        name: providerInfo.name, description: providerInfo.description,
        lat: providerInfo.lat, long: providerInfo.long, hours: providerInfo.hours,
        update_message: providerInfo.update_message, address: providerInfo.address,
        email: providerInfo.email, website_url: providerInfo.website_url,
        updated_at: providerInfo.updated_at
    })

}

function updateProvider(id, updatedProvider, db = connection) {
    //console.log('ProvidersDB updateProvider updatedProvider = ', updatedProvider)
    return db('providers').where('id', id).update({
        name: updatedProvider.name, description: updatedProvider.description,
        lat: updatedProvider.lat, long: updatedProvider.long, hours: updatedProvider.hours,
        update_message: updatedProvider.update_message, address: updatedProvider.address,
        email: updatedProvider.email, website_url: updatedProvider.website_url,
        updated_at: updatedProvider.updated_at
    })
}


