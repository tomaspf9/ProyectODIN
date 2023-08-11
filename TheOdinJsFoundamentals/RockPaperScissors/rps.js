const choices = ['rock', 'paper', 'scissors'];

document.getElementById("playButton").addEventListener("click", function() {
  const userChoice = document.getElementById("userChoice").value.toLowerCase();
  if (choices.includes(userChoice)) {
    roundOneFight(userChoice);
  } else {
    document.getElementById("result").textContent = "Invalid choice. Please choose rock, paper, or scissors.";
  }
});

const roundOneFight = (playerSelection) => {
  const computerSelection = choices[Math.floor(Math.random() * 3)];
  const result = determineWinner(playerSelection, computerSelection);

  const winner = `You chose ${playerSelection}, computer chose ${computerSelection}. ${result}`;
  document.getElementById("result").textContent = winner;
}

const determineWinner = (user, computer) => {
  if (user === computer) {
    return 'It\'s a tie!';
  } else if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}
