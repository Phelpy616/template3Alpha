document.addEventListener("DOMContentLoaded", function () {
  const quantityInput = document.querySelector(".posterQuantity");
  const poster = document.querySelector(
    ".posterInformations div:nth-child(1) div"
  ); // Select the correct div
  const pricePerPoster = parseFloat(poster.dataset.price.replace("$", "")); // Extract and convert price
  const totalPriceContainer = document.querySelector(".totalPrice");

  function updateTotalPrice() {
    const quantity = parseInt(quantityInput.value, 10) || 0; // Get quantity, default to 0 if invalid
    const totalPrice = quantity * pricePerPoster; // Calculate total price
    totalPriceContainer.textContent = `Total price: $${totalPrice.toFixed(2)}`; // Update UI with 2 decimal points
  }

  // Event listener for quantity input
  quantityInput.addEventListener("input", updateTotalPrice);

  // Initial render
  updateTotalPrice();
});

//zoom effect
document.addEventListener("DOMContentLoaded", function () {
  const magnify = document.querySelector(".magnify");
  const img = magnify.querySelector("img");

  magnify.addEventListener("mousemove", function (event) {
    const bounds = magnify.getBoundingClientRect(); // Get element's position
    const x = event.clientX - bounds.left; // Mouse X relative to the element
    const y = event.clientY - bounds.top; // Mouse Y relative to the element

    // Calculate percentages
    const xPercent = (x / bounds.width) * 100;
    const yPercent = (y / bounds.height) * 100;

    // Update transform-origin based on mouse position
    img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
  });
});

//Add to cart
// Key to store cart items in localStorage
const POSTERSCART_ID = "userPostersCart";

// Function to retrieve the cart from localStorage
function getCart() {
  const posterscart = localStorage.getItem(POSTERSCART_ID);
  return posterscart ? JSON.parse(posterscart) : []; // Return an empty array if no posterscart exists
}

// Function to save the cart back to localStorage
function saveCart(cart) {
  localStorage.setItem(POSTERSCART_ID, JSON.stringify(cart));
}

// Function to add a poster to the cart
function addToCart(poster) {
  const cart = getCart(); // Get current cart
  cart.push(poster); // Add new poster
  saveCart(cart); // Save updated cart
  console.log("Poster added to cart:", poster);
}

/*generate a unique id for the poster
everytime addToCartBtn is clicked*/
const addToCartBtn = document.querySelector(".addToCartBtn");
const POSTERSID_KEY = "postersId";
let generatedIds = JSON.parse(localStorage.getItem(POSTERSID_KEY)) || []; // Load existing IDs or start fresh

let lastGeneratedId;

addToCartBtn.addEventListener("click", function () {
  // Get the current date and time
  const now = new Date();
  const day = now
    .toLocaleDateString("en-US", { weekday: "short" })
    .toLowerCase(); // Example: 'sat'
  const date = now.getDate(); // Day of the month
  const month = now
    .toLocaleDateString("en-US", { month: "short" })
    .toLowerCase(); // Example: 'jan'
  const year = now.getFullYear(); // Year
  const hours = String(now.getHours()).padStart(2, "0"); // Hours, 2-digit format
  const minutes = String(now.getMinutes()).padStart(2, "0"); // Minutes, 2-digit format

  // Generate 10 random alphanumeric characters
  const randomChars = Array.from({ length: 10 }, () =>
    Math.random().toString(36).charAt(2)
  ).join("");

  // Combine everything into the desired format
  const uniqueId = `${day}${date}${month}${year}-${hours}:${minutes}${randomChars}`;
  generatedIds.push(uniqueId);

  // Save to localStorage
  localStorage.setItem(POSTERSID_KEY, JSON.stringify(generatedIds));

  lastGeneratedId = generatedIds.slice(-1)[0];

  console.log(uniqueId, generatedIds, lastGeneratedId);
});

// Add poster to cart when "Add to Cart" button is clicked
addToCartBtn.addEventListener("click", () => {
  const quantityInput = document.querySelector(".posterQuantity");
  const quantity = parseInt(quantityInput.value);
  const poster = document.querySelector(
    ".posterInformations div:nth-child(1) div:nth-child(1)"
  );
  const sizeField = document.querySelector(
    ".posterDescription div:nth-child(2) h4:nth-child(2)"
  );

  const pricePerPoster = parseFloat(poster.dataset.price.replace("$", ""));
  const totalPrice = `$${(quantity * pricePerPoster).toFixed(2)}`;

  const posterData = {
    name: poster.dataset.name,
    id: lastGeneratedId,
    price: poster.dataset.price,
    size: sizeField ? sizeField.textContent : null,
    src: poster.dataset.src,
  };

  if (quantity <= 0 || isNaN(quantity)) {
    alert("Please select a valid quantity.");
    return;
  }

  const posterToAdd = { ...posterData, quantity, totalPrice };
  addToCart(posterToAdd);
});

//go to cart page
const cartLogo = document.querySelector(".cart");
cartLogo.addEventListener("click", function () {
  window.location.href = "cartPage.html";
});

document.addEventListener("DOMContentLoaded", function () {
  const addToCartBtn = document.querySelector(".addToCartBtn");
  const cartPopup = document.getElementById("cartPopup");

  addToCartBtn.addEventListener("click", function () {
    // Show popup
    cartPopup.classList.add("show");

    // Hide after 2 seconds
    setTimeout(() => {
      cartPopup.classList.remove("show");
    }, 2000);
  });
});
