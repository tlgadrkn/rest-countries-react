import React from 'react';
import styles from './App.module.css';
import Navbar from '../Navbar/Navbar.js';
import SearchCountry from '../searchCountry/searchCountry.js';
import FilterButton from '../../components/FilterButton/FilterButton.js';
import Main from '../Main/Main.js';

const Home = () => {
  const [themeValue, setThemeValue] = React.useState(() => {
    console.log('run');
    const value = window.localStorage.getItem('theme');
    if (value) {
      return JSON.parse(value);
    }
    return 'default';
  });

  React.useLayoutEffect(() => {
    const $html = window.document.querySelector('html');
    $html.setAttribute('class', themeValue);
    window.localStorage.setItem('theme', JSON.stringify(themeValue));
  }, [themeValue]);

  return (
    <>
      <Navbar themeValue={themeValue} handleThemeChange={setThemeValue} />
      <div className={styles.container}>
        <div className={styles.navBottom}>
          <SearchCountry />
          <FilterButton />
        </div>
        <Main />
      </div>
    </>
  );
};

export default Home;
