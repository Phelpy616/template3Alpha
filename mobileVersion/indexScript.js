// Function to check if the device is iPhone X and switch to image
function changeImgForVid() {
  const video = document.querySelector(".carVidTop video");

  const windowSize = window.innerWidth === 375 && window.innerHeight === 812;

  if (windowSize) {
    video.style.display = "block";
  }
}
window.addEventListener("load", changeImgForVid);
window.addEventListener("resize", changeImgForVid);

// Function to check if the device is iPhone X and switch the ourProductsImgNTxt img src
function setImgForiPhoneX() {
  const image = document.querySelector(".ourProductsImgNTxt");

  const windowSize = window.innerWidth === 375 && window.innerHeight === 812;

  if (windowSize) {
    image.querySelector("img").src = "mobileVersion/Kong.jpg";
  }
}
window.addEventListener("load", setImgForiPhoneX);
window.addEventListener("resize", setImgForiPhoneX);

// Function to check if the device is iPhone X and switch the phrase of ourProducts
function setOurProductsPhraseForiPhoneX() {
  const phrase = document.querySelector(".interestedInTxt");

  const windowSize = window.innerWidth === 375 && window.innerHeight === 812;

  if (windowSize) {
    phrase.querySelector("h1").textContent = "OUR PRODUCTS";
  }
}
window.addEventListener("load", setOurProductsPhraseForiPhoneX);
