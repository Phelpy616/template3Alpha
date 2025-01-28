const clothingElements = document.querySelectorAll(".clothing div");

clothingElements.forEach((clothing) => {
  clothing.addEventListener("click", () => {
    const url = clothing.dataset.url;
    if (url) {
      window.location.href = url; // Open the URL in a new tab
    }
  });
});

//go to cart page
const cartLogo = document.querySelector(".cart");
cartLogo.addEventListener("click", function () {
  window.location.href = "../cartPage.html";
});
