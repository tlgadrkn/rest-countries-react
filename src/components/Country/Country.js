import React from 'react'
import styles from './Country.module.css'


const Country = ({countryName, countryFlag, countryPopulation, countrySubregion, countryCapital}) => {
console.log(countryFlag);

return (
    <React.Fragment>
        <div className={styles.card}>
            <div className={styles.cardFlag}>
                <img src={countryFlag} alt={`${countryFlag} - ${countryFlag}`}></img>
            </div>
            <div className={styles.cardBody}>
            <h2>{countryName}</h2>
                    <ul className={styles.countryDetails}>
                        <li><strong>Population: </strong>{countryPopulation}</li>
                        <li><strong>Capital: </strong>{countryCapital}</li>
                        <li><strong>Region: </strong>{countrySubregion}</li>
                    </ul>

            </div>

        </div>

    </React.Fragment>
)

}


export default Country;