/* ===========================================
   ShopEase - Main JavaScript
=========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* -------------------------
       Mobile Navigation
    ------------------------- */

    const menuButton = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", function () {

            navLinks.classList.toggle("active");

        });

    }

    /* -------------------------
       Theme Toggle
    ------------------------- */

    const themeButton = document.getElementById("themeToggle");

    function applyTheme(theme) {

        if (theme === "dark") {

            document.body.classList.add("dark-mode");

            if (themeButton) {

                themeButton.textContent = "☀️";

            }

        } else {

            document.body.classList.remove("dark-mode");

            if (themeButton) {

                themeButton.textContent = "🌙";

            }

        }

    }

    // Load saved theme
    let savedTheme = localStorage.getItem("theme");

    if (!savedTheme) {

        savedTheme = "light";

        localStorage.setItem("theme", "light");

    }

    applyTheme(savedTheme);

    // Toggle theme
    if (themeButton) {

        themeButton.addEventListener("click", function () {

            let currentTheme = localStorage.getItem("theme");

            if (currentTheme === "dark") {

                localStorage.setItem("theme", "light");

                applyTheme("light");

            } else {

                localStorage.setItem("theme", "dark");

                applyTheme("dark");

            }

        });

    }

});


/* -------------------------
   Toast Notification
------------------------- */

function showToast(message) {

    let toast = document.getElementById("toast");

    if (!toast) {

        toast = document.createElement("div");

        toast.id = "toast";

        toast.className = "toast";

        document.body.appendChild(toast);

    }

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(function () {

        toast.classList.remove("show");

    }, 2500);

}