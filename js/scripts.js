// Declaración de variables
const SLIDER = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.card');
let womenDetails = document.querySelectorAll('.details');
let DETAILS = document.querySelector('#details');

// Seleccionamos el últiomo slider
let sliderSectionLast = sliderSection[sliderSection.length-1];

let detailsSectionLast = womenDetails[womenDetails.length-1];


//Declaramos variables para los botones
const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');


// Situamos la última imagen en la primera posición
SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);

DETAILS.insertAdjacentElement('afterbegin', detailsSectionLast);


// Función listener para el botón izquierdo
btnLeft.addEventListener('click', () =>{
    let sliderSection = document.querySelectorAll('.card');
    let womenDetails = document.querySelectorAll('.details');
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    let detailsSectionLast = womenDetails[womenDetails.length-1];
    let sliderActual = sliderSection[0];
    let detailActual = womenDetails[0];

    sliderSection.forEach(slider => {
        slider.classList.remove('actual');
    });
    sliderActual.classList.add('actual');

    womenDetails.forEach(detail => {
        detail.classList.remove('visible');
    });
    detailActual.classList.add('visible');
    
    SLIDER.style.marginLeft = '0';
    SLIDER.style.transition = 'all 0.5s';
    setTimeout(() =>{
        SLIDER.style.transition = 'none';
        SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);
        DETAILS.insertAdjacentElement('afterbegin', detailsSectionLast);
        SLIDER.style.marginLeft = '-64%';
    }, 500);
 });


// Función listener para el botón derecho
const MOVERIGHT = () =>{
    let sliderSection = document.querySelectorAll('.card');
    let womenDetails = document.querySelectorAll('.details');
    let sliderSectionFirst = sliderSection[0];
    let detailsSectionFirst = womenDetails[0];
    let sliderActual = sliderSection[2];
    let detailActual = womenDetails[2];
    console.log(sliderSection);
    console.log(womenDetails);

    sliderSection.forEach(slider => {
        slider.classList.remove('actual');
    });
    sliderActual.classList.add('actual');

    womenDetails.forEach(detail =>{
        detail.classList.remove('visible');
    });
    detailActual.classList.add('visible');

    SLIDER.style.marginLeft = '-128%';
    SLIDER.style.transition = 'all 0.5s';
    setTimeout(() =>{
        SLIDER.style.transition = 'none';
        SLIDER.insertAdjacentElement('beforeend', sliderSectionFirst);
        DETAILS.insertAdjacentElement('beforeend', detailsSectionFirst);
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

// Get the <i> element that closes the modal
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


//                          * Form validation //////////////////////////////////////


const expresiones = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    surname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-,]+$/
}

//Validation status to send
const divs ={
    name: false,
    surname: false,
    mail: false
}

const form  = document.querySelector('#form');
const inputs  = document.querySelectorAll('#form input');

inputs.forEach((input) => {
    input.addEventListener('keyup', validateform);
    input.addEventListener('blur', validateform);
});

function validateform(e){
    switch(e.target.name){
        case 'name': 
            validateInput(expresiones.name, e.target, e.target.name);
            break;
        case 'surname':
            validateInput(expresiones.surname, e.target, e.target.name);
            break;
        case 'mail':
            validateInput(expresiones.mail, e.target, e.target.name);
            break;
    }
}

function validateInput(expresion, input, campo){
    if(expresion.test(input.value)){
        // console.log(document.querySelector(`#div-${campo} i`).classList)
        document.querySelector(`#div-${campo}`).classList.remove('incorrect');
        document.querySelector(`#div-${campo}`).classList.add('correct');
        document.querySelector(`#div-${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#div-${campo} i`).classList.add('fa-circle-check');
        document.querySelector(`#div-${campo} .data-input-error`).classList.remove('.data-input-error-active');
       divs[campo] = true;
    }else{
        console.log('incorrect')
        document.querySelector(`#div-${campo}`).classList.add('incorrect');
        document.querySelector(`#div-${campo}`).classList.remove('correct');
        document.querySelector(`#div-${campo} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#div-${campo} i`).classList.remove('fa-circle-check');
        document.querySelector(`#div-${campo} .data-input-error`).classList.add('.data-input-error-active');
        divs[campo] = false;
    }
}

//Función para enviar el formulario
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    if(divs.name && divs.surname && divs.email && terms.checked){
        form.reset();
        document.querySelector('#m-success').classList.add('m-success-active');
        setTimeout(()=>{
            document.querySelector('#m-success').classList.remove('m-success-active');
        }, 5000);
        document.querySelectorAll('.correct').forEach((icono) =>{
            icono.classList.remove('correct')
        });
        document.querySelector('#m_error').classList.remove('m_error-active');

    }else{
        document.querySelector('#m_error').classList.add('m_error-active');

    }
})

// Objeto datos women
const women = [
    {
        name: "Ada Lovelace",
        born: "10 December 1815",
        died: "27 November 1852",
        achievement: "First Computer Program",
        photoSRC:"media/Ada_Lovelace_portrait.jpg",
        videoSRC:"https://www.youtube.com/embed/A55YX5Gve3U?si=FtTR_xY5euaxiNUk",
        fields: ["Mathematics","Poetry"],
    },
    {
        name: "Jude Milhon",
        born: "March 12, 1939",
        died: "July 19, 2003",
        achievement: "Advocate for women in computing",
        photoSRC:"media/Jude_mugshot.jpg",
        videoSRC:"https://www.youtube.com/embed/hqJPVP1k_CE?si=JMLKak2TawVC8XEC",
        fields: ["Computer Science"]
    },
    {
        name: "Rózsa Péter",
        born: "17 February 1905",
        died: "16 February 1977<",
        achievement: "Founding mother of recursion theory",
        photoSRC:"media/RozsaPeter.jpg",
        videoSRC:"https://www.youtube.com/embed/H-9XBE4WKhA?si=UFkHtwEOnge575sG",
        fields: ["Mathematics", "Logics"]
    },
    {
        name: "Adele Goldstine",
        born: "December 21, 1920",
        died: "November 1964",
        achievement: "First working manual for ENIAC",
        photoSRC:"media/adele-goldstine.jpg",
        videoSRC:"https://www.youtube.com/embed/DljI9cs_9mU?si=-Cmi7ej9TEePulRZ&amp;start=874",
        fields: ["Mathematics","Computer Programming"]

    },
    {
        name: "Grace Murray Hopper",
        born: "December 9, 1906",
        died: " January 1, 1992",
        achievement: "Theory of machine-independent programming languages FLOW-MATIC programming language",
        photoSRC:"media/GraceMHopper.jpg",
        videoSRC:"https://www.youtube.com/embed/5sNuPYJpSCI?si=L3pfo9UJRUTty-u_",
        fields: ["American computer scientist", "Mathematician", "United States Navy rear admiral"]
    },
    {
        name: "Frances Elizabeth Allen",
        born: "August 4, 1932",
        died: "August 4, 2020",
        achievement: "First Computer Program",
        photoSRC:"media/FrancesElizabethAllen.jpg",
        videoSRC:"https://www.youtube.com/embed/XQSMvQjobMs?si=hVM-BItl5c4MyFwl",
        fields: ["Computer science","High-performance computing","Parallel computing","Compilers","Optimizing compilers"]
    },
    {
        name: "Hedy Lamarr",
        born: " November 9, 1914",
        died: "January 19, 2000",
        achievement: "Military Communications System based on radio frequencies",
        photoSRC:"media/HedyLamarr.jpg",
        videoSRC:"https://www.youtube.com/embed/J8IFfQdAitI?si=p2lMxfHdADoqBLks",
        fields: ["Acting", "Computing", "Telecomunications"]
    }
]