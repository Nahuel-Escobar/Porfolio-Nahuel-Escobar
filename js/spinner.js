// Hago un preloader 

const preloader = document.querySelector(".preloader")

window.addEventListener("load", ()=>{
    setInterval(() => {
        preloader.style.display = 'none'        
    }, 1700);    
})