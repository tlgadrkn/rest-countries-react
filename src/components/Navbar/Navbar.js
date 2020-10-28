import React from 'react';
import styles from './Navbar.module.css';
import Moon from '../../assets/icons/Moon.js';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { ThemeContext } from '../../context/ThemeState';
const Navbar = () => {
  const { themeValue, dispatch } = React.useContext(ThemeContext);
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
              dispatch({
                type: 'SET_THEME',
                themeValue: themeValue === 'dark' ? 'default' : 'dark',
              })
            }
          >
            {themeValue && themeValue[0].toUpperCase() + themeValue.slice(1)}{' '}
            Mode
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
