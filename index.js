import { prompt } from "./prompt.js";

console.log(` 
🦁 Welcome to the Number Guessing Game! 🎮

Rules:
1. The system will generate a random number between 0 and 100.
2. Your task is to guess this number.
3. Enter a number when prompted.
4. If your guess is too high or too low, you'll be notified, and you can guess again.
5. The game continues until you guess the correct number.

Let's get started! 🚀

`);

// a function that generates a random number between 0 and 100
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100);
};

let targetNumber = generateRandomNumber();
console.log(targetNumber);


const guessNumberGame = (attempt = 1) => {
  
  if (attempt > 10) {
    console.log("You've reached the maximum number of attempts. Game over.");
    return playAgain();
  }
  if (attempt > 1) {
    console.log(`You have ${11 - attempt} attempts left.`);
  }

  const guessNumber = Number(prompt("Guess a number between 0 and 100 : "));

  if (guessNumber < 0 || guessNumber > 100 || isNaN(guessNumber)) {
    console.log("Please enter a number between 0 and 100.");
    return guessNumberGame(attempt);
  }

  if (guessNumber > targetNumber) {
    console.log("Your guess is too high!");
    return guessNumberGame(attempt + 1);
  } else if (guessNumber < targetNumber) {
    console.log("Your guess is too low!");
    return guessNumberGame(attempt + 1);
  } else {
    console.log(`Congratulations, you won with ${attempt} attempt(s)!`);
    console.log(playAgain());
  }
};

const playAgain = () => {
  const newGame = prompt("Do you want to play again? (y/n) : ");

  if (newGame === "y") {
    console.log("Let's play again!");
    targetNumber = generateRandomNumber();
    console.log(targetNumber);
    return guessNumberGame();
  } else {
    console.log("Thanks for playing! Goodbye.");
  }
};

guessNumberGame();
