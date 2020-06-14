import React, { useContext } from 'react';
import Country from '../Country/Country.js';
import { CountryContext } from '../../GlobalState'
import styles from './Main.module.css';

const Main = ( ) => {
const { state } = useContext(CountryContext);
return state.length ? (
    <React.Fragment>
        <main>
                {state.map( (country, index) => {
                    return < Country 
                            alpha2Code={country.alpha2Code}
                            countryName={country.name} 
                            countryFlag={country.flag} 
                            countryPopulation={country.population}
                            countryRegion={country.region}
                            countryCapital={country.capital}
                            key={index}
                            />
                })}
        </main>
    </React.Fragment>
) : (
    <div> No Countries to list </div>
)}
export default Main;