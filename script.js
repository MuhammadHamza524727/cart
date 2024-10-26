let totalPrice = 0;

function addToCart(price) {
    totalPrice += price;
    document.getElementById("cartTotal").textContent = totalPrice;
}

function clearCart() {
    totalPrice = 0;
    document.getElementById("cartTotal").textContent = totalPrice;
}