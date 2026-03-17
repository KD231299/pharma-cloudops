const products = [
    { name: "Paracetamol", price: 50, image: "images/Paracetamol.jpg" },
    { name: "Vitamin C", price: 120, image: "images/Vitamin C Tablets.jpg" },
    { name: "Cough Syrup", price: 90, image: "images/Cough Syrup.jpg" },
    { name: "Azithromycin", price: 180, image: "images/Azithromycin.jpg" },
    { name: "Farxiga", price: 300, image: "images/Farxiga.jpg" },
    { name: "Insulin Injection", price: 450, image: "images/Insulin Injection.jpg" },
    { name: "Keytruda", price: 900, image: "images/keytruda.jpg" },
    { name: "Lexapro", price: 250, image: "images/Lexapro.jpg" },
    { name: "Allegra", price: 140, image: "images/Allegra.avif" },
    { name: "Dupixent", price: 800, image: "images/Dupixent.avif" },
    { name: "Lyrica", price: 220, image: "images/Lyrica.avif" }
];

function loadProducts() {
    const grid = document.getElementById("productGrid");

    if (!grid) return;

    grid.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button class="add-to-cart"
                data-name="${product.name}"
                data-price="${product.price}"
                data-image="${product.image}">
                Add to Cart
            </button>
        `;

        grid.appendChild(card);
    });

    if (typeof attachCartEvents === "function") {
        attachCartEvents();
    }
}

// ✅ IMPORTANT FIX
document.addEventListener("DOMContentLoaded", loadProducts);