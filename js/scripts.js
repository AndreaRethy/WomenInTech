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


// Función listener para el botón izquierdo
btnLeft.addEventListener('click', () =>{
    let sliderSection = document.querySelectorAll('.card');
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    let sliderActual = sliderSection[0];

    sliderSection.forEach(slider => {
        slider.classList.remove('actual');
    });
    sliderActual.classList.add('actual');
    // console.log(sliderActual.innerHTML);

    // const slideWidth = sliderActual.clientWidth;
    // console.log(slideWidth);
    
    SLIDER.style.marginLeft = '0';
    SLIDER.style.transition = 'all 0.5s';
    setTimeout(() =>{
        SLIDER.style.transition = 'none';
        SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);
        SLIDER.style.marginLeft = '-64%';
    }, 500);
 });


// Función listener para el botón derecho
const MOVERIGHT = () =>{
    let sliderSection = document.querySelectorAll('.card');
    let sliderSectionFirst = sliderSection[0];
    let sliderActual = sliderSection[2];

    sliderSection.forEach(slider => {
        slider.classList.remove('actual');
    });
    sliderActual.classList.add('actual');
    // console.log(sliderActual.innerHTML);

    SLIDER.style.marginLeft = '-128%';
    SLIDER.style.transition = 'all 0.5s';
    setTimeout(() =>{
        SLIDER.style.transition = 'none';
        SLIDER.insertAdjacentElement('beforeend', sliderSectionFirst);
        SLIDER.style.marginLeft = '-64%';
    }, 500);
};
btnRight.addEventListener('click', MOVERIGHT);


// Automatización (cómo cambiar que no se mueva cuando la tarjeta detras está visible? Tambien evitar-lo si el usuario justo acaba de cambiar tarjeta)
setInterval(MOVERIGHT, 10000);
