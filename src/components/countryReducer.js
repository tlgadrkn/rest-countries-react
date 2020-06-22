import tempCountries from "../components/App/tempCountries";
import fetchData from "../utils/fetchApi";
const initialState = tempCountries;

const API_URL = "https://restcountries.eu/rest/v2/all";

export const countryReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_COUNTRY":  
    let filtered =  [...state.filter((country) =>
        country.name.toUpperCase().includes(action.name.toUpperCase())
      )]
      return filtered;
    case "FILTER_COUNTRY":
      if (action.region === "All") {
      return initialState;
      }
      return [...state.filter((country) =>
      country.region.toUpperCase().includes(action.region.toUpperCase())
      )];
      case "LOAD_STATE":
      return initialState
    default:
      return initialState;
  }
};
