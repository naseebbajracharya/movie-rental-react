import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Logan",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 8,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "The Invisible Man",
    genre: { _id: "5b21ca3eeb7f6fbccd471869", name: "Sci-Fi" },
    numberInStock: 5,
    dailyRentalRate: 2.0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Jojo Rabbit",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 13,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Avengers: Infinity War",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 9,
    dailyRentalRate: 4.5
  },

  {
    _id: "5b21ca3eeb7f6fbccd47181z",
    title: "Sinister",
    genre: { _id: "5b21ca3eeb7f6fbccd471896", name: "Horror" },
    numberInStock: 3,
    dailyRentalRate: 2.5
  },

  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Avengers: Endgame",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 11,
    dailyRentalRate: 4.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471999",
    title: "1917",
    genre: { _id: "5b21ca3eeb7f6fbccd471800", name: "Drama" },
    numberInStock: 7,
    dailyRentalRate: 3.0
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Despicable Me",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 2,
    dailyRentalRate: 2.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47180z",
    title: "The Revenant",
    genre: { _id: "5b21ca3eeb7f6fbccd471815", name: "Adventure" },
    numberInStock: 5,
    dailyRentalRate: 2.0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471355",
    title: "Tenet",
    genre: { _id: "5b21ca3eeb7f6fbccd471869", name: "Sci-Fi" },
    numberInStock: 9,
    dailyRentalRate: 2.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "Knives Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 3,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471969",
    title: "The Conjuring 2",
    genre: { _id: "5b21ca3eeb7f6fbccd471896", name: "Horror" },
    numberInStock: 10,
    dailyRentalRate: 1.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471996",
    title: "A Star is Born",
    genre: { _id: "5b21ca3eeb7f6fbccd471813", name: "Musical" },
    numberInStock: 6,
    dailyRentalRate: 1.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471906",
    title: "Little Women",
    genre: { _id: "5b21ca3eeb7f6fbccd471800", name: "Drama" },
    numberInStock: 12,
    dailyRentalRate: 2.0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Avengers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 27,
    dailyRentalRate: 2.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47196o",
    title: "Bohemian Rhapsody",
    genre: { _id: "5b21ca3eeb7f6fbccd471813", name: "Musical" },
    numberInStock: 2,
    dailyRentalRate: 1.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47108z",
    title: "Jumanji: The Next Level",
    genre: { _id: "5b21ca3eeb7f6fbccd471815", name: "Adventure" },
    numberInStock: 5,
    dailyRentalRate: 2.0
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
