import React from 'react';
import styles from "./CountryDetails.module.css";
import Turkey from "../App/countryTurkey";

const CountryDetails =  ({countryName}) => {
    
    function handleClose() {
        document.querySelector('#countryModal').style.display = "none"
    }

    console.log(countryName);
    
    const tempCountry = Turkey;

    return (
        <React.Fragment>
            <div id="countryModal" className={styles.modal}>
                <div className={styles.modalContent}>
                <span onClick={handleClose} className={styles.close}>&times;</span>


                        <div className={styles.countryFlag}>
                        <img src="q" />

                        </div>

                        <div>
                        <h2>{countryName}</h2>
                            <p>Native Name: {Turkey.nativeName}</p>
                            <p>Population: {Turkey.population.toLocaleString()}</p>
                            <p>Region: {Turkey.region}</p>
                            <p>Sub Region: {Turkey.subRegion}</p>
                            <p>Capital: {Turkey.capital}</p>
                            <p></p>

                            <div className={styles.borderCountries}>
                            <span>Border Countries</span>
                        <ul>
                            <li>Azerbaijan</li> 
                        </ul>
                    </div>
                        </div>
                        <div>
                            <p>Top Level Domain: {Turkey.topLevelDomain}</p>
                            <p>Currency: {Turkey.topLevelDomain}</p>
                            <p>Languages: {Turkey.topLevelDomain}</p>

                        </div>
                         
                </div>
              
            </div>


        </React.Fragment>
       
      
    )
}


export default CountryDetails;