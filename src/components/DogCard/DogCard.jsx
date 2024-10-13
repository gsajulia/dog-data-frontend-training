import React from "react";
import styles from "./DogCard.module.css";
import emptyImage from "../../assets/fingerprint.png";

const DogCard = ({ breed, description, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image || emptyImage} alt={breed} className={styles.image} />
      </div>
      <h2 className={styles.breed}>{breed}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default DogCard;
