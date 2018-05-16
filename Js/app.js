// Variables globales
var addList = document.getElementById('insert-list');  
var button = document.getElementById('btn-agregar');


/* Versión 0.0.1 */
addList.addEventListener('click', function (event) { 
    var hideFirst = document.getElementById('insert-list');
    hideFirst.style.display = 'none'; 
    var showSecond = document.getElementById('form');
    showSecond.style.display = 'block';
});


/* Versión 0.0.2 */
function getFocus() {
    document.getElementById("taskInput").focus();  // taskInput  =  tareaInput
};

button.addEventListener('click', function (event) {
    document.getElementById("container").style.display = "block";
});

button.addEventListener('click', function(){ 
    event.preventDefault();
    var comment = document.getElementById('taskInput').value; // .toUpperCase(); // tenemos que tomar el texto ingresado en el textarea     	
	document.getElementById('taskInput').value = ''; //limpiar el textarea
    var containerMain = document.getElementById('container'); //contenedor que esta en el html
    containerMain.classList.add('hide-container');
    var p = document.createElement('p');    // que va a contener el texto
    var title = document.createTextNode(comment);        
    var a = document.createElement('a');  // crear a para el texto
    a.setAttribute("href", "#");
    a.classList.add('taskA');
    var text = document.createTextNode('Añadir una tarea...');
    // se juntan
    p.appendChild(title);
    a.appendChild(text);
    containerMain.appendChild(p); 
    
    containerMain.appendChild(a);

    //validar que textarea tenga un mensaje
    if (comment.length == 0 || comment == null) {
        alert('Debes ingresar un mensaje');
        return false;
    };
});











