// Create variables
var userKey, computerKeys, userKeyText, computerKeyText, wins, losses, ties
var scores = [0, 0, 0];
computerKeys = ['r', 's', 'p'];

// select DOM elements
userKeyText = document.querySelector('#userKey');
computerKeyText = document.querySelector('#computerKey');
wins = document.querySelector('#wins');
losses = document.querySelector('#losses');
ties = document.querySelector('#ties');
splash = document.querySelector('#splash');
game = document.querySelector('.game');


// Click event listener to start game
document.addEventListener('click', function() {
  init();
})


function init() {
  // remove splash page and display game page
  game.style.display = "block";
  splash.style.display = "none";

  // create event listener for keyup
  document.addEventListener('keyup', function(e) {

  // randomize keypress for computer after each event keyup
    var computerChoice = computerKeys[Math.floor(Math.random() * 3)];
    userKey = e.key;

    if (userKey == 'r' || userKey == 's' || userKey == 'p') {

      computerKeyText.textContent = computerChoice;
      userKeyText.textContent = userKey;

      // conditional statements; compare userKey to computerChoice
      // update score and add it depending on which score
      // display the score
      if ((userKey == 'r' && computerChoice == 's') || (userKey == 'p' && computerChoice == 'r') || (userKey == 's' && computerChoice == 'p')) {

        scores[0] += 1
        wins.textContent = scores[0];

      } else if (userKey == computerChoice) {

        scores[1] += 1;
        ties.textContent = scores[1];

      } else {

        scores[2] += 1;
        losses.textContent = scores[2];

      }
    }
  })
}