let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  let randomNum = Math.round(Math.random() * 10);
  return randomNum;
};

function compareGuesses(human, computer, secret) {
  if (Math.abs(human - secret) <= Math.abs(computer - secret)) {
    return true;
  } else {
    return false;
  }
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
};
