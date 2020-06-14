import React, { useContext, useState } from 'react';
import styles from '../searchCountry/searchCountry.module.css';
import searchIcon from '../../assets/icons/search-outline.svg';
import { CountryContext } from '../../GlobalState';

const SearchCountry = () => {
const { dispatch } = useContext(CountryContext);
const [searchText, setSearchText] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
  
    dispatch({ type: 'SEARCH_COUNTRY', name: searchText });
    setSearchText(''); 
}
    return (
        <React.Fragment>
        <div className={styles.searchBar}>
        <form onSubmit={handleSubmit}>
        <span> <img src={searchIcon} alt="seach bar icon"/> </span>
        <input onChange={(e) => setSearchText( e.target.value )} style={styles} type="text" name="search" placeholder={`Search for a country`}/>
        </form>
        </div>
        </React.Fragment>
    )
}
export default SearchCountry;