import React from 'react';
import styles from '../searchCountry/searchCountry.module.css';
import searchIcon from '../../assets/icons/search-outline.svg';
const searchCountry = () => {

    return (
        <>
        <div className={styles.searchBar}>
        <span> <img src={searchIcon} alt="seach bar icon"/> </span>
        <input style={styles} type="text" name="search" placeholder={`Search for a country`}/>

        </div>

    </>
    )
}


export default searchCountry;