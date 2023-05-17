document.cookie = "cookieName=cookieValue; SameSite=Lax";

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


const btnPizzaDis = document.querySelector(".btn-pizza-time");
const deliveryContainer = document.querySelector(".pizza-time-xd")
let timeConfirm = true;

function calcularDistancia() {
    btnPizzaDis.classList.add("animation-click-pizza");
	setTimeout(function(){
	     btnPizzaDis.classList.remove("animation-click-pizza");
	}, 400); 
  if (navigator.geolocation && timeConfirm == true)  {
    timeConfirm = false;
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat1 = position.coords.latitude;
      let lon1 = position.coords.longitude;

      let lat2 = 18.726308113963434;
      let lon2 = -98.454739680216;

      let R = 6371; // Radio de la tierra en km
      let dLat = toRad(lat2-lat1);
      let dLon = toRad(lon2-lon1);
      let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      let distancia = R * c; // Distancia en km

      let velocidad = 40; // Velocidad constante en km/h
      let tiempoEnHoras = distancia / velocidad; // Tiempo en horas
      let tiempoEnMinutos = Math.round(tiempoEnHoras * 60); // Tiempo en minutos
      tiempoEnMinutos = tiempoEnMinutos + 15;

      deliveryContainer.classList.add("delivery-pizza-open");
      deliveryContainer.classList.remove("delivery-pizza-close");
      setTimeout(function() {
      	showDeliveryTime();
      },1);

	function showDeliveryTime() {
		btnPizzaDis.setAttribute("hidden", "true")
		setTimeout(function(){
	        let newHtmlCode = `
	            <h2 class="text-focus-in">Su pedido llegaría en:</h2>
				<p class="text-focus-in">(Aproximadamente)</p>
				<p class="pizza-info-time text-focus-in"> ${tiempoEnMinutos} minutos</p>`;
	        deliveryContainer.innerHTML += newHtmlCode;
		},200)
	}
    });
  } else {
    return;
  }
}

function toRad(valor) {
  return valor * Math.PI / 180;
}

const botonesOrdenar = document.querySelectorAll('.btn-ordenar-item');
let informacionSeleccionada = '';

for (let i = 0; i < botonesOrdenar.length; i++) {
  const boton = botonesOrdenar[i];
  boton.addEventListener('click', function() {
    informacionSeleccionada = boton.value;
	let urlPr = `https://api.whatsapp.com/send?phone=522441027688&text=Hola%20me%20puede%20enviar%20una%20${ informacionSeleccionada}%20por%20favor?`
	window.open(urlPr);
  });
}

function redirigir() {
	let pizz = "holaquehace[rrp"
}
/*
      console.log("Distancia: " + distancia.toFixed(2) + " km");
      console.log("Tiempo: " + tiempoEnMinutos + " minutos");

      alert("Distancia: " + distancia.toFixed(2) + " km");
      alert("Tiempo: " + tiempoEnMinutos + " minutos");*/

