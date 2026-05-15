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
        total += item.price * (item.quantity || 1);

        container.innerHTML += `

        <div class="cart-item">

                <img src="${item.image}">

                <div class="cart-details">

                    <h3>${item.name}</h3>

                    <p>₹${item.price}</p>

                    <div class="quantity-box">

                        <button class="qty-btn"
                            onclick="decreaseQty(${index})">
                            -
                        </button>

                        <span class="qty-count">
                            ${item.quantity || 1}
                        </span>

                        <button class="qty-btn"
                            onclick="increaseQty(${index})">
                            +
                        </button>

                    </div>

                    <button onclick="removeItem(${index})">
                        Remove
                    </button>

                </div>

            </div>

        `;
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function increaseQty(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!cart[index].quantity) {
        cart[index].quantity = 1;
    }

    cart[index].quantity++;

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();
}

function decreaseQty(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!cart[index].quantity) {
        cart[index].quantity = 1;
    }

    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    }

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