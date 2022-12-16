const playerChoice = document.getElementById('playerChoice');
const playerScore  = document.getElementById('playerScore');
const playerSelection = document.querySelectorAll('.player-container i');
const computerSelections = document.querySelectorAll('.computer-container i');
const computerChoiceText = document.getElementById('computerChoice');


// console.log(playerSelection[0].title);
// playerSelection[0].style.color = 'dodgerblue'

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};


let computerSelectedItem ='';

function computerChoice()
{
  const options=['Rock','Paper','Scissors','Lizard','Spock'];

  let randomNum = Math.floor(Math.random()*5) ;
  computerSelectedItem = options[randomNum];

  computerSelections.forEach((item,i)=>{
  
    computerSelections[i].classList.remove('computer-selected');

    if(item.title === computerSelectedItem)
    {
      
      computerSelections[i].classList.add('computer-selected');
      computerChoiceText.textContent = ` ---${computerSelectedItem}`;
      computerChoiceText.style.color = 'rgb(255, 30, 49)';
    }
  })

}

function checkResult()
{
  computerChoice()
}

function select(choice)
{
  
    playerSelection.forEach((item,i)=>{
  
    playerSelection[i].classList.remove('player-selected');

    if(item.title === choice)
    {
      
      playerSelection[i].classList.add('player-selected');
      playerChoice.textContent = ` ---${choice}`;
      playerChoice.style.color = 'dodgerblue';
    }
  })

  checkResult()
}

