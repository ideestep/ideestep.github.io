function loadHTML(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error(`Error loading ${file}`, err));
}

loadHTML("site-header", "includes/header.html");
loadHTML("site-footer", "includes/footer.html");

