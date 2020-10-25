import React, { createContext, useReducer, useEffect, useState } from 'react';
import { countryReducer } from '../context/countryReducer';
import { fetchData } from '../utils/fetchApi';
import { useLocalStorage } from '../customHooks/customHooks';
const API_URL = 'https://restcountries.eu/rest/v2/all';

export const CountryContext = createContext();

export const CountryContextProvider = ({ children }) => {
  const [initialState, setInitialState] = useState(null);
  const [countries, dispatch] = useReducer(countryReducer);

  useEffect(() => {
    async function loadState() {
      const data = await fetchData(API_URL);
      console.log(data);
      setInitialState(data);
      localStorage.setItem('countries', JSON.stringify(data));
    }
    loadState();
  }, []);

  return (
    <CountryContext.Provider
      value={{
        countries: !countries ? initialState : countries,
        dispatch,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
export default CountryContextProvider;
