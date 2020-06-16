import  tempCountries   from "../components/App/tempCountries";
const initialState = tempCountries;

export const countryReducer =  (state, action) => {
    switch(action.type) {
        case "SEARCH_COUNTRY": 
            return initialState.filter( country => country.name.toUpperCase().includes(action.name.toUpperCase()))        
        case "FILTER_COUNTRY":
            if (action.region === "All") {
                return initialState;
            }
            return  initialState.filter( country => country.region.toUpperCase().includes(action.region.toUpperCase()))
        default:
            return state;
    }
}