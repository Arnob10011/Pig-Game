const playerEl1 = document.querySelector(".player--content-1");
const playerEl2 = document.querySelector(".player--content-2");
const allPlayers = document.querySelectorAll(".dice__content");
const scoreEl1 = document.querySelector(".score-1");
const scoreEl2 = document.querySelector(".score-2");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const diceEl = document.querySelector("img");

let scoreForPlayer1 = 0;
let scoreForPlayer2 = 0;
let requiredScore = 10;
function rollDice() {
  // selecting the img

  const dice = Math.floor(Math.random() * 6 + 1);

  diceEl.style.visibility = "visible";

  diceEl.src = `./images/dice-${dice}.png`;
  // get and set the value on the active one
  getValue(dice);
}

function changePlayer() {
  playerEl1.classList.toggle("player--active");
  playerEl2.classList.toggle("player--active");
}

function getValue(dice) {
  if (dice === 1) {
    changePlayer();

    if (!playerEl1.classList.contains("player--active")) {
      scoreEl1.textContent = 0;
      scoreForPlayer1 = 0;
    }

    if (!playerEl2.classList.contains("player--active")) {
      scoreEl2.textContent = 0;
      scoreForPlayer2 = 0;
    }
  } else {
    if (playerEl1.classList.contains("player--active")) {
      scoreForPlayer1 = scoreForPlayer1 + dice;

      scoreEl1.textContent = scoreForPlayer1;
    }

    if (playerEl2.classList.contains("player--active")) {
      scoreForPlayer2 = scoreForPlayer2 + dice;
      scoreEl2.textContent = scoreForPlayer2;
    }
  }
  winnerOrLoser();
}

// hold the dice score
function holdDice() {
  changePlayer();
  if (!playerEl1.classList.contains("player--active")) {
    scoreEl1.textContent = scoreForPlayer1;
  }

  if (!playerEl2.classList.contains("player--active")) {
    scoreEl1.textContent = scoreForPlayer2;
  }
}
// defines how will win or lose

function winnerOrLoser() {
  if (scoreForPlayer1 > scoreForPlayer2 && scoreForPlayer1 >= requiredScore) {
    checkForPlayer1();
  }

  if (scoreForPlayer2 > scoreForPlayer1 && scoreForPlayer2 >= requiredScore) {
    checkForPlayer2();
  }
}

function checkForPlayer1() {
  playerEl1.style.backgroundColor = "#2a9d8f";
  playerEl2.style.backgroundColor = "#e76f51";

  scoreEl1.style.backgroundImage = "url('./images/smile.jpg')";
  scoreEl2.style.backgroundImage = "url('./images/sad.png')";
  scoreEl1.classList.add("emoji");
  scoreEl2.classList.add("emoji");

  diceEl.style.visibility = "hidden";
}

function checkForPlayer2() {
  playerEl1.style.backgroundColor = "#e76f51";
  playerEl2.style.backgroundColor = "#2a9d8f";

  scoreEl1.style.backgroundImage = "url('./images/sad.png')";
  scoreEl2.style.backgroundImage = "url('./images/smile.jpg')";
  scoreEl1.classList.add("emoji");
  scoreEl2.classList.add("emoji");

  diceEl.style.visibility = "hidden";
}

// reset the game
function newGame() {
  scoreForPlayer1 = 0;
  scoreForPlayer2 = 0;
  scoreEl1.textContent = 0;
  scoreEl2.textContent = 0;
  scoreEl1.classList.remove("emoji");
  scoreEl2.classList.remove("emoji");
  scoreEl1.style.backgroundImage = "none";
  scoreEl2.style.backgroundImage = "none";
  diceEl.style.visibility = "hidden";
  playerEl1.removeAttribute("style");
  playerEl2.removeAttribute("style");
  playerEl1.classList.add("player--active");
  playerEl2.classList.remove("player--active");
}

btnRoll.addEventListener("click", rollDice);

btnHold.addEventListener("click", holdDice);

btnNew.addEventListener("click", newGame);
