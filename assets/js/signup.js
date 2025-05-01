const form = document.querySelector("#formboxe")

const logregBoxx = document.querySelector(".logreg-box")

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
    // console.log(arr);

    localStorage.setItem("myForms", JSON.stringify(formEntry))
    logregBoxx.classList.add("active")
})

const logregBox = document.querySelector(".logreg-box")

const loginlink = document.querySelector(".login-link")

const registerlink = document.querySelector(".register-link")

registerlink.addEventListener("click", (e) => {
    e.preventDefault();
    logregBox.classList.remove("active")
});

loginlink.addEventListener("click", (e) => {
    e.preventDefault();
    logregBox.classList.add("active")
});

const formn = document.querySelector("#form-login")

const validate = localStorage.getItem("myForms");


formn.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validate) {
        const inputFields = JSON.parse(validate)
        if(formn.username.value == inputFields.username && formn.password.value == inputFields.password) {
            
            alert("you have succesfully logged in.");

            const newText = {
                username: inputFields.username,
                password: inputFields.password
            }
    
            sessionStorage.setItem("logins", JSON.stringify(newText))
    
                location.href = "userdashboard.html"
                
        }  else {
            alert("wrong username or password")
        }
}

})
