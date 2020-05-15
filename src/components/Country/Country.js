import React from 'react'
import styles from './Country.module.css'


const Country = () => {

return (
    <React.Fragment>
        <div className={styles.card}>
            <div className={styles.cardFlag}>
                <img src="https://restcountries.eu/data/col.svg" alt="country flag"></img>
            </div>
            <div className={styles.cardBody}>
            <h2>Colombia</h2>
                    <ul className={styles.countryDetails}>
                        <li> <strong>Population:</strong> 123124534634</li>
                        <li> <strong>Region:</strong>South America</li>
                        <li><strong>Capital:</strong>Bogota</li>
                    </ul>

            </div>

        </div>

    </React.Fragment>
)

}


export default Country;