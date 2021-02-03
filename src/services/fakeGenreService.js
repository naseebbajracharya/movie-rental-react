export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
  { _id: "5b21ca3eeb7f6fbccd471815", name: "Adventure" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
  { _id: "5b21ca3eeb7f6fbccd471869", name: "Sci-Fi" },
  { _id: "5b21ca3eeb7f6fbccd471896", name: "Horror" },
  { _id: "5b21ca3eeb7f6fbccd471800", name: "Drama" },
  { _id: "5b21ca3eeb7f6fbccd471813", name: "Musical" },
];

export function getGenres() {
  return genres.filter(g => g);
}
