function abrirModal(imagen) {
  // Obtener el modal y la imagen dentro del modal
  var modal = document.getElementById("modal");
  var modalImagen = document.getElementById("modal-imagen");

  // Asignar la URL de la imagen al atributo src de la imagen dentro del modal
  modalImagen.src = imagen.src;

  // Mostrar el modal
  modal.style.display = "flex";
}

function cerrarModal() {
  // Ocultar el modal
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}
