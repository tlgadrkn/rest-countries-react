import React, {useState, useEffect} from 'react';
import { CountryContextProvider } from '../../GlobalState';
import styles from './App.module.css';
import Navbar from '../Navbar/Navbar.js';
import SearchCountry from '../searchCountry/searchCountry.js';
import FilterButton from '../../components/FilterButton/FilterButton.js';
import Main from '../Main/Main.js'

const API_URL = "https://restcountries.eu/rest/v2/all";

// ADD PROPTYPES
// ADD CONTEXT API

function App() {
// let [countries, setCountries] = useState([]);

useEffect(() => {

  async function fetchData(urlToFetch) {
  try {
    const result = await fetch(urlToFetch);
    const data = await result.json();    
    // setCountries(data);
  } catch (error) {
    
    throw new Error(`Fetch Error - ${error}`)
  }
}

fetchData(API_URL);

//to lower api calls for now using temp values which were retrieved from api call. 
// setCountries(tempCountries)
// setFilteredCountries(tempCountries)

}, [])

// function handleFilter(e) {
//   console.log(e.target.textContent)
//   let filteredCountries = countries.filter( country => country.region.includes(e.target.textContent));
//   setFilteredCountries(filteredCountries);
// }
  return (
    <React.Fragment>
    <CountryContextProvider>
        <Navbar />
          <div className={styles.navBottom}>
            <SearchCountry/>
            <FilterButton/> 
        </div>
        <Main/>
  </CountryContextProvider>
    </React.Fragment >
  );
}

export default App;
