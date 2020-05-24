import React from 'react'
import styles from './Country.module.css'
import CountryDetails from '../CountryDetails/CountryDetails';

const Country = ({countryName, alpha2Code, countryFlag, countryPopulation, countryRegion, countryCapital, activateModal}) => {
console.log(activateModal);

    return (
    <React.Fragment>
       
       {activateModal.hasValue ? 
        <p>ues</p>
        :   <section id={alpha2Code} onClick={() => activateModal(alpha2Code)}>
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
        }
        
      
      
    </React.Fragment>
)

}


export default Country;