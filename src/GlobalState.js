import React, { createContext, useReducer, useEffect, useState } from "react";
import tempCountries from "./components/App/tempCountries";
import { countryReducer } from "./components/countryReducer";
import fetchData  from "./utils/fetchApi";
const API_URL = "https://restcountries.eu/rest/v2/all";

export const CountryContext = createContext();

export const CountryContextProvider = ({ children }) => {

  const [countries, dispatch] = useReducer(countryReducer, []);

//   useEffect(() => {
//     async function fetchData(urlToFetch) {
//       try {
//         const result = await fetch(urlToFetch);
//         const data = await result.json();
//         setInitialState(data);
//     } catch (error) {
//         throw new Error(`Fetch Error - ${error}`);
//       }
//     }

//     fetchData(API_URL);
//     console.log(`called usefetch`);
//   }, []);

useEffect(() => {
    dispatch({type: 'LOAD_STATE'})
}, [])

  return (
      
    <CountryContext.Provider
      value={{
        countries,
        dispatch,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
export default CountryContextProvider;
