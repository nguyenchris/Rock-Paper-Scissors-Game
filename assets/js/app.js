// Create variables
var userKey, computerKeys, userKeyText, computerKeyText, wins, losses, ties
var scores = [0, 0, 0];
computerKeys = ['r', 's', 'p'];

// select DOM elements
userKeyImg = document.querySelector('#userKey');
computerKeyText = document.querySelector('#computerKey');
wins = document.querySelector('#wins');
losses = document.querySelector('#losses');
ties = document.querySelector('#ties');
splash = document.querySelector('#splash');
game = document.querySelector('.game');
start = document.querySelector('.start');




// Click event listener to start game
start.addEventListener('click', function() {
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

      if(userKey == 'r') {
        userKeyImg.innerHTML = '<img src="' + 'assets/images/rock.jpg">';
        computerKeyText.innerHTML = '<img src="' + 'assets/images/rock.jpg">';
      } else if (userKey == 's'){
        userKeyImg.innerHTML = '<img src="' + 'assets/images/scissors.jpg">';
        computerKeyText.innerHTML = '<img src="' + 'assets/images/scissors.jpg">';
      } else {
        userKeyImg.innerHTML = '<img src="' + 'assets/images/paper.jpg">';
        computerKeyText.innerHTML = '<img src="' + 'assets/images/paper.jpg">';
      }


      if(computerChoice == 'r') {
        computerKeyText.innerHTML = '<img src="' + 'assets/images/rock.jpg">';
      } else if (computerChoice == 's'){
        computerKeyText.innerHTML = '<img src="' + 'assets/images/scissors.jpg">';
      } else {
        computerKeyText.innerHTML = '<img src="' + 'assets/images/paper.jpg">';
      }
      // computerKeyText.textContent = computerChoice;
      // userKeyText.textContent = userKey;

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