const choices = ['rock', 'paper', 'scissors'];

document.getElementById("rock").addEventListener("click", function() {
  roundOneFight("rock");
});

document.getElementById("paper").addEventListener("click", function() {
  roundOneFight("paper");
});

document.getElementById("scissors").addEventListener("click", function() {
  roundOneFight("scissors");
});
const roundOneFight = (playerSelection) => {
  const computerSelection = choices[Math.floor(Math.random() * 3)];
  const result = determinateWinner(playerSelection, computerSelection);

  const winner = `You chose ${playerSelection}, computer chose ${computerSelection}. ${result}`;
  document.getElementById("result").textContent = winner;
}

const determinateWinner = (user, computer) => {
  if (user === computer) {
    return 'TIE for now... I mean fair play is my passion';
  } else if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return "You win yaay... hear that? No one is happy for you";
  } else {
    return "HA HA HA HA COMPUTER < HUMAN";
  }
}