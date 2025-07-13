const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

export const geoApiOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
  },
};

export const fetchCities = async (searchText) => {
  try {
    const response = await fetch(`${url}?minPopulation=100000&namePrefix=${searchText}`, geoApiOptions);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Failed to fetch cities: ", error);
    return [];
  }
};
