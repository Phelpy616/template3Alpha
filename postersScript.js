const posterElements = document.querySelectorAll(".posters div");

posterElements.forEach((poster) => {
  poster.addEventListener("click", () => {
    const url = poster.dataset.url;
    if (url) {
      window.location.href = url; // Open the URL in a new tab
    }
  });
});

//go to cart page
const cartLogo = document.querySelector(".cart");
cartLogo.addEventListener("click", function () {
  window.location.href = "cartPage.html";
});
