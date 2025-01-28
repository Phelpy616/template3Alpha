const clothingscCartItems = localStorage.getItem("userClothingsCart");
const clothingCartItemsArray = clothingscCartItems
  ? JSON.parse(clothingscCartItems)
  : []; // Ensure it defaults to an empty array if null
const removeClothingBtn = document.querySelector(
  ".clothingInTheCart div:nth-child(1)"
);
const clothingInTheCart = document.querySelector(".clothingInTheCart");

//display each clothing in the cart
function renderClothingsInCart() {
  clothingCartItemsArray.forEach((clothing) => {
    const html = `<div>
        <div data-id="${clothing.id}">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAS1JREFUaEPtWFsOwkAInN5MT6Y306MZEvenbtuBgWgN/RXYeQBuu+Dkz3Jy/GgC33awHWgHRAW6hUQB5fR2QJZQLNAOiALK6YoDdwA3AFcAzyASuUaUwDh44I6QyKgRusxdADwmintIrMGPcm5B3Qnvk7YAMCSU3A/dogSsUARIJGd3vBQCXhLp4A2ASoAlUQI+i8ARCRt6W7frh5mXw+2c4cA4ZEvlGYgU8JkOeEikga8gsNdO9lsq+CYwaW5mDlJd6CEmrhY/v0aZPykm5nDnzwLUFvIA88TSZBQCEUCRnJLLnAJEyU25Tv/lC01kt3/tlXJ974mAT6uhDLGBsHaKfpEYJKQaKgF63VUFNoEqZdm67QCrVFVcO1ClLFu3HWCVqoprB6qUZeue3oEXr3xKMb7bQoAAAAAASUVORK5CYII="
          />
        </div>

        <div><img src="${clothing.src}" alt="" /></div>
        <div><h1>${clothing.name}</h1></div>
        <div><h1>${clothing.price}</h1></div>
        <div><input type="number" value="1" min="1" max="50" /></div>
        <div><h1>${clothing.totalPrice}</h1></div>
      </div>`;

    clothingInTheCart.insertAdjacentHTML("beforeend", html);
  });
}
renderClothingsInCart();

//display each poster in the cart
const postersCartItems = localStorage.getItem("userPostersCart");
const postersCartItemsArray = postersCartItems
  ? JSON.parse(postersCartItems)
  : [];

function displayPostersInCart() {
  postersCartItemsArray.forEach((poster) => {
    const html = `<div>
        <div data-id="${poster.id}">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAS1JREFUaEPtWFsOwkAInN5MT6Y306MZEvenbtuBgWgN/RXYeQBuu+Dkz3Jy/GgC33awHWgHRAW6hUQB5fR2QJZQLNAOiALK6YoDdwA3AFcAzyASuUaUwDh44I6QyKgRusxdADwmintIrMGPcm5B3Qnvk7YAMCSU3A/dogSsUARIJGd3vBQCXhLp4A2ASoAlUQI+i8ARCRt6W7frh5mXw+2c4cA4ZEvlGYgU8JkOeEikga8gsNdO9lsq+CYwaW5mDlJd6CEmrhY/v0aZPykm5nDnzwLUFvIA88TSZBQCEUCRnJLLnAJEyU25Tv/lC01kt3/tlXJ974mAT6uhDLGBsHaKfpEYJKQaKgF63VUFNoEqZdm67QCrVFVcO1ClLFu3HWCVqoprB6qUZeue3oEXr3xKMb7bQoAAAAAASUVORK5CYII="
          />
        </div>

        <div><img src="${poster.src}" alt="" /></div>
        <div><h1>${poster.name}</h1></div>
        <div><h1>${poster.price}</h1></div>
        <div><input type="number" value="1" min="1" max="50" /></div>
        <div><h1>${poster.totalPrice}</h1></div>
      </div>`;

    clothingInTheCart.insertAdjacentHTML("beforeend", html);
  });
}
displayPostersInCart();

//display empty cart message
function displayEmptyCartMsg() {
  const html = ` <div class="emptyCartMsg">
        <h1>Your cart is currently empty :(</h1>
        <div><a href="index.html">Go to shop</a></div>
      </div>
    </div>`;

  if (
    clothingCartItemsArray.length === 0 &&
    postersCartItemsArray.length == 0
  ) {
    clothingInTheCart.insertAdjacentHTML("afterbegin", html);
    localStorage.clear();
  }
}
displayEmptyCartMsg();

//calculate cart total price and display checkout button
function calculateTotalCartPrice() {
  // Calculate the total price of clothing items
  const clothingTotal = clothingCartItemsArray.reduce(
    (sum, clothing) => sum + Number(clothing.totalPrice.replace("$", "")),
    0
  );

  // Calculate the total price of poster items
  const postersTotal = postersCartItemsArray.reduce(
    (sum, poster) => sum + Number(poster.totalPrice.replace("$", "")),
    0
  );

  const grandTotal = clothingTotal + postersTotal;
  console.log(grandTotal);

  const html = ` <div class="checkOutField">
        <div><h3>Total: $${grandTotal}</h3></div>
        <div><h1>Proceed to checkout</h1></div>
      </div>`;

  if (clothingCartItemsArray.length >= 1 || postersCartItemsArray.length >= 1) {
    clothingInTheCart.insertAdjacentHTML("beforeend", html);
  }
}
calculateTotalCartPrice();

//remove clothing from the cart
clothingInTheCart.addEventListener("click", function (e) {
  const removeBtn = e.target.closest(".clothingInTheCart div div:nth-child(1)");

  if (!removeBtn) return;

  const clickedClothingId = clothingCartItemsArray.find(
    (clothing) => clothing.id === removeBtn.dataset.id
  );

  const clickedPosterId = postersCartItemsArray.find(
    (poster) => poster.id === removeBtn.dataset.id
  );

  const newClothingCartItemsArray = clothingCartItemsArray.filter(
    (clothing) => clothing.id !== removeBtn.dataset.id
  );

  const newPostersCartItemsArray = postersCartItemsArray.filter(
    (poster) => poster.id !== removeBtn.dataset.id
  );

  localStorage.setItem(
    "userClothingsCart",
    JSON.stringify(newClothingCartItemsArray)
  );
  localStorage.setItem(
    "userPostersCart",
    JSON.stringify(newPostersCartItemsArray)
  );
  location.reload();
});

//proceed to checkout button
const checkoutBtn = document.querySelector(
  ".clothingInTheCart .checkOutField div:nth-child(2)"
);

checkoutBtn.addEventListener("click", function () {
  window.location.href = "paymentDetails.html";
});
