const choices = ['rock','paper','scissor']


const playerSelection = prompt("Choose your weapon")



const getComputerChoice = (choices)=>{
  const randomChoices = Math.floor(Math.random() * choices.length)
  return randomChoices
  
}

const roundOneFight = (playerSelection, computerSelection) =>{
  if(computerSelection === 2 ) return 'You lose, Computer always wins'
}
  const computerSelection = getComputerChoice

