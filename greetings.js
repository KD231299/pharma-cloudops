const loggedInUser =
    localStorage.getItem("loggedInUser") || "Customer";

const welcome =
    document.getElementById("welcomeUser");

if(welcome) {
    welcome.innerText = `Hi, ${loggedInUser} 👋`;
}