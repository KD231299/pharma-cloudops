function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price: parseInt(price), image });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(name + " added to cart");
}
function logout() {

    // ❌ DO NOT CLEAR EVERYTHING
    // localStorage.clear();

    // ✅ REMOVE ONLY SESSION
    localStorage.removeItem("isLoggedIn");

    // optional
    localStorage.removeItem("cart");

    window.location.href = "login.html";
}
function attachCartEvents() {
    document.querySelectorAll(".add-to-cart").forEach(btn => {
        btn.addEventListener("click", () => {
            addToCart(btn.dataset.name, btn.dataset.price, btn.dataset.image);
        });
    });
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let container = document.getElementById("cartItems");
    let total = 0;

    if (!container) return;

    container.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price;

        container.innerHTML += `
        <div class="cart-item">
            <img src="${item.image}">
            <div>
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        </div>`;
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let el = document.getElementById("cartCount");
    if (el) el.innerText = cart.length;
}

window.onload = function () {
    loadCart();
    updateCartCount();
};