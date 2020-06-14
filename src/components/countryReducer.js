import tempCountries from '../components/App/tempCountries';

export const countryReducer =  (state, action) => {
    switch(action.type) {
        case "SEARCH_COUNTRY": 
        let tempState = [...state];
        return tempState.filter( country => {  return country.name.toUpperCase().includes(action.name.toUpperCase())
        })    
          case "FILTER_COUNTRY":
           
          let filtered = state.filter( country => country.region.includes(action.region));
          return filtered
        default:
            return state;
    }
}