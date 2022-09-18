let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  let randomNum = Math.round(Math.random() * 10);
  return randomNum;
};

console.log(generateTarget());
