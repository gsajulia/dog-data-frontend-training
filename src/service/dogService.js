import dogs from "./mock/dogsData";

const fetchDogBreeds = async () => {
  try {
    const response = await fetch("https://dogapi.dog/api/v2/breeds");
    const results = await response.json();

    if (response.ok) {
      return results.data;
    } else {
      return dogs;
    }
  } catch (error) {
    console.error("Error fetching dog breeds:", error);
    throw error;
  }
};

export { fetchDogBreeds };
