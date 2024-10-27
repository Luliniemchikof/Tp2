let menuDesktop = document.querySelector('.desktop-menu');
let menuMobile = document.querySelector('.mobile-menu');


function checkScreenSize() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    // Mostrar el menú móvil
    menuDesktop.style.display = 'none';
    menuMobile.style.display = 'block';
    document.getElementById("myLinks").style.display = 'none';  // Oculto el menú móvil inicialmente
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

