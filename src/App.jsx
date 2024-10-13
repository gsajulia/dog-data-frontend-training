import React from "react";
import DogList from "./components/DogList/DogList";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Dog Breeds</h1>
      <DogList />
    </div>
  );
}

export default App;
