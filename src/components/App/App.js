import React, {useState, useRef, useEffect} from 'react';
import styles from './App.module.css';
import Navbar from '../Navbar/Navbar.js';
import SearchCountry from '../searchCountry/searchCountry.js';
import FilterButton from '../../components/FilterButton/FilterButton.js';
import Country from '../Country/Country.js';
import Main from '../Main/Main.js'
import tempCountries from './tempCountries';

const API_URL = "https://restcountries.eu/rest/v2/all";



function App() {

let [countries, setCountries] = useState([]);
let [filteredCountries, setFilteredCountries] = useState([]);

// Change this to cache to make less API Calls.
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

// fetchData(API_URL);

//to lower api calls for now using temp values which were retrieved from api call. 
setCountries(tempCountries)
}, [])

function handleSearch(e) {
  let filtered = countries.filter(country => country.name.toUpperCase().includes(e.target.value.toUpperCase()))
  setCountries(filtered)  

  if (e.target.value.length === 0) {
    console.log(tempCountries);
    setCountries(tempCountries)
  }
}

  return (
    <React.Fragment>

    <Navbar />
      <div className={styles.navBottom}>
        <SearchCountry handleSearch={handleSearch} />
        <FilterButton /> 
     </div>
    <Main  countriesToLoad={countries} />
  
    </React.Fragment >
  );
}

export default App;
