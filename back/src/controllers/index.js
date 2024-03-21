const movieServices = require("../services/movieService");

const movieController = async (req, res) => {
  try {
    const movies = await movieServices.getAllMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createMovie = async (req, res) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;
  const newMovie = await movieServices.createMovie({
    title,
    year,
    director,
    duration,
    genre,
    rate,
    poster,
  });
  res.status(201).json(newMovie);
};

module.exports = {
  movieController,
  createMovie,
};
