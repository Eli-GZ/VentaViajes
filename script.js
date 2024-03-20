import { barcelona, roma, paris, londres } from './ciudades.js';

//Datos
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subTituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio')


//evento click

enlaces.forEach(function (enlace) {
  enlace.addEventListener('click', function () {
    //Remover clase active
    enlaces.forEach(function (enlace) {
      enlace.classList.remove('active');
    });
    //AGREGAR ACTIVE
    this.classList.add('active');

    //MOSTRAR CONTENIDO
    let contenido = obtenerContenido(this.textContent);

    //ESCRIBIR EL CONTENIDO
    tituloElemento.innerHTML = contenido.titulo;
    subTituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    precioElemento.innerHTML = contenido.precio;
  });
});

//Función de información correcta

function obtenerContenido(enlace) {
  let contenido = {
    'Barcelona': barcelona,
    'Roma': roma,
    'París': paris,
    'Londres': londres
  }
  return contenido[enlace];
}