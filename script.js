// Get references to the HTML elements
const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const quantityElement = document.getElementById("quantity");
const formattedPriceElement = document.getElementById("formattedPrice");
const formattedTotalPriceElement = document.getElementById(
    "formattedTotalPrice"
);
const changeHeart = document.querySelector(".heart");
const itemsAdded = document.getElementById("items-added");

// Fixed price per item
const pricePerItem = 315000;

// Initialize the quantity
let quantity = 1;

// Function to format the price with ₦ symbol and comma as a thousands separator
function formatNaira(price) {
    return `₦${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
}

// Function to update the total price
function updateTotalPrice() {
    const totalPrice = quantity * pricePerItem;
    const formattedPrice = formatNaira(pricePerItem);
    const formattedTotalPrice = formatNaira(totalPrice);
    formattedPriceElement.textContent = formattedPrice;
    formattedTotalPriceElement.textContent = formattedTotalPrice;
}

// Event listener for the plus button
plusButton.addEventListener("click", () => {
    quantity++;
    quantityElement.textContent = quantity;
    itemsAdded.textContent = quantity;
    updateTotalPrice();
});

// Event listener for the minus button
minusButton.addEventListener("click", () => {
    if (quantity > 0) {
        quantity--;
        quantityElement.textContent = quantity;
        itemsAdded.textContent = quantity;
        updateTotalPrice();
    }
});
// Initial update of the total price
updateTotalPrice();

// to change the heart color when clicked

let isColor1 = true;
changeHeart.addEventListener("click", () => {
    changeHeart.style.color = isColor1 ? "#959595" : "#f7932d";
    isColor1 = !isColor1;
});
