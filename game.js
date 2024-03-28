const middleEast = ['oud or ud', 'daf', 'riqq', 'tabla/dumbek/doholla,darkbukeh']
const india = ['Ektara', 'Tanpura', 'Tambura', 'Tabla'];
const southEastAsia = ['Gamelan', 'Metallophone', 'Gongan', 'slendro/pelog', 'kendang/gendang','kompang']
const china = ['dizi', 'erhu', 'yangqin','sheng','pipa','guzheng'];
const korea = ['Janggu', 'Gayegeum']

// Example array of arrays with [word, country] pairs
let wordsAndCountries =[
  ['oud or ud', 'Middle East'],
  ['daf', 'Middle East'],
  ['riqq', 'Middle East'],
  ['tabla/dumbek/doholla,darkbukeh', 'Middle East'],
  ['Ektara', 'India'],
  ['Tanpura', 'India'],
  ['Tambura', 'India'],
  ['Tabla', 'India'],
  ['Gamelan', 'South East Asia'],
  ['Metallophone', 'South East Asia'],
  ['Gongan', 'South East Asia'],
  ['slendro/pelog', 'South East Asia'],
  ['kendang/gendang', 'South East Asia'],
  ['kompang', 'South East Asia'],
  ['dizi', 'China'],
  ['erhu', 'China'],
  ['yangqin', 'China'],
  ['sheng', 'China'],
  ['pipa', 'China'],
  ['guzheng', 'China'],
  ['Janggu', 'Korea'],
  ['Gayegeum', 'Korea']
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

wordsAndCountries = shuffleArray(wordsAndCountries);


let currentWordIndex = 0;

function setupGame() {
  document.getElementById('submitGuess').addEventListener('click', checkAnswer);
  showWord();
}

function showWord() {
  if (currentWordIndex < wordsAndCountries.length) {
      document.getElementById('wordPrompt').textContent = `What country is associated with "${wordsAndCountries[currentWordIndex][0]}"?`;
  } else {
      document.getElementById('wordPrompt').textContent = "Congratulations! You've guessed all the words.";
      document.getElementById('countryGuess').style.display = 'none';
      document.getElementById('submitGuess').style.display = 'none';
  }
}

function checkAnswer() {
  const userGuess = document.getElementById('countryGuess').value.trim().toLowerCase();
  const correctAnswer = wordsAndCountries[currentWordIndex][1].toLowerCase();

  if (userGuess === correctAnswer) {
      currentWordIndex++;
      document.getElementById('countryGuess').value = ''; // Clear input field for the next guess
      document.getElementById('result').textContent='Correct!'
      showWord();
  } else {
      document.getElementById('result').textContent='Wrong!'
  }
}


// Event listener for the Enter key in the input field
document.getElementById('countryGuess').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent the default action to avoid any unexpected behavior
    checkAnswer();
  }
});

// Initialize the game
setupGame();
