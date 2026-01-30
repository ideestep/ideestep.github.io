function loadPartial(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error(`Error loading ${file}`, err));
}

document.addEventListener("DOMContentLoaded", () => {
  loadPartial("header-placeholder", "partials/header.html");
  loadPartial("footer-placeholder", "partials/footer.html");
});
