

const menuContainer = document.querySelector(".menu-container");

const menuPizzas = document.querySelector(".container-menu-pizzas");
const openMenuP = document.querySelector(".switch-food");

openMenuP.addEventListener("click", ()=>{
	menuPizzas.classList.toggle("abrir");
})

const menuHamburguesas = document.querySelector(".container-menu-hamburguesas");
const openMenuH = document.querySelector(".switch-ham");

openMenuH.addEventListener("click", ()=>{
	menuHamburguesas.classList.toggle("abrir");
})

const menuComplementos = document.querySelector(".container-menu-complementos");
const openMenuC = document.querySelector(".switch-com");

openMenuC.addEventListener("click", ()=>{
	menuComplementos.classList.toggle("abrir");
})

const menuBebidas = document.querySelector(".container-menu-bebidas");
const openMenuB = document.querySelector(".switch-beb");

openMenuB.addEventListener("click", ()=>{
	menuBebidas.classList.toggle("abrir");
})

const menuEspeciales = document.querySelector(".container-menu-especial");
const openMenuE = document.querySelector(".switch-esp");

openMenuE.addEventListener("click", ()=>{
	menuEspeciales.classList.toggle("abrir");
})


const btnCarta = document.querySelector(".btn-switch-menu");
const cartaContainer = document.querySelector(".menu-carta-container");
let cartaSwitch = false;

btnCarta.addEventListener("click", ()=> {
	menuContainer.classList.toggle("close-menu");
	if (cartaSwitch == false) {
		btnCarta.setAttribute("value", "Ver menu digital");
		cartaContainer.removeAttribute("hidden", "true");
		setTimeout(function(){
		cartaContainer.classList.toggle("menu-carta-on");
      }, 200);
		cartaSwitch = true;
	} else {	
		cartaContainer.classList.toggle("menu-carta-on");
		btnCarta.setAttribute("value", "Ver menu como carta");
		cartaSwitch = false;
		setTimeout(function(){
			cartaContainer.setAttribute("hidden", "true");
      }, 200);
	}
})