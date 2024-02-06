// Declaración de variables
const SLIDER = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.card');

// Seleccionamos el últiomo slider
let sliderSectionLast = sliderSection[sliderSection.length-1];


//Declaramos variables para los botones
const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');


// Situamos la última imagen en la primera posición
SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);


// Función listener para el botón derecho
btnLeft.addEventListener('click', () =>{
    let sliderSection = document.querySelectorAll('.card');
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    
    SLIDER.style.marginLeft = '0';
    SLIDER.style.transition = 'all 0.5s';
    setTimeout(() =>{
        SLIDER.style.transition = 'none';
        SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);
        SLIDER.style.marginLeft = '-100%';
    }, 500);
 });

// Función listener para el botón izquierdo
const MOVERIGHT = () =>{
    let sliderSectionFirst = document.querySelectorAll('.card')[0];
    SLIDER.style.marginLeft = '-200%';
    SLIDER.style.transition = 'all 0.5s';
    setTimeout(() =>{
        SLIDER.style.transition = 'none';
        SLIDER.insertAdjacentElement('beforeend', sliderSectionFirst);
        SLIDER.style.marginLeft = '-100%';
    }, 500);
};

btnRight.addEventListener('click', MOVERIGHT);

// Automatización
setInterval(MOVERIGHT, 50000);
