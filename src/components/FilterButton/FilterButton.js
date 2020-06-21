import React, { useContext } from "react";
import styles from "./FilterButton.module.css";
import { CountryContext } from "../../GlobalState";

const FilterButton = () => {
  const { dispatch, filterCountries } = useContext(CountryContext);

  return (
    <div className={styles.filterContent}>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>Filter By Region</button>
        <div className={styles.dropdownContent}>
          <ul
            onClick={(e) =>
              dispatch({ type: "FILTER_COUNTRY", region: e.target.textContent })
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
