document.addEventListener("DOMContentLoaded", function () {
    const signInBtn = document.getElementById("sign-in-btn");
    const signUpBtn = document.getElementById("sign-up-btn");
    const container = document.querySelector(".container");

    signUpBtn.addEventListener("click", function () {
        container.classList.add("sign-up-mode");
    });

    signInBtn.addEventListener("click", function () {
        container.classList.remove("sign-up-mode");
    });

    function validateForm(event, formId) {
        let isValid = true;
        const form = document.getElementById(formId);
        const inputs = form.querySelectorAll(".form-control");

        inputs.forEach((input) => {
            const value = input.value.trim();
            if (input.id.includes("username") && value.length < 4) {
                input.classList.add("is-invalid");
                isValid = false;
            } else if (input.id.includes("email")) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    input.classList.add("is-invalid");
                    isValid = false;
                }
            } else if (input.id.includes("password")) {
                if (value.length < 5) {
                    input.classList.add("is-invalid");
                    isValid = false;
                }
                if (input.id.includes("confirm")) {
                    const password = document.getElementById("signup-password").value;
                    if (value !== password) {
                        input.classList.add("is-invalid");
                        isValid = false;
                    }
                }
            } else {
                input.classList.remove("is-invalid");
            }
        });

        if (!isValid) {
            event.preventDefault();
        }
    }

    document.getElementById("login-form").addEventListener("submit", function (event) {
        validateForm(event, "login-form");
    });

    document.getElementById("signup-form").addEventListener("submit", function (event) {
        validateForm(event, "signup-form");
    });

    document.querySelectorAll(".form-control").forEach((input) => {
        input.addEventListener("focus", function () {
            input.classList.remove("is-invalid");
        });
    });
});
