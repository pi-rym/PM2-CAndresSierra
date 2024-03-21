const handlerSubmit = require("./handlerSubmit");
const cleaner = require("./cleaner");

const options = document.getElementById("options");
const cleanerButton = document.getElementById("cleaner-button");
const form = document.getElementById("form");

const genres = [
  "Action",
  "Fantasy",
  "Comedy",
  "Drama",
  "Sci-fi",
  "Terror",
  "Adventure",
  "Romance",
];

function genresRender() {
  options.innerHTML = "";

  for (const genre of genres) {
    const input = document.createElement("input");
    const label = document.createElement("label");

    input.type = "checkbox";
    input.id = genre;
    input.name = "genre[]";
    input.value = genre;
    input.classList.add("genre-input");

    label.htmlFor = genre;
    label.textContent = genre;
    label.classList.add("label-checkbox");

    options.classList.add("container-checkbox");
    options.appendChild(input);
    options.appendChild(label);
  }

  return options;
}

genresRender();

form.addEventListener("submit", handlerSubmit);

cleanerButton.addEventListener("click", cleaner);
