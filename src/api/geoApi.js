const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

export const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

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

export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5'
export const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;