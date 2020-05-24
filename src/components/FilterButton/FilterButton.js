import React from 'react';
import styles from './FilterButton.module.css'

const FilterButton = ( {handleFilter}) => {


    return (
        <div className={styles.filterContent}>
           
            <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Filter By Region</button>
            <div className={styles.dropdownContent}>
                <ul onClick={handleFilter}>
                    <li>Africa</li>
                    <li>America</li>
                    <li>Asia</li>
                    <li>Europe</li>
                    <li>Oceania</li>
                </ul> 
            </div>
            </div>
        </div>

    )
}


export default FilterButton;