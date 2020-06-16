import React, { useContext, useState, } from 'react';
import styles from '../searchCountry/searchCountry.module.css';
import searchIcon from '../../assets/icons/search-outline.svg';
import { CountryContext } from '../../GlobalState';

const SearchCountry = () => {
const { dispatch } = useContext(CountryContext);
    return (
        <React.Fragment>
        <div className={styles.searchBar}>
        <form>
        <span> <img src={searchIcon} alt="seach bar icon"/> </span>
        <input onChange={e => dispatch({type: "SEARCH_COUNTRY", name: e.target.value})} style={styles} type="text" name="search" placeholder={`Search for a country`}/>
        </form>
        </div>
        </React.Fragment>
    )
}
export default SearchCountry;