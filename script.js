import { startConfetti, stopConfetti, removeConfetti } from "./confetti.js";

const playerChoice = document.getElementById('playerChoice');
const playerScore  = document.getElementById('playerScore');
const playerSelection = document.querySelectorAll('.player-container i');
const computerSelections = document.querySelectorAll('.computer-container i');
const computerChoiceText = document.getElementById('computerChoice');
const computerScore  = document.getElementById('computerScore');
const resultText = document.getElementById('resultText')


const choices = {
  rock: { name: 'Rock', defeats: ['Scissors', 'Lizard'] },
  paper: { name: 'Paper', defeats: ['Rock', 'Spock'] },
  scissors: { name: 'Scissors', defeats: ['Paper', 'Lizard'] },
  lizard: { name: 'Lizard', defeats: ['Paper', 'Spock'] },
  spock: { name: 'Spock', defeats: ['Scissors', 'Rock'] },
};


let computerSelectedItem ='';

let playerScoreNum = 0 ;
let computerScoreNum = 0;


function resetAll()
{
  playerScoreNum=0;
  computerScoreNum=0;
  resultText.textContent = '';
  computerScore.textContent = computerScoreNum;
  playerScore.textContent = playerScoreNum;
  playerChoice.textContent ='';
  computerChoiceText.textContent = '';
  computerSelections.forEach((item,i)=>{
    computerSelections[i].classList.remove('computer-selected');
  });
  playerSelection.forEach((item,i)=>{
    playerSelection[i].classList.remove('player-selected');
  });

}

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



function updateScore(pChoice)
{
  if(pChoice === computerSelectedItem)
  {
    resultText.textContent = "Oops, It's a Tie";
    resultText.style.color = 'brown';
  }
  else
  {
    const choicesCheck = choices[pChoice.toLowerCase()];

    if(choicesCheck.defeats.indexOf(computerSelectedItem) === -1)
    {
      
      resultText.textContent = "You Lost!";
      resultText.style.color = 'red';
      computerScoreNum++;
      computerScore.textContent = computerScoreNum;

    }
    else
    {
      startConfetti()
      resultText.textContent = "Hurrah, You Win!";
      resultText.style.color = 'green';
      playerScoreNum++;
      playerScore.textContent = playerScoreNum;
    }
  }
}

function checkResult(pChoice)
{
  computerChoice()
  updateScore(pChoice)
}

function select(choice)
{
      stopConfetti();
      removeConfetti();
  
    playerSelection.forEach((item,i)=>{
  
    playerSelection[i].classList.remove('player-selected');

    if(item.title === choice)
    {
      
      playerSelection[i].classList.add('player-selected');
      playerChoice.textContent = ` ---${choice}`;
      playerChoice.style.color = 'dodgerblue';
    }
  })

  checkResult(choice)
}

window.select = select;
window.resetAll = resetAll;


resetAll();