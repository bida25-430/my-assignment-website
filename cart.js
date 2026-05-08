

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const itemsTotal = document.getElementById("items-total");
const shippingDisplay = document.getElementById("shipping");
const grandTotal = document.getElementById("grand-total");

function displayCart() {

    cartItems.innerHTML = "";

    let subtotal = 0;
    let shipping = 15;

    if (cart.length === 0) {
        cartItems.innerHTML = "<h2>Your cart is empty.</h2>";

        itemsTotal.innerText = "$0";
        grandTotal.innerText = "$0";

        return;
    }

    cart.forEach((item, index) => {

        subtotal += item.price * item.quantity;

        cartItems.innerHTML += `
            <div class="cart-item">

                <img src="${item.image}" alt="${item.name}">

                <div class="cart-info">
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price}</p>
                    <p>Quantity: ${item.quantity}</p>
                </div>

                <button class="remove-btn" onclick="removeItem(${index})">
                    Remove
                </button>

            </div>
        `;
    });

    let total = subtotal + shipping;

    itemsTotal.innerText = "$" + subtotal.toFixed(2);
    shippingDisplay.innerText = "$" + shipping.toFixed(2);
    grandTotal.innerText = "$" + total.toFixed(2);
}

// REMOVE ITEM
function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

displayCart();
