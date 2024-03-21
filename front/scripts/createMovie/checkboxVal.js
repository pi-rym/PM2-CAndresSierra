function checkboxesValidate() {
  const checkboxes = document.querySelectorAll('input[name="genre[]"]');

  for (const item of checkboxes) {
    if (item.checked) {
      item.classList.add("selected");
      return true;
    }
  }
}

module.exports = checkboxesValidate;
