const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },

  year: {
    type: Number,
    require: true,
  },

  director: {
    type: String,
    require: true,
  },

  duration: {
    type: String,
    require: true,
  },

  genre: { type: Array, require: true },

  rate: {
    type: Number,
    require: true,
  },

  poster: {
    type: String,
    require: true,
  },
});

const Movie = new mongoose.model("Movie", movieSchema);

module.exports = Movie;
