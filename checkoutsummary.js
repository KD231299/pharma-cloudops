document.addEventListener("DOMContentLoaded", () => {

    loadCheckoutSummary();

});

function loadCheckoutSummary() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach(item => {

        const qty = item.quantity || 1;

        totalItems += qty;

        totalPrice += item.price * qty;
    });

    // UPDATE UI
    document.getElementById("checkoutItems").innerText =
        totalItems;

    document.getElementById("checkoutTotal").innerText =
        "₹" + totalPrice;
}