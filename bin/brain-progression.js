#!/usr/bin/env node
import readlineSync from 'readline-sync';

const brainProgression = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const generateProgression = (length) => {
    const start = getRandomInt(1, 50);
    const diff = getRandomInt(1, 10);
    const progression = [start];
    for (let i = 1; i < length; i += 1) {
      progression.push(start + diff * i);
    }
    return progression;
  };

  const hideNumber = (progression) => {
    const hiddenIndex = getRandomInt(0, progression.length - 1);
    const hiddenValue = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    return { progression, hiddenValue };
  };

  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const progressionLength = getRandomInt(5, 10);
    const { progression, hiddenValue } = hideNumber(generateProgression(progressionLength));
    const question = progression.join(' ');
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer == hiddenValue) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

brainProgression();
