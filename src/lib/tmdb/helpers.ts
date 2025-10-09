import { IMAGE_BASE_URL } from "../utils";
import { tmdbFetch } from "./tmdb-client";

export function getMovieImage(relativePath: string) {
  return IMAGE_BASE_URL + relativePath;
}

export async function getMovieById(id: string) {
  const res = await tmdbFetch(`/movie/${id}`);
  return res;
}
