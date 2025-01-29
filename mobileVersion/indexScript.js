// Function to check if the device width is less or equal to 400 and switch to img
function displayVideoOrImg() {
  const videoContainer = document.querySelector(".carVidTop");

  if (window.innerWidth >= 400) {
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
window.addEventListener("load", displayVideoOrImg);
window.addEventListener("resize", displayVideoOrImg);

// Function to check if the device width is less or equal to 400 switch the ourProductsImgNTxt img src
function setImgForiPhoneX() {
  const image = document.querySelector(".ourProductsImgNTxt");

  if (window.innerWidth <= 400) {
    image.querySelector("img").src = "mobileVersion/Kong.jpg";
  }
}
window.addEventListener("load", setImgForiPhoneX);
window.addEventListener("resize", setImgForiPhoneX);

// Function to check if the device width is less or equal to 400 and switch the phrase of ourProducts
function setOurProductsPhraseForiPhoneX() {
  const phrase = document.querySelector(".interestedInTxt");

  // const windowSize = window.innerWidth === 375 && window.innerHeight === 812;

  if (window.innerWidth <= 400) {
    phrase.querySelector("h1").textContent = "OUR PRODUCTS";
  }
}
window.addEventListener("load", setOurProductsPhraseForiPhoneX);
