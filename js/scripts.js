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
        console.log(sliderActual)
    }, 500);
};
btnRight.addEventListener('click', MOVERIGHT);


// Automatización (cómo cambiar que no se mueva cuando la tarjeta detras está visible? Tambien evitar-lo si el usuario justo acaba de cambiar tarjeta)
// setInterval(MOVERIGHT, 10000);
const MOVER = () =>{
    let cards = document.querySelectorAll('.card');
    let cardActual = document.querySelector('.actual')
    let btnRight = document.querySelector('.slider-btn-right');
    let btnLeft = document.querySelector('.slider-btn-left');
    console.log(cards);
    // btnRight.addEventListener('click', () =>{
    //     cardActual.classList.remove('actual');
    //     for(let i= 0; cards.length, i++){
    //         if (i === 1){
                
    //         }
    //     }
    //     cards.forEach(card => {
    //         card.style.marginLeft = '-128%';
    //         card.style.transition = 'all 0.5s';
    //     });
    

    // })
   
    // card.classList.add('actual');

}

//Dropdown
let margins = []
//Hace falta relacionar margins/position con class actual para que el slider se mueva a cualquier lado indicándole un margin o algo
//PERO como hacemos que se muevan los elements en el html...


const DROPDOWNLINK = () =>{
    //Esta funcion hace que al seleccionar un link del dropdown del nav quite el class actual de la card actual y le ponga class actual a la card seleccionada desde el nav seleccionándola con la class
    let cardLinks = document.querySelectorAll('.dropdownLink');
    let cardActual = document.querySelector('.actual');
    let cards = document.querySelectorAll('.card');
    console.log(cardLinks);
    console.log(cardActual);
    console.log(cards)
    cardLinks.forEach(cardLink => {
        cardLink.addEventListener('click', (e) =>{
            let cardLinkSelected = e.target;
            let classSelected = cardLinkSelected.classList[1];
            console.log(classSelected);
            let cardSelected = document.querySelectorAll(`.${classSelected}`)[1];
            console.log(cardSelected);
            cardActual.classList.remove('.actual');
            cardSelected.classList.add('actual');
            console.log('')
        })
    });
}
document.querySelector('.dropbtn').addEventListener('click', DROPDOWNLINK);

//MODAL
// Get the modal
let modal = document.querySelector('#modal');
// let content = document.querySelector('.modal-content');

let modalVideo = document.querySelector('#modal-video');

// Get the button that opens the modal
// let abrir = document.querySelector('#abrir');
let abrirVentanas = document.querySelectorAll('.abrir');

let cardVideos = document.querySelectorAll('.card-video');

// Get the <span> element that closes the modal
let cerrar = document.querySelector('#cerrar');

//Funcion abrir modal
abrirVentanas.forEach((abrir, index) =>{
    abrir.addEventListener('click', () =>{
        // console.log(cardVideos[index].src);
        modalVideo.src = cardVideos[index].src;
        modal.classList.remove('oculta-modal');
        console.log('click en abrir');
    });
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