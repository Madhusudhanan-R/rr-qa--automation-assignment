export const baseUrl = 'https://tmdb-discover.surge.sh/';
export const apiBaseUrl = 'https://api.themoviedb.org/3';

// Categories for UI filtering
export const categories = ["Popular", "Trend", "Newest", "Top Rated"];

// Media types
export const types = ["Movie", "TV Shows"];

// Years for filtering
export const years = [2025, 2024, 2023, 2022];

// Ratings for filtering
export const ratings = [0,1,2,3,4,5,6,7,8,9,10];

// Genres
export const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "Thriller",
  "War",
  "Western"
];

// API Key fetcher from environment variables
export const getApiKey = (): string | null => {
  const key = process.env.TMDB_API_KEY;
  return key || null;
};
