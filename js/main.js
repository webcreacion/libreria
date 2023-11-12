import {Libro, libros, buscarLibroPorAutor} from './libros.js';
const tablaLibros = document.getElementById('tablaLibros');
const filtroAutorEvent = document.getElementById('filtroAutorEvent');
const filtroAutor = document.getElementById('filtroAutor');
const restaurar = document.getElementById('restaurar');
const portada = document.getElementById('portada');


console.log(libros[0].titulo)

let saludo = "Hola";



function todosLosLibros(){
    tablaLibros.innerHTML = '';
    libros.forEach((book)=>{
        tablaLibros.insertAdjacentHTML('beforeend', `
            <tr>
                <td>${book.titulo}</td>
                <td>${book.autor}</td>
            </tr>`)
    });

}
let filtro = false;
let librosFiltrados;
todosLosLibros();

//Mostrar imagen
const filas = document.querySelectorAll('table tr');
filas.forEach(function(fila, index){
    fila.addEventListener('mouseover', function(){
        portada.style.display = "block";
        // portada.src = ;
        if(filtro){
            portada.src = librosFiltrados[index-1].url;
        }else {
            portada.src = libros[index-1].url;
        }
       
    })
})



filtroAutorEvent.addEventListener('click', ()=>{
    filtro = !filtro;
    tablaLibros.innerHTML = '';
    librosFiltrados = buscarLibroPorAutor(filtroAutor.value, libros);
   

    librosFiltrados.forEach((book)=>{
        tablaLibros.insertAdjacentHTML('beforeend', `
            <tr>
                <td>${book.titulo}</td>
                <td>${book.autor}</td>
            </tr>`)
    });

   
    if(tablaLibros.innerHTML == '' ){
        alert('No se encuentran libros en el filtro')
        todosLosLibros();
    
    
    };
});

//Botón quita filtros
restaurar.addEventListener('click', function(){
    todosLosLibros();
    filtro= !filtro;
   
});






