// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//Gets rid of the error modal at the top of the screen
const modal = document.querySelector('#modal');
modal.hidden = true;

//Grabs the heart button HMTL collection on the page
const buttons = document.getElementsByClassName('like-glyph');
//console.log(buttons);

//Grabs each individual heart button on the page
for(let button of buttons) {
  button.addEventListener('click', e => console.log(e.target));
};


//Adds click listener to the buttons on the page
//buttons.addEventListener('click', e => console.log(e.target));
//buttons.forEach(button => console.log(button));




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
