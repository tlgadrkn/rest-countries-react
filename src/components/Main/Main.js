import React, { useContext } from 'react';
import Country from '../Country/Country.js';
import { CountryContext } from '../../context/GlobalState';
import styles from './Main.module.css';
import { FixedSizeList as List } from 'react-window';

const Main = () => {
  const { countries } = useContext(CountryContext);

  return countries ? (
    <React.Fragment>
      <main className={styles.main}>
        {countries.map((country) => {
          return (
            <List
              className='List'
              height={1000}
              itemCount={1000}
              itemSize={35}
              width={900}
            >
              <Country
                alpha3Code={country.alpha3Code}
                countryName={country.name}
                countryFlag={country.flag}
                countryPopulation={country.population}
                countryRegion={country.region}
                countryCapital={country.capital}
                topLevelDomain={country.topLevelDomain}
                nativeName={country.nativeName}
                subregion={country.subregion}
                borders={country.borders}
                currencies={country.currencies}
                languages={country.languages}
                key={country.alpha3Code}
              />
            </List>
          );
        })}
      </main>
    </React.Fragment>
  ) : (
    <div> No Countries to list </div>
  );
};
export default Main;
