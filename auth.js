// ================= TOGGLE PASSWORD =================
function togglePassword(id) {
    let input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}

// ================= SIGNUP =================
function signup() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;

    if (!email || !pass || !confirm) return alert("Fill all fields");
    if (pass !== confirm) return alert("Passwords not match");

    // store user permanently
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", pass);

    alert("Signup success");
    window.location.href = "login.html";
}

// ================= LOGIN =================
function login() {
    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPassword").value;

    let storedEmail = localStorage.getItem("userEmail");
    let storedPass = localStorage.getItem("userPassword");

    if (email === storedEmail && pass === storedPass) {

        // ✅ SESSION CREATED
        localStorage.setItem("isLoggedIn", "true");

        window.location.href = "index.html";
    } else {
        alert("Invalid credentials");
    }
}

// ================= LOGOUT =================
// function logout() {

//     // ❌ DO NOT CLEAR EVERYTHING
//     // localStorage.clear();

//     // ✅ REMOVE ONLY SESSION
//     localStorage.removeItem("isLoggedIn");

//     // optional
//     localStorage.removeItem("cart");

//     window.location.href = "login.html";
// }
function applyStyles() {
    const element = document.getElementById("myParagraph");
    if (element) {
        element.style.color = "red";
        element.style.fontSize = "20px";
        element.style.fontWeight = "bold";
    }
}
