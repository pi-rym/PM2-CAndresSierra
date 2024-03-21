module.exports = {
  mode: "development",
  entry: {
    index: "./scripts/index.js",
    Movies: "./scripts/createMovie/createMovie.js",
  },
  output: {
    path: __dirname + "/browser",
    filename: "[name].js",
  },
};
