function searchProducts() {

    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const productName = card
            .querySelector("h3")
            .innerText
            .toLowerCase();

        if (productName.includes(input)) {

            card.style.display = "block";

            // AUTO SCROLL TO FIRST MATCH
            if (input.length > 0) {
                card.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }

        } else {

            card.style.display = "none";
        }
    });

    // SHOW ALL PRODUCTS AGAIN IF EMPTY
    if (input === "") {

        cards.forEach(card => {
            card.style.display = "block";
        });
    }
}