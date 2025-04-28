<<<<<<< HEAD
const form = document.querySelector("#formbox")
=======
const form = document.getElementById("formbox")
>>>>>>> e32dfdbb67dfc08fb731c3fcdaeea77e7b0c9ffd

// const logregBox = document.querySelector(".logreg-box")


let arr = []

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let formEntry = {
       username: form.username.value,
       email: form.email.value,
       password: form.password.value 
    }
<<<<<<< HEAD
    console.log(formEntry);
=======
    // console.log(formEntry);
>>>>>>> e32dfdbb67dfc08fb731c3fcdaeea77e7b0c9ffd

    let game = arr.push(formEntry);
    console.log(arr);

    localStorage.setItem("myForms", JSON.stringify(formEntry))
    logregBox.classList.add("active")
})
