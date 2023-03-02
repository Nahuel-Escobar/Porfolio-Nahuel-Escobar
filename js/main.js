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


// Creo una alerta para el boton resumen. Diciendo que no esta habilitado

const resumen = document.getElementById("resumen")

resumen.addEventListener("click", ()=>{
    Swal.fire({
        title: 'Cv no encontrado',
        text: 'Actualmente me encuentro creando mi cv en pdf, disculpe las molestias',
        imageUrl: 'https://2.bp.blogspot.com/-YogAEK4VD4c/WOtX_gF7XSI/AAAAAAAADhk/1PVsOjqfk1k5Cxzm6nS150CL_Tg6NDdPgCLcB/s400/mossfire0ph.gif',
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'problemas tecnicos',
        width: 400,
        
      })
})