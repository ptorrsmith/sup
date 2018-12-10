

const initialState = {
  providers: [],
  isFetching: false
}





export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'GETTING_PROVIDERS':
      return {
        ...state,
        isFetching: true
      }
    // case 'GETTING_PROVIDER':
    // return {
    //   ...state,
    //   provider: action.provider
    // }
    case 'RECEIVED_PROVIDERS':
      console.log("reducers > providers > RECEIVED_PROVIDERS (action) ", action)
      return {
        ...state,
        isFetching: false,
        providers: action.providers
      }
    case 'RECEIVED_PROVIDER':
      // when receive an individual provider, the currentProviders reducer will set that to be the currentProvider redux state
      // however we also need to update the provider in our "providers" redux state
      const copyOfProviders = state.providers.slice()
      const newOrupdatedProvider = action.currentProvider
      const index = copyOfProviders.findIndex(provider => provider.id == newOrupdatedProvider.id)
      // could be a number 0 or more, if already exists, or could be negative number if not exists (so we must add it)
      if (index > 0) {
        copyOfProviders.splice(index, 1, newOrupdatedProvider)
      } else {
        copyOfProviders.push(newOrupdatedProvider)
      }
      console.log("reducers > providers > RECEIVED_PROVIDER : newOrUpdatedProvider ::::", newOrupdatedProvider, "\nProvidersCopy>>> ", copyOfProviders)
      return {
        ...state, // this returns ALL the providers
        providers: copyOfProviders
      }
    case 'FETCH_PROVIDERS_ERROR':
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}