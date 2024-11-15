const linkone = document.querySelector("#comp")

const linktwo = document.querySelector("#about")

const linkthree = document.querySelector("#features")

const linkfour = document.querySelector("#testimonials")

const comp = document.querySelector(".comp")
const com = document.querySelector(".com")

const about = document.querySelector(".about")
const abo = document.querySelector(".abo")

const features = document.querySelector(".features")
const fea = document.querySelector(".fea")

const testimonials = document.querySelector(".testimonials")
const tes = document.querySelector(".tes")


linkone.addEventListener("mouseover", () =>{
    comp.style.display = "block"
    comp.style.display = "flex"
    com.style.display = "block"
    })

    linkone.addEventListener("mouseout", () =>{
        comp.style.display = "none"
        com.style.display = "none"
    })

    comp.addEventListener("mouseover", () =>{
        comp.style.display = "block"
        comp.style.display = "flex"
        com.style.display = "block"
    })

    comp.addEventListener("mouseout", () =>{
        comp.style.display = "none"
        com.style.display = "none"
    })
    
    linktwo.addEventListener("mouseover", () =>{
        about.style.display = "block"
        about.style.display = "flex"
        abo.style.display = "block"
    })
    linktwo.addEventListener("mouseout", () =>{
        about.style.display = "none"
        abo.style.display = "none"
    })

    about.addEventListener("mouseover", () =>{
        about.style.display = "block"
        about.style.display = "flex"
        abo.style.display = "block"
    })

    about.addEventListener("mouseout", () =>{
        about.style.display = "none"
        abo.style.display = "none"
    })
    
    linkthree.addEventListener("mouseover", () =>{
        features.style.display = "block"
        features.style.display = "flex"
        fea.style.display = "block"
    })
    linkthree.addEventListener("mouseout", () =>{
        features.style.display = "none"
        fea.style.display = "none"
    })

    features.addEventListener("mouseover", () =>{
        features.style.display = "block"
        features.style.display = "flex"
        fea.style.display = "block"
    })

    features.addEventListener("mouseout", () =>{
        features.style.display = "none"
        fea.style.display = "none"
    })
    
    linkfour.addEventListener("mouseover", () =>{
        testimonials.style.display = "block"
        testimonials.style.display = "flex"
        tes.style.display = "block"
    })
    linkfour.addEventListener("mouseout", () =>{
        testimonials.style.display = "none"
        tes.style.display = "none"
    })

    testimonials.addEventListener("mouseover", () =>{
        testimonials.style.display = "block"
        testimonials.style.display = "flex"
        tes.style.display = "block"
    })

    testimonials.addEventListener("mouseout", () =>{
        testimonials.style.display = "none"
        tes.style.display = "none"
    })