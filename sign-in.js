    // SHOW CREATE ACCOUNT PAGE
    function showCreateAccount() {

        document.getElementById("login-page")
            .classList.add("hidden");

        document.getElementById("create-page")
            .classList.remove("hidden");
    }

    // SHOW LOGIN PAGE
    function showLogin() {

        document.getElementById("create-page")
            .classList.add("hidden");

        document.getElementById("login-page")
            .classList.remove("hidden");
    }

    // CREATE ACCOUNT
    document.getElementById("create-form")
        .addEventListener("submit", function(e) {

        e.preventDefault();

        const name =
            document.getElementById("name").value;

        const surname =
            document.getElementById("surname").value;

        const email =
            document.getElementById("create-email").value;

        const password =
            document.getElementById("create-password").value;

        const confirmPassword =
            document.getElementById("confirm-password").value;

        // PASSWORD CHECK
        if (password !== confirmPassword) {

            alert("Passwords do not match!");
            return;
        }

        // SAVE USER
        const user = {
            name,
            surname,
            email,
            password
        };

        localStorage.setItem("user", JSON.stringify(user));

        alert("Account created successfully!");

        showLogin();
    });

    // LOGIN
    document.getElementById("login-form")
        .addEventListener("submit", function(e) {

        e.preventDefault();

        const loginEmail =
            document.getElementById("login-email").value;

        const loginPassword =
            document.getElementById("login-password").value;

        const savedUser =
            JSON.parse(localStorage.getItem("user"));

        // CHECK USER
        if (
            savedUser &&
            loginEmail === savedUser.email &&
            loginPassword === savedUser.password
        ) {

            alert("Login successful!");

            window.location.href = "index.html";

        } else {

            alert("Invalid email or password.");
        }
    });