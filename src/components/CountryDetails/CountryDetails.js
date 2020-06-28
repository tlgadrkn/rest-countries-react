import React, { useContext } from "react";
import styles from "./CountryDetails.module.css";
import arrowIcon from '../../assets/icons/arrow-back-outline.svg'
import { Link } from "react-router-dom";
import { useParams, useHistory, useLocation } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import { getSpecificCountryFromLocalStorage, getBorderCountryName } from "../../utils/helperFunctions";

const CountryDetails = () => {
  let { code } = useParams();
  const history = useHistory();
  // const location = useLocation();
  let countryData = getSpecificCountryFromLocalStorage("countries", code)[0];
  const borderCountriesName = getBorderCountryName(countryData.borders);
  return (
    <React.Fragment>
      <Navbar />
      <section>
        <div className={styles.container}>
          <button className={styles.countryDetailsButton} type="button" onClick={() => history.push("/")}>
            <img src={arrowIcon} alt="arrow icon left"></img>
            Back
          </button>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <img src={countryData.flag} alt={`${countryData.flag} flag`} />
            </div>
            <div className={styles.cardDetails}>
              <div className={styles.left}>
                <h2>{countryData.name}</h2>
                <p>
                  <strong>Native Name: </strong>
                  {countryData.nativeName}
                </p>
                <p>
                  <strong>Population: </strong>
                  {countryData.population.toLocaleString()}
                </p>
                <p>
                  <strong>Region: </strong>
                  {countryData.region}
                </p>
                <p>
                  <strong>Sub Region: </strong>
                  {countryData.subregion}
                </p>
                <p>
                  <strong>Capital: </strong>
                  {countryData.capital}
                </p>
              </div>
              <div className={styles.right}>
                <p>
                  <strong>Top Level Domain: </strong>
                  {countryData.topLevelDomain}
                </p>
                <span></span>
                <p>
                  <strong>Currency: </strong>{" "}
                  {countryData.currencies.map((currency, index) => {
                    return <span key={index}>{currency.name}</span>;
                  })}
                </p>
                <p>
                  <strong>Languages: </strong>{" "}
                  {countryData.languages.map((language, index) => {
                    return <span key={index}>{language.name}</span>;
                  })}{" "}
                </p>
              </div>

              <div className={styles.borderCountries}>
                <span>
                  <strong>Border Countries: </strong>
                </span>
                <ul>
                  {borderCountriesName.map((borderCountry, index) => {
                    return (
                      <li key={index}>
                        <Link to={borderCountry}>{borderCountry}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CountryDetails;
