import React, { useContext } from "react";
import styles from "./Country.module.css";
import { Link } from "react-router-dom";
const Country = ({
  alpha2Code,
  countryFlag,
  countryName,
  countryPopulation,
  countryRegion,
  countryCapital,
  topLevelDomain,
  nativeName,
  subregion,
  borders,
  currencies,
  languages
}) => {

  // to={{
  //   pathname: "/courses",
  //   search: "?sort=name",
  //   hash: "#the-hash",
  //   state: { fromDashboard: true }
  // }}
  return (
    <React.Fragment>
      <Link to={{
        pathname: `/${alpha2Code}`,
        state: {
          alpha2Code,
          countryFlag,
          countryName,
          countryPopulation,
          countryRegion,
          countryCapital,
          topLevelDomain,
          nativeName,
          subregion,
          borders,
          currencies,
          languages
        }
      }}>
        <section
          id={alpha2Code}
        >
          <div className={styles.card}>
            <img src={countryFlag} alt={`${countryName} flag`}></img>
            <div className={styles.cardContainer}>
              <h3>{countryName}</h3>
              <ul className={styles.countryDetails}>
                <li>
                  <strong>Population: </strong>
                  {countryPopulation.toLocaleString()}
                </li>
                <li>
                  <strong>Capital: </strong>
                  {countryCapital}
                </li>
                <li>
                  <strong>Region: </strong>
                  {countryRegion}
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Link>
    </React.Fragment>
  );
};

export default Country;
