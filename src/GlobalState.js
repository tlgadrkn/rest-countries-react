import React, { createContext, useReducer, useEffect } from 'react';
import tempCountries from './components/App/tempCountries';
import { countryReducer } from './components/countryReducer';

export const CountryContext = createContext();
export const CountryContextProvider =  ( { children }) => {
const [state, dispatch] = useReducer(countryReducer, tempCountries);

    return (
        <CountryContext.Provider value={ {
            state,
            dispatch
        } }>
            { children }
        </CountryContext.Provider>
        
        )
}
export default CountryContextProvider;