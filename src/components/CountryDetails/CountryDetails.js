import React from 'react';
import styles from "./CountryDetails.module.css";
import Turkey from "../App/countryTurkey";

const CountryDetails =  ({details}) => {
    
    function handleClose() {
        document.querySelector('#countryModal').style.display = "none"
    }

    console.log(details[0].population);
    
    return (
        <React.Fragment>
            <div id="countryModal" className={styles.modal}>
                <div className={styles.modalContent}>
                <span onClick={handleClose} className={styles.close}>&times;</span>


                        <div className={styles.countryFlag}>
                        <img src={details[0].flag} alt={`${details[0].flag} flag`} />

                        </div>

                        <div>
                        <h2>{details[0].countryName}</h2>
                            <p>Native Name: {details[0].nativeName}</p>
                            <p>Population: {details[0].population.toLocaleString()}</p>
                            <p>Region: {details[0].region}</p>
                            <p>Sub Region: {details[0].subRegion}</p>
                            <p>Capital: {details[0].capital}</p>
                            <p></p>

                            <div className={styles.borderCountries}>
                            <span>Border Countries</span>
                        <ul>
                            <li>Azerbaijan</li> 
                        </ul>
                    </div>
                        </div>
                        <div>
                            <p>Top Level Domain: {details[0].topLevelDomain}</p>
                            <p>Currency: {details[0].topLevelDomain}</p>
                            <p>Languages: {details[0].topLevelDomain}</p>

                        </div>
                         
                </div>
              
            </div>


        </React.Fragment>
       
      
    )
}


export default CountryDetails;