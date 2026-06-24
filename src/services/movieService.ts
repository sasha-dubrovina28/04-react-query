import axios from "axios";
import type { Movie } from "../types/movie";

export interface TMDBResponse {
  results: Movie[];
  total_pages: number;
}

const TOKEN = import.meta.env.VITE_TMDB_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export const fetchMovies = async (
  query: string,
  page: number
): Promise<TMDBResponse> => {
  const { data } = await api.get<TMDBResponse>("/search/movie", {
    params: {
      query,
      page,
    },
  });

  return data;
};