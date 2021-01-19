import React, { createContext, useReducer, useEffect, useState } from 'react';
import { countryReducer } from '../context/countryReducer';
import { fetchData } from '../utils/fetchApi';
import { getDataFromLocalStorage } from '../utils/helperFunctions';
const API_URL = 'https://restcountries.eu/rest/v2/all';

export const CountryContext = createContext();

export const CountryContextProvider = ({ children }) => {
  const [initialState, setInitialState] = useState(null);
  const [countries, dispatch] = useReducer(countryReducer);

  useEffect(() => {
    async function loadState() {
      const localStorageData = getDataFromLocalStorage();
      if (!localStorageData) {
        const data = await fetchData(API_URL);
        setInitialState(data);
        localStorage.setItem('countries', JSON.stringify(data));
        return;
      }
      setInitialState(localStorageData);
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
