const playerChoice = document.getElementById('playerChoice');
const playerScore  = document.getElementById('playerScore');
const playerSelection = document.querySelectorAll('.player-container i');

// console.log(playerSelection[0].title);
// playerSelection[0].style.color = 'dodgerblue'

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

function select(choice)
{
  
  playerSelection.forEach((item,i)=>{
  
    playerSelection[i].classList.remove('selected');

    if(item.title === choice)
    {
      
      playerSelection[i].classList.add('player-selected');
      playerChoice.textContent = ` ---${choice}`;
      playerChoice.style.color = 'dodgerblue'
    }
  })
}

