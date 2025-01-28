// Select the menu element
const menu = document.querySelector(".menu");
const menuElements = document.querySelectorAll(".menu div");
// Add a button or trigger to toggle the menu
const toggleMenuButton = document.querySelector(".header img"); // Example: your logo or another button

// Toggle the menu visibility
toggleMenuButton.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none"; // Hide the menu
  } else {
    menu.style.display = "block"; // Show the menu
  }
});

menuElements.forEach((element) => {
  element.addEventListener("click", function () {
    window.location.href = element.dataset.url;
  });
});
