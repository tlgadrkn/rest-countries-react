import React from 'react';
import styles from './FilterButton.module.css'

const FilterButton = () => {

    return (
        <div className={styles.filterContent}>
            <button>
                Filter By Region
            </button>
        </div>

    )
}


export default FilterButton;