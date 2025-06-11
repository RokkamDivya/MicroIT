const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const winnerDisplay = document.getElementById('winner');

function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  userChoiceDisplay.textContent = formatChoice(userChoice);
  computerChoiceDisplay.textContent = formatChoice(computerChoice);

  const winner = getWinner(userChoice, computerChoice);
  winnerDisplay.textContent = winner;
}

function getWinner(user, computer) {
  if (user === computer) {
    return "It's a Draw!";
  }

  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'scissors' && computer === 'paper') ||
    (user === 'paper' && computer === 'rock')
  ) {
    return "You Win!";
  } else {
    return "Computer Wins!";
  }
}

function formatChoice(choice) {
  switch (choice) {
    case 'rock': return '🪨 Rock';
    case 'paper': return '📄 Paper';
    case 'scissors': return '✂️ Scissors';
    default: return '-';
  }
}
