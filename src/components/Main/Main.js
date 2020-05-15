import React from 'react';
import Country from '../Country/Country.js';
import styles from './Main.module.css';

const Main = ({countriesToLoad}) => {

    
return (
    <React.Fragment>
            <main>
                {countriesToLoad.map( (country, index) => {
                        console.log(country.name);

                    return < Country 
                            countryName={country.name} 
                            countryFlag={country.flag} 
                            countryPopulation={country.population}
                            countrySubregion={country.subregion}
                            countryCapital={country.capital}
                            key={index}
                            />
                })}

            </main>

    </React.Fragment>
)

}
export default Main;