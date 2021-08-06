//VARIABLES
//Selectores

//selecciona el input
const tareaAgregada = document.querySelector('.agregarTarea');
//selecciona la lista donde se va a agregar la tarea
const lista = document.querySelector('.mostrarTarea');

//EVENTOS
//obtiene el valor del input al enviar el formulario 
tareaAgregada.addEventListener('submit', e => {
    e.preventDefault();
    const nuevaTarea = tareaAgregada.agregarTarea.value.trim();
    ponerTareaEnLaLista(nuevaTarea);
    //resetea el input
    tareaAgregada.reset();       
    localStorage.setItem("tareapendiente" , (JSON.stringify(tareaAgregada))); 
});
//borra la tarea al darle click al tachito
lista.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

//FUNCION
//agrega la tarea a la lista
const ponerTareaEnLaLista = tarea => {
    const texto = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${tarea}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    lista.innerHTML += texto;
    
};

function mostrarTareas () {
    localStorage.getItem("tareaPendiente", (JSON.parse(tareaAgregada)));
}

document.addEventListener("load", mostrarTareas);
 






