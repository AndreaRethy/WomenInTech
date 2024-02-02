// Get the modal
let modal = document.querySelector('#myModal');
// let content = document.querySelector('.modal-content');

// Get the button that opens the modal
let btn = document.querySelector('#myBtn');

// Get the <span> element that closes the modal
let span = document.querySelector('.close')[0];

// When the user clicks on the button, open the modal
document.querySelector('#myBtn').addEventListener('click', () =>{
    modal.style.display = 'block';
});

// When the user clicks on <span> (x), close the modal
document.querySelector('.close').addEventListener('click', () =>{
    modal.style.display = 'none';
});

// span.onclick = function() {
//   modal.style.display = "none";
// //   content.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    // content.style.display = "none";
  }
}