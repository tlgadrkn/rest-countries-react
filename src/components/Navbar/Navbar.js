import React from 'react';
import styles from './Navbar.module.css';
import Moon from '../Icons/Moon.js';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const Navbar = ({ themeValue, handleThemeChange }) => {
  const history = useHistory();
  return (
    <div className={styles.navbarContainer}>
      <nav className={styles.navBar}>
        <Link to={'/'} onClick={() => history.push('/')}>
          Where in the world?
        </Link>

        <div className={styles.themeSwitcher}>
          <Moon className={styles.moon} />
          <button
            onClick={() =>
              handleThemeChange(themeValue === 'default' ? 'dark' : 'default')
            }
          >
            {themeValue === 'default' ? 'Dark' : 'Default'} Mode
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
