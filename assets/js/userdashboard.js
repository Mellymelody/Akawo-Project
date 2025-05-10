const head = document.getElementById("hh");

const dash = document.querySelector(".dash");

const dashboard = document.querySelector(".dashboard");

const depo = document.querySelector(".depo");

const deposite = document.querySelector(".deposite");

const contain = document.querySelector(".container");

const prin = document.querySelector(".prin");

const printt = document.querySelector(".print");



const confirm = sessionStorage.getItem("logins");
function pageload() {
    if(confirm){
        const sessionUser = JSON.parse(confirm)
        head.innerHTML = sessionUser.username
    }
    
}
dash.addEventListener("click", (e) => {
    e.preventDefault();
    contain.classList.remove("active")
})
depo.addEventListener("click", (e) => {
    e.preventDefault();
    contain.classList.add("active")
})
prin.addEventListener("click", (e) => {
    e.preventDefault();
    // function click(){
        if(dash) {
            contain.classList.remove("active")
            removeEventListener
            }
    // } 
    // contain.classList.add("active")
})