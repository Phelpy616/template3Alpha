//Top picks: go to the clicked product page
const topPicksElements = document.querySelectorAll(".topPicks div");
topPicksElements.forEach((element) =>
  element.addEventListener("click", function () {
    const url = element.dataset.url;

    if (url) {
      window.location.href = url;
    }
  })
);

//Our new products: go to the clicked product page
const newProductsElements = document.querySelectorAll(".newProducts div");
newProductsElements.forEach((element) =>
  element.addEventListener("click", function () {
    const url = element.dataset.url;

    if (url) {
      window.location.href = url;
    }
  })
);

//go to cart page
const cartLogo = document.querySelector(".cart");
cartLogo.addEventListener("click", function () {
  window.location.href = cartLogo.dataset.url;
});
