let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input')

function getComputerChoice(){
  let options = ['Rock', 'Paper', 'Scissors']
  return options[Math.floor(Math.random() * options.lenght)]
}
function disbutton(){
  buttons.forEach(elem => {
    elem.disabled = true
  })
}

function playerChoice(playerSelection, computerSelection){
  computerSelection = getComputerChoice()
  let result = '';
  if((playerSelection == 'rock' && computerSelection == 'scissors') || 
   (playerSelection == 'paper' && computerSelection == 'rock') ||
   (playerSelection == 'scissors' && computerSelection == 'paper')){

    playerScore += 1;
    return result = ('that\'s a win ' + playerSelection + ' you have beaten ' + computerSelection
    + '<br><br>Player Score: ' + playerScore + 'Computer Score: ' + computerScore)

    if(playerScore == 5){
      result += '<br><br> you won the game! wanna lay again'
      disbutton()
    }
   }
   else if(playerSelection == computerSelection){
    result = ('tie you both choose ' + playerSelection + '<br><br>player Score: ' + playerScore + '<br> computer Score: ' + computerScore)
   }
   else{
    computerScore += 1
    result = ('You lost! ' + computerSelection + ' beaten ' + playerSelection + 
    '<br><br> player score: ' + playerScore + '<br>computer score: ' + computerScore)

    if(computerScore == 5){
      result += '<br><br>i won the game! wanna play again'
      disbutton()
    }
   }

   document.getElementById('result').innerHTML = result
   return
}

buttons.forEach(button => {
  button.addEventListener('click', function(){
    playerChoice(button.value)
  })
})
