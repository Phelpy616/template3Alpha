const logo = document.querySelector(".logo");
logo.addEventListener("click", function () {
  window.location.href = logo.dataset.url;
});
