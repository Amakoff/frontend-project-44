#!/usr/bin/env node
import readlineSync from 'readline-sync';


const brainPrime = () => {
	console.log('Welcome to the Brain Games!');
	const name = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${name}!`);
	console.log(`'Aswer "yes" if given number is prime. Otherwise answer "no".`);
	

	let correctAnswers = 0;
	while (correctAnswers < 3){
		const number = Math.floor(Math.random() * 100) + 1;
		const correctAnswer = number ? 'yes' : 'no';
		console.log(`Question: ${number}`);
		const userAnswer = readlineSync.question('Your answer: ');
		if(userAnswer.toLowerCase() === correctAnswer){
			console.log('Correct!');
			correctAnswers += 1;
		}else{
			console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
			console.log(`Let's try again, ${name}!`);
			break;
		}
	}
	if(correctAnswers === 3){
		console.log(`Congratulations, ${name}!`);
	}
};

brainPrime();
