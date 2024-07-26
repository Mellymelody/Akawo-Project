const form = document.getElementById("form-login")

const validate = localStorage.getItem("myForms");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validate) {
        const inputFields = JSON.parse(validate)
        if(form.username.value == inputFields.username && form.password.value == inputFields.password) {

            alert("you have succesfully logged in.");

            const newText = {
                username: inputFields.username,
                password: inputFields.password
            }
    
            sessionStorage.setItem("logins", JSON.stringify(newText))
    
                location.href = "userdashboard.html"
        }  else {
            alert("wrong email or password")
        }

}

})