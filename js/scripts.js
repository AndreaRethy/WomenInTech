document.addEventListener('DOMContentLoaded', function() {
    autoPlayYouTubeModal();
  });

  function autoPlayYouTubeModal() {
    var triggers = document.querySelectorAll('.trigger');

    triggers.forEach(function(trigger) {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();

        var theModal = this.getAttribute('data-target');
        var videoSRC = this.getAttribute('src');
        var videoSRCauto = videoSRC + '?autoplay=1';

        document.querySelector(theModal + ' iframe').setAttribute('src', videoSRCauto);

        var modalElement = document.querySelector(theModal);
        modalElement.addEventListener('hidden.bs.modal', function() {
          document.querySelector(theModal + ' iframe').setAttribute('src', '');
        });
      });
    });
  }

// // Get the modal
// let modal = document.querySelector('#modal');
// // let content = document.querySelector('.modal-content');

// // Get the button that opens the modal
// let abrir = document.querySelector('.trigger');

// // Get the <span> element that closes the modal
// let cerrar = document.querySelector('#cerrar');

// //Funcion abrir modal
// abrir.addEventListener('click', () =>{
//     modal.classList.remove('oculta-modal');
//     console.log('click en abrir');
// });

// //Funcion cerrar modal
// cerrar.addEventListener('click', () =>{
//     modal.classList.add('oculta-modal');
// });
// //Segunda funcion cerrar modal haciendo click fuera
// window.addEventListener('click', (e)=>{
//     if (e.target == modal){
//         modal.classList.add('oculta-modal');
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {
//     autoPlayYouTubeModal();
//   });

//   function autoPlayYouTubeModal() {
//     var iframe = document.querySelector('iframe');

//     iframe.addEventListener('click', function() {
//       var theModal = document.getElementById('myModal');
//       var videoSRC = this.getAttribute('src');
//       var videoSRCauto = videoSRC + '?autoplay=1';

//       // Create modal content
//       var modalContent = document.createElement('div');
//       modalContent.className = 'modal-content';
//       modalContent.innerHTML = '<iframe width="560" height="315" src="' + videoSRCauto + '" frameborder="0" allowfullscreen></iframe>';

//       // Clear existing content and append modal content
//       theModal.innerHTML = '';
//       theModal.appendChild(modalContent);

//       // Display the modal
//       theModal.style.display = 'flex';

//       // Close modal when clicked outside
//       theModal.addEventListener('click', function(e) {
//         if (e.target === theModal) {
//           theModal.style.display = 'none';
//           theModal.innerHTML = '';
//         }
//       });
//     });
//   }


// $(document).ready(function() {
// autoPlayYouTubeModal();
// });

// function autoPlayYouTubeModal() {
// var trigger = $('.trigger');
// trigger.click(function(e) {
//     e.preventDefault();
//     var theModal = $(this).data("target");
//     var videoSRC = $(this).attr("src");
//     var videoSRCauto = videoSRC + "?autoplay=1";
//     $(theModal + ' iframe').attr('src', videoSRCauto);
//     $(theModal).on('hidden.bs.modal', function(e) {
//     $(theModal + ' iframe').attr('src', '');
//     });
// });
// };


