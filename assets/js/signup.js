const form = document.querySelector("#formbox")

// const logregBox = document.querySelector(".logreg-box")


let arr = []

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let formEntry = {
       username: form.username.value,
       email: form.email.value,
       password: form.password.value 
    }
    console.log(formEntry);

    let game = arr.push(formEntry);
    console.log(arr);

    localStorage.setItem("myForms", JSON.stringify(formEntry))
    logregBox.classList.add("active")
})
