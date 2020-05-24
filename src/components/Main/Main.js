import React from 'react';
import Country from '../Country/Country.js';
import styles from './Main.module.css';

const Main = ({countriesToLoad, activateModal}) => {
   
    
return (
    <React.Fragment>
            <main>
                {countriesToLoad.map( (country, index) => {
                    return < Country 
                            activateModal={activateModal}
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
)

}
export default Main;