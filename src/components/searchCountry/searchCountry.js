import React from 'react';
import styles from '../searchCountry/searchCountry.module.css';
import SearchIcon from '../../assets/icons/SearchIcon.js';
import { CountryContext } from '../../context/GlobalState';

const SearchCountry = () => {
  const { dispatch } = React.useContext(CountryContext);

  return (
    <React.Fragment>
      <div className={styles.searchBar}>
        <form onSubmit={(e) => e.preventDefault()}>
          {' '}
          <SearchIcon className={styles.SearchIcon} />
          {/* <img src={searchIcon} alt='seach bar icon' />{' '} */}
          <input
            onChange={(e) => {
              dispatch({ type: 'SEARCH_COUNTRY', name: e.target.value });
            }}
            style={styles}
            type='text'
            name='search'
            placeholder={`Search for a country...`}
          />
        </form>
      </div>
    </React.Fragment>
  );
};
export default SearchCountry;
