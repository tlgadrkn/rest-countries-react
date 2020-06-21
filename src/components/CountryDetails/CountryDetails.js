import React from "react";
import styles from "./CountryDetails.module.css";
import { Link } from "react-router-dom";
import { useParams, useHistory, useLocation } from "react-router";

const CountryDetails = () => {
  let { code } = useParams();
  const history = useHistory();
  const location = useLocation();
  console.log(history);
  console.log(location.state);

  return (
    <React.Fragment>
      <div>HEY FROM {code}</div>
      <div id="countryModal" className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.countryFlag}>
            <img
              src={location.state.countryFlag}
              alt={`${location.state.countryFlag} flag`}
            />
          </div>

          <div>
            <h2>{location.state.countryName}</h2>
            <p>Native Name: {location.state.nativeName}</p>
            <p>
              Population: {location.state.countryPopulation.toLocaleString()}
            </p>
            <p>Region: {location.state.countryRegion}</p>
            <p>Sub Region: {location.state.subregion}</p>
            <p>Capital: {location.state.countryCapital}</p>
            <p></p>

            <div className={styles.borderCountries}>
              <span>Border Countries</span>
              <ul>
                {location.state.borders.map((borderCountry, index) => {
                  return <li key={index}><Link to={borderCountry}>{borderCountry}</Link></li>
                })}
              </ul>
            </div>
          </div>
          <div>
            <p>Top Level Domain: {location.state.topLevelDomain}</p>
            <span></span>
            <p>Currency: {
                location.state.currencies.map( (currency, index) => {
                return <span key={index}>{currency.name}</span>
                } )    
            }</p>
            <p>Languages: {
                location.state.languages.map( (language, index) => {
                    return <span key={index}>{language.name}</span>
                } )
                } </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CountryDetails;
