#!/usr/bin/env node
import readlineSync from 'readline-sync';


const brainPrime = () => {
	const isPrime = (num) => {
		if (num <= 1) {
			return false;
		}
		for (let i = 2; i < Math.sqrt(num); i += 1){
			if (num % i === 0) {
				return false;
			}
		}
		return true;
	}
	
	console.log('Welcome to the Brain Games!');
	const name = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${name}!`);
	console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

	let count = 0;
	while (count < 3) {
		const number = Math.floor(Math.random() * 100) + 1;
		console.log(`Question: ${number}`);
		const userAnswer = readlineSync.question('Your answer: ');
		
		if((isPrime(number) &&  userAnswer === 'yes') || (!isPrime(number) && answer === 'no')){
			console.log('Correct!');
			count++;
		}else{
			console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isPrime ? 'yes' : 'no'}'.`};
			console.log(`Let's try again, ${name}!`);
			return;
		}
	}
	console.log(`Congratulations, ${name}!`);
};

brainPrime();
