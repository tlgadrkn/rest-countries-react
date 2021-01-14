import React from 'react';
import VanillaTilt from 'vanilla-tilt';
import styles from './CountryDetails.module.css';
import { Link } from 'react-router-dom';
import { useParams, useHistory, Redirect } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import {
  getSpecificCountryFromLocalStorage,
  getFilteredBorderCountries,
} from '../../utils/helperFunctions';
import ArrowLeft from '../Icons/ArrowLeft';

const CountryDetails = () => {
  const history = useHistory();
  const { code } = useParams();
  const countryData = getSpecificCountryFromLocalStorage(
    'countries',
    code.toUpperCase()
  )[0];

  const flagRef = React.useRef();
  React.useEffect(() => {
    const img = flagRef.current;
    VanillaTilt.init(img, {
      max: 8,
      speed: 25,
    });

    return () => img.VanillaTilt?.destroy();
  }, []);

  if (code.length !== 3) {
    return <Redirect to={'/'} />;
  }
  let filteredBorderCountries = getFilteredBorderCountries(countryData.borders);

  return (
    <div>
      <Navbar />
      <section>
        <div className={styles.countryContainer}>
          <button
            className={styles.countryDetailsButton}
            type='button'
            onClick={() => history.push('/')}
          >
            <ArrowLeft className={styles.icon} />
            Back
          </button>

          <div className={styles.countryInfoWrapper}>
            <div className={styles.countryFlag}>
              <img
                ref={flagRef}
                src={countryData.flag}
                alt={`${countryData.name} flag`}
              />
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
                  {countryData.currencies.map((currency) => {
                    return <span key={currency.name}>{currency.name}</span>;
                  })}
                </p>
                <p>
                  <strong>Languages: </strong>{' '}
                  {countryData.languages.map((language, index) => {
                    return (
                      <span key={language.name}>
                        {index + 1 !== countryData.languages.length
                          ? `${language.name}, `
                          : language.name}
                      </span>
                    );
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
    </div>
  );
};

export default CountryDetails;
