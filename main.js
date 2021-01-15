// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";
const errors = document.getElementById("modal");
// Your JavaScript code goes here!
function hideError() {
  errors.className = "hidden";
}

function heartClick(event) {
  mimicServerCall().catch((error) => {
    errors.classList.remove("hidden");
    let display = document.getElementById("modal-message");
    display.textContent = error;
  });
}

function heartEvent() {
  let hearts = document.getElementsByClassName("like-glyph");

  for (const heart of hearts) {
    heart.addEventListener("click", heartClick);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  hideError();
  heartEvent();
});
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
