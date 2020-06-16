import React, { useState } from 'react';
import styles from './App.module.css';
import Navbar from '../Navbar/Navbar.js';
import SearchCountry from '../searchCountry/searchCountry.js';
import FilterButton from '../../components/FilterButton/FilterButton.js';
import Main from '../Main/Main.js'

const Home = () => {
  const [renderCountryDetails, setRenderCountryDetails] = useState('/');
  console.log(renderCountryDetails);
  return (
        <React.Fragment>
            <Navbar />
                <div className={styles.navBottom}>
                  <SearchCountry/>
                  <FilterButton/> 
                </div>  
            <Main setRenderCountryDetails={setRenderCountryDetails}/>
      </React.Fragment >
  );
}

export default Home;