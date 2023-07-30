#!/usr/bin/env node
import readlineSync from 'readline-sync';
export default function greeting(){
 console.log('Welcome to the Brain Games!');
 const name = readlineSync.question('May I have your name? ');

 console.log(`Hello, ${name}!`);
 console.log('Answer "yes" if the number is even, otherwise answer "no".');

 const getRandomNum = (max) => {
	return Math.floor(Math.random() * max); 
};
 for (let i = 0; i < 3; i += 1){

	const number = getRandomNum(100);
	console.log(`Question: ${number}`);
	const answerUser = readlineSync.question('Your answer: ');

	const check = (number % 2 === 0) && (answerUser === 'yes');
	const check2 = (number % 2 !== 0) && (answerUser === 'no');

	if(check === true || check2 === true) {
		console.log('Correct!');
	}else {
		const opposite = (answerUser === 'yes' ? 'no' : 'yes');
		const errorMessage = console.log(`"${answerUser}" is wrong answer ;(. Correct answer was '${opposite}'. \nLet's try again, ${name}!`);
		return errorMessage;
	  }
	}
	console.log(`Congratulations, ${name}!`);
};

greeting();
