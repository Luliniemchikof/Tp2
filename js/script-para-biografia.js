//Este JS luego se puede convertir en lineas dentro del compartido con un if que indique que, si hay imágenes con las clases para redirigir al link, que aplique la interaccion correspondiente.
let imagenALink=document.querySelector('.imgLink1');
let imagenALink2=document.querySelector('.imgLink2');

imagenALink.addEventListener('mouseover', e=>{
    imagenALink.style.backgroundColor='yellowgreen'
})
imagenALink.addEventListener('mouseout', e=>{
    imagenALink.style.backgroundColor='rgba(0, 0, 0, 0.1)'
})

imagenALink2.addEventListener('mouseover', e=>{
    imagenALink2.style.backgroundColor='yellowgreen'
})
imagenALink2.addEventListener('mouseout', e=>{
    imagenALink2.style.backgroundColor='rgba(0, 0, 0, 0.1)'
})