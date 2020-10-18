import React from 'react';
import styles from './Navbar.module.css';
import moonIcon from '../../assets/icons/moon-outline.svg';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { ThemeContext } from '../../context/ThemeState';
const Navbar = () => {
  const { themeValue, dispatch } = React.useContext(ThemeContext);
  const history = useHistory();

  console.log(themeValue);
  return (
    <div className={styles.container}>
      <nav className={styles.navBar}>
        <Link to={'/'} onClick={() => history.push('/')}>
          Where in the world?
        </Link>

        <div className={styles.themeSwitcher}>
          <button
            onClick={() =>
              dispatch({
                type: 'SET_THEME',
                themeValue: themeValue === 'dark' ? 'default' : 'dark',
              })
            }
          >
            <img
              src={moonIcon}
              alt='moon icon to swithc between dark mode and light'
            />
            {themeValue} Mode
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
