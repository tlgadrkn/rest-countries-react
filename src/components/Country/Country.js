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
                <div className={styles.cardText}>
                    <h3>CARD TEXT</h3>
                    <ul>
                        <li>some text</li>
                        <li>some text</li>
                        <li>some text</li>
                        <li>some text</li>
                    </ul>

                </div>
            </div>

        </div>

    </React.Fragment>
)

}


export default Country;