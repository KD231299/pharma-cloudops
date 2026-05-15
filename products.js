const products = [

    // ================= PAIN RELIEF =================

    {
        category: "Pain Relief",
        name: "Paracetamol",
        price: 50,
        image: "images/Paracetamol.jpg",
        rating: "4.5 ⭐",
        badge: "Best Seller",
        description: "Effective relief from fever and body pain."
    },

    {
        category: "Pain Relief",
        name: "Tylenol",
        price: 120,
        image: "images/Tylenol.jpg",
        rating: "4.6 ⭐",
        badge: "Hot",
        description: "Fast pain and fever relief tablets."
    },

    {
        category: "Pain Relief",
        name: "Advil",
        price: 160,
        image: "images/Advil.jpg",
        rating: "4.7 ⭐",
        badge: "Popular",
        description: "Ibuprofen tablets for body pain relief."
    },

    {
        category: "Pain Relief",
        name: "Aspirin",
        price: 90,
        image: "images/Aspirin.jpg",
        rating: "4.3 ⭐",
        badge: "Trending",
        description: "Trusted medicine for pain and fever."
    },

    // ================= DIABETES =================

    {
        category: "Diabetes",
        name: "Farxiga",
        price: 300,
        image: "images/Farxiga.jpg",
        rating: "4.8 ⭐",
        badge: "Premium",
        description: "Advanced medicine for diabetes control."
    },

    {
        category: "Diabetes",
        name: "Ozempic",
        price: 650,
        image: "images/Ozempic.jpg",
        rating: "4.9 ⭐",
        badge: "Top Rated",
        description: "Weekly injection for diabetes management."
    },

    {
        category: "Diabetes",
        name: "Insulin Injection",
        price: 450,
        image: "images/Insulin Injection.jpg",
        rating: "5.0 ⭐",
        badge: "Doctor Choice",
        description: "Helps regulate blood sugar effectively."
    },

    // ================= IMMUNITY =================

    {
        category: "Immunity",
        name: "Vitamin C",
        price: 120,
        image: "images/Vitamin C Tablets.jpg",
        rating: "4.7 ⭐",
        badge: "Healthy",
        description: "Boosts immunity and overall health."
    },

    {
        category: "Immunity",
        name: "Tamiflu",
        price: 420,
        image: "images/Tamiflu.jpg",
        rating: "4.8 ⭐",
        badge: "Viral Care",
        description: "Antiviral medicine for flu treatment."
    },

    {
        category: "Immunity",
        name: "Vired",
        price: 350,
        image: "images/Vired.jpg",
        rating: "4.5 ⭐",
        badge: "Trending",
        description: "Supports immunity and infection recovery."
    },

    // ================= ANTIBIOTICS =================

    {
        category: "Antibiotics",
        name: "Azithromycin",
        price: 180,
        image: "images/Azithromycin.jpg",
        rating: "4.6 ⭐",
        badge: "Best Seller",
        description: "Effective antibiotic for infections."
    },

    {
        category: "Antibiotics",
        name: "Clapra",
        price: 260,
        image: "images/Clapra.jpg",
        rating: "4.5 ⭐",
        badge: "Doctor Recommended",
        description: "Strong antibiotic for bacterial infections."
    },

    {
        category: "Antibiotics",
        name: "Cipralex",
        price: 210,
        image: "images/Cipralex.jpg",
        rating: "4.4 ⭐",
        badge: "Trusted",
        description: "Prescription medicine with fast recovery."
    },

    // ================= COUGH & COLD =================

    {
        category: "Cough & Cold",
        name: "Cough Syrup",
        price: 90,
        image: "images/Cough Syrup.jpg",
        rating: "4.4 ⭐",
        badge: "Popular",
        description: "Relief from cough and throat irritation."
    },

    {
        category: "Cough & Cold",
        name: "Benadryl",
        price: 140,
        image: "images/Cough Syrup.jpg",
        rating: "4.7 ⭐",
        badge: "Doctor Choice",
        description: "Trusted syrup for cold and cough relief."
    },

    // ================= MENTAL HEALTH =================

    {
        category: "Mental Health",
        name: "Lexapro",
        price: 250,
        image: "images/Lexapro.jpg",
        rating: "4.7 ⭐",
        badge: "Top Rated",
        description: "Medicine for anxiety and depression."
    },

    {
        category: "Mental Health",
        name: "Fluoxetine",
        price: 230,
        image: "images/Fluoxetine.jpg",
        rating: "4.6 ⭐",
        badge: "Trending",
        description: "Supports mental wellness and stability."
    },

    {
        category: "Mental Health",
        name: "Concerta",
        price: 320,
        image: "images/Concerta.jpg",
        rating: "4.5 ⭐",
        badge: "Premium",
        description: "Used for attention and focus improvement."
    },

    {
        category: "Mental Health",
        name: "Lyrica",
        price: 220,
        image: "images/Lyrica.avif",
        rating: "4.5 ⭐",
        badge: "Recommended",
        description: "Used for nerve pain and anxiety treatment."
    },

    // ================= HEART CARE =================

    {
        category: "Heart Care",
        name: "Plavix",
        price: 400,
        image: "images/Plavix.jpg",
        rating: "4.8 ⭐",
        badge: "Cardiac Care",
        description: "Helps prevent blood clot formation."
    },

    {
        category: "Heart Care",
        name: "Aspirin Cardio",
        price: 150,
        image: "images/Aspirin.jpg",
        rating: "4.6 ⭐",
        badge: "Heart Protection",
        description: "Supports healthy heart function."
    },

    // ================= ALLERGY =================

    {
        category: "Allergy",
        name: "Allegra",
        price: 140,
        image: "images/Allegra.avif",
        rating: "4.5 ⭐",
        badge: "Fast Relief",
        description: "Relieves allergy symptoms instantly."
    },

    {
        category: "Allergy",
        name: "Dupixent",
        price: 800,
        image: "images/Dupixent.avif",
        rating: "4.9 ⭐",
        badge: "Premium",
        description: "Advanced allergy treatment injection."
    },

    // ================= CANCER CARE =================

    {
        category: "Cancer Care",
        name: "Keytruda",
        price: 900,
        image: "images/keytruda.jpg",
        rating: "5.0 ⭐",
        badge: "Advanced Care",
        description: "Immunotherapy medicine for cancer."
    }

];

function loadProducts() {

    const grid = document.getElementById("productGrid");

    if (!grid) return;

    grid.innerHTML = "";

    const categories = [...new Set(products.map(p => p.category))];

    categories.forEach(category => {

        // CATEGORY SECTION
        const section = document.createElement("div");
        section.className = "category-section";

        // TITLE
        const title = document.createElement("h2");
        title.className = "category-title";
        title.innerText = category;

        section.appendChild(title);

        // GRID
        const categoryGrid = document.createElement("div");
        categoryGrid.className = "category-grid";

        const filteredProducts = products.filter(
            product => product.category === category
        );

        filteredProducts.forEach(product => {

            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `

                <div class="product-badge">
                    ${product.badge}
                </div>

                <img src="${product.image}" alt="${product.name}">

                <h3>${product.name}</h3>

                <div class="rating">
                    ${product.rating}
                </div>

                <p class="description">
                    ${product.description}
                </p>

                <p class="price">
                    ₹${product.price}
                </p>

                <button class="add-to-cart"
                    data-name="${product.name}"
                    data-price="${product.price}"
                    data-image="${product.image}">
                    Add to Cart
                </button>
            `;

            categoryGrid.appendChild(card);

        });

        section.appendChild(categoryGrid);

        grid.appendChild(section);

    });

    if (typeof attachCartEvents === "function") {
        attachCartEvents();
    }
}

document.addEventListener("DOMContentLoaded", loadProducts);