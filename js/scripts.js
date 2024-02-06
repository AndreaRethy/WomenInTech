// Get the modal
let modal = document.querySelector('#modal');
// let content = document.querySelector('.modal-content');

// Get the button that opens the modal
let abrir = document.querySelector('#abrir');

// Get the <span> element that closes the modal
let cerrar = document.querySelector('#cerrar');

//Funcion abrir modal
abrir.addEventListener('click', () =>{
    modal.classList.remove('oculta-modal');
    console.log('click en abrir');
});

//Funcion cerrar modal
cerrar.addEventListener('click', () =>{
    modal.classList.add('oculta-modal');
});
//Segunda funcion cerrar modal haciendo click fuera
window.addEventListener('click', (e)=>{
    if (e.target == modal){
        modal.classList.add('oculta-modal');
    }
});