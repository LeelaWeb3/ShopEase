
/* ===========================================
   ShopEase - Products JavaScript
   Handles:
   - Product Data
   - Featured Products
   - Product Catalogue
   - Search
   - Sorting
   - Product Details
=========================================== */

/* -------------------------------
   Product Data
-------------------------------- */

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 2499,
        imageUrl: "images/product1.jpg",
        description: "Premium wireless headphones with noise cancellation."
    },

    {
        id: 2,
        name: "Smart Watch",
        price: 3999,
        imageUrl: "images/product2.jpg",
        description: "Smart watch with fitness tracking and notifications."
    },

    {
        id: 3,
        name: "Bluetooth Speaker",
        price: 1999,
        imageUrl: "images/product3.jpg",
        description: "Portable Bluetooth speaker with deep bass."
    },

    {
        id: 4,
        name: "Gaming Mouse",
        price: 1499,
        imageUrl: "images/product4.jpg",
        description: "RGB gaming mouse with adjustable DPI."
    },

    {
        id: 5,
        name: "Laptop Backpack",
        price: 1299,
        imageUrl: "images/product5.jpg",
        description: "Stylish waterproof backpack for laptops."
    },

    {
        id: 6,
        name: "Mechanical Keyboard",
        price: 2999,
        imageUrl: "images/product6.jpg",
        description: "Mechanical keyboard with RGB lighting."
    }
];
let displayedProducts = [...products];


/* -------------------------------
   Create Product Card
-------------------------------- */

function createProductCard(product) {

    return `

        <div class="product-card">

            <img
                src="${product.imageUrl}"
                alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="price">
                    ₹${product.price}
                </p>

                <button
                    class="btn"
                    onclick="viewProduct(${product.id})">

                    View Details

                </button>

                <button
                    class="btn add-cart-btn"
                    onclick="addToCart(${product.id})">

                    Add To Cart

                </button>

            </div>

        </div>

    `;

}


/* -------------------------------
   Display Products
-------------------------------- */

function displayProducts(productArray) {

    displayedProducts = [...productArray];

    const container = document.getElementById("productsContainer");

    if (!container) {

        return;

    }

    container.innerHTML = "";

    productArray.forEach(function(product){

        container.innerHTML += createProductCard(product);

    });

}

/* -------------------------------
   Render Products Page
-------------------------------- */

function renderProducts() {

    displayProducts(products);

}


/* -------------------------------
   Load Featured Products
-------------------------------- */

function loadFeaturedProducts() {

    const container =
        document.getElementById("featuredProducts");

    if (!container) {

        return;

    }

    container.innerHTML = "";

    const featured =
        products.slice(0, 3);

    featured.forEach(function (product) {

        container.innerHTML += createProductCard(product);

    });

}


/* -------------------------------
   Search Products
-------------------------------- */

function searchProducts() {

    const searchBox =
        document.getElementById("searchInput");

    if (!searchBox) {

        return;

    }

    const text =
        searchBox.value.toLowerCase();

    const filteredProducts =
        products.filter(function (product) {

            return product.name
                .toLowerCase()
                .includes(text);

        });

    displayProducts(filteredProducts);

}


/* -------------------------------
   Sort Products
-------------------------------- */

function sortProducts() {

    const select =
        document.getElementById("sortSelect");

    if (!select) {

        return;

    }

    const value =
        select.value;

    let sorted =
        [...products];

    if (value === "low") {

        sorted.sort(function (a, b) {

            return a.price - b.price;

        });

    }

    else if (value === "high") {

        sorted.sort(function (a, b) {

            return b.price - a.price;

        });

    }

    displayProducts(sorted);

}


/* -------------------------------
   Save Selected Product
-------------------------------- */

function viewProduct(id) {

    localStorage.setItem(

        "selectedProduct",

        id

    );

    window.location.href =
        "product-detail.html";

}


/* -------------------------------
   Load Product Detail Page
-------------------------------- */

function loadProductDetail() {

    const container =
        document.getElementById(
            "productDetailContainer"
        );

    if (!container) {

        return;

    }

    const productId =
        Number(
            localStorage.getItem(
                "selectedProduct"
            )
        );

    const product =
        products.find(function (item) {

            return item.id === productId;

        });

    if (!product) {

        container.innerHTML =

            "<h2>Product Not Found</h2>";

        return;

    }

    container.innerHTML = `

        <div class="product-detail-card">

            <img
                src="${product.imageUrl}"
                alt="${product.name}">

            <div class="product-detail-info">

                <h2>

                    ${product.name}

                </h2>

                <p>

                    ${product.description}

                </p>

                <h3>

                    ₹${product.price}

                </h3>

                <button
    class="btn add-cart-btn"
    onclick="addToCart(${product.id}); this.classList.add('pulse'); setTimeout(() => this.classList.remove('pulse'), 400);">

    Add To Cart

</button>
            </div>

        </div>

    `;

}


/* -------------------------------
   Initialize Page
-------------------------------- */

document.addEventListener(

    "DOMContentLoaded",

    function () {

        renderProducts();

        loadFeaturedProducts();

        loadProductDetail();

    }

);