<<<<<<< HEAD
const formn = document.querySelector("#form-login")
=======
const formn = document.getElementById("form-login")
>>>>>>> e32dfdbb67dfc08fb731c3fcdaeea77e7b0c9ffd

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




