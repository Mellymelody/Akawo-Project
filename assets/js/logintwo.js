const logregBox = document.querySelector(".logreg-box")

const loginlink = document.querySelector(".login-link")

const registerlink = document.querySelector(".register-link")

registerlink.addEventListener("click", (e) => {
    e.preventDefault();
    logregBox.classList.add("active")
});

loginlink.addEventListener("click", (e) => {
    e.preventDefault();
    logregBox.classList.remove("active")
});

