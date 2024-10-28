let menuDesktop = document.querySelector('.desktop-menu');
let menuMobile = document.querySelector('.mobile-menu');


function checkScreenSize() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    // Mostrar el menú móvil
    menuDesktop.style.display = 'none';
    menuMobile.style.display = 'block';
    /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
  } else {
    // Mostrar el menú de escritorio
    menuDesktop.style.display = 'block';
    menuMobile.style.display = 'none';
  }
}

// Ejecutar cuando se carga la página
checkScreenSize();

// Escuchar el cambio de tamaño de la ventana
window.addEventListener('resize', checkScreenSize);

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
  x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}