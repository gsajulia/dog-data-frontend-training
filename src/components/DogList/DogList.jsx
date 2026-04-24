import React, { useState, useEffect } from "react";
import DogCard from "../DogCard/DogCard";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./DogList.module.css";
import { fetchDogBreeds } from "../../service/dogService.js";

const DogList = () => {
  return (
    <div className={styles.wrapper}>
      {/* Search Bar */}
      <div className={styles.container}>
        {/* Dogs Cards */}

        {/* Dogs noResults */}

        {/* Dogs loading */}
      </div>
    </div>
  );
};

export default DogList;
