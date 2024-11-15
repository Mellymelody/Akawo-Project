const header = document.getElementById("user-profile");

const confirm = sessionStorage.getItem("logins");
function pageload() {
    if(confirm){
        const sessionUser = JSON.parse(confirm)
        header.innerHTML = sessionUser.username
    }
    
}