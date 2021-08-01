const tareaAgregada = document.querySelector('.agregarTarea');
 
tareaAgregada.addEventListener('submit', e => {
    e.preventDefault();
    const nuevaTarea = tareaAgregada.agregarTarea.value;
    console.log(nuevaTarea);
});

const lista = document.querySelector('.mostrarTarea');
const ponerTareaEnLaLista = tarea => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${tarea}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    lista.innerHTML += html;
};
tareaAgregada.addEventListener('submit', e => {
    e.preventDefault();
    const nuevaTarea = tareaAgregada.agregarTarea.value.trim();
    ponerTareaEnLaLista(nuevaTarea);
});

lista.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});