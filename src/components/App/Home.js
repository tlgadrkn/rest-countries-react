import React from 'react';
import styles from './App.module.css';
import Navbar from '../Navbar/Navbar.js';
import SearchCountry from '../searchCountry/searchCountry.js';
import FilterButton from '../../components/FilterButton/FilterButton.js';
import Main from '../Main/Main.js';
import CountryErrorBoundary from '../ErrorFallback/ErrorFallback';
const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.navBottom}>
          <SearchCountry />
          <FilterButton />
        </div>
        <CountryErrorBoundary>
          <Main />
        </CountryErrorBoundary>
      </div>
    </>
  );
};

export default Home;
