import React, {useState, useRef, useEffect} from 'react';
import styles from './App.module.css';
import Navbar from '../Navbar/Navbar.js';
import SearchCountry from '../searchCountry/searchCountry.js';
import FilterButton from '../../components/FilterButton/FilterButton.js';
import Country from '../Country/Country.js';
import Main from '../Main/Main.js'
import tempCountries from './tempCountries';
import CountryDetails from '../CountryDetails/CountryDetails';

const API_URL = "https://restcountries.eu/rest/v2/all";

// ADD PROPTYPES
// ADD CONTEXT API
// ADD UTILITIES FOLDER TO STORE HELPER FUNCTIONS

function App() {

let [countries, setCountries] = useState([]);
let [filteredCountries, setFilteredCountries] = useState([]);
let [modalIsActive, setModalIsActive] = useState(false);
let [selectedCountry, setSelectedCountry] = useState([]);

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
setFilteredCountries(tempCountries)

}, [])

function handleSearch(e) {
  if (e.target.value.length === 0) {
    console.log(tempCountries);
    setCountries(tempCountries)
  }
  let filtered = countries.filter(country => country.name.toUpperCase().includes(e.target.value.toUpperCase()))
  setFilteredCountries(filtered)  
}
function handleFilter(e) {
  console.log(e.target.textContent)
  let filteredCountries = countries.filter( country => country.region.includes(e.target.textContent));
  setFilteredCountries(filteredCountries);

}
const getClickedCountryInformation = elementId => {
  setSelectedCountry(countries.filter( country => country.alpha2Code === elementId))
  setModalIsActive(true)

}
  return (
    <React.Fragment>

    <Navbar />
      <div className={styles.navBottom}>
        <SearchCountry handleSearch={handleSearch} />
        <FilterButton handleFilter={handleFilter}/> 
     </div>
    {modalIsActive ? 
     <CountryDetails 
     details={selectedCountry}/>
     :
    <Main 
    countriesToLoad={filteredCountries}
    getClickedCountriesId={getClickedCountryInformation}    
    />}
    </React.Fragment >
  );
}

export default App;
