import React, {useState, setState, useEffect} from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar.js';
import Country from '../Country/Country.js';
import Main from '../Main/Main.js'

const API_URL = "https://restcountries.eu/rest/v2/all"



function App() {

let [countries, setCountries] = useState([]);




useEffect(() => {

  async function fetchData(urlToFetch) {
  try {
    const result = await fetch(urlToFetch);
    const data = await result.json();    
    setCountries(data);
  } catch (error) {
    
    throw new Error(`Fetch Error - ${error}`)
  }
}

fetchData(API_URL);
console.log(countries);

}, [])


console.log(countries);

  return (
    <React.Fragment>

    <Navbar />
    <Main  countriesToLoad={countries} />
  
    </React.Fragment >
  );
}

export default App;
