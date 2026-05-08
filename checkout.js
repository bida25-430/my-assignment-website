let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const checkoutItems = document.getElementById("checkout-items");
    const subtotalDisplay = document.getElementById("subtotal");
    const totalDisplay = document.getElementById("checkout-total");

    let subtotal = 0;
    let shipping = 15;

    // DISPLAY ITEMS
    cart.forEach(item => {

        subtotal += item.price * item.quantity;

        checkoutItems.innerHTML += `
            <div class="checkout-item">
                <p>${item.name} x ${item.quantity}</p>
                <p>$${item.price}</p>
            </div>
        `;
    });

    // TOTALS
    subtotalDisplay.innerText = "$" + subtotal.toFixed(2);

    totalDisplay.innerText =
        "$" + (subtotal + shipping).toFixed(2);

    // FAKE PAYMENT
    document.getElementById("payment-form")
        .addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Payment Successful! Thank you for shopping with COOL DRIPS.");

        localStorage.removeItem("cart");

        window.location.href = "index.html";
    });
