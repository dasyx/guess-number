import { prompt } from './prompt.js';

// 🦁 Ici, je peux utiliser prompt comme si c'était une fonction normale
// 🦁 Je peux stocker le résultat dans une variable

const targetNumber = () => Math.floor(Math.random() * 100);
console.log(targetNumber());

const guessNumber = prompt('Guess a number between 1 and 100:');