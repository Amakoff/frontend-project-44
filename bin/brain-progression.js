#!/usr/bin/env node
import readlineSync from 'readline-sync';

const brainProgression = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const getRandomInt = (min, max) => {
    const minNum = Math.ceil(min);
    const maxNum = Math.floor(max);
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  };
  const generateProgression = (start, step, length, hiddenIndex) => {
    const progression = [];
    let hiddenNumber;
    for (let i = 0; i < length; i += 1) {
      const num = start + step * i;
      if (i === hiddenIndex) {
        progression.push('..');
        hiddenNumber = num;
      } else {
        progression.push(num);
      }
    }
    return [progression, hiddenNumber];
};
const playProgression = () => {
  const length = getRandomInt(5, 10);
  const start = getRandomInt(1, 10);
  const step = getRandomInt(2, 5);
  const hiddenIndex = getRandomInt(0, length - 1);
  const [progression, hiddenNumber] = generateProgression(start, step, length, hiddenIndex);
  console.log(`Question: ${progression.join(' ')}`);
  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) === hiddenNumber) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};
  let attempts = 3;
  while (attempts > 0) {
    const isCorrectAnswer = playProgression();
    if (isCorrectAnswer) {
      attempts -= 1;
    } else {
      break;
    }
  }
  if (attempts === 0) {
  console.log(`Congratulations, ${name}!`);
  }
};
brainProgression();
