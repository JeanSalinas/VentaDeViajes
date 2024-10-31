import { barcelona, roma, paris, londres } from "./ciudades.js";

let enlaces = document.querySelectorAll('a')
let tituloDocumento = document.getElementById('titulo')
let subTituloDocumento = document.getElementById('subtitulo')
let parrafoDocumento = document.getElementById('parrafo')
let precioDocumento = document.getElementById('precio')

enlaces.forEach(function(enlace){
    enlace.addEventListener('click' , function(){
        enlaces.forEach(function (enlace){
            enlace.classList.remove('active')
        });
        this.classList.add('active')

        let contenido = obtenerContenido(this.textContent)
        tituloDocumento.innerHTML = contenido.titulo
        subTituloDocumento.innerHTML = contenido.subtitulo
        parrafoDocumento.innerHTML = contenido.parrafo
        precioDocumento.innerHTML = contenido.precio
    })
})

function obtenerContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres
    }
    return contenido[enlace]
}