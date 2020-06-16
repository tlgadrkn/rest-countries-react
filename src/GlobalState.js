import React, { createContext, useReducer, useEffect,useState } from 'react';
import  tempCountries  from './components/App/tempCountries';
import { countryReducer } from './components/countryReducer';

export const CountryContext = createContext();

export const CountryContextProvider =  ( { children }) => {
    const [countries, dispatch] = useReducer(countryReducer, tempCountries)
    return (
        <CountryContext.Provider value={ {
            countries,
            dispatch
        } }>
            {  children }
        </CountryContext.Provider>
        
        )
}
export default CountryContextProvider;