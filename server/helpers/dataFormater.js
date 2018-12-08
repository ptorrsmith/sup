function nestData(providerServicesFlatData) {

    const nestedData = providerServicesFlatData


    // remove service data (map), and remove duplicate provider rows (reduce)
    const providers = providerServicesFlatData.map(providerService => {
        return {
            provider_id: providerService.provider_id,
            provider_name: providerService.provider_id,
            provider_description: providerService.description,
            address: providerService.address,
            lat: providerService.lat,
            long: providerService.long,
            email: providerService.email,
            phone: providerService.phone,
            hours: providerService.hours,
            website_url: providerService.website_url,
            update_message: providerService.update_message,
            provider_updated_at: providerService.provider_updated_at
        }
    })

    const reducer = (providersArray, currentProvider) => {
        // console.log("providersArray ", providersArray, Array.isArray(providersArray))
        // console.log("currentProvider: ", currentProvider)
        const exists = providersArray.find(provider => provider.provider_id == currentProvider.provider_id)
        // console.log("exists:", exists || "no duplicate")
        if (!exists) {
            providersArray.push(currentProvider)
        }
        return providersArray
        // return [...providersArray, currentProvider]
    }
    const reducedProviders = providers.reduce(reducer, [])

    return reducedProviders

    // return providers
}

module.exports = { nestData }