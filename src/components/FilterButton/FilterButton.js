import React from 'react';
import styles from './FilterButton.module.css'

const FilterButton = () => {
    return (
        <div className={styles.filterContent}>
           
            <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Filter By Region</button>
            <div className={styles.dropdownContent}>
                <ul>
                    <li>Link 1</li>
                    <li>Link 1</li>
                    <li>Link 1</li>
                </ul> 
            </div>
            </div>
        </div>

    )
}


export default FilterButton;