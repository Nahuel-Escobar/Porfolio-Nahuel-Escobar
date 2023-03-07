// Menu responsive de mi Porfolio personal
// Llamo a la clase bars
let bars = document.querySelector(".bars")

// Le doy el evento "click" a bars
bars.addEventListener("click", ()=>{
    // Agarro la clase para que el nav aparezca
    let navBar = document.querySelector(".nav-bar")
    navBar.classList.toggle("active")
    // Le agrego una clase al bars para animacion
    bars.classList.toggle("open")
})