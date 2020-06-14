import React, { useContext } from 'react'
import styles from './Country.module.css'
import CountryDetails from '../CountryDetails/CountryDetails';
import { CountryContext } from '../../GlobalState';

const Country = (props) => {
    const { dispatch } = useContext(CountryContext);

    return (
    <React.Fragment>
        <section id={props.alpha2Code} onClick={() => dispatch({type:'SEARCH_COUNTRY', name: props.name})}>
             <div className={styles.card}>
                  <img src={props.countryFlag} alt={`${props.countryName} flag`}></img>
                     <div className={styles.cardContainer}>
                        <h3>{props.countryName}</h3>
                            <ul className={styles.countryDetails}>
                                <li><strong>Population: </strong>{props.countryPopulation.toLocaleString()}</li>
                                <li><strong>Capital: </strong>{props.countryCapital}</li>
                                <li><strong>Region: </strong>{props.countryRegion}</li>
                             </ul>
                         </div>
                 </div>
        </section>
    </React.Fragment>
)

}


export default Country;