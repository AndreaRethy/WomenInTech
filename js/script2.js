// // Objeto datos women
// const women = [
//   {
//     name: "Ada Lovelace",
//     born: "10 December 1815",
//     died: "27 November 1852",
//     achievement: "First Computer Program",
//     photoSRC: "media/Ada_Lovelace_portrait.jpg",
//     videoSRC: "https://www.youtube.com/embed/A55YX5Gve3U?si=FtTR_xY5euaxiNUk",
//     fields: ["Mathematics", "Poetry"],
//     biography: [],
//   },
//   {
//     name: "Jude Milhon",
//     born: "March 12, 1939",
//     died: "July 19, 2003",
//     achievement: "Advocate for women in computing",
//     photoSRC: "media/Jude_mugshot.jpg",
//     videoSRC: "https://www.youtube.com/embed/hqJPVP1k_CE?si=JMLKak2TawVC8XEC",
//     fields: ["Computer Science"],
//     biography: [],
//   },
//   {
//     name: "Rózsa Péter",
//     born: "17 February 1905",
//     died: "16 February 1977<",
//     achievement: "Founding mother of recursion theory",
//     photoSRC: "media/RozsaPeter.jpg",
//     videoSRC: "https://www.youtube.com/embed/H-9XBE4WKhA?si=UFkHtwEOnge575sG",
//     fields: ["Mathematics", "Logics"],
//     biography: [],
//   },
//   {
//     name: "Adele Goldstine",
//     born: "December 21, 1920",
//     died: "November 1964",
//     achievement: "First working manual for ENIAC",
//     photoSRC: "media/adele-goldstine.jpg",
//     videoSRC:
//       "https://www.youtube.com/embed/DljI9cs_9mU?si=-Cmi7ej9TEePulRZ&amp;start=874",
//     fields: ["Mathematics", "Computer Programming"],
//     biography: [],
//   },
//   {
//     name: "Grace Murray Hopper",
//     born: "December 9, 1906",
//     died: " January 1, 1992",
//     achievement:
//       "Theory of machine-independent programming languages FLOW-MATIC programming language",
//     photoSRC: "media/GraceMHopper.jpg",
//     videoSRC: "https://www.youtube.com/embed/5sNuPYJpSCI?si=L3pfo9UJRUTty-u_",
//     fields: [
//       "American computer scientist",
//       "Mathematician",
//       "United States Navy rear admiral",
//     ],
//     biography: [],
//   },
//   {
//     name: "Frances Elizabeth Allen",
//     born: "August 4, 1932",
//     died: "August 4, 2020",
//     achievement: "First Computer Program",
//     photoSRC: "media/FrancesElizabethAllen.jpg",
//     videoSRC: "https://www.youtube.com/embed/XQSMvQjobMs?si=hVM-BItl5c4MyFwl",
//     fields: [
//       "Computer science",
//       "High-performance computing",
//       "Parallel computing",
//       "Compilers",
//       "Optimizing compilers",
//     ],
//     biography: [],
//   },
//   {
//     name: "Hedy Lamarr",
//     born: " November 9, 1914",
//     died: "January 19, 2000",
//     achievement: "Military Communications System based on radio frequencies",
//     photoSRC: "media/HedyLamarr.jpg",
//     videoSRC: "https://www.youtube.com/embed/J8IFfQdAitI?si=p2lMxfHdADoqBLks",
//     fields: ["Acting", "Computing", "Telecomunications"],
//     biography: [],
//   },
// ];
// ///////////////////////////////
// let body = document.querySelector('body');
// let main = document.querySelector('.principal');
// let nameWoman = document.querySelector('#name');
// let born = document.querySelector('#born');
// let died = document.querySelector('#died');

// women.forEach((woman) =>{
//     let section = document.createElement('section');
//     let  name = document.createElement('h2');
//     let born = document.createElement('p');
//     let died = document.createElement('p');
//     let achievement = document.createElement('p');
//     let figure = document.createElement('figure');
//     let image = document.createElement('img');
//     let field = document.createElement('ul');
//     // console.log(woman.fields)
//     woman.fields.forEach((field) =>{
//         let fiel = document.createElement('li');
//         fiel.innerHTML = field;
//     })

//     born.setAttribute('id', "born")

//     name.innerHTML = woman.name;
//     image.setAttribute('src', woman.photoSRC)
//     born.innerHTML = woman.born;
//     died.innerHTML = woman.died;
//     achievement.innerHTML = woman.achievement;
//     // section.appendChild(name)
//     figure.append(image)
//     section.append(name,figure,born,died,achievement)
//     main.appendChild(section)


// //   nameWoman.innerHTML = women[woman].name;
// //   born.innerHTML = women[woman].born;
// //   died.innerHTML = women[woman].died;
// })
// ///////////////////////////////////
// // const womanCard = document.querySelector("woman-card");
// // console.log(womanCard, womanCard.constructor.name);

// // class WomanCard extends HTMLElement {
// //   constructor() {
// //     super();
// //     console.log("Inicializando...");
// //   }
// // }
// // customElements.define("woman-card", WomanCard);
// // console.log(womanCard, womanCard.constructor.name);
