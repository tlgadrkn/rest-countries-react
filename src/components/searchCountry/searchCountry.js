import React from 'react';
import styles from '../searchCountry/searchCountry.module.css';
import SearchIcon from '../Icons/SearchIcon.js';
import { CountryContext } from '../../context/GlobalState';

const SearchCountry = () => {
  const { dispatch } = React.useContext(CountryContext);

  return (
    <React.Fragment>
      <div className={styles.searchBar}>
        <form onSubmit={(e) => e.preventDefault()}>
          {' '}
          <SearchIcon className={styles.SearchIcon} />
          <input
            onChange={(e) => {
              dispatch({ type: 'SEARCH_COUNTRY', name: e.target.value });
            }}
            style={styles}
            type='text'
            name='search'
            placeholder={`Search for a country...`}
            autoComplete='off'
          />
        </form>
      </div>
    </React.Fragment>
  );
};
export default SearchCountry;
