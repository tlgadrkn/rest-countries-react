import React from 'react';
import styles from '../searchCountry/searchCountry.module.css';
import searchIcon from '../../assets/icons/search-outline.svg';
const searchCountry = ({handleSearch}) => {

    return (
        <>
        <div className={styles.searchBar}>
        <span> <img src={searchIcon} alt="seach bar icon"/> </span>
        <input onInput={handleSearch} style={styles} type="text" name="search" placeholder={`Search for a country`}/>

        </div>

    </>
    )
}


export default searchCountry;