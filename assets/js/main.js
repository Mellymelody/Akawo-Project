const edit = document.querySelector("#r")

const right = document.querySelector(".right")

const hambuger = document.querySelector("#bars")

const ham = document.querySelector("#ham")

const leftSide = document.querySelector(".collapse")

const closed = document.querySelector(".menu")

// const ham = document.querySelector("#ham")

// const leftSide = document.querySelector(".collapse")

// const closed = document.querySelector(".menu")

edit.addEventListener("click", ()=> {
    right.classList.toggle("class")

})

const logregBox = document.querySelector(".logreg-box")

const loginlink = document.querySelector(".login-link")

const registerlink = document.querySelector(".register-link")

loginlink.addEventListener("click", (e) => {
    e.preventDefault();
    logregBox.classList.remove("active")
})

registerlink.addEventListener("click", (e) => {
    e.preventDefault();
    logregBox.classList.add("active")
})
