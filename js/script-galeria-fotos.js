//Capturo ambos navs para que se utilicen en contextos diferentes
let menuDesktop = document.querySelector('.desktop-menu');
let menuMobile = document.querySelector('.mobile-menu');

function toggleMobileMenu() { //Función de la librería para el slider. Permite la interacción para pasar las fotos
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Función para revisar el tamaño de la pantalla y mostrar el menú correcto
function checkScreenSize() {
  if (window.matchMedia("(max-width: 768px)").matches) { //si es menor a 768px
    //mobile
    menuDesktop.style.display = 'none'; //Escondo menu de desktop
    menuMobile.style.display = 'block';//Muestro el de mobile
  } else { //si es mayor a 768px
    // desktop
    menuDesktop.style.display = 'block';// Muestro menu desktop
    menuMobile.style.display = 'none';//Escondo menu mobile
  }
}

// Llamo a la función al cargar la página
checkScreenSize();

// Chequeo el tamaño de la pantalla cuando se cambia el tamaño del navegador
window.addEventListener('resize', checkScreenSize);
