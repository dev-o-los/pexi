export type Movie = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: string[];
  original_language: string;
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

// export const MOVIES: Movie[] = [
//   {
//     id: 111,
//     title: "Neon Echo",
//     year: 2025,
//     duration: "2h 8m",
//     rating: 8.7,
//     genres: ["Sci‑Fi", "Thriller"],
//     description:
//       "In a city of light and shadow, a renegade signal engineer uncovers a broadcast that can bend reality.",
//     cast: ["L. Chen", "M. Alvarez", "K. Okafor"],
//     poster: "/neon-echo-poster.jpg",
//     backdrop: "/neon-city-cinematic-backdrop.jpg",
//   },
//   {
//     id: "midnight-tide",
//     title: "Midnight Tide",
//     year: 2024,
//     duration: "1h 56m",
//     rating: 8.2,
//     genres: ["Drama", "Mystery"],
//     description:
//       "A coastal town’s unspoken past resurfaces when the ocean draws back more than the tide.",
//     cast: ["S. Park", "I. Romero", "J. Singh"],
//     poster: "/midnight-tide-poster.jpg",
//     backdrop: "/moody-ocean-backdrop.jpg",
//     video: "",
//   },
//   {
//     id: "hollow-sun",
//     title: "Hollow Sun",
//     year: 2023,
//     duration: "2h 14m",
//     rating: 9.0,
//     genres: ["Action", "Adventure"],
//     description:
//       "A pilot pursues a dying star to save her world, confronting forces beyond time.",
//     cast: ["A. Yusuf", "C. Morgan", "T. Kato"],
//     poster: "/hollow-sun-poster.jpg",
//     backdrop: "/cosmic-adventure-backdrop.jpg",
//     video: "",
//   },
// ];

// export const trending = MOVIES;
// export const newReleases = MOVIES.slice(0, 2);
// export const topRated = MOVIES.sort((a, b) => b.rating - a.rating);
// export const upcoming = MOVIES;
export const genres = ["Sci‑Fi", "Drama", "Mystery", "Adventure", "Thriller"];
