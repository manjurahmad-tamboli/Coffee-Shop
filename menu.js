// JavaScript for Cart and Like Functionality
document.addEventListener("DOMContentLoaded", function() {
    const cartIcon = document.querySelector(".cart-icon");
    const cartModal = document.querySelector(".cart-modal");
    const closeCartBtn = document.querySelector(".close-cart-btn");
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    const likeButtons = document.querySelectorAll(".like-btn");
    const cartCount = document.querySelector(".cart-count");
    const cartItemsList = document.querySelector(".cart-items");
    const notification = document.querySelector(".notification");

    let cart = [];
    let likes = [];

    // Open Cart Modal
    cartIcon.addEventListener("click", () => {
        cartModal.style.display = "flex";
        updateCartModal();
    });

    // Close Cart Modal
    closeCartBtn.addEventListener("click", () => {
        cartModal.style.display = "none";
    });

    // Add to Cart
    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const item = {
                name: document.querySelectorAll(".menu-card h3")[index].innerText,
                price: 5.99, // Example price
            };
            cart.push(item);
            updateCartCount();
            showNotification();
        });
    });

    // Like Button
    likeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            button.classList.toggle("liked");
        });
    });

    // Update Cart Count
    function updateCartCount() {
        cartCount.innerText = cart.length;
    }

    // Show Notification
    function showNotification() {
        notification.style.display = "block";
        setTimeout(() => {
            notification.style.display = "none";
        }, 2000);
    }

    // Update Cart Modal
    function updateCartModal() {
        cartItemsList.innerHTML = "";
        cart.forEach((item) => {
            const li = document.createElement("li");
            li.innerText = `${item.name} - $${item.price}`;
            cartItemsList.appendChild(li);
        });
    }
});