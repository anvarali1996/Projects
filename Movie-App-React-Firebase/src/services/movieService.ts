
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY; // Access Vite environment variables
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchMovies = async (page: number = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        page: page,
      },
    });
    return response.data.results; // Returns an array of movies
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
