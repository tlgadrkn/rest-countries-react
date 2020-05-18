import React from 'react'
import styles from './Country.module.css'


const Country = ({countryName, countryFlag, countryPopulation, countryRegion, countryCapital}) => {

    return (
    <React.Fragment>
        <a href="#">
        <div className={styles.card}>
                <img src={countryFlag} alt={`${countryName} flag`}></img>
            <div className={styles.cardContainer}>
            <h3>{countryName}</h3>
                    <ul className={styles.countryDetails}>
                        <li><strong>Population: </strong>{countryPopulation}</li>
                        <li><strong>Capital: </strong>{countryCapital}</li>
                        <li><strong>Region: </strong>{countryRegion}</li>
                    </ul>

            </div>

        </div>
        </a>
    </React.Fragment>
)

}


export default Country;