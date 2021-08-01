const tareaAgregada = document.querySelector('.agregarTarea');
 
tareaAgregada.addEventListener('submit', e => {
    e.preventDefault();
    const nuevaTarea = tareaAgregada.agregarTarea.value;
    console.log(nuevaTarea);
});