import tempCountries from "../components/App/tempCountries";
// import fetchData from "../utils/fetchApi";
const initialState = tempCountries;

// const API_URL = "https://restcountries.eu/rest/v2/all";

export const countryReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_COUNTRY":
      let searchedData = localStorage.getItem("countries");
      return JSON.parse(searchedData).filter((country) => {
        return country.name.toUpperCase().includes(action.name.toUpperCase());
      });
    case "FILTER_COUNTRY":
      if (action.region === "All") {
        return initialState;
      }
      const data = localStorage.getItem("countries");
      return JSON.parse(data).filter((country) => {
        return country.region
          .toUpperCase()
          .includes(action.region.toUpperCase());
      });
    default:
      return initialState;
  }
};
