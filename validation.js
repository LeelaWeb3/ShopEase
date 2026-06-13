/* ===========================================
   ShopEase - Form Validation
=========================================== */


/* ------------------------------------------
   Helper Function
------------------------------------------ */

function setError(id, message) {

    document.getElementById(id).textContent =
        message;

}

function clearError(id) {

    document.getElementById(id).textContent =
        "";

}


/* ------------------------------------------
   Full Name
------------------------------------------ */

function validateFullName() {

    const value =
        document.getElementById("fullName")
        .value
        .trim();

    if (value.length < 3) {

        setError(

            "fullNameError",

            "Name must contain at least 3 characters"

        );

        return false;

    }

    clearError("fullNameError");

    return true;

}


/* ------------------------------------------
   Email
------------------------------------------ */

function validateEmail() {

    const value =
        document.getElementById("email")
        .value
        .trim();

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(value)) {

        setError(

            "emailError",

            "Enter a valid email address"

        );

        return false;

    }

    clearError("emailError");

    return true;

}


/* ------------------------------------------
   Phone
------------------------------------------ */

function validatePhone() {

    const value =
        document.getElementById("phone")
        .value
        .trim();

    const pattern =
        /^[0-9]{10}$/;

    if (!pattern.test(value)) {

        setError(

            "phoneError",

            "Phone number must be 10 digits"

        );

        return false;

    }

    clearError("phoneError");

    return true;

}


/* ------------------------------------------
   Address
------------------------------------------ */

function validateAddress() {

    const value =
        document.getElementById("address")
        .value
        .trim();

    if (value.length < 5) {

        setError(

            "addressError",

            "Enter a valid address"

        );

        return false;

    }

    clearError("addressError");

    return true;

}


/* ------------------------------------------
   City
------------------------------------------ */

function validateCity() {

    const value =
        document.getElementById("city")
        .value
        .trim();

    if (value.length < 2) {

        setError(

            "cityError",

            "Enter a valid city"

        );

        return false;

    }

    clearError("cityError");

    return true;

}


/* ------------------------------------------
   Postal Code
------------------------------------------ */

function validatePostal() {

    const value =
        document.getElementById("postal")
        .value
        .trim();

    const pattern =
        /^[0-9]{6}$/;

    if (!pattern.test(value)) {

        setError(

            "postalError",

            "Postal code must be 6 digits"

        );

        return false;

    }

    clearError("postalError");

    return true;

}


/* ------------------------------------------
   Card Number
------------------------------------------ */

function validateCard() {

    const value =
        document.getElementById("cardNumber")
        .value
        .trim();

    const pattern =
        /^[0-9]{16}$/;

    if (!pattern.test(value)) {

        setError(

            "cardError",

            "Card number must be 16 digits"

        );

        return false;

    }

    clearError("cardError");

    return true;

}


/* ------------------------------------------
   Expiry Date
------------------------------------------ */

function validateExpiry() {

    const value =
        document.getElementById("expiry")
        .value
        .trim();

    const pattern =
        /^(0[1-9]|1[0-2])\/([0-9]{2})$/;

    if (!pattern.test(value)) {

        setError(

            "expiryError",

            "Format should be MM/YY"

        );

        return false;

    }

    clearError("expiryError");

    return true;

}


/* ------------------------------------------
   CVV
------------------------------------------ */

function validateCVV() {

    const value =
        document.getElementById("cvv")
        .value
        .trim();

    const pattern =
        /^[0-9]{3}$/;

    if (!pattern.test(value)) {

        setError(

            "cvvError",

            "CVV must be 3 digits"

        );

        return false;

    }

    clearError("cvvError");

    return true;

}


/* ------------------------------------------
   Form Submit
------------------------------------------ */

const checkoutForm =
    document.getElementById("checkoutForm");

if (checkoutForm) {

    checkoutForm.addEventListener(

        "submit",

        function (event) {

            event.preventDefault();

            const isValid =

                validateFullName() &&
                validateEmail() &&
                validatePhone() &&
                validateAddress() &&
                validateCity() &&
                validatePostal() &&
                validateCard() &&
                validateExpiry() &&
                validateCVV();

            if (!isValid) {

                showToast(

                    "Please fix the form errors."

                );

                return;

            }

            clearCart();

            showToast(

                "Order placed successfully!"

            );

            setTimeout(function () {

                window.location.href =
                    "confirmation.html";

            }, 1500);

        }

    );

}