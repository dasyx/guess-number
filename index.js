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

const targetNumber = Math.floor(Math.random() * 101);
console.log(targetNumber);

const guessNumberGame = (attempt = 1) => {
  if (attempt > 10) {
    console.log("You've reached the maximum number of attempts. Game over.");
    return;
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
    console.log("You won!");
  }
};

guessNumberGame();