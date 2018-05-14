var addList = document.getElementById('insert-list');    
var form = document.getElementById('form');
var containerList = document.getElementById('add-list');
var button = document.getElementById('btn-agregar');
var nameList = document.getElementById('tareaInput');

/* Versión 0.0.1 */
addList.addEventListener('click', function (event) {    
    var ocultar = document.getElementById('insert-list');
    ocultar.style.display = 'none'; 
    var mostrar = document.getElementById('form');
    mostrar.style.display = 'block'; 
});

