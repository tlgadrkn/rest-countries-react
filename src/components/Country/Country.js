import React from 'react';
import PropTypes from 'prop-types';
import styles from './Country.module.css';
import { Link } from 'react-router-dom';

const Country = ({
  alpha3Code,
  countryFlag,
  countryName,
  countryPopulation,
  countryRegion,
  countryCapital,
}) => {
  return (
    <React.Fragment>
      <Link
        to={{
          pathname: `/${alpha3Code}`,
        }}
      >
        <section id={alpha3Code}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <img src={countryFlag} alt={`${countryName} flag`}></img>
            </div>
            <div className={styles.cardBody}>
              <h3>{countryName}</h3>
              <ul>
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

Country.propTypes = {
  alpha3Code: PropTypes.string.isRequired,
  countryFlag: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  countryPopulation: PropTypes.number.isRequired,
  countryRegion: PropTypes.string.isRequired,
  countryCapital: PropTypes.string.isRequired,
};

export default Country;
