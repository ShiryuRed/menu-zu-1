

const menuContainer = document.querySelector(".menu-container");

const menuPizzas = document.querySelector(".container-menu-pizzas");
const openMenuP = document.querySelector(".switch-food")

openMenuP.addEventListener("click", ()=>{
	menuPizzas.classList.toggle("abrir");
})

const menuHamburguesas = document.querySelector(".container-menu-hamburguesas");
const openMenuH = document.querySelector(".switch-ham")

openMenuH.addEventListener("click", ()=>{
	menuHamburguesas.classList.toggle("abrir");
})
