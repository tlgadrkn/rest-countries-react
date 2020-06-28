import React, { useContext } from "react";
import Country from "../Country/Country.js";
import { CountryContext } from "../../context/GlobalState";
import styles from "./Main.module.css";

const Main = () => {
  const { countries } = useContext(CountryContext);
  return countries ? (
    <React.Fragment>
      <main>
        {countries.map((country, index) => {
          return (
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
              key={index}
            />
          );
        })}
      </main>
    </React.Fragment>
  ) : (
    <div> No Countries to list </div>
  );
};
export default Main;
