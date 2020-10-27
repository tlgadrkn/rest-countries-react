import React from 'react';
import styles from './CountryDetails.module.css';
import arrowIcon from '../../assets/icons/arrow-back-outline.svg';
import { Link } from 'react-router-dom';
import { useParams, useHistory, Redirect } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import CountryErrorBoundary from '../ErrorFallback/ErrorFallback';
import {
  getSpecificCountryFromLocalStorage,
  getFilteredBorderCountries,
} from '../../utils/helperFunctions';

const CountryDetails = () => {
  const history = useHistory();
  const { code } = useParams();
  const countryData = getSpecificCountryFromLocalStorage(
    'countries',
    code.toUpperCase()
  )[0];

  // const location = useLocation();

  if (code.length !== 3) {
    return <Redirect to={'/'} />;
  }

  var filteredBorderCountries = getFilteredBorderCountries(countryData.borders);
  return (
    <div>
      <Navbar />
      <CountryErrorBoundary>
        <section>
          <div className={styles.countryContainer}>
            <button
              className={styles.countryDetailsButton}
              type='button'
              onClick={() => history.push('/')}
            >
              <img src={arrowIcon} alt='an arrow ıcon poıntıng to left'></img>
              Back
            </button>

            <div className={styles.countryInfoWrapper}>
              <div className={styles.countryFlag}>
                <img src={countryData.flag} alt={`${countryData.flag} flag`} />
              </div>
              <div className={styles.countryInfo}>
                <div className={styles.countryName}>
                  <h2>{countryData.name}</h2>
                </div>
                <section className={styles.col}>
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
                </section>
                <div className={styles.col}>
                  <p>
                    <strong>Top Level Domain: </strong>
                    {countryData.topLevelDomain}
                  </p>
                  <span></span>
                  <p>
                    <strong>Currency: </strong>{' '}
                    {countryData.currencies.map((currency, index) => {
                      return <span key={index}>{currency.name}</span>;
                    })}
                  </p>
                  <p>
                    <strong>Languages: </strong>{' '}
                    {countryData.languages.map((language, index) => {
                      return <span key={index}>{language.name}</span>;
                    })}{' '}
                  </p>
                </div>

                <div className={styles.borderCountries}>
                  <span>
                    <strong>Border Countries: </strong>
                  </span>
                  <ul>
                    {filteredBorderCountries.map((borderCountry, index) => {
                      return (
                        <li key={index}>
                          <Link to={borderCountry.countryCode}>
                            {borderCountry.countryName}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </CountryErrorBoundary>
    </div>
  );
};

export default CountryDetails;
