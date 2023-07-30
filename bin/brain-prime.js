#!/usr/bin/env node
import readlineSync from 'readline-sync';


const brainPrime = () => {
	
	console.log('Welcome to the Brain Games!');
	const name = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${name}!`);
	console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

	let count = 0;
	while (count < 3) {
		
		const number = Math.floor(Math.random() * 100) + 1;
		
		const numberPrime = (number) => {
                if (number <= 1) {
                        return false;
                }
                for (let i = 2; i < Math.sqrt(number); i += 1){
                        if (number % i === 0) {
                                return false;
                        }
                }
                return true;
	}
		const isPrime = numberPrime(number);
		console.log(`Question: ${number}`);
		const userAnswer = readlineSync.question('Your answer: ');
		
		if((numberPrime(number) &&  userAnswer === 'yes') || (!numberPrime(number) && userAnswer === 'no')){
			console.log('Correct!');
			count++;
		}else{
			console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isPrime ? 'yes' : 'no'}'.`);
			console.log(`Let's try again, ${name}!`);
			return;
		}
	}
	console.log(`Congratulations, ${name}!`);
};

brainPrime();
