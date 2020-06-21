import React, { useState } from "react";
import styles from "./App.module.css";
import Navbar from "../Navbar/Navbar.js";
import SearchCountry from "../searchCountry/searchCountry.js";
import FilterButton from "../../components/FilterButton/FilterButton.js";
import Main from "../Main/Main.js";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className={styles.navBottom}>
        <SearchCountry />
        <FilterButton />
      </div>
      <Main  />
    </React.Fragment>
  );
};

export default Home;
