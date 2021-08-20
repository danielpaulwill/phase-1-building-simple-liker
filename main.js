// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//Selects error modal and defaults to
const modal = document.querySelector('#modal');

modal.className = "hidden"

//Grabs the heart button HMTL collection on the page
const buttons = document.getElementsByClassName('like-glyph');


//Grabs each individual heart button on the page & adds click listener
for(let button of buttons) {
  button.addEventListener('click', e => {
    let button = e.target
    e.preventDefault()
    mimicServerCall()
    .then(data => {
      if (button.className === "activated-heart") {
        button.className = ""}
      else {button.className = "activated-heart"}
      console.log(data)})
    .catch(() => {
      button.className = ""
    modal.className = ""
    setTimeout(function() {
        modal.className = "hidden"
      }, 3000);
      console.log("ERROR");
    })
  })
};
 
//WHAT DO I WANT TO DO???
//Take the data, and
  //IF data=Pretend remote server notified of action!, do nothing
//BUT if data= Random server error. Try again.
  //THEN invoke modalChange(false)




// When a user clicks on an empty heart:
  // Invoke mimicServerCall to simulate making a server request
  // When the "server" returns a failure status:
  // Respond to the error using a .catch(() => {}) block after your .then(() => {}) block.
  // Display the error modal by removing the .hidden class
  // Display the server error message in the modal
  // Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
  // When the "server" returns a success status:
  // Change the heart to a full heart
  // Add the .activated-heart class to make the heart appear red




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
