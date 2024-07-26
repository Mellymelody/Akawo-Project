const form = document.getElementById("formbox")
let arr = []

form.addEventListener("submit", (e) =>{
    e.preventDefault()

    let formEntry = {
       username: form.username.value,
       email: form.email.value,
       password: form.password.value 
    }

    let game = arr.push(formEntry);
    console.log(arr);

    localStorage.setItem("myForms", JSON.stringify(formEntry))
    location.href ="login.html"
})