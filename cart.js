const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const quantityElement = document.getElementById("quantity");
const formattedTotalPriceElement = document.getElementById(
    "formattedTotalPriceSub"
);
const formattedTotalPriceElementCheck = document.getElementById(
    "formattedTotalPriceSubC"
);
const firstQuantity = document.getElementById('quantity1')

let quantity = 1;
// Fixed price per item
const pricePerItem = 315000;

// Function to format the price with ₦ symbol and comma as a thousands separator
function formatNaira(price) {
    return `₦${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
}

// Function to update the total price
function updateTotalPrice() {
    const totalPrice = quantity * pricePerItem;
    const formattedTotalPrice = formatNaira(totalPrice);
    formattedTotalPriceElement.textContent = formattedTotalPrice;
    formattedTotalPriceElementCheck.textContent = formattedTotalPrice;
}


// Event listener for the plus button
plusButton.addEventListener("click", () => {
    quantity++;
    quantityElement.textContent = quantity;
    firstQuantity.textContent = quantity
    updateTotalPrice();
});


// Event listener for the minus button
minusButton.addEventListener("click", () => {
    if (quantity > 0) {
        quantity--;
        quantityElement.textContent = quantity;
        firstQuantity.textContent = quantity
        updateTotalPrice();
    }
});


// Initial update of the total price
updateTotalPrice();
