import React from "react";
import styles from "./CountryDetails.module.css";
import { Link } from "react-router-dom";
import { useParams, useHistory, useLocation } from "react-router";
import Navbar from "../../components/Navbar/Navbar";

const CountryDetails = () => {
  let { code } = useParams();
  const history = useHistory();
  const location = useLocation();
  console.log(history);
  console.log(location.state);

  return (
    <React.Fragment>
      <Navbar />
      <section>
        <div className={styles.container}>
          <button type="button" onClick={() => history.push("/")}>
            Go Back
          </button>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <img
                src={location.state.countryFlag}
                alt={`${location.state.countryFlag} flag`}
              />
            </div>
            <div className={styles.cardDetails}>
              <div className={styles.left}>
                  <h2>{location.state.countryName}</h2>
                  <p>
                    <strong>Native Name: </strong>
                    {location.state.nativeName}
                  </p>
                  <p>
                    <strong>Population: </strong>
                    {location.state.countryPopulation.toLocaleString()}
                  </p>
                  <p>
                    <strong>Region: </strong>
                    {location.state.countryRegion}
                  </p>
                  <p>
                    <strong>Sub Region: </strong>
                    {location.state.subregion}
                  </p>
                  <p>
                    <strong>Capital: </strong>
                    {location.state.countryCapital}
                  </p>

                  <div className={styles.borderCountries}>
                <span>Border Countries</span>
                <ul>
                  {location.state.borders.map((borderCountry, index) => {
                    return (
                      <li key={index}>
                        <Link to={borderCountry}>{borderCountry}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              </div>
              <div className={styles.right}>
                <p>
                  <strong>Top Level Domain: </strong>
                  {location.state.topLevelDomain}
                </p>
                <span></span>
                <p>
                  <strong>Currency: </strong>{" "}
                  {location.state.currencies.map((currency, index) => {
                    return <span key={index}>{currency.name}</span>;
                  })}
                </p>
                <p>
                  <strong>Languages: </strong>{" "}
                  {location.state.languages.map((language, index) => {
                    return <span key={index}>{language.name}</span>;
                  })}{" "}
                </p>
              </div>


              </div>
            </div>
          </div>
        </section>
    </React.Fragment>
  );
};

export default CountryDetails;
