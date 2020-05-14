import React, {useState, setState} from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar.js';
import Country from '../Country/Country.js';
import Main from '../Main/Main.js'





function App() {

let [countries, setCountries] = useState([]);






  return (
    <React.Fragment>

    <Navbar />
    <Main   />
  
    </React.Fragment >
  );
}

export default App;
