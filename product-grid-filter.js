const filters = document.querySelectorAll(".filter");
const priceFilters = document.querySelectorAll(".price-filter");
const products = document.querySelectorAll(".card");
const clearBtn = document.getElementById("clear-filters");

function applyFilters() {
    let selectedCategories = [];
    let selectedPrice = null;

    filters.forEach(f => {
        if (f.checked) selectedCategories.push(f.value);
    });

    priceFilters.forEach(p => {
        if (p.checked) selectedPrice = p.value;
    });

    products.forEach(product => {
        let category = product.dataset.category;
        let price = parseFloat(product.dataset.price);

        let showCategory = selectedCategories.length === 0 || selectedCategories.includes(category);

        let showPrice = true;
        if (selectedPrice) {
            let [min, max] = selectedPrice.split("-");
            min = parseFloat(min);
            max = parseFloat(max) || Infinity;
            showPrice = price >= min && price <= max;
        }

        if (showCategory && showPrice) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

filters.forEach(f => f.addEventListener("change", applyFilters));
priceFilters.forEach(p => p.addEventListener("change", applyFilters));

clearBtn.addEventListener("click", () => {
    filters.forEach(f => f.checked = false);
    priceFilters.forEach(p => p.checked = false);
    applyFilters();
});