import React, { useState } from "react";
import DogCard from "../DogCard/DogCard";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./DogList.module.css";
import dogs from "../../service/mock/dogsData";

const DogList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDogs = dogs.filter((dog) =>
    dog.breed.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <div className={styles.wrapper}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className={styles.container}>
        {filteredDogs.length > 0 ? (
          filteredDogs.map((dog, index) => (
            <DogCard
              key={index}
              breed={dog.breed}
              description={dog.description}
              image={dog.image}
            />
          ))
        ) : (
          <p className={styles.noResults}>
            No results found. Try another breed!
          </p>
        )}
      </div>
    </div>
  );
};

export default DogList;
