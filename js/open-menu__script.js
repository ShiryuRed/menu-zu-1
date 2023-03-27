

const menuContainer = document.querySelector(".menu-container");

const menuPizzas = document.querySelector(".container-menu-pizzas");
const openMenuP = document.querySelector(".switch-food");

openMenuP.addEventListener("click", ()=>{
	menuPizzas.classList.toggle("abrir-pizza");
	menuPizzas.classList.toggle("ocultar-pizzas");
	menuPizzas.classList.remove("abrir-pizza-calzone");
	pizza.classList.add("p-focus");
	calzone.classList.remove("p-focus");
	calzoneMenu.classList.remove("calzone-menu-open");
})

const menuHamburguesas = document.querySelector(".container-menu-hamburguesas");
const openMenuH = document.querySelector(".switch-ham");

openMenuH.addEventListener("click", ()=>{
	menuHamburguesas.classList.toggle("abrir-hamburguesas");
	menuHamburguesas.classList.toggle("ocultar-hamburguesas");
})

const menuComplementos = document.querySelector(".container-menu-complementos");
const openMenuC = document.querySelector(".switch-com");

openMenuC.addEventListener("click", ()=>{
	menuComplementos.classList.toggle("abrir-complementos");
	menuComplementos.classList.toggle("ocultar-complementos");
})

const menuBebidas = document.querySelector(".container-menu-bebidas");
const openMenuB = document.querySelector(".switch-beb");

openMenuB.addEventListener("click", ()=>{
	menuBebidas.classList.toggle("abrir-bebidas");
	menuBebidas.classList.toggle("ocultar-bebidas");
})

const menuEspeciales = document.querySelector(".container-menu-especial");
const openMenuE = document.querySelector(".switch-esp");

openMenuE.addEventListener("click", ()=>{
	menuEspeciales.classList.toggle("abrir-especiales");
	menuEspeciales.classList.toggle("ocultar-especiales");
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
});



const pizza = document.querySelector(".pizza");
const calzone = document.querySelector(".calzone");
const calzoneMenu = document.querySelector(".calzone-menu");

pizza.addEventListener("click", ()=> {
	calzone.classList.remove("p-focus");
	pizza.classList.add("p-focus");
	calzoneMenu.classList.remove("calzone-menu-open");
	menuPizzas.classList.remove("abrir-pizza-calzone");
});
calzone.addEventListener("click", ()=> {
	pizza.classList.remove("p-focus");
	calzone.classList.add("p-focus");
	calzoneMenu.classList.add("calzone-menu-open");
	menuPizzas.classList.add("abrir-pizza-calzone");
});



function calcularDistancia() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat1 = position.coords.latitude;
      var lon1 = position.coords.longitude;

      var lat2 = 18.726308113963434;
      var lon2 = -98.454739680216;

      var R = 6371; // Radio de la tierra en km
      var dLat = toRad(lat2-lat1);
      var dLon = toRad(lon2-lon1);
      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      var distancia = R * c; // Distancia en km

      var velocidad = 60; // Velocidad constante en km/h
      var tiempoEnHoras = distancia / velocidad; // Tiempo en horas
      var tiempoEnMinutos = Math.round(tiempoEnHoras * 60); // Tiempo en minutos

      console.log("Distancia: " + distancia.toFixed(2) + " km");
      console.log("Tiempo: " + tiempoEnMinutos + " minutos");

      alert("Distancia: " + distancia.toFixed(2) + " km");
      alert("Tiempo: " + tiempoEnMinutos + " minutos");
    });
  } else {
    console.log("La geolocalización no está disponible en este navegador.");
  }
}

function toRad(valor) {
  return valor * Math.PI / 180;
}


