#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomOperator = () =>{
	const operators = ['+', '-', '*'];
	const randomIndex = getRandomNumber(0, operators.length - 1);
	return operators[randomIndex];
};

const calculateExpression = (number1, number2, operator) =>{
	switch(operator){
		case '+':
			return number1 + number2;
		case '-':
			return number1 - number2;
		case '*':
			return number1 * number2;
		default:
			throw new Error(`Unknown operator: ${operator}`);
	}
};

const calculator = () =>{
	console.log('Welcome to the Brain Games!');
	
	const name = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${name}!`);
	console.log('What is the result of the expression?');
	let isCorrect = true;
	for (let i = 0; i < 3; i += 1){
		const number1 = getRandomNumber(1, 100);
		const number2 = getRandomNumber(1, 100);
		const operator = getRandomOperator();
		const question = `${number1} ${operator} ${number2}`;
		const correctAnswer = calculateExpression(number1, number2, operator);
		console.log(`Question: ${question}`);
		const userAnswer = readlineSync.question('Your answer: ');
	if(Number(userAnswer) !== correctAnswer) {
		console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
		console.log(`Let's try again, ${name}!`);
		isCorrect = false;
		break;
	   }
	console.log('Correct!');
	}
	if(isCorrect){
	console.log(`Congratulations, ${name}!`);
	}
};
calculator();
