let cart = JSON.parse(localStorage.getItem("cart")) || [];

//  CART COUNT
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    if (!cartCount) return;

    let totalItems = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
    });

    cartCount.innerText = totalItems;
}

//  ADD TO CART
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const item = {
            name: button.dataset.name,
            price: parseFloat(button.dataset.price),
            image: button.dataset.image,
            quantity: 1
        };

        const existing = cart.find(product => product.name === item.name);

        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push(item);
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartCount(); 
        alert(item.name + " added to cart!");
    });
});

// 
updateCartCount();



//  FILTER FUNCTION
function filterProducts(category) {
    const products = document.querySelectorAll(".card");

    products.forEach(product => {
        if (category === "all") {
            product.style.display = "block";
        } else {
            product.style.display = product.classList.contains(category)
                ? "block"
                : "none";
        }
    });
}

//  SLIDESHOW
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

// SHOW SLIDE
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

// NEXT / PREV
function changeSlide(step) {
    currentIndex += step;

    if (currentIndex < 0) currentIndex = slides.length - 1;
    if (currentIndex >= slides.length) currentIndex = 0;

    showSlide(currentIndex);
}

// AUTO SLIDE (10 seconds)
setInterval(() => {
    changeSlide(1);
}, 10000);

// INITIAL LOAD
showSlide(currentIndex);




