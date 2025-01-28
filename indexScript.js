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

// Function to check if the device is iPhone X and switch the video src
function displayVideo() {
  const videoContainer = document.querySelector(".carVidTop");

  const windowSize = window.innerWidth === 375 && window.innerHeight === 812;

  if (!windowSize) {
    videoContainer.innerHTML = "";
    const html = ` <video width="100%" height="360" autoplay loop muted>
          <source src="carVid.mov" type="video/mp4" />
        </video>`;

    videoContainer.insertAdjacentHTML("afterbegin", html);
  } else {
    videoContainer.innerHTML = "";
    const html2 = `<img src="mobileVersion/lambo.png" alt="" />`;
    videoContainer.insertAdjacentHTML("afterbegin", html2);
  }
}
window.addEventListener("load", displayVideo);
window.addEventListener("resize", displayVideo);
