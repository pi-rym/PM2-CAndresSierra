const movieServices = require("../services/movieService");

const movieController = async (req, res) => {
  try {
    const movies = await movieServices.getAllMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  movieController,
};
