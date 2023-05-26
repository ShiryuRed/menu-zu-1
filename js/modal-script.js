// function abrirModal(imagen) {
//   // Obtener el modal y la imagen dentro del modal
//   var modal = document.getElementById("modal");
//   var modalImagen = document.getElementById("modal-imagen");

//   // Asignar la URL de la imagen al atributo src de la imagen dentro del modal
//   modalImagen.src = imagen.src;

//   // Mostrar el modal
//   modal.style.display = "flex";
// }

// function cerrarModal() {
//   // Ocultar el modal
//   var modal = document.getElementById("modal");
//   modal.style.display = "none";
// }



window.addEventListener("load", function(){
    new Glider(document.querySelector('.carousel-list'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel-indicadores',
        arrows: {
          prev: '.carousel-anterior',
          next: '.carousel-siguiente'
        }
    });
});

const modalContainer = document.querySelector('.modal-container');
const modalImg = document.querySelector('.modal-img');
const modalImgContainer = document.querySelector('.img-modal-container');

const imagenes = document.querySelectorAll('.img-menu-item');


imagenes.forEach(imgSrc =>{
  imgSrc.addEventListener('click', ()=>{
      let src = imgSrc.getAttribute('src');
      modalContainer.classList.add("modal-on");
      modalContainer.removeAttribute('hidden', 'true')
      modalImg.setAttribute('src', src);
      setTimeout(function(){
        modalImg.classList.add('modal-img-on')
      },300)
  })
})

modalImgContainer.addEventListener('click',()=> {
  modalContainer.classList.remove('modal-on')
  modalImg.classList.remove('modal-img-on')
  setTimeout(function(){
    modalContainer.setAttribute('hidden', 'true')
  },700)
})












//Video
//VIDEO THUMBS FUNCTIONS//

//corazon autonomo, energia nodulo sinozal que permite latir,
// 2 recorridos sistema cardiobascular,
// 1 menor 1 mayor, menor cuando la sangre que 
//llega al corazon por medio de las pasa por diferenttes cosas despues valuvla pulmonar
// el mayor, la sangre que llega entra en auricola derache y pasa por otro cosos cuando
//se llena pasa por la pulmonar y eso hace elk intercambio gaseoso los albeolos importan
// regresa al corazon por venas pulmonares, llenando el izquierdo y pasando por otra valvula
//despues por todo el cuerpo, arterias son mas gruesas y son expansibles llevan oxigeno 
//se hace mas delgado despues, se une a los capilares , arteriolas venulas, 