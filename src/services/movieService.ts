import axios from "axios";
import type { Movie } from "../types/movie";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

interface TMDBResponse {
  results: Movie[];
  total_pages: number;
}

export const fetchMovies = async (
  query: string,
  page: number
): Promise<TMDBResponse> => {
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        api_key: API_KEY,
        query,
        page,
      },
    }
  );

  return data;
};