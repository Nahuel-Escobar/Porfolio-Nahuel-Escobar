// Menu responsive de mi Porfolio personal

// Llamo a la clase bars
let bars = document.querySelector(".bars")

// Le doy el evento "click" a bars
bars.addEventListener("click", ()=>{
    let navBar = document.querySelector(".nav-bar")
    navBar.classList.toggle("active")
})

