import React, { createContext, useReducer, useEffect } from 'react';
import tempCountries from '../components/App/tempCountries';
import { countryReducer } from '../context/countryReducer';
// import fetchData from "./utils/fetchApi";
// const API_URL = "https://restcountries.eu/rest/v2/all";

export const CountryContext = createContext();

export const CountryContextProvider = ({ children }) => {
  const initialState = [...tempCountries];
  const [countries, dispatch] = useReducer(countryReducer, initialState);

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
    localStorage.setItem('countries', JSON.stringify(initialState));
    console.log('RAN USEFFECT LOCAL STORAGE SET ITEM');
  }, []);

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
