import React from 'react'
import styles from './Country.module.css'


const Country = ({countryName, countryFlag, countryPopulation, countrySubregion, countryCapital}) => {

    return (
    <React.Fragment>
        <a href="#">
        <div className={styles.card}>
                <img src={countryFlag} alt={`${countryName} flag`}></img>
            <div className={styles.cardContainer}>
            <h2>{countryName}</h2>
                    <ul className={styles.countryDetails}>
                        <li><strong>Population: </strong>{countryPopulation}</li>
                        <li><strong>Capital: </strong>{countryCapital}</li>
                        <li><strong>Region: </strong>{countrySubregion}</li>
                    </ul>

            </div>

        </div>
        </a>
    </React.Fragment>
)

}


export default Country;