//Este JS luego se puede convertir en lineas dentro del compartido con un if que indique que, si hay imágenes con las clases para redirigir al link, que aplique la interaccion correspondiente.
let imagenALink=document.querySelector('.imgLink');

imagenALink.addEventListener('mouseover', e=>{
    imagenALink.style.backgroundColor='yellowgreen'
})
imagenALink.addEventListener('mouseout', e=>{
    imagenALink.style.backgroundColor='rgba(0, 0, 0, 0.1)'
})

