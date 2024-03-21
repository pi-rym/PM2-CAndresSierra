const title = document.getElementById("title-input");
const year = document.getElementById("year-input");
const director = document.getElementById("director-input");
const duration = document.getElementById("duration-input");
const rate = document.getElementById("rate-input");
const poster = document.getElementById("poster-input");

function cleaner(event) {
  event.preventDefault();
  title.value = "";
  year.value = "";
  director.value = "";
  duration.value = "";
  rate.value = "";
  poster.value = "";

  const checkboxes = document.querySelectorAll('input[name="genre[]"]');

  for (const item of checkboxes) {
    item.checked = false;
    item.classList.remove("selected");
  }
}

module.exports = cleaner;
