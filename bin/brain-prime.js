#!/usr/bin/env node
import readlineSync from 'readline-sync';


function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
function playPrimeGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(
    'Answer "yes" if given number is prime. Otherwise answer "no".'
  );
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer.toLowerCase() === 'yes' && isPrime(number)) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else if (userAnswer.toLowerCase() === 'no' && !isPrime(number)) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      const correctAnswer = isPrime(number) ? 'yes' : 'no';
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
playPrimeGame();
