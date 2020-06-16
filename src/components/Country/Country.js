import React, { useContext } from 'react'
import styles from './Country.module.css'
import { CountryContext } from '../../GlobalState';

const Country = ({alpha2Code, countryFlag, countryName, countryPopulation, countryRegion, countryCapital}) => {    
    return (
    <React.Fragment>
        <section id={alpha2Code}>
             <div className={styles.card}>
                  <img src={countryFlag} alt={`${countryName} flag`}></img>
                     <div className={styles.cardContainer}>
                        <h3>{countryName}</h3>
                            <ul className={styles.countryDetails}>
                                <li><strong>Population: </strong>{countryPopulation.toLocaleString()}</li>
                                <li><strong>Capital: </strong>{countryCapital}</li>
                                <li><strong>Region: </strong>{countryRegion}</li>
                             </ul>
                         </div>
                 </div>
        </section>
    </React.Fragment>
)

}


export default Country;