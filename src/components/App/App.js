import React, {useState, setState} from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar.js';

function App() {

let [countries, setCountries] = useState([]);



  return (
    <React.Fragment>

    <Navbar />
    <div className="App">
      <p>hey from app</p>
    </div>

    </React.Fragment >
  );
}

export default App;
