function setImgForiPhoneX() {
  const image = document.querySelector(".txtAndImg div:nth-child(2)");

  const windowSize = window.innerWidth === 375 && window.innerHeight === 812;

  if (windowSize) {
    image.querySelector("img").src = "supra's.jpg";
  }
}
window.addEventListener("load", setImgForiPhoneX);
window.addEventListener("resize", setImgForiPhoneX);
