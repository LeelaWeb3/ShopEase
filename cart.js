/* ===========================================
   ShopEase - Shopping Cart
   Part 1
=========================================== */

/*
----------------------------------------
Cart Array
----------------------------------------
*/

let cart = JSON.parse(localStorage.getItem("cart")) || [];


/*
----------------------------------------
Save Cart to Local Storage
----------------------------------------
*/

function saveCart() {

    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );

}


/*
----------------------------------------
Update Cart Badge
----------------------------------------
*/

function updateCartBadge() {

    const badge =

        document.getElementById(

            "cart-count"

        );

    if (!badge) {

        return;

    }

    let totalItems = 0;

    cart.forEach(function (item) {

        totalItems += item.quantity;

    });

    badge.textContent = totalItems;

    badge.classList.add("bounce");

    setTimeout(function () {

        badge.classList.remove("bounce");

    }, 500);

}


/*
----------------------------------------
Add Product To Cart
----------------------------------------
*/

function addToCart(productId) {

    const product =

        products.find(function (item) {

            return item.id === productId;

        });

    if (!product) {

        return;

    }

    const existingProduct =

        cart.find(function (item) {

            return item.id === productId;

        });

    if (existingProduct) {

        existingProduct.quantity++;

    }

    else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            imageUrl: product.imageUrl,

            quantity: 1

        });

    }

    saveCart();

    updateCartBadge();

    showToast("Product added to cart!");

}


/*
----------------------------------------
Increase Quantity
----------------------------------------
*/

function increaseQuantity(productId) {

    const item =

        cart.find(function (product) {

            return product.id === productId;

        });

    if (!item) {

        return;

    }

    item.quantity++;

    saveCart();

    renderCart();

    updateCartBadge();

}


/*
----------------------------------------
Decrease Quantity
----------------------------------------
*/

function decreaseQuantity(productId) {

    const item =

        cart.find(function (product) {

            return product.id === productId;

        });

    if (!item) {

        return;

    }

    item.quantity--;

    if (item.quantity <= 0) {

        removeItem(productId);

        return;

    }

    saveCart();

    renderCart();

    updateCartBadge();

}


/*
----------------------------------------
Remove Item
----------------------------------------
*/

function removeItem(productId) {

    cart = cart.filter(function (item) {

        return item.id !== productId;

    });

    saveCart();

    renderCart();

    updateCartBadge();

}

/*
----------------------------------------
Render Cart
----------------------------------------
*/

function renderCart() {

    const container = document.getElementById("cartContainer");
    const emptyCart = document.getElementById("emptyCart");

    if (!container) {
        return;
    }

    container.innerHTML = "";

  if (cart.length === 0) {

    container.innerHTML = "";

    if (emptyCart) {

        emptyCart.classList.remove("hidden");

    }

    updateTotals();

    return;

}

    if (emptyCart) {
        emptyCart.classList.add("hidden");
    }

    cart.forEach(function (item) {

        container.innerHTML += `

        <div class="cart-item">

            <img
                src="${item.imageUrl}"
                alt="${item.name}">

            <div class="cart-info">

                <h3>

                    ${item.name}

                </h3>

                <p>

                    Price : ₹${item.price}

                </p>

                <p>

                    Quantity : ${item.quantity}

                </p>

                <div class="cart-buttons">

                    <button
                        onclick="decreaseQuantity(${item.id})">

                        −

                    </button>

                    <button
                        onclick="increaseQuantity(${item.id})">

                        +

                    </button>

                    <button
                        onclick="removeItem(${item.id})">

                        Delete

                    </button>

                </div>

            </div>

        </div>

        `;

    });

    updateTotals();

}


/*
----------------------------------------
Calculate Totals
----------------------------------------
*/

function updateTotals() {

    const subtotalElement =
        document.getElementById("subtotal");

    const taxElement =
        document.getElementById("tax");

    const totalElement =
        document.getElementById("total");

    if (
        !subtotalElement ||
        !taxElement ||
        !totalElement
    ) {

        return;

    }

    let subtotal = 0;

    cart.forEach(function (item) {

        subtotal +=
            item.price * item.quantity;

    });

    const tax =
        subtotal * 0.10;

    const total =
        subtotal + tax;

    subtotalElement.textContent =
        subtotal.toFixed(2);

    taxElement.textContent =
        tax.toFixed(2);

    totalElement.textContent =
        total.toFixed(2);

}


/*
----------------------------------------
Clear Cart
----------------------------------------
*/

function clearCart() {

    cart = [];

    saveCart();

    renderCart();

    updateCartBadge();

}


/*
----------------------------------------
Load Cart
----------------------------------------
*/

function loadCart() {

    cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    updateCartBadge();

    renderCart();

}


/*
----------------------------------------
Initialize
----------------------------------------
*/

document.addEventListener(

    "DOMContentLoaded",

    function () {

        loadCart();

    }

);