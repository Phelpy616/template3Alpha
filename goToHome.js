const logo = document.querySelector(".header .logo");
logo.addEventListener("click", function () {
  window.location.href = logo.dataset.url;
});

//go to ConstellarWeb page
const goBackBtn = document.querySelector('.tag div')
goBackBtn.addEventListener('click',()=>{
  window.location.href = 'https://constellarweb.com/'
})