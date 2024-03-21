const checkboxesValidate = require("./checkboxVal");
const axios = require("axios");

const title = document.getElementById("title-input");
const year = document.getElementById("year-input");
const director = document.getElementById("director-input");
const duration = document.getElementById("duration-input");
const rate = document.getElementById("rate-input");
const poster = document.getElementById("poster-input");

async function handlerSubmit(event) {
  event.preventDefault();
  const genres = checkboxesValidate();

  if (!genres) {
    return alert("Selecciona al menos un género");
  }

  if (
    !title.value.trim() ||
    !year.value.trim() ||
    !director.value.trim() ||
    !duration.value.trim() ||
    !rate.value.trim() ||
    !poster.value.trim()
  ) {
    return alert("Completa todos los campos del formulario");
  }

  const checkboxes = document.querySelectorAll(".genre-input:checked");
  const genres1 = [];
  checkboxes.forEach((checkbox) => {
    genres1.push(checkbox.value);
  });

  const movie = {
    title: title.value,
    year: year.value,
    director: director.value,
    duration: duration.value,
    genre: genres1,
    rate: rate.value,
    poster: poster.value,
  };

  try {
    const response = await axios.post("http://localhost:3000/movies", movie);
    console.log(response.data);
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.push(response.data);
    localStorage.setItem("movies", JSON.stringify(movies));
    window.location.href = "../index.html";
  } catch (error) {
    console.log(error);
  }
}

module.exports = handlerSubmit;
