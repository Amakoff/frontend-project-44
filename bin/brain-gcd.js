#!/usr/bin/env node
import readlineSync from 'readline-sync';

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};

const brainGcd = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let isCorrect = true;
  for (let i = 0; i < 3; i += 1) {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const question = `${num1} ${num2}`;
    const gcd = findGCD(num1, num2);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) !== gcd) {
      console.log(`'userAnswer' is wrong answer ;(. Correct answer was '${gcd}'.`);
      console.log(`Let's try again, ${name}!`);
      isCorrect = false;
      break;
    }
    console.log('Correct!');
  }
  if (isCorrect) {
    console.log(`Congratulations, ${name}!`);
  }
};

brainGcd();
