// let copyText = document.querySelector("refferallink");
// let input = document.querySelector("input")
// // console.log(input);
// copyText.addEventListener("click", function(){
//     let input = copy.querySelector("input");
//     input.select();
//     document.execCommand("copy");
//     copy.classList.add("active");
//     window.getSelection().removeAllRanges();
//     setTimeout(function(){
//         copy.classList.remove("active");
//     },2500);
// });


const edit = document.querySelector("#r")
// const change = document.querySelector("#c")
// const email = document.querySelector("#e")
const right = document.querySelector(".right")
// const rig = document.querySelector(".change")
// const ri = document.querySelector("changeemail")
const hambuger = document.querySelector("#bars")
const ham = document.querySelector("#ham")
const leftSide = document.querySelector(".collapse")
const closed = document.querySelector(".menu")
// const rightSide = document.querySelector(".widt")

hambuger.addEventListener("click", ()=> {
    leftSide.classList.toggle("class");
    
})

ham.addEventListener("click", ()=> {
    closed.style.display = "block"
    closed.classList.toggle("class");

})

edit.addEventListener("click", ()=> {
    right.classList.toggle("class")

})

// change.addEventListener("click", (e)=> {
//     rig.classList.toggle("class")
    
// })

// email.addEventListener("click", (e)=> {
//     ri.classList.toggle("class")
    
// })

// const bar = document.querySelector("#ham")
// const menu = documen.querySelector("menu")

// bar.addEventListener("click",()=> {
//     menu.classList.toggle("class")
// })
