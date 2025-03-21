const logo = document.querySelector(".header .logo");
logo.addEventListener("click", function () {
  window.location.href = logo.dataset.url;
});
