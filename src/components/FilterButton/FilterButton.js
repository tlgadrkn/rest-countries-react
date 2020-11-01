import React, { useContext } from 'react';
import styles from './FilterButton.module.css';
import ArrowDown from '../Icons/ArrowDown';
import { CountryContext } from '../../context/GlobalState';

const FilterButton = () => {
  const { dispatch } = useContext(CountryContext);

  return (
    <div className={styles.filterContent}>
      <div className={styles.dropdown}>
        <button>
          Filter by Region <ArrowDown className={styles.ArrowDown} />
        </button>
        <div className={styles.dropdownContent}>
          <ul
            onClick={(e) =>
              dispatch({ type: 'FILTER_COUNTRY', region: e.target.textContent })
            }
          >
            <li>All</li>
            <li>Africa</li>
            <li>America</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterButton;
